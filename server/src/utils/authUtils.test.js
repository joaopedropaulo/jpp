const jwt = require('jsonwebtoken');
const config = require('config');
const signToken = require('./authUtils');

jest.mock('config', () => ({
  get: jest.fn(key => {
    if (key === 'jwtSecret') {
      return 'mocked-secret';
    } else if (key === 'tokenExpirationTime') {
      return 3600;
    }
  }),
}));

describe('authUtils tests', () => {
  it('should sign the token, given a payload', () => {
    const payload = {
      user: {
        id: 123
      }
    };

    const res = {
      json: jest.fn(),
    };

    jwt.sign = jest.fn((payload, secret, options, callback) => {
      callback(null, 'some-token');
    });

    const token = signToken(payload, res);

    expect(jwt.sign).toHaveBeenCalledWith(
      payload,
      'mocked-secret',
      { expiresIn: 3600 },
      expect.any(Function)
    );
    expect(res.json).toHaveBeenCalledWith({ token: 'some-token' });
  })

  it('should throw an error instead of signing the token', () => {
    const payload = {
      user: {
        id: 123
      }
    };

    const res = {
      json: jest.fn(),
    };

    jwt.sign = jest.fn((payload, secret, options, callback) => {
      callback(new Error('some-error'), null);
    });

    let error;
    try {
      signToken(payload, res);
    } catch (err) {
      error = err;
    }

    expect(jwt.sign).toHaveBeenCalledWith(
      payload,
      'mocked-secret',
      { expiresIn: 3600 },
      expect.any(Function)
    );
    expect(res.json).not.toHaveBeenCalled();
    expect(error).toBeInstanceOf(Error);
    expect(error.message).toBe('some-error');
  })
})

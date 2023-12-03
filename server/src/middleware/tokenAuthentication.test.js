const jwt = require('jsonwebtoken');
const config = require('config');
const tokenAuthentication = require('./tokenAuthentication');

jest.mock('config', () => ({
  get: jest.fn(key => {
    if (key === 'jwtSecret') {
      return 'mockedSecret';
    }
  }),
}));

const createMocks = () => {
  const req = {
    header: jest.fn(),
  };

  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  const next = jest.fn();

  return { req, res, next };
};

describe('tokenAuthentication tests', () => {
  it('should call next if token is valid', () => {
    const { req, res, next } = createMocks();
    req.header.mockReturnValue('Bearer validToken');

    jwt.verify = jest.fn(() => ({ user: 'mockedUser' }));

    tokenAuthentication(req, res, next);

    expect(req.header).toHaveBeenCalledWith('Authorization');
    expect(jwt.verify).toHaveBeenCalledWith('validToken', 'mockedSecret');
    expect(req.user).toBe('mockedUser');
    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });

  it('should return 401 if no token is provided', () => {
    const { req, res, next } = createMocks();
    req.header.mockReturnValue(undefined);

    jwt.verify = jest.fn();

    tokenAuthentication(req, res, next);

    expect(req.header).toHaveBeenCalledWith('Authorization');
    expect(jwt.verify).not.toHaveBeenCalled();
    expect(req.user).toBeUndefined();
    expect(next).not.toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ errors: [{ msg: 'No token, authorization denied.' }] });
  });

  it('should return 401 if token is not valid', () => {
    const { req, res, next } = createMocks();
    req.header.mockReturnValue('Bearer invalidToken');

    jwt.verify = jest.fn(() => {
      throw new Error('Invalid token');
    });

    tokenAuthentication(req, res, next);

    expect(req.header).toHaveBeenCalledWith('Authorization');
    expect(jwt.verify).toHaveBeenCalledWith('invalidToken', 'mockedSecret');
    expect(req.user).toBeUndefined();
    expect(next).not.toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ errors: [{ msg: 'Token is not valid.' }] });
  });
});

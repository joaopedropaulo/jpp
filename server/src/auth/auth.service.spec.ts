import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
// import { UsersModule } from 'src/users/users.module';
// import { JwtModule } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { getModelToken } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { User } from '../users/schemas/user.schema';

jest.mock('../users/users.service');
jest.mock('@nestjs/jwt');

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        UsersService,
        JwtService,
        {
          provide: getModelToken('User'),
          useValue: jest.fn(),
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should sign a token given a payload', async () => {
    const mockValidToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhZDllMWZlY2UxYzc2ODhlN2MwYjRlIn0sImlhdCI6MTcwNjg5NDE1MSwiZXhwIjoxNzA2OTMwMTUxfQ.PoyDx0dYZAbJSouLIBT1W_p9u9xdON9yy0cPleYvISk';

    const tokenPayload = {
      user: {
        id: 'some-id',
      },
    };
    jest
      .spyOn(JwtService.prototype, 'signAsync')
      .mockResolvedValue(mockValidToken);
    expect(await service.signToken(tokenPayload)).toEqual(mockValidToken);
  });

  //   it('should create a JWT token', async () => {
  //     const mockValidToken =
  //       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhZDllMWZlY2UxYzc2ODhlN2MwYjRlIn0sImlhdCI6MTcwNjg5NDE1MSwiZXhwIjoxNzA2OTMwMTUxfQ.PoyDx0dYZAbJSouLIBT1W_p9u9xdON9yy0cPleYvISk';
  //     const createTokenDto = {
  //       email: 'some-email@email.com',
  //       password: 'some-valid-password',
  //     };

  //     const userFound: User = {
  //       name: 'some-name',
  //       email: 'some-email@email.com',
  //       password: 'some-valid-password',
  //     };

  //     // jest
  //     //   .spyOn(UsersService.prototype, 'getUserByEmail')
  //     //   .mockResolvedValue(userFound);

  //     jest.spyOn(bcrypt, 'compare').mockImplementation(() => {
  //       return true;
  //     });

  //     jest
  //       .spyOn(JwtService.prototype, 'signAsync')
  //       .mockResolvedValue(mockValidToken);
  //   });
});

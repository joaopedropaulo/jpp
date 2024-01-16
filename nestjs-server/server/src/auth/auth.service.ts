import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';
import { UsersService } from 'src/users/users.service';
import { CreateTokenResponseDto } from './dtos/response/create-token-response.dto';
import { CreateTokenDto } from './dtos/request/create-token.dto';
import { InvalidCredentialsException } from './exceptions/invalid-credentials.exception';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,

    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  signToken(payload: Record<string, any>): string {
    return jwt.sign(payload, this.configService.get('jwtSecret'), {
      expiresIn: this.configService.get('tokenExpirationTime'),
    });
  }

  async createToken(payload: CreateTokenDto): Promise<CreateTokenResponseDto> {
    const userFound = await this.usersService.getUserByEmail(payload.email);
    if (!userFound) throw new InvalidCredentialsException();

    const arePasswordsMatch = await bcrypt.compare(
      payload.password,
      userFound.password,
    );
    if (!arePasswordsMatch) throw new InvalidCredentialsException();

    const tokenInput = {
      user: {
        id: userFound.id,
      },
    };
    return { token: this.signToken(tokenInput) };
  }
}

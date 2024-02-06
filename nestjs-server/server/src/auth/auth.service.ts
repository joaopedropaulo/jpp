import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { CreateTokenResponseDto } from './dtos/response/create-token-response.dto';
import { CreateTokenDto } from './dtos/request/create-token.dto';
import { UnauthorizedException } from './exceptions/unauthorized.exception';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,

    private readonly usersService: UsersService,

    private readonly jwtService: JwtService,
  ) {}

  signToken(payload: Record<string, any>): Promise<string> {
    return this.jwtService.signAsync(payload);
  }

  async createToken(payload: CreateTokenDto): Promise<CreateTokenResponseDto> {
    const userFound = await this.usersService.getUserByEmail(payload.email);
    if (!userFound) throw new UnauthorizedException();

    const arePasswordsMatch = await bcrypt.compare(
      payload.password,
      userFound.password,
    );
    if (!arePasswordsMatch) throw new UnauthorizedException();

    const tokenInput = {
      user: {
        id: userFound.id,
      },
    };
    return { token: await this.signToken(tokenInput) };
  }
}

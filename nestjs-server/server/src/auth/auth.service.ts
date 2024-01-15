import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(private readonly configService: ConfigService) {}

  signToken(payload: Record<string, any>): string {
    return jwt.sign(payload, this.configService.get('jwtSecret'), {
      expiresIn: this.configService.get('tokenExpirationTime'),
    });
  }
}

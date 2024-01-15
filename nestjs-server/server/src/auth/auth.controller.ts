import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateTokenDto } from './dtos/request/create-token.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  createToken(@Body() payload: CreateTokenDto): string {
    return this.authService.signToken(payload);
  }
}

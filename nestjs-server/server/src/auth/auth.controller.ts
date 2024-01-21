import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateTokenDto } from './dtos/request/create-token.dto';
import { CreateTokenResponseDto } from './dtos/response/create-token-response.dto';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @HttpCode(200)
  async createToken(
    @Body() payload: CreateTokenDto,
  ): Promise<CreateTokenResponseDto> {
    return this.authService.createToken(payload);
  }

  // example on using guards
  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}

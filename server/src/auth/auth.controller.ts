import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateTokenDto } from './dtos/request/create-token.dto';
import { CreateTokenResponseDto } from './dtos/response/create-token-response.dto';
import { AuthGuard } from './auth.guard';
import { RetrieveUserResponseDto } from './dtos/response/retrieve-user-response.dto';

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

  @Get('user')
  @UseGuards(AuthGuard)
  async getUser(@Req() request: any): Promise<RetrieveUserResponseDto> {
    return await this.authService.retrieveUserObj(request.user.user.id);
  }
}

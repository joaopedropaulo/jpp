import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfileResponseDto } from './dtos/response/profile-response.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateProfileRequestDto } from './dtos/request/create-profile-request.dto';

@Controller('profile')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Get()
  async getProfile(): Promise<ProfileResponseDto> {
    return this.profilesService.getProfile();
  }

  @Post()
  @UseGuards(AuthGuard)
  async create(
    @Req() request: any,
    @Body()
    profileDto: CreateProfileRequestDto,
  ): Promise<ProfileResponseDto> {
    return this.profilesService.create(request.user, profileDto);
  }
}

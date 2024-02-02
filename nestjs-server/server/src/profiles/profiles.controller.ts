import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfileResponseDto } from './dtos/response/profile-response.dto';
import { CreateProfileRequestDto } from './dtos/request/create-profile-request.dto';
import { UpdateProfileRequestDto } from './dtos/request/update-profile-request.dto';
import { AuthGuard } from 'src/auth/auth.guard';

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
    console.log(request.user);
    return this.profilesService.create(request.user, profileDto);
  }

  @Put()
  @UseGuards(AuthGuard)
  async update(
    @Body() profileDto: UpdateProfileRequestDto,
  ): Promise<ProfileResponseDto> {
    return this.profilesService.update(profileDto);
  }

  @Delete()
  @UseGuards(AuthGuard)
  async delete() {
    return this.profilesService.delete();
  }
}

import { Controller, Get } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfileGetDto } from './dtos/response/profile-get.dto';

@Controller('profile')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Get()
  async getProfile(): Promise<ProfileGetDto> {
    return this.profilesService.getProfile();
  }
}

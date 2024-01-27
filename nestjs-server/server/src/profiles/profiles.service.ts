import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';
import { AuthService } from 'src/auth/auth.service';
import { Profile } from './schemas/profile.schema';
import { ProfileGetDto } from './dtos/response/profile-get.dto';

@Injectable()
export class ProfilesService {
  constructor(
    private readonly configService: ConfigService,

    private readonly authService: AuthService,

    @InjectModel(Profile.name) private readonly profileModel: Model<Profile>,
  ) {}

  async getProfile(): Promise<ProfileGetDto> {
    const profile = await this.profileModel.findOne();
    return profile || {};
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';
import { AuthService } from 'src/auth/auth.service';
import { Profile } from './schemas/profile.schema';
import { ProfileResponseDto } from './dtos/response/profile-response.dto';
import { CreateProfileRequestDto } from './dtos/request/create-profile-request.dto';
import { ProfileAlreadyExistsException } from './exceptions/profile-already-exists.exception';

@Injectable()
export class ProfilesService {
  constructor(
    private readonly configService: ConfigService,

    private readonly authService: AuthService,

    @InjectModel(Profile.name) private readonly profileModel: Model<Profile>,
  ) {}

  async getProfile(): Promise<ProfileResponseDto> {
    const profile = await this.profileModel.findOne();
    return profile || {};
  }

  async create(
    user: string,
    profileDto: CreateProfileRequestDto,
  ): Promise<ProfileResponseDto> {
    const existingProfile = await this.profileModel.findOne();

    if (existingProfile) throw new ProfileAlreadyExistsException();
    const profileToCreate = {
      user,
      ...profileDto,
    };
    return await this.profileModel.create(profileToCreate);
  }
}

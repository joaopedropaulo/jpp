import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';
import { AuthService } from 'src/auth/auth.service';
import { Profile } from './schemas/profile.schema';
import { ProfileResponseDto } from './dtos/response/profile-response.dto';
import { CreateProfileRequestDto } from './dtos/request/create-profile-request.dto';
import { ProfileAlreadyExistsException } from './exceptions/profile-already-exists.exception';
import { UsersService } from 'src/users/users.service';
import { UpdateProfileRequestDto } from './dtos/request/update-profile-request.dto';

@Injectable()
export class ProfilesService {
  constructor(
    private readonly configService: ConfigService,

    private readonly authService: AuthService,

    private readonly usersService: UsersService,

    @InjectModel(Profile.name) private readonly profileModel: Model<Profile>,
  ) {}

  async getProfile(): Promise<ProfileResponseDto> {
    const profile = await this.profileModel.findOne();
    return profile || {};
  }

  async create(
    context,
    profileDto: CreateProfileRequestDto,
  ): Promise<ProfileResponseDto> {
    const existingProfile = await this.profileModel.findOne();

    if (existingProfile) throw new ProfileAlreadyExistsException();

    const user = await this.usersService.getUserById(context.user.id);
    const profileToCreate = {
      user: user._id,
      email: user.email,
      ...profileDto,
    };
    return await this.profileModel.create(profileToCreate);
  }

  async update(
    profileDto: UpdateProfileRequestDto,
  ): Promise<ProfileResponseDto> {
    return await this.profileModel.findOneAndUpdate(
      {},
      {
        $set: profileDto,
      },
      { new: true },
    );
  }

  async delete() {
    return await this.profileModel.deleteOne();
  }
}

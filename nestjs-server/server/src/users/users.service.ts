import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CreateUserDto } from './dtos/request/create-user.dto';
import { CreateUserResponseDto } from './dtos/response/create-user-response.dto';
import { User } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { AuthService } from 'src/auth/auth.service';
import { UserAlreadyExistsException } from './exceptions/user-already-exists.exception';

@Injectable()
export class UsersService {
  constructor(
    private readonly configService: ConfigService,

    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,

    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async createUser(
    createUserDto: CreateUserDto,
  ): Promise<CreateUserResponseDto> {
    const result = await this.userModel.findOne();
    if (result) {
      throw new UserAlreadyExistsException();
    }

    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      this.configService.get('hashSaltRounds'),
    );

    const createdUser = await this.userModel.create({
      ...createUserDto,
      password: hashedPassword,
    });

    const payload = {
      user: {
        id: createdUser.id,
      },
    };

    return { token: this.authService.signToken(payload) };
  }

  async getUserByEmail(email: string) {
    return await this.userModel.findOne({ email });
  }
}

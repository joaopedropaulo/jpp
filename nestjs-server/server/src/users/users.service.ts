import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/request/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { UserAlreadyExistsException } from './exceptions/user-already-exists.exception';

@Injectable()
export class UsersService {
  constructor(
    private readonly configService: ConfigService,

    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const result = await this.userModel.findOne();
    if (result) {
      throw new UserAlreadyExistsException();
    }

    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      this.configService.get('hashSaltRounds'),
    );

    await this.userModel.create({
      ...createUserDto,
      password: hashedPassword,
    });
  }

  async getUserByEmail(email: string) {
    return await this.userModel.findOne({ email });
  }

  async getUserById(id: string): Promise<UserDocument> {
    return await this.userModel.findById(id);
  }
}

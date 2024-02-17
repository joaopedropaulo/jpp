import { IsEmail, IsString } from 'class-validator';

export class CreateTokenDto {
  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;
}

import { IsOptional, IsString } from 'class-validator';

export class CreateSocialRequestDto {
  @IsString()
  @IsOptional()
  readonly youtube?: string;

  @IsString()
  @IsOptional()
  readonly twitter?: string;

  @IsString()
  @IsOptional()
  readonly facebook?: string;

  @IsString()
  @IsOptional()
  readonly linkedin?: string;

  @IsString()
  @IsOptional()
  readonly instagram?: string;

  @IsString()
  @IsOptional()
  readonly github?: string;
}

import { IsOptional, IsString } from 'class-validator';

export class SocialRequestDto {
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

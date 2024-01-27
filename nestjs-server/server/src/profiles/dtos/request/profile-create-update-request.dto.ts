import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class ProfileCreateUpdateRequestDto {
  @IsString()
  @IsOptional()
  readonly currentCompany?: string;

  @IsString()
  @IsOptional()
  readonly location?: string;

  @IsString()
  @IsOptional()
  readonly currentJobTitle?: string;

  @IsString()
  @IsOptional()
  readonly email?: string;

  @IsString()
  @IsOptional()
  readonly profilePicURL?: string;

  @IsString()
  @IsOptional()
  readonly profileBackgroundImageUrl?: string;

  @IsString()
  @IsOptional()
  readonly profileMobileBackgroundImageUrl?: string;

  @IsString()
  @IsOptional()
  readonly profileLargeBackgroundImageUrl?: string;

  @IsArray()
  @IsOptional()
  readonly professionalInterests?: string[];

  @IsArray()
  @IsOptional()
  readonly personalInterests?: string[];

  @IsString()
  @IsOptional()
  readonly bio?: string;

  @IsString()
  @IsOptional()
  readonly generateResumeUrl?: string;

  @IsString()
  @IsOptional()
  readonly resumeHtmlTemplate?: string;

  @IsString()
  @IsOptional()
  readonly displayTitleName?: string;
}
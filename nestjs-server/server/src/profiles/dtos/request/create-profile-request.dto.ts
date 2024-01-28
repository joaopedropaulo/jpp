import { IsArray, IsOptional, IsString } from 'class-validator';
import { CreateEducationRequestDto } from './create-education-request.dto';
import { CreateExperienceRequestDto } from './create-experience-request.dto';
import { CreateSkillRequestDto } from './create-skill-request.dto';
import { CreateLanguageRequestDto } from './create-language-request.dto';
import { CreateSocialRequestDto } from './create-social-request.dto';
import { CreateGenericSectionRequestDto } from './create-generic-section-request.dto';

export class CreateProfileRequestDto {
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

  @IsArray()
  @IsOptional()
  readonly skills?: CreateSkillRequestDto[];

  @IsArray()
  @IsOptional()
  readonly languages?: CreateLanguageRequestDto[];

  @IsString()
  @IsOptional()
  readonly bio?: string;

  @IsArray()
  @IsOptional()
  readonly experience?: CreateExperienceRequestDto[];

  @IsArray()
  @IsOptional()
  readonly education?: CreateEducationRequestDto[];

  @IsOptional()
  readonly social?: CreateSocialRequestDto;

  @IsArray()
  @IsOptional()
  readonly genericSections?: CreateGenericSectionRequestDto[];

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

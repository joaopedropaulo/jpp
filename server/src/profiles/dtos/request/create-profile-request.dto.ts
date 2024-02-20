import { IsArray, IsOptional, IsString } from 'class-validator';
import { EducationRequestDto } from './education-request.dto';
import { ExperienceRequestDto } from './experience-request.dto';
import { SkillRequestDto } from './skill-request.dto';
import { LanguageRequestDto } from './language-request.dto';
import { SocialRequestDto } from './social-request.dto';
import { GenericSectionRequestDto } from './generic-section-request.dto';

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
  readonly profilePicUrl?: string;

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
  readonly skills?: SkillRequestDto[];

  @IsArray()
  @IsOptional()
  readonly languages?: LanguageRequestDto[];

  @IsString()
  @IsOptional()
  readonly bio?: string;

  @IsArray()
  @IsOptional()
  readonly experience?: ExperienceRequestDto[];

  @IsArray()
  @IsOptional()
  readonly education?: EducationRequestDto[];

  @IsOptional()
  readonly social?: SocialRequestDto;

  @IsArray()
  @IsOptional()
  readonly genericSections?: GenericSectionRequestDto[];

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

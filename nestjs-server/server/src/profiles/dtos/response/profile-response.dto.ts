import { EducationResponseDto } from './education-response.dto';
import { ExperienceResponseDto } from './experience-response.dto';
import { GenericSectionResponseDto } from './generic-section-response.dto';
import { LanguageResponseDto } from './language-response.dto';
import { SkillResponseDto } from './skill-response.dto';
import { SocialResponseDto } from './social-response.dto';

export class ProfileResponseDto {
  readonly currentCompany?: string;
  readonly location?: string;
  readonly currentJobTitle?: string;
  readonly email?: string;
  readonly profilePicUrl?: string;
  readonly profileBackgroundImageUrl?: string;
  readonly profileMobileBackgroundImageUrl?: string;
  readonly profileLargeBackgroundImageUrl?: string;
  readonly professionalInterests?: string[];
  readonly personalInterests?: string[];
  readonly skills?: SkillResponseDto[];
  readonly languages?: LanguageResponseDto[];
  readonly bio?: string;
  readonly experience?: ExperienceResponseDto[];
  readonly education?: EducationResponseDto[];
  readonly social?: SocialResponseDto;
  readonly genericSections?: GenericSectionResponseDto[];
  readonly generateResumeUrl?: string;
  readonly resumeHtmlTemplate?: string;
  readonly displayTitleName?: string;
}

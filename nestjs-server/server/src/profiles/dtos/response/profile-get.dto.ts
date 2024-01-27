import { EducationGetDto } from "./education-get.dto";
import { ExperienceGetDto } from "./experience-get.dto";
import { GenericSectionGetDto } from "./generic-section-get.dto";
import { LanguageGetDto } from "./language-get.dto";
import { SkillGetDto } from "./skill-get.dto";
import { SocialGetDto } from "./social-get.dto";

export class ProfileGetDto {
  readonly currentCompany?: string;
  readonly location?: string;
  readonly currentJobTitle?: string;
  readonly email?: string;
  readonly profilePicURL?: string;
  readonly profileBackgroundImageUrl?: string;
  readonly profileMobileBackgroundImageUrl?: string;
  readonly profileLargeBackgroundImageUrl?: string;
  readonly professionalInterests?: string[];
  readonly personalInterests?: string[];
  readonly skills?: SkillGetDto[];
  readonly languages?: LanguageGetDto[];
  readonly bio?: string;
  readonly experience?: ExperienceGetDto[];
  readonly education?: EducationGetDto[];
  readonly social?: SocialGetDto;
  readonly genericSections?: GenericSectionGetDto[];
  readonly generateResumeUrl?: string;
  readonly resumeHtmlTemplate?: string;
  readonly displayTitleName?: string;
}
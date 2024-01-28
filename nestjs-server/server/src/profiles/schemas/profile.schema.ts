import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Skill, SkillSchema } from './skill.schema';
import { Language, LanguageSchema } from './language.schema';
import { Experience, ExperienceSchema } from './experience.schema';
import { Education, EducationSchema } from './education.schema';
import { Social, SocialSchema } from './social.schema';
import { GenericSection, GenericSectionSchema } from './generic-section.schema';
import { User } from 'src/users/schemas/user.schema';

export type ProfileDocument = HydratedDocument<Profile>;

@Schema()
export class Profile {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop()
  currentCompany: string;

  @Prop()
  location: string;

  @Prop()
  currentJobTitle: string;

  @Prop()
  email: string;

  @Prop()
  profilePicUrl: string;

  @Prop()
  profileBackgroundImageUrl: string;

  @Prop()
  profileMobileBackgroundImageUrl: string;

  @Prop()
  profileLargeBackgroundImageUrl: string;

  @Prop()
  professionalInterests: string[];

  @Prop()
  personalInterests: string[];

  @Prop({ type: SkillSchema })
  skills: Skill[];

  @Prop({ type: LanguageSchema })
  languages: Language[];

  @Prop()
  bio: string;

  @Prop({ type: ExperienceSchema })
  experience: Experience[];

  @Prop({ type: EducationSchema })
  education: Education[];

  @Prop({ type: SocialSchema })
  social: Social;

  @Prop({ type: GenericSectionSchema })
  genericSections: GenericSection[];

  @Prop()
  generateResumeUrl: string;

  @Prop()
  resumeHtmlTemplate: string;

  @Prop()
  displayTitleName: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);

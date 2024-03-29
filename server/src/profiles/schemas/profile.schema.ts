import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Skill } from './skill.schema';
import { Language } from './language.schema';
import { Experience } from './experience.schema';
import { Education } from './education.schema';
import { Social } from './social.schema';
import { GenericSection } from './generic-section.schema';
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

  @Prop({ type: [Skill] })
  skills: Skill[];

  @Prop({ type: [Language] })
  languages: Language[];

  @Prop()
  bio: string;

  @Prop({ type: [Experience] })
  experience: Experience[];

  @Prop({ type: [Education] })
  education: Education[];

  @Prop({ type: Social })
  social: Social;

  @Prop({ type: [GenericSection] })
  genericSections: GenericSection[];

  @Prop()
  generateResumeUrl: string;

  @Prop()
  resumeHtmlTemplate: string;

  @Prop()
  displayTitleName: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);

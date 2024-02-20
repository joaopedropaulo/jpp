import { Prop, Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ExperienceDocument = HydratedDocument<Experience>;

@Schema()
export class Experience {
  @Prop({ required: true })
  jobTitle: string;

  @Prop({ required: true })
  company: string;

  @Prop()
  companyIcon: string;

  @Prop()
  location: string;

  @Prop({ required: true })
  from: Date;

  @Prop()
  to: Date;

  @Prop({ required: true, default: false })
  current: boolean;

  @Prop()
  description: string;
}

import { Prop, Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SkillDocument = HydratedDocument<Skill>;

@Schema()
export class Skill {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  experienceLevel: number;
}

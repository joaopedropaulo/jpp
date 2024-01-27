import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SkillDocument = HydratedDocument<Skill>;

@Schema()
export class Skill {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  experienceLevel: number;
}

export const SkillSchema = SchemaFactory.createForClass(Skill);

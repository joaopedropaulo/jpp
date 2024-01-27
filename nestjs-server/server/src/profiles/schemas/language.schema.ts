import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SkillDocument = HydratedDocument<Language>;

@Schema()
export class Language {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  level: number;
}

export const LanguageSchema = SchemaFactory.createForClass(Language);

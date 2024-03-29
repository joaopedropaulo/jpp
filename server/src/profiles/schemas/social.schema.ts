import { Prop, Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SocialDocument = HydratedDocument<Social>;

@Schema()
export class Social {
  @Prop()
  youtube: string;

  @Prop()
  twitter: string;

  @Prop()
  facebook: string;

  @Prop()
  linkedin: string;

  @Prop()
  instagram: string;

  @Prop()
  github: string;
}

import { Prop, Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type GenericSectionDocument = HydratedDocument<GenericSection>;

@Schema()
export class GenericSection {
  @Prop({ required: true })
  title: string;

  @Prop()
  subtitle: string;

  @Prop({ required: true })
  body: string;

  @Prop()
  media: [
    {
      mediaType: string;
      contentUrl: string;
      description: string;
    },
  ];
}

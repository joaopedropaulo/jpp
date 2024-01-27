import { GenericSectionMediaGetDto } from "./generic-section-media-get.dto";

export class GenericSectionGetDto {
  readonly title: string;
  readonly subtitle?: string;
  readonly body: string;
  readonly media?: GenericSectionMediaGetDto[];
}

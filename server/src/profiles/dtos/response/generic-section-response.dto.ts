import { GenericSectionMediaDto } from '../common/generic-section-media.dto';

export class GenericSectionResponseDto {
  readonly title: string;
  readonly subtitle?: string;
  readonly body: string;
  readonly media?: GenericSectionMediaDto[];
}

import { GenericSectionMediaResponseDto } from './generic-section-media-response.dto';

export class GenericSectionResponseDto {
  readonly title: string;
  readonly subtitle?: string;
  readonly body: string;
  readonly media?: GenericSectionMediaResponseDto[];
}

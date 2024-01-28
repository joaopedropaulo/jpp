import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { GenericSectionMediaDto } from './generic-section-media.dto';

export class CreateGenericSectionRequestDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsOptional()
  readonly subtitle?: string;

  @IsString()
  @IsNotEmpty()
  readonly body: string;

  @IsArray()
  @IsOptional()
  readonly media?: GenericSectionMediaDto[];
}

import { IsOptional, IsString } from 'class-validator';

export class GenericSectionMediaDto {
  @IsString()
  @IsOptional()
  readonly mediaType?: string;

  @IsString()
  @IsOptional()
  readonly contentUrl?: string;

  @IsString()
  @IsOptional()
  readonly description?: string;
}

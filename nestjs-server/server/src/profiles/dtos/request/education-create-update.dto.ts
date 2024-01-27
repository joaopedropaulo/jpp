import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class EducationCreateUpdateDto {
  @IsString()
  @IsNotEmpty()
  readonly school: string;

  @IsString()
  @IsNotEmpty()
  readonly degree: string;

  @IsString()
  @IsNotEmpty()
  readonly fieldOfStudy: string;

  @IsDate()
  readonly from: Date;

  @IsDate()
  @IsOptional()
  readonly to?: Date;

  @IsBoolean()
  readonly current: boolean;

  @IsString()
  @IsOptional()
  readonly description?: string;
}

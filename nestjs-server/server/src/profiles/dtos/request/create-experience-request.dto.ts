import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateExperienceRequestDto {
  @IsString()
  @IsNotEmpty()
  readonly jobTitle: string;

  @IsString()
  @IsNotEmpty()
  readonly company: string;

  @IsString()
  @IsOptional()
  readonly companyIcon?: string;

  @IsString()
  @IsOptional()
  readonly location?: string;

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

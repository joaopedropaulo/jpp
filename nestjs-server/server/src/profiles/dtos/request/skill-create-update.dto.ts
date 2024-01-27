import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SkillCreateUpdateDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  @IsNotEmpty()
  readonly experienceLevel: number;
}

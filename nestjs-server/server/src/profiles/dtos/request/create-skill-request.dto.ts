import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSkillRequestDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  @IsNotEmpty()
  readonly experienceLevel: number;
}

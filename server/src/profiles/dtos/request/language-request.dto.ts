import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class LanguageRequestDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  @IsNotEmpty()
  readonly level: number;
}

import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateLanguageRequestDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  @IsNotEmpty()
  readonly level: number;
}

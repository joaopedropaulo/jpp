import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class LanguageCreateUpdateDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsNumber()
    @IsNotEmpty()
    readonly level: number;
}
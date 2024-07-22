import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateGameDto {
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsOptional()
    description: string;

    @IsString()
    @IsOptional()
    image: string;
}

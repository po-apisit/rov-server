import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateSpellDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    image: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsOptional()
    @IsDate()
    createdAt: Date;

    @IsOptional()
    @IsDate()
    updatedAt: Date;
}

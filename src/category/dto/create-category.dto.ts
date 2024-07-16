import { IsDate, IsNotEmpty, IsObject, IsOptional, IsString } from "class-validator";

export class CreateCategoryDto {
    @IsNotEmpty()
    @IsString()
    name:string;

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

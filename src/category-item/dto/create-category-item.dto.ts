import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCategoryItemDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsDate()
    @IsOptional()
    createdAt: Date;

    @IsDate()
    @IsOptional()
    updatedAt: Date;
}

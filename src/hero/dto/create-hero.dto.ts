import { IsDate, IsMongoId, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Types } from "mongoose";

export class CreateHeroDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    aliases: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsString()
    @IsOptional()
    story: string;

    @IsString()
    @IsOptional()
    image: string;

    @IsString()
    @IsOptional()
    image_cover: string;

    @IsMongoId()
    @IsOptional()
    categoryId: string;

    @IsOptional()
    skills: string[];

    @IsMongoId()
    @IsOptional()
    itemsId: string[];

    @IsString()
    @IsNotEmpty()
    public: "private" | "public";
}

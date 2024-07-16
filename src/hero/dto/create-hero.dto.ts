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
    image: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsString()
    @IsOptional()
    story: string;

    @IsMongoId()
    @IsOptional()
    categoryId: string;

    @IsOptional()
    skills: Types.ObjectId[];

    @IsMongoId()
    @IsOptional()
    itemsId: string[];

    @IsDate()
    createdAt: Date;

    @IsDate()
    updatedAt: Date;
}

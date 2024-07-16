import { IsDate, IsMongoId, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Types } from "mongoose";

export class CreateItemDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    image: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsMongoId()
    @IsOptional()
    categoryId: Types.ObjectId;

    @IsOptional()
    @IsDate()
    createdAt: Date;

    @IsOptional()
    @IsDate()
    updatedAt: Date;
}

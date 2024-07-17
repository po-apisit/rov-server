import { IsDate, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateSkillDto {
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsOptional()
    description: string;

    @IsString()
    @IsOptional()
    image:string;

    @IsNumber()
    @IsNotEmpty()
    _index: number;

    @IsNotEmpty()
    @IsMongoId()
    heroId: string;

    @IsOptional()
    @IsDate()
    createdAt: Date;

    @IsOptional()
    @IsDate()
    updatedAt: Date;
}

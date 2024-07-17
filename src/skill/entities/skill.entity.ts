import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type SkillDocument = HydratedDocument<Skill>;


@Schema({ timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } })
export class Skill {
    @Prop({ unique:true, required: true })
    name:string;

    @Prop({ required: false })
    description: string;

    @Prop({ required: false })
    image:string;

    @Prop({ required: true })
    _index: number;

    @Prop({ required: true })
    heroId: string;

    @Prop({ default: Date.now })
    createdAt: Date;

    @Prop({ default: Date.now })
    updatedAt: Date;
}

export const SkillShema = SchemaFactory.createForClass(Skill);

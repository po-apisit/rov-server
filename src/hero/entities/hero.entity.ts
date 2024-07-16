import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type HeroDocument = HydratedDocument<Hero>;

@Schema({ timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } })
export class Hero {
    @Prop({ required: true, unique: true })
    name: string;

    @Prop({ required: false })
    aliases: string;

    @Prop({ required: false })
    image: string;

    @Prop({ required: false })
    description: string;

    @Prop({ required: false })
    story: string;

    @Prop({ required: false })
    categoryId: string;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'skill' }], default: [] })
    skills: Types.ObjectId[];

    @Prop({ default: [] })
    itemsId: string[];

    @Prop({ default: Date.now })
    createdAt: Date;

    @Prop({ default: Date.now })
    updatedAt: Date;
}

export const HeroSchema = SchemaFactory.createForClass(Hero);

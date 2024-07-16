import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type SpellDocument = HydratedDocument<Spell>;

@Schema({ timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } })
export class Spell {
    @Prop({ required: true, unique: true })
    name: string;

    @Prop({ required: false })
    image: string;

    @Prop({ required: false })
    description: string;

    @Prop({ default : Date.now })
    createdAt: Date;

    @Prop({ default : Date.now })
    updatedAt: Date;
}

export const SpellSchema = SchemaFactory.createForClass(Spell);

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type GameDocument = HydratedDocument<Game>;

@Schema({ timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } })
export class Game {
    @Prop({ required: true, unique: true })
    name:string;

    @Prop({ required: false })
    description: string;

    @Prop({ required: false })
    image: string;

    @Prop({ default : Date.now })
    createdAt: Date;

    @Prop({ default : Date.now })
    updatedAt: Date;
}

export const GameSchema = SchemaFactory.createForClass(Game);

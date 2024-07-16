import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CategoryDocument = HydratedDocument<Category>;

@Schema({ timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } })
export class Category {
    @Prop({ required: true, unique: true })
    name:string;

    @Prop({ required: false })
    description: string;

    @Prop({ default : Date.now })
    createdAt: Date;

    @Prop({ default : Date.now })
    updatedAt: Date;
}

export const CategorySchema = SchemaFactory.createForClass(Category);

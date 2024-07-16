import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type ItemDocument = HydratedDocument<Item>;

@Schema({ timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } })
export class Item {

    @Prop({ required: true, unique: true })
    name: string;

    @Prop({ required: false })
    image: string;

    @Prop({ required: false })
    description: string;

    @Prop({ type: Types.ObjectId, ref: "CategoryItem" })
    categoryId: Types.ObjectId;

    @Prop({ default : Date.now })
    createdAt: Date;

    @Prop({ default : Date.now })
    updatedAt: Date;
}

export const ItemSchema = SchemaFactory.createForClass(Item);

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Item, ItemDocument } from './entities/item.entity';
import { Model } from 'mongoose';

@Injectable()
export class ItemService {
  constructor(@InjectModel( Item.name ) private itemModel: Model<ItemDocument>){}

  async create(createItemDto: CreateItemDto) : Promise<Item> {
    const category = await new this.itemModel(createItemDto);
    return category.save();
  }

  async findAll() : Promise<Item[]> {
    return await this.itemModel.find().populate("categoryId").exec();
  }

  async findOne(id: string) : Promise<Item> {
    return await this.itemModel.findById(id).populate("categoryId").exec();
  }

  async update(id: string, updateItemDto: UpdateItemDto) : Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, updateItemDto).populate("categoryId").exec();
  }

  async remove(id: string) : Promise<string> {
    const categorie = await this.itemModel.findByIdAndDelete(id).exec();
    if(!categorie){
      throw new NotFoundException("id invalid");
    }
    return `delete success`;
  }
}

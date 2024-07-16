import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryItemDto } from './dto/create-category-item.dto';
import { UpdateCategoryItemDto } from './dto/update-category-item.dto';
import { InjectModel } from '@nestjs/mongoose';
import { CategoryItem, CategoryItemDocument } from './entities/category-item.entity';
import { Model } from 'mongoose';

@Injectable()
export class CategoryItemService {

  constructor(@InjectModel( CategoryItem.name ) private categoryModel: Model<CategoryItemDocument>){}

  async create(createCategoryDto: CreateCategoryItemDto) : Promise<CategoryItem> {
    const category = await new this.categoryModel(createCategoryDto);
    return category.save();
  }

  async findAll() : Promise<CategoryItem[]> {
    return await this.categoryModel.find().exec();
  }

  async findOne(id: string) : Promise<CategoryItem> {
    return await this.categoryModel.findById(id).exec();
  }

  async update(id: string, updateCategoryDto: UpdateCategoryItemDto) : Promise<CategoryItem> {
    return await this.categoryModel.findByIdAndUpdate(id, updateCategoryDto).exec();
  }

  async remove(id: string) : Promise<string> {
    const categorie = await this.categoryModel.findByIdAndDelete(id).exec();
    if(!categorie){
      throw new NotFoundException("id invalid");
    }
    return `delete success`;
  }

}

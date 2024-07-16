import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from './entities/category.entity';
import { Model } from 'mongoose';

@Injectable()
export class CategoryService {

  constructor(@InjectModel( Category.name ) private categoryModel: Model<CategoryDocument>){}

  async create(createCategoryDto: CreateCategoryDto) : Promise<Category> {
    const category = await new this.categoryModel(createCategoryDto);
    return category.save();
  }

  async findAll() : Promise<Category[]> {
    return await this.categoryModel.find().exec();
  }

  async findOne(id: string) : Promise<Category> {
    return await this.categoryModel.findById(id).exec();
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) : Promise<Category> {
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

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Hero } from './entities/hero.entity';
import { Model } from 'mongoose';

@Injectable()
export class HeroService {

  constructor(@InjectModel(Hero.name) private heroModel: Model<Hero> ){}

  async create(createHeroDto: CreateHeroDto) : Promise<Hero> {
    const hero = await new this.heroModel(createHeroDto);
    return hero.save();
  }

  async findAll() : Promise<Hero[]> {
    return await this.heroModel.find().populate("skills").exec();
  }

  async findcategory(category: string) : Promise<Hero[]> {
    return await this.heroModel.find({ categoryId: category }).populate("skills").exec();
  }

  async findOne(id: string) : Promise<Hero> {
    return await this.heroModel.findById(id).populate("skills").exec();
  }

  async update(id: string, updateHeroDto: UpdateHeroDto) : Promise<Hero> {
    return await this.heroModel.findByIdAndUpdate(id, updateHeroDto).populate("skills").exec();
  }

  async remove(id: string) : Promise<string> {
    const hero = await this.heroModel.findByIdAndDelete(id).exec();
    if(!hero){
      throw new NotFoundException("id invalid");
    }
    return `delete success`;
  }
}

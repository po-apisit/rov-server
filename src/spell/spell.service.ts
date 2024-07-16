import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSpellDto } from './dto/create-spell.dto';
import { UpdateSpellDto } from './dto/update-spell.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Spell, SpellDocument } from './entities/spell.entity';
import { Model } from 'mongoose';

@Injectable()
export class SpellService {

  constructor( @InjectModel( Spell.name ) private spellModel: Model<SpellDocument> ){}

  async create(createCategoryDto: CreateSpellDto) : Promise<Spell> {
    const category = await new this.spellModel(createCategoryDto);
    return category.save();
  }

  async findAll() : Promise<Spell[]> {
    return await this.spellModel.find().exec();
  }

  async findOne(id: string) : Promise<Spell> {
    return await this.spellModel.findById(id).exec();
  }

  async update(id: string, updateCategoryDto: UpdateSpellDto) : Promise<Spell> {
    return await this.spellModel.findByIdAndUpdate(id, updateCategoryDto).exec();
  }

  async remove(id: string) : Promise<string> {
    const categorie = await this.spellModel.findByIdAndDelete(id).exec();
    if(!categorie){
      throw new NotFoundException("id invalid");
    }
    return `delete success`;
  }
  
}

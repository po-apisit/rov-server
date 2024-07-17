import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Skill, SkillDocument } from './entities/skill.entity';
import { Model } from 'mongoose';

@Injectable()
export class SkillService {

  constructor(@InjectModel(Skill.name) private skillModel:Model<SkillDocument> ){}

  async create(createSkillDto: CreateSkillDto) : Promise<Skill> {
    const skill = await new this.skillModel(createSkillDto);
    return await skill.save();
  }

  async findAll() : Promise<Skill[]>  {
    return await this.skillModel.find().exec() ;
  }

  async findByHeroId(heroId:string) : Promise<Skill[]>  {
    return await this.skillModel.find({ heroId }).exec();
  }

  async findOne(id: string) : Promise<Skill> {
    return await this.skillModel.findById(id).exec();
  }

  async update(id: string, updateSkillDto: UpdateSkillDto) : Promise<Skill> {
    return await this.skillModel.findByIdAndUpdate(id, updateSkillDto).exec();
  }

  async remove(id: string) : Promise<string> {
    const skill = await this.skillModel.findByIdAndDelete(id).exec();
    if(!skill){
      throw new NotFoundException("id invalid");
    }
    return `delete success`;
  }
}

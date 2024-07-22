import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Game, GameDocument } from './entities/game.entity';
import { Model } from 'mongoose';

@Injectable()
export class GameService {

  constructor(@InjectModel(Game.name) private gameModel: Model<GameDocument> ){}

   async create(createGameDto: CreateGameDto): Promise<Game> {
    const game = await new this.gameModel(createGameDto);
    return await game.save();
  }

  async findAll() : Promise<Game[]> {
    return await this.gameModel.find().exec();
  }

  async findOne(id: string) : Promise<Game> {
    return await this.gameModel.findById(id).exec();
  }

  async update(id: string, updateGameDto: UpdateGameDto) : Promise<Game>{
    return await this.gameModel.findByIdAndUpdate(id, updateGameDto).exec();
  }

  async remove(id: string) : Promise<string> {
    const game = await this.gameModel.findByIdAndDelete(id).exec();
    if(!game){
      throw new NotFoundException("id invalid");
    }
    return `delete success`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateRuneDto } from './dto/create-rune.dto';
import { UpdateRuneDto } from './dto/update-rune.dto';

@Injectable()
export class RuneService {
  create(createRuneDto: CreateRuneDto) {
    return 'This action adds a new rune';
  }

  findAll() {
    return `This action returns all rune`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rune`;
  }

  update(id: number, updateRuneDto: UpdateRuneDto) {
    return `This action updates a #${id} rune`;
  }

  remove(id: number) {
    return `This action removes a #${id} rune`;
  }
}

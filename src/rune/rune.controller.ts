import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RuneService } from './rune.service';
import { CreateRuneDto } from './dto/create-rune.dto';
import { UpdateRuneDto } from './dto/update-rune.dto';

@Controller('rune')
export class RuneController {
  constructor(private readonly runeService: RuneService) {}

  @Post()
  create(@Body() createRuneDto: CreateRuneDto) {
    return this.runeService.create(createRuneDto);
  }

  @Get()
  findAll() {
    return this.runeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.runeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRuneDto: UpdateRuneDto) {
    return this.runeService.update(+id, updateRuneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.runeService.remove(+id);
  }
}

import { Module } from '@nestjs/common';
import { RuneService } from './rune.service';
import { RuneController } from './rune.controller';

@Module({
  controllers: [RuneController],
  providers: [RuneService],
})
export class RuneModule {}

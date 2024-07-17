import { Module } from '@nestjs/common';
import { SkillService } from './skill.service';
import { SkillController } from './skill.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Skill, SkillShema } from './entities/skill.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Skill.name, schema:SkillShema }])],
  controllers: [SkillController],
  providers: [SkillService],
})
export class SkillModule {}

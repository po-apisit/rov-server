import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroModule } from './hero/hero.module';
import { ItemModule } from './item/item.module';
import { RuneModule } from './rune/rune.module';
import { SpellModule } from './spell/spell.module';
import { CategoryModule } from './category/category.module';
import { CategoryItemModule } from './category-item/category-item.module';
import { SkillModule } from './skill/skill.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.CONNECTION_STRING),
    HeroModule,
    ItemModule,
    RuneModule,
    SpellModule,
    CategoryModule,
    CategoryItemModule,
    SkillModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

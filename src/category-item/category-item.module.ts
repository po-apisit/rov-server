import { Module } from '@nestjs/common';
import { CategoryItemService } from './category-item.service';
import { CategoryItemController } from './category-item.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryItem } from './entities/category-item.entity';
import { CategorySchema } from 'src/category/entities/category.entity';

@Module({
  imports:[MongooseModule.forFeature([{ name: CategoryItem.name, schema: CategorySchema }])],
  controllers: [CategoryItemController],
  providers: [CategoryItemService],
})
export class CategoryItemModule {}

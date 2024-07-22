import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, NotFoundException } from '@nestjs/common';
import { HeroService } from './hero.service';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { unlink } from 'fs/promises'; // เพิ่มส่วนนี้เพื่อใช้ฟังก์ชันลบไฟล์

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Post()
  create(@Body() createHeroDto: CreateHeroDto) {
    return this.heroService.create(createHeroDto);
  }

  @Get()
  findAll() {
    return this.heroService.findAllAdmin();
  }

  @Get("admin")
  findAdmin() {
    return this.heroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.heroService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHeroDto: UpdateHeroDto) {
    return this.heroService.update(id, updateHeroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.heroService.remove(id);
  }



  @Post('upload_image/:id')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './public/rov',
        filename: (req, file, callback) => {
          const id = req.params.id; // ดึง ID จาก request parameters
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `/${id}/gallary/${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  async uploadFileImage(@Param('id') id: string, @UploadedFile() file: Express.Multer.File) {
    const response = await this.heroService.findOne(id);
    if(response){
      // ลบไฟล์เก่าถ้ามี
      if (response.image) {
        const oldFilePath = `.${response.image}`; // เพิ่ม '.' เพื่อให้เป็น path แบบสัมพัทธ์
        try {
          await unlink(oldFilePath); // ลบไฟล์เก่า
        } catch (error) {
          console.error(`Error deleting file: ${oldFilePath}`, error);
        }
      }
      response.image = `/public/rov/hero/${file.filename}`;

      const _newHero:UpdateHeroDto = {
        name: response.name,
        aliases: response.aliases,
        description: response.description,
        story: response.story,
        image: response.image,
        image_cover: response.image_cover,
        categoryId: response.categoryId,
        skills: response.skills,
        public: response.public
      }
      await this.heroService.update(id, _newHero);
      return response;
    }
    throw new NotFoundException("Invalid Id");
  }


  @Post('upload_image_cover/:id')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './public/rov',
        filename: (req, file, callback) => {
          const id = req.params.id; // ดึง ID จาก request parameters
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `/${id}/gallary/${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  async uploadFileImageCover(@Param('id') id: string, @UploadedFile() file: Express.Multer.File) {
    const response = await this.heroService.findOne(id);
    if(response){
      // ลบไฟล์เก่าถ้ามี
      if (response.image_cover) {
        const oldFilePath = `.${response.image_cover}`; // เพิ่ม '.' เพื่อให้เป็น path แบบสัมพัทธ์
        try {
          await unlink(oldFilePath); // ลบไฟล์เก่า
        } catch (error) {
          console.error(`Error deleting file: ${oldFilePath}`, error);
        }
      }
      response.image_cover = `/public/rov/hero/${file.filename}`;

      const _newHero:UpdateHeroDto = {
        name: response.name,
        aliases: response.aliases,
        description: response.description,
        story: response.story,
        image: response.image,
        image_cover: response.image_cover,
        categoryId: response.categoryId,
        skills: response.skills,
        public: response.public
      }
      await this.heroService.update(id, _newHero);
      return response;
    }
    throw new NotFoundException("Invalid Id");
  }

}

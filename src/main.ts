import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

const logger = new Logger()

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: process.env.URL_CLIENT ,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true
  });
  app.useStaticAssets(join(__dirname, '..', 'public'), {
    prefix: '/public/',
  });
  await app.listen(process.env.SERVER_ROV_PORT);
  logger.debug("server rov is running port : " + process.env.SERVER_ROV_PORT);
}
bootstrap();

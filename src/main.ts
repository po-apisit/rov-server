import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const logger = new Logger()

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.URL_CLIENT ,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true
  })
  await app.listen(process.env.SERVER_ROV_PORT);
  logger.debug("server rov is running port : " + process.env.SERVER_ROV_PORT);
}
bootstrap();

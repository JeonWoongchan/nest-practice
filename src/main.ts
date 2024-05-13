import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { BaseAPIDocument } from './swagger.document';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new BaseAPIDocument().initializeOptions();
  // config를 바탕으로 swagger document 생성
  const document = SwaggerModule.createDocument(app, config);
  // Swagger UI에 대한 path를 연결함
  // .setup('swagger ui endpoint', app, swagger_document)
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 내용이나 타입 안맞는거 안받음
      forbidNonWhitelisted: true, // 내용이나 타입 안맞게 요청하면 요청 자체를 안받음
      transform: true, // 유저들이 보낸 타입을 원하는 타입으로 바꿔줌
    }),
  );
  await app.listen(3000);
}
bootstrap();

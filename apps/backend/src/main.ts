import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { EnvType } from './env';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger setup
  const swaggerConfig = new DocumentBuilder()
    .setTitle('API')
    .setDescription('Documentação da API')
    .setVersion('1.0')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, swaggerDocument); // Swagger URL: http://localhost:<PORT>/api

  // ConfigService for PORT
  const configService = app.get<ConfigService<EnvType, true>>(ConfigService);
  const port = configService.get<number>('PORT', { infer: true }) || 3000;  // Use 3000 as fallback

  // Start server
  await app.listen(port, () => {
    console.log(`Server Running on http://localhost:${port}`);
    console.log(`Swagger available at http://localhost:${port}/api`);
  });
}

bootstrap();
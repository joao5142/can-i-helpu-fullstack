import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.ts";
import { ConfigService } from "@nestjs/config";
import { EnvType } from "./env.ts";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService<EnvType, true>>(ConfigService);
  const port = configService.get("PORT", { infer: true });

  await app.listen(port,()=>{
    console.log('Server Running')
  });
}

bootstrap();

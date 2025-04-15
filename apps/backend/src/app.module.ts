import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller.ts";
import { AppService } from "./app.service.ts";
import { PrismaService } from "./prisma/prisma.service.ts";
import { envSchema } from "./env.ts";
import { AuthModule } from "./modules/auth/auth.module.ts";
import { PrismaModule } from "./prisma/prisma.module.ts";

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [PrismaModule],
})
export class AppModule {}

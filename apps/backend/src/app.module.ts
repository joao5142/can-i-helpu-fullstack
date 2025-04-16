import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { envSchema } from "./env";
import { AuthModule } from "./modules/auth/auth.module";
import { OngModule } from "./modules/ong/ong.module";
import { FundraiserModule } from "./modules/fundraiser/fundraiser.module";
import { PostModule } from "./modules/post/post.module";
import { ChatModule } from "./modules/chat/chat.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
    OngModule,
    FundraiserModule,
    PostModule,
    ChatModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

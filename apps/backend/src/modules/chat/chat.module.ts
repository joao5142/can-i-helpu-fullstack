import { Module } from "@nestjs/common";
import { ChatService  } from "./chat.service";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { EnvType } from "../../env";

import { ChatController } from "./chat.controller";
import { PrismaService } from "@/prisma/prisma.service";

@Module({
  imports: [
  ],
  controllers: [ChatController],
  providers: [ChatService , PrismaService],
})
export class ChatModule {}

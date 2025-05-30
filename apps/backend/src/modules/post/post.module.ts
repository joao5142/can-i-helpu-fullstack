import { Module } from "@nestjs/common";
import {  PostService } from "./post.service";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { EnvType } from "../../env";

import { PostController } from "./post.controller";
import { PrismaService } from "@/prisma/prisma.service";

@Module({
  imports: [
  ],
  controllers: [PostController],
  providers: [PostService , PrismaService],
})
export class PostModule {}

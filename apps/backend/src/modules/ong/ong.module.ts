import { Module } from "@nestjs/common";
import { OngService } from "./ong.service";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { EnvType } from "../../env";

import { OngController } from "./ong.controller";
import { PrismaService } from "@/prisma/prisma.service";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Module({
  imports: [
  ],
  controllers: [OngController],
  providers: [OngService , PrismaService , JwtAuthGuard],
})
export class OngModule {}

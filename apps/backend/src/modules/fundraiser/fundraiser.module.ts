import { Module } from "@nestjs/common";
import { FundraiserService  } from "./fundraiser.service";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { EnvType } from "../../env";

import { FundraiserController } from "./fundraiser.controller";
import { PrismaService } from "@/prisma/prisma.service";

@Module({
  imports: [
  ],
  controllers: [FundraiserController],
  providers: [FundraiserService , PrismaService],
})
export class FundraiserModule {}

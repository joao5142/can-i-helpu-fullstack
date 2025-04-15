import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service.ts";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { EnvType } from "../../env.ts";
import { JwtStrategy } from "./strategies/jwt.strategy.ts";
import { AuthController } from "./auth.controller.ts";

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory(config: ConfigService<EnvType, true>) {
        const secret = config.get("JWT_SECRET", { infer: true });

        return {
          signOptions: { algorithm: "HS256" },
          secret,
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}

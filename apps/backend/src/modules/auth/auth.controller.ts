import {
  Controller,
  Request,
  Post,
  UseGuards,
  HttpCode,
  UsePipes,
  Body,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { ZodValidationPipe } from "pipes/zod-validation-pipe";
import { z } from "zod";

const createAccountBodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

type CreateAccountBodySchemaType = z.infer<typeof createAccountBodySchema>;

const loginBodySchema = z.object({
  email: z.string(),
  password: z.string(),
});

type LoginBodySchemaType = z.infer<typeof loginBodySchema>;

@Controller("/api/auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/login")
  @UsePipes(new ZodValidationPipe(loginBodySchema))
  async login(@Request() req, @Body() body) {
    const user = loginBodySchema.parse(body);

    return this.authService.login(user);
  }

  @Post("/register")
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(createAccountBodySchema))
  async handle(@Body() body: CreateAccountBodySchemaType) {
    const { name, email, password } = createAccountBodySchema.parse(body);

    return await this.authService.register({ name, email, password });
  }
}

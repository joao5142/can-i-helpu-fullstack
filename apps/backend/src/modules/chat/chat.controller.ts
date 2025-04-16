import {
  Controller,
  Request,
  Post,
  UseGuards,
  HttpCode,
  UsePipes,
  Body,
  Get,
  Param,
} from "@nestjs/common";
import { ChatService } from "./chat.service";
 import { ZodValidationPipe } from "@/pipes/zod-validation-pipe";
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

@Controller("/api/posts")
export class PostController {
  constructor(private authService: ChatService) {}

  @Post("/register")
  @UsePipes(new ZodValidationPipe(loginBodySchema))
  async login(@Request() req, @Body() body) {
    const user = loginBodySchema.parse(body);

    return this.authService.login(user);
  }

  @Get(":id")
  @HttpCode(200)
  @UsePipes(new ZodValidationPipe(createAccountBodySchema))
  async handle(@Param('id') id: string) {
      return 'teste'
  }
}

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
import { FundraiserService } from "./fundraiser.service";
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

@Controller("/api/fundraisers")
export class FundraiserController {
  constructor(private fundraiserService: FundraiserService) {}

  @Post("/register")
  @UsePipes(new ZodValidationPipe(loginBodySchema))
  async login(@Request() req, @Body() body) {
 
  }

  @Get(":id")
  @HttpCode(200)
  @UsePipes(new ZodValidationPipe(createAccountBodySchema))
  async handle(@Param('id') id: string) {
      return 'teste'
  }
}

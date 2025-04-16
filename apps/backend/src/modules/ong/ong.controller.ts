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
  Req,
} from "@nestjs/common";
import { OngService } from "./ong.service";
import { ZodValidationPipe } from "@/pipes/zod-validation-pipe";
import { z } from "zod";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { createBodySchema, CreateBodySchemaType, createCategoryBodySchema } from "./ong.controller.interfaces";
import { CurrentUser } from "../auth/current-user.decoretor";
import { UserPayload } from "../auth/strategies/jwt.strategy";

 
const createOngValidationPipe = new ZodValidationPipe(createBodySchema)


@UseGuards(JwtAuthGuard)
@Controller("/api/ongs")
export class OngController {
  constructor(private ongService: OngService) {}

  @Post()
  async create(@Req() request , @CurrentUser() user: UserPayload, @Body(createOngValidationPipe) body : CreateBodySchemaType) {
    const createData = createBodySchema.parse(body);

    return this.ongService.create({...createData, userId: user.sub});
  }

  @Post("/categories")
  @UsePipes(new ZodValidationPipe(createCategoryBodySchema))
  async createCategory(@Request() req, @Body() body) {
    const categoryData = createCategoryBodySchema.parse(body);

    
    return this.ongService.createCategory(categoryData);
  }


  @Get(":id")
  @HttpCode(200)
  async handle(@Param('id') id: string) {
    return this.ongService.getById(Number(id))
  }
}

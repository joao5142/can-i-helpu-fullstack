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
import { CurrentUser } from "../auth/current-user.decorator";
import { UserPayload } from "../auth/strategies/jwt.strategy";
import { ApiBearerAuth, ApiBody, ApiProperty, ApiTags } from "@nestjs/swagger";

const createOngValidationPipe = new ZodValidationPipe(createBodySchema)
class CreateOngDto {
  @ApiProperty()
  name: string

  @ApiProperty()
  document: string

  @ApiProperty()
  pixKey: string
}

class CreateOngCategoryDto {
  @ApiProperty()
  name: string

  @ApiProperty()
  slug: string
}

@UseGuards(JwtAuthGuard)
@Controller("/api/ongs")
@ApiTags('Ongs')
@ApiBearerAuth("access_token")
export class OngController {
  constructor(private ongService: OngService) {}

  @Post()
  @ApiBody({ type: CreateOngDto})
  async create(@Req() request , @CurrentUser() user: UserPayload, @Body(createOngValidationPipe) body : CreateBodySchemaType) {
    const createData = createBodySchema.parse(body);

    return this.ongService.create({...createData, userId: user.sub});
  }

  @Post("/categories")
  @UsePipes(new ZodValidationPipe(createCategoryBodySchema))
  @ApiBody({ type:  CreateOngCategoryDto})
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

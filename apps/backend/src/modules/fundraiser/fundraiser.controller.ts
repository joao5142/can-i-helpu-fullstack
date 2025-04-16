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
import { CurrentUser } from "../auth/current-user.decorator";
import { UserPayload } from "../auth/strategies/jwt.strategy";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { ApiBearerAuth, ApiBody, ApiProperty, ApiTags } from "@nestjs/swagger";

const createFundtraiserBodySchema = z.object({
  description: z.string(),
  title:  z.string(),
  arrecadationUrl: z.string().optional(),
  pixKey: z.string().optional()
});


class CreateFundraiserDto {
  @ApiProperty()
  description: string

  @ApiProperty()
  title: string

  @ApiProperty({ required:false })
  arrecadationUrl: string

  @ApiProperty({ required:false })
  pixKey : string
}
 
@Controller("/api/fundraisers")
@UseGuards(JwtAuthGuard)
@ApiTags('Fundraisers')
@ApiBearerAuth("access_token")
export class FundraiserController {
  constructor(private fundraiserService: FundraiserService) {}
  
  @Post()
  @ApiBody({ type: CreateFundraiserDto})
  async register(@CurrentUser() user: UserPayload , @Body(new ZodValidationPipe(createFundtraiserBodySchema)) body) {
    const createData = createFundtraiserBodySchema.parse(body);
  
    return this.fundraiserService.create({...createData, creatorId: user.sub});
  }

  @Get(':id')
  async getById(@Param('id') id) {
    return this.fundraiserService.getById(Number(id));
  }

}

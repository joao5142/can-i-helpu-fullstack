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
import { PostService } from "./post.service";
 import { ZodValidationPipe } from "@/pipes/zod-validation-pipe";
import { z } from "zod";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { UserPayload } from "../auth/strategies/jwt.strategy";
import { CurrentUser } from "../auth/current-user.decorator";
import { ApiBearerAuth, ApiBody, ApiProperty, ApiTags } from "@nestjs/swagger";

const createPostBodySchema = z.object({
  title: z.string(),
  description: z.string(),
  image_url: z.string().optional(),
});


class CreatePostDto {
  @ApiProperty()
  title: string

  @ApiProperty()
  description: string

  @ApiProperty({ required:false })
  image_url: string
}
 
@Controller("/api/posts")
@UseGuards(JwtAuthGuard)
@ApiTags('Posts')
@ApiBearerAuth("access_token")
export class PostController {
  constructor(private postService: PostService) {}

  @Post()
  @ApiBody({ type: CreatePostDto})
  async register(@CurrentUser() user: UserPayload, @Body(new ZodValidationPipe(createPostBodySchema)) body) {
    const createData = createPostBodySchema.parse(body);
  
    return this.postService.create({...createData, authorId: user.sub});
  }

  @Get(':id')
  async getById(@Param('id') id) {
    return this.postService.getById(Number(id));
  }
}

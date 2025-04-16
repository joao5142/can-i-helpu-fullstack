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
import { CurrentUser } from "../auth/current-user.decorator";
import { UserPayload } from "../auth/strategies/jwt.strategy";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { ApiBearerAuth, ApiBody, ApiProperty, ApiTags } from "@nestjs/swagger";

const createChatBodySchema = z.object({
  initiatorId: z.string(),
  recipientId: z.string()
});

const createChatMessageBodySchema = z.object({
  receiverId: z.string(),
  senderId: z.string(),
  chatId:  z.string(),
  message: z.string()
});

export class CreateChatDto {
  @ApiProperty()
  initiatorId: string

  @ApiProperty()
  recipientId: string
}

export class CreateChatMessageDto {
  @ApiProperty()
  receiverId: string

  @ApiProperty()
  senderId: string

  @ApiProperty()
  chatId: string

  @ApiProperty()
  message: string
}
 
@Controller("/api/chats")
@UseGuards(JwtAuthGuard)
@ApiTags('Chats')
@ApiBearerAuth("access_token")
export class ChatController {
  constructor(private chatService: ChatService) {}

    @Post()
    @ApiBody({ type: CreateChatDto})
    async register(@CurrentUser() user: UserPayload, @Body(new ZodValidationPipe(createChatBodySchema)) body) {
      const createData = createChatBodySchema.parse(body);
    
      return this.chatService.create({...createData});
    }

     
    @Get(':id')
    async getById(@Param('id') id) {
      return this.chatService.getById(Number(id));
    }


    @Get(':chatId/messages')
    async getChatMessagesByChatId(@Param('chatId') id) {
      return this.chatService.getChatMessages(Number(id));
    }


    @Post('/messages')
    @ApiBody({ type: CreateChatDto})
    async registerMessage(@CurrentUser() user: UserPayload, @Body(new ZodValidationPipe(createChatMessageBodySchema)) body) {
      const createData = createChatMessageBodySchema.parse(body);
    
      return this.chatService.createMessage({...createData});
    }
 
    
    @Get('/messages/:id')
    async getMessageById(@Param('id') id) {
    
      return this.chatService.getMessageById(id);
    }
 
  
}

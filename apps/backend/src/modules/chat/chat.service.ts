import { ConflictException, Injectable } from "@nestjs/common";

import { PrismaService } from "../../prisma/prisma.service";
 
@Injectable()
export class ChatService {
  constructor(
    private prisma: PrismaService
  ) {}

  async create(chatData: any) {
    const chat = await this.prisma.chat.create({
       data: {
          initiatorId: Number(chatData.initiatorId),
          recipientId: Number(chatData.recipientId)
       }
    });

    return chat
  }

  async createMessage(chatData: any) {
    const chatMessage = await this.prisma.message.create({
       data: {
          message: chatData.message,
          chatId: Number(chatData.chatId),
          receiverId: Number(chatData.receiverId),
          senderId: Number(chatData.senderId)
       }
    });

    return chatMessage
  }


  async getMessageById(messageId: any) {
    const chatMessage = await this.prisma.message.findFirst({
        where:{
          id: Number(messageId)
        }
    });

    return chatMessage
  }


  async getChatMessages(chatId: any) {
    const messages = await this.prisma.message.findMany({
      where:{
        chatId : chatId
      }
    });

    return messages
  }

  async getById(id: any) {
    const chat = await this.prisma.chat.findFirst({
      where:{
        id
      }
    });

    return chat
  }
}

import { ConflictException, Injectable } from "@nestjs/common";


import { PrismaService } from "../../prisma/prisma.service";
import { hash } from "bcrypt";

@Injectable()
export class FundraiserService {
  constructor(
    private prisma: PrismaService
  ) {}

  async create(fundraiserData: any) {
    const fundraiser = await this.prisma.fundraiser.create({
       data: {
        description: fundraiserData.description,
        title: fundraiserData.title,
        creatorId: fundraiserData.creatorId,
        arrecadationUrl:fundraiserData.arrecadationUrl ?? '',
        pixKey:fundraiserData.arrecadationUrl
       }
    });

    return fundraiser
  }


  async getById(id: any) {
    const fundraiser = await this.prisma.fundraiser.findFirst({
      where:{
        id
      }
    });

    return fundraiser
  }
}

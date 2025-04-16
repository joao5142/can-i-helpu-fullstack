import { ConflictException, Injectable } from "@nestjs/common";


import { PrismaService } from "../../prisma/prisma.service";
import { hash } from "bcrypt";

@Injectable()

export class PostService {
  constructor(

    private prisma: PrismaService
  ) {}

 
  async create(postData: any) {
    const post = await this.prisma.post.create({
       data: {
        description: postData.description,
        imageUrl: postData.image_url  ?? '',
        title: postData.title,
        authorId: postData.authorId
       }
    });

    return post
  }


  async getById(id: any) {
    const post = await this.prisma.post.findFirst({
      where:{
        id
      }
    });

    return post
  }
}

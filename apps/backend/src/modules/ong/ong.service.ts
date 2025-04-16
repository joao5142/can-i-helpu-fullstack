import { ConflictException, Injectable } from "@nestjs/common";
import { OngCategory } from "@prisma/client"
import { PrismaService } from "../../prisma/prisma.service";
import { hash } from "bcrypt";

@Injectable()
export class OngService {
  constructor(
    private prisma: PrismaService
  ) {}

  async create(ong: any) {
    const ongData = await this.prisma.ong.create({
     data:{
       document: ong.document,
       pixKey: ong.pixKey,
       name: ong.name,
       userId: ong.userId
     }
    });

    return ongData 
  }

  async getById(id: any) {
    const ong = await this.prisma.ong.findFirst({
        where:{
          id
        }
    });

    return ong
  }

  async createCategory(ongCategory: Omit<OngCategory,'id'>) {
   const category= await this.prisma.ongCategory.create({
     data:{
      name: ongCategory.name,
      slug: ongCategory.slug
     }
    });

    return category
  }
 
}

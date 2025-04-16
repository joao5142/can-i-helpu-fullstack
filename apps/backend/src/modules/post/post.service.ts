import { ConflictException, Injectable } from "@nestjs/common";


import { PrismaService } from "../../prisma/prisma.service";
import { hash } from "bcrypt";

@Injectable()
export class PostService {
  constructor(

    private prisma: PrismaService
  ) {}

 

  async register(user: any) {
    const userWithSameEmail = await this.prisma.user.findUnique({
      where: {
        email: user.email,
      },
    });

    if (userWithSameEmail) {
      throw new ConflictException("User with same email already exists");
    }

    const hashedPassword = await hash(user.password, 8);

    const createdUser = await this.prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: hashedPassword,
        bio: user.bio,
        role:user.role ?? 'USER',
      },
    });

    return createdUser;
  }
}

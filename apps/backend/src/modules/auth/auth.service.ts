import { ConflictException, Injectable } from "@nestjs/common";

import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "../../prisma/prisma.service.ts";
import { hash } from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService
  ) {}

  async login(user: any) {
    const payload = { username: user.email, password: user.password };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

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
      },
    });

    return createdUser;
  }
}

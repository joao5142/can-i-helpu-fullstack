import { ConflictException, Injectable, UnauthorizedException } from "@nestjs/common";

import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "../../prisma/prisma.service";
import { compare, hash } from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService
  ) {}

  async login(userData: any) {
    const payload = { email: userData.email, password: userData.password };

    const user = await this.prisma.user.findUnique({
      where: {
        email : payload.email,
      },
    })

    if (!user) {
      throw new UnauthorizedException('User credentials do not match.')
    }

    const isPasswordValid = await compare(payload.password, user.password)

    if (!isPasswordValid) {
      throw new UnauthorizedException('User credentials do not match.')
    }

    const accessToken = this.jwtService.sign({ sub: user.id })

    return {
      access_token: accessToken,
    }
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
        bio: user.bio,
        role:user.role ?? 'USER',
      },
    });

    return createdUser;
  }
}

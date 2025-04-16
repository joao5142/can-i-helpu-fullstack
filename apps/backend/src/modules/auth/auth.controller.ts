import {
  Controller,
  Request,
  Post,
  UseGuards,
  HttpCode,
  UsePipes,
  Body,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { ZodValidationPipe } from "@/pipes/zod-validation-pipe";
import { z } from "zod";
import { ApiBody, ApiProperty, ApiTags } from "@nestjs/swagger";


enum UserRole {
  USER = 'USER',
  ONG = 'ONG',
}

const createAccountBodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  bio: z.string(),
  role: z.enum(['USER','ONG']),
});

type CreateAccountBodySchemaType = z.infer<typeof createAccountBodySchema>;

const loginBodySchema = z.object({
  email: z.string(),
  password: z.string(),
});

class CreateUserDto {
  @ApiProperty()
  name: string

  @ApiProperty()
  email: string

  @ApiProperty()
  password: string

  @ApiProperty()
  bio: string

  @ApiProperty()
  role: UserRole
}

class UserLogin{
  @ApiProperty()
  email: string

  @ApiProperty()
  password: string
}

@Controller("/api/auth")
@ApiTags('Auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/login")
  @UsePipes(new ZodValidationPipe(loginBodySchema))
  @ApiBody({ type: UserLogin})
  async login(@Request() req, @Body() body) {
    const user = loginBodySchema.parse(body);

    return this.authService.login(user);
  }

  @Post("/register")
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(createAccountBodySchema))
  @ApiBody({ type: CreateUserDto})
  async handle(@Body() body: CreateAccountBodySchemaType) {
    const { name, email, password,bio,role } = createAccountBodySchema.parse(body);

    return await this.authService.register({ name, email, password , bio, role });
  }
}

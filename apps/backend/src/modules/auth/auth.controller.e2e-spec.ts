import { AppModule } from "@/app.module";
import { PrismaService } from "../../prisma/prisma.service";
import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { hash } from "bcrypt";
import request from "supertest";

describe("Auth Controller (E2E)", () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();

    prisma = moduleRef.get(PrismaService);

    await app.init();
  });

  test("[POST] /api/auth/register", async () => {
    const response = await request(app.getHttpServer())
      .post("/api/auth/register")
      .send({
        name: "Jon",
        email: "jondoe@example.com",
        password: "123456",
      });

    expect(response.statusCode).toBe(201);

    const userOnDatabase = await prisma.user.findUnique({
      where: {
        email: "jondoe@example.com",
      },
    });

    expect(userOnDatabase).toBeTruthy();
  });

  test("[POST] /api/auth/login", async () => {
    await prisma.user.create({
      data: {
        name: "Jon",
        email: "jondoe2@example.com",
        password: await hash("123456", 8),
        bio:'teste',
        role:'USER'
      },
    });

    const response = await request(app.getHttpServer())
      .post("/api/auth/login")
      .send({
        email: "jondoe2@example.com",
        password: "123456",
      });

    expect(response.statusCode).toBe(201);

    expect(response.body).toEqual({
      access_token: expect.any(String),
    });
  });
});

FROM node:20-slim AS builder

RUN apt-get update && apt-get install -y \
  openssl \
  python3 \
  build-essential \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY .npmrc .pnpmfile.cjs package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

COPY . .

RUN pnpm prisma generate
RUN pnpm build


FROM node:20-slim

WORKDIR /app

RUN npm install -g pnpm

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
COPY --from=builder /app/prisma ./prisma

ENV NODE_ENV=production

EXPOSE 3000

CMD ["sh", "-c", "pnpm prisma migrate deploy && node dist/main.js"]

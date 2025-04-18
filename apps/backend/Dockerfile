FROM node:20

WORKDIR /app

COPY ./package*.json ./

RUN npm install -g pnpm \
  && pnpm install

COPY . .

RUN pnpm dlx prisma generate

RUN pnpm run build

COPY entrypoint.sh ./

CMD ["sh", "./entrypoint.sh"]

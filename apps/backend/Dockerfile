FROM node:20

WORKDIR /app

RUN apt-get update && apt-get install -y netcat-openbsd

COPY ./package*.json ./

RUN npm install -g pnpm \
  && pnpm install

COPY . .

RUN pnpm dlx prisma generate

RUN pnpm run build

COPY entrypoint.sh ./
RUN chmod +x entrypoint.sh

CMD ["sh", "./entrypoint.sh"]

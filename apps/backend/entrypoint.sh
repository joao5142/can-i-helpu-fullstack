#!/bin/sh
pnpm dlx prisma migrate deploy

exec pnpm start
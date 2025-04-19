#!/bin/sh
pnpm dlx prisma migrate deploy

exec node dist/main
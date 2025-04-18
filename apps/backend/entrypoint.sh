
until nc -z ${DB_HOST:-localhost} ${DB_PORT:-5432}; do
  echo "Aguardando o banco de dados"
  sleep 2
done

pnpm dlx prisma migrate deploy

node dist/main
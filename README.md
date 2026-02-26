Run mysql (docker compose file present)

npm install
npx prisma generate

npx prisma migrate reset
(npx prisma migrate reset --force --skip-seed)

npx prisma migrate dev

npm run start:dev


npx prisma db seed (automatically run with npx prisma migrate reset)

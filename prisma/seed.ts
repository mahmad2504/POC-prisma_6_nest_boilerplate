import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function seed() {
  await prisma.user.createMany({
    data: [
      {
        email: "mumtaz@gmail.com",
        name: "Mumtaz",
      },
      {
        email: "john.doe@example.com",
        name: "John Doe",
      },
    ],
  });
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
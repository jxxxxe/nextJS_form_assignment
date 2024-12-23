import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function test() {
  const like = await prisma.like.findUnique({
    where: {
      id: 1,
    },
    include: {
      user: true,
      tweet: true,
    },
  });
  console.log(like);
}

test();

export default prisma;

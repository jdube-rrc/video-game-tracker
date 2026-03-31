import { PrismaClient } from '@prisma/client';
import { videoGames } from '../src/data/videoGames.ts';

const prisma = new PrismaClient();

async function main() {
  for (const game of videoGames) {
    await prisma.videoGame.upsert({
      where: { id: game.id },
      update: {
        ...game,
        trailer_url: game.trailer_url ?? null,
      },
      create: {
        ...game,
        trailer_url: game.trailer_url ?? null,
      },
    });
  }

  console.log(`Prisma seed completed. Upserted ${videoGames.length} video games.`);
}

main()
  .catch((error) => {
    console.error('Prisma seed failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

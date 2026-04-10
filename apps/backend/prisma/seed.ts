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

  const genres = [
    'Action', 'Adventure', 'RPG', 'Strategy', 'Shooter', 'Sports', 'Racing', 'Fighting', 'Platformer', 'Puzzle', 'Simulation', 'Horror', 'Indie'
  ];

  for (const genreName of genres) {
    await prisma.genre.upsert({
      where: { name: genreName },
      update: {},
      create: { name: genreName },
    });
  }

  console.log(`Prisma seed completed. Upserted ${videoGames.length} video games and ${genres.length} genres.`);

}

main()
  .catch((error) => {
    console.error('Prisma seed failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

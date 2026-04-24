import { PrismaClient } from '@prisma/client';
import { videoGames } from '../src/data/videoGames.ts';
import { fauxUsers } from './data/users.ts';

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

  for (const user of fauxUsers) {
    await prisma.user.upsert({
      where: { id: user.id },
      update: {
        email: user.email,
        displayName: user.username,
        tagline: user.tagline,
        createdAt: new Date(user.createdAt),
        favoriteGenres: {
          set: [], // Clear existing associations to avoid duplicates if re-ran
          connect: user.favoriteGenres.map(name => ({ name })),
        },
      },
      create: {
        id: user.id,
        email: user.email,
        displayName: user.username,
        tagline: user.tagline,
        createdAt: new Date(user.createdAt),
        favoriteGenres: {
          connect: user.favoriteGenres.map(name => ({ name })),
        },
      },
    });
  }

  console.log(`Prisma seed completed. Upserted ${videoGames.length} video games, ${genres.length} genres, and ${fauxUsers.length} users.`);

}

main()
  .catch((error) => {
    console.error('Prisma seed failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

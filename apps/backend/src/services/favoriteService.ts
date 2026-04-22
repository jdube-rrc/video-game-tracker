import { clerkClient } from '@clerk/express';
import { PrismaClient, type VideoGame } from '@prisma/client';

const prisma = new PrismaClient();

const getDisplayName = (username: string | null, email: string): string => {
  if (username && username.trim().length > 0) {
    return username.trim();
  }

  const [emailPrefix] = email.split('@');
  return emailPrefix || 'User';
};

const ensureCurrentUser = async (clerkUserId: string) => {
  const clerkUser = await clerkClient.users.getUser(clerkUserId);
  const primaryEmail = clerkUser.primaryEmailAddress?.emailAddress
    ?? clerkUser.emailAddresses[0]?.emailAddress;

  if (!primaryEmail) {
    throw new Error('Authenticated Clerk user is missing a primary email address.');
  }

  return prisma.user.upsert({
    where: { id: clerkUserId },
    create: {
      id: clerkUserId,
      email: primaryEmail,
      displayName: getDisplayName(clerkUser.username, primaryEmail),
      avatar: clerkUser.imageUrl,
    },
    update: {
      email: primaryEmail,
      displayName: getDisplayName(clerkUser.username, primaryEmail),
      avatar: clerkUser.imageUrl,
    },
  });
};

const favoriteService = {
  getFavoriteGames: async (clerkUserId: string): Promise<VideoGame[]> => {
    await ensureCurrentUser(clerkUserId);

    const user = await prisma.user.findUnique({
      where: { id: clerkUserId },
      include: {
        favoriteGames: {
          orderBy: {
            name: 'asc',
          },
        },
      },
    });

    return user?.favoriteGames ?? [];
  },

  addFavoriteGame: async (clerkUserId: string, gameId: number): Promise<void> => {
    await ensureCurrentUser(clerkUserId);

    const game = await prisma.videoGame.findUnique({
      where: { id: gameId },
    });

    if (!game) {
      throw new Error('Game not found.');
    }

    await prisma.user.update({
      where: { id: clerkUserId },
      data: {
        favoriteGames: {
          connect: { id: gameId },
        },
      },
    });
  },

  removeFavoriteGame: async (clerkUserId: string, gameId: number): Promise<void> => {
    await ensureCurrentUser(clerkUserId);

    await prisma.user.update({
      where: { id: clerkUserId },
      data: {
        favoriteGames: {
          disconnect: { id: gameId },
        },
      },
    });
  },
};

export default favoriteService;
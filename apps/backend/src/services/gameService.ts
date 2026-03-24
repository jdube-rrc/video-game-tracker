import { PrismaClient, type VideoGame } from '@prisma/client';

const prisma = new PrismaClient();

const gameService = {
  getAllGames: async (): Promise<VideoGame[]> => {
    return prisma.videoGame.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  },

  createGame: async (game: VideoGame): Promise<VideoGame | null> => {
    try {
      const created = await prisma.videoGame.create({
        data: {
          ...game,
          trailer_url: game.trailer_url ?? null,
        },
      });

      return created;
    } catch (error: any) {
      if (error?.code === 'P2002') {
        return null;
      }

      throw error;
    }
  },

  getGameById: async (gameId: number): Promise<VideoGame | null> => {
    const game = await prisma.videoGame.findUnique({
      where: { id: gameId },
    });
    return game;
  },

  searchGames: async (query: string): Promise<VideoGame[]> => {
    const lowerQuery = query.toLowerCase();
    const games = await prisma.videoGame.findMany();

    return games.filter(
      (game) =>
        game.name.toLowerCase().includes(lowerQuery) ||
        game.developer.toLowerCase().includes(lowerQuery) ||
        game.genre.some((g) => g.toLowerCase().includes(lowerQuery))
    );
  },
};

export default gameService;

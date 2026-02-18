import { videoGames, type VideoGame } from '../data/video_games';

/**
 * Repository for accessing VideoGame data.
 * Currently uses local test data, but structured to allow easy swap to API.
 */
export const gameRepository = {
  getAll: async (): Promise<VideoGame[]> => {
    await new Promise(resolve => setTimeout(resolve, 100)); // 100ms simulates network delay
    return videoGames;
  },

  // Returns a single game by ID (Simulates 'Select * where id=?')
  getById: async (id: number): Promise<VideoGame | undefined> => {
    await new Promise(resolve => setTimeout(resolve, 100));
    return videoGames.find(game => game.id === id);
  }
};
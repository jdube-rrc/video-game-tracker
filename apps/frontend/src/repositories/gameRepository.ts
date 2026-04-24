import { fetchGames, getGameById as fetchGameById, type TokenProvider, updateGameById as patchGameById } from '../apis/client';
import type { VideoGame } from '../data/video_games';

/**
 * Repository for accessing VideoGame data from the backend API.
 */
export const gameRepository = {
  getAll: async (): Promise<VideoGame[]> => {
    return await fetchGames();
  },

  /**
   * 
   * @param id 
   * 
   * 
   * @returns 
   */
  getById: async (id: number): Promise<VideoGame | undefined> => {
    return await fetchGameById(id);
  },

  updateById: async (
    id: number,
    updates: Partial<Omit<VideoGame, 'id'>>,
    getToken?: TokenProvider,
  ): Promise<VideoGame> => {
    return await patchGameById(id, updates, getToken);
  },
};
import {
  addCurrentUserFavorite,
  fetchCurrentUserFavorites,
  removeCurrentUserFavorite,
  type TokenProvider,
} from '../apis/client';
import type { VideoGame } from '../data/video_games';

/**
 * Repository for Favorite data access.
 * Provides API-backed operations for the current user's favorite games.
 */
export const favoriteRepository = {
  getCurrentUserFavorites: async (getToken: TokenProvider): Promise<VideoGame[]> => {
    return fetchCurrentUserFavorites(getToken);
  },

  addCurrentUserFavorite: async (gameId: number, getToken: TokenProvider): Promise<void> => {
    await addCurrentUserFavorite(gameId, getToken);
  },

  removeCurrentUserFavorite: async (gameId: number, getToken: TokenProvider): Promise<void> => {
    await removeCurrentUserFavorite(gameId, getToken);
  },
};

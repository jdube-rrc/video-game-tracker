import { favoriteRepository } from '../repositories/favoriteRepository';
import type { TokenProvider } from '../apis/client';
import type { VideoGame } from '../data/video_games';

/**
 * Service that handles business logic for favorite operations.
 */
export const favoriteService = {
  /**
   * Gets all favorite game records for a user, with full game data.
   * 
   * @param getToken - Clerk token provider for the current user.
   * @returns Promise resolving to array of VideoGame objects.
   */
  getUserFavoriteGames: async (getToken: TokenProvider): Promise<VideoGame[]> => {
    return favoriteRepository.getCurrentUserFavorites(getToken);
  },

  /**
   * Checks if a specific game is favorited by a user.
   * 
   * @param favorites - Current favorite games list.
   * @param gameId - The ID of the game.
   * @returns Promise resolving to true if favorited, false otherwise.
   */
  isFavorite: async (favorites: VideoGame[], gameId: number): Promise<boolean> => {
    return favorites.some((favorite) => favorite.id === gameId);
  },

  /**
   * Adds a game to user's favorites.
   * 
   * @param gameId - The ID of the game to favorite.
   * @param getToken - Clerk token provider for the current user.
   */
  addFavorite: async (gameId: number, getToken: TokenProvider): Promise<void> => {
    await favoriteRepository.addCurrentUserFavorite(gameId, getToken);
  },

  /**
   * Removes a game from user's favorites.
   * 
   * @param gameId - The ID of the game to unfavorite.
   * @param getToken - Clerk token provider for the current user.
   */
  removeFavorite: async (gameId: number, getToken: TokenProvider): Promise<void> => {
    await favoriteRepository.removeCurrentUserFavorite(gameId, getToken);
  },

  /**
   * Toggles a game's favorite status for a user.
   * If favorited, removes it. If not favorited, adds it.
   * 
   * @param gameId - The ID of the game.
   * @param isCurrentlyFavorite - Whether the game is already favorited.
   * @param getToken - Clerk token provider for the current user.
   * @returns Promise resolving to object with action taken and current status.
   */
  toggleFavorite: async (
    gameId: number,
    isCurrentlyFavorite: boolean,
    getToken: TokenProvider,
  ): Promise<{ action: 'added' | 'removed'; isFavorite: boolean }> => {
    if (isCurrentlyFavorite) {
      await favoriteRepository.removeCurrentUserFavorite(gameId, getToken);
      return { action: 'removed', isFavorite: false };
    }

    await favoriteRepository.addCurrentUserFavorite(gameId, getToken);
    return { action: 'added', isFavorite: true };
  },
};

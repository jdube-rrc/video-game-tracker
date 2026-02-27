import type { VideoGame } from "../data/video_games";
import { favoritesRepository } from "../repositories/favoritesRepository";

/**
 * Service for favorites business operations.
 * This layer decides how favorites are toggled and queried.
 */
export const favoritesService = {
  /**
   * Gets the shared favorites list.
   *
   * @returns Current list of favorite games.
   */
  getFavorites: (): VideoGame[] => favoritesRepository.getFavorites(),
  /**
   * Adds a game if missing or removes it if already favorited.
   *
   * @param game - Game to toggle in favorites.
   * @returns Updated favorites list.
   */
  toggleFavorite: (game: VideoGame): VideoGame[] => {
    const current = favoritesRepository.getFavorites();
    const next = current.some((favorite) => favorite.id === game.id)
      ? current.filter((favorite) => favorite.id !== game.id)
      : [...current, game];

    return favoritesRepository.setFavorites(next);
  },
  /**
   * Checks whether a game ID exists in favorites.
   *
   * @param gameId - Game ID to check.
   * @returns True when game is currently favorited.
   */
  isFavorite: (gameId: number): boolean =>
    favoritesRepository.getFavorites().some((favorite) => favorite.id === gameId),
  /**
   * Subscribes to favorites-list changes.
   *
   * @param listener - Callback triggered when favorites change.
   * @returns Cleanup function to unsubscribe.
   */
  subscribe: (listener: () => void): (() => void) => favoritesRepository.subscribe(listener),
};

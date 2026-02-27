import { useSyncExternalStore } from "react";
import type { VideoGame } from "../../data/video_games";
import { favoritesService } from "../../services/favoritesService";

/**
 * Presentation hook for shared favorites state.
 * Subscribes to favorites updates and exposes UI-focused actions/selectors.
 *
 * @returns `favorites` for rendering, `toggleFavorite` for UI actions, and
 * `isFavorite` as a convenience selector by game ID.
 */
export function useFavorites() {
  const favorites = useSyncExternalStore(
    favoritesService.subscribe,
    favoritesService.getFavorites
  );

  /**
   * Toggles a game as favorite or not.
   *
   * @param game - The video game object to toggle as favorite.
   */
  const toggleFavorite = (game: VideoGame) => {
    favoritesService.toggleFavorite(game);
  };

  /**
   * Checks if a game is in the favorites list.
   *
   * @param gameId - The ID of the game to check.
   * @returns True if the game is a favorite, false otherwise.
   */
  const isFavorite = (gameId: number): boolean => {
    return favoritesService.isFavorite(gameId);
  };

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  };
}

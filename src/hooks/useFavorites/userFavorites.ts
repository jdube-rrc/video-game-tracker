import { useState } from "react";
import type { VideoGame } from "../../data/video_games";

/**
 * Custom hook to manage the user's favorite video games.
 *
 * @returns An object containing the list of favorite games, a function to toggle a game's favorite status,
 *          and a function to check if a game is a favorite.
 */
export function useFavorites() {
  const [favorites, setFavorites] = useState<VideoGame[]>([]);

  /**
   * Toggles a game as favorite or not.
   *
   * @param game - The video game object to toggle as favorite.
   */
  const toggleFavorite = (game: VideoGame) => {
    if (favorites.some((f) => f.id === game.id)) {
      setFavorites((prev) => prev.filter((f) => f.id !== game.id));
    } else {
      setFavorites((prev) => [...prev, game]);
    }
  };

  /**
   * Checks if a game is in the favorites list.
   *
   * @param gameId - The ID of the game to check.
   * @returns True if the game is a favorite, false otherwise.
   */
  const isFavorite = (gameId: number): boolean => {
    return favorites.some((f) => f.id === gameId);
  };

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  };
}

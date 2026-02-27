import type { VideoGame } from "../data/video_games";

let favorites: VideoGame[] = [];
const listeners = new Set<() => void>();

/**
 * Notifies all subscribers that favorites data changed.
 */
const notify = () => {
  listeners.forEach((listener) => listener());
};

/**
 * Repository for persisted-in-memory favorites state.
 * This layer is data access only.
 */
export const favoritesRepository = {
  /**
   * Reads the shared favorites list.
   *
   * @returns Current list of favorite games.
   */
  getFavorites: (): VideoGame[] => favorites,
  /**
   * Replaces the shared favorites list.
   *
   * @param nextFavorites - New favorites list to store.
   * @returns Stored favorites list after update.
   */
  setFavorites: (nextFavorites: VideoGame[]): VideoGame[] => {
    favorites = nextFavorites;
    notify();
    return favorites;
  },
  /**
   * Subscribes to favorites-list changes.
   *
   * @param listener - Callback invoked when favorites change.
   * @returns Cleanup function to unsubscribe.
   */
  subscribe: (listener: () => void): (() => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
};

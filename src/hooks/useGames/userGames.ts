import { useState, useEffect } from 'react';
import { videoGames, type VideoGame } from '../../data/video_games';

/**
 * Custom hook to manage the list of video games and provide utility functions
 * to access them by ID or genre.
 *
 * @returns An object containing the list of games and utility functions to access them.
 */
export function useGames() {
  const [games, setGames] = useState<VideoGame[]>(videoGames);

  const getGameById = (id: number): VideoGame | undefined => {
    return games.find((game) => game.id === id);
  };
  
  const getGamesByGenre = (genre: string) => {
      return games.filter(g => g.genre.includes(genre));
  }

  return {
    games,
    getGameById,
    getGamesByGenre
  };
}
import { useState } from 'react';
import { videoGames, type VideoGame } from '../../../data/video_games';

interface FavoriteGamesProps {
  favorites: VideoGame[];
  onToggleFavorite: (game: VideoGame) => void;
}

export function FavoriteGames({ favorites, onToggleFavorite }: FavoriteGamesProps) {
  const [selectedGameId, setSelectedGameId] = useState<string>("");

  const handleAddGame = () => {
    const gameToAdd = videoGames.find(g => g.id.toString() === selectedGameId);
    if (gameToAdd) {
      onToggleFavorite(gameToAdd);
      setSelectedGameId("");
    }
  };

  // Filters out games in the drop down that are already in favorites
  const availableGames = videoGames.filter(g => !favorites.some(f => f.id === g.id));

  return (
    <div className="h-full">
      <h2 className="text-2xl font-bold text-white mb-6">Favorite Games</h2>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <select 
            className="w-full bg-neutral-800 text-white rounded-lg p-3 border border-neutral-700 focus:ring-2 focus:ring-purple-500 focus:outline-none appearance-none"
            value={selectedGameId}
            onChange={(e) => setSelectedGameId(e.target.value)}
          >
            <option value="">Select a game to add...</option>
            {availableGames.map(game => (
              <option key={game.id} value={game.id}>
                {game.name}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-neutral-400">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
            </svg>
          </div>
        </div>
        <button 
          onClick={handleAddGame}
          disabled={!selectedGameId}
          className="bg-purple-600 hover:bg-purple-700 disabled:bg-neutral-700 disabled:text-neutral-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Add to Favorites
        </button>
      </div>

      <div className="space-y-4">
        {favorites.length === 0 ? (
          <div className="text-center py-12 text-neutral-500 bg-neutral-800/50 rounded-lg border border-neutral-800 border-dashed">
            <p className="text-lg">No favorite games added yet.</p>
            <p className="text-sm mt-2">Select a game above to start your collection.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {favorites.map(game => (
              <div key={game.id} className="group flex items-center justify-between bg-neutral-800 p-4 rounded-lg border border-neutral-700 hover:border-purple-500/50 transition-all shadow-sm">
                <span className="text-white font-medium truncate pr-4" title={game.name}>{game.name}</span>
                <button 
                  onClick={() => onToggleFavorite(game)}
                  className="text-neutral-400 hover:text-red-400 p-2 hover:bg-red-400/10 rounded transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                  aria-label="Remove from favorites"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

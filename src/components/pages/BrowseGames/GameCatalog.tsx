import { useMemo } from 'react';
import { type VideoGame } from '../../../data/video_games';
import { searchGames, sortAlphabetically, getRandomSample, isGameFavorite } from '../../../services/gameService';
import GameCard from '../../common/game-card/GameCard';

type GameCatalogProps = {
    searchTerm?: string;
    favorites?: VideoGame[];
    onToggleFavorite?: (game: VideoGame) => void;
};

/**
 * Renders a catalog of video games, filtered by an optional search term,
 * and allows toggling favorite status for each game.
 * @param searchTerm - Optional search term to filter games by name.
 * @param favorites - Optional list of favorite video games.
 * @param onToggleFavorite - Optional function to toggle a game's favorite status.
 * 
 * @returns The GameCatalog component.
 */
export default function GameCatalog({ searchTerm = '', favorites = [], onToggleFavorite }: GameCatalogProps) {
    // useMemo remembers the games to avoid recomputing on every render
    // Initial load (no search): random 20 games
    // With search: alphabetically sorted results
    const displayedGames: VideoGame[] = useMemo(() => {
        const filtered = searchGames(searchTerm);
        if (searchTerm.trim()) {
            return sortAlphabetically(filtered);
        }
        return getRandomSample(filtered, 20);
    }, [searchTerm]); // will only recompute if searchTerm changes

    if (searchTerm === "Mike") {
        return (
            <div className="rounded-md border border-neutral-800 bg-neutral-900 p-6 text-center text-neutral-300">
                Hi Mike! 👋
            </div>
        )
    }

    if (displayedGames.length === 0) {
        return (
            <div className="rounded-md border border-neutral-800 bg-neutral-900 p-6 text-center text-neutral-300">
                No games match your search.
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-6 text-left sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {displayedGames.map((game) => (
                <GameCard 
                    key={game.id} 
                    game={game} 
                    isFavorite={isGameFavorite(game.id, favorites)}
                    onToggleFavorite={onToggleFavorite}
                />
            ))}
        </div>
    );
}
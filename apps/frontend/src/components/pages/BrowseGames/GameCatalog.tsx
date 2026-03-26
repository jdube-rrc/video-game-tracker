import { useMemo } from 'react';
import { type VideoGame } from '../../../data/video_games';
import { useGames } from '../../../hooks/useGames/useGames';
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
    const { games, isLoading, error } = useGames();

    // useMemo remembers the shuffled games to avoid reshuffling on every render,
    // this is to avoid expensive computations on each key stroke in the search input
    const displayedGames: VideoGame[] = useMemo(() => {
        const normalizedTerm = searchTerm.toLowerCase().trim();
        const filtered = !normalizedTerm
            ? games
            : games.filter((game) => game.name.toLowerCase().includes(normalizedTerm));

        const shuffled = [...filtered].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, 20);
    }, [games, searchTerm]); // will only recompute if games or searchTerm changes

    if (searchTerm === "Mike") {
        return (
            <div className="rounded-md border border-neutral-800 bg-neutral-900 p-6 text-center text-neutral-300">
                Hi Mike! 👋
            </div>
        )
    }

    if (isLoading) { // show loading state while games are being fetched
        return (
            <div className="rounded-md border border-neutral-800 bg-neutral-900 p-6 text-center text-neutral-300">
                Loading games...
            </div>
        );
    }

    if (error) { // show error message if there was an error fetching games
        return (
            <div className="rounded-md border border-red-900 bg-red-950/40 p-6 text-center text-red-200">
                {error}
            </div>
        );
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
                    isFavorite={favorites.some((fav) => fav.id === game.id)}
                    onToggleFavorite={onToggleFavorite}
                />
            ))}
        </div>
    );
}
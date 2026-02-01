import { useMemo } from 'react';
import { videoGames, type VideoGame } from '../../../data/video_games';
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
    const normalizedTerm: string = searchTerm.toLowerCase();

    // useMemo remembers the shuffled games to avoid reshuffling on every render
    const displayedGames: VideoGame[] = useMemo(() => {
        const filtered: VideoGame[] = normalizedTerm
            ? videoGames.filter((game) => game.name.toLowerCase().includes(normalizedTerm))
            : videoGames;
        const shuffled: VideoGame[] = [...filtered].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, 20);
    }, [normalizedTerm]); // will only recompute if normalizedTerm changes

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
                    isFavorite={favorites.some(f => f.id === game.id)}
                    onToggleFavorite={onToggleFavorite}
                />
            ))}
        </div>
    );
}
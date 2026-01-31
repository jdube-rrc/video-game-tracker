import { useMemo } from 'react';
import { videoGames, type VideoGame } from '../../../data/video_games';
import GameCard from '../../common/game-card/GameCard';

type GameCatalogProps = {
    searchTerm?: string;
};

export default function GameCatalog({ searchTerm = '' }: GameCatalogProps) {
    const normalizedTerm: string = searchTerm.toLowerCase();
    const filteredGames: VideoGame[] = normalizedTerm
        ? videoGames.filter((game) => game.name.toLowerCase().includes(normalizedTerm))
        : videoGames;

    // useMemo remembers the shuffled games to avoid reshuffling on every render
    const displayedGames: VideoGame[] = useMemo(() => {
        const shuffled: VideoGame[] = [...filteredGames].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, 20);
    }, [filteredGames]); // will only rerender if filteredGames changes

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
                <GameCard key={game.id} game={game} />
            ))}
        </div>
    );
}
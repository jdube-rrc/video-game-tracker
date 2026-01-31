import { videoGames } from '../../../data/video_games';
import GameCard from '../../common/game-card/GameCard';

type GameCatalogProps = {
    searchTerm?: string;
};

export default function GameCatalog({ searchTerm = '' }: GameCatalogProps) {
    const normalizedTerm = searchTerm.toLowerCase();
    const filteredGames = normalizedTerm
        ? videoGames.filter((game) => game.name.toLowerCase().includes(normalizedTerm))
        : videoGames;

    if (filteredGames.length === 0) {
        return (
            <div className="rounded-md border border-neutral-800 bg-neutral-900 p-6 text-center text-neutral-300">
                No games match your search.
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-6 text-left sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredGames.map((game) => (
                <GameCard key={game.id} game={game} />
            ))}
        </div>
    );
}
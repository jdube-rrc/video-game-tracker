import { videoGames } from '../../../data/video_games';
import GameCard from '../../common/game-card/GameCard';

export default function GameCatalog() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-left">
            {videoGames.map((game) => (
                <GameCard key={game.id} game={game} />
            ))}
        </div>
    );
}
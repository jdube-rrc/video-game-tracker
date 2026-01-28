import type { VideoGame } from '../../../data/video_games';

type GameCardProps = {
    game: VideoGame;
};

export default function GameCard({ game }: GameCardProps) {
    return (
        <article className="relative rounded-lg overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-colors aspect-3/4 group">
            {game.artwork_url && (
                <img 
                    src={game.artwork_url} 
                    alt={game.name}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
            )}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/10 to-transparent opacity-10 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/30 backdrop-blur-md">
                <h3 className="text-base font-medium text-white truncate mb-1" title={game.name}>
                    {game.name}
                </h3>
                <a
                    href={game.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-neutral-300 hover:text-white transition-colors"
                    aria-label={`View ${game.name} on IGDB`}
                >
                    View on IGDB
                </a>
            </div>
        </article>
    );
}
import { videoGames } from '../../../data/video_games';

export default function GameCard() {
    return (
        <section className="gamecard">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {videoGames.map((game) => (
                    <article
                        key={game.id}
                        className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 transition-colors"
                    >
                        <h3 className="text-base font-medium text-neutral-100 truncate mb-2">
                            {game.name}
                        </h3>
                        <a
                            href={game.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-neutral-400 hover:text-neutral-100"
                            aria-label={`View ${game.name} on IGDB`}
                        >
                            View on IGDB
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
}
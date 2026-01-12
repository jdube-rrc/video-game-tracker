function GameCard({ title, platform, releaseDate }: { title: string; platform: string; releaseDate: string }) {
    return (
        <div className="game-card">
            <h2>{title}</h2>
            <p>Platform: {platform}</p>
            <p>Release Date: {releaseDate}</p>
        </div>
    );
}

export default GameCard;
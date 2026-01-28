import '../styles/GameCard.css'


function GameCard({ imageUrl, name, genres, description, rating, year }) {
    return (
        <div className="game-card">
            <div className="game-image">
                { imageUrl }
            </div>
            <div className="game-info">
                <h3 className="game-title">{name }</h3>
                <div className="game-genre">{genres.map(genre => genre.name).join(', ')}</div>
                <p className="game-description">{description }</p>
                <div className="game-meta">
                    <div className="game-rating">
                        <span>⭐</span>
                        <span>{rating }</span>
                    </div>
                    <div className="game-year">{ new Date(year).getFullYear() }</div>
                </div>
            </div>
        </div>
    )
}

export default GameCard
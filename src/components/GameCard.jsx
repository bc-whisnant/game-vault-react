import '../styles/GameCard.css'

// 
// 

//  style={{
//       backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
//       backgroundSize: "cover",
//       height: "100vh"
//     }}


function GameCard({ imageUrl, name, genres, description, rating, year }) {
    return (
        <div className="game-card">
            <div className="game-image" style={imageUrl ? {
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover'
            } : ''}>
            </div>
            <div className="game-info">
                <h3 className="game-title">{name}</h3>
                <div className="game-genre">{genres.map(genre => genre.name).join(', ')}</div>
                <p className="game-description">{description}</p>
                <div className="game-meta">
                    <div className="game-rating">
                        <span>⭐</span>
                        <span>{rating}</span>
                    </div>
                    <div className="game-year">{new Date(year).getFullYear()}</div>
                </div>
            </div>
        </div>
    )
}

export default GameCard
import '../styles/CardsContainer.css'
import GameCard from './GameCard'


function CardsContainer({ games }) {
    return (
        <div className="results-grid">
            {games.map((game) => (
                <GameCard
                    key={game.id}
                    imageUrl={game.background_image}
                    name={game.name}
                    genres={game.genres}
                    description={game.description}
                    rating={game.rating}
                    year={game.released}
                />
            ))}
        </div>
    )
}

export default CardsContainer
import { useState } from 'react'
import './App.css'
import Heading from './components/Heading'
import Search from './components/Search'
import Filters from './components/Filters'
import CardsContainer from './components/CardsContainer'


function App() {

    const [title, setTitle] = useState('')
    const [searchIsActive, setSearchIsActive] = useState('')
    const [filterIsActive, setFilterIsActive] = useState(false)
    const [activeFilter, setActiveFilter] = useState('')
    const [filteredGames, setFilteredGames] = useState('')
    const [searchedGames, setSearchedGames] = useState('')

    const [buttons, setActiveButton] = useState([
        {
            id: 0,
            text: 'All Games',
            isActive: true
        },
        {
            id: 1,
            text: 'Action',
            isActive: false
        },
        {
            id: 2,
            text: 'RPG',
            isActive: false
        },
        {
            id: 3,
            text: 'Shooter',
            isActive: false
        },
        {
            id: 4,
            text: 'Puzzle',
            isActive: false
        },
        {
            id: 5,
            text: 'Indie',
            isActive: false
        }
    ])
    const [games, setGames] = useState([
        {
            "id": 3498,
            "name": "Grand Theft Auto V",
            "released": "2013-09-17",
            "background_image": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
            "rating": 4.47,
            "genres": [
                {
                    "id": 4,
                    "name": "Action",
                    "slug": "action",
                    "games_count": 191374,
                    "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
                }
            ],
        },
        {
            "id": 3328,
            "name": "The Witcher 3: Wild Hunt",
            "released": "2015-05-18",
            "background_image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
            "rating": 4.64,
            "rating_top": 5,
            "ratings": [
                {
                    "id": 5,
                    "title": "exceptional",
                    "count": 5544,
                    "percent": 76.6
                },
                {
                    "id": 4,
                    "title": "recommended",
                    "count": 1179,
                    "percent": 16.29
                },
                {
                    "id": 3,
                    "title": "meh",
                    "count": 317,
                    "percent": 4.38
                },
                {
                    "id": 1,
                    "title": "skip",
                    "count": 198,
                    "percent": 2.74
                }
            ],
            "genres": [
                {
                    "id": 4,
                    "name": "Action",
                    "slug": "action",
                    "games_count": 191374,
                    "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
                },
                {
                    "id": 5,
                    "name": "RPG",
                    "slug": "role-playing-games-rpg",
                    "games_count": 61885,
                    "image_background": "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg"
                }
            ],
        },
    ])

    const setActive = (id) => {
        setActiveButton(buttons.map(button => ({
            ...button,
            isActive: button.id === id
        })))
    }


 [
        {
            "id": 3498,
            "name": "Grand Theft Auto V",
            "released": "2013-09-17",
            "background_image": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
            "rating": 4.47,
            "genres": [
                {
                    "id": 4,
                    "name": "Action",
                    "slug": "action",
                    "games_count": 191374,
                    "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
                }
            ],
        },
        {
            "id": 3328,
            "name": "The Witcher 3: Wild Hunt",
            "released": "2015-05-18",
            "background_image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
            "rating": 4.64,
            "rating_top": 5,
            "ratings": [
                {
                    "id": 5,
                    "title": "exceptional",
                    "count": 5544,
                    "percent": 76.6
                },
                {
                    "id": 4,
                    "title": "recommended",
                    "count": 1179,
                    "percent": 16.29
                },
                {
                    "id": 3,
                    "title": "meh",
                    "count": 317,
                    "percent": 4.38
                },
                {
                    "id": 1,
                    "title": "skip",
                    "count": 198,
                    "percent": 2.74
                }
            ],
            "genres": [
                {
                    "id": 4,
                    "name": "Action",
                    "slug": "action",
                    "games_count": 191374,
                    "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
                },
                {
                    "id": 5,
                    "name": "RPG",
                    "slug": "role-playing-games-rpg",
                    "games_count": 61885,
                    "image_background": "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg"
                }
            ],
        },
    ]

    const handleSearch = (e) => {
        const { value } = e.target
        setTitle(value)

        if (title !== '') {
            setSearchIsActive(true)
            setSearchedGames(games.filter(game => game.name.toLowerCase().includes(title.toLowerCase())))
        } else {
            setSearchIsActive(false)
        }
    }

    return (
        <main className="container">
            <Heading />
            <div className="search-container">
                <Search title={title} handleInputChange={handleSearch} />
                <Filters onSetActive={setActive} buttons={buttons} />
            </div>
            <CardsContainer games={searchIsActive ? searchedGames : games} />
        </main>
    )
}

export default App

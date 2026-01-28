import '../styles/Search.css'

function Search() {
    return (
        <div className="search-wrapper">
            <input type="text" className="search-input" placeholder="Search for games by title..."
                autoComplete="off" />
            <span className="search-icon">🎮</span>
        </div>
    )
}

export default Search
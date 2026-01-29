import '../styles/Search.css'


function Search({ title, handleInputChange }) {
    return (
        <div className="search-wrapper">
            <input type="text" value={ title } onChange={handleInputChange} className="search-input" placeholder="Search for games by title..."
                autoComplete="off" />
            <span className="search-icon">🎮</span>
        </div>
    )
}

export default Search
import '../styles/Filters.css'


function Filters({ buttons, onSetActive }) {
    return (
        <div className="filters">
            { buttons.map(button =>  <button onClick={() => onSetActive(button.id, button.text)} key={button.id} className={`filter-btn ${button.isActive && 'active'}` }>{ button.text }</button>)}
        </div>
    )
}

export default Filters

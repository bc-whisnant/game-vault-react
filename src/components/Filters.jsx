import '../styles/Filters.css'


function Filters({ buttons }) {
    return (
        <div className="filters">
            { buttons.map(button =>  <button key={button.id} className="filter-btn">{ button.text }</button>)}
        </div>
    )
}

export default Filters
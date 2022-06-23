import React from "react"

function Pagination( props ){
    const {page, totalPages, onLeftClick, onRightClick} = props
    return(
        <div className="pagination-container">
             <button onClick={onLeftClick}><div className="pagination-button">🠐</div></button>
             <div>{page} de {totalPages}</div>
             <button onClick={onRightClick}><div className="pagination-button">🠖</div></button>
             <input placeholder="Buscar página"/>
             <button>Buscar</button>
        </div>
    )
}

export default Pagination
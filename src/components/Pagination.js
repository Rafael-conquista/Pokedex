import React from "react"

function Pagination(props) {
    const { page, totalPages, onChange } = props
    return (
        <div className="pagination-container">
            <div>
                <input
                    className="input-number"
                    type="number"
                    name="paginas"
                    placeholder="0"
                    min="0"
                    max={totalPages}
                    onClick={onChange}
                    onKeyUp={onChange}
                />
                de {totalPages - 1}</div>
        </div>
    )
}

export default Pagination
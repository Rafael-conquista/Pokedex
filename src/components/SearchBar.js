import React, { useState, useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Searchbar = (props) => {
    const [search, setSearch] = useState("dito")
    const { onSearch } = props

    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        if (e.target.value.length === 0) {
            onSearch(undefined)
        }
    }

    const onButtonClickHandler = () => {
        onSearch(search)
        setSearch("")
        const element = document.getElementById("search")
        element.value = ''
    }

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar pokemon" onChange={onChangeHandler} id="search" />
            </div>
            <div className="searchbar-btn">
                <button onClick={onButtonClickHandler} >Buscar</button>
            </div>
        </div>
    )
}

export default Searchbar;
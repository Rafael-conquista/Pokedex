import React, {useState, useContext} from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Searchbar = (props) => {
    const [search, setSearch] = useState("dito")
    const {onSearch} = props
    const {onMultipleSearch} = props
    const {favoritePokemons} = useContext(FavoriteContext)
    const [multipleSearch, setMultipleSearch] = useState(favoritePokemons)

    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        if(e.target.value.length === 0) {
            onSearch(undefined)
        }
    }

    const onButtonClickHandler = () => {
        onSearch(search)
    }

    const onFavoriteClickHandler = () => {
        setMultipleSearch(favoritePokemons)
        onMultipleSearch(multipleSearch)
    }

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar pokemon" onChange={onChangeHandler} />
            </div>
            <div className="searchbar-btn">
                <button onClick={onButtonClickHandler} >Buscar</button>
                <button onClick={onFavoriteClickHandler} >Buscar Favoritos</button>
            </div>
        </div>
    )
}

export default Searchbar;
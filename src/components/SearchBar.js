import React from "react";
import { useState } from "react";
import { searchPokemon } from "../Api";

function SearchBar(){
    const[search, setSearch] = useState("dito")
    const [pokemon,setPokemon] = useState()

    const onChangeHandler = (e) =>{
        setSearch(e.target.value)
    }

    const  onButtonClickHandler = () =>{
        onSeachHandler(search)
    }

    const onSeachHandler = async (pokemon) =>{
        const result = await searchPokemon(pokemon)
        setPokemon(result)
      }

    return(
        <div className="searchBar-container">
            <div className="searchBar">
                <input placeholder="Buscar Pokémon" onChange={onChangeHandler}/>
            </div>
            <div className="searchBar-btn">
                <button onClick={onButtonClickHandler}>buscar</button>
            </div>
            {pokemon ? (
                <div>
                     <div>Nome: {pokemon.name}</div>
                     <div>Peso: {pokemon.weight}</div>
                     <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                </div>
            ): null}
        </div>
    )
}

export default SearchBar
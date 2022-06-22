import React from "react";
import Pokemon from "./Pokemon";

function Pokedex(props){
    const {pokemons, loading} = props
    return(
        <div>
            <div className="pokedex-header">
                <h1>Pokédex</h1>
                <div>Páginação:</div>
            </div>
            {loading ? (<div>Carregando</div>) :(
                <div className="pokedex-grid">
                    {pokemons && pokemons.map((pokemon, index) => {
                        return (
                            <Pokemon key={index} pokemon={pokemon}/>
                        )

                    })}
                </div>
            )}
        </div>
    )
}

export default Pokedex
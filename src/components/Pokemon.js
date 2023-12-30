import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import FavoriteContext from "../contexts/favoritesContext";
import TypeStyle from "../utils/DefinePokemonTypeStyle"

function Pokemon(props) {
    const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext)
    const { pokemon } = props
    const onHeartClick = () => {
        updateFavoritePokemons(pokemon.name)
    }
    const heart = favoritePokemons.includes(pokemon.name) ? '✓' : '♥'
    return (
        <Link to={"/" + pokemon.id} style={{textDecoration:'none'}}>
            <div className="pokemon-card">
                <div className="pokemon-image-container">
                    <img alt={pokemon.name} src={pokemon.sprites.front_default} className="pokemon-image" />
                </div>
                <div className="card-body">
                    <div className="card-top">
                        <h3> {pokemon.name}</h3>
                        <div>#{pokemon.id}</div>
                    </div>
                    <div className="card-bottom">
                        <div className="pokemon-type">
                            {pokemon.types.map((type, index) => {
                                const type_style = TypeStyle(type.type.name)
                                return (
                                    <div key={index} id="tipo" className={`pokemon-type-text ${type_style}`}>
                                        {type.type.name}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Pokemon

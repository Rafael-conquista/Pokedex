import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom'
import FavoriteContext from "../contexts/favoritesContext";

function Pokemon(props) {
    const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext)
    const { pokemon } = props
    const [isModalVisible, SetIsModalVisible] = useState(false)
    const onHeartClick = () => {
        updateFavoritePokemons(pokemon.name)
    }
    const heart = favoritePokemons.includes(pokemon.name) ? '✓' : '♥'
    let tipo
    return (
        <Link to={"/" + pokemon.name} style={{textDecoration:'none'}}>
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
                                switch (type.type.name) {
                                    case "grass":
                                        tipo = "grass-type"
                                        break
                                    case "poison":
                                        tipo = "poison-type"
                                        break
                                    case "fire":
                                        tipo = "fire-type"
                                        break
                                    case "flying":
                                        tipo = "flying-type"
                                        break
                                    case "water":
                                        tipo = "water-type"
                                        break
                                    case "bug":
                                        tipo = "bug-type"
                                        break
                                    case "normal":
                                        tipo = "normal-type"
                                        break
                                    case "electric":
                                        tipo = "electric-type"
                                        break
                                    case "ground":
                                        tipo = "ground-type"
                                        break
                                    case "fairy":
                                        tipo = "fairy-type"
                                        break
                                    case "fighting":
                                        tipo = "fighting-type"
                                        break
                                    case "psychic":
                                        tipo = "psychic-type"
                                        break
                                    case "rock":
                                        tipo = "rock-type"
                                        break
                                    case "steel":
                                        tipo = "steel-type"
                                        break
                                    case "ice":
                                        tipo = "ice-type"
                                        break

                                    case "ghost":
                                        tipo = "ghost-type"
                                        break
                                    case "dragon":
                                        tipo = "dragon-type"
                                        break
                                    case "dark":
                                        tipo = "dark-type"
                                        break

                                    default:
                                        console.log("outro")
                                }
                                return (
                                    <div key={index} id="tipo" className={`pokemon-type-text ${tipo}`}>
                                        {type.type.name}
                                    </div>
                                )
                            })}
                        </div>
                        <button className="pokemon-heart-btn" onClick={onHeartClick}>
                            {heart}
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    )
}



function teste(pokemon){
    console.log(pokemon)
    return pokemon
}

export default Pokemon

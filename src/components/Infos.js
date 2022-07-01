import React, { useState } from "react";
import { useParams } from 'react-router-dom'
import Navbar from "./Navbar";
import { getPokemonData, getPokemons, searchPokemon } from "../Api";
import Styles from "./Infos.module.css"

function Infos() {
    const { pokemon } = useParams()
    const [abilities, setAbilities] = useState()
    const [frontImage, setFrontImage] = useState()
    const [backImage, setBackImage] = useState()
    const [frontImageShiny, setFrontImageShiny] = useState()
    const [backImageShiny, setBackImageShiny] = useState()
    const [height, setHeight] = useState()
    const [id, setId] = useState()
    const [types, setTypes] = useState()
    const [weight, setWeight] = useState()
    const [moves, setMoves] = useState()
    var tipos
    var result

    async function fetchPokemon(pokemon) {
        if (!pokemon) {
            return (
                <div><h3>Pokemon não foi encontrado</h3></div>
            )
        }

        //setLoading(true)
        //setNotFound(false)
        result = await searchPokemon(pokemon)
        if (!result) {
            //setNotFound(true)
            return (
                <div><h3>Pokemon não foi encontrado</h3></div>
            )
        } else {
            //setPokemons([result])
            //setPage(0)
            //setTotalPages(1)
            var tipos = result.types.map((type, index) => {
                return type.type.name
            })

            const habilidade = result.abilities.map((ability, index) => {
                return ability.ability.name
            })

            const movimentos = result.moves.map((move, index) => {
                return move.move.name
            })
                setFrontImage(result.sprites.front_default)
                setFrontImageShiny(result.sprites.front_shiny)
                setBackImage(result.sprites.back_default)
                setBackImageShiny(result.sprites.back_shiny)
                setHeight(result.height)
                setId(result.id)
                setTypes(tipos)
                setAbilities(habilidade)
                setWeight(result.weight)
                setMoves(movimentos)
        }
        //setLoading(false)
    }



    function init() {
        fetchPokemon(pokemon) 
    }

    React.useEffect(() => {
        init();
    }, []);


    return (
        <div>
            <Navbar />
            <div className={Styles.page}>
                <header className={Styles.header}>
                    <h1>#{id} {pokemon}</h1>
                    <div>
                        <img className={Styles.images} src={frontImage} alt="n foi"></img>
                    </div>
                    <div>
                        <h3>{types}</h3>
                    </div>
                    
                </header>
                <body>
                    <div className={Styles.characteristics}>
                        <h3>Height: {height} cm</h3>
                        <h3>weight: {weight}</h3>
                    </div>
                    <div className={Styles.abilities}>
                        <h3>{abilities}</h3>
                    </div>
                    <h3>{moves}</h3>
                </body>
            </div>
        </div>
    )
}

export default Infos
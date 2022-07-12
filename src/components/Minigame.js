import React from "react";
import { useState, useEffect } from 'react'
import { searchPokemon } from "../Api";
import Navbar from "./Navbar";
import Style from "./Minigames.module.css"

function Minigame(){
    const [showGame, setShowGame] = useState(false)
    const [frontImage, setFrontImage] = useState()
    const [name, setName] = useState(true)
    const [answer, setAnswer] = useState(true)
    const randomPokemon = Math.floor(Math.random() * 905)
    const wrongPokemon1 = Math.floor(Math.random() * 905)
    const wrongPokemon2 = Math.floor(Math.random() * 905)
    const wrongPokemon3 = Math.floor(Math.random() * 905)

    async function fetchPokemon(pokemon){
        const result = await searchPokemon(pokemon)
        setName(result.name)
        setFrontImage(result.sprites.front_default)
    }

    function toggleGame() {
        setShowGame(!showGame) 
    }

    function init() {
        fetchPokemon(randomPokemon)
    }

    React.useEffect(() => {
        init();
    }, []);

    const onChangeHandler = (e) => {
        setAnswer(e.target.value)
    }

    const onButtonClickHandler = () => {
        if(answer === name){
            console.log("está correto")
        }else{
            console.log("errado")
        }
    }

    return(
        <div className={Style.all}>
            <Navbar/>
            <div className={Style.wpage}>
                <h1 className={Style.tittle}> PokéChallenge</h1>
                <p>Você consegue acertar todos?</p>
                {!showGame ? 
                    <button className={Style.button} onClick={toggleGame}>
                        Começar
                    </button> : 
                    <div>
                        <div>
                            <img src={frontImage} alt="n foi"></img>
                        </div>
                        <form>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Digite o nome do Pokémon"
                                onChange={onChangeHandler}
                            />
                            <button type="submit" onClick={onButtonClickHandler}>Responder</button>
                        </form>
                        {console.log(name)}
                    </div>
                }
            </div>
        </div>
    )
}

export default Minigame
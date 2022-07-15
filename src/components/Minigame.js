import React from "react";
import { useState, useEffect } from 'react'
import { searchPokemon } from "../Api";
import Navbar from "./Navbar";
import Style from "./Minigames.module.css"

function Minigame() {
    const [showGame, setShowGame] = useState(false)
    const [frontImage, setFrontImage] = useState()
    const [name, setName] = useState([])
    const [answer, setAnswer] = useState(true)
    const [pokemon1, setPokemon1] = useState()
    const [pokemon2, setPokemon2] = useState()
    const [pokemon3, setPokemon3] = useState()
    const [rightAnswer, setRightAnswer] = useState(false)
    const [wrongAnswer, setWrongAnswer] = useState(false)
    const randomPokemon = Math.floor(Math.random() * 905)

    var options = []

    async function fetchPokemon(pokemon, i) {
        const result = await searchPokemon(pokemon)
        if (i === 0) {
            setFrontImage(result.sprites.front_default)
            setName(result.name)
        }
        if (i === 1) {
            setPokemon1(result.name)
        }
        if (i === 2) {
            setPokemon2(result.name)
        }
        if (i === 3) {
            setPokemon3(result.name)
        }
    }

    function toggleGame() {
        generateRandonNumbers()
        for (var cont = 0; cont < 3; cont++) {
            fetchPokemon(options[cont], cont + 1)
        }
        setShowGame(!showGame)
    }

    function init() {
        fetchPokemon(randomPokemon, 0)
    }

    React.useEffect(() => {
        init();
    }, []);

    function verificaResposta(value){
        setRightAnswer(false)
        setWrongAnswer(false)
        if (value === name) {
            setRightAnswer(true)

        } else {
            setWrongAnswer(true)
        }
    }

    const playAgainHandler = () => {
        document.location.reload(true)
    }

    const selectOption1 = () =>{
        var conteudo = document.getElementById("choice1").value
        verificaResposta(conteudo)
    }

    const selectOption2 = () =>{
        var conteudo = document.getElementById("choice2").value
        verificaResposta(conteudo)
    }

    const selectOption3 = () =>{
        var conteudo = document.getElementById("choice3").value
        verificaResposta(conteudo)
    }

    const selectOption4 = () =>{
        var conteudo = document.getElementById("choice4").value
        verificaResposta(conteudo)
    }

    const generateRandonNumbers = () => {
        for (var cont = 0; cont < 3; cont++) {
            options.push(Math.floor(Math.random() * 905))
        }
    }

    return (
        <div className={Style.all}>
            <Navbar />
            <div className={Style.wpage}>
                <h1 className={Style.tittle}> PokéChallenge</h1>
                <p>Quem é esse Pokémon?</p>
                {!showGame ?
                    <button className={Style.button} onClick={toggleGame}>
                        Começar
                    </button> :
                    <div>
                        <div>
                            <img className={Style.pokephoto} src={frontImage} alt="n foi"></img>
                        </div>
                        <div className={Style.alternatives_container}>
                            <button
                                className={Style.alternatives}
                                value={name}
                                id = "choice1"
                                onClick={selectOption1}>
                                    {name}
                            </button>
                            <button
                                className={Style.alternatives} 
                                value={pokemon1}
                                id = "choice2"
                                onClick={selectOption2}>
                                    {pokemon1}
                            </button>
                            <button
                                className={Style.alternatives} 
                                value={pokemon2}
                                id="choice3"
                                onClick={selectOption3}>
                                    {pokemon2}
                            </button>
                            <button
                             className={Style.alternatives} 
                             value={pokemon3}
                             id="choice4"
                             onClick={selectOption4}>
                                {pokemon3}
                            </button>
                        </div>
                    </div>
                }
                {rightAnswer ?
                    <div className={Style.result}>
                        <div> voce acertou!!</div>
                        <button onClick={playAgainHandler}>Jogar Novamente</button>
                    </div>
                    : null}
                {wrongAnswer ?
                    <div className={Style.result}>
                        <div> errouuuuuu!!</div>
                        <button onClick={playAgainHandler}>Jogar Novamente</button>
                    </div>
                    : null}
                <div>

                </div>
            </div>
        </div>
    )
}

export default Minigame
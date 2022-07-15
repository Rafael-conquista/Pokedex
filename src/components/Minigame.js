import React from "react";
import { useState, useEffect } from 'react'
import { searchPokemon } from "../Api";
import Navbar from "./Navbar";
import Style from "./Minigames.module.css"

function Minigame() {
    const [showGame, setShowGame] = useState(false)
    const [frontImage, setFrontImage] = useState()
    const [name, setName] = useState([])
    const [pokemon1, setPokemon1] = useState()
    const [pokemon2, setPokemon2] = useState()
    const [pokemon3, setPokemon3] = useState()
    const [pokemon4, setPokemon4] = useState()
    const [rightAnswer, setRightAnswer] = useState(false)
    const [wrongAnswer, setWrongAnswer] = useState(false)
    const randomPokemon = Math.floor(Math.random() * 905)
    const [gameOver,setGameOver] = useState(false)
    var options = []
    var randomize = Math.floor(Math.random() * 4)
     

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
        if (i === 4) {
            setPokemon4(result.name)
        }
    }

    function init() {
        fetchPokemon(randomPokemon, 0)
        generateRandonNumbers()
        for (var cont = 0; cont < 4; cont++) {
            fetchPokemon(options[cont], cont + 1)
        }
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
        setGameOver(true)
    }

    const selectOption2 = () =>{
        var conteudo = document.getElementById("choice2").value
        verificaResposta(conteudo)
        setGameOver(true)
    }

    const selectOption3 = () =>{
        var conteudo = document.getElementById("choice3").value
        verificaResposta(conteudo)
        setGameOver(true)
    }

    const selectOption4 = () =>{
        var conteudo = document.getElementById("choice4").value
        verificaResposta(conteudo)
        setGameOver(true)
    }

    const generateRandonNumbers = () => {
        for (var cont = 0; cont < 4; cont++) {
            options.push(Math.floor(Math.random() * 905))
        }
    }

    return (
        <div className={Style.all}>
            <Navbar />
            <div className={Style.wpage}>
                <h1 className={Style.tittle}> PokéChallenge</h1>
                <p>Quem é esse Pokémon?</p>
                    <div>
                        <div>
                            <img className={Style.pokephoto} src={frontImage} alt="n foi"></img>
                        </div>
                        {gameOver ? null : 
                            <div>
                                <div className={Style.alternatives_container}>
                                    <button
                                        className={Style.alternatives}
                                        value={randomize === 0 ? name : pokemon1}
                                        id = "choice1"
                                        onClick={selectOption1}>
                                            {randomize === 0 ? name : pokemon1}
                                    </button>
                                    <button
                                        className={Style.alternatives} 
                                        value={randomize === 1 ? name : pokemon2}
                                        id = "choice2"
                                        onClick={selectOption2}>
                                            {randomize === 1 ? name : pokemon2}
                                    </button>
                                    <button
                                        className={Style.alternatives} 
                                        value={randomize === 2 ? name : pokemon3}
                                        id="choice3"
                                        onClick={selectOption3}>
                                            {randomize === 2 ? name : pokemon3}
                                    </button>
                                    <button
                                    className={Style.alternatives} 
                                    value={randomize === 3 ? name : pokemon4}
                                    id="choice4"
                                    onClick={selectOption4}>
                                        {randomize === 3 ? name : pokemon4}
                                    </button>
                                </div>
                            </div>
                        }
                    </div>
                {rightAnswer ?
                    <div className={Style.result}>
                        <div> <p>voce acertou!!</p></div>
                        <button className={Style.playAgain} onClick={playAgainHandler}>Jogar Novamente</button>
                    </div>
                    : null}
                {wrongAnswer ?
                    <div className={Style.result}>
                        <div> 
                            <p>Resposta incorreta</p>
                            A resposta era {name}
                        </div>
                        <button className={Style.playAgain} onClick={playAgainHandler}>Jogar Novamente</button>
                    </div>
                    : null}
                <div>

                </div>
            </div>
        </div>
    )
}

export default Minigame
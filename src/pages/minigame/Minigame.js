import React from "react";
import { useState, useEffect } from 'react'
import { searchPokemon } from "../../Api";
import Navbar from "../../components/Navbar";
import Style from "./Minigames.module.css"

function Minigame() {
    const [frontImage, setFrontImage] = useState()
    const [name, setName] = useState([])
    const [pokemon1, setPokemon1] = useState()
    const [pokemon2, setPokemon2] = useState()
    const [pokemon3, setPokemon3] = useState()
    const [pokemon4, setPokemon4] = useState()
    const [rightAnswer, setRightAnswer] = useState(false)
    const [wrongAnswer, setWrongAnswer] = useState(false)
    const randomPokemon = Math.floor(Math.random() * 905)
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
        var cont = 0
        options.forEach((option)=>{
            fetchPokemon(option, cont + 1)
            cont ++
        })
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

    const selectedOption = (e) =>{
        var conteudo = e.target.value
        verificaResposta(conteudo)
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
                        {rightAnswer || wrongAnswer ? null : 
                            <div>
                                <div className={Style.alternatives_container}>
                                    <button
                                        className={Style.alternatives}
                                        value={randomize === 0 ? name : pokemon1}
                                        id = "choice1"
                                        onClick={selectedOption}>
                                            {randomize === 0 ? name : pokemon1}
                                    </button>
                                    <button
                                        className={Style.alternatives} 
                                        value={randomize === 1 ? name : pokemon2}
                                        id = "choice2"
                                        onClick={selectedOption}>
                                            {randomize === 1 ? name : pokemon2}
                                    </button>
                                    <button
                                        className={Style.alternatives} 
                                        value={randomize === 2 ? name : pokemon3}
                                        id="choice3"
                                        onClick={selectedOption}>
                                            {randomize === 2 ? name : pokemon3}
                                    </button>
                                    <button
                                    className={Style.alternatives} 
                                    value={randomize === 3 ? name : pokemon4}
                                    id="choice4"
                                    onClick={selectedOption}>
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
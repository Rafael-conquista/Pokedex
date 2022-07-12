import React from "react";
import { useState, useEffect } from 'react'
import { searchPokemon } from "../Api";
import Navbar from "./Navbar";
import Style from "./Minigames.module.css"

function Minigame(){
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

    async function fetchPokemon(pokemon,i){
        const result = await searchPokemon(pokemon)
        if(i === 0){
            setFrontImage(result.sprites.front_default)
            setName(result.name)
        }
        if(i === 1){
            setPokemon1(result.name)
        }
        if(i === 2){
            setPokemon2(result.name)
        }
        if(i === 3){
            setPokemon3(result.name)
        }
    }

    function toggleGame() {
        generateRandonNumbers()
        for(var cont = 0; cont < 3; cont++){
            fetchPokemon(options[cont], cont + 1)
        }
        setShowGame(!showGame)
    }

    function init() {
        fetchPokemon(randomPokemon,0)
    }

    React.useEffect(() => {
        init();
    }, []);

    const onChangeHandler = (e) => {
        setAnswer(e.target.value)
    }

    const onButtonClickHandler = () => {
        setRightAnswer(false)
        setWrongAnswer(false)
        if(answer === name){
            setRightAnswer(true)

        }else{
            setWrongAnswer(true)
        }
    }

    const playAgainHandler = () => {
        document.location.reload(true)
    }

    const generateRandonNumbers = () =>{
        for(var cont=0; cont<3;cont ++){
            options.push(Math.floor(Math.random()*905))
        }
    }

    return(
        <div className={Style.all}>
            <Navbar/>
            <div className={Style.wpage}>
                <h1 className={Style.tittle}> PokéChallenge</h1>
                <p>Quem é esse Pokémon?</p>
                {!showGame ? 
                    <button className={Style.button} onClick={toggleGame}>
                        Começar
                    </button> : 
                    <div>
                        <div>
                            <img src={frontImage} alt="n foi"></img>
                        </div>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Digite o nome do Pokémon"
                                onChange={onChangeHandler}
                            />
                            <button type="submit" onClick={onButtonClickHandler}>Responder</button>
                    </div>
                }
                {rightAnswer ? 
                    <div>
                        <div> voce acertou!!</div>
                        <button onClick={playAgainHandler}>Jogar Novamente</button>    
                    </div>
                : null}
                {wrongAnswer ? 
                    <div>
                        <div> errouuuuuu!!</div> 
                        <button onClick={playAgainHandler}>Jogar Novamente</button>    
                    </div>
                : null}
                <div>a. {name}</div>
                <div>b. {pokemon1}</div>
                <div>c. {pokemon2}</div>
                <div>d. {pokemon3}</div>
            </div>
        </div>
    )
}

export default Minigame
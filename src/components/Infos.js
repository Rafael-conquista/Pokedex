import React,{ useState } from "react";
import { useParams } from 'react-router-dom'
import Navbar from "./Navbar";
import { getPokemonData, getPokemons, searchPokemon } from "../Api";

function Infos() {
    const { pokemon } = useParams()
    const [abilities,setAbilities] = useState()
    const [frontImage,setFrontImage] = useState()
    const [backImage,setBackImage] = useState()
    const [frontImageShiny,setFrontImageShiny] = useState()
    const [backImageShiny,setBackImageShiny] = useState()
    const [height,setHeight] = useState()
    const [id,setId] = useState()
    const [types,setTypes] = useState()
    const [weight,setWeight] = useState()
    

    var result

    async function fetchPokemon(pokemon){
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
            return(
                <div><h3>Pokemon não foi encontrado</h3></div>
            )
          } else {
            console.log(result)
            //setPokemons([result])
            //setPage(0)
            //setTotalPages(1)
            const tipos = result.types.map((type, index) => {
                return type.type.name
            })

            const habilidade = result.abilities.map((ability, index) => {
                return ability.ability.name
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
            //console.log(habilidade)
          }
          //setLoading(false)
    }
    
    

    function init(){
        fetchPokemon(pokemon)
    }

    React.useEffect(() => {
        init();
    },[]);

    return (
        <div>
            <Navbar />
            <header>
                <h1>{pokemon}</h1>
                <img src={frontImage} alt="n foi"></img>
                <img src={backImage} alt="n foi"></img>
                <img src={frontImageShiny} alt="n foi"></img>
                <img src={backImageShiny} alt="n foi"></img>
                <h3>Height: {height} cm</h3>
                <h3>weight: {weight}</h3>
                <h3>#{id}</h3>
                <h3>tipos: {types} </h3>
                <h3>habilidades: {abilities}</h3>
            </header>
        </div>
    )
}

export default Infos
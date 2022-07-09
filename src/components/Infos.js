import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Navbar from "./Navbar";
import { getPokemonData, getPokemons, searchPokemon } from "../Api";
import Styles from "./Infos.module.css"

function Infos() {
    const { pokemon } = useParams()
    const [frontImage, setFrontImage] = useState()
    const [backImage, setBackImage] = useState()
    const [imagem, setImagem] = useState(true)
    const [name, setName] = useState(true)
    const [height, setHeight] = useState()
    const [id, setId] = useState()
    const [type1, setType1] = useState()
    const [type2, setType2] = useState()
    const [weight, setWeight] = useState()
    const [habilidade1, setHabilidade1] = useState()
    const [habilidade2, setHabilidade2] = useState()
    const [habilidade3, setHabilidade3] = useState()
    var result
    var previousId = id - 1
    var nextId = id + 1

    async function fetchPokemon(pokemon) {
        let tipo1
        let tipo2
        let habilidade1
        let habilidade2
        let habilidade3
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
            if (tipos[0]) {
                tipo1 = tipos[0]
                setType1(tipo1)
            }
            if (tipos[1]) {
                tipo2 = tipos[1]
                setType2(tipo2)
            }

            const habilidade = result.abilities.map((ability, index) => {
                return ability.ability.name
            })

            if (habilidade[0]) {
                habilidade1 = habilidade[0]
                setHabilidade1(habilidade1)
            }
            if (habilidade[1]) {
                habilidade2 = habilidade[1]
                setHabilidade2(habilidade2)
            }

            if (habilidade[2]) {
                habilidade3 = habilidade[2]
                setHabilidade3(habilidade3)
            }

            setFrontImage(result.sprites.front_default)
            setBackImage(result.sprites.back_default)
            setHeight(result.height)
            setId(result.id)
            setWeight(result.weight)
            setImagem(frontImage)
            setName(result.name)
        }
    }

    function init() {
        fetchPokemon(pokemon)
    }

    React.useEffect(() => {
        init();
    }, []);

    React.useEffect(() => {
        init();
    }, [pokemon]);

    const tipo = (tipo) => {
        switch (tipo) {
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
        return tipo
    }

    function changeImage() {
        if (imagem === true) {
            setImagem(false)
            return false
        } else {
            setImagem(true)
            return true
        }
    }

    return (
        <div>
            <Navbar />
            <div className={Styles.page}>
                <div className={Styles.button}>
                    {id === 1 ? "" : <Link to= {"/" + previousId}><button>Pokémon Anterior</button></Link>
                    }
                    <Link to={"/" + nextId}>
                        <button>Próximo Pokémon</button>
                    </Link>
                </div>
                <div className={Styles.container_pokemon}>
                    <div className={`${Styles.pokemon_infos} fade-in`}>
                        <header className={Styles.header}>
                            <p>#{id}</p>
                            <h1 className="tracking-in-expand"> {name}</h1>
                            <div className={Styles.image_container} onClick={changeImage}>
                                {imagem ? <img className={Styles.images} src={backImage} alt="n foi"></img> : <img className={Styles.images} src={frontImage} alt="n foi"></img>}
                            </div>
                            <div className="pokemon-type">
                                <div className={`pokemon-type-text ${tipo(type1)}`}>
                                    {type1}
                                </div>
                                {type2 ? <div className={`pokemon-type-text ${tipo(type2)}`}>
                                    {type2}
                                </div> : ""}
                            </div>

                        </header>
                        <body>
                            <div className={Styles.characteristics}>
                                <h3>Height: {height}</h3>
                                <h3>weight: {weight}</h3>
                            </div>
                            <hr />
                            <div className={Styles.abilities}>
                                <h3>
                                    {habilidade1}
                                </h3>
                                <h3>
                                    {habilidade2}
                                </h3>
                                <h3>
                                    {habilidade3 ? habilidade3 : ""}
                                </h3>
                            </div>
                        </body>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Infos
import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Navbar from "../../components/Navbar";
import { searchPokemon } from "../../Api";
import Styles from "./Infos.module.css"
import TypeStyle from "../../utils/DefinePokemonTypeStyle"

function Infos() {
    const { pokemon } = useParams()
    const [frontImage, setFrontImage] = useState()
    const [name, setName] = useState(true)
    const [height, setHeight] = useState()
    const [id, setId] = useState()
    const [type1, setType1] = useState("")
    const [type2, setType2] = useState("")
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
            setHeight(result.height)
            setId(result.id)
            setWeight(result.weight)
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
        setType2("")
        init();
    }, [pokemon]);

    return (
        <div>
            <Navbar />
            <div className={Styles.page}>
                <div className={Styles.button}>
                    {id === 1 ? "" :
                        <Link to={"/" + previousId}>
                            <button>Pokémon Anterior</button>
                        </Link>
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
                            <div className={Styles.image_container}>
                                <img className={Styles.images} src={frontImage} alt="n foi"></img>
                            </div>
                            <div className="pokemon-type">
                                <div className={`pokemon-type-text ${TypeStyle(type1)}`}>
                                    {type1}
                                </div>
                                {type2 ? <div className={`pokemon-type-text ${TypeStyle(type2)}`}>
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
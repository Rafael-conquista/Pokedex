import React, { useState } from "react";
import pokemon_names from "./poke_names";

const Searchbar = (props) => {
    const [search, setSearch] = useState("dito")
    const [ list, setList ] = useState([])
    const { onSearch } = props

    const compareSearch = (string) =>{
        if (string.length > 1){
           let similar_list = pokemon_names.filter(elemento => elemento.toLowerCase().startsWith(string))
           setList(similar_list)
           //precisa substituir quando clicar em um dos nome
           //arrumar a estilização
           console.log(list)
        }
    }

    const handleSearch = (e) =>{
        console.log(e.target.textContent)
        const element = document.getElementById("search")
        element.value = e.target.textContent
        setSearch(element.value)
        setList([])
    }

    const onChangeHandler = (e) => {
        let string = e.target.value
        string = string.toLowerCase()
        setSearch(string)
        compareSearch(string)
        if (e.target.value.length === 0) {
            onSearch(undefined)
            setList([])
        }
    }

    const onButtonClickHandler = () => {
        onSearch(search)
        setSearch("")
        const element = document.getElementById("search")
        element.value = ''
    }

    return (
        <div>
            <div className="searchbar-container">
                <div className="searchbar">
                    <input placeholder="Buscar pokemon" onChange={onChangeHandler} id="search" autoComplete="off"/>
                    <div className='sugestoes'>
                        {list.map((name) => {
                            return (
                                <div className="nome_sugestoes" onClick={handleSearch}>
                                    <span id={name}>{name}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="searchbar-btn">
                    <button onClick={onButtonClickHandler} >Buscar</button>
                </div>
            </div>
        </div>
        
    )
}

export default Searchbar;
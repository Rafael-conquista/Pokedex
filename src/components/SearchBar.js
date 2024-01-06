import React, { useState, useContext } from "react";
import pokemon_names from "./poke_names";

const Searchbar = (props) => {
    const [search, setSearch] = useState("dito")
    const [ list, setList ] = useState([])
    const { onSearch } = props

    const compareSearch = (string) =>{
        if (string.length > 1){
           let similar_list = pokemon_names.filter(elemento => elemento.toLowerCase().startsWith(string))
           setList(similar_list)
           console.log(list)
        }
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
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar pokemon" onChange={onChangeHandler} id="search" />
                <div>
                    {list.map((name) => {
                        return (
                            <div className=''>
                                <span>{name}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="searchbar-btn">
                <button onClick={onButtonClickHandler} >Buscar</button>
            </div>
        </div>
    )
}

export default Searchbar;
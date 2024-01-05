import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";
import Loading from '../img/loading.svg'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Pokedex = (props) => {
  const { pokemons, loading, page, setPage, totalPages } = props;
  const [search, setSearch] = useState(0)

  useEffect(() => {
    setPage(parseInt(search));
  }, [search, setPage]);

  const SetNewPage = (e) => {
    const evento = e.target.id
    if (pokemons.length == 1){
      window.location.reload();
    }
    else if (evento === "avante") {
      if (page !== totalPages - 1) {
        setPage(parseInt(page) + 1)
      }
    }
    else if (evento === "retroceder") {
      if (page !== 0) {
        setPage(page - 1)
      }
    }
    else if (evento === "primeira") {
      setPage(0)
    }
    if (evento === "ultima") {
      setPage(totalPages - 1)
    }
  }

  return (
    <div>
      <div className="pokedex-header page-btn">
        <button id="retroceder" onClick={SetNewPage} className="searchbar-btn"><FaArrowLeft /></button>
        <button id="primeira" onClick={SetNewPage} className="searchbar-btn">Primeira página</button>
        <h1>{page + 1}</h1>
        <button id="ultima" onClick={SetNewPage} className="searchbar-btn">última página</button>
        <button id="avante" onClick={SetNewPage}><FaArrowRight /></button>
      </div>
      {loading ? (
        <div className="loading"><img src={Loading} alt="Carregando" /></div>
      ) : (
        <div className="pokedex-grid fade-in fade-out">
          {pokemons && pokemons.map((pokemon, index) => {
            return (
              <div key={index}>
                <Pokemon key={index} pokemon={pokemon} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
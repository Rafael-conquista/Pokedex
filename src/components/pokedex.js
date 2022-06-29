import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";
import Loading from '../img/loading.svg'

const Pokedex = (props) => {
  const { pokemons, loading, page, setPage, totalPages } = props;
  const [search, setSearch] = useState(0)

  useEffect(() => {
    setPage(search);
  }, [search]);

  const onChangeHandler = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <Pagination
          page={page}
          totalPages={totalPages}
          //onSubmitButton={onSubmitButtonHandler}
          onChange={onChangeHandler}
        />
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
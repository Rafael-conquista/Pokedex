import React, { useEffect, useState } from "react";
import { getPokemonData, getPokemons, searchPokemon } from "../Api";
import "../App.css";
import Navbar from "./Navbar";
import Pokedex from "./pokedex";
import Searchbar from "./SearchBar";
import { FavoriteProvider } from "../contexts/favoritesContext";

const favoritesKey = "f"
function Home() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const itensPerPage = 21;
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  };

  const loadFavoritePokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey)) || []
    setFavorites(pokemons)
  }

  useEffect(() => {
    loadFavoritePokemons()
  }, []);

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const updateFavoritePokemons = (name) => {
    const updatedFavorites = [...favorites]
    const favoriteIndex = favorites.indexOf(name)
    if (favoriteIndex >= 0) {
      updatedFavorites.splice(favoriteIndex, 1);
    } else {
      updatedFavorites.push(name);
    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites))
    setFavorites(updatedFavorites);
  }

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }

    setLoading(true)
    setNotFound(false)
    const result = await searchPokemon(pokemon)
    if (!result) {
      setNotFound(true)
    } else {
      setPokemons([result])
      setPage(0)
      setTotalPages(1)
    }
    setLoading(false)
  }
  const onMultipleSearchHandler = async (favorites) => {
    var data
    try {
      setLoading(true);
      setNotFound(false);
      for (let i = pokemons.length; i > 0; i--) {
        pokemons.pop();
      }
      for (let i = 0; i < favorites.length; i++) {
        data = await searchPokemon(favorites[i])
        pokemons.push(data)
      }
      if (!pokemons) {
        setNotFound(true)
      } else {

        setPage(0)
        setTotalPages(1)
      }
      setLoading(false)
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  }

  return (
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons,
      }}
    >
      <div>
        <Navbar />
        <Searchbar onSearch={onSearchHandler} onMultipleSearch={onMultipleSearchHandler} />
        {notFound ? (
          <div class-name="not-found-text"> Resultado não encontrado :(</div>
        ) :
          (<Pokedex
            pokemons={pokemons}
            loading={loading}
            page={page}
            setPage={setPage}
            totalPages={totalPages}
          />)}
      </div>
    </FavoriteProvider>
  );
}

export default Home;
import React, {useContext} from "react"
import FavoriteContext, { FavoriteProvider } from "../contexts/favoritesContext"

function Navbar(){
    const {favoritePokemons} = useContext(FavoriteContext)

    const logoimg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return(
        <div>
            <nav>
                <div>
                    <img
                        alt ="pokéapi-logo"
                        src= {logoimg}
                        className="navbar-img"
                    />
                </div>
                <div>
                    ❤ Favoritos:  {favoritePokemons.length}
                </div>
            </nav>
        </div>
    )
}

export default Navbar
import React, { useContext } from "react"
import { Link } from 'react-router-dom'
import FavoriteContext from "../contexts/favoritesContext"

function Navbar() {
    const { favoritePokemons } = useContext(FavoriteContext)

    const logoimg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return (
        <div>
            <nav>
                <div>
                    <Link to='/'>
                        <img
                            alt="pokéapi-logo"
                            src={logoimg}
                            className="navbar-img"
                        />
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
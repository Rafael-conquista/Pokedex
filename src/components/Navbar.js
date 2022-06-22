import React from "react"

function Navbar(){
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
            </nav>
        </div>
    )
}

export default Navbar
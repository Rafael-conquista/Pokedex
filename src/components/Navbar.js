import { Link } from 'react-router-dom'

function Navbar() {

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
                <div>
                    <Link to="/minigame" style={{color: 'white'}}>
                        <h3>Minigame</h3>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
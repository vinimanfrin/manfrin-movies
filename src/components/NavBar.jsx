import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav id="navbar">
            <h2>
                <Link to="/">Manfrin Movies</Link>
            </h2>
            <Link to="/movies/1">Movie</Link>
            <Link to="/search" >Search</Link>
        </nav>
    )
}

export default NavBar
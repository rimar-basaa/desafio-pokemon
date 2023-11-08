import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="logo"></div>
            <div>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/pokemones">Pokemones</NavLink>                
            </div>
        </div>
    );
};

export default Navbar;
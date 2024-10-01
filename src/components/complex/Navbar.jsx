import { Link } from "react-router-dom";
import "../../styling/navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li>
                    <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
                </li>
                <li>
                    <Link to="/despre" className={location.pathname === "/despre" ? "active" : ""}>Despre</Link>
                </li>
                <li>
                    <Link to="/galerie">Galerie</Link>
                </li>
                <li>
                    <Link to="/obiective-turistice">Obiective Turistice</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

import { Link, useLocation } from "react-router-dom";
import "../../styling/navbar.css";

const Navbar = () => {
    const location= useLocation();

    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li>
                    <Link to="/" className={location.pathname === "/" ? "active" : ""}>Acasă</Link>
                </li>
                <li>
                    <Link to="/despre" className={location.pathname === "/despre" ? "active" : ""}>Despre noi</Link>
                </li>
                <li>
                    <Link to="/galerie" className={location.pathname === "/galerie" ? "active" : ""}>Galerie</Link>
                </li>
                <li>
                    <Link to="/obiective-turistice" className={location.pathname === "/obiective-turistice" ? "active" : ""}>Obiective Turistice</Link>
                </li>
                <li>
                    <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contacte</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to={"/"} className="navbar-logo">
                <img className="logo" src="/images/logo.png" alt="logo" />
            </Link>

            <ul className="navbar__list">
                <li className="navbar__item">
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink to={"/about-me"}>About Me</NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink to={"/contacts"}>Contacts</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

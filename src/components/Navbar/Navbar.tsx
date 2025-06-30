import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <img className="logo" src="/images/logo.png" alt="logo" />

            <ul className="navbar__list">
                <li className="navbar__item">
                    <a href="#">Home</a>
                </li>
                <li className="navbar__item">
                    <a href="#about-me">About me</a>
                </li>
                <li className="navbar__item">
                    <a href="#contact">Contacts</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

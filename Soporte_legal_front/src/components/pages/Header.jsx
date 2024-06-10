import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-scroll"; 


function Header(){

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return(
        <header>
            <nav className={ "nav-bar" }>
                <div className={"header-container"}>
                    <ul className="menu-list navbar-nav">
                        <li className="nav-item">
                            <Link to={"/"} className={"nav-item"}>
                                <img className="icon-home" src="../../../../images/logo.png"/>
                            </Link>
                        </li>

                        <li id="hambur-menu" className={"nav-item"}>
                            <Link to="home" smooth={true} duration={500}>
                                Inicio
                            </Link>
                        </li>

                        <li id="hambur-menu" className={"nav-item"}>
                            <Link to="about" smooth={true} duration={500}>
                                Quienes somos
                            </Link>
                        </li>
                        
                        <li id="hambur-menu" className={"nav-item"}>
                            <Link to="work" smooth={true} duration={500}>
                                Como trabajamos
                            </Link>
                        </li>
                        <li id="hambur-menu" className={"nav-item"}>
                            <Link to="contact" smooth={true} duration={500}>
                                Contacto
                            </Link>
                        </li>
                    </ul>
                    <div className="menu_togle" onClick={toggleMenu}>
                        <RxHamburgerMenu />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;

import { Link } from "react-router-dom";


function Header(){

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

                        <li className={"nav-item"}>
                            <Link to={"/"}>
                                Inicio
                            </Link>
                        </li>

                        <li className={"nav-item"}>
                            <Link to={"/about"}>
                                Quienes somos
                            </Link>
                        </li>
                        
                        <li className={"nav-item"}>
                            <Link to={"/work"} >
                                Como trabajamos
                            </Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link to={"/contact"}>
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;

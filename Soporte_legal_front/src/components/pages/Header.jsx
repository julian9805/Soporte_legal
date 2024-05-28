import { Link } from "react-router-dom";


function Header(){

    return(
        <section className={ "header" }>
            <div className={"header-container"}>
                <ul>
                    <li>
                        <Link to={"/"} className={"nav-bar"}>
                            <span>Inicio</span>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to={"/about"} className={"nav-bar"}>
                            <span>Quienes Somos</span>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span className={"title-header"}>SOPORTE LEGAL</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to={"/work"} className={"nav-bar"}>
                            <span>Como Trabajamos</span>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to={"/contact"} className={"nav-bar"}>
                            <span>Contacto</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Header;

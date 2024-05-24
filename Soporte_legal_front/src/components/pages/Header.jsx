import { Link } from "react-router-dom";


function Header(){

    return(
        <section className={ "header" }>
            <div className={"header-container"}>
                <ul>
                    <li>
                        <Link to={"/"}>
                            <span>Inicio</span>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to={"/about"}>
                            <span>Quienes Somos</span>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to={"/work"}>
                            <span>Como Trabajamos</span>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to={"/contact"}>
                            <span>Contacto</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Header;

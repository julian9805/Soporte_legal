import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";


function Footer(){

    return(
        <>
            <section className={"footer"}>
                <div className={"footer-icons"}>
                    <img src=""/>
                    <p>Soporte Legal</p>
                    <ul className="icons">
                        <li>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaFacebook/>
                        </a>
                        </li>
                        <li>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaInstagram/>
                        </a>
                        </li>
                    </ul>
                </div>
                <div className={"footer-container"}>
                    <h3>Informacion de contacto</h3>
                    <SlLocationPin/>
                </div>
            </section>
        </>
    )
}

export default Footer;

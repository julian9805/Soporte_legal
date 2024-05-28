import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";

function Footer() {
    return (
        <section className="footer">
            <div className="footer-icons">
                <p>Soporte Legal</p>
                <ul className="icons">
                    <li>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaFacebook />
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaInstagram />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer-container">
                <h3>Información de contacto</h3>
                <SlLocationPin className="location-icon" />
                <p>Paseo de la Castellana 142</p>
            </div>
            <div>
                <p>653552048</p>
                <p>911234567</p>
            </div>
            <div>
                <p>Soportelegal615@gmail.com</p>
            </div>
        </section>
    );
}

export default Footer;

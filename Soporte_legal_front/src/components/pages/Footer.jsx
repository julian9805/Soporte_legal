import { FaFacebook, FaInstagram } from "react-icons/fa";
import { CiPhone, CiMail } from "react-icons/ci";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-icons">
                <h3>Puede contactarnos en nuestras redes sociales</h3>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaFacebook />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaInstagram />
                        </a>
                    </li>
                </ul>
                <p>© 2024 Soporte Legal, Paseo de la Castellana 142</p> 
            </div>
            <div className="footer-container">
                <h3>Información de contacto</h3>
                <div className="icon-component">
                    <CiPhone />
                    <a href="tel:+34653552048">653552048</a>
                </div>
                <div className="icon-component">
                    <CiPhone />
                    <a href="tel:+34911234567">911234567</a>
                </div>
                <div className="icon-component">
                    <CiMail />
                    <a href="mailto:soportelegal615@gmail.com">soportelegal615@gmail.com</a>
                </div>
                
            </div>
        </footer>
    );
}

export default Footer;

import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import "./Home.scss";
import About from "../About/About";
import Work from "../Work/Work";
import Contact from "../Contact/Contact";

function Home(){

    return(
        <>
            <Header/>
                <main>
                 
                    <section id="home" className="home-container">
                        <div className="banner-home">
                            <div className="content-banner">
                                <h1>Resolvemos tu caso legal en un clic. Confía en nuestro equipo experto hoy.</h1>
                                <Link to={"/contact"}>
                                    <button className="home-button">Contactanos</button>
                                </Link>

                            </div>

                        </div>
                        
                    </section>

                    <About/>

                    <Work/>

                    <Contact/>
                    
                </main>
            <Footer/>
        </>
    )
}

export default Home;
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import "./_home.scss";

function Home(){

    return(
        <>
        <Header/>
        <section className="home-container">
            <div className="title-home">
                <h1>DECUBRE Y CONOCE COMO TRABAJAMOS</h1>
                <Link to={"/contact"}>
                    <button>Contactanos</button>
                </Link>
                

            </div>
            <div className="image-home">
                <img src="../../../../public/images/238413007889dc266eeadcdb49a5e8dd.jpg"/>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default Home;
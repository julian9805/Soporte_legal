import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import "./Home.scss";

function Home(){

    return(
        <>
        <Header/>
        <section className="home-container">
            <div className="title-home">
                <h1>DECUBRE Y CONOCE COMO TRABAJAMOS</h1>
            </div>
            <img className="image-home" src="../../../../public/images/logo.png"/>
            <Link to={"/contact"}>
                <button>Contactanos</button>
            </Link>
             
        </section>
        <Footer/>
        </>
    )
}

export default Home;
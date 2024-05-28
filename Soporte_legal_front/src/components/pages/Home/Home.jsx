import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

function Home(){

    return(
        <>
        <Header/>
        <section className="home-container">
            <div className="title-home">
                <h1>DECUBRE Y CONOCE COMO TRABAJAMOS</h1>
                <img className="image-home" src="../../../../public/images/balanza-1.jpg"/>
                <Link to={"/contact"}>
                    <button>Contactanos</button>
                </Link>
             </div>
        </section>
        <Footer/>
        </>
    )
}

export default Home;
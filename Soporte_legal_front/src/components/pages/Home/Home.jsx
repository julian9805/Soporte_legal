import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import "./Home.scss";

function Home(){

    return(
        <>
            <Header/>
                <main>
                 
                    <section className="home-container">
                        <div className="title-home">
                            <h1>DECUBRE Y CONOCE COMO TRABAJAMOS</h1>
                        </div>
                        
                        <Link to={"/contact"}>
                            <button>Contactanos</button>
                        </Link>
                        
                    </section>
                </main>
            <Footer/>
        </>
    )
}

export default Home;
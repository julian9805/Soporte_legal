import Footer from "../Footer";
import Header from "../Header";


function Contact(){


    return(
        <>
            <Header/>
            <section>
                <div>
                    <h2>CONTACTANOS</h2>
                </div>
                <form>
                    <div className="form-info">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name"/>
                    </div>
                    <div className="form-info">
                        <label htmlFor="surname">Apellidos</label>
                        <input type="text" id="surname"/>
                    </div>
                    <div className="form-info">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email"/>
                    </div>
                    <div className="form-info">
                        <label htmlFor="commentary">Comentarios</label>
                        <textarea className="form-commentary" id="commentary"></textarea>
                    </div>
                    <button className="form-btn" type="submit">Enviar</button>
                </form>
            </section>
            <Footer/>
        </>
    )
}

export default Contact;
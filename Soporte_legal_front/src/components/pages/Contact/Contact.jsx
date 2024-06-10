
import "./Contact.scss";


function Contact(){


    return(
        <>
            <section id="contact" className="contact-container">
                <div className="form-container">
                
                    <h2>CONTACTANOS</h2>
                    
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
                </div>
                <img className="image-girls" src="../../../../public/images/dos chicas.jpg"/>
            </section>
        </>
    )
}

export default Contact;

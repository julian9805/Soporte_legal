import Footer from "../Footer";
import Header from "../Header";
import "./Work.scss";


function Work(){

    return(
        <> 
            <Header/>
            <section className="work-container">
                <div className="work-title">
                    <h3>RAMAS DEL DERECHO:</h3>
                </div>
                <div className="work-list">
                    <p>DERECHO CIVIL:</p>
                    <span>Temas legales entre personas naturales y/o jurídicas (pertenencias, divisorios, posesorios, propiedad horizontal, responsabilidad civil)</span>
                    <p>PENAL:</p>
                    <span>Nuestros abogados penalistas le representarán y acompañarán en cada etapa del proceso penal. (derecho penitenciario, defensa penal, delitos financieros, etc.)</span>
                    <p>DERECHO LABORAL:</p>
                    <span>Temas legales que involucren empleados y empleadores (Indemnizaciones, despidos, contratación, sindicatos, etc.)</span>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Work;
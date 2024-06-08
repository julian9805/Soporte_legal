
import "./Work.scss";


function Work(){

    

    return(
        <> 
            <section className="work-container">
                <div className="work-title">
                    <h2>RAMAS DEL DERECHO:</h2>
                </div>
                <div className="work-list">
                    <div className="item" id="civil">
                        <h3>DERECHO CIVIL:</h3>
                        <p>Temas legales entre personas naturales y/o jurídicas (pertenencias, divisorios, posesorios, propiedad horizontal, responsabilidad civil)</p>
                    </div>
                    
                    <div className="item" id="penal">
                        <h3>PENAL:</h3>
                        <p>Nuestros abogados penalistas le representarán y acompañarán en cada etapa del proceso penal. (derecho penitenciario, defensa penal, delitos financieros, etc.)</p>
                    </div>
                    
                    <div className="item" id="laboral">
                        <h3>DERECHO LABORAL:</h3>
                        <p>Temas legales que involucren empleados y empleadores (Indemnizaciones, despidos, contratación, sindicatos, etc.)</p>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default Work;
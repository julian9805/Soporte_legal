
import "./Work.scss";
import WorkItem from "./WorkItem";


function Work(){

    return(
        <> 
            <section className="work-container">
                <div className="work-title">
                    <h2>RAMAS DEL DERECHO:</h2>
                </div>
                <div className="work-list">

                    <WorkItem id="civil" title="CIVIL:" description="Temas legales entre personas naturales y/o jurídicas (pertenencias, divisorios, posesorios, propiedad horizontal, responsabilidad civil)"/>

                    <WorkItem id="penal" title="PENAL:" description="Nuestros abogados penalistas le representarán y acompañarán en cada etapa del proceso penal. (derecho penitenciario, defensa penal, delitos financieros, etc.)"/>

                    <WorkItem id="laboral" title="DERECHO LABORAL:" description="Temas legales que involucren empleados y empleadores (Indemnizaciones, despidos, contratación, sindicatos, etc.)"/>

                </div>
            </section>
        </>
    )
}

export default Work;
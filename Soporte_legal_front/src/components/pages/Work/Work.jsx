
import "./Work.scss";
import WorkItem from "./WorkItem";


function Work(){

    return(
        <> 
            <section id="work" className="work-container">
                <div className="work-title">
                    <h2>RAMAS DEL DERECHO:</h2>
                </div>
                <div className="work-list">


                    <WorkItem id="civil" title="CIVIL:" description="Temas legales entre personas naturales y/o jurídicas (pertenencias, divisorios, posesorios, propiedad horizontal, responsabilidad civil)"/>

                    <WorkItem id="penal" title="ADMINISTRATIVO:" description="Preparar expedientes y documentación legal, investigar leyes, comunicarse con clientes, coordinar testigos y peritos, preparar audiencias y juicios, y realizar gestiones administrativas son tareas clave en el ámbito jurídico."/>

                    <WorkItem id="laboral" title="DERECHO LABORAL:" description="Temas legales que involucren empleados y empleadores (Indemnizaciones, despidos, contratación, sindicatos, etc.)"/>


                </div>
            </section>
        </>
    )
}

export default Work;
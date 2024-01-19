import { Col, Container, Row, useAccordionButton } from "react-bootstrap";
import Formulario from "./components/Formulario";
import { useState } from "react";
import Cita from "./components/Cita";

function App() {
  const [citas, setCitas] = useState([]);

  const crearCita = (cita) => {
    setCitas([...citas, cita]);
  };

  const eliminarCita = (id) => {
    const actualizarCitas = citas.filter((cita) => cita.id !== id);
    setCitas(actualizarCitas);
  };

  const titulo = citas.length === 0 ? "No hay citas" : "Administra tus Citas";

  return (
    <>
      <h1 className="text-center text-white bg-primary py-4 ">
        Administrador de Pacientes
      </h1>

      <Container>
        <Row>
          <div className="col-md-6">
            <Formulario crearCita={crearCita} />
          </div>

          <div className="col-md-6">
            <div className="mt-5">
              <h2 className="text-center mb-3">{titulo}</h2>
              {citas.map((cita) => (
                <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
              ))}
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default App;

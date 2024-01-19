import { Container, Row } from "react-bootstrap";
import Formulario from "./components/Formulario";
import { useEffect, useState } from "react";
import Cita from "./components/Cita";
import Citas from "./components/Citas";

function App() {


  return (
    <>
      <h1 className="text-center text-white bg-primary py-4 ">
        Administrador de Pacientes
      </h1>

      <Container>
            <Formulario />
      </Container>
    </>
  );
}

export default App;

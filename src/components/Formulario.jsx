import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Alerta from "./Alerta";
import Citas from "./Citas";

const Formulario = () => {
  let citasStorage = JSON.parse(localStorage.getItem("citasRolling")) || [];
  const [citas, setCitas] = useState(citasStorage);

  const eliminarCita = (id) => {
    const actualizarCitas = citas.filter((cita) => cita.id !== id);
    setCitas(actualizarCitas);
  };

  useEffect(() => {
    localStorage.setItem("citasRolling", JSON.stringify(citas));
  }, [citas]);

  const crearCita = (cita) => {
    setCitas([...citas, cita]);
  };

  const [mascota, setMascota] = useState("");
  const [propietario, setPropietario] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  const cita = {
    mascota: mascota,
    propietario: propietario,
    fecha: fecha,
    hora: hora,
    sintomas: sintomas,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([mascota, propietario, fecha, hora, sintomas].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    cita.id = crypto.randomUUID();

    crearCita(cita);

    setMascota("");
    setPropietario("");
    setFecha("");
    setHora("");
    setSintomas("");
  };

  return (
    <>
        <Row>
          <Col md={6}>
            <Form className="p-4 mt-5 bg-white shadow" onSubmit={handleSubmit}>
              {error && <Alerta>¡Error! Completa todos los campos.</Alerta>}

              <Form.Group className="mb-3">
                <Form.Label>Nombre de la Mascota</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese un nombre"
                  value={mascota}
                  onChange={(e) => setMascota(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Nombre del Dueño</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese un nombre"
                  value={propietario}
                  onChange={(e) => setPropietario(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Fecha</Form.Label>
                <Form.Control
                  type="date"
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Hora</Form.Label>
                <Form.Control
                  type="time"
                  value={hora}
                  onChange={(e) => setHora(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Sintomas</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Escriba los sintomas del animal..."
                  value={sintomas}
                  onChange={(e) => setSintomas(e.target.value)}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="w-100 text-uppercase fw-bold"
              >
                Agregar Cita
              </Button>
            </Form>
          </Col>

          <Col md={6}>
            <Citas citas={citas} eliminarCita={eliminarCita} />
          </Col>
        </Row>
    </>
  );
};

export default Formulario;

import { Button, Card } from "react-bootstrap";

const Cita = ({ cita, eliminarCita }) => {

    const { propietario, mascota, fecha, hora, sintomas } = cita
  return (
    <Card border="primary" className="mt-3">
      <Card.Header>Dueño: {propietario}</Card.Header>

      <Card.Body>
        <Card.Title className="text-center text-uppercase">
          Mascota: {mascota}
        </Card.Title>

        <Card.Text>
          <span className="fw-bold">Fecha:</span> {fecha}
        </Card.Text>

        <Card.Text>
          <span className="fw-bold">Hora:</span> {hora}
        </Card.Text>

        <Card.Text>
          <span className="fw-bold">Sintomas:</span> {sintomas}
        </Card.Text>

        <Button 
            variant="danger" 
            className="w-100 text-uppercase fw-bold"
            onClick={() => eliminarCita(cita.id)}
        >
          Borrar &times;
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Cita;

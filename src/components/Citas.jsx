import { ListGroup } from "react-bootstrap";
import Cita from "./Cita";

const Citas = ({ citas, eliminarCita }) => {

  const titulo = citas.length === 0 ? "No hay citas" : "Administra tus Citas";

  return (
    <>
      <ListGroup className="mt-5">
        <h2 className="text-center mb-3">{titulo}</h2>
        {citas.map((cita) => (
          <Cita 
            key={cita.id} 
            cita={cita} 
            eliminarCita={eliminarCita} 
            />
        ))}
      </ListGroup>
    </>
  );
};

export default Citas;

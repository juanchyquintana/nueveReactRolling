import { Alert } from "react-bootstrap";

const Alerta = ({ children }) => {
  return (
    <>
      {["danger"].map((variant) => (
        <Alert
          key={variant}
          variant={variant}
          className="text-danger fw-bold text-center"
        >
          {children}
        </Alert>
      ))}
    </>
  );
};

export default Alerta;

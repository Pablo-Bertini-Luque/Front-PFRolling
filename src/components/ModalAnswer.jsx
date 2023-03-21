import { Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ModalAnswer = ({
  tokenAccess,
  show,
  setShow,
  CreateAnswer,
  answer,
  handleChangeAnswer,
}) => {
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {tokenAccess ? "Respuesta" : "Inicia Sesion!"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {tokenAccess ? (
          <Form onSubmit={CreateAnswer}>
            <Form.Group className="mb-3">
              <Form.Control
                value={answer}
                onChange={handleChangeAnswer}
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar respuesta
            </Button>
          </Form>
        ) : (
          <p>
            Para poder escribir una respuesta, tienes que haber iniciado sesión.
            Haz click <Link to="/login">aqui</Link> para iniciar sesión
          </p>
        )}
      </Modal.Body>
    </Modal>
  );
};

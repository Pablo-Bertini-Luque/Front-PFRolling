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

  if (tokenAccess) {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Respuesta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={reload}>
              Cerrar
            </Button> */}
        </Modal.Footer>
      </Modal>
    );
  } else {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inicia Sesion!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Para poder escribir una respuesta, tienes que haber iniciado sesión.
            Haz click <Link to="/login">aqui</Link> para iniciar sesión
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
};

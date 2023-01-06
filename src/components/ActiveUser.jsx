import React, { useState } from "react";
import { Button, Modal, Form, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

function ReactiveUser() {
  const apiUrl = process.env.REACT_APP_API_URL;

  const [addUser, setAddUser] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const tokenAccess = localStorage.getItem("user-token");
  const options = {
    headers: {
      access_token: tokenAccess,
    },
  };

  const declareActive = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `${apiUrl}/users/active/${addUser}`,
        {},
        options
      );
      const data = await response.json;
      return data, alert("El usuario ha sido activado"), setAddUser("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeUser = (e) => {
    setAddUser(e.target.value);
    console.log(e.target.value);
  };

  const modal = () => {
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Activar usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={declareActive}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Id del usuario que deseas activar</Form.Label>
                <Form.Control
                  value={addUser}
                  onChange={handleChangeUser}
                  type="text"
                  autoFocus
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Activar
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="d-grid gap-2">
              <Button variant="primary" size="lg" onClick={handleShow}>
                Activar usuario
              </Button>
            </div>
            <Col>{modal()}</Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ReactiveUser;

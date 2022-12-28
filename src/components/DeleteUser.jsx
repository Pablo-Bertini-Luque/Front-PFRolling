import React, { useState } from "react";
import { Button, Modal, Form, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

function InactiveUser() {
  const [deleteUser, setDeleteUser] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const tokenAccess = localStorage.getItem("user-token");
  const options = {
    headers: {
      access_token: tokenAccess,
    },
  };

  const declareInactive = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:4002/api/v1/users/delete/${deleteUser}`,
        {},
        options
      );
      const data = await response.json;
      return (
        data, alert("El usuario ha sido declarado inactivo"), setDeleteUser("")
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeUser = (e) => {
    setDeleteUser(e.target.value);
    console.log(e.target.value);
  };

  const modal = () => {
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Declarar inactivo usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={declareInactive}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  Id del usuario que desea declarar inactivo
                </Form.Label>
                <Form.Control
                  value={deleteUser}
                  onChange={handleChangeUser}
                  type="text"
                  autoFocus
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Declarar inactivo
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
                Borrar usuario
              </Button>
            </div>
            <Col>{modal()}</Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default InactiveUser;

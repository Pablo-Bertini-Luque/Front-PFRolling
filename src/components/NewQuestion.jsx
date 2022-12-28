import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

function NewsQuestions() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [categories, setCategories] = useState([]);

  const [category, setCategory] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");

  const tokenAccess = localStorage.getItem("user-token");
  const options = {
    headers: {
      access_token: tokenAccess,
    },
  };

  const Category = async () => {
    const response = await fetch(`http://localhost:4002/api/v1/category`);
    const data = await response.json();
    setCategories(data.categories);
  };

  const newQuestion = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4002/api/v1/question",
        { category, topic, message },
        options
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
    console.log(e.target.value);
  };

  const handleChangeTopic = (e) => {
    setTopic(e.target.value);
    console.log(e.target.value);
  };

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
    console.log(e.target.value);
  };

  const modal = () => {
    if (localStorage.getItem("user-token")) {
      return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Haz una pregunta</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={newQuestion}>
              <Form.Group className="mb-3">
                <Form.Label>Categoria </Form.Label>
                <select
                  value={category}
                  onChange={handleChangeCategory}
                  placeholder="Seleccionar categoria"
                >
                  <option value="" disabled selected>
                    Selecciona categoria
                  </option>
                  {categories?.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}{" "}
                    </option>
                  ))}
                </select>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Tema</Form.Label>
                <Form.Control
                  value={topic}
                  onChange={handleChangeTopic}
                  type="text"
                  autoFocus
                />
                <Form.Text id="" muted>
                  El tema debe contener un mínimo de 5 caracteres y un máximo de
                  50.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Pregunta</Form.Label>
                <Form.Control
                  value={message}
                  onChange={handleChangeMessage}
                  as="textarea"
                  rows={3}
                />
                <Form.Text id="" muted>
                  El mensaje debe contener un máximo de 1000 caracteres.
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit">
                Enviar pregunta
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
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
              Para poder realizar una pregunta, tienes que haber iniciado
              sesión. Haz click <Link to="/login">aqui</Link> para iniciar
              sesión
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

  return (
    <>
      <Container fluid className="m-auto p-0">
        <Row>
          <Col className="bg-primary">
            <Col
              className="mt-2"
              style={{ display: "flex", justifyContent: "end" }}
            >
              <Button
                variant="secondary"
                size="sm"
                style={{ width: "8rem", fontSize: "11px" }}
                onClick={handleShow}
              >
                Hacer una pregunta
              </Button>
              <div>{modal()}</div>
            </Col>
            <h1 className="text-center text-dark m-3">Preguntas</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NewsQuestions;

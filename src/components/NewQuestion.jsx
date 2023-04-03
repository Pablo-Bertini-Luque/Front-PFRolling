import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

function NewsQuestions({ questions, setQuestions }) {
  const apiUrl = process.env.REACT_APP_API_URL;

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

  const getCategory = async () => {
    const response = await fetch(`${apiUrl}/category`);
    const data = await response.json();
    setCategories(data.categories);
  };

  const newQuestion = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${apiUrl}/question`,
        { category, topic, message },
        options
      );
      const data = await response;
      setShow(false);
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

  useEffect(() => {
    getCategory();
  }, []);

  const modal = () => {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {tokenAccess ? "Haz una pregunta" : "Inicia Sesion!"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {tokenAccess ? (
            <Form onSubmit={newQuestion}>
              <Form.Group className="mb-3">
                <Form.Label>Categoria </Form.Label>
                <select onChange={handleChangeCategory}>
                  <option value={category} disabled selected>
                    Selecciona categoria
                  </option>
                  {categories?.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
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
          ) : (
            <p>
              Para poder realizar una pregunta, tienes que haber iniciado
              sesión. Haz click <Link to="/login">aqui</Link> para iniciar
              sesión
            </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    );
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

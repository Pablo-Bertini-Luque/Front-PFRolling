import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import NavBarComponents from "../components/NavBar";
import Footer from "../components/Footer";
import "../css/completeQuestions.css";
import axios from "axios";

export function CompleteQuestions() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { id } = useParams();

  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const tokenAccess = localStorage.getItem("user-token");
  const options = {
    headers: {
      access_token: tokenAccess,
    },
  };

  const GetQuestionById = async () => {
    const response = await fetch(`${apiUrl}/question/${id}`);
    const data = await response.json();
    setQuestions(data);
    console.log(data);
  };

  const handleChangeAnswer = (e) => {
    setAnswer(e.target.value);
    console.log(e.target.value);
  };

  const CreateAnswer = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${apiUrl}/answer/`,
        {
          idQuestion: id,
          message: answer,
        },
        options
      );
      const data = await response.json;
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const ModalAnswer = () => {
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
              Para poder escribir una respuesta, tienes que haber iniciado
              sesión. Haz click <Link to="/login">aqui</Link> para iniciar
              sesión
            </p>
          )}
        </Modal.Body>
      </Modal>
    );
  };

  useEffect(() => {
    GetQuestionById();
  }, []);

  return (
    <>
      <NavBarComponents />
      <Container className="containerQuestion">
        <Row>
          <Col className="mt-3">
            <p className="fs-3 d-flex question">{questions.message}</p>
            <p className="tagCategory" style={{ width: "5.4em" }}>
              {" "}
              {questions.category?.name}
            </p>
            <p style={{ fontSize: "10px" }}>
              Creado por: {questions.user?.name}
            </p>
            <p>
              Respuestas: <li> {questions.answer}</li>
            </p>
            <Button
              className="ms-5 p-1"
              variant="primary"
              style={{ fontSize: "10px" }}
              onClick={handleShow}
            >
              Escribe una respuesta
            </Button>
            <ModalAnswer />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

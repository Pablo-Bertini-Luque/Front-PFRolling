import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import NavBarComponents from "../components/NavBar";
import Footer from "../components/Footer";
import "../css/completeQuestions.css";
import axios from "axios";

export function CompleteQuestions() {
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState("Hola");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { id } = useParams();
  const tokenAccess = localStorage.getItem("user-token");
  const options = {
    headers: {
      access_token: tokenAccess,
    },
  };

  const GetQuestionById = async () => {
    const response = await fetch(`http://localhost:4002/api/v1/question/${id}`);
    const data = await response.json();
    setQuestions(data);
    console.log(data);
  };

  const handleChangeAnswer = (e) => {
    setAnswer(e.target.value || "Hola");
    console.log(e.target.value);
  };

  const CreateAnswer = async (idQuestion, answerQuestion) => {
    try {
      const response = await axios.post(
        "http://localhost:4002/api/v1/answer/",
        {
          idQuestion: id,
          answerQuestion: answer,
        },
        options
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleAnswer = async (event) => {
    event.preventDefault();
    try {
      const newAnswer = await CreateAnswer(id, answer);
      console.log(newAnswer);
      setAnswer(newAnswer);
    } catch (error) {
      console.log(error);
    }
  };

  const modal = () => {
    if (localStorage.getItem("user-token")) {
      return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Respuesta</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleAnswer}>
              <input
                type="text"
                value={answer}
                onChange={handleChangeAnswer}
              ></input>
              <input type="submit"></input>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={handleAnswer}>
              Enviar respuesta
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
              Para poder escribir una respuesta, tienes que haber iniciado
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
            <Col>{modal()}</Col>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

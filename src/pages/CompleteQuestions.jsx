import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import NavBarComponents from "../components/NavBar";
import Footer from "../components/Footer";
import "../css/completeQuestions.css";
import axios from "axios";
// import { ModalAnswer } from "../components/ModalAnswer";

export function CompleteQuestions() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState();
  const [tokenAccess, setTokenAccess] = useState(null);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

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
    const response = e.target.value;
    setAnswer(response);
    if (response.lenght < 10 || response.lenght > 300) {
      <Form.Text className="fs-6">
        La respuesta debe contener un mínimo de 10 caracteres y un máximo de
        300.
      </Form.Text>;
    }
    console.log(response);
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
      // setShow(false);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    GetQuestionById();
    const token = localStorage.getItem("user-token");
    setTokenAccess(token);
    console.log(token);
  }, []);

  useEffect(() => {
    if (show) {
      ModalAnswer();
    }
    console.log("show", show);
  }, [show]);

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

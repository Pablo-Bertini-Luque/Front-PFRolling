import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import NavBarComponents from "../components/NavBar";
import Footer from "../components/Footer";
import "../css/completeQuestions.css";
import axios from "axios";
import { ModalAnswer } from "../components/ModalAnswer";

export function CompleteQuestions() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [show, setShow] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState();
  const handleShow = () => setShow(true);
  const { id } = useParams();
  const [tokenAccess, setTokenAccess] = useState(null);

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

  const reload = () => {
    window.location.reload(false);
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
      setShow(false);
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
            <ModalAnswer
              tokenAccess={tokenAccess}
              show={show}
              setShow={setShow}
              CreateAnswer={CreateAnswer}
              answer={answer}
              handleChangeAnswer={handleChangeAnswer}
            />
            {/* <Col>{modal()}</Col> */}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

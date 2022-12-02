import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NavBarComponents from "./NavBar";
import Footer from "./Footer";
import "../css/questionComplete.css";

export function QuestionComplete() {
  const [questions, setQuestions] = useState([]);

  const { id } = useParams();

  const GetQuestionById = async () => {
    const response = await fetch(`http://localhost:4002/api/v1/question/${id}`);
    const data = await response.json();
    setQuestions(data);
    console.log(data);
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
              {/* {questions.category.name} */}
            </p>
            <p style={{ fontSize: "10px" }}>
              {/* Creado por: {questions.user.name} */}
            </p>
            <p>
              Respuestas: <li> {questions.answer}</li>
            </p>
            <Button
              className="ms-5 p-1"
              variant="primary"
              style={{ fontSize: "10px" }}
            >
              Escribe una respuesta
            </Button>{" "}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

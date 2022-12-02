import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as API from "../services/question";
import "../css/useQuestion.css";

export function AllQuestion() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    API.GetAllQuestion()
      .then((data) => setQuestions(data.questions))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <ul>
              {questions?.map((question) => (
                <li key={question._id} className="mb-5 topic">
                  <Link
                    to={`/question/${question._id}`}
                    className="text-dark text-decoration-none"
                  >
                    <p>Tema: {question.topic}</p>
                  </Link>
                  <p>{question.message}</p>
                  <Container
                    className="p-0 tagCategories"
                    style={{ width: "5.4em" }}
                  >
                    {question.category.name}
                  </Container>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

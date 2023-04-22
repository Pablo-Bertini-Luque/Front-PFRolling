import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/useQuestion.css";

export function AllQuestion({ questions, setQuestions }) {
  const apiUrl = process.env.REACT_APP_API_URL;
  // const [questions, setQuestions] = useState([]);

  const GetAllQuestion = async () => {
    try {
      const response = await fetch(`${apiUrl}/question`);
      const data = await response.json();
      setQuestions(data.questions);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    GetAllQuestion();
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
                    <h6>Tema: {question.topic}</h6>
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

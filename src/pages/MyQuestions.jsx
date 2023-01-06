import { React, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "../css/MyQuestions.css";

function MyQuestions() {
  const apiUrl = process.env.REACT_APP_API_URL;

  const { id } = useParams();

  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [user, setUser] = useState();

  const userById = async () => {
    const response = await fetch(`${apiUrl}/users/list/${id}`);
    const data = await response.json();
    setUser(data);
  };

  const questionsByUser = async () => {
    const response = await fetch(`${apiUrl}/question/myquestions/${id}`);
    const data = await response.json();
    setQuestions(data);
    console.log(data);
  };

  useEffect(() => {
    userById();
  }, []);

  useEffect(() => {
    questionsByUser();
  }, []);

  const close = () => {
    navigate(`/login/user/${user.user._id}`, { replace: true });
  };

  return (
    <>
      <Container>
        <Row>
          <h1 className="fw-bold text-center mt-5">Mis preguntas</h1>
          <Col className="m-3 containerQuestion">
            {questions?.map((question) => (
              <Card
                key={question._id}
                className="p-2 m-3"
                style={{ width: "10rem" }}
              >
                <Card.Body>
                  <Card.Title>{question.message}</Card.Title>
                </Card.Body>
                <Link
                  to={`/question/${question._id}`}
                  className="d-flex justify-content-end"
                >
                  <Button variant="primary" size="sm">
                    Ir a la pregunta
                  </Button>
                </Link>
              </Card>
            ))}
          </Col>
          <div className="d-flex justify-content-end">
            <Button variant="primary" size="sm" onClick={close}>
              Cerrar
            </Button>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default MyQuestions;

import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import NavBarComponents from "../components/NavBar";
import Footer from "../components/Footer";
import "../css/completeQuestions.css";

export function QuestionsByCategory() {
  const apiUrl = process.env.REACT_APP_API_URL;

  const [categories, setCategories] = useState([]);

  const { id } = useParams();

  const questionCategoryById = async () => {
    const response = await fetch(`${apiUrl}/question/category/${id}`);
    const data = await response.json();
    setCategories(data);
    console.log(data);
  };

  useEffect(() => {
    questionCategoryById();
  }, []);

  return (
    <>
      <NavBarComponents />
      <Container className="containerQuestion">
        <Row>
          <Col className="m-3">
            {categories?.map((category) => (
              <Card key={category._id} className="p-2 m-3">
                <Card.Body>
                  <Card.Title>{category.message}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {category.user?.name}
                  </Card.Subtitle>
                  <Card.Text className="pt-2">{category.answer}</Card.Text>
                  <Card.Subtitle>{category.category?.name} </Card.Subtitle>
                  <Link
                    to={`/question/${category._id}`}
                    className="d-flex justify-content-end"
                  >
                    <Button variant="primary" size="sm">
                      Ir a la pregunta
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

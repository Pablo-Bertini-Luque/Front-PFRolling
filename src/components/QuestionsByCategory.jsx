import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NavBarComponents from "./NavBar";
import Footer from "./Footer";
import "../css/questionComplete.css";

export function QuestionsByCategory() {
  const [categories, setCategories] = useState([]);

  const { id } = useParams();

  const questionCategoryById = async () => {
    const response = await fetch(
      `http://localhost:4002/api/v1/question/category/${id}`
    );
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
              <Card
                key={category._id}
                className="p-2 m-3"
                style={{ width: "18rem" }}
              >
                <Card.Body>
                  <Card.Title>{category.message}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {category.user.name}
                  </Card.Subtitle>
                  <Card.Text className="pt-2">{category.answer}</Card.Text>
                  <Card.Subtitle>{category.category.name} </Card.Subtitle>
                  <Button className="mt-4" variant="primary" size="sm">
                    {" "}
                    Agregar respuesta
                  </Button>
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

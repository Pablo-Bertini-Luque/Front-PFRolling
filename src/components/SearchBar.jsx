import React from "react";
import { useEffect, useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { ImSearch } from "react-icons/im";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    GetAllQuestion();
  }, []);

  const GetAllQuestion = async () => {
    try {
      const response = await fetch("http://localhost:4002/api/v1/question");
      const data = await response.json();
      console.log(data.questions);
      setQuestions(data.questions);
    } catch (error) {
      console.error(error);
    }
  };

  // const resultSearch = (termino) => {
  //   const data = questions.filter((question) => {
  //     if (question.category.name.includes(termino)) {
  //       return question;
  //     }
  //   });
  //   setQuestions(data);
  // };

  const handleChange = (e) => {
    setSearch(e.target.value);
    // resultSearch(e.target.value);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form className="d-flex m-3">
            <Form.Control
              type="search"
              placeholder="Busqueda por tema o categoría"
              className="me-2"
              value={search}
              aria-label="Search"
              onChange={handleChange}
            />
            <Button variant="secondary">
              <ImSearch />
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchBar;

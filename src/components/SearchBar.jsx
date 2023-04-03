import React from "react";
import { useEffect, useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { ImSearch } from "react-icons/im";

function SearchBar({ setQuestions }) {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [search, setSearch] = useState("");

  const GetSearchQuestion = async (e) => {
    e?.preventDefault();
    try {
      const response = await fetch(
        `${apiUrl}/question/search?message=${search}`
      );
      const data = await response.json();
      setQuestions(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (search.length < 1) {
      GetSearchQuestion();
    }
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form className="d-flex m-3" onSubmit={GetSearchQuestion}>
            <Form.Control
              type="search"
              placeholder="Busqueda por tema o categoría"
              className="me-2"
              value={search}
              aria-label="Search"
              onChange={handleChange}
            />
            <Button variant="secondary" type="submit">
              <ImSearch />
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchBar;

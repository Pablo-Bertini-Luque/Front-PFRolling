import { useEffect, useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { ImSearch } from "react-icons/im";
import * as API from "../services/question";

function SearchBar() {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form className="d-flex">
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

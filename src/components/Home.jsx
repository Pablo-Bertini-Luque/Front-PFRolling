import React from "react";
import NavBarComponents from "./NavBar";
import ColumnCategories from "./ColumnCategories";
import { AllQuestion } from "../hooks/useQuestion";
import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "./SearchBar";
import "../css/home.css";

function Home() {
  return (
    <>
      <NavBarComponents />
      <Container>
        <SearchBar />
      </Container>
      <Container fluid className="m-auto p-0">
        <Row>
          <Col
            xxxl={3}
            xxl={3}
            xl={3}
            lg={3}
            md={3}
            sm={3}
            xs={3}
            xxs={3}
            className="bg-black d-none d-sm-block"
          >
            <ColumnCategories />
          </Col>
          <Col className="bg-primary">
            <h1 className="text-center text-dark m-3">Preguntas</h1>
            <AllQuestion />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;

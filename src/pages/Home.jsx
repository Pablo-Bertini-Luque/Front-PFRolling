import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AllQuestion } from "../hooks/useQuestion";
import NavBarComponents from "../components/NavBar";
import ColumnCategories from "../components/ColumnCategories";
import SearchBar from "../components/SearchBar";
import NewsQuestions from "../components/NewQuestion";
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
            <Col>
              <NewsQuestions />
            </Col>
            <AllQuestion />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;

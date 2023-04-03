import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AllQuestion } from "../hooks/useQuestion";
import NavBarComponents from "../components/NavBar";
import ColumnCategories from "../components/ColumnCategories";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import NewsQuestions from "../components/NewQuestion";
import "../css/home.css";

function Home() {
  const [questions, setQuestions] = useState([]);
  return (
    <>
      <NavBarComponents />
      <Container>
        <SearchBar setQuestions={setQuestions} />
      </Container>
      <Container fluid className="m-auto">
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
              <NewsQuestions
                questions={questions}
                setQuestions={setQuestions}
              />
            </Col>
            <AllQuestion questions={questions} setQuestions={setQuestions} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Home;

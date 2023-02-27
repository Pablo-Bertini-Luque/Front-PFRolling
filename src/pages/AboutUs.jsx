import React from "react";
import Footer from "../components/Footer";
import NavBarComponents from "../components/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/esm/Image";
import Pablo from "../assets/image/Pablo.jpeg";
import Axel from "../assets/image/Axel.jpeg";
import Tomas from "../assets/image/Tomas.jpeg";
import { Link } from "react-router-dom";
import "../css/aboutUs.css";

function AboutUs() {
  return (
    <>
      <NavBarComponents />
      <Container className="containerImages d-flex justify-content-center align-items-center">
        <Row>
          <h1 className="header">¿Quienes somos?</h1>
          <Col>
            <Image src={Pablo} roundedCircle className="w-50" />
            <a
              href="https://www.linkedin.com/in/pablo-ezequiel-bertini-luque/"
              className="d-block mt-2"
              style={{ textDecoration: "none" }}
            >
              Pablo Bertini Luque
            </a>
          </Col>
          <Col>
            <Image src={Axel} roundedCircle className="w-50" />
            <a
              href="https://www.linkedin.com/in/axel-angelucci/"
              className="d-block mt-2"
              style={{ textDecoration: "none" }}
            >
              Axel Angelucci
            </a>
          </Col>
          <Col>
            <Image src={Tomas} roundedCircle className="w-50" />
            <a
              href="https://www.linkedin.com/in/tomas-dnl/"
              className="d-block mt-2"
              style={{ textDecoration: "none" }}
            >
              Tomas Aranda
            </a>
          </Col>
        </Row>
      </Container>
      <Footer className="footer" />
    </>
  );
}

export default AboutUs;

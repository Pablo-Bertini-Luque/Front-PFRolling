import React from "react";
import Footer from "../components/Footer";
import NavBarComponents from "../components/NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
            <Link
              to="https://www.linkedin.com/in/pablo-ezequiel-bertini-luque-8284118b/"
              className="d-block mt-2"
            >
              Pablo Bertini Luque
            </Link>
          </Col>
          <Col>
            <Image src={Axel} roundedCircle className="w-50" />
            <Link
              to="https://www.linkedin.com/in/pablo-ezequiel-bertini-luque-8284118b/"
              className="d-block mt-2"
            >
              Axel Angelucci
            </Link>
          </Col>
          <Col>
            <Image src={Tomas} roundedCircle className="w-50" />
            <Link
              to="https://www.linkedin.com/in/pablo-ezequiel-bertini-luque-8284118b/"
              className="d-block mt-2"
            >
              Tomas Aranda
            </Link>
          </Col>
        </Row>
      </Container>
      <Footer className="footer" />
    </>
  );
}

export default AboutUs;

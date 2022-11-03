import React from "react";
import Footer from "../components/Footer";
import NavBarComponents from "../components/NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Pablo from "../assets/image/Pablo.jpeg";
import Axel from "../assets/image/Axel.jpeg";
import "../css/aboutUs.css";

function AboutUs() {
  return (
    <>
      <NavBarComponents className="navbar" />
      <Container className="containerImages">
        <Row>
          <h1 className="header">¿Quienes somos?</h1>
          <Col>
            <Image src={Pablo} roundedCircle fluid></Image>
            <p className="names">Pablo Bertini Luque</p>
          </Col>
          <Col>
            <Image src={Axel} roundedCircle fluid></Image>
            <p className="names">Axel Angelucci</p>
          </Col>
        </Row>
      </Container>
      <Footer className="footer" />
    </>
  );
}

export default AboutUs;

import React from "react";
import Logo from "../assets/image/logo.png";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/esm/Image";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../css/footer.css";

function Footer() {
  return (
    <Container fluid className="footer m-auto">
      <Row>
        <Col xs={2} className="m-auto">
          <Image className="logoFooter" src={Logo} alt="logo" />
          <p>STACK NOW</p>
        </Col>
        <Col xs={6} className="footerCenter m-auto">
          <p> Todos los derechos reservados</p>
        </Col>
        <Col className="footerRight m-auto">
          <Link to="www.facebook.com" className="p-1 ">
            <BsFacebook />
          </Link>
          <Link to="www.instagram.com" className="p-1">
            <BsInstagram />
          </Link>
          <Link to="www.twitter.com" className="p-1">
            <BsTwitter />
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

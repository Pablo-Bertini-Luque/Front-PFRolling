import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import Logo from "../assets/image/logo.png";

import "../css/navbar.css";

function NavBarComponents() {
  return (
    <>
      <Navbar>
        <Container className="gap-1">
          <Nav className="NavbarCollapse gap-5">
            <Nav.Item>
              <Link className="navLink" to="/">
                Inicio
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="navLink" to="/aboutUs">
                Acerca de nosotros
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="navLink" to="/login">
                Iniciar Sesion
              </Link>
            </Nav.Item>
          </Nav>
        </Container>
        <Container>
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarComponents;

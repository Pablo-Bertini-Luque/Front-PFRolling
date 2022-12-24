import React from "react";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

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

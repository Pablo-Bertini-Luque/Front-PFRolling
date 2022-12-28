import React from "react";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../css/navbar.css";

function NavBarComponents() {
  const token = localStorage.getItem("user-token");
  const id = localStorage.getItem("id-user");
  const role = localStorage.getItem("role");

  const buttonMyProfile = () => {
    if (token) {
      if (role === "super-admin") {
        return (
          <Link className="navLink" to={`/login/user/super-admin/${id}`}>
            Mi perfil
          </Link>
        );
      } else {
        return (
          <Link className="navLink" to={`/login/user/${id}`}>
            Mi perfil
          </Link>
        );
      }
    }
  };

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
          <Col className="d-flex justify-content-end">{buttonMyProfile()} </Col>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarComponents;

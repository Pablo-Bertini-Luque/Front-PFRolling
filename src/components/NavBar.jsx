import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../css/navbar.css";
import { Link } from "react-router-dom";

function NavBarComponents() {
  return (
    <>
      <Navbar>
        <Container>
          <Nav>
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
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Ingrese lo que desea buscar"
              className="me-2 inputSearcher"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarComponents;

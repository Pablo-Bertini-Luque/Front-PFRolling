import { React, useState, useEffect } from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Nav,
  Navbar,
} from "react-bootstrap";
import Footer from "../components/Footer";
import "../css/viewUser.css";
import "../css/navbar.css";

const ViewLoginUser = () => {
  const apiUrl = process.env.REACT_APP_API_URL;

  const { id } = useParams();

  const [user, setUser] = useState();

  const userById = async () => {
    const response = await fetch(`${apiUrl}/users/list/${id}`);
    const data = await response.json();
    setUser(data);
    console.log(data);
  };

  const logOut = () => {
    return (
      localStorage.removeItem("user-token"),
      localStorage.removeItem("id-user"),
      localStorage.removeItem("role")
    );
  };

  useEffect(() => {
    userById();
  }, []);

  return (
    <>
      <Navbar>
        <Container>
          <Nav className="NavbarCollapse gap-2">
            <Nav.Item>
              <Link className="navLink" to="/">
                Inicio
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="navLink ms-2" to="/aboutUs">
                Acerca de nosotros
              </Link>
            </Nav.Item>
          </Nav>
          <Col className="d-flex justify-content-end">
            <Link className="navLink" to="/" onClick={logOut}>
              Cerrar Sesion
            </Link>
          </Col>
        </Container>
      </Navbar>
      <div className="container">
        <div className="viewUser">
          <div className="viewUser__header">
            <h2 className="viewUser__title">¡Bienvenido {user?.user.name}! </h2>
          </div>
          <div className="viewUser__container-description">
            <p className="viewUser__description">
              En este sección encontraras toda tu informacion
            </p>
          </div>
          <div className="viewUser__main">
            <div className="d-flex me-3">
              <Col>
                {["Light"].map((variant) => (
                  <Card
                    bg={variant.toLowerCase()}
                    key={variant}
                    text={variant.toLowerCase() === "light" ? "dark" : "white"}
                    style={{ width: "18rem" }}
                    className="mb-2"
                  >
                    <Card.Header className="text-center">
                      Mis preguntas
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        Haz click para encontrar todas las preguntas que
                        realizaste.
                      </Card.Text>
                      <Link
                        to="MyQuestions"
                        className="d-flex justify-content-end"
                        style={{ textDecoration: "none" }}
                      >
                        <Button variant="dark" size="sm">
                          Ver mas
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                ))}
              </Col>
              <Col>
                {["Dark"].map((variant) => (
                  <Card
                    bg={variant.toLowerCase()}
                    key={variant}
                    text={variant.toLowerCase() === "light" ? "dark" : "white"}
                    style={{ width: "18rem" }}
                    className="mb-2"
                  >
                    <Card.Header className="text-center">Mi perfil</Card.Header>
                    <Card.Body>
                      <Card.Text>
                        Haz click para ver la información sobre tu perfil.
                      </Card.Text>
                      <Link
                        to="MyProfile"
                        className="d-flex justify-content-end"
                        style={{ textDecoration: "none" }}
                      >
                        <Button variant="light" size="sm">
                          Ver mas
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                ))}
              </Col>
            </div>

            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewLoginUser;

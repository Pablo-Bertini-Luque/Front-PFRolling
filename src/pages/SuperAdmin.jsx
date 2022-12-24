import { React, useState, useEffect } from "react";
import {
  Col,
  Container,
  Row,
  Nav,
  Navbar,
  Figure,
  Button,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "../css/navbar.css";
import "../css/viewUser.css";

function SuperAdmin() {
  const [users, setUsers] = useState([]);
  const [admin, setAdmin] = useState();

  const dateAdmin = async () => {
    const response = await fetch(
      `http://localhost:4002/api/v1/users/list/63113e23ad30ec419157f3fa`
    );
    const data = await response.json();
    setAdmin(data);
    console.log(data);
  };

  const tokenAccess = localStorage.getItem("user-token");
  const options = {
    headers: {
      access_token: tokenAccess,
    },
  };

  const role = (role) => {
    if (role == "client") {
      return "Cliente";
    } else {
      return "Administrador";
    }
  };

  const getAllUsers = async () => {
    const response = await fetch(
      "http://localhost:4002/api/v1/users/list",
      options
    );
    const data = await response.json();
    setUsers(data);
    console.log(data);
  };

  console.log(users);

  useEffect(() => {
    getAllUsers();
    dateAdmin();
  }, []);

  const logOut = () => {
    localStorage.removeItem("user-token");
  };

  const state = (active) => {
    if (active === true) {
      return "Activo";
    } else {
      return "Inactivo";
    }
  };

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
      <div className="viewUser__header">
        <h2 className="viewUser__title">¡Bienvenido Administrador! </h2>
      </div>
      <Container>
        <Row>
          <Col className="mt-5">
            <h1 className="fw-bold text-center">Mi perfil</h1>
            <div className="d-flex justify-content-end">
              <Link to="update-profile" className="mt-3">
                <Button variant="primary" size="sm">
                  Modificar mis datos
                </Button>
              </Link>
            </div>
            <Figure>
              <Figure.Caption className="fw-bold text-dark mb-2">
                Foto de perfil
              </Figure.Caption>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={admin?.user.avatar}
                roundedCircle
              />
              <Link to="*">
                <Figure.Caption>
                  <Button variant="link" size="sm">
                    Cambiar imagen de perfil
                  </Button>
                </Figure.Caption>
              </Link>
            </Figure>
            <p>
              <span className="fw-bold">Nombre: </span>
              {admin?.user.name}
            </p>
            <p>
              <span className="fw-bold">Email: </span>
              {admin?.user.email}
            </p>
            <p>
              <span className="fw-bold">Rol: </span>
              {role(admin?.user.role)}
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <Row>
          <Col>
            <h1 className="fw-bold text-center mb-2">Listado de usuarios</h1>
            <div className="container-users">
              {users.allUsers?.map((user) => (
                <>
                  <Card key={user._id}>
                    <Card.Img
                      variant="top"
                      src={user.avatar}
                      style={{ width: "50px" }}
                      className="p-1"
                    />
                    <Card.Body>
                      <Card.Title style={{ fontSize: "11px" }}>
                        {user.name}
                      </Card.Title>
                      <p style={{ fontSize: "11px" }}>
                        <span className="fw-bold">Id usuario: </span>
                        {user._id}
                      </p>
                      <p style={{ fontSize: "11px" }}>
                        <span className="fw-bold">Email: </span>
                        {user.email}
                      </p>
                      <p style={{ fontSize: "11px" }}>
                        <span className="fw-bold">Rol: </span>
                        {user.role}
                      </p>
                      <p style={{ fontSize: "11px" }}>
                        <span className="fw-bold">Estado: </span>
                        {state(user.active)}
                      </p>
                    </Card.Body>
                  </Card>
                </>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default SuperAdmin;

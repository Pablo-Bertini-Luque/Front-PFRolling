import { React, useState, useEffect } from "react";
import {
  Col,
  Container,
  Row,
  Nav,
  Navbar,
  Figure,
  Button,
  Table,
  Image,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import "../css/navbar.css";
import "../css/viewUser.css";
import ReactiveUser from "../components/ActiveUser";
import InactiveUser from "../components/DeleteUser";

function SuperAdmin() {
  const [users, setUsers] = useState([]);
  const [admin, setAdmin] = useState();
  const { id } = useParams();

  const dateAdmin = async () => {
    const response = await fetch(
      `http://localhost:4002/api/v1/users/list/${id}`
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
    if (role === "client") {
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
            <h1 className="fw-bold text-center mb-4">Listado de usuarios</h1>
            <Table responsive>
              <thead>
                <tr>
                  {Array.from({ length: 1 }).map((_, index) => (
                    <>
                      <th key={index}>Id usuario</th>
                      <th key={index}>Nombre</th>
                      <th key={index}>Email</th>
                      <th key={index}>Rol</th>
                      <th key={index}>Estado</th>
                      <th key={index}>Imagen</th>
                    </>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 1 }).map((_, index) =>
                  users.allUsers?.map((user) => (
                    <>
                      <tr>
                        <td key={user._id}>{user._id}</td>
                        <td key={user._id}>{user.name}</td>
                        <td key={user._id}>{user.email}</td>
                        <td key={user._id}>{role(user.role)}</td>
                        <td key={user._id}>{state(user.active)}</td>
                        <td key={user._id}>
                          <Image
                            src={user.avatar}
                            roundedCircle
                            style={{ width: "50px" }}
                          />
                        </td>
                      </tr>
                    </>
                  ))
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5 mb-5">
        <Row>
          <Col>
            <InactiveUser />
          </Col>
        </Row>
      </Container>
      <Container className="mt-2 pb-3">
        <Row>
          <Col>
            <ReactiveUser />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default SuperAdmin;

import { React, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Col, Container, Row, Figure } from "react-bootstrap";

function MyProfile() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [user, setUser] = useState();

  const userById = async () => {
    const response = await fetch(
      `http://localhost:4002/api/v1/users/list/${id}`
    );
    const data = await response.json();
    setUser(data);
    console.log(data);
  };

  useEffect(() => {
    userById();
  }, []);

  const close = () => {
    navigate(`/login/user/${user.user._id}`, { replace: true });
  };

  const client = (role) => {
    if (role == "client") {
      return "Cliente";
    } else {
      return "Administrador";
    }
  };

  const state = (state) => {
    if (state === true) {
      return "Activo";
    } else {
      return "Inactivo. Contactese con el administrador de la página";
    }
  };

  return (
    <>
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
                src={user?.user.avatar}
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
              {user?.user.name}
            </p>
            <p>
              <span className="fw-bold">Email: </span>
              {user?.user.email}
            </p>
            <p>
              <span className="fw-bold">Rol: </span>
              {client(user?.user.role)}
            </p>
            <p>
              <span className="fw-bold">Estado: </span>
              {state(user?.user.active)}
            </p>
            <div className="d-flex justify-content-end">
              <Button variant="primary" size="sm" onClick={close}>
                Cerrar
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyProfile;

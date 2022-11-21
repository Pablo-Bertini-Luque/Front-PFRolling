import NavBarComponents from "./NavBar";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import NavDropdown from "react-bootstrap/NavDropdown";
import { DiHtml5, DiJavascript1, DiCss3 } from "react-icons/di";
import { Link } from "react-router-dom";
import { AllQuestion } from "../hooks/useQuestion";
import SearchBar from "./SearchBar";
import "../css/home.css";

function Home() {
  return (
    <>
      <NavBarComponents />
      <Container>
        <SearchBar />
      </Container>
      <Container fluid className="m-auto p-0">
        <Row>
          <Col
            xxxl={3}
            xxl={3}
            xl={3}
            lg={3}
            md={3}
            sm={3}
            xs={3}
            xxs={3}
            className="bg-black d-none d-sm-block"
          >
            <ul className="mt-4">
              <li>
                <NavDropdown
                  title="Categorias"
                  id="basic-nav-dropdown"
                  className="link-primary"
                >
                  <NavDropdown.Item href="#action/3.1">
                    {" "}
                    <DiHtml5 />
                    HTML
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <DiCss3 />
                    CSS
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    {" "}
                    <DiJavascript1 />
                    Javascript
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
              <li className="mt-3">
                <Link to="./login" className="columnLinks">
                  Iniciar Sesion
                </Link>
              </li>
            </ul>
          </Col>
          <Col className="bg-primary">
            <h1 className="text-center text-dark m-3">Preguntas</h1>
            <AllQuestion />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;

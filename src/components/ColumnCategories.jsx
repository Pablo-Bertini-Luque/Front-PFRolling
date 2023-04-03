import React, { useState, useEffect } from "react";
import { Container, Row, Col, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/home.css";

function ColumnCategories() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [categories, setCategories] = useState([]);

  const GetAllCategories = async () => {
    try {
      const response = await fetch(`${apiUrl}/category`);
      const data = await response.json();
      setCategories(data.categories);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    GetAllCategories();
  }, []);

  return (
    <>
      <Container fluid className="m-auto p-0">
        <Row>
          <Col>
            <ul className="mt-4">
              <li>
                <NavDropdown
                  title="Categorias"
                  id="basic-nav-dropdown"
                  className="link-primary"
                >
                  {categories?.map((category) => (
                    <NavDropdown.Item key={category._id}>
                      <Link
                        className="columnLinks"
                        to={`/question/category/${category._id}`}
                      >
                        {category.name}
                      </Link>
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              </li>
              <li className="mt-3">
                <Link to="./login" className="columnLinks">
                  Iniciar Sesion
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ColumnCategories;

import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import NotFound404 from "../assets/image/NotFound404.jpg";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <>
      <Container>
        <Row>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={NotFound404} style={{ width: "300px" }} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="text-center m-0">
            <Link to="/">Volver a Inicio</Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBarComponents from "./NavBar";
import ColumnCategories from "./ColumnCategories";
import { AllQuestion } from "../hooks/useQuestion";
import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import SearchBar from "./SearchBar";
import "../css/home.css";
import { Link } from "react-router-dom";

function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [categories, setCategories] = useState([]);

  const Category = async () => {
    const response = await fetch(`http://localhost:4002/api/v1/category`);
    const data = await response.json();
    setCategories(data.categories);
  };

  const [category, setCategory] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");

  // const newQuestion = async (category, topic, message) => {
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:4002/api/v1/question",
  //       { category: category, topic: topic, message: message
  //       }
  //     );
  //     const data = await response;
  //     return data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
    console.log(e.target.value);
  };

  const handleChangeTopic = (e) => {
    setTopic(e.target.value);
    console.log(e.target.value);
  };

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
    console.log(e.target.value);
  };

  // const handleQuestion = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const question = await newQuestion(category, topic, message);
  //     console.log(question);
  //     setTopic("");
  //     setMessage("");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const modal = () => {
    if (localStorage.getItem("user-token")) {
      return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Haz una pregunta</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Categoria</Form.Label>
                {categories?.map((category) => (
                  <div key={category._id}>
                    <input
                      type="radio"
                      name="category"
                      key={category._id}
                      value={category}
                      style={{ margin: "5px" }}
                    />
                    <label>{category.name}</label>
                  </div>
                ))}
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Tema</Form.Label>
                <Form.Control
                  value={topic}
                  onChange={handleChangeTopic}
                  type="text"
                  autoFocus
                />
                <Form.Text id="" muted>
                  El tema debe contener un mínimo de 5 caracteres y un máximo de
                  50.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Pregunta</Form.Label>
                <Form.Control
                  value={message}
                  onChange={handleChangeMessage}
                  as="textarea"
                  rows={3}
                />
                <Form.Text id="" muted>
                  El mensaje debe contener un máximo de 1000 caracteres.
                </Form.Text>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Enviar
            </Button>
          </Modal.Footer>
        </Modal>
      );
    } else {
      return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Inicia Sesion!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Para poder realizar una pregunta, tienes que haber iniciado
              sesión. Haz click <Link to="/login">aqui</Link> para iniciar
              sesión
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      );
    }
  };

  useEffect(() => {
    Category();
  }, []);

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
            <ColumnCategories />
          </Col>
          <Col className="bg-primary">
            <Col
              className="mt-2"
              style={{ display: "flex", justifyContent: "end" }}
            >
              <Button
                variant="secondary"
                size="sm"
                style={{ width: "8rem", fontSize: "11px" }}
                onClick={handleShow}
              >
                Hacer una pregunta
              </Button>
              <div>{modal()}</div>
            </Col>
            <h1 className="text-center text-dark m-3">Preguntas</h1>
            <AllQuestion />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;

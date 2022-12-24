import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import NavBarComponents from "../components/NavBar";
import Footer from "../components/Footer";
import "../css/viewUser.css";

const ViewLoginUser = () => {
  const { id } = useParams();

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
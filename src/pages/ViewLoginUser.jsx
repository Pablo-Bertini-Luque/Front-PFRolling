import { React, useState, useEffect } from "react";
import { BsList } from "react-icons/bs";
import "../css/viewUser.css";
import Pregunta from "../pages/Pregunta";
import { useParams } from "react-router-dom";

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

  return (
    <>
      <div className="viewUser">
        <div className="viewUser__header">
          <BsList className="viewUser__menu" />
          <h2 className="viewUser__title">Bienvenido a {user?.user.name} </h2>
        </div>
        <div className="viewUser__container-description">
          <p className="viewUser__description">
            Cualquiera puede formular una pregunta Cualquiera puede responder
            Vota a favor de las mejores respuestas
          </p>
        </div>
        <form className="viewUser__form">
          <input
            type="text"
            className="viewUser__search"
            placeholder="Buscar"
          />
          <input type="submit" className="viewUser__submit" />
        </form>
        <div className="viewUser__main">
          <h3 className="viewUser__main-title">Todas las Preguntas</h3>
          <Pregunta />
        </div>
      </div>
    </>
  );
};

export default ViewLoginUser;

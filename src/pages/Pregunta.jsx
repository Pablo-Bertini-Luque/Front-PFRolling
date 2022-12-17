import React from "react";
import "../css/pregunta.css";
import { RiStarSFill } from "react-icons/ri";

const Pregunta = ({
  img,
  nameUsuario,
  cantiadadDeRespuestas,
  tituloPregunta,
  comentario,
}) => {
  return (
    <>
      <div className="pregunta">
        <div className="pregunta__header">
          <img src={img} className="pregunta__img" alt="img" />
          <h3 className="pregunta__name-user">{nameUsuario}Usuario</h3>
        </div>
        <div className="pregunta__container-stars">
          <div className="pregunta__stars">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </div>
          <div className="pregunta__cantidad-respuestas">
            {cantiadadDeRespuestas}titulo pregunta
          </div>
        </div>
        <div className="pregunta__titulo-pregunta">{tituloPregunta}</div>
        <div className="pregunta__comentario">
          {comentario}sadsasadasdsaadsadasd
        </div>
        <div className="pregunta__respuestas">respuestas</div>
      </div>
    </>
  );
};

export default Pregunta;

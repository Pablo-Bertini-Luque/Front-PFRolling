import React from "react";
import LOGO from "../assets/image/logo.png";
import ButtonsLogin from "../components/ButtonsLogin";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../css/login.css";

const Login = () => {
  return (
    <>
      <div className="login">
        <div className="login__container-logo">
          <img className="login__logo" src={LOGO} alt="logo" />
          <h3 className="login__title">
            STACK <br /> NOW
          </h3>
        </div>
        <div className="login__container-text">
          <h3 className="login__text-title">
            Inicia sesión para descubrir todas las funciones
          </h3>
          <Link to="*" style={{ textDecoration: "none" }}>
            <ButtonsLogin icon={<FcGoogle />} text={"Continuar con Google"} />
            <ButtonsLogin
              icon={<AiFillFacebook />}
              text={"Continuar con Facebook"}
            />
          </Link>
          <Link to="/login/email" className="login__email">
            Continuar con correo electrónico
          </Link>
          <Link to="/register" className="notFound">
            Registrarse
          </Link>
          <Link className="notFound" to="/">
            Volver a Inicio
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;

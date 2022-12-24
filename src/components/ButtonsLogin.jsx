import React from "react";
import { Link } from "react-router-dom";
import "../css/buttonsLogin.css";

function ButtonsLogin({ icon, text }) {
  return (
    <>
      <Link to="*" className="button-login">
        <div className="button-login__icon">{icon}</div>
        <span className="button-login__text">{text}</span>
      </Link>
    </>
  );
}

export default ButtonsLogin;

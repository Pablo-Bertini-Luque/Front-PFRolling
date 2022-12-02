import React from "react";
import "../css/buttonsLogin.css";

function ButtonsLogin({ icon, text }) {
  return (
    <>
      <a href="#" className="button-login">
        <div className="button-login__icon">{icon}</div>
        <span className="button-login__text">{text}</span>
      </a>
    </>
  );
}

export default ButtonsLogin;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AiFillEye } from "react-icons/ai";
import "../css/register.css";

function Register() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [eye, setEye] = useState(false);
  const handleClickEye = () => {
    console.log(eye);
    setEye(!eye);
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const signUpUser = async (name, email, password) => {
    try {
      const response = await axios.post(`${apiUrl}/users/signup`, {
        name: name,
        email: email,
        password: password,
      });
      const data = await response;
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleNewUser = async (event) => {
    event.preventDefault();
    try {
      if (name === "" || email.length >= 0 || password.length < 5) {
        if (name === "") {
          return alert("El campo usuario se encuentra vacio");
        }
        if (email.length >= 0) {
          validateEmail(email);
        }
        if (password.length < 5) {
          return alert("El password debe tener al menos 5 caracteres");
        }
        const newuser = await signUpUser(name, email, password);
        console.log(newuser);
        setUser(newuser);
        setName("");
        setEmail("");
        setPassword("");
        alert("Usuario creado");
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const prueba = re.test(String(email).toLowerCase());
    if (!prueba) {
      alert("Ingrese un mail valido");
    }
  };

  return (
    <>
      <div className="register">
        <h3 className="register__title">Nuevo Registro</h3>
        <form className="register__form" onSubmit={signUpUser}>
          <div className="register__container-input">
            <label htmlFor="name">Nombre y Apellido</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Ingresa tu nombre y apellido"
              value={name}
              onChange={handleChangeName}
              required
            />
          </div>
          <div className="register__container-input">
            <label htmlFor="email">Dirección de correo electrónico</label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Dirección de correo electrónico"
              value={email}
              onChange={handleChangeEmail}
              required
            />
          </div>
          <div className="register__container-input">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              name="password"
              type={eye === true ? "text" : "password"}
              placeholder="Contraseña"
              value={password}
              onChange={handleChangePassword}
              required
            />
            <AiFillEye
              onClick={(e) => handleClickEye(e)}
              className="register__eye "
            />
          </div>
          <Link to="*" className="register__password-forgotten">
            ¿Has olvidado tu contraseña?
          </Link>
          <button
            type="submit"
            className="register__button"
            onClick={handleNewUser}
          >
            Registrarse
          </button>
        </form>
        <Link to="/login/email" className="register__register">
          Iniciar sesión
        </Link>
      </div>
    </>
  );
}

export default Register;

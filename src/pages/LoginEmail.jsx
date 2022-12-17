import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/loginEmail.css";
import { Formik, replace } from "formik";
import { AiFillEye } from "react-icons/ai";
import axios from "axios";

const LoginEmail = () => {
  const [eye, setEye] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const log = async (username, password) => {
    try {
      const response = await axios.post(
        "http://localhost:4002/api/v1/users/login",
        {
          email: username,
          password: password,
        }
      );
      const data = await response;
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
    console.log(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const newuser = await log(username, password);
      console.log(newuser);
      const { token } = await newuser.data;
      localStorage.setItem("user-token", token);
      if (localStorage.getItem("user-token")) {
        navigate(`/login/user/${newuser.data.user._id}`, { replace: true });
      } else {
        console.log("chau");
      }
      setUser(newuser);
      setUsername("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickEye = () => {
    console.log(eye);
    setEye(!eye);
  };
  return (
    <>
      <div className="login-email">
        <h3 className="login-email__title">¡Hola de nuevo!</h3>
        <Formik
          initialValues={{
            login_email_user: "",
            login_email_password: "",
          }}
          validate={(values) => {
            const EX_REG_EMAIL =
              /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

            let errors = {};
            if (!values.login_email_user.trim()) {
              errors.login_email_user =
                "el campo del correo electronico no puede quedar vacio";
            } else if (!EX_REG_EMAIL.test(values.login_email_user)) {
              errors.login_email_user = "ingrese un correo electronico valido";
            }

            if (!values.login_email_password.trim()) {
              errors.login_email_password =
                "el campo de la contraseña no puede quedar vacio";
            } else if (values.login_email_password.length < 8) {
              errors.login_email_password =
                "porfavor ingresa una contraseña de minimo 8 caracteres";
            }

            return errors;
          }}
          onSubmit={(valores, { resetForm }) => {
            resetForm();
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            errors,
            values,
            touched,
          }) => (
            <form className="login-email__form" onSubmit={handleSubmit}>
              <div className="login-email__container-input">
                <label>Dirección de correo electrónico</label>
                <input
                  value={[username]}
                  className={
                    touched.login_email_user && errors.login_email_user
                      ? "login-email__input-not"
                      : "login-email__input-ok"
                  }
                  name="login_email_user"
                  type="email"
                  placeholder="Dirección de correo electrónico"
                  onChange={handleChangeUsername}
                  onBlur={handleBlur}
                />
                {touched.login_email_user && errors.login_email_user && (
                  <div className="error">{errors.login_email_user}</div>
                )}
              </div>
              <div className="login-email__container-input">
                <label>Contraseña</label>
                <input
                  name="login_email_password"
                  type={eye === true ? "text" : "password"}
                  className={
                    touched.login_email_password && errors.login_email_password
                      ? "login-email__input-not"
                      : "login-email__input-ok"
                  }
                  placeholder="Contraseña"
                  value={[password]}
                  onChange={handleChangePassword}
                  onBlur={handleBlur}
                />
                <AiFillEye
                  onClick={(e) => handleClickEye(e)}
                  className="login-email__eye "
                />
                {touched.login_email_password &&
                  errors.login_email_password && (
                    <div className="error">{errors.login_email_password}</div>
                  )}
              </div>
              <a href="#" className="login-email__password-forgotten">
                ¿Has olvidado tu contraseña?
              </a>
              <button
                type="submit"
                onClick={handleLogin}
                className="login-email__button"
              >
                Iniciar Sesion
              </button>
            </form>
          )}
        </Formik>
        <Link to="/register" className="login-email__register">
          Registrarse
        </Link>
      </div>
    </>
  );
};

export default LoginEmail;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Formik } from "formik";
import { AiFillEye } from "react-icons/ai";
import "../css/register.css";

const Register = () => {
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
      const response = await axios.post(
        "http://localhost:4002/api/v1/users/signup",
        { name: name, email: email, password: password }
      );
      const data = await response;
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleNewUser = async (event) => {
    event.preventDefault();
    try {
      const newuser = await signUpUser(name, email, password);
      console.log(newuser);
      setUser(newuser);
      setName("");
      setEmail("");
      setPassword("");
      alert("Usuario creado");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="register">
        <h3 className="register__title">Nuevo Registro</h3>
        <Formik
          initialValues={{
            register_email_user: "",
            register_email_password: "",
          }}
          validate={(values) => {
            const EX_REG_EMAIL =
              /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

            let errors = {};
            if (!values.register_email_user.trim()) {
              errors.register_email_user =
                "el campo del correo electronico no puede quedar vacio";
            } else if (!EX_REG_EMAIL.test(values.register_email_user)) {
              errors.register_email_user =
                "ingrese un correo electronico valido";
            }

            if (!values.register_email_password.trim()) {
              errors.register_email_password =
                "el campo de la contraseña no puede quedar vacio";
            } else if (values.register_email_password.length < 8) {
              errors.register_email_password =
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
            <form className="register__form" onSubmit={handleSubmit}>
              <div className="register__container-input">
                <label>Nombre y Apellido</label>
                <input
                  // value={values.register_email_user}
                  value={name}
                  className={
                    touched.register_email_user && errors.register_email_user
                      ? "register__input-not"
                      : "register__input-ok"
                  }
                  name="register_name_user"
                  type="text"
                  placeholder="Ingresa tu nombre y apellido"
                  // onChange={handleChange}
                  onChange={handleChangeName}
                  onBlur={handleBlur}
                />
                {touched.register_email_user && errors.register_email_user && (
                  <div className="error">{errors.register_email_user}</div>
                )}
              </div>
              <div className="register__container-input">
                <label>Dirección de correo electrónico</label>
                <input
                  // value={values.register_email_user}
                  value={email}
                  className={
                    touched.register_email_user && errors.register_email_user
                      ? "register__input-not"
                      : "register__input-ok"
                  }
                  name="register_email_user"
                  type="email"
                  placeholder="Dirección de correo electrónico"
                  // onChange={handleChange}
                  onChange={handleChangeEmail}
                  onBlur={handleBlur}
                />
                {touched.register_email_user && errors.register_email_user && (
                  <div className="error">{errors.register_email_user}</div>
                )}
              </div>
              <div className="register__container-input">
                <label>Contraseña</label>
                <input
                  name="register_email_password"
                  type={eye === true ? "text" : "password"}
                  className={
                    touched.register_email_password &&
                    errors.register_email_password
                      ? "register__input-not"
                      : "register__input-ok"
                  }
                  placeholder="Contraseña"
                  // value={values.register_email_password}
                  value={password}
                  // onChange={handleChange}
                  onChange={handleChangePassword}
                  onBlur={handleBlur}
                />
                <AiFillEye
                  onClick={(e) => handleClickEye(e)}
                  className="register__eye "
                />
                {touched.register_email_password &&
                  errors.register_email_password && (
                    <div className="error">
                      {errors.register_email_password}
                    </div>
                  )}
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
          )}
        </Formik>
        <Link to="/login/email" className="register__register">
          Iniciar sesión
        </Link>
      </div>
    </>
  );
};

export default Register;

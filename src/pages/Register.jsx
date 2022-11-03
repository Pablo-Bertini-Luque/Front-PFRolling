import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/register.css';
import { Formik } from 'formik';
import { AiFillEye } from 'react-icons/ai';

const Register = () => {
	const [eye, setEye] = useState(false);

	const handleClickEye = () => {
		console.log(eye);
		setEye(!eye);
	};
	return (
		<>
			<div className="register">
				<h3 className="register__title">Nuevo Registro</h3>
				<Formik
					initialValues={{
						register_email_user: '',
						register_email_password: '',
					}}
					validate={(values) => {
						const EX_REG_EMAIL =
							/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

						let errors = {};
						if (!values.register_email_user.trim()) {
							errors.register_email_user = 'el campo del correo electronico no puede quedar vacio';
						} else if (!EX_REG_EMAIL.test(values.register_email_user)) {
							errors.register_email_user = 'ingrese un correo electronico valido';
						}

						if (!values.register_email_password.trim()) {
							errors.register_email_password = 'el campo de la contraseña no puede quedar vacio';
						} else if (values.register_email_password.length < 8) {
							errors.register_email_password =
								'porfavor ingresa una contraseña de minimo 8 caracteres';
						}

						return errors;
					}}
					onSubmit={(valores, { resetForm }) => {
						resetForm();
					}}
				>
					{({ handleSubmit, handleChange, handleBlur, errors, values, touched }) => (
						<form className="register__form" onSubmit={handleSubmit}>
							<div className="register__container-input">
								<label>Dirección de correo electrónico</label>
								<input
									value={values.register_email_user}
									className={
										touched.register_email_user && errors.register_email_user
											? 'register__input-not'
											: 'register__input-ok'
									}
									name="register_email_user"
									type="email"
									placeholder="Dirección de correo electrónico"
									onChange={handleChange}
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
									type={eye === true ? 'text' : 'password'}
									className={
										touched.register_email_password && errors.register_email_password
											? 'register__input-not'
											: 'register__input-ok'
									}
									placeholder="Contraseña"
									value={values.register_email_password}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								<AiFillEye onClick={(e) => handleClickEye(e)} className="register__eye " />
								{touched.register_email_password && errors.register_email_password && (
									<div className="error">{errors.register_email_password}</div>
								)}
							</div>
							<a href="#" className="register__password-forgotten">
								¿Has olvidado tu contraseña?
							</a>
							<button type="submit" className="register__button">
								Registrarse
							</button>
						</form>
					)}
				</Formik>
				<Link to="/register" className="register__register">
					Iniciar sesión
				</Link>
			</div>
		</>
	);
};

export default Register;

import axios from "axios";
import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Login } from "../services/login";

function AuthenticationLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const log = async (username, password) => {
    try {
    const response = await axios.post("http://localhost:4002/api/v1/users/login", {
      email: username, password: password
    });
    const data = await response;
    return data;
  } catch (error) {
    console.error(error);
  }
  }

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
    console.log(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const newuser = await log(username, password);
      console.log(newuser)
      const {token} = await newuser.data;
      localStorage.setItem("user-token", token)
      if(localStorage.getItem("user-token")){
        console.log("adentro")
      }else{
        console.log("chau")
      }
      setUser(newuser);
      setUsername("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };
///
  return (
    <Form onSubmit={handleLogin}>
      <div>
        <input
          type="text"
          value={username}
          name="Username"
          placeholder="Username"
          onChange={handleChangeUsername}
        ></input>
      </div>
      <div>
        <input
          type="password"
          value={password}
          name="Password"
          placeholder="Password"
          onChange={handleChangePassword}
        ></input>
      </div>
      <button>Login</button>
    </Form>
  );
}

export default AuthenticationLogin;

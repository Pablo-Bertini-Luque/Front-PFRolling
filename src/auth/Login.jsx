import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Login } from "../services/login";

function AuthenticationLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

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
      const user = await Login({ username, password });
      setUser(user);
      setUsername("");
      setPassword("");
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

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

// @ts-nocheck
import React from "react";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

export type IInputs = {
  username: string;
  password: string;
};

//TODO check existing login
const Login = () => {
  const { login } = useContext(AuthContext);
  const [err, setErr] = useState(null);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      login(inputs);
      Navigate("/");
    } catch (err) {
      setErr(JSON.stringify(err.response.data));
    }
  };

  return (
    <main className="login">
      <div className="login-wrapper">
        <h2>User login</h2>
        <form>
          <input
            type="text"
            onChange={handleChange}
            name="username"
            placeholder="Username"
          />
          <input
            type="password"
            onChange={handleChange}
            name="password"
            placeholder="Password"
          />
          {err && err}
          <button onClick={handleLogin}>Login</button>
        </form>
      </div>
    </main>
  );
};

export default Login;

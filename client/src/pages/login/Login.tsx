// @ts-nocheck
import React from "react";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

export type IInputs = {
  username: string;
  password: string;
};

const Login = () => {
  const { currentUser, login } = useContext(AuthContext);
  const [err, setErr] = useState(null);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  if (import.meta.env.VITE_AUTO_DEFAULT_LOGIN === "true") {
    login({
      username: "johndoe",
      password: "password",
    });
  }

  if (currentUser.user_id) {
    return <Navigate to="/" />;
  }

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
        <section className="left">
          <h1>Hello!</h1>
          <p>
            Share your best shots and boost friends by commenting on their work!
          </p>
          <span>Want to register an account?</span>
          <Link to="/">
            <button>Register</button>
          </Link>
        </section>
        <section className="right">
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
        </section>
      </div>
    </main>
  );
};

export default Login;

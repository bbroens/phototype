// @ts-nocheck
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const { currentUser, login } = useContext(AuthContext);

  if (currentUser.user_id) {
    return <Navigate to="/" />;
  }

  const handleLogin = () => {
    if (login) {
      login();
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
          <h2>Existing user</h2>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Login;

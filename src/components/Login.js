import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container">
      <div className="card">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        <p style={{ marginTop: "15px" }}>
          <Link to="/forgot-password">Forgot Password?</Link><br />
          <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import "../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login Successful!\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="logo">ResumePro</h1>
        <p className="edition">Student Edition</p>

        <h2>Welcome Back</h2>
        <p className="subtitle">Sign in to continue building your career.</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="password-header">
            <label>Password</label>
            <a href="/forgot-password" className="forgot-link">
              Forgot Password?
            </a>
          </div>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="remember">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me for 30 days</label>
          </div>

          <button type="submit" className="btn-primary">Log In</button>
        </form>

        <div className="divider">OR CONTINUE WITH</div>

        <div className="social-login">
          <button className="social-btn google">Google</button>
          <button className="social-btn linkedin">LinkedIn</button>
        </div>

        <p className="signup-text">
          Don’t have an account? <a href="/register">Sign up</a>
        </p>
      </div>

      <footer className="footer">
        © 2024 ResumePro Student Edition. Precise. Professional. Proven.
      </footer>
    </div>
  );
};

export default Login;

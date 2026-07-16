import React, { useState } from "react";
import "./Login.css";
import "../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login Successful!\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="auth-page">
      <div className="auth-brand">
        <div className="blob blob-teal"></div>
        <div className="blob blob-amber"></div>

        <div className="auth-brand-content">
          <span className="brand-logo">ResumePro</span>
          <h1>Welcome back to your career toolkit.</h1>
          <p>Pick up right where you left off — your resume, your progress, your next application.</p>

          <div className="auth-illustration">
            <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="20" width="120" height="90" rx="8" fill="#ffffff" opacity="0.08" />
              <rect x="34" y="34" width="70" height="6" rx="3" fill="#e8a33d" />
              <rect x="34" y="48" width="90" height="5" rx="2.5" fill="rgba(255,255,255,0.4)" />
              <rect x="34" y="60" width="60" height="5" rx="2.5" fill="rgba(255,255,255,0.4)" />
              <rect x="34" y="72" width="80" height="5" rx="2.5" fill="rgba(255,255,255,0.3)" />
              <circle cx="150" cy="100" r="24" fill="#0f7d76" />
              <path d="M141 100 l6 6 12-13" stroke="#fff" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      <div className="auth-panel">
        <div className="login-card">
          <p className="edition">Student Edition</p>
          <h2>Welcome Back</h2>
          <p className="subtitle">Sign in to continue building your career.</p>

          <form className="login-form" onSubmit={handleSubmit}>
            <label>Email Address</label>
            <div className="input-with-icon">
              <svg viewBox="0 0 24 24" className="input-icon">
                <path d="M4 6h16v12H4z" fill="none" stroke="#5b6472" strokeWidth="1.5" />
                <path d="M4 7l8 6 8-6" fill="none" stroke="#5b6472" strokeWidth="1.5" />
              </svg>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="password-header">
              <label>Password</label>
              <a href="/forgot-password" className="forgot-link">
                Forgot Password?
              </a>
            </div>
            <div className="input-with-icon">
              <svg viewBox="0 0 24 24" className="input-icon">
                <rect x="5" y="10" width="14" height="10" rx="2" fill="none" stroke="#5b6472" strokeWidth="1.5" />
                <path d="M8 10V7a4 4 0 018 0v3" fill="none" stroke="#5b6472" strokeWidth="1.5" />
              </svg>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="remember">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me for 30 days</label>
            </div>

            <button type="submit" className="btn-primary">Log In</button>
          </form>

          <div className="divider">OR CONTINUE WITH</div>

          <div className="social-login">
            <button className="social-btn google">
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path fill="#4285F4" d="M23 12.25c0-.85-.08-1.5-.24-2.17H12v4h6.2c-.13 1-.8 2.5-2.3 3.5l3.6 2.8c2.1-2 3.5-4.9 3.5-8.1z" />
                <path fill="#34A853" d="M12 24c3.1 0 5.7-1 7.6-2.8l-3.6-2.8c-1 .7-2.3 1.1-4 1.1-3.1 0-5.7-2-6.6-4.8H1.6v3C3.5 21.4 7.4 24 12 24z" />
                <path fill="#FBBC05" d="M5.4 14.7c-.2-.7-.4-1.4-.4-2.2s.1-1.5.4-2.2v-3H1.6A11.9 11.9 0 000 12.5c0 1.9.5 3.7 1.6 5.2z" />
                <path fill="#EA4335" d="M12 4.8c1.7 0 3.2.6 4.4 1.7l3.2-3.2C17.7 1.4 15.1 0 12 0 7.4 0 3.5 2.6 1.6 6.3l3.8 3C6.3 6.8 8.9 4.8 12 4.8z" />
              </svg>
              Google
            </button>
            <button className="social-btn linkedin">
              <svg viewBox="0 0 24 24" width="18" height="18">
                <rect width="24" height="24" rx="4" fill="#0A66C2" />
                <path fill="#fff" d="M7.1 9.6H4.4V19h2.7V9.6zM5.7 8.4a1.6 1.6 0 100-3.2 1.6 1.6 0 000 3.2zM19.6 19h-2.7v-5c0-1.2 0-2.7-1.6-2.7s-1.9 1.3-1.9 2.6v5H10.7V9.6h2.6v1.3h.1c.4-.7 1.3-1.5 2.7-1.5 2.9 0 3.5 1.9 3.5 4.4V19z" />
              </svg>
              LinkedIn
            </button>
          </div>

          <p className="signup-text">
            Don't have an account? <a href="/register">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
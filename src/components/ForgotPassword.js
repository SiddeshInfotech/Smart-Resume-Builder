import React, { useState } from "react";
import "./ForgotPassword.css";
import "../App.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    // Simulate sending verification link
    setMessage(`If this email is registered, a reset link has been sent to ${email}.`);
    setEmail("");
  };

  return (
    <div className="forgot-page">
      <div className="blob blob-teal"></div>
      <div className="blob blob-amber"></div>

      <div className="forgot-card">
        <span className="logo">ResumePro</span>

        <div className="forgot-icon">
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="30" fill="#e9edf2" />
            <rect x="18" y="30" width="28" height="20" rx="4" fill="#14213d" />
            <path d="M22 30v-6a10 10 0 0120 0v6" fill="none" stroke="#14213d" strokeWidth="3.5" />
            <circle cx="32" cy="39" r="3.5" fill="#e8a33d" />
            <rect x="30.5" y="41" width="3" height="6" rx="1.5" fill="#e8a33d" />
          </svg>
        </div>

        <h2>Reset Password</h2>
        <p className="subtitle">
          Enter your email address and we'll send you a link to reset your password.
        </p>

        <form onSubmit={handleSubmit}>
          <label>Email Address</label>
          <div className="input-with-icon">
            <svg viewBox="0 0 24 24" className="input-icon">
              <path d="M4 6h16v12H4z" fill="none" stroke="#5b6472" strokeWidth="1.5" />
              <path d="M4 7l8 6 8-6" fill="none" stroke="#5b6472" strokeWidth="1.5" />
            </svg>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <p className="hint-text">Use the email you registered with.</p>

          <button type="submit" className="btn-primary">
            Send Reset Link →
          </button>
        </form>

        {message && (
          <p className="success-msg">
            <svg viewBox="0 0 20 20" className="success-icon">
              <circle cx="10" cy="10" r="10" fill="#0f7d76" />
              <path d="M6 10.5l2.5 2.5 5-6" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {message}
          </p>
        )}

        <a href="/login" className="back-link">← Back to Login</a>

        <footer className="footer">
          © 2024 ResumePro Student Edition. Built for Career Success.
        </footer>
      </div>
    </div>
  );
};

export default ForgotPassword;
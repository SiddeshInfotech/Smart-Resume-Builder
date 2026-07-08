import React, { useState } from "react";
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
      <div className="forgot-card">
        <h1 className="logo">ResumePro</h1>
        <h2>Reset Password</h2>
        <p className="subtitle">
          Enter your email address and we’ll send you a link to reset your password.
        </p>

        <form onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p className="hint-text">Use the email you registered with.</p>

          <button type="submit" className="btn-primary">
            Send Reset Link →
          </button>
        </form>

        {message && <p className="success-msg">{message}</p>}

        <a href="/login" className="back-link">← Back to Login</a>

        <footer className="footer">
          © 2024 ResumePro Student Edition. Built for Career Success.
        </footer>
      </div>
    </div>
  );
};

export default ForgotPassword;

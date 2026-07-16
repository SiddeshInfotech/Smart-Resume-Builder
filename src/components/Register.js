import React, { useState } from "react";
import "./Register.css";
import "../App.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Password validation
    if (name === "password") {
      const regex = /^[A-Za-z0-9_]{1,12}$/; // only letters, numbers, underscore, max 12 chars
      if (!regex.test(value)) {
        setPasswordError(
          "Password can only be up to 12 characters long and may contain numbers, alphabets, and underscores."
        );
      } else {
        setPasswordError("");
      }
    }
  }; // closes handleChange properly

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordError) {
      alert("Please fix password errors before submitting.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    alert(`Account created for ${formData.name} (${formData.email})`);
  };

  return (
    <div className="register-page">
      {/* Left brand panel */}
      <div className="register-left">
        <div className="blob blob-teal"></div>
        <div className="blob blob-amber"></div>

        <div className="register-left-content">
          <span className="logo">ResumePro</span>
          <h2>Your career journey begins with a professional story.</h2>
          <p>
            Join students who have secured internships and first jobs using
            a resume builder made specifically for early careers.
          </p>

          <div className="feature-boxes">
            <div className="feature">
              <div className="feature-icon">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="14" fill="rgba(255,255,255,0.1)" />
                  <path d="M10 16 l4 4 8-9" stroke="#e8a33d" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4>ATS-Optimized</h4>
              <p>Built to pass through recruitment filters.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="14" fill="rgba(255,255,255,0.1)" />
                  <path d="M16 9 L26 13.5 L16 18 L6 13.5 Z" fill="#e8a33d" />
                  <path d="M11 15.5 v4 c0 1.6 2.2 3 5 3 s5 -1.4 5 -3 v-4" fill="none" stroke="#e8a33d" strokeWidth="1.6" />
                </svg>
              </div>
              <h4>Student First</h4>
              <p>Templates designed for entry-level success.</p>
            </div>
          </div>

          <div className="register-illustration">
            <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
              <rect x="30" y="20" width="90" height="100" rx="8" fill="#ffffff" opacity="0.08" />
              <rect x="42" y="34" width="50" height="6" rx="3" fill="#e8a33d" />
              <rect x="42" y="48" width="65" height="5" rx="2.5" fill="rgba(255,255,255,0.4)" />
              <rect x="42" y="60" width="45" height="5" rx="2.5" fill="rgba(255,255,255,0.4)" />
              <rect x="42" y="72" width="60" height="5" rx="2.5" fill="rgba(255,255,255,0.3)" />
              <rect x="42" y="90" width="30" height="16" rx="4" fill="#0f7d76" />
              <circle cx="150" cy="60" r="30" fill="#0f7d76" opacity="0.9" />
              <path d="M138 60 l8 8 16-18" stroke="#fff" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Right form panel */}
      <div className="register-right">
        <div className="register-card">
          <h3>Create Your Account</h3>
          <p className="subtitle">Step into a more professional future today.</p>

          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <div className="input-with-icon">
              <svg viewBox="0 0 24 24" className="input-icon">
                <circle cx="12" cy="8" r="3.5" fill="none" stroke="#5b6472" strokeWidth="1.5" />
                <path d="M5 20c1.5-4 4-5.5 7-5.5s5.5 1.5 7 5.5" fill="none" stroke="#5b6472" strokeWidth="1.5" />
              </svg>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

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
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <label>Password</label>
            <div className="input-with-icon">
              <svg viewBox="0 0 24 24" className="input-icon">
                <rect x="5" y="10" width="14" height="10" rx="2" fill="none" stroke="#5b6472" strokeWidth="1.5" />
                <path d="M8 10V7a4 4 0 018 0v3" fill="none" stroke="#5b6472" strokeWidth="1.5" />
              </svg>
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                maxLength={12}
                required
              />
            </div>
            {passwordError && (
              <p className="password-error">{passwordError}</p>
            )}

            <label>Confirm Password</label>
            <div className="input-with-icon">
              <svg viewBox="0 0 24 24" className="input-icon">
                <rect x="5" y="10" width="14" height="10" rx="2" fill="none" stroke="#5b6472" strokeWidth="1.5" />
                <path d="M8 10V7a4 4 0 018 0v3" fill="none" stroke="#5b6472" strokeWidth="1.5" />
              </svg>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                maxLength={12}
                required
              />
            </div>

            <button type="submit" className="btn-primary">
              Create Account
            </button>
          </form>
        </div>

        <footer className="footer">
          © 2024 ResumePro Student Edition. Built for Career Success.{" "}
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> |{" "}
          <a href="#">Contact Support</a>
        </footer>
      </div>
    </div>
  );
};

export default Register;
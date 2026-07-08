import React, { useState } from "react";
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
  }; // ✅ closes handleChange properly

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
      {/* Left Section */}
      <div className="register-left">
        <h1 className="logo">ResumePro</h1>
        <h2>Your career journey begins with a professional story.</h2>
        <p>
          Join thousands of students who have secured their dream internships
          and first jobs using our scholarly, precision‑engineered resume builder.
        </p>

        <div className="feature-boxes">
          <div className="feature">
            <h4>✅ ATS‑Optimized</h4>
            <p>Built to pass through top recruitment filters.</p>
          </div>
          <div className="feature">
            <h4>🎓 Student First</h4>
            <p>Templates designed for entry‑level success.</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="register-right">
        <div className="register-card">
          <h3>Create Your Account</h3>
          <p className="subtitle">Step into a more professional future today.</p>

          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              maxLength={12}
              required
            />
            {passwordError && (
              <p className="password-error">{passwordError}</p>
            )}

            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-enter your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              maxLength={12}
              required
            />

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

import React, { useState } from "react";
import "./ContactUs.css";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => setForm((p) => ({ ...p, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      <div className="dash-header">
        <h1>Contact Us</h1>
        <p>Questions, bugs, or feature ideas — we'd like to hear them.</p>
      </div>

      <div className="contact-layout">
        <div className="contact-form-card">
          <form onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
            />
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
            />
            <label>Message</label>
            <textarea
              rows="6"
              placeholder="How can we help?"
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              required
            />
            <button type="submit" className="btn-primary">Send Message</button>

            {submitted && (
              <p className="contact-success">
                <svg viewBox="0 0 20 20" className="contact-success-icon">
                  <circle cx="10" cy="10" r="10" fill="#0f7d76" />
                  <path d="M6 10.5l2.5 2.5 5-6" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Thanks — your message has been sent. We'll get back to you soon.
              </p>
            )}
          </form>
        </div>

        <div className="contact-info-card">
          <div className="contact-info-icon">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="7" width="24" height="18" rx="3" fill="#e9edf2" />
              <path d="M4 9l12 9 12-9" fill="none" stroke="#0f7d76" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h4>Email Support</h4>
          <p>support@resumepro.example</p>
          <p className="contact-response-time">Typical response time: within 1-2 business days.</p>
        </div>
      </div>
    </div>
  );
}
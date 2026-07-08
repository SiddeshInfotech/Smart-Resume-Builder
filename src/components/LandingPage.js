import React from "react";
import "../App.css";

const Landingpage = () => {
  return (
    <div className="landing">
      <header className="navbar">
        <div className="logo">ResumePro</div>
        <nav className="nav-links">
          <a href="/">Templates</a>
          <a href="/help">Help</a>
          <a href="/login">Log In</a>
          <button className="btn-primary">Create New</button>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text">
          <span className="badge">Trusted by 10K+ Students</span>
          <h1>
            Build a Career‑Ready <span className="highlight">Resume</span> in Minutes.
          </h1>
          <p>
            The AI‑powered resume builder designed specifically for students and fresh graduates.
            Turn your education and internships into a professional profile that gets you hired.
          </p>
          <div className="cta">
            <button className="btn-primary">Get Started</button>
            <a href="/login" className="login-link">Log In →</a>
          </div>
          <div className="compatibility">
            Compatible with: <strong>LinkedIn</strong> | <strong>Indeed</strong> | <strong>University Portals</strong>
          </div>
        </div>

        <div className="hero-image">
          {/* ✅ Use public folder path */}
          <img src="/landing-image.png" alt="Resume illustration" />

          <div className="tag top-left">
            ✅ AI Optimizer<br /><small>Resume health: 98%</small>
          </div>
          <div className="tag bottom-right">💼 New Job Match!</div>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <h3>✨ AI Writing Assistant</h3>
          <p>Smart suggestions for bullet points that highlight your unique academic strengths.</p>
        </div>
        <div className="feature">
          <h3>🧩 Professional Templates</h3>
          <p>Modern, ATS‑friendly designs that stand out in crowded recruiter inboxes.</p>
        </div>
        <div className="feature">
          <h3>📈 Career Path Tracking</h3>
          <p>Monitor your applications and optimize your resume for specific job descriptions.</p>
        </div>
      </section>

      <footer>
        <p>© 2024 ResumePro Student Edition. Built for Career Success.</p>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a> | 
          <a href="/terms">Terms of Service</a> | 
          <a href="/accessibility">Accessibility</a> | 
          <a href="/support">Contact Support</a>
        </div>
      </footer>
    </div>
  );
};

export default Landingpage;

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import "../App.css";

const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
};

const Landingpage = () => {
  const [matchScore, setMatchScore] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    let current = 0;
    const target = 94;
    const timer = setInterval(() => {
      current += 2;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setMatchScore(current);
    }, 25);
    return () => clearInterval(timer);
  }, []);

  const trustRef = useReveal();
  const featuresRef = useReveal();
  const stepsRef = useReveal();
  const statsRef = useReveal();
  const testimonialRef = useReveal();
  const ctaRef = useReveal();

  return (
    <div className="landing">
      <section className="hero">
        <div className="blob blob-teal"></div>
        <div className="blob blob-amber"></div>

        <div className="hero-text">
          <span className="badge">Trusted by 10K+ Students</span>
          <h1>
            Build a Career-Ready <span className="highlight">Resume</span> in Minutes.
          </h1>
          <p>
            ResumePro is a smart resume builder made for students and fresh graduates.
            Turn your coursework, projects and internships into a resume recruiters
            actually stop to read.
          </p>
          <div className="cta">
            <button className="btn-primary">Get Started — It's Free</button>
            <a href="/login" className="login-link">Log In →</a>
          </div>
          <div className="compatibility">
            Exports for: <strong>LinkedIn</strong> · <strong>Indeed</strong> · <strong>University Portals</strong>
          </div>
        </div>

        <div className="hero-visual">
          {/* Ghost card behind the main card creates a stacked, parallax depth effect */}
          <div className="ghost-card"></div>

          <div className="resume-card">
            <div className="scan-line"></div>
            <div className="resume-card-header">
              <div className="avatar-dot"></div>
              <div className="header-lines">
                <span className="line line-name"></span>
                <span className="line line-role"></span>
              </div>
            </div>
            <div className="resume-section">
              <span className="section-label">Education</span>
              <span className="line line-full"></span>
              <span className="line line-short"></span>
            </div>
            <div className="resume-section">
              <span className="section-label">Experience</span>
              <span className="line line-full highlight-bar"></span>
              <span className="line line-full"></span>
              <span className="line line-short"></span>
            </div>
            <div className="resume-section">
              <span className="section-label">Skills</span>
              <div className="skill-pills">
                <span className="pill"></span>
                <span className="pill"></span>
                <span className="pill"></span>
              </div>
            </div>
          </div>
          <div className="tag top-left">✓ ATS-Optimized</div>
          <div className="tag bottom-right">
            <span className="score-label">Match Score</span>
            <span className="score-value">{matchScore}%</span>
          </div>
        </div>
      </section>

      <section className="trust-strip" ref={trustRef}>
        <div className="trust-icon">
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 12 L58 24 L32 36 L6 24 Z" fill="#14213d" />
            <path d="M18 28 v12 c0 4 6 8 14 8 s14 -4 14 -8 v-12" fill="none" stroke="#14213d" strokeWidth="3" />
            <line x1="58" y1="24" x2="58" y2="42" stroke="#e8a33d" strokeWidth="3" strokeLinecap="round" />
            <circle cx="58" cy="45" r="3" fill="#e8a33d" />
          </svg>
        </div>
        <p className="trust-heading">Built for students at</p>
        <div className="trust-items">
          <span>Engineering Colleges</span>
          <span>Polytechnics</span>
          <span>Business Schools</span>
          <span>Community Colleges</span>
          <span>Universities</span>
        </div>
      </section>

      {/*
        PHOTO SPOT: swap the illustration below for a real photo of students
        collaborating. Free options (no license fee, no attribution required):
        Unsplash.com search "students laptop group" or Pexels.com search
        "college students studying" — download, drop into src/assets, then
        replace <div className="story-illustration"> with
        <img src={yourPhoto} alt="Students collaborating" className="story-photo" />
      */}
      <section className="story-banner">
        <div className="story-illustration">
          <svg viewBox="0 0 400 240" className="story-svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="deskGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0f7d76" />
                <stop offset="100%" stopColor="#14213d" />
              </linearGradient>
            </defs>
            <rect x="20" y="150" width="360" height="14" rx="7" fill="#e9edf2" />
            <rect x="60" y="70" width="130" height="90" rx="10" fill="url(#deskGrad)" />
            <rect x="75" y="85" width="100" height="8" rx="4" fill="rgba(255,255,255,0.5)" />
            <rect x="75" y="100" width="70" height="8" rx="4" fill="rgba(255,255,255,0.3)" />
            <rect x="75" y="115" width="85" height="8" rx="4" fill="rgba(255,255,255,0.3)" />
            <circle cx="270" cy="105" r="46" fill="#e8a33d" opacity="0.15" />
            <path d="M245 130 l18 18 34-40" stroke="#e8a33d" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="300" y="60" width="70" height="90" rx="8" fill="#ffffff" stroke="#e9edf2" strokeWidth="2" />
            <rect x="312" y="75" width="46" height="6" rx="3" fill="#0f7d76" />
            <rect x="312" y="88" width="30" height="6" rx="3" fill="#e9edf2" />
            <rect x="312" y="100" width="40" height="6" rx="3" fill="#e9edf2" />
            <rect x="312" y="112" width="34" height="6" rx="3" fill="#e9edf2" />
          </svg>
        </div>
        <div className="story-text">
          <h2>Every application starts on a cluttered desk.</h2>
          <p>ResumePro turns scattered notes, project links and half-written bullet
             points into one clean document — built to pass ATS scans and impress
             the human reading it next.</p>
        </div>
      </section>

      <section className="features" ref={featuresRef}>
        <div className="feature">
          <div className="feature-icon">
            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="8" width="30" height="34" rx="4" fill="#e9edf2" />
              <rect x="12" y="16" width="18" height="4" rx="2" fill="#0f7d76" />
              <rect x="12" y="24" width="14" height="4" rx="2" fill="#c9d3dc" />
              <rect x="12" y="32" width="10" height="4" rx="2" fill="#c9d3dc" />
              <path d="M28 30 L40 18 L44 22 L32 34 L26 36 Z" fill="#e8a33d" />
              <path d="M40 18 L44 22" stroke="#14213d" strokeWidth="1.5" />
            </svg>
          </div>
          <h3>AI Writing Assistant</h3>
          <p>Smart suggestions for bullet points that turn coursework and tasks into achievements.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <rect x="7" y="6" width="34" height="36" rx="5" fill="#0f7d76" />
              <rect x="13" y="13" width="22" height="5" rx="2.5" fill="#ffffff" />
              <rect x="13" y="22" width="14" height="4" rx="2" fill="rgba(255,255,255,0.6)" />
              <rect x="13" y="29" width="18" height="4" rx="2" fill="rgba(255,255,255,0.6)" />
              <rect x="13" y="36" width="10" height="3" rx="1.5" fill="rgba(255,255,255,0.4)" />
              <circle cx="34" cy="30" r="8" fill="#e8a33d" />
              <path d="M31 30 l2 2 4-4" stroke="#14213d" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3>Professional Templates</h3>
          <p>Modern, ATS-friendly designs that stand out in crowded recruiter inboxes.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="30" width="7" height="12" rx="2" fill="#c9d3dc" />
              <rect x="17" y="22" width="7" height="20" rx="2" fill="#e9edf2" />
              <rect x="28" y="14" width="7" height="28" rx="2" fill="#0f7d76" />
              <rect x="39" y="8" width="7" height="34" rx="2" fill="#e8a33d" />
              <path d="M6 20 L18 12 L28 16 L40 4" stroke="#14213d" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="40" cy="4" r="3" fill="#14213d" />
            </svg>
          </div>
          <h3>Career Path Tracking</h3>
          <p>Monitor your applications and tailor your resume to each job description.</p>
        </div>
      </section>

      <section className="how-it-works" ref={stepsRef}>
        <h2>From blank page to job-ready, in three steps</h2>
        <div className="steps">
          <div className="step">
            <div className="step-icon">
              <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="4" width="24" height="32" rx="3" fill="#e9edf2" />
                <rect x="13" y="11" width="14" height="3" rx="1.5" fill="#0f7d76" />
                <rect x="13" y="18" width="10" height="3" rx="1.5" fill="#c9d3dc" />
                <rect x="13" y="25" width="12" height="3" rx="1.5" fill="#c9d3dc" />
                <circle cx="29" cy="30" r="7" fill="#e8a33d" />
                <path d="M29 27 v6 M26 30 h6" stroke="#14213d" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <span className="step-number">01</span>
            <h3>Add your details</h3>
            <p>Fill in your education, projects and internships using prompts built for students.</p>
          </div>
          <div className="step">
            <div className="step-icon">
              <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4 L24 15 L36 15 L26 22 L30 34 L20 26 L10 34 L14 22 L4 15 L16 15 Z" fill="#0f7d76" />
                <circle cx="20" cy="20" r="4" fill="#e8a33d" />
              </svg>
            </div>
            <span className="step-number">02</span>
            <h3>Let AI sharpen it</h3>
            <p>Get bullet-point rewrites and keyword suggestions matched to the roles you want.</p>
          </div>
          <div className="step">
            <div className="step-icon">
              <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3 C27 8 29 16 27 26 L13 26 C11 16 13 8 20 3 Z" fill="#14213d" />
                <circle cx="20" cy="15" r="3.5" fill="#e9edf2" />
                <path d="M13 26 L9 34 L15 30 Z" fill="#e8a33d" />
                <path d="M27 26 L31 34 L25 30 Z" fill="#e8a33d" />
                <path d="M17 30 L15 37 L20 34 L25 37 L23 30 Z" fill="#0f7d76" />
              </svg>
            </div>
            <span className="step-number">03</span>
            <h3>Export & apply</h3>
            <p>Download an ATS-ready PDF or push straight to LinkedIn and university portals.</p>
          </div>
        </div>
      </section>

      <section className="stats" ref={statsRef}>
        <div className="stat">
          <span className="stat-number">10,000+</span>
          <span className="stat-label">Resumes built</span>
        </div>
        <div className="stat">
          <span className="stat-number">94%</span>
          <span className="stat-label">Average ATS match</span>
        </div>
        <div className="stat">
          <span className="stat-number">3x</span>
          <span className="stat-label">More interview callbacks</span>
        </div>
      </section>

      <section className="testimonial" ref={testimonialRef}>
        {/*
          PHOTO SPOT: replace .avatar-illustration with a real student photo,
          e.g. <img src={studentPhoto} alt="Priya S." className="avatar-photo" />
        */}
        <div className="avatar-illustration">PS</div>
        <blockquote>
          "I had zero work experience going in. ResumePro helped me turn three
          college projects into a resume that actually got callbacks."
        </blockquote>
        <p className="testimonial-author">— Priya S., B.Tech Computer Engineering</p>
      </section>

      <section className="final-cta" ref={ctaRef}>
        <div className="blob blob-cta"></div>
        <h2>Your next internship starts with a better resume.</h2>
        <button
       className="btn-primary"
        onClick={() => navigate("/template")}>Build My Resume Now</button>

      </section>

      <footer>
        <div className="footer-columns">
          <div className="footer-brand">
            <span className="footer-logo">ResumePro</span>
            <p>Built for students, by students.</p>
          </div>
          <div className="footer-links-col">
            <span className="footer-heading">Product</span>
            <a href="/login">Log In</a>
            <a href="/register">Sign Up</a>
          </div>
          <div className="footer-links-col">
            <span className="footer-heading">Legal</span>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
          <div className="footer-links-col">
            <span className="footer-heading">Support</span>
            <a href="/accessibility">Accessibility</a>
            <a href="/support">Contact Support</a>
          </div>
        </div>
        <p className="footer-copyright">© 2024 ResumePro Student Edition. Built for Career Success.</p>
      </footer>
    </div>
  );
};

export default Landingpage;
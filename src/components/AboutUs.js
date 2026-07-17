import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-hero-icon">
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="8" width="13" height="20" rx="2" fill="#0f7d76" transform="rotate(-8 11.5 18)" />
            <rect x="18" y="8" width="13" height="20" rx="2" fill="#0b5f5a" transform="rotate(8 24.5 18)" />
            <rect x="16" y="9" width="4" height="18" fill="#14213d" opacity="0.15" />
            <g transform="rotate(40 18 18)">
              <rect x="16" y="1" width="4" height="10" rx="2" fill="#e8a33d" />
              <rect x="16" y="11" width="4" height="15" rx="2" fill="#14213d" />
              <path d="M16 26 L20 26 L18 31 Z" fill="#e8a33d" />
            </g>
          </svg>
        </div>
        <h1>Built for students, not corner offices.</h1>
        <p>
          ResumePro started as a simple question: why does every resume tool feel
          designed for someone with fifteen years of work experience? We built a
          resume builder that actually understands coursework, class projects, and
          internships — the things students and fresh graduates actually have.
        </p>
      </div>

      <div className="about-values-grid">
        <div className="about-value-card">
          <div className="about-value-icon">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="14" fill="#e9edf2" />
              <path d="M10 16 l4 4 8-9" stroke="#0f7d76" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h4>Built for early careers</h4>
          <p>Every template and prompt is designed around student and entry-level realities, not senior-hire templates repurposed for beginners.</p>
        </div>

        <div className="about-value-card">
          <div className="about-value-icon">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="14" fill="#e9edf2" />
              <path d="M17.5 8L11 18h4.5l-1 6 7-10h-4.5z" fill="#e8a33d" />
            </svg>
          </div>
          <h4>ATS-aware by default</h4>
          <p>Every layout is built to parse cleanly through applicant tracking systems, so formatting never costs you a callback.</p>
        </div>

        <div className="about-value-card">
          <div className="about-value-icon">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="14" fill="#e9edf2" />
              <path d="M16 9v10m0 0l-4-4m4 4l4-4" stroke="#0f7d76" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 22h12" stroke="#0f7d76" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </div>
          <h4>Always exportable</h4>
          <p>Your resume is never locked in. Export to PDF, DOCX, or plain text whenever you need it, on whichever plan you're on.</p>
        </div>
      </div>

      <div className="about-story">
        <h2>Why we built this</h2>
        <p>
          Most resume builders are aimed at experienced professionals switching jobs.
          Students end up stretching a two-line class project into something that
          sounds like a full-time role, or leaving a resume mostly blank because there's
          "nothing to put on it." ResumePro flips that: it's built around the kinds of
          experience students actually have, and helps turn a project, an internship,
          or a single semester of coursework into something a recruiter will actually read.
        </p>
      </div>

      <div className="about-footer-note">
        <p>Have feedback or a feature request? We'd genuinely like to hear it.</p>
      </div>
    </div>
  );
}
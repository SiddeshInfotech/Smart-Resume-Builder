import React from "react";
import "./Dashboard.css";

const mockResumes = [
  { id: 1, name: "Software Internship Resume", template: "Modern Minimalist", progress: 85, updated: "Edited 2 days ago", accent: "#0f7d76" },
  { id: 2, name: "Campus Placement Resume", template: "Executive Professional", progress: 55, updated: "Edited 6 days ago", accent: "#e8a33d" },
];

export default function Dashboard({ setActiveTab }) {
  const goToTemplates = () => setActiveTab && setActiveTab("templates");

  return (
    <div className="dashboard-content">
      <div className="dash-header dash-header-row">
        <div>
          <h1>Welcome back, Bhavesh</h1>
          <p>Manage your progress, view statistics, and create new resumes.</p>
        </div>
        <button className="btn-primary dash-header-cta" onClick={goToTemplates}>
          + Create New Resume
        </button>
      </div>

      <div className="dash-stats-grid">
        <div className="dash-stat-card">
          <div className="stat-icon">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <rect x="7" y="4" width="18" height="24" rx="3" fill="#e9edf2" />
              <rect x="11" y="10" width="10" height="2.5" rx="1.25" fill="#0f7d76" />
              <rect x="11" y="15" width="10" height="2.5" rx="1.25" fill="#c9d3dc" />
              <rect x="11" y="20" width="7" height="2.5" rx="1.25" fill="#c9d3dc" />
            </svg>
          </div>
          <h3>2</h3>
          <p>Active Resumes</p>
        </div>

        <div className="dash-stat-card">
          <div className="stat-icon">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="13" fill="#e9edf2" />
              <path d="M16 9v10m0 0l-4-4m4 4l4-4" stroke="#0f7d76" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 22h12" stroke="#0f7d76" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </div>
          <h3>12</h3>
          <p>Downloads</p>
        </div>

        <div className="dash-stat-card">
          <div className="stat-icon">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="13" fill="#e9edf2" />
              <path d="M17.5 8L11 18h4.5l-1 6 7-10h-4.5z" fill="#e8a33d" />
            </svg>
          </div>
          <h3>100%</h3>
          <p>ATS Friendly</p>
        </div>
      </div>

      <div className="dash-section">
        <div className="dash-section-header">
          <h2>Your Resumes</h2>
          <button className="dash-section-link" onClick={goToTemplates}>Browse all templates →</button>
        </div>

        <div className="resume-list-grid">
          {mockResumes.map((resume) => (
            <div className="resume-list-card" key={resume.id}>
              <div className="resume-list-icon" style={{ background: `${resume.accent}1a` }}>
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <rect x="7" y="4" width="18" height="24" rx="3" fill="#ffffff" stroke={resume.accent} strokeWidth="1.5" />
                  <rect x="11" y="10" width="10" height="2.2" rx="1.1" fill={resume.accent} />
                  <rect x="11" y="15" width="10" height="2" rx="1" fill="#c9d3dc" />
                  <rect x="11" y="19" width="7" height="2" rx="1" fill="#c9d3dc" />
                </svg>
              </div>
              <div className="resume-list-body">
                <h4>{resume.name}</h4>
                <p className="resume-list-meta">{resume.template} · {resume.updated}</p>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: `${resume.progress}%`, background: resume.accent }}></div>
                </div>
                <span className="progress-label">{resume.progress}% complete</span>
              </div>
              <button className="btn-secondary-settings resume-continue-btn" onClick={goToTemplates}>
                Continue
              </button>
            </div>
          ))}

          <button className="resume-list-card resume-list-card-new" onClick={goToTemplates}>
            <span className="resume-new-icon">+</span>
            <span>Start a new resume</span>
          </button>
        </div>
      </div>

      <div className="quick-start-card">
        <div className="quick-start-icon">
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 3 C27 8 29 16 27 26 L13 26 C11 16 13 8 20 3 Z" fill="#14213d" />
            <circle cx="20" cy="15" r="3.5" fill="#e9edf2" />
            <path d="M13 26 L9 34 L15 30 Z" fill="#e8a33d" />
            <path d="M27 26 L31 34 L25 30 Z" fill="#e8a33d" />
            <path d="M17 30 L15 37 L20 34 L25 37 L23 30 Z" fill="#0f7d76" />
          </svg>
        </div>
        <div className="quick-start-text">
          <h3>Quick Start Guide</h3>
          <p>
            Head over to the <strong>Templates</strong> tab in your sidebar to pick a
            layout, then fill in your details to build your first resume.
          </p>
        </div>
      </div>
    </div>
  );
}
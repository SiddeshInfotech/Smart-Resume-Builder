import React from "react";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-content">
      <div className="dash-header">
        <h1>Welcome back, Bhavesh</h1>
        <p>Manage your progress, view statistics, and create new resumes.</p>
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
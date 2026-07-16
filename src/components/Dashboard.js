import React from "react";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-content">
      <div className="dash-header">
        <h1>Welcome Back, Bhavesh! 👋</h1>
        <p>Manage your progress, view statistics, and create new resumes.</p>
      </div>

      <div className="dash-stats-grid">
        <div className="dash-stat-card">
          <span className="stat-icon">📄</span>
          <h3>2</h3>
          <p>Active Resumes</p>
        </div>
        <div className="dash-stat-card">
          <span className="stat-icon">📥</span>
          <h3>12</h3>
          <p>Downloads</p>
        </div>
        <div className="dash-stat-card">
          <span className="stat-icon">⚡</span>
          <h3>100%</h3>
          <p>ATS Friendly</p>
        </div>
      </div>

      <div className="form-group-box" style={{ background: '#ffffff', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(20, 33, 61, 0.05)' }}>
        <h3>🚀 Quick Start Guide</h3>
        <p style={{ color: '#5b6472' }}>Navigate to the <strong>Templates</strong> section in your left sidebar menu to pick an interactive layout style and fill out your resume details!</p>
      </div>
    </div>
  );
}
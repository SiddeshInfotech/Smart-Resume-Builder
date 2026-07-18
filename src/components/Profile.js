import React, { useState } from "react";
import "./Profile.css";

export default function Profile({ setActiveTab }) {
  const [profile] = useState({
    name: "Bhavesh A.",
    edition: "Student Edition",
    email: "bhavesh@example.com",
    memberSince: "2026",
  });

  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="profile-page">
      <div className="dash-header">
        <h1>Profile</h1>
        <p>Your account at a glance.</p>
      </div>

      <div className="profile-header-card">
        <div className="profile-avatar-large">{initials}</div>
        <div className="profile-header-text">
          <h2>{profile.name}</h2>
          <span className="profile-edition-badge">{profile.edition}</span>
          <p className="profile-email">{profile.email}</p>
          <p className="profile-member-since">Member since {profile.memberSince}</p>
        </div>
        <button
          className="btn-secondary-settings profile-edit-btn"
          onClick={() => setActiveTab && setActiveTab("settings")}
        >
          Edit Profile
        </button>
      </div>

      <div className="dash-stats-grid profile-stats-grid">
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

      <div className="profile-links-card">
        <h3>Account</h3>
        <button className="profile-link-row" onClick={() => setActiveTab && setActiveTab("settings")}>
          <span>Account details &amp; password</span>
          <span className="profile-link-arrow">→</span>
        </button>
        <button className="profile-link-row" onClick={() => setActiveTab && setActiveTab("settings")}>
          <span>Resume defaults &amp; export format</span>
          <span className="profile-link-arrow">→</span>
        </button>
        <button className="profile-link-row" onClick={() => setActiveTab && setActiveTab("help")}>
          <span>Help &amp; support</span>
          <span className="profile-link-arrow">→</span>
        </button>
      </div>
    </div>
  );
}
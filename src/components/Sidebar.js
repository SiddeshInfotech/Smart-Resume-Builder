import React from 'react';
import './Sidebar.css';

const icons = {
  dashboard: (
    <svg viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="8" height="8" rx="1.5" /><rect x="13" y="3" width="8" height="8" rx="1.5" /><rect x="3" y="13" width="8" height="8" rx="1.5" /><rect x="13" y="13" width="8" height="8" rx="1.5" /></svg>
  ),
  personal: (
    <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M5 20c1.4-4 4-6 7-6s5.6 2 7 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
  ),
  education: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 4 L22 9 L12 14 L2 9 Z" /><path d="M7 11.5v5c0 1.7 2.4 3 5 3s5-1.3 5-3v-5" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>
  ),
  skills: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 L4 14h6l-1 8 9-12h-6z" /></svg>
  ),
  projects: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 6a1 1 0 011-1h5l2 2h9a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1z" /></svg>
  ),
  templates: (
    <svg viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="4" width="18" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" /><rect x="6" y="7.5" width="12" height="2.2" rx="1.1" /><rect x="6" y="12" width="8" height="2.2" rx="1.1" /><rect x="6" y="16.5" width="10" height="2.2" rx="1.1" /></svg>
  ),
  preview: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="3" /></svg>
  ),
  profile: (
    <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="10" r="3" /><path d="M6.5 18c1.3-2.6 3.2-4 5.5-4s4.2 1.4 5.5 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
  ),
  settings: (
    <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="3" /><path d="M19 12a7 7 0 00-.14-1.4l2-1.6-2-3.4-2.4.6a7 7 0 00-2.4-1.4L13.6 2h-3.2l-.4 2.8a7 7 0 00-2.4 1.4l-2.4-.6-2 3.4 2 1.6A7 7 0 005 12c0 .5.05.9.14 1.4l-2 1.6 2 3.4 2.4-.6a7 7 0 002.4 1.4l.4 2.8h3.2l.4-2.8a7 7 0 002.4-1.4l2.4.6 2-3.4-2-1.6c.09-.5.14-.9.14-1.4z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg>
  ),
  help: (
    <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M9.5 9.2c.3-1.6 1.6-2.5 3-2.4 1.5.1 2.6 1.1 2.6 2.4 0 1.5-1.4 1.9-2.3 2.7-.5.5-.7 1-.7 1.7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><circle cx="12" cy="17" r="1" /></svg>
  ),
  about: (
    <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" /><rect x="11" y="10.5" width="2" height="7" rx="1" /><circle cx="12" cy="7.3" r="1.3" /></svg>
  ),
  contact: (
    <svg viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="5.5" width="18" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" /><path d="M3.5 6.5l8.5 6.5 8.5-6.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
};

export default function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'personal', label: 'Personal Info' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'templates', label: 'Templates' },
  ];

  return (
    <aside className="left-sidebar">
      {/* Brand Label Area */}
      <div className="brand-section">
        <span className="brand-icon">
          <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="8" width="13" height="20" rx="2" fill="#0f7d76" transform="rotate(-8 11.5 18)" />
            <rect x="18" y="8" width="13" height="20" rx="2" fill="#0b5f5a" transform="rotate(8 24.5 18)" />
            <rect x="16" y="9" width="4" height="18" fill="#14213d" opacity="0.3" />
            <g transform="rotate(40 18 18)">
              <rect x="16" y="1" width="4" height="10" rx="2" fill="#e8a33d" />
              <rect x="16" y="11" width="4" height="15" rx="2" fill="#14213d" />
              <path d="M16 26 L20 26 L18 31 Z" fill="#e8a33d" />
            </g>
          </svg>
        </span>
        <span className="brand-name">Resume<span className="brand-accent">Pro</span></span>
      </div>

      {/* Middle Tab Menu Action Group */}
      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`menu-btn ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            <span className="btn-icon">{icons[item.id]}</span> {item.label}
          </button>
        ))}

        <div className="menu-divider"></div>

        <button
          className={`menu-btn ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          <span className="btn-icon">{icons.settings}</span> Settings
        </button>
        <button
          className={`menu-btn ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => setActiveTab('about')}
        >
          <span className="btn-icon">{icons.about}</span> About Us
        </button>
        <button
          className={`menu-btn ${activeTab === 'help' ? 'active' : ''}`}
          onClick={() => setActiveTab('help')}
        >
          <span className="btn-icon">{icons.help}</span> Help
        </button>
        <button
          className={`menu-btn ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => setActiveTab('contact')}
        >
          <span className="btn-icon">{icons.contact}</span> Contact Us
        </button>
      </nav>
    </aside>
  );
}
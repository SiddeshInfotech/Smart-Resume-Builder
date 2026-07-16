import React from 'react';
import './Sidebar.css';

export default function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'personal', label: 'Personal Info', icon: '👤' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'projects', label: 'Projects', icon: '📁' },
    { id: 'templates', label: 'Templates', icon: '📋' },
    { id: 'preview', label: 'Preview', icon: '👁️' },
  ];

  return (
    <aside className="left-sidebar">
      {/* Brand Label Area */}
      <div className="brand-section">
        <span className="brand-icon">📄</span>
        <span className="brand-name">ResumePro</span>
      </div>

      {/* Middle Tab Menu Action Group */}
      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`menu-btn ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            <span className="btn-icon">{item.icon}</span> {item.label}
          </button>
        ))}
        
        <div className="menu-divider"></div>
        
        <button className="menu-btn"><span className="btn-icon">👤</span> Profile</button>
        <button 
          className={`menu-btn ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          <span className="btn-icon">⚙️</span> Settings
        </button>
        <button className="menu-btn"><span className="btn-icon">❓</span> Help</button>
      </nav>

      {/* User Session Floating Profile Badge at Bottom */}
      <div className="sidebar-user-card">
        <div className="user-avatar-small">B</div>
        <div className="user-info-text">
          <span className="user-name">Bhavesh A.</span>
          <span className="user-role">Student</span>
        </div>
      </div>
    </aside>
  );
}
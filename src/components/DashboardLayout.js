import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Templates from './Templates'; // Templates grid view
import './DashboardLayout.css';

const SettingsPlaceholder = () => (
  <div className="settings-placeholder">
    <div className="settings-icon">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="3" />
        <path
          d="M19 12a7 7 0 00-.14-1.4l2-1.6-2-3.4-2.4.6a7 7 0 00-2.4-1.4L13.6 2h-3.2l-.4 2.8a7 7 0 00-2.4 1.4l-2.4-.6-2 3.4 2 1.6A7 7 0 005 12c0 .5.05.9.14 1.4l-2 1.6 2 3.4 2.4-.6a7 7 0 002.4 1.4l.4 2.8h3.2l.4-2.8a7 7 0 002.4-1.4l2.4.6 2-3.4-2-1.6c.09-.5.14-.9.14-1.4z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <h2>Settings</h2>
    <p>Your account configurations will live here.</p>
  </div>
);

export default function DashboardLayout() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="hybrid-layout">
      <Navbar />
      <div className="workspace-wrapper">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="content-display-window">
          <div key={activeTab} className="tab-fade">
            {activeTab === 'dashboard' && <Dashboard />}
            {activeTab === 'templates' && <Templates />}
            {activeTab === 'settings' && <SettingsPlaceholder />}
          </div>
        </main>
      </div>
    </div>
  );
}
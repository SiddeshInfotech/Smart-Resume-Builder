import React, { useState } from 'react';
import Navbar from './Navbar'; 
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Templates from './Templates'; // 🚀 Import the new Templates file!
import './DashboardLayout.css';

const SettingsPlaceholder = () => (
  <div style={{ padding: '2rem', background: '#ffffff', borderRadius: '12px', border: '1px solid rgba(20, 33, 61, 0.08)' }}>
    <h2>⚙️ Settings View</h2>
    <p style={{ color: '#5b6472', marginTop: '0.5rem' }}>Your configurations live here.</p>
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
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'templates' && <Templates />} {/* 🚀 Maps grid here! */}
          {activeTab === 'settings' && <SettingsPlaceholder />}
        </main>
      </div>
    </div>
  );
}
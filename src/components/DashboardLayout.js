import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Templates from './Templates';
import Settings from './Settings';
import AboutUs from './AboutUs';
import Help from './Help';
import ContactUs from './ContactUs';
import { ThemeProvider } from './ThemeContext';
import './DashboardLayout.css';

function DashboardLayoutInner() {
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
            {activeTab === 'settings' && <Settings />}
            {activeTab === 'about' && <AboutUs />}
            {activeTab === 'help' && <Help setActiveTab={setActiveTab} />}
            {activeTab === 'contact' && <ContactUs />}
          </div>
        </main>
      </div>
    </div>
  );
}

export default function DashboardLayout() {
  return (
    <ThemeProvider>
      <DashboardLayoutInner />
    </ThemeProvider>
  );
}
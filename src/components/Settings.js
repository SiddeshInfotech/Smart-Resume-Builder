import React, { useState } from "react";
import "./Settings.css";
import { useTheme } from "./ThemeContext";

const ToggleSwitch = ({ checked, onChange, label, description }) => (
  <div className="toggle-row">
    <div className="toggle-text">
      <span className="toggle-label">{label}</span>
      {description && <span className="toggle-desc">{description}</span>}
    </div>
    <button
      type="button"
      className={`toggle-switch ${checked ? "on" : ""}`}
      onClick={() => onChange(!checked)}
      role="switch"
      aria-checked={checked}
      aria-label={label}
    >
      <span className="toggle-knob"></span>
    </button>
  </div>
);

export default function Settings() {
  const { theme, toggleTheme } = useTheme();

  const [account, setAccount] = useState({
    name: "Bhavesh A.",
    email: "bhavesh@example.com",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [defaults, setDefaults] = useState({
    template: "t1",
    exportFormat: "pdf",
  });

  const [notifications, setNotifications] = useState({
    emailUpdates: true,
    productTips: true,
    reminders: false,
  });

  const handleAccountChange = (field, value) =>
    setAccount((prev) => ({ ...prev, [field]: value }));

  const handleSaveAccount = (e) => {
    e.preventDefault();
    if (account.newPassword && account.newPassword !== account.confirmPassword) {
      alert("New password and confirmation do not match.");
      return;
    }
    alert("Account details saved.");
  };

  const handleSaveDefaults = (e) => {
    e.preventDefault();
    alert("Resume defaults saved.");
  };

  const handleExportData = () => {
    alert("Your data export will be emailed to you shortly.");
  };

  const handleDeleteAccount = () => {
    const confirmed = window.confirm(
      "This will permanently delete your account and all saved resumes. Are you sure?"
    );
    if (confirmed) {
      alert("Account deletion requested.");
    }
  };

  return (
    <div className="settings-page">
      <div className="dash-header">
        <h1>Settings</h1>
        <p>Manage your account, defaults, and preferences.</p>
      </div>

      <div className="settings-grid">
        {/* Account Details */}
        <section className="settings-card">
          <h3>Account Details</h3>
          <form onSubmit={handleSaveAccount} className="settings-form">
            <label>Full Name</label>
            <input
              type="text"
              value={account.name}
              onChange={(e) => handleAccountChange("name", e.target.value)}
            />
            <label>Email Address</label>
            <input
              type="email"
              value={account.email}
              onChange={(e) => handleAccountChange("email", e.target.value)}
            />

            <div className="settings-subdivider">Change Password</div>

            <label>Current Password</label>
            <input
              type="password"
              placeholder="Enter current password"
              value={account.currentPassword}
              onChange={(e) => handleAccountChange("currentPassword", e.target.value)}
            />
            <label>New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              value={account.newPassword}
              onChange={(e) => handleAccountChange("newPassword", e.target.value)}
            />
            <label>Confirm New Password</label>
            <input
              type="password"
              placeholder="Re-enter new password"
              value={account.confirmPassword}
              onChange={(e) => handleAccountChange("confirmPassword", e.target.value)}
            />

            <button type="submit" className="btn-save-settings">Save Account Details</button>
          </form>
        </section>

        {/* Resume Defaults */}
        <section className="settings-card">
          <h3>Resume Defaults</h3>
          <form onSubmit={handleSaveDefaults} className="settings-form">
            <label>Default Template</label>
            <select
              value={defaults.template}
              onChange={(e) => setDefaults((p) => ({ ...p, template: e.target.value }))}
            >
              <option value="t1">Modern Minimalist</option>
              <option value="t2">Executive Professional</option>
              <option value="t3">Creative Tech</option>
              <option value="t4">Elegant Serif</option>
              <option value="t5">Compact Single-Page</option>
              <option value="t6">Bold Sidebar</option>
              <option value="t7">Startup Vibrant</option>
              <option value="t8">Academic CV</option>
              <option value="t9">Functional Entry-Level</option>
              <option value="t10">Premium Clean</option>
            </select>

            <label>Default Export Format</label>
            <select
              value={defaults.exportFormat}
              onChange={(e) => setDefaults((p) => ({ ...p, exportFormat: e.target.value }))}
            >
              <option value="pdf">PDF</option>
              <option value="docx">DOCX</option>
              <option value="txt">Plain Text</option>
            </select>

            <button type="submit" className="btn-save-settings">Save Defaults</button>
          </form>
        </section>

        {/* Appearance */}
        <section className="settings-card">
          <h3>Appearance</h3>
          <ToggleSwitch
            checked={theme === "dark"}
            onChange={toggleTheme}
            label="Dark Mode"
            description="Switch the dashboard between light and dark backgrounds."
          />
        </section>

        {/* Notifications */}
        <section className="settings-card">
          <h3>Notifications</h3>
          <ToggleSwitch
            checked={notifications.emailUpdates}
            onChange={(v) => setNotifications((p) => ({ ...p, emailUpdates: v }))}
            label="Email Updates"
            description="Get notified about account and resume activity."
          />
          <ToggleSwitch
            checked={notifications.productTips}
            onChange={(v) => setNotifications((p) => ({ ...p, productTips: v }))}
            label="Product Tips"
            description="Occasional tips on writing a stronger resume."
          />
          <ToggleSwitch
            checked={notifications.reminders}
            onChange={(v) => setNotifications((p) => ({ ...p, reminders: v }))}
            label="Completion Reminders"
            description="Remind me to finish an unfinished resume."
          />
        </section>

        {/* Privacy & Data */}
        <section className="settings-card danger-card">
          <h3>Privacy &amp; Data</h3>
          <div className="privacy-row">
            <div className="toggle-text">
              <span className="toggle-label">Export Your Data</span>
              <span className="toggle-desc">Download a copy of everything saved in your account.</span>
            </div>
            <button className="btn-secondary-settings" onClick={handleExportData}>Export</button>
          </div>

          <div className="settings-subdivider danger-subdivider">Danger Zone</div>
          <div className="privacy-row">
            <div className="toggle-text">
              <span className="toggle-label">Delete Account</span>
              <span className="toggle-desc">Permanently remove your account and all saved resumes.</span>
            </div>
            <button className="btn-danger-settings" onClick={handleDeleteAccount}>Delete</button>
          </div>
        </section>
      </div>
    </div>
  );
}
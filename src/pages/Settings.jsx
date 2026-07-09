import React from "react";
import "./Settings.css";

function Settings() {
  return (
    <div className="settings">

      <div className="sidebar">
        <h2>Settings</h2>

        <ul>
          <li>👤 Profile</li>
          <li>📧 Account</li>
          <li>🔔 Notifications</li>
          <li>🎨 Appearance</li>
          <li>🔒 Privacy</li>
          <li>🛡 Security</li>
        </ul>
      </div>

      <div className="profile">

        <h1>Profile Settings</h1>

        <input
          type="text"
          placeholder="Full Name"
        />

        <input
          type="email"
          placeholder="Email Address"
        />

        <input
          type="text"
          placeholder="Phone Number"
        />

        <textarea
          rows="5"
          placeholder="Write Your Bio"
        ></textarea>

        <button>Save Changes</button>

      </div>

    </div>
  );
}

export default Settings;
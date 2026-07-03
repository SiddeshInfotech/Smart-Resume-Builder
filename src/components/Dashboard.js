import React from "react";

function Dashboard() {
  return (
    <div className="container">
      <div className="card">
        <h2>Dashboard</h2>
        <p>Welcome to your Smart Resume Builder!</p>
        <p>Here you’ll be able to:</p>
        <ul style={{ textAlign: "left" }}>
          <li>Create a new resume</li>
          <li>Edit existing resumes</li>
          <li>Download resumes as PDF</li>
          <li>Preview your resume before saving</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;

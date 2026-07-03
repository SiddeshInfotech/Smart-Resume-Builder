import React from "react";
import { Link } from "react-router-dom";   // ✅ import Link

function LandingPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Smart Resume Builder</h1>
      <p>Create your professional resume in minutes!</p>
      <Link to="/login">   {/* ✅ wrap button in Link */}
        <button style={{ padding: "10px 20px", fontSize: "16px" }}>
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default LandingPage;

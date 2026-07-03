import React from "react";

function Register() {
  return (
    <div className="container">   {/* ✅ centers content */}
      <div className="card">      {/* ✅ applies polished card styles */}
        <h2>Register</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;

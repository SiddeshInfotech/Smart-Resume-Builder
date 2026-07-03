import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ background: "#333", padding: "10px" }}>
      <Link to="/" style={{ color: "white", margin: "0 15px", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/login" style={{ color: "white", margin: "0 15px", textDecoration: "none" }}>
        Login
      </Link>
      <Link to="/register" style={{ color: "white", margin: "0 15px", textDecoration: "none" }}>
        Register
      </Link>
      <Link to="/forgot-password" style={{ color: "white", margin: "0 15px", textDecoration: "none" }}>
        Forgot Password
      </Link>
    </nav>
  );
}

export default Navbar;

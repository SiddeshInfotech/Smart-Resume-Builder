import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import "../App.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <span className="nav-logo-badge">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 3h9l4 4v14a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z" fill="#fff" />
            <path d="M15 3v4h4" fill="none" stroke="#14213d" strokeWidth="1.4" strokeLinejoin="round" />
            <path d="M8.5 13.5l2 2 4.5-5" stroke="#0f7d76" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="nav-logo-text">
          Resume<span className="nav-logo-accent">Pro</span>
        </span>
      </Link>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" className={isActive("/") ? "active" : ""} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/login" className={isActive("/login") ? "active" : ""} onClick={() => setMenuOpen(false)}>
            Login
          </Link>
        </li>
        <li>
          <Link to="/register" className={isActive("/register") ? "active" : ""} onClick={() => setMenuOpen(false)}>
            Register
          </Link>
        </li>
        <li>
          <Link
            to="/forgot-password"
            className={isActive("/forgot-password") ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Forgot Password
          </Link>
        </li>
      </ul>

      <button
        className={`nav-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;
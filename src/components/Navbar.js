import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import "../App.css";
import { useTheme } from "./ThemeContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <span className="nav-logo-badge">
          <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="8" width="13" height="20" rx="2" fill="#0f7d76" transform="rotate(-8 11.5 18)" />
            <rect x="18" y="8" width="13" height="20" rx="2" fill="#0b5f5a" transform="rotate(8 24.5 18)" />
            <rect x="16" y="9" width="4" height="18" fill="#14213d" opacity="0.15" />
            <g transform="rotate(40 18 18)">
              <rect x="16" y="1" width="4" height="10" rx="2" fill="#e8a33d" />
              <rect x="16" y="11" width="4" height="15" rx="2" fill="#14213d" />
              <path d="M16 26 L20 26 L18 31 Z" fill="#e8a33d" />
            </g>
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
        <li>
          <Link to="/dashboard" className={isActive("/dashboard") ? "active" : ""} onClick={() => setMenuOpen(false)}>
            Dashboard
          </Link>
        </li>
      </ul>

      <div className="nav-right-group">
        <button
          className="theme-toggle-btn"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v3M12 20v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1 12h3M20 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 14.5a8.5 8.5 0 01-11-11 8.5 8.5 0 1011 11z" />
            </svg>
          )}
        </button>

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
      </div>
    </nav>
  );
};

export default Navbar;
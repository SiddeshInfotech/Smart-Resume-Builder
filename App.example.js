// Example — adapt to your actual App.js structure.
// The key change: wrap everything in <ThemeProvider>, exactly once,
// above your Router/Routes so every page (public and dashboard) shares
// the same theme state.

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeContext";

import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import Navbar from "./components/Navbar";
import DashboardLayout from "./components/DashboardLayout";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<><Navbar /><LandingPage /></>} />
          <Route path="/login" element={<><Navbar /><Login /></>} />
          <Route path="/register" element={<><Navbar /><Register /></>} />
          <Route path="/forgot-password" element={<><Navbar /><ForgotPassword /></>} />
          <Route path="/dashboard" element={<DashboardLayout />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
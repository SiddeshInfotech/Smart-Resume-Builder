import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import DashboardLayout from "./components/DashboardLayout";
import { ThemeProvider } from "./components/ThemeContext"; // 🚀 Powers the light/dark toggle everywhere

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Public Pages (They get the standard Top Navbar automatically or handle it inside their views) */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <LandingPage />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Navbar />
                <Login />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Navbar />
                <Register />
              </>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <>
                <Navbar />
                <ForgotPassword />
              </>
            }
          />

          {/* 🔐 App Workspace Pages (DashboardLayout handles its own nested Navbar and Sidebar!) */}
          <Route path="/dashboard" element={<DashboardLayout />} />
          <Route path="/template" element={<DashboardLayout />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
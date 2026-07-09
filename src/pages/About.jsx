import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">

      <div className="about-container">

        <div className="about-left">
          <h1>About Us</h1>

          <div className="line"></div>

          <p>
            Smart Resume Builder for Students helps students create
            professional and ATS-friendly resumes in just a few minutes.
          </p>

          <p>
            Our mission is to make resume building simple, fast and effective
            with modern templates and easy editing tools.
          </p>
        </div>

        <div className="about-right">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600"
            alt="Resume"
          />
        </div>

      </div>

      <div className="cards">

        <div className="card">
          <h2>50K+</h2>
          <p>Users</p>
        </div>

        <div className="card">
          <h2>100K+</h2>
          <p>Resumes Created</p>
        </div>

        <div className="card">
          <h2>75K+</h2>
          <p>Downloads</p>
        </div>

        <div className="card">
          <h2>4.8/5</h2>
          <p>User Rating</p>
        </div>

      </div>

    </div>
  );
}

export default About;
import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">

      <div className="contact-info">
        <h1>Contact Us</h1>
        <div className="line"></div>

        <p>
          We'd love to hear from you. Reach out for any
          questions, feedback or support.
        </p>

        <div className="info-box">
          <h3>Email</h3>
          <p>support@smartresumebuilder.com</p>
        </div>

        <div className="info-box">
          <h3>Phone</h3>
          <p>+91 98765 43210</p>
        </div>

        <div className="info-box">
          <h3>Address</h3>
          <p>Pune, Maharashtra, India</p>
        </div>
      </div>

      <div className="contact-form">

        <h2>Send us a Message</h2>

        <input type="text" placeholder="Your Name" />

        <input type="email" placeholder="Your Email" />

        <input type="text" placeholder="Subject" />

        <textarea
          rows="6"
          placeholder="Your Message"
        ></textarea>

        <button>Send Message</button>

      </div>

    </div>
  );
}

export default Contact;
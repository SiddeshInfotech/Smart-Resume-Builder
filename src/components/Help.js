import React, { useState } from "react";
import "./Help.css";

const faqs = [
  {
    q: "Is ResumePro free to use?",
    a: "Yes. Every template, the AI writing assistant, and PDF export are free for students.",
  },
  {
    q: "Can I switch templates after I've filled in my details?",
    a: "Yes — your information is saved once, and you can preview it in any of the 10 templates without retyping anything.",
  },
  {
    q: "Is my resume data saved automatically?",
    a: "Your details are kept in your account so you can come back and keep editing anytime.",
  },
  {
    q: "What formats can I export to?",
    a: "PDF, DOCX, and plain text — set your preferred default under Settings → Resume Defaults.",
  },
  {
    q: "Will my resume pass ATS screening?",
    a: "All templates are built to parse cleanly through applicant tracking systems, avoiding tables and graphics that commonly break parsing.",
  },
];

export default function Help({ setActiveTab }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="help-page">
      <div className="dash-header">
        <h1>Help &amp; Support</h1>
        <p>Everything you need to get the most out of ResumePro.</p>
      </div>

      <div className="help-steps">
        <div className="help-step">
          <div className="help-step-icon">
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="4" width="24" height="32" rx="3" fill="#e9edf2" />
              <rect x="13" y="11" width="14" height="3" rx="1.5" fill="#0f7d76" />
              <rect x="13" y="18" width="10" height="3" rx="1.5" fill="#c9d3dc" />
              <rect x="13" y="25" width="12" height="3" rx="1.5" fill="#c9d3dc" />
            </svg>
          </div>
          <span className="help-step-number">01</span>
          <h3>Add your details</h3>
          <p>Head to Personal Info, Education, Skills, and Projects in the sidebar and fill in what you have.</p>
        </div>
        <div className="help-step">
          <div className="help-step-icon">
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4 L24 15 L36 15 L26 22 L30 34 L20 26 L10 34 L14 22 L4 15 L16 15 Z" fill="#0f7d76" />
              <circle cx="20" cy="20" r="4" fill="#e8a33d" />
            </svg>
          </div>
          <span className="help-step-number">02</span>
          <h3>Pick a template</h3>
          <p>Browse the Templates tab and choose one of 10 styles — your details carry over automatically.</p>
        </div>
        <div className="help-step">
          <div className="help-step-icon">
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 3 C27 8 29 16 27 26 L13 26 C11 16 13 8 20 3 Z" fill="#14213d" />
              <circle cx="20" cy="15" r="3.5" fill="#e9edf2" />
              <path d="M13 26 L9 34 L15 30 Z" fill="#e8a33d" />
              <path d="M27 26 L31 34 L25 30 Z" fill="#e8a33d" />
              <path d="M17 30 L15 37 L20 34 L25 37 L23 30 Z" fill="#0f7d76" />
            </svg>
          </div>
          <span className="help-step-number">03</span>
          <h3>Export & apply</h3>
          <p>Use Print / Save PDF in the editor, or change your default export format under Settings.</p>
        </div>
      </div>

      <div className="help-faq">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((item, index) => (
          <div className="faq-item" key={item.q}>
            <button
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              aria-expanded={openIndex === index}
            >
              {item.q}
              <span className={`faq-chevron ${openIndex === index ? "open" : ""}`}>
                <svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </button>
            {openIndex === index && <p className="faq-answer">{item.a}</p>}
          </div>
        ))}
      </div>

      <div className="help-contact-callout">
        <div>
          <h3>Still stuck?</h3>
          <p>If this didn't answer your question, reach out and we'll help you sort it out.</p>
        </div>
        <button className="btn-primary help-contact-btn" onClick={() => setActiveTab && setActiveTab("contact")}>
          Contact Us
        </button>
      </div>
    </div>
  );
}
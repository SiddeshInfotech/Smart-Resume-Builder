import React, { useState } from "react";
import "./Dashboard.css";

const thumbnails = {
  t1: (
    <svg viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="150" fill="#fff" />
      <rect x="35" y="22" width="50" height="7" rx="3" fill="#14213d" />
      <rect x="30" y="34" width="60" height="2" fill="#0f7d76" />
      <rect x="20" y="52" width="80" height="3" fill="#e9edf2" />
      <rect x="20" y="59" width="80" height="3" fill="#e9edf2" />
      <rect x="20" y="72" width="26" height="3" fill="#c9d3dc" />
      <rect x="20" y="80" width="70" height="3" fill="#e9edf2" />
      <rect x="20" y="87" width="70" height="3" fill="#e9edf2" />
    </svg>
  ),
  t2: (
    <svg viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="150" fill="#fff" />
      <rect x="0" y="0" width="120" height="32" fill="#14213d" />
      <rect x="18" y="11" width="46" height="6" rx="2" fill="#fff" />
      <rect x="18" y="21" width="66" height="2" fill="rgba(255,255,255,0.55)" />
      <rect x="18" y="46" width="28" height="3" fill="#1e3a8a" />
      <rect x="18" y="53" width="84" height="1.5" fill="#1e3a8a" opacity="0.3" />
      <rect x="18" y="62" width="80" height="3" fill="#e9edf2" />
      <rect x="18" y="69" width="80" height="3" fill="#e9edf2" />
      <rect x="18" y="82" width="28" height="3" fill="#1e3a8a" />
      <rect x="18" y="89" width="80" height="1.5" fill="#1e3a8a" opacity="0.3" />
    </svg>
  ),
  t3: (
    <svg viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="150" fill="#fff" />
      <rect x="0" y="0" width="9" height="150" fill="#0f7d76" />
      <rect x="24" y="20" width="44" height="6" rx="2" fill="#14213d" />
      <rect x="24" y="31" width="30" height="2.5" fill="#0f7d76" />
      <rect x="24" y="50" width="18" height="3" fill="#0f7d76" />
      <rect x="24" y="57" width="72" height="2.5" fill="#e9edf2" />
      <rect x="24" y="63" width="72" height="2.5" fill="#e9edf2" />
      <rect x="24" y="76" width="18" height="3" fill="#0f7d76" />
      <rect x="24" y="83" width="60" height="2.5" fill="#e9edf2" />
    </svg>
  ),
  t4: (
    <svg viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="150" fill="#fdfaf3" />
      <rect x="33" y="22" width="54" height="6" rx="2" fill="#14213d" transform="skewX(-10)" />
      <rect x="28" y="35" width="64" height="1.5" fill="#c9932f" />
      <rect x="22" y="52" width="76" height="2.2" fill="#ded4bd" />
      <rect x="22" y="59" width="76" height="2.2" fill="#ded4bd" />
      <rect x="22" y="72" width="24" height="2.2" fill="#8a7a55" />
      <rect x="22" y="79" width="68" height="2.2" fill="#ded4bd" />
      <rect x="22" y="86" width="68" height="2.2" fill="#ded4bd" />
    </svg>
  ),
  t5: (
    <svg viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="150" fill="#fff" />
      <rect x="16" y="14" width="42" height="5" rx="2" fill="#14213d" />
      <rect x="16" y="22" width="60" height="1.5" fill="#0f7d76" />
      <rect x="16" y="34" width="18" height="2" fill="#7a869a" />
      <rect x="16" y="39" width="88" height="2" fill="#e9edf2" />
      <rect x="16" y="44" width="88" height="2" fill="#e9edf2" />
      <rect x="16" y="53" width="18" height="2" fill="#7a869a" />
      <rect x="16" y="58" width="88" height="2" fill="#e9edf2" />
      <rect x="16" y="63" width="88" height="2" fill="#e9edf2" />
      <rect x="16" y="72" width="18" height="2" fill="#7a869a" />
      <rect x="16" y="77" width="88" height="2" fill="#e9edf2" />
      <rect x="16" y="86" width="18" height="2" fill="#7a869a" />
      <rect x="16" y="91" width="88" height="2" fill="#e9edf2" />
    </svg>
  ),
  t6: (
    <svg viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="150" fill="#fff" />
      <rect x="0" y="0" width="34" height="150" fill="#14213d" />
      <rect x="9" y="20" width="18" height="5" rx="2" fill="#e8a33d" />
      <rect x="9" y="32" width="18" height="2" fill="rgba(255,255,255,0.4)" />
      <rect x="9" y="50" width="18" height="2" fill="rgba(255,255,255,0.4)" />
      <rect x="9" y="58" width="14" height="2" fill="rgba(255,255,255,0.4)" />
      <rect x="46" y="20" width="50" height="6" rx="2" fill="#14213d" />
      <rect x="46" y="34" width="60" height="2.5" fill="#e9edf2" />
      <rect x="46" y="41" width="60" height="2.5" fill="#e9edf2" />
      <rect x="46" y="55" width="20" height="3" fill="#0f7d76" />
      <rect x="46" y="62" width="50" height="2.5" fill="#e9edf2" />
    </svg>
  ),
  t7: (
    <svg viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="150" fill="#fff" />
      <polygon points="70,0 120,0 120,45" fill="#0f7d76" opacity="0.18" />
      <rect x="18" y="18" width="46" height="6" rx="2" fill="#14213d" />
      <rect x="18" y="31" width="34" height="8" rx="4" fill="#0f7d76" />
      <rect x="18" y="52" width="80" height="2.5" fill="#e9edf2" />
      <rect x="18" y="59" width="80" height="2.5" fill="#e9edf2" />
      <rect x="18" y="72" width="24" height="8" rx="4" fill="#e8a33d" opacity="0.85" />
      <rect x="48" y="72" width="24" height="8" rx="4" fill="#0f7d76" opacity="0.85" />
    </svg>
  ),
  t8: (
    <svg viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="150" fill="#fff" />
      <rect x="30" y="16" width="60" height="5" rx="1" fill="#14213d" />
      <rect x="20" y="26" width="80" height="1.2" fill="#4a5568" />
      <rect x="16" y="40" width="16" height="2" fill="#4a5568" />
      <rect x="16" y="49" width="88" height="1.8" fill="#e9edf2" />
      <rect x="16" y="54" width="88" height="1.8" fill="#e9edf2" />
      <rect x="16" y="59" width="88" height="1.8" fill="#e9edf2" />
      <rect x="16" y="70" width="16" height="2" fill="#4a5568" />
      <rect x="16" y="79" width="88" height="1.8" fill="#e9edf2" />
      <rect x="16" y="84" width="88" height="1.8" fill="#e9edf2" />
      <rect x="16" y="89" width="88" height="1.8" fill="#e9edf2" />
    </svg>
  ),
  t9: (
    <svg viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="150" fill="#fff" />
      <rect x="18" y="18" width="48" height="6" rx="2" fill="#14213d" />
      <rect x="18" y="30" width="60" height="2" fill="#7a869a" />
      <rect x="18" y="46" width="30" height="3" fill="#e8a33d" />
      <rect x="18" y="53" width="84" height="10" rx="4" fill="#fceccb" />
      <rect x="18" y="70" width="30" height="3" fill="#e8a33d" />
      <rect x="18" y="77" width="84" height="10" rx="4" fill="#fceccb" />
      <rect x="18" y="95" width="24" height="2.5" fill="#c9d3dc" />
      <rect x="18" y="101" width="60" height="2.5" fill="#e9edf2" />
    </svg>
  ),
  t10: (
    <svg viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="150" fill="#fff" />
      <rect x="30" y="26" width="60" height="6" rx="2" fill="#14213d" />
      <rect x="45" y="38" width="30" height="1.2" fill="#e8a33d" />
      <rect x="30" y="56" width="15" height="2" fill="#7a869a" />
      <rect x="30" y="62" width="60" height="1.5" fill="#e9edf2" />
      <rect x="30" y="67" width="60" height="1.5" fill="#e9edf2" />
      <rect x="30" y="80" width="15" height="2" fill="#7a869a" />
      <rect x="30" y="86" width="60" height="1.5" fill="#e9edf2" />
      <rect x="30" y="91" width="60" height="1.5" fill="#e9edf2" />
    </svg>
  ),
};

export default function Templates() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [activeFormTab, setActiveFormTab] = useState("personalInfo");

  const templatesList = [
    { id: "t1", name: "Modern Minimalist", desc: "Clean, spacious layout with elegant typography." },
    { id: "t2", name: "Executive Professional", desc: "Traditional dark blue accents for corporate roles." },
    { id: "t3", name: "Creative Tech", desc: "Sleek, side-column design optimized for developers." },
    { id: "t4", name: "Elegant Serif", desc: "Classic academic look using premium serif fonts." },
    { id: "t5", name: "Compact Single-Page", desc: "Tight grid structure to fit everything onto one page." },
    { id: "t6", name: "Bold Sidebar", desc: "Left-aligned background bar highlighting core skills." },
    { id: "t7", name: "Startup Vibrant", desc: "Modern teal geometric highlights for creative agencies." },
    { id: "t8", name: "Academic CV", desc: "Multi-page design built for extensive publication records." },
    { id: "t9", name: "Functional Entry-Level", desc: "Shifts focus toward skills and projects over experience." },
    { id: "t10", name: "Premium Clean", desc: "High-end corporate layout with delicate line spacing." }
  ];

  const [resumeData, setResumeData] = useState({
    personalInfo: { fullName: "Bhavesh A.", email: "bhavesh@example.com", phone: "+91 98765 43210", location: "Nagpur, India", website: "github.com/bhavesh" },
    summary: "Motivated student developer specializing in frontend interfaces.",
    experience: "Frontend Intern at Tech Corp (2025 - Present)\n- Built interactive UI dashboards.",
    education: "B.E. in Computer Science (Graduating 2027)",
    projects: "Smart Resume Builder\n- Developed a React web app with zero backend requirements.",
    skills: "React, JavaScript, CSS3, HTML5, Git",
    internships: "", achievements: "", certifications: "", languages: "",
    volunteerWork: "", publications: "", awards: "", interests: "", references: "",
    customSections: []
  });

  const handleInputChange = (section, field, value) => {
    if (field) {
      setResumeData(prev => ({ ...prev, [section]: { ...prev[section], [field]: value } }));
    } else {
      setResumeData(prev => ({ ...prev, [section]: value }));
    }
  };

  const addCustomSection = () => {
    const title = prompt("Enter Custom Section Title:");
    if (!title) return;
    setResumeData(prev => ({
      ...prev,
      customSections: [...prev.customSections, { id: Date.now(), title, content: "" }]
    }));
  };

  const handleCustomSectionChange = (id, value) => {
    setResumeData(prev => ({
      ...prev,
      customSections: prev.customSections.map(sec => sec.id === id ? { ...sec, content: value } : sec)
    }));
  };

  if (selectedTemplate) {
    return (
      <div className="editor-workspace animate-fade">
        <div className="editor-header">
          <div>
            <button className="btn-back" onClick={() => setSelectedTemplate(null)}>← Back to Templates</button>
            <h2>Editing Style: <span className="text-teal">{selectedTemplate.name}</span></h2>
          </div>
          <button className="btn-save" onClick={() => window.print()}>Print / Save PDF</button>
        </div>

        {/* 3-Column Split Framework: Tabs Navigation | Input Forms | Live Preview Sheet */}
        <div className="split-workspace-layout">

          {/* Tab Selection Navigation Bar */}
          <aside className="editor-tabs-sidebar">
            {["personalInfo", "summary", "experience", "education", "projects", "skills", "internships", "achievements", "certifications", "languages", "volunteerWork", "publications", "awards", "interests", "references"].map(tab => (
              <button key={tab} className={activeFormTab === tab ? "active" : ""} onClick={() => setActiveFormTab(tab)}>
                {tab === "personalInfo" ? "Personal Info" : tab.charAt(0).toUpperCase() + tab.slice(1).replace(/([A-Z])/g, ' $1')}
              </button>
            ))}
            {resumeData.customSections.map(sec => (
              <button key={sec.id} className={activeFormTab === sec.id ? "active custom-tab-btn" : "custom-tab-btn"} onClick={() => setActiveFormTab(sec.id)}>
                ✨ {sec.title}
              </button>
            ))}
            <div className="menu-divider"></div>
            <button className="btn-add-custom" onClick={addCustomSection}>Custom Section (+)</button>
          </aside>

          {/* Core Data Input Box Fields Column */}
          <div className="editor-form-window">
            {activeFormTab === "personalInfo" && (
              <div className="form-group-box">
                <h3>Personal Information</h3>
                <label>Full Name</label>
                <input type="text" value={resumeData.personalInfo.fullName} onChange={(e) => handleInputChange("personalInfo", "fullName", e.target.value)} />
                <label>Email Address</label>
                <input type="email" value={resumeData.personalInfo.email} onChange={(e) => handleInputChange("personalInfo", "email", e.target.value)} />
                <label>Phone Number</label>
                <input type="text" value={resumeData.personalInfo.phone} onChange={(e) => handleInputChange("personalInfo", "phone", e.target.value)} />
                <label>Location</label>
                <input type="text" value={resumeData.personalInfo.location} onChange={(e) => handleInputChange("personalInfo", "location", e.target.value)} />
                <label>Website / Link</label>
                <input type="text" value={resumeData.personalInfo.website} onChange={(e) => handleInputChange("personalInfo", "website", e.target.value)} />
              </div>
            )}

            {["summary", "experience", "education", "projects", "skills", "internships", "achievements", "certifications", "languages", "volunteerWork", "publications", "awards", "interests", "references"].map(section => (
              activeFormTab === section && (
                <div className="form-group-box" key={section}>
                  <h3 style={{ textTransform: "capitalize" }}>{section.replace(/([A-Z])/g, ' $1')}</h3>
                  <textarea rows="10" value={resumeData[section]} onChange={(e) => handleInputChange(section, null, e.target.value)} placeholder={`Type your ${section} records...`} />
                </div>
              )
            ))}

            {resumeData.customSections.map(sec => (
              activeFormTab === sec.id && (
                <div className="form-group-box" key={sec.id}>
                  <h3>{sec.title}</h3>
                  <textarea rows="10" value={sec.content} onChange={(e) => handleCustomSectionChange(sec.id, e.target.value)} />
                </div>
              )
            ))}
          </div>

          {/* THE LIVE PREVIEW CANVAS SHEET (Pure Frontend Reactive Mapping!) */}
          <div className="live-preview-window">
            <div className={`resume-paper-canvas template-${selectedTemplate.id}`}>
              <div className="resume-preview-header">
                <h2>{resumeData.personalInfo.fullName || "Your Name"}</h2>
                <p className="resume-preview-contacts">
                  {resumeData.personalInfo.email && <span>{resumeData.personalInfo.email}</span>}
                  {resumeData.personalInfo.phone && <span>{resumeData.personalInfo.phone}</span>}
                  {resumeData.personalInfo.location && <span>{resumeData.personalInfo.location}</span>}
                  {resumeData.personalInfo.website && <span>{resumeData.personalInfo.website}</span>}
                </p>
              </div>

              <div className="resume-preview-body">
                {resumeData.summary && <div className="preview-segment"><h4>Professional Summary</h4><p>{resumeData.summary}</p></div>}
                {resumeData.experience && <div className="preview-segment"><h4>Work Experience</h4><p style={{ whiteSpace: "pre-line" }}>{resumeData.experience}</p></div>}
                {resumeData.education && <div className="preview-segment"><h4>Education</h4><p style={{ whiteSpace: "pre-line" }}>{resumeData.education}</p></div>}
                {resumeData.projects && <div className="preview-segment"><h4>Key Projects</h4><p style={{ whiteSpace: "pre-line" }}>{resumeData.projects}</p></div>}
                {resumeData.skills && <div className="preview-segment"><h4>Core Skills</h4><p>{resumeData.skills}</p></div>}
                {resumeData.internships && <div className="preview-segment"><h4>Internships</h4><p style={{ whiteSpace: "pre-line" }}>{resumeData.internships}</p></div>}
                {resumeData.achievements && <div className="preview-segment"><h4>Achievements</h4><p style={{ whiteSpace: "pre-line" }}>{resumeData.achievements}</p></div>}
                {resumeData.certifications && <div className="preview-segment"><h4>Certifications</h4><p style={{ whiteSpace: "pre-line" }}>{resumeData.certifications}</p></div>}

                {resumeData.customSections.map(sec => (
                  sec.content && (
                    <div className="preview-segment" key={sec.id}>
                      <h4>{sec.title}</h4>
                      <p style={{ whiteSpace: "pre-line" }}>{sec.content}</p>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-content">
      <div className="dash-header">
        <h1>Select a Template Style</h1>
        <p>Pick one of the 10 professional layouts to start live front-end editing.</p>
      </div>
      <div className="templates-showcase-grid">
        {templatesList.map((template, index) => (
          <div className="template-select-card" key={template.id} onClick={() => setSelectedTemplate(template)}>
            <div className="template-mock-thumb">
              <span className="badge-number">#{index + 1}</span>
              <div className="template-thumb-svg">{thumbnails[template.id]}</div>
            </div>
            <div className="template-card-meta">
              <h4>{template.name}</h4>
              <p>{template.desc}</p>
              <span className="action-badge-hint">Click to Edit →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
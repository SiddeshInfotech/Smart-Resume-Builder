import React, { useState } from "react";
import "./Dashboard.css";

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

          {/* 🖼️ THE LIVE PREVIEW CANVAS SHEET (Pure Frontend Reactive Mapping!) */}
          <div className="live-preview-window">
            <div className={`resume-paper-canvas template-${selectedTemplate.id}`}>
              <div className="resume-preview-header">
                <h2>{resumeData.personalInfo.fullName || "Your Name"}</h2>
                <p className="resume-preview-contacts">
                  {resumeData.personalInfo.email && <span>📧 {resumeData.personalInfo.email}</span>}
                  {resumeData.personalInfo.phone && <span>📞 {resumeData.personalInfo.phone}</span>}
                  {resumeData.personalInfo.location && <span>📍 {resumeData.personalInfo.location}</span>}
                  {resumeData.personalInfo.website && <span>🔗 {resumeData.personalInfo.website}</span>}
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
        <h1>Select a Template Style 🎨</h1>
        <p>Pick one of the 10 professional layouts to start live front-end editing.</p>
      </div>
      <div className="templates-showcase-grid">
        {templatesList.map((template, index) => (
          <div className="template-select-card" key={template.id} onClick={() => setSelectedTemplate(template)}>
            <div className="template-mock-thumb">
              <span className="badge-number">#{index + 1}</span>
              <span className="doc-glyph">📄</span>
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
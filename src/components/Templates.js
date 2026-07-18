import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Dashboard.css";

/* ============================================================= */
/* Field configs for every repeatable ("add another entry")       */
/* section. Each entry gets these fields rendered as a form card. */
/* ============================================================= */
const SECTION_FIELDS = {
  experience: {
    label: "Experience",
    entryLabel: "Position",
    fields: [
      { key: "role", label: "Job Title", type: "text", placeholder: "Frontend Intern", width: "half" },
      { key: "company", label: "Company", type: "text", placeholder: "Tech Corp", width: "half" },
      { key: "location", label: "Location", type: "text", placeholder: "Nagpur, India", width: "half" },
      { key: "startDate", label: "Start Date", type: "month", width: "quarter" },
      { key: "endDate", label: "End Date", type: "month", width: "quarter" },
      { key: "current", label: "I currently work here", type: "checkbox" },
      { key: "description", label: "Description", type: "textarea", placeholder: "Describe your responsibilities and achievements..." },
    ],
  },
  education: {
    label: "Education",
    entryLabel: "School",
    fields: [
      { key: "school", label: "School Name", type: "text", placeholder: "UCLA", width: "half" },
      { key: "location", label: "Location", type: "text", placeholder: "New York", width: "half" },
      { key: "degree", label: "Degree", type: "text", placeholder: "BA in Computer Science", width: "half" },
      { key: "startDate", label: "Start Date", type: "month", width: "quarter" },
      { key: "endDate", label: "End Date", type: "month", width: "quarter" },
      { key: "current", label: "I'm still enrolled", type: "checkbox" },
      { key: "description", label: "Description", type: "textarea", placeholder: "e.g., Graduated with honors, Dean's List (2022)" },
    ],
  },
  projects: {
    label: "Projects",
    entryLabel: "Project",
    fields: [
      { key: "name", label: "Project Name", type: "text", placeholder: "Smart Resume Builder", width: "half" },
      { key: "techStack", label: "Tech Stack", type: "text", placeholder: "React, Node.js, MongoDB", width: "half" },
      { key: "link", label: "Project Link", type: "text", placeholder: "github.com/you/project", width: "half" },
      { key: "startDate", label: "Start Date", type: "month", width: "quarter" },
      { key: "endDate", label: "End Date", type: "month", width: "quarter" },
      { key: "description", label: "Description", type: "textarea", placeholder: "What did you build and what did you use?" },
    ],
  },
  internships: {
    label: "Internships",
    entryLabel: "Internship",
    fields: [
      { key: "role", label: "Role", type: "text", placeholder: "Frontend Intern", width: "half" },
      { key: "company", label: "Company", type: "text", placeholder: "Tech Corp", width: "half" },
      { key: "location", label: "Location", type: "text", placeholder: "Remote", width: "half" },
      { key: "startDate", label: "Start Date", type: "month", width: "quarter" },
      { key: "endDate", label: "End Date", type: "month", width: "quarter" },
      { key: "description", label: "Description", type: "textarea", placeholder: "What did you work on?" },
    ],
  },
  achievements: {
    label: "Achievements",
    entryLabel: "Achievement",
    fields: [
      { key: "title", label: "Title", type: "text", placeholder: "1st Place, Inter-College Hackathon", width: "half" },
      { key: "date", label: "Date", type: "month", width: "half" },
      { key: "description", label: "Description", type: "textarea", placeholder: "Briefly describe the achievement" },
    ],
  },
  certifications: {
    label: "Certifications",
    entryLabel: "Certification",
    fields: [
      { key: "name", label: "Certification Name", type: "text", placeholder: "AWS Cloud Practitioner", width: "half" },
      { key: "issuer", label: "Issuing Organization", type: "text", placeholder: "Amazon Web Services", width: "half" },
      { key: "date", label: "Date Earned", type: "month", width: "half" },
      { key: "link", label: "Credential Link", type: "text", placeholder: "credential URL (optional)", width: "half" },
    ],
  },
  volunteerWork: {
    label: "Volunteer Work",
    entryLabel: "Volunteer Role",
    fields: [
      { key: "organization", label: "Organization", type: "text", placeholder: "Red Cross Youth Chapter", width: "half" },
      { key: "role", label: "Role", type: "text", placeholder: "Event Coordinator", width: "half" },
      { key: "startDate", label: "Start Date", type: "month", width: "quarter" },
      { key: "endDate", label: "End Date", type: "month", width: "quarter" },
      { key: "description", label: "Description", type: "textarea", placeholder: "What did you do?" },
    ],
  },
  publications: {
    label: "Publications",
    entryLabel: "Publication",
    fields: [
      { key: "title", label: "Title", type: "text", placeholder: "Paper or article title", width: "half" },
      { key: "publisher", label: "Publisher / Journal", type: "text", placeholder: "IEEE, college journal, blog...", width: "half" },
      { key: "date", label: "Date", type: "month", width: "half" },
      { key: "link", label: "Link", type: "text", placeholder: "URL (optional)", width: "half" },
    ],
  },
  awards: {
    label: "Awards",
    entryLabel: "Award",
    fields: [
      { key: "title", label: "Award Title", type: "text", placeholder: "Best Final Year Project", width: "half" },
      { key: "issuer", label: "Issued By", type: "text", placeholder: "Department of Computer Science", width: "half" },
      { key: "date", label: "Date", type: "month", width: "half" },
      { key: "description", label: "Description", type: "textarea", placeholder: "Briefly describe the award" },
    ],
  },
  references: {
    label: "References",
    entryLabel: "Reference",
    fields: [
      { key: "name", label: "Full Name", type: "text", placeholder: "Dr. Jane Smith", width: "half" },
      { key: "position", label: "Position", type: "text", placeholder: "Professor, Head of Department", width: "half" },
      { key: "company", label: "Organization", type: "text", placeholder: "Your College Name", width: "half" },
      { key: "email", label: "Email", type: "text", placeholder: "jane.smith@example.com", width: "half" },
      { key: "phone", label: "Phone", type: "text", placeholder: "+91 98765 43210", width: "half" },
    ],
  },
};

const LANGUAGE_LEVELS = ["Beginner", "Intermediate", "Advanced", "Fluent", "Native"];
const TAG_SECTIONS = ["skills", "interests"];

const emptyEntry = (sectionKey) => {
  const fields = SECTION_FIELDS[sectionKey].fields;
  const entry = { id: Date.now() + Math.random() };
  fields.forEach((f) => {
    entry[f.key] = f.type === "checkbox" ? false : "";
  });
  return entry;
};

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

const TABS_ORDER = [
  "personalInfo", "summary", "experience", "education", "projects", "skills",
  "internships", "achievements", "certifications", "languages",
  "volunteerWork", "publications", "awards", "interests", "references",
];

const TAB_LABELS = {
  personalInfo: "Personal Info",
  summary: "Summary",
  experience: "Experience",
  education: "Education",
  projects: "Projects",
  skills: "Skills",
  internships: "Internships",
  achievements: "Achievements",
  certifications: "Certifications",
  languages: "Languages",
  volunteerWork: "Volunteer Work",
  publications: "Publications",
  awards: "Awards",
  interests: "Interests",
  references: "References",
};

function TagInput({ tags, onAdd, onRemove, placeholder }) {
  const [value, setValue] = useState("");

  const commit = () => {
    const trimmed = value.trim();
    if (trimmed) onAdd(trimmed);
    setValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      commit();
    } else if (e.key === "Backspace" && !value && tags.length) {
      onRemove(tags[tags.length - 1]);
    }
  };

  return (
    <div className="tag-input-box">
      {tags.map((tag) => (
        <span className="tag-chip" key={tag}>
          {tag}
          <button type="button" onClick={() => onRemove(tag)} aria-label={`Remove ${tag}`}>×</button>
        </span>
      ))}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={commit}
        placeholder={placeholder}
      />
    </div>
  );
}

export default function Templates() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [activeFormTab, setActiveFormTab] = useState("personalInfo");
  const [pdfLoading, setPdfLoading] = useState(false);
  const [fitScale, setFitScale] = useState(1);

  const pageContentRef = useRef(null);
  const pageFrameRef = useRef(null);

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
    { id: "t10", name: "Premium Clean", desc: "High-end corporate layout with delicate line spacing." },
  ];

  const [resumeData, setResumeData] = useState({
    personalInfo: {
      fullName: "Bhavesh M",
      jobTitle: "Frontend Developer",
      email: "bhavesh@example.com",
      phone: "+91 98765 43210",
      location: "Nagpur, India",
      website: "github.com/bhavesh",
    },
    summary: "Motivated student developer specializing in frontend interfaces.",
    experience: [
      { id: 1, role: "Frontend Intern", company: "Tech Corp", location: "Remote", startDate: "2025-06", endDate: "", current: true, description: "Built interactive UI dashboards." },
    ],
    education: [
      { id: 2, school: "B.E. Computer Science", location: "Nagpur, India", degree: "B.E. in Computer Science", startDate: "2023-06", endDate: "2027-06", current: true, description: "" },
    ],
    projects: [
      { id: 3, name: "Smart Resume Builder", techStack: "React, JavaScript, CSS3", link: "", startDate: "", endDate: "", description: "Developed a React web app with zero backend requirements." },
    ],
    skills: ["React", "JavaScript", "CSS3", "HTML5", "Git"],
    internships: [],
    achievements: [],
    certifications: [],
    languages: [],
    volunteerWork: [],
    publications: [],
    awards: [],
    interests: [],
    references: [],
    customSections: [],
  });

  /* ---------------- Handlers ---------------- */
  const handlePersonalChange = (field, value) => {
    setResumeData((prev) => ({ ...prev, personalInfo: { ...prev.personalInfo, [field]: value } }));
  };

  const handleTextSectionChange = (section, value) => {
    setResumeData((prev) => ({ ...prev, [section]: value }));
  };

  const addEntry = (section) => {
    setResumeData((prev) => ({ ...prev, [section]: [...prev[section], emptyEntry(section)] }));
  };

  const removeEntry = (section, id) => {
    setResumeData((prev) => ({ ...prev, [section]: prev[section].filter((e) => e.id !== id) }));
  };

  const updateEntry = (section, id, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: prev[section].map((e) => (e.id === id ? { ...e, [field]: value } : e)),
    }));
  };

  const addTag = (section, tag) => {
    setResumeData((prev) =>
      prev[section].includes(tag) ? prev : { ...prev, [section]: [...prev[section], tag] }
    );
  };
  const removeTag = (section, tag) => {
    setResumeData((prev) => ({ ...prev, [section]: prev[section].filter((t) => t !== tag) }));
  };

  const addLanguage = () => {
    setResumeData((prev) => ({
      ...prev,
      languages: [...prev.languages, { id: Date.now(), name: "", level: "Intermediate" }],
    }));
  };
  const updateLanguage = (id, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      languages: prev.languages.map((l) => (l.id === id ? { ...l, [field]: value } : l)),
    }));
  };
  const removeLanguage = (id) => {
    setResumeData((prev) => ({ ...prev, languages: prev.languages.filter((l) => l.id !== id) }));
  };

  const addCustomSection = () => {
    const title = prompt("Enter Custom Section Title:");
    if (!title) return;
    setResumeData((prev) => ({
      ...prev,
      customSections: [...prev.customSections, { id: Date.now(), title, content: "" }],
    }));
  };
  const handleCustomSectionChange = (id, value) => {
    setResumeData((prev) => ({
      ...prev,
      customSections: prev.customSections.map((sec) => (sec.id === id ? { ...sec, content: value } : sec)),
    }));
  };

  /* ---------------- Single-page fit scaling ---------------- */
  const recalcFit = useCallback(() => {
    const contentEl = pageContentRef.current;
    const frameEl = pageFrameRef.current;
    if (!contentEl || !frameEl) return;
    // Reset to measure true height first
    contentEl.style.transform = "scale(1)";
    const available = frameEl.clientHeight;
    const needed = contentEl.scrollHeight;
    const scale = needed > available ? Math.max(available / needed, 0.45) : 1;
    setFitScale(scale);
  }, []);

  useEffect(() => {
    const id = setTimeout(recalcFit, 30);
    return () => clearTimeout(id);
  }, [resumeData, selectedTemplate, recalcFit]);

  /* ---------------- PDF download ---------------- */
  const handleDownloadPDF = async () => {
    if (!pageFrameRef.current) return;
    setPdfLoading(true);
    try {
      const html2canvasModule = await import("html2canvas");
      const jsPDFModule = await import("jspdf");
      const html2canvas = html2canvasModule.default;
      const JsPDF = jsPDFModule.default;

      const canvas = await html2canvas(pageFrameRef.current, { scale: 2, useCORS: true });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new JsPDF({ unit: "mm", format: "a4" });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "PNG", 0, 0, pageWidth, pageHeight);
      const fileName = `${resumeData.personalInfo.fullName || "resume"}.pdf`.replace(/\s+/g, "_");
      pdf.save(fileName);
    } catch (err) {
      // Libraries not installed yet — fall back to print dialog.
      window.print();
    } finally {
      setPdfLoading(false);
    }
  };

  /* ---------------- Field renderers ---------------- */
  const renderField = (section, entry, field) => {
    const widthClass = field.width ? `field-${field.width}` : "field-full";
    if (field.type === "checkbox") {
      return (
        <label className="entry-checkbox-row" key={field.key}>
          <input
            type="checkbox"
            checked={!!entry[field.key]}
            onChange={(e) => updateEntry(section, entry.id, field.key, e.target.checked)}
          />
          {field.label}
        </label>
      );
    }
    if (field.type === "textarea") {
      return (
        <div className={`entry-field ${widthClass}`} key={field.key}>
          <label>{field.label}</label>
          <textarea
            rows="4"
            placeholder={field.placeholder}
            value={entry[field.key]}
            onChange={(e) => updateEntry(section, entry.id, field.key, e.target.value)}
          />
        </div>
      );
    }
    return (
      <div className={`entry-field ${widthClass}`} key={field.key}>
        <label>{field.label}</label>
        <input
          type={field.type === "month" ? "month" : "text"}
          placeholder={field.placeholder}
          value={entry[field.key]}
          onChange={(e) => updateEntry(section, entry.id, field.key, e.target.value)}
        />
      </div>
    );
  };

  const renderRepeatableSection = (sectionKey) => {
    const config = SECTION_FIELDS[sectionKey];
    const entries = resumeData[sectionKey];
    return (
      <div className="form-group-box" key={sectionKey}>
        <h3>{config.label}</h3>
        {entries.length === 0 && (
          <p className="empty-section-hint">No {config.label.toLowerCase()} added yet.</p>
        )}
        {entries.map((entry, idx) => (
          <div className="entry-card" key={entry.id}>
            <div className="entry-card-header">
              <span>{config.entryLabel} {idx + 1}</span>
              <button
                type="button"
                className="entry-remove-btn"
                onClick={() => removeEntry(sectionKey, entry.id)}
                aria-label={`Remove ${config.entryLabel}`}
              >
                Remove
              </button>
            </div>
            <div className="entry-fields-grid">
              {config.fields.map((field) => renderField(sectionKey, entry, field))}
            </div>
          </div>
        ))}
        <button type="button" className="btn-add-entry" onClick={() => addEntry(sectionKey)}>
          + Add {config.entryLabel}
        </button>
      </div>
    );
  };

  const renderTagSection = (sectionKey, placeholder) => (
    <div className="form-group-box" key={sectionKey}>
      <h3>{TAB_LABELS[sectionKey]}</h3>
      <TagInput
        tags={resumeData[sectionKey]}
        onAdd={(tag) => addTag(sectionKey, tag)}
        onRemove={(tag) => removeTag(sectionKey, tag)}
        placeholder={placeholder}
      />
      <p className="field-hint">Press Enter or comma to add.</p>
    </div>
  );

  const renderLanguagesSection = () => (
    <div className="form-group-box" key="languages">
      <h3>Languages</h3>
      {resumeData.languages.length === 0 && <p className="empty-section-hint">No languages added yet.</p>}
      {resumeData.languages.map((lang) => (
        <div className="language-row" key={lang.id}>
          <input
            type="text"
            placeholder="Language (e.g., Hindi)"
            value={lang.name}
            onChange={(e) => updateLanguage(lang.id, "name", e.target.value)}
          />
          <select value={lang.level} onChange={(e) => updateLanguage(lang.id, "level", e.target.value)}>
            {LANGUAGE_LEVELS.map((lvl) => (
              <option key={lvl} value={lvl}>{lvl}</option>
            ))}
          </select>
          <button type="button" className="entry-remove-btn" onClick={() => removeLanguage(lang.id)}>Remove</button>
        </div>
      ))}
      <button type="button" className="btn-add-entry" onClick={addLanguage}>+ Add Language</button>
    </div>
  );

  /* ---------------- Preview renderers ---------------- */
  const renderPreviewRepeatable = (sectionKey) => {
    const entries = resumeData[sectionKey];
    if (!entries || entries.length === 0) return null;
    const config = SECTION_FIELDS[sectionKey];
    return (
      <div className="preview-segment" key={sectionKey}>
        <h4>{config.label}</h4>
        {entries.map((entry) => {
          const titleParts = [];
          if (entry.role) titleParts.push(entry.role);
          if (entry.name) titleParts.push(entry.name);
          if (entry.school) titleParts.push(entry.school);
          if (entry.title) titleParts.push(entry.title);
          const subParts = [];
          if (entry.company) subParts.push(entry.company);
          if (entry.degree) subParts.push(entry.degree);
          if (entry.issuer) subParts.push(entry.issuer);
          if (entry.publisher) subParts.push(entry.publisher);
          if (entry.organization) subParts.push(entry.organization);
          if (entry.techStack) subParts.push(entry.techStack);
          if (entry.location) subParts.push(entry.location);
          const dateRange = entry.startDate || entry.endDate || entry.date
            ? `${entry.startDate || entry.date || ""}${entry.endDate ? ` – ${entry.current ? "Present" : entry.endDate}` : entry.current ? " – Present" : ""}`
            : "";
          return (
            <div className="preview-entry" key={entry.id}>
              <div className="preview-entry-top">
                <span className="preview-entry-title">{titleParts.join(" · ") || "Untitled"}</span>
                {dateRange && <span className="preview-entry-date">{dateRange}</span>}
              </div>
              {subParts.length > 0 && <p className="preview-entry-sub">{subParts.join(" · ")}</p>}
              {entry.description && (
                <ul className="preview-entry-desc-list">
                  {entry.description
                    .split("\n")
                    .map((line) => line.replace(/^[-•]\s*/, "").trim())
                    .filter(Boolean)
                    .map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                </ul>
              )}
              {entry.link && <p className="preview-entry-link">{entry.link}</p>}
            </div>
          );
        })}
      </div>
    );
  };

  const renderPreviewTags = (sectionKey, label, asList) => {
    const tags = resumeData[sectionKey];
    if (!tags || tags.length === 0) return null;
    return (
      <div className="preview-segment" key={sectionKey}>
        <h4>{label}</h4>
        {asList ? (
          <ul className="preview-skills-list">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        ) : (
          <p>{tags.join(", ")}</p>
        )}
      </div>
    );
  };

  const renderPreviewLanguages = () => {
    if (resumeData.languages.length === 0) return null;
    return (
      <div className="preview-segment" key="languages">
        <h4>Languages</h4>
        <p>{resumeData.languages.filter((l) => l.name).map((l) => `${l.name} (${l.level})`).join(", ")}</p>
      </div>
    );
  };

  /* ---------------- Editor view ---------------- */
  if (selectedTemplate) {
    return (
      <div className="editor-workspace animate-fade">
        <div className="editor-header">
          <div>
            <button className="btn-back" onClick={() => setSelectedTemplate(null)}>← Back to Templates</button>
            <h2>Editing Style: <span className="text-teal">{selectedTemplate.name}</span></h2>
          </div>
          <button className="btn-save" onClick={handleDownloadPDF} disabled={pdfLoading}>
            {pdfLoading ? "Preparing PDF..." : "Download PDF"}
          </button>
        </div>

        <div className="split-workspace-layout">
          {/* Tabs */}
          <aside className="editor-tabs-sidebar">
            {TABS_ORDER.map((tab) => (
              <button
                key={tab}
                className={activeFormTab === tab ? "active" : ""}
                onClick={() => setActiveFormTab(tab)}
              >
                {TAB_LABELS[tab]}
              </button>
            ))}
            {resumeData.customSections.map((sec) => (
              <button
                key={sec.id}
                className={activeFormTab === sec.id ? "active custom-tab-btn" : "custom-tab-btn"}
                onClick={() => setActiveFormTab(sec.id)}
              >
                ✨ {sec.title}
              </button>
            ))}
            <div className="menu-divider"></div>
            <button className="btn-add-custom" onClick={addCustomSection}>Custom Section (+)</button>
          </aside>

          {/* Form column */}
          <div className="editor-form-window">
            {activeFormTab === "personalInfo" && (
              <div className="form-group-box">
                <h3>Personal Information</h3>
                <div className="entry-fields-grid">
                  <div className="entry-field field-half">
                    <label>Full Name</label>
                    <input type="text" value={resumeData.personalInfo.fullName} onChange={(e) => handlePersonalChange("fullName", e.target.value)} />
                  </div>
                  <div className="entry-field field-half">
                    <label>Professional Title</label>
                    <input type="text" placeholder="Frontend Developer" value={resumeData.personalInfo.jobTitle} onChange={(e) => handlePersonalChange("jobTitle", e.target.value)} />
                  </div>
                  <div className="entry-field field-half">
                    <label>Email Address</label>
                    <input type="email" value={resumeData.personalInfo.email} onChange={(e) => handlePersonalChange("email", e.target.value)} />
                  </div>
                  <div className="entry-field field-half">
                    <label>Phone Number</label>
                    <input type="text" value={resumeData.personalInfo.phone} onChange={(e) => handlePersonalChange("phone", e.target.value)} />
                  </div>
                  <div className="entry-field field-half">
                    <label>Location</label>
                    <input type="text" value={resumeData.personalInfo.location} onChange={(e) => handlePersonalChange("location", e.target.value)} />
                  </div>
                  <div className="entry-field field-half">
                    <label>Website / Link</label>
                    <input type="text" value={resumeData.personalInfo.website} onChange={(e) => handlePersonalChange("website", e.target.value)} />
                  </div>
                </div>
              </div>
            )}

            {activeFormTab === "summary" && (
              <div className="form-group-box">
                <h3>Summary</h3>
                <textarea
                  rows="8"
                  value={resumeData.summary}
                  onChange={(e) => handleTextSectionChange("summary", e.target.value)}
                  placeholder="A 2-3 sentence overview of who you are and what you're looking for..."
                />
              </div>
            )}

            {["experience", "education", "projects", "internships", "achievements", "certifications", "volunteerWork", "publications", "awards", "references"].includes(activeFormTab) &&
              renderRepeatableSection(activeFormTab)}

            {activeFormTab === "skills" && renderTagSection("skills", "e.g., React (press Enter)")}
            {activeFormTab === "interests" && renderTagSection("interests", "e.g., Chess (press Enter)")}
            {activeFormTab === "languages" && renderLanguagesSection()}

            {resumeData.customSections.map(
              (sec) =>
                activeFormTab === sec.id && (
                  <div className="form-group-box" key={sec.id}>
                    <h3>{sec.title}</h3>
                    <textarea rows="10" value={sec.content} onChange={(e) => handleCustomSectionChange(sec.id, e.target.value)} />
                  </div>
                )
            )}
          </div>

          {/* Live preview — single page, auto-scaled to fit */}
          <div className="live-preview-window">
            <div className="page-fit-frame" ref={pageFrameRef}>
              <div
                className={`resume-paper-canvas template-${selectedTemplate.id}`}
                ref={pageContentRef}
                style={{ transform: `scale(${fitScale})`, transformOrigin: "top left", width: `${100 / fitScale}%` }}
              >
                <div className="resume-preview-header">
                  <h2>{resumeData.personalInfo.fullName || "Your Name"}</h2>
                  {resumeData.personalInfo.jobTitle && <p className="preview-job-title">{resumeData.personalInfo.jobTitle}</p>}
                  <p className="resume-preview-contacts">
                    {resumeData.personalInfo.email && <span>{resumeData.personalInfo.email}</span>}
                    {resumeData.personalInfo.phone && <span>{resumeData.personalInfo.phone}</span>}
                    {resumeData.personalInfo.location && <span>{resumeData.personalInfo.location}</span>}
                    {resumeData.personalInfo.website && <span>{resumeData.personalInfo.website}</span>}
                  </p>
                </div>

                <div className="resume-preview-body">
                  {resumeData.summary && (
                    <div className="preview-segment">
                      <h4>Professional Summary</h4>
                      <p>{resumeData.summary}</p>
                    </div>
                  )}
                  {renderPreviewRepeatable("experience")}
                  {renderPreviewRepeatable("education")}
                  {renderPreviewRepeatable("projects")}
                  {renderPreviewTags("skills", "Core Skills", true)}
                  {renderPreviewRepeatable("internships")}
                  {renderPreviewRepeatable("achievements")}
                  {renderPreviewRepeatable("certifications")}
                  {renderPreviewLanguages()}
                  {renderPreviewRepeatable("volunteerWork")}
                  {renderPreviewRepeatable("publications")}
                  {renderPreviewRepeatable("awards")}
                  {renderPreviewTags("interests", "Interests")}
                  {renderPreviewRepeatable("references")}

                  {resumeData.customSections.map(
                    (sec) =>
                      sec.content && (
                        <div className="preview-segment" key={sec.id}>
                          <h4>{sec.title}</h4>
                          <p style={{ whiteSpace: "pre-line" }}>{sec.content}</p>
                        </div>
                      )
                  )}
                </div>
              </div>
            </div>
            <p className="page-fit-note">
              {fitScale < 1 ? "Content scaled to fit one page." : "____________"}
            </p>
          </div>
        </div>
      </div>
    );
  }

  /* ---------------- Template picker view ---------------- */
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
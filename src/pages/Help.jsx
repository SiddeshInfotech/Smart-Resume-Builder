import React from "react";
import "./Help.css";

function Help() {
  return (
    <div className="help">

      <div className="help-left">
        <h1>Help Center</h1>
        <div className="line"></div>

        <p>
          Find answers to common questions and learn how to
          use Smart Resume Builder.
        </p>

        <div className="support-card">
          <h3>Still Need Help?</h3>
          <p>Contact our support team anytime.</p>

          <button>Contact Support</button>
        </div>
      </div>

      <div className="help-right">

        <div className="faq">
          <h3>How do I create a Resume?</h3>
          <p>
            Select a template, fill your information,
            preview and download your resume.
          </p>
        </div>

        <div className="faq">
          <h3>Can I edit my Resume?</h3>
          <p>
            Yes. You can edit your resume anytime before
            downloading.
          </p>
        </div>

        <div className="faq">
          <h3>Are templates ATS Friendly?</h3>
          <p>
            Yes, all templates are ATS compatible.
          </p>
        </div>

        <div className="faq">
          <h3>Is Smart Resume Builder Free?</h3>
          <p>
            Yes, students can use basic features for free.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Help;
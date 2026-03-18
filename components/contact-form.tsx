"use client";

import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ backgroundColor: "#FAF8F3", borderTop: "1.5px solid #000", borderBottom: "1.5px solid #000" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap');

        .ct-display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.02em; line-height: 0.92; }
        .ct-body    { font-family: 'DM Sans', sans-serif; }

        .ct-wrap {
          max-width: 1280px;
          margin: 0 auto;
          padding: 64px 32px 80px;
        }

        /* HEADING */
        .ct-heading {
          text-align: center;
          margin-bottom: 56px;
        }
        .ct-heading h2 {
          font-size: clamp(3.5rem, 9vw, 7rem);
          color: #000;
          margin: 0;
        }
        .ct-heading h2 span {
          color: #C084FC;
          text-decoration: underline;
          text-underline-offset: 6px;
        }

        /* GRID */
        .ct-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        @media (min-width: 1024px) {
          .ct-grid { grid-template-columns: 1fr 1.4fr; }
        }

        /* INFO PANEL */
        .ct-info {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .ct-info-item {
          background: #fff;
          border: 2.5px solid #000;
          box-shadow: 5px 5px 0 #000;
          padding: 18px 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }
        .ct-info-item:hover {
          transform: translate(-3px, -3px);
          box-shadow: 8px 8px 0 #000;
        }
        .ct-info-icon {
          width: 44px;
          height: 44px;
          min-width: 44px;
          background: #FBBF24;
          border: 2px solid #000;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ct-info-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #666;
          margin-bottom: 2px;
        }
        .ct-info-value {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          color: #000;
        }

        /* FORM CARD */
        .ct-form-card {
          background: #fff;
          border: 2.5px solid #000;
          box-shadow: 8px 8px 0 #000;
          padding: 40px 36px;
        }

        .ct-field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px; }
        .ct-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #000;
        }
        .ct-input, .ct-textarea {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          color: #000;
          background: #FAF8F3;
          border: 2px solid #000;
          padding: 10px 14px;
          outline: none;
          transition: box-shadow 0.15s ease;
          width: 100%;
          box-sizing: border-box;
        }
        .ct-input:focus, .ct-textarea:focus {
          box-shadow: 3px 3px 0 #000;
        }
        .ct-textarea { resize: none; min-height: 140px; }

        .ct-submit {
          width: 100%;
          background: #000;
          color: #FEFCE8;
          border: 2px solid #000;
          box-shadow: 4px 4px 0 #555;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.2rem;
          letter-spacing: 0.08em;
          padding: 14px 24px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          margin-top: 8px;
        }
        .ct-submit:hover:not(:disabled) {
          transform: translate(2px, 2px);
          box-shadow: 2px 2px 0 #555;
        }
        .ct-submit:disabled { opacity: 0.6; cursor: not-allowed; }

        /* SUCCESS */
        .ct-success {
          text-align: center;
          padding: 48px 0;
        }
        .ct-again-btn {
          background: transparent;
          border: 2px solid #000;
          box-shadow: 3px 3px 0 #000;
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          padding: 10px 20px;
          cursor: pointer;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .ct-again-btn:hover {
          transform: translate(2px, 2px);
          box-shadow: 1px 1px 0 #000;
        }
      `}</style>

      <div className="ct-wrap">

        <div className="ct-heading ct-display">
          <h2>GET IN <span>TOUCH</span></h2>
        </div>

        <div className="ct-grid">
          <div className="ct-info ct-body">
            {[
              { icon: Mail,   label: "Email",    value: "phongnhd2605@gmail.com" },
              { icon: Phone,  label: "Phone",    value: "+84 333 973 063" },
              { icon: MapPin, label: "Location", value: "Thủ Đức, TP.HCM" },
            ].map(({ icon: Icon, label, value }, i) => (
              <div key={i} className="ct-info-item">
                <div className="ct-info-icon">
                  <Icon style={{ width: 20, height: 20, color: "#000" }} />
                </div>
                <div>
                  <div className="ct-info-label">{label}</div>
                  <div className="ct-info-value">{value}</div>
                </div>
              </div>
            ))}

            <p className="ct-body" style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "#444", marginTop: "8px" }}>
              I'm always open to discussing new projects, creative ideas or opportunities
              to be part of your visions. Feel free to send a message!
            </p>
          </div>

          <div className="ct-form-card">
            {submitted ? (
              <div className="ct-success ct-body">
                <CheckCircle2 style={{ width: 64, height: 64, color: "#16a34a", margin: "0 auto 20px" }} />
                <h3 className="ct-display" style={{ fontSize: "2.5rem", color: "#000", marginBottom: "12px" }}>
                  Message Received!
                </h3>
                <p style={{ color: "#555", marginBottom: "28px", fontSize: "0.9rem" }}>
                  I appreciate you reaching out. You'll hear from me within 24 hours.
                </p>
                <button className="ct-again-btn" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="ct-field">
                  <label className="ct-label" htmlFor="name">Full Name</label>
                  <input className="ct-input" id="name" placeholder="John Doe" required />
                </div>
                <div className="ct-field">
                  <label className="ct-label" htmlFor="email">Email Address</label>
                  <input className="ct-input" id="email" type="email" placeholder="john@example.com" required />
                </div>
                <div className="ct-field">
                  <label className="ct-label" htmlFor="subject">Subject</label>
                  <input className="ct-input" id="subject" placeholder="Collaboration Proposal" required />
                </div>
                <div className="ct-field">
                  <label className="ct-label" htmlFor="message">Message</label>
                  <textarea className="ct-textarea" id="message" placeholder="Tell me about your project..." required />
                </div>
                <button type="submit" className="ct-submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : (<>Send Message <Send style={{ width: 18, height: 18 }} /></>)}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
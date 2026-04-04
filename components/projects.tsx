"use client";

import React, { useState } from "react";
import Image from "next/image";
import projectsData from "@/data/projects.json";
import FloatingIcon from "@/components/FloatingIcon";
import { ExternalLink, Github, Clock, Bell, BellOff } from "lucide-react";

interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

interface ProjectsData {
  title: string;
  description: string;
  githubUrl: string;
  projects: Project[];
}

const data = projectsData as ProjectsData;

function ComingSoonCard({ project }: { project: Project }) {
  const [notified, setNotified] = useState(false);

  return (
    <div className="pj-card pj-cs-card">
      <div className="pj-cs-grid" />
      <div className="pj-cs-scan" />
      <span className="pj-cs-corner pj-cs-tl" />
      <span className="pj-cs-corner pj-cs-tr" />
      <span className="pj-cs-corner pj-cs-bl" />
      <span className="pj-cs-corner pj-cs-br" />

      <div className="pj-cs-body">
        <div className="pj-cs-clock">
          <Clock style={{ width: 28, height: 28, color: "#FBBF24" }} />
        </div>

        <span className="pj-cs-badge">Coming Soon</span>

        <h3 className="pj-display pj-cs-title">
          {project.title.replace(/^Upcoming Project\s*[-–]\s*/i, "")}
        </h3>
  
        <p className="pj-body pj-cs-desc">{project.description}</p>
        <div className="pj-cs-tags">
          {project.tech.map((t) => (
            <span key={t} className="pj-cs-tag">{t}</span>
          ))}
        </div>

        <button
          className={`pj-cs-notify ${notified ? "done" : "idle"}`}
          onClick={() => !notified && setNotified(true)}
        >
          {notified ? (
            <><BellOff style={{ width: 14, height: 14 }} /> Notified!</>
          ) : (
            <><Bell style={{ width: 14, height: 14 }} /> Notify Me</>
          )}
        </button>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" style={{ backgroundColor: "#f2d190", borderTop: "1.5px solid #000", borderBottom: "1.5px solid #000" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500&family=DM+Serif+Display:ital@0;1&display=swap');

        .pj-display { font-family: 'Anton', sans-serif; letter-spacing: -0.01em; line-height: 0.9; }
        .pj-body    { font-family: 'DM Sans', sans-serif; }

        .pj-card {
          background: #fff;
          border: 2.5px solid #000;
          box-shadow: 6px 6px 0 #000;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform 0.2s cubic-bezier(0.22,1,0.36,1), box-shadow 0.2s cubic-bezier(0.22,1,0.36,1);
          will-change: transform;
        }
        .pj-card:hover {
          transform: translate(-4px, -4px);
          box-shadow: 10px 10px 0 #000;
        }

        .pj-img-wrap {
          position: relative;
          height: 220px;
          overflow: hidden;
          border-bottom: 2.5px solid #000;
        }
        .pj-img-wrap img {
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .pj-card:hover .pj-img-wrap img {
          transform: scale(1.06);
        }

        .pj-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.55);
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.2s ease;
        }
        .pj-card:hover .pj-overlay {
          opacity: 1;
        }

        .pj-live-btn {
          background: #FBBF24;
          color: #000;
          border: 2px solid #000;
          box-shadow: 3px 3px 0 #000;
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: 0.8rem;
          padding: 6px 16px;
          display: flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .pj-live-btn:hover {
          transform: translate(2px, 2px);
          box-shadow: 1px 1px 0 #000;
        }

        .pj-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #16a34a;
          background: transparent;
          padding: 0;
        }

        .pj-footer {
          border-top: 2px solid #000;
          padding: 12px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
        }

        .pj-footer-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          color: #000;
          display: flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          transition: opacity 0.15s;
        }
        .pj-footer-link:hover { opacity: 0.6; }

        .pj-github-btn {
          background: #FEFCE8;
          color: #000;
          border: 2px solid #000;
          box-shadow: 4px 4px 0 rgba(0,0,0,0.3);
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          padding: 10px 20px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .pj-github-btn:hover {
          transform: translate(2px, 2px);
          box-shadow: 2px 2px 0 rgba(0,0,0,0.3);
        }

        .pj-counter {
          background: #FEFCE8;
          color: #000;
          font-family: 'Courier New', monospace;
          font-size: 0.8rem;
          padding: 10px 16px;
          border: 2px solid #000;
          line-height: 1.4;
        }

        .pj-cs-card {
          background: #0a0a0a !important;
          border-color: #FEFCE8 !important;
          box-shadow: 6px 6px 0 #FEFCE8 !important;
          position: relative;
          min-height: 420px;
        }
        .pj-cs-card:hover {
          box-shadow: 10px 10px 0 #FEFCE8 !important;
        }
        .pj-cs-card:hover .pj-cs-grid { opacity: 0.9; }

        .pj-cs-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(251,191,36,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251,191,36,0.07) 1px, transparent 1px);
          background-size: 26px 26px;
          animation: cs-drift 20s linear infinite;
          pointer-events: none;
        }
        @keyframes cs-drift {
          0%   { background-position: 0 0; }
          100% { background-position: 26px 26px; }
        }

        .pj-cs-scan {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }
        .pj-cs-scan::after {
          content: '';
          position: absolute;
          left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(251,191,36,0.55), transparent);
          animation: cs-scan 3.2s ease-in-out infinite;
        }
        @keyframes cs-scan {
          0%   { top: -2px; opacity: 0; }
          8%   { opacity: 1; }
          92%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .pj-cs-corner {
          position: absolute;
          width: 18px;
          height: 18px;
          border-color: #FBBF24;
          border-style: solid;
          z-index: 2;
        }
        .pj-cs-tl { top: 10px; left: 10px;  border-width: 2px 0 0 2px; }
        .pj-cs-tr { top: 10px; right: 10px; border-width: 2px 2px 0 0; }
        .pj-cs-bl { bottom: 10px; left: 10px;  border-width: 0 0 2px 2px; }
        .pj-cs-br { bottom: 10px; right: 10px; border-width: 0 2px 2px 0; }

        .pj-cs-body {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          flex: 1;
          padding: 44px 28px 36px;
          gap: 0;
        }

        .pj-cs-clock {
          width: 60px;
          height: 60px;
          border: 2.5px solid #FBBF24;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          animation: cs-pulse 2.6s ease-in-out infinite;
        }
        @keyframes cs-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(251,191,36,0.45); }
          50%       { box-shadow: 0 0 0 10px rgba(251,191,36,0); }
        }

        .pj-cs-badge {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #000;
          background: #FBBF24;
          border: 1.5px solid #000;
          padding: 3px 10px;
          margin-bottom: 14px;
        }

        .pj-cs-title {
          font-size: clamp(1.5rem, 3.5vw, 2.2rem) !important;
          color: #fff !important;
          margin-bottom: 12px;
        }

        .pj-cs-desc {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.45);
          line-height: 1.7;
          max-width: 280px;
          margin-bottom: 20px;
          font-style: italic;
        }

        .pj-cs-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          justify-content: center;
          margin-bottom: 26px;
        }
        .pj-cs-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.62rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          color: rgba(255,255,255,0.4);
          border: 1.5px solid rgba(255,255,255,0.15);
          padding: 3px 9px;
        }

        .pj-cs-notify {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          padding: 10px 22px;
          border: 2px solid #FBBF24;
          display: flex;
          align-items: center;
          gap: 7px;
          cursor: pointer;
          transition: background 0.15s ease, color 0.15s ease;
        }
        .pj-cs-notify.idle {
          background: transparent;
          color: #FBBF24;
        }
        .pj-cs-notify.idle:hover {
          background: #FBBF24;
          color: #000;
        }
        .pj-cs-notify.done {
          background: #4ADE80;
          border-color: #4ADE80;
          color: #000;
          cursor: default;
        }

        ::selection { background: #FF6EB4; color: #000; }
        .pj-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
        }
        @media (min-width: 768px)  { .pj-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .pj-grid { grid-template-columns: repeat(3, 1fr); } }
      `}</style>

      <div style={{ padding: "60px 32px 40px", maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "24px", marginBottom: "48px" }}>
          <div>
            <h2 className="pj-display" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", color: "#000" }}>
              {data.title}
            </h2>
            <p className="pj-body" style={{ fontSize: "1.1rem", fontFamily: "'DM Serif Display', serif", fontStyle: "italic", color: "#333", marginTop: "12px", lineHeight: 1.5 }}>
              {data.description}
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "12px" }}>
            <div className="pj-counter">
              Total Projects:<br />
              <strong style={{ fontSize: "1.4rem" }}>{data.projects.length}</strong>
            </div>
            <a href={data.githubUrl} target="_blank" rel="noopener noreferrer" className="pj-github-btn">
              View All on GitHub
              <FloatingIcon />
            </a>
          </div>
        </div>

        <div className="pj-grid">
          {data.projects.map((project) => {
            if (project.id === "project-3") {
              return <ComingSoonCard key={project.id} project={project} />;
            }

            return (
              <div key={project.id} className="pj-card">
                <div className="pj-img-wrap">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain"
                  />
                  <div className="pj-overlay">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="pj-live-btn">
                      <ExternalLink style={{ width: 14, height: 14 }} />
                      Live Demo
                    </a>
                  </div>
                </div>

                <div style={{ padding: "20px 20px 0", flex: 1 }}>
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "10px" }}>
                    {project.tech.map((t) => (
                      <span key={t} className="pj-tag">{t}</span>
                    ))}
                  </div>
                  <h3 className="pj-display" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", color: "#000", marginBottom: "10px" }}>
                    {project.title}
                  </h3>
                  <p className="pj-body" style={{ fontSize: "0.88rem", color: "#444", lineHeight: 1.65, marginBottom: "16px", fontStyle: "italic" }}>
                    {project.description}
                  </p>
                </div>

                <div className="pj-footer">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="pj-footer-link">
                    <Github style={{ width: 15, height: 15 }} />
                    Source Code
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="pj-footer-link">
                    View Project
                    <ExternalLink style={{ width: 15, height: 15 }} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ height: "60px" }} />
      </div>
    </section>
  );
}
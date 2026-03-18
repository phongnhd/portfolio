"use client";

import React from "react";
import Image from "next/image";
import projectsData from "@/data/projects.json";
import FloatingIcon from "@/components/FloatingIcon";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

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

        ::selection { background: #FF6EB4; color: #000; }
        .pj-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
        }
        @media (min-width: 768px)  { ::selection { background: #FF6EB4; color: #000; }
        .pj-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { ::selection { background: #FF6EB4; color: #000; }
        .pj-grid { grid-template-columns: repeat(3, 1fr); } }
      `}</style>

      {/* HEADER */}
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

        {/* GRID */}
        <div className="pj-grid">
          {data.projects.map((project) => (
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

              {/* CONTENT */}
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

              {/* FOOTER */}
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
          ))}
        </div>

        <div style={{ height: "60px" }} />
      </div>
    </section>
  );
}
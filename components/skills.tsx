"use client";

import React, { useEffect, useRef, useState } from "react";
import { Monitor, Database, Layers, Globe } from "lucide-react";
import skillsData from "@/data/skills.json";

const ICON_MAP = { Monitor, Database, Layers, Globe };

const ACCENT_COLORS = ["#5CE1E6", "#4ADE80", "#FBBF24", "#C084FC"];

interface Category {
  title: string;
  icon: keyof typeof ICON_MAP;
  skills: string[];
  description: string;
}

const SKILL_CATEGORIES: Category[] = skillsData.categories as Category[];

export function Skills() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{ backgroundColor: "#FAF8F3", borderTop: "1.5px solid #000", borderBottom: "1.5px solid #000" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;700&display=swap');

        .sk-display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.02em; line-height: 0.92; }
        .sk-body    { font-family: 'DM Sans', sans-serif; }

        .sk-wrap {
          max-width: 1280px;
          margin: 0 auto;
          padding: 64px 32px 80px;
        }

        /* HEADER */
        .sk-header {
          text-align: center;
          margin-bottom: 56px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .sk-header.show {
          opacity: 1;
          transform: translateY(0);
        }
        .sk-header h2 {
          font-size: clamp(3rem, 8vw, 6.5rem);
          color: #000;
          margin: 0 0 12px;
        }
        .sk-underline {
          width: 80px;
          height: 6px;
          background: #5CE1E6;
          border: 2px solid #000;
          margin: 0 auto 16px;
        }
        .sk-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          color: #555;
          font-style: italic;
        }

        /* GRID */
        .sk-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 640px)  { .sk-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .sk-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1280px) { .sk-grid { grid-template-columns: repeat(4, 1fr); } }

        /* CARD */
        .sk-card {
          background: #fff;
          border: 2.5px solid #000;
          box-shadow: 6px 6px 0 #000;
          padding: 28px 24px 20px;
          position: relative;
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.5s ease, transform 0.5s ease, box-shadow 0.2s ease;
          overflow: hidden;
        }
        .sk-card.show {
          opacity: 1;
          transform: translateY(0);
        }
        .sk-card:hover {
          box-shadow: 10px 10px 0 #000;
          transform: translate(-3px, -3px);
        }

        /* ICON BADGE — top right */
        .sk-icon-badge {
          position: absolute;
          top: 0;
          right: 0;
          width: 56px;
          height: 56px;
          border-left: 2.5px solid #000;
          border-bottom: 2.5px solid #000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sk-card-title {
          font-size: clamp(1.4rem, 3vw, 1.8rem);
          color: #000;
          margin: 0 0 14px;
          padding-right: 64px;
        }

        .sk-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          color: #555;
          line-height: 1.65;
          margin-bottom: 18px;
        }

        /* SKILL TAGS */
        .sk-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }
        .sk-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #000;
          background: #F5F5F0;
          border: 1.5px solid #000;
          padding: 4px 10px;
        }

        /* VIEW DETAILS btn */
        .sk-details-btn {
          width: 100%;
          border: 2px solid #000;
          background: transparent;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 0.85rem;
          padding: 10px 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          cursor: default;
          color: #000;
          transition: background 0.15s ease;
        }
        .sk-card:hover .sk-details-btn {
          background: #F5F5F0;
        }
      `}</style>

      <div className="sk-wrap">

        {/* HEADER */}
        <div className={`sk-header sk-display${visible ? " show" : ""}`}>
          <h2>{skillsData.title}</h2>
          <div className="sk-underline" />
          <p className="sk-subtitle">Technologies & tools I work with every day.</p>
        </div>

        {/* GRID */}
        <div className="sk-grid">
          {SKILL_CATEGORIES.map((cat, i) => {
            const Icon = ICON_MAP[cat.icon];
            const accent = ACCENT_COLORS[i % ACCENT_COLORS.length];
            return (
              <div
                key={cat.title}
                className={`sk-card${visible ? " show" : ""}`}
                style={{ transitionDelay: visible ? `${i * 100}ms` : "0ms" }}
              >
                <div className="sk-icon-badge" style={{ background: accent }}>
                  <Icon style={{ width: 24, height: 24, color: "#000" }} />
                </div>

                <h3 className="sk-display sk-card-title">{cat.title}</h3>

                <p className="sk-desc">{cat.description}</p>

                <div className="sk-tags">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="sk-tag">{skill}</span>
                  ))}
                </div>

                <button className="sk-details-btn">
                  View Details →
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
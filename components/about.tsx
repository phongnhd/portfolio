"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { User, Rocket, Target, Briefcase } from "lucide-react";
import aboutData from "@/data/about.json";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE, delay: 0.15 } },
};

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const slideIn: Variants = {
  hidden: { opacity: 0, x: 16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: EASE } },
};


export function About() {
  const icons = [Rocket, Briefcase, Target];

  return (
    <section
      id="about"
      style={{ backgroundColor: "#C084FC", minHeight: "100vh", borderTop: "1.5px solid #000", borderBottom: "1.5px solid #000" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap');

        #about * { box-sizing: border-box; }

        .ab-display {
          font-family: 'Bebas Neue', sans-serif;
          letter-spacing: 0.03em;
          line-height: 0.95;
        }
        .ab-body {
          font-family: 'DM Sans', sans-serif;
        }
        .ab-grid {
          display: grid;
          grid-template-columns: 1fr;
          min-height: 100vh;
        }
        @media (min-width: 1024px) {
          .ab-grid { grid-template-columns: 1fr 1fr; }
        }
        .ab-left {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }
        @media (min-width: 640px)  { .ab-left { padding: 60px 40px; } }
        @media (min-width: 1024px) { .ab-left { padding: 60px 48px; } }

        .ab-right {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 40px 20px 60px;
        }
        @media (min-width: 640px)  { .ab-right { padding: 40px 40px 60px; } }
        @media (min-width: 1024px) { .ab-right { padding: 60px 48px; } }

        .ab-card {
          background: #FEFCE8;
          border: 3px solid #000;
          box-shadow: 6px 6px 0 #000;
          /* GPU-accelerated hover — no layout shift */
          transition: box-shadow 0.2s ease, transform 0.2s ease;
          will-change: transform;
          width: 100%;
          max-width: 520px;
          padding: 32px 24px;
        }
        @media (min-width: 640px) { .ab-card { padding: 48px; } }
        .ab-card:hover {
          box-shadow: 12px 12px 0 #000;
          transform: translate(-4px, -4px);
        }

        .ab-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 28px;
        }
        @media (max-width: 400px) {
          .ab-stats-grid { grid-template-columns: 1fr; }
        }
        .ab-stat {
          background: #FEFCE8;
          border: 2px solid #000;
          box-shadow: 3px 3px 0 #000;
          text-align: center;
          padding: 12px 8px;
        }
        .ab-bullet {
          width: 10px;
          height: 10px;
          min-width: 10px;
          background: #FBBF24;
          border: 2px solid #000;
          flex-shrink: 0;
          margin-top: 6px;
        }
        .ab-underline {
          height: 10px;
          width: 100px;
          background: #FBBF24;
          border: 2px solid #000;
          margin-top: 12px;
        }
        @media (min-width: 640px) { .ab-underline { width: 120px; } }

        .ab-giant  { font-size: clamp(2.8rem, 8vw, 7rem); }
        .ab-card-title { font-size: clamp(2rem, 5vw, 3.5rem); }
      `}</style>

      <div className="ab-grid">
        <motion.div
          className="ab-left"
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="ab-card ab-body">

            <h2 className="ab-display ab-card-title" style={{ color: "#000", marginBottom: "24px" }}>
              {aboutData.title}
            </h2>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
            >
              {aboutData.journey.map((text, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  style={{ color: "#000", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "14px" }}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              className="ab-stats-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {aboutData.stats.map((stat, i) => {
                const Icon = icons[i];
                return (
                  <motion.div key={i} className="ab-stat" variants={fadeUp}>
                    <Icon style={{ width: 22, height: 22, margin: "0 auto 6px", display: "block", color: "#000" }} />
                    <div className="ab-display" style={{ fontSize: "1.6rem", color: "#000" }}>{stat.value}</div>
                    <div style={{ fontSize: "0.6rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#000", fontFamily: "'DM Sans', sans-serif" }}>
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="ab-right"
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="ab-display ab-giant" style={{ color: "#7C3AED", marginBottom: "4px" }}>
            {aboutData.careerTitle}
          </h2>
          <div className="ab-underline" />

          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: "36px", marginBottom: "16px" }}>
            <User style={{ width: 26, height: 26, color: "#000", flexShrink: 0 }} />
            <h3 className="ab-display" style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", color: "#000" }}>
              {aboutData.journeyTitle}
            </h3>
          </div>

          {/* Career */}
          <motion.ul
            className="ab-body"
            style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {aboutData.career.map((item, i) => (
              <motion.li
                key={i}
                variants={slideIn}
                style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#000", fontSize: "0.9rem", lineHeight: 1.6 }}
              >
                <div className="ab-bullet" />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

      </div>
    </section>
  );
}
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LightningEffect from "@/components/LightningEffect";
import { ScrambleText } from "@/components/ui/scramble-text";
import { WaveSlideText } from "@/components/ui/SlideTextFull";

export function Navbar() {
  const [showLightning, setShowLightning] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleTalkClick = () => {
    if (!hasPlayed) {
      setShowLightning(true);
      setHasPlayed(true);
    }

    const section = document.querySelector("#contact");
    section?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const scrollToSection = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{ backgroundColor: "#FAF8F3" }}
        className="sticky border-b border-black top-0 z-50 w-full backdrop-blur-md" >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 group"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}>
            <div className="bg-black p-2 rounded-xl transition-all group-hover:scale-110 group-hover:rotate-12 shadow-md">
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
              </svg>
            </div>

            <span className="text-lg sm:text-xl font-bold tracking-tight font-headline">
              Nguyễn Hoàng Duy Phong
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10 text-xl font-semibold text-black tracking-wide">
            <span
              className="relative inline-block cursor-pointer hover:text-primary transition-all duration-200"
              onClick={() => scrollToSection("#about")} >
              <span className="invisible">About</span>
              <span className="absolute left-0 top-0">
                <ScrambleText text="About" />
              </span>
            </span>

            <span
              className="relative inline-block cursor-pointer hover:text-primary transition-all duration-200"
              onClick={() => scrollToSection("#skills")} >
              <span className="invisible">Skills</span>
              <span className="absolute left-0 top-0">
                <ScrambleText text="Skills" />
              </span>
            </span>

            <span
              className="relative inline-block cursor-pointer hover:text-primary transition-all duration-200"
              onClick={() => scrollToSection("#projects")}>
              <span className="invisible">Projects</span>
              <span className="absolute left-0 top-0">
                <ScrambleText text="Projects" />
              </span>
            </span>

            <a
              href="/NguyenHoangDuyPhong_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block hover:text-primary transition-all duration-200" >
              <span className="invisible">Resume</span>
              <span className="absolute left-0 top-0">
                <ScrambleText text="Resume" />
              </span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="hidden md:flex border-purple-600 text-purple-600 hover:bg-purple-50 group overflow-hidden font-semibold"
              onClick={handleTalkClick} >
              <WaveSlideText text="Let's Talk" />
            </Button>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu" >
              <svg
                className="h-6 w-6 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16" />)}
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? "max-h-96 border-t border-black" : "max-h-0"
            }`}
          style={{ backgroundColor: "#FAF8F3" }}>
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              className="text-left text-lg font-semibold text-black hover:text-purple-600 transition-colors py-2"
              onClick={() => scrollToSection("#about")} >
              About
            </button>

            <button
              className="text-left text-lg font-semibold text-black hover:text-purple-600 transition-colors py-2"
              onClick={() => scrollToSection("#skills")}>
              Skills
            </button>

            <button
              className="text-left text-lg font-semibold text-black hover:text-purple-600 transition-colors py-2"
              onClick={() => scrollToSection("#projects")}>
              Projects
            </button>

            <a
              href="/NguyenHoangDuyPhong_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-left text-lg font-semibold text-black hover:text-purple-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}>
              Resume
            </a>

            <Button
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold w-full mt-2"
              onClick={handleTalkClick} >
              Let's Talk
            </Button>
          </div>
        </div>
      </nav>

      {showLightning && (
        <LightningEffect onEnd={() => setShowLightning(false)} />
      )}
    </>
  );
}

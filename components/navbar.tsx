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

  const handleTalkClick = () => {
    if (!hasPlayed) {
      setShowLightning(true);
      setHasPlayed(true);
    }

    const section = document.querySelector("#contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        style={{ backgroundColor: "#FAF8F3" }}
        className="sticky border-b border-black top-0 z-50 w-full backdrop-blur-md"
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 group"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }} >
            <div className="bg-black p-2 rounded-xl transition-all
              group-hover:scale-110 group-hover:rotate-12 shadow-md">
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8} >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            </div>

            <span className="text-xl font-bold tracking-tight font-headline">
              Nguyễn Hoàng Duy Phong
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10 text-xl font-semibold text-black tracking-wide">
            <span
              className="relative inline-block cursor-pointer hover:text-primary transition-all duration-200"
              onClick={() =>
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
              }>
              <span className="invisible">About</span>
              <span className="absolute left-0 top-0">
                <ScrambleText text="About" />
              </span>
            </span>

            <span
              className="relative inline-block cursor-pointer hover:text-primary transition-all duration-200"
              onClick={() =>
                document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" })
              } >
              <span className="invisible">Skills</span>
              <span className="absolute left-0 top-0">
                <ScrambleText text="Skills" />
              </span>
            </span>

            <span
              className="relative inline-block cursor-pointer hover:text-primary transition-all duration-200"
              onClick={() =>
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
              }>
              <span className="invisible">Projects</span>
              <span className="absolute left-0 top-0">
                <ScrambleText text="Projects" />
              </span>
            </span>

            <a
              href="/NguyenHoangDuyPhong_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block hover:text-primary transition-all duration-200">
              <span className="invisible">Resume</span>
              <span className="absolute left-0 top-0">
                <ScrambleText text="Resume" />
              </span>
            </a>

          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-50 group overflow-hidden font-semibold"
              onClick={handleTalkClick}
            >
              <WaveSlideText text="Let's Talk" />
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
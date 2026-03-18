"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LightningEffect from "@/components/LightningEffect";

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
        className="sticky border-b-1 border-black top-0 z-50 w-full backdrop-blur-md"
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
            }}
          >
            <div className="bg-black p-2 rounded-xl transition-all
  group-hover:scale-110 group-hover:rotate-12 shadow-md">
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
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

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <span
              className="hover:text-primary transition-colors cursor-pointer"
              onClick={() =>
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              About
            </span>

            <span
              className="hover:text-primary transition-colors cursor-pointer"
              onClick={() =>
                document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Skills
            </span>

            <span
              className="hover:text-primary transition-colors cursor-pointer"
              onClick={() =>
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Projects
            </span>

            <span
              className="hover:text-primary transition-colors cursor-pointer"
              onClick={() =>
                document.querySelector("#ai-tool")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <a
                href="/NguyenHoangDuyPhong_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Resume
              </a>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-50"
              onClick={handleTalkClick}
            >
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
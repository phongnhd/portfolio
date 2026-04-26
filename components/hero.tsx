"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ParticleNetwork } from '@/components/particle-network';

export function Hero() {
  return (
    <section className="relative bg-[#FAF8F3] overflow-hidden py-12 lg:py-28">

      <ParticleNetwork />

      <style>{`
        .btn-work {
          border: 2px solid #000 !important;
          box-shadow: 4px 4px 0 #000;
          transition: box-shadow 0.15s ease, transform 0.15s ease;
        }
        .btn-work:hover { background-color: inherit !important;
          box-shadow: 2px 2px 0 #000;
          transform: translate(2px, 2px);
        }
        @keyframes wobble {
          0%   { transform: rotate(0deg); }
          15%  { transform: rotate(-2deg); }
          30%  { transform: rotate(1.5deg); }
          45%  { transform: rotate(-1deg); }
          60%  { transform: rotate(0.8deg); }
          75%  { transform: rotate(-0.5deg); }
          90%  { transform: rotate(0.2deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes shadow-wobble {
          0%   { transform: rotate(0deg); }
          15%  { transform: rotate(2deg); }
          30%  { transform: rotate(-1.5deg); }
          45%  { transform: rotate(1deg); }
          60%  { transform: rotate(-0.8deg); }
          75%  { transform: rotate(0.5deg); }
          90%  { transform: rotate(-0.2deg); }
          100% { transform: rotate(0deg); }
        }
        .avatar-wrap:hover .avatar-frame {
          animation: wobble 0.8s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards;
          transform-origin: bottom center;
        }
        .avatar-wrap:hover .avatar-shadow {
          animation: shadow-wobble 0.8s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards;
          transform-origin: bottom center;
        }
      `}</style>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse items-center justify-between gap-12 lg:flex-row">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="mb-6 inline-flex items-center rounded-full border bg-secondary px-4 py-1.5 text-sm font-medium text-primary shadow-sm">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for New Projects
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl font-headline">
              Building Modern <br />
              <span className="bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">Web Applications</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
             Full-stack developer experienced in building scalable web applications using modern frontend and backend technologies.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Button asChild size="lg" className="btn-work bg-accent text-accent-foreground hover:bg-accent">
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" asChild className="rounded-full shadow-sm hover:text-primary transition-colors">
                  <a href="https://github.com/phongnhd" target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub profile"><Github className="h-5 w-5" /></a>
                </Button>
                <Button variant="outline" size="icon" asChild className="rounded-full shadow-sm hover:text-primary transition-colors">
                  <a href="https://www.linkedin.com/in/phongnhd/" target="_blank" rel="noopener noreferrer" aria-label="Visit my linkedin profile"><Linkedin className="h-5 w-5" /></a>
                </Button>
                <Button variant="outline" size="icon" asChild className="rounded-full shadow-sm hover:text-primary transition-colors">
                  <a href="#contact"><Mail className="h-5 w-5" /></a>
                </Button>
              </div>
            </div>
          </div>

          <div className="relative flex-shrink-0 avatar-wrap" style={{ padding: "14px 0 0 14px" }}>
            <div
              className="avatar-shadow absolute h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 rounded-full"
              style={{ top: 14, left: 14, background: "#000", zIndex: 0 }}
            />
            <div
              className="avatar-frame relative h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 overflow-hidden rounded-full"
              style={{ border: "3px solid #000", zIndex: 1 }}
            >
              <div
                className="avatar-img"
                onContextMenu={(e) => e.preventDefault()}
                style={{ width: "100%", height: "100%", position: "relative" }}
              >
                <Image
                  src="/image.png"
                  alt="Profile Photo"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute top-0 right-0 -z-10 h-full w-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-primary/5"></div>
    </section>
  );
}

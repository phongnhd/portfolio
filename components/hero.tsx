
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ParticleNetwork } from '@/components/particle-network';

export function Hero() {
  const profileImg = PlaceHolderImages.find(img => img.id === 'profile-pic');

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Interactive Particle Network Background */}
      <ParticleNetwork />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse items-center justify-between gap-12 lg:flex-row">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="mb-6 inline-flex items-center rounded-full border bg-secondary px-4 py-1.5 text-sm font-medium text-primary shadow-sm">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for New Projects
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl font-headline">
              Crafting Digital <br />
              <span className="text-primary">Experiences</span> with Code
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Full-stack developer specializing in building exceptional digital products. 
              Turning complex problems into elegant, user-centric solutions.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg">
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" asChild className="rounded-full shadow-sm hover:text-primary transition-colors">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer"><Github className="h-5 w-5" /></a>
                </Button>
                <Button variant="outline" size="icon" asChild className="rounded-full shadow-sm hover:text-primary transition-colors">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin className="h-5 w-5" /></a>
                </Button>
                <Button variant="outline" size="icon" asChild className="rounded-full shadow-sm hover:text-primary transition-colors">
                  <a href="#contact"><Mail className="h-5 w-5" /></a>
                </Button>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-primary/10 blur-3xl opacity-50"></div>
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white shadow-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              <Image 
                src={profileImg?.imageUrl || ''} 
                alt="Developer Portrait" 
                fill 
                className="object-cover"
                data-ai-hint="developer portrait"
              />
            </div>
            {/* Additional floating shape near profile */}
            <div className="absolute -top-4 -right-4 h-16 w-16 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 h-full w-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-primary/5"></div>
    </section>
  );
}

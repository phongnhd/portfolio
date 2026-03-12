
"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { User, Rocket, Target, Briefcase } from 'lucide-react';

export function About() {
  const stats = [
    { icon: Rocket, label: 'Projects Completed', value: '50+' },
    { icon: Briefcase, label: 'Years Experience', value: '5+' },
    { icon: Target, label: 'Client Satisfaction', value: '100%' },
  ];

  return (
    <section id="about" className="py-24 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-headline sm:text-4xl">About Me</h2>
          <div className="mt-2 h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <User className="text-primary h-6 w-6" /> 
              My Journey
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm a passionate Software Engineer with a focus on building scalable web applications. 
              My journey started with a curiosity for how things work on the internet, 
              which led me to pursue a degree in Computer Science.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Over the years, I've worked with startups and established companies, 
              helping them bridge the gap between complex requirements and high-performance applications. 
              My goal is always to deliver clean, maintainable code that solves real-world problems.
            </p>
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="p-4 bg-background rounded-xl border text-center hover:shadow-md transition-shadow">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-primary/5 rounded-3xl p-8 lg:p-12 border border-primary/10">
              <h3 className="text-2xl font-semibold mb-6 font-headline">Career Aspirations</h3>
              <ul className="space-y-4">
                {[
                  "Leading innovative engineering teams to build impactful products.",
                  "Mastering cloud-native architectures and distributed systems.",
                  "Contributing to open-source projects that empower developers worldwide.",
                  "Exploring the intersection of AI and user interface design."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

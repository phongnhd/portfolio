
"use client";

import React from 'react';
import { Terminal, Database, Layers, Monitor, Cpu, Globe } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Monitor,
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    },
    {
      title: 'Backend Systems',
      icon: Database,
      skills: ['Node.js', 'PostgreSQL', 'Redis', 'GraphQL', 'Prisma']
    },
    {
      title: 'Cloud & DevOps',
      icon: Globe,
      skills: ['AWS', 'Docker', 'Vercel', 'GitHub Actions', 'Terraform']
    },
    {
      title: 'Mobile & AI',
      icon: Cpu,
      skills: ['React Native', 'OpenAI API', 'TensorFlow.js', 'Expo']
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-headline sm:text-4xl">Skills & Technologies</h2>
          <div className="mt-2 h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-2xl bg-card border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-6 inline-flex p-3 rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-headline">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Projects() {
  const projects = [
    {
      id: 'project-1',
      title: 'VentureDash',
      description: 'A comprehensive management dashboard for venture capital firms to track portfolio performance and investment pipelines.',
      tech: ['React', 'Next.js', 'PostgreSQL', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 'project-2',
      title: 'SocialPulse',
      description: 'AI-driven social media sentiment analysis tool providing real-time brand perception metrics and automated reporting.',
      tech: ['Python', 'FastAPI', 'Redis', 'OpenAI'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 'project-3',
      title: 'FitSphere',
      description: 'Community-focused fitness application with real-time workout synchronization and peer-to-peer coaching features.',
      tech: ['React Native', 'Firebase', 'Expo', 'Node.js'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-3xl font-bold font-headline sm:text-4xl">Featured Projects</h2>
            <div className="mt-2 h-1.5 w-20 bg-primary rounded-full"></div>
            <p className="mt-4 text-muted-foreground max-w-xl text-lg">
              A selection of my recent works ranging from full-stack applications to niche technical tools.
            </p>
          </div>
          <Button variant="outline" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View All on GitHub <Github className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const img = PlaceHolderImages.find(i => i.id === project.id);
            return (
              <Card key={idx} className="overflow-hidden flex flex-col group h-full">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image 
                    src={img?.imageUrl || ''} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={img?.imageHint}
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <Button variant="secondary" size="sm" asChild className="rounded-full shadow-lg">
                      <a href={project.liveUrl}><ExternalLink className="h-4 w-4 mr-2" /> Live Demo</a>
                    </Button>
                  </div>
                </div>
                <CardHeader className="flex-1">
                  <div className="flex gap-2 mb-3">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/5 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <CardTitle className="text-xl font-headline group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                <CardFooter className="pt-0 border-t mt-auto py-4">
                  <div className="flex items-center gap-4 w-full justify-between">
                    <a href={project.githubUrl} className="text-sm font-medium flex items-center hover:text-primary transition-colors">
                      <Github className="h-4 w-4 mr-2" /> Source Code
                    </a>
                    <a href={project.liveUrl} className="text-sm font-medium flex items-center text-accent hover:underline">
                      View Project <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

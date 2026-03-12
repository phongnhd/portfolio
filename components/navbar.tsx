
"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Code } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-lg transition-transform group-hover:scale-110">
            <Code className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight font-headline">MyDevFolio</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#about" className="hover:text-primary transition-colors">About</Link>
          <Link href="#skills" className="hover:text-primary transition-colors">Skills</Link>
          <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
          <Link href="#ai-tool" className="hover:text-primary transition-colors">AI Assistant</Link>
        </div>

        <div className="flex items-center gap-4">
          <Button asChild variant="default" className="bg-accent hover:bg-accent/90">
            <Link href="#contact">Hire Me</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

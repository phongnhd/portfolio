"use client";

import React, { useEffect, useRef } from 'react';

export function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const connectionDistance = 150;
    
    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 120 
    };

    const colors = [
      'rgba(124, 58, 237, 0.8)',
      'rgba(59, 130, 246, 0.8)',
      'rgba(239, 68, 68, 0.8)',
      'rgba(245, 158, 11, 0.8)',
      'rgba(34, 197, 94, 0.8)',
    ];

    const isMobile = () => window.innerWidth < 640;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      glowIntensity: number = 0;
      isNearMouse: boolean = false;
      pulsePhase: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.size = Math.random() * 2 + 1.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (isMobile()) {
          const pulse = Math.sin(Date.now() / 800 + this.pulsePhase) * 0.2 + 0.8;
          this.glowIntensity = pulse;
          this.isNearMouse = false;
        } else {
          if (mouse.x !== null && mouse.y !== null) {
            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < mouse.radius && distance > 1) {
              this.isNearMouse = true;
              const force = (mouse.radius - distance) / mouse.radius;
              
              const repulsionStrength = 1.8; 
              this.x += (dx / distance) * force * repulsionStrength;
              this.y += (dy / distance) * force * repulsionStrength;
              
              this.glowIntensity = force * 1.5;
            } else {
              this.isNearMouse = false;
              this.glowIntensity *= 0.92;
            }
          } else {
            this.isNearMouse = false;
            this.glowIntensity *= 0.92;
          }
        }

        if (this.x < 0) this.x = canvas!.width;
        if (this.x > canvas!.width) this.x = 0;
        if (this.y < 0) this.y = canvas!.height;
        if (this.y > canvas!.height) this.y = 0;
      }

      draw() {
        if (!ctx) return;
        
        ctx.beginPath();
        
        if (this.glowIntensity > 0.05) {
          ctx.shadowBlur = 20 * this.glowIntensity;
          ctx.shadowColor = this.color;
        }

        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.shadowBlur = 0;
      }
    }

    const getParticleCount = () => {
      const width = window.innerWidth;
      if (width < 640) return 40;
      if (width < 1024) return 80;
      return 120;
    };

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: getParticleCount() }, () => new Particle());
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            
            if (isMobile()) {
              const avgGlow = (particles[i].glowIntensity + particles[j].glowIntensity) / 2;
              const opacity = (1 - distance / connectionDistance) * 1.0 * avgGlow;
              
              const gradient = ctx.createLinearGradient(
                particles[i].x, particles[i].y, 
                particles[j].x, particles[j].y
              );
              gradient.addColorStop(0, particles[i].color);
              gradient.addColorStop(1, particles[j].color);
              
              ctx.strokeStyle = gradient;
              ctx.lineWidth = 2.0;
              ctx.globalAlpha = Math.min(opacity, 0.8);
            } else {
              let opacityMultiplier = 1;
              if (particles[i].isNearMouse || particles[j].isNearMouse) {
                opacityMultiplier = 3.5;
              }

              const opacity = (1 - (distance / connectionDistance)) * 0.15 * opacityMultiplier;
              
              if (particles[i].isNearMouse || particles[j].isNearMouse) {
                ctx.strokeStyle = particles[i].color.replace('0.8)', `${Math.min(opacity, 0.8)})`);
                ctx.lineWidth = 1.0;
              } else {
                ctx.strokeStyle = `rgba(180, 180, 180, ${opacity})`;
                ctx.lineWidth = 0.4;
              }
            }
            
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => init();

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile()) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      }
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none opacity-80"
    />
  );
}
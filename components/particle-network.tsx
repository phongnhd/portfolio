
"use client";

import React, { useEffect, useRef } from 'react';

/**
 * ParticleNetwork component
 * Tạo một nền canvas tương tác với mạng lưới hạt luôn chuyển động.
 * Các hạt sẽ phát sáng rực rỡ và bị ĐẨY RA (repulsion) khi chuột ở gần (bán kính 120).
 * Số lượng hạt tự động điều chỉnh theo Desktop (120), Tablet (80), Mobile (40).
 */
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
      'rgba(124, 58, 237, 0.8)', // Violet (Primary)
      'rgba(59, 130, 246, 0.8)',  // Blue (Accent)
      'rgba(239, 68, 68, 0.8)',   // Red
      'rgba(245, 158, 11, 0.8)',  // Amber
      'rgba(34, 197, 94, 0.8)',   // Green
    ];

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      glowIntensity: number = 0;
      isNearMouse: boolean = false;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        // Vận tốc trôi tự nhiên
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.size = Math.random() * 2 + 1.5;
        const colorIdx = Math.floor(Math.random() * colors.length);
        this.color = colors[colorIdx];
      }

      update() {
        // Luôn chuyển động trôi tự nhiên
        this.x += this.vx;
        this.y += this.vy;

        // Tương tác đẩy (repulsion) rực rỡ khi chuột ở gần
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius && distance > 1) {
            this.isNearMouse = true;
            const force = (mouse.radius - distance) / mouse.radius;
            
            // Lực đẩy ra xa con trỏ (repulsion) mượt mà
            const repulsionStrength = 1.8; 
            this.x += (dx / distance) * force * repulsionStrength;
            this.y += (dy / distance) * force * repulsionStrength;
            
            // Cường độ phát sáng tăng mạnh dựa trên khoảng cách
            this.glowIntensity = force * 1.5;
          } else {
            this.isNearMouse = false;
            this.glowIntensity *= 0.92; 
          }
        } else {
          this.isNearMouse = false;
          this.glowIntensity *= 0.92;
        }

        // Tự động quay lại khi ra khỏi màn hình (Wrap around)
        if (this.x < 0) this.x = canvas!.width;
        if (this.x > canvas!.width) this.x = 0;
        if (this.y < 0) this.y = canvas!.height;
        if (this.y > canvas!.height) this.y = 0;
      }

      draw() {
        if (!ctx) return;
        
        ctx.beginPath();
        
        // Hiệu ứng phát sáng hạt rực rỡ
        if (this.glowIntensity > 0.05) {
          ctx.shadowBlur = 20 * this.glowIntensity;
          ctx.shadowColor = this.color;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.shadowBlur = 0;
      }
    }

    const getParticleCount = () => {
      if (typeof window === 'undefined') return 120;
      const width = window.innerWidth;
      if (width < 640) return 40;   // Mobile
      if (width < 1024) return 80;  // Tablet
      return 120;                   // Desktop
    };

    const init = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      const count = getParticleCount();
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      // Vẽ các đường nối mạng lưới sáng hơn khi có tương tác
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            
            let opacityMultiplier = 1;
            if (particles[i].isNearMouse || particles[j].isNearMouse) {
              opacityMultiplier = 3.5; // Sáng hơn hẳn khi ở gần chuột
            }

            const opacity = (1 - (distance / connectionDistance)) * 0.15 * opacityMultiplier;
            
            if (particles[i].isNearMouse || particles[j].isNearMouse) {
              ctx.strokeStyle = particles[i].color.replace('0.8)', `${Math.min(opacity, 0.8)})`);
              ctx.lineWidth = 1.0;
            } else {
              ctx.strokeStyle = `rgba(180, 180, 180, ${opacity})`;
              ctx.lineWidth = 0.4;
            }
            
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      init();
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
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
    
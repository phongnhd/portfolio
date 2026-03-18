"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { cn } from '@/lib/utils';

interface PixelPreloaderProps {
  onComplete?: () => void;
  gridSize?: number;
}

export function PixelPreloader({ 
  onComplete, 
  gridSize = 10 
}: PixelPreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const effectiveGridSize = useMemo(() => {
    return isMobile ? Math.floor(gridSize / 2) : gridSize;
  }, [isMobile, gridSize]);

  const totalBlocks = useMemo(() => effectiveGridSize * effectiveGridSize, [effectiveGridSize]);

  const randomOrder = useMemo(() => {
    const indices = Array.from(Array(totalBlocks).keys());
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  }, [totalBlocks]);

  useEffect(() => {
    const handleReveal = () => {
      const startTimeout = setTimeout(() => {
        setIsExiting(true);
        if (onComplete) onComplete();
        
        const cleanupTimeout = setTimeout(() => setIsVisible(false), 1000);
        return () => clearTimeout(cleanupTimeout);
      }, 1000); 
      
      return () => clearTimeout(startTimeout);
    };

    if (document.readyState === 'complete') {
      handleReveal();
    } else {
      window.addEventListener('load', handleReveal);
      const safetyTimeout = setTimeout(handleReveal, 4000);
      return () => {
        window.removeEventListener('load', handleReveal);
        clearTimeout(safetyTimeout);
      };
    }
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className={cn(
        "fixed inset-0 z-[9999] overflow-hidden flex",
        isExiting ? "pointer-events-none" : "pointer-events-auto"
      )}
    >
      <div 
        className="grid w-full h-full bg-transparent"
        style={{
          gridTemplateColumns: `repeat(${effectiveGridSize}, 1fr)`,
          gridTemplateRows: `repeat(${effectiveGridSize}, 1fr)`,
        }}
      >
        {[...Array(totalBlocks)].map((_, i) => (
          <div 
            key={i} 
            className={cn(
              "bg-black transition-all duration-300 ease-in-out",
              isExiting ? "opacity-0" : "opacity-100"
            )}
            style={{ 
              transitionDelay: `${isExiting ? (randomOrder[i] / totalBlocks) * 1.2 : 0}s` 
            }}
          />
        ))}
      </div>
      
      {!isExiting && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black">
          <div className="text-white font-code text-[10px] sm:text-[12px] tracking-[0.6em] animate-pulse uppercase mb-4 sm:mb-6 opacity-80">
            Initializing_Core_System...
          </div>
          
          <div className="w-40 sm:w-56 md:w-64 lg:w-72 h-[3px] bg-white/5 overflow-hidden relative border border-white/5 rounded-full">
            <div className="absolute inset-y-0 left-0 bg-purple-600 origin-left animate-loading-run w-full" />
          </div>
          
          <div className="mt-3 sm:mt-4 text-white/30 font-code text-[8px] sm:text-[9px] uppercase tracking-widest">
            Loading_Assets
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes loading-run {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(1); }
          100% { transform: scaleX(0); }
        }
        .animate-loading-run {
          animation: loading-run 2s ease-in-out infinite;
        }
        
        /* Landscape orientation adjustments for mobile */
        @media (max-height: 500px) and (orientation: landscape) {
          .animate-pulse {
            margin-bottom: 0.5rem !important;
          }
          
          .w-40 {
            width: 8rem !important;
          }
          
          .mt-3 {
            margin-top: 0.25rem !important;
          }
        }
        
        @media (max-height: 400px) and (orientation: landscape) {
          .text-white.font-code {
            font-size: 8px !important;
          }
          
          .mt-3 {
            margin-top: 0.15rem !important;
          }
        }
      `}</style>
    </div>
  );
}
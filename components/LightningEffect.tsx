"use client";

import { useEffect, useRef } from "react";

export default function LightningEffect({ onEnd }: { onEnd: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const context = ctx;
    const canvasEl = canvas;

    const pts = [
      { x: 130, y: 0 },
      { x: 60, y: 200 },
      { x: 130, y: 200 },
      { x: 60, y: 400 },
    ];

    const scaleX = canvasEl.width / 200;
    const scaleY = canvasEl.height / 400;

    function segLen(i: number) {
      const a = pts[i], b = pts[i + 1];
      return Math.hypot((b.x - a.x) * scaleX, (b.y - a.y) * scaleY);
    }

    const lens = [0, 1, 2].map(segLen);
    const totalLen = lens.reduce((a, b) => a + b, 0);
    const cumLen = [0, lens[0], lens[0] + lens[1], totalLen];

    function pointAt(d: number): { x: number; y: number } {
      for (let i = 0; i < 3; i++) {
        if (d <= cumLen[i + 1]) {
          const t = (d - cumLen[i]) / lens[i];
          const a = pts[i], b = pts[i + 1];
          return {
            x: (a.x + (b.x - a.x) * t) * scaleX,
            y: (a.y + (b.y - a.y) * t) * scaleY,
          };
        }
      }
      return { x: pts[3].x * scaleX, y: pts[3].y * scaleY };
    }

    function widthAt(d: number) {
      const t = d / totalLen;
      return 14 * (1 - t) + 3 * t;
    }

    const STEPS = 120;
    const allPts = Array.from({ length: STEPS + 1 }, (_, i) =>
      pointAt((i / STEPS) * totalLen)
    );

    const STREAK_FRAMES = 7;
    const HOLD_FRAMES = 10;
    const FADE_FRAMES = 20;

    let frame = 0;
    let phase: "streak" | "hold" | "fade" = "streak";
    let raf: number;

    function drawBolt(endStep: number, alpha: number) {
      if (endStep < 1) return;

      for (let i = 1; i <= endStep; i++) {
        const d = (i / STEPS) * totalLen;
        const w = widthAt(d);
        const prev = allPts[i - 1];
        const curr = allPts[i];

        context.beginPath();
        context.moveTo(prev.x, prev.y);
        context.lineTo(curr.x, curr.y);
        context.strokeStyle = `rgba(255, 200, 0, ${alpha * 0.25})`;
        context.lineWidth = w * 4;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.stroke();

        context.beginPath();
        context.moveTo(prev.x, prev.y);
        context.lineTo(curr.x, curr.y);
        const tNorm = (i - 1) / STEPS;
        const r = 255;
        const g = Math.round(220 - tNorm * 80);
        context.strokeStyle = `rgba(${r}, ${g}, 0, ${alpha})`;
        context.lineWidth = w;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.stroke();

        if (tNorm < 0.5) {
          context.beginPath();
          context.moveTo(prev.x, prev.y);
          context.lineTo(curr.x, curr.y);
          context.strokeStyle = `rgba(255, 255, 180, ${
            alpha * (1 - tNorm * 2) * 0.6
          })`;
          context.lineWidth = w * 0.3;
          context.lineCap = "round";
          context.stroke();
        }
      }
    }

    function animate() {
      context.clearRect(0, 0, canvasEl.width, canvasEl.height);

      if (phase === "streak") {
        const endStep = Math.floor((frame / STREAK_FRAMES) * STEPS);
        drawBolt(Math.min(endStep, STEPS), 1);
        if (frame >= STREAK_FRAMES) {
          phase = "hold";
          frame = 0;
        }
      } else if (phase === "hold") {
        drawBolt(STEPS, 1);
        if (frame >= HOLD_FRAMES) {
          phase = "fade";
          frame = 0;
        }
      } else {
        const alpha = 1 - frame / FADE_FRAMES;
        if (alpha > 0) drawBolt(STEPS, alpha);
        if (frame >= FADE_FRAMES) {
          context.clearRect(0, 0, canvasEl.width, canvasEl.height);
          return;
        }
      }

      frame++;
      raf = requestAnimationFrame(animate);
    }

    raf = requestAnimationFrame(animate);
    const timer = setTimeout(() => onEnd(), 900);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [onEnd]);

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center">
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
      <canvas
        ref={canvasRef}
        width={150}
        height={400}
        className="h-[80vh] rotate-[25deg]"
        style={{ width: "auto" }}
      />
    </div>
  );
}
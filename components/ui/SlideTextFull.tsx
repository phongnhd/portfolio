"use client";

export function WaveSlideText({ text }: { text: string }) {
  return (
    <span className="inline-flex overflow-hidden group">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="relative inline-block h-[1.2em] overflow-hidden"
        >
          <span
            className="block transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full"
            style={{
              transitionDelay: `${i * 10}ms`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>

          <span
            className="absolute left-0 top-full block transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full"
            style={{
              transitionDelay: `${i * 10}ms`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
    </span>
  );
}
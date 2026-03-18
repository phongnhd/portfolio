"use client";

import { Github } from "lucide-react";

export default function FloatingIcon() {
  return (
    <div className="relative w-8 h-8 flex items-center justify-center">

      <style>
        {`
        @keyframes assemble-tl {
          0% { transform: translate(-30px, -30px); opacity: 0; }
          30% { transform: translate(0,0); opacity: 1; }   
          70% { transform: translate(0,0); opacity: 1; }  
          100% { transform: translate(-30px, -30px); opacity: 0; }
        }

        @keyframes assemble-tr {
          0% { transform: translate(30px, -30px); opacity: 0; }
          30% { transform: translate(0,0); opacity: 1; }
          70% { transform: translate(0,0); opacity: 1; }
          100% { transform: translate(30px, -30px); opacity: 0; }
        }

        @keyframes assemble-bl {
          0% { transform: translate(-30px, 30px); opacity: 0; }
          30% { transform: translate(0,0); opacity: 1; }
          70% { transform: translate(0,0); opacity: 1; }
          100% { transform: translate(-30px, 30px); opacity: 0; }
        }

        @keyframes assemble-br {
          0% { transform: translate(30px, 30px); opacity: 0; }
          30% { transform: translate(0,0); opacity: 1; }
          70% { transform: translate(0,0); opacity: 1; }
          100% { transform: translate(30px, 30px); opacity: 0; }
        }
      `}
      </style>

      <div
        className="absolute"
        style={{
          animation: "assemble-tl 3s ease-in-out infinite",
          clipPath: "inset(0 50% 50% 0)",
        }}
      >
        <Github className="w-10 h-10 text-black" />
      </div>

      <div
        className="absolute"
        style={{
          animation: "assemble-tr 3s ease-in-out 0.1s infinite",
          clipPath: "inset(0 0 50% 50%)",
        }}
      >
        <Github className="w-10 h-10 text-black" />
      </div>

      <div
        className="absolute"
        style={{
          animation: "assemble-bl 3s ease-in-out 0.2s infinite",
          clipPath: "inset(50% 50% 0 0)",
        }}
      >
        <Github className="w-10 h-10 text-black" />
      </div>

      <div
        className="absolute"
        style={{
          animation: "assemble-br 3s ease-in-out 0.3s infinite",
          clipPath: "inset(50% 0 0 50%)",
        }}
      >
        <Github className="w-10 h-10 text-black" />
      </div>

    </div>
  );
}
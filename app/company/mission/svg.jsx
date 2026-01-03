import React from "react";

export default function Checkbox({ size = 220 }) {
  return (
    <div className="flex items-center justify-center font-sans">
      {/* Local styles (safe for reuse) */}
      <style>{`
        @keyframes drawStroke {
          0% { stroke-dashoffset: 250; }
          100% { stroke-dashoffset: 0; }
        }

        @keyframes scaleIn {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        .animate-scale-in {
          animation: scaleIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        .animate-draw-stroke {
          stroke-dasharray: 250;
          stroke-dashoffset: 250;
          animation: drawStroke 0.8s ease-out 0.3s forwards;
        }
      `}</style>

      <div
        className="animate-scale-in"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="-10 -20 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="boxShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="0"
                dy="4"
                stdDeviation="3"
                floodColor="#000"
                floodOpacity="0.05"
              />
            </filter>

            <linearGradient id="boxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#f3f4f6" stopOpacity="0.8" />
            </linearGradient>

            <linearGradient id="tickGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#15803d" />
              <stop offset="100%" stopColor="#4ade80" />
            </linearGradient>

            <filter id="tickGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="0"
                dy="4"
                stdDeviation="3"
                floodColor="#166534"
                floodOpacity="0.3"
              />
            </filter>

            <mask id="tickMask">
              <path
                className="animate-draw-stroke"
                d="M 28 58 L 48 82 L 110 5"
                stroke="white"
                strokeWidth="40"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </mask>
          </defs>

          <rect
            x="15"
            y="25"
            width="70"
            height="70"
            rx="10"
            fill="url(#boxGradient)"
            stroke="white"
            strokeWidth="2"
            filter="url(#boxShadow)"
          />

          <path
            d="M 28 58 C 28 58, 40 70, 44 82 C 46 88, 52 88, 54 82
               C 65 60, 95 25, 115 5 C 118 2, 112 -2, 108 2
               C 80 30, 55 65, 50 75 C 48 68, 40 58, 35 52
               C 32 48, 28 58, 28 58 Z"
            fill="url(#tickGradient)"
            filter="url(#tickGlow)"
            mask="url(#tickMask)"
          />
        </svg>
      </div>
    </div>
  );
}

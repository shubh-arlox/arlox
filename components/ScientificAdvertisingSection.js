// components/ScientificAdvertisingSection.js
"use client";

import { Beaker, Repeat, LineChart } from "lucide-react";

export default function ScientificAdvertisingSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 grid gap-10 md:grid-cols-2 items-center">
      {/* LEFT: Text */}
      <div className="space-y-5">
        <div>
          <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-wide">
            <span className="text-[#1b2a4a]">Scientific </span>
            <span className="text-[#1b2a4a]">Advertising</span>
          </h2>
          <p className="text-2xl md:text-3xl text-[#5c6a8c] font-semibold mt-1">
            Not Magic Engineering
          </p>
        </div>

        <p className="text-sm md:text-base text-[#26334f] leading-relaxed">
          In today&apos;s AI age, intuition isn&apos;t enough. We are{" "}
          <span className="font-semibold text-[#1b2a4a]">
            Scientific Advertisers
          </span>
          . We don&apos;t just &quot;run ads&quot; – we hypothesize, test,
          measure, and iterate angles, avatars and hooks.
        </p>

        <p className="text-sm md:text-base text-[#26334f] leading-relaxed">
          Traditional agencies see a failed campaign as a loss. We see it as a
          data point that refines the next hypothesis. We blend empirical
          evidence with creative intuition to build a dialogue with your
          customers, not a monologue.
        </p>

        <button className="button-neumorphic mt-4 px-7 py-3 text-sm md:text-base font-semibold rounded-full shadow-neumorphic hover:scale-105 transition-transform text-[#1b2a4a]">
          Start Scaling Today
        </button>
      </div>

      {/* RIGHT: Growth Engine circle */}
      <div className="flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#cfd8f3] via-[#dfe5ff] to-[#f4f7ff] shadow-[0_24px_60px_rgba(24,35,74,0.35)] flex items-center justify-center">
          {/* inner soft circle */}
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-white shadow-[0_18px_40px_rgba(24,35,74,0.28)] flex items-center justify-center border border-white/60">
            <span className="text-sm md:text-base font-semibold text-[#1b2a4a] text-center tracking-wide">
              Growth
              <br />
              ENGINE
            </span>
          </div>

          {/* Top: Hypothesize */}
          <div className="absolute -top-4 md:-top-6 left-1/2 -translate-x-1/2">
            <div className="w-18 h-18 md:w-20 md:h-20 rounded-full bg-white shadow-[0_10px_25px_rgba(24,35,74,0.35)] flex flex-col items-center justify-center text-[#1b2a4a] text-[10px] md:text-xs border border-white/70">
              <Beaker className="w-4 h-4 md:w-5 md:h-5 mb-1" />
              <span>Hypothesize</span>
            </div>
          </div>

          {/* Right: Iterate */}
          <div className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2">
            <div className="w-18 h-18 md:w-20 md:h-20 rounded-full bg-white shadow-[0_10px_25px_rgba(24,35,74,0.35)] flex flex-col items-center justify-center text-[#1b2a4a] text-[10px] md:text-xs border border-white/70">
              <Repeat className="w-4 h-4 md:w-5 md:h-5 mb-1" />
              <span>Iterate</span>
            </div>
          </div>

          {/* Bottom: Measure */}
          <div className="absolute -bottom-4 md:-bottom-6 left-1/2 -translate-x-1/2">
            <div className="w-18 h-18 md:w-20 md:h-20 rounded-full bg-white shadow-[0_10px_25px_rgba(24,35,74,0.35)] flex flex-col items-center justify-center text-[#1b2a4a] text-[10px] md:text-xs border border-white/70">
              <LineChart className="w-4 h-4 md:w-5 md:h-5 mb-1" />
              <span>Measure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

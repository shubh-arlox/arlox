// components/ScientificAdvertisingSection.js
"use client";

import { Beaker, Repeat, LineChart } from "lucide-react";
import WhatsappCTA from "./WhatsAppCTA";

export default function ScientificAdvertisingSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 grid gap-12 md:grid-cols-2 items-center">
      {/* LEFT: Text block */}
      <div className="space-y-5">
        <div>
          <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-wide">
            <span className="text-[#1f2933]">Scientific </span>
            <span className="text-[#1f2933]">Advertising</span>
          </h2>
          <p className="text-2xl md:text-3xl text-[#5f6c80] font-semibold mt-1">
            Not Magic Engineering
          </p>
        </div>

        <p className="text-sm md:text-base text-[#3b4254] leading-relaxed">
          In today&apos;s AI age, intuition isn&apos;t enough. We are{" "}
          <span className="font-semibold text-[#1f2933]">
            Scientific Advertisers
          </span>
          . We don&apos;t just &quot;run ads&quot; – we hypothesize, test,
          measure, and iterate angles, avatars and hooks.
        </p>

        <p className="text-sm md:text-base text-[#3b4254] leading-relaxed">
          Traditional agencies see a failed campaign as a loss. We see it as a
          data point that refines the next hypothesis. We blend empirical
          evidence with creative intuition to build a dialogue with your
          customers, not a monologue.
        </p>
<WhatsappCTA whatsappNumber="+919910220335" calendlyUrl="https://calendly.com/arlox-/strategy-call-1">
  <button className="button-neumorphic mt-4 px-7 py-3 text-sm md:text-base font-semibold rounded-full shadow-neumorphic hover:scale-105 transition-transform text-[#1f2933]">
    Start Scaling Today
  </button>
</WhatsappCTA>
      </div>

      {/* RIGHT: Growth Engine – greyish base with blue shadows */}
      <div className="flex justify-center">
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-[20rem] md:h-[20rem] lg:w-[22rem] lg:h-[22rem] flex items-center justify-center">
          {/* Outer disc */}
          <div
            className="absolute inset-0 rounded-full border border-white/70"
            style={{
              background: "linear-gradient(135deg, #C0C0C0, #E6E9F5)",
              boxShadow:
                "12px 12px 28px rgba(64,83,168,0.35), -10px -10px 24px rgba(255,255,255,0.95)",
            }}
          />

          {/* Middle disc */}
          <div
            className="absolute inset-5 sm:inset-6 md:inset-7 rounded-full border border-white/70"
            style={{
              background: "linear-gradient(135deg, #EFF1F6, #F7FAFF)",
              boxShadow:
                "7px 7px 18px rgba(79,99,184,0.26), -6px -6px 16px rgba(255,255,255,0.96)",
            }}
          />

          {/* Inner disc */}
          <div
            className="absolute inset-11 sm:inset-12 md:inset-13 rounded-full"
            style={{
              background: "linear-gradient(135deg, #F9FBFF, #FFFFFF)",
              boxShadow:
                "4px 4px 12px rgba(79,99,184,0.20), -4px -4px 10px rgba(255,255,255,0.98)",
            }}
          />

          {/* Center pill */}
          <div
            className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full flex items-center justify-center border border-white/85"
            style={{
              background: "linear-gradient(145deg, #FFFFFF, #ECF1FF)",
              boxShadow:
                "6px 6px 16px rgba(64,83,168,0.32), -6px -6px 18px rgba(255,255,255,0.98)",
            }}
          >
            <span className="text-[14px] sm:text-[15px] md:text-[17px] font-semibold text-[#1f2937] text-center tracking-wide leading-snug">
              Growth
              <br />
              ENGINE
            </span>
          </div>

          {/* Top: Hypothesize */}
          <div className="absolute -top-6 sm:-top-7 left-1/2 -translate-x-1/2">
            <div
              className="w-16 h-16 sm:w-[5.5rem] sm:h-[5.5rem] rounded-full flex flex-col items-center justify-center text-[9px] sm:text-[10px] md:text-xs border border-white/85"
              style={{
                background: "linear-gradient(145deg, #FFFFFF, #EDF1FF)",
                boxShadow:
                  "6px 6px 14px rgba(64,83,168,0.28), -5px -5px 14px rgba(255,255,255,0.98)",
              }}
            >
              <Beaker className="w-4 h-4 sm:w-5 sm:h-5 mb-1 text-[#243b76]" />
              <span className="text-[#243b76]">Hypothesize</span>
            </div>
          </div>

          {/* Left: Test */}
          <div className="absolute top-1/2 -left-6 sm:-left-7 -translate-y-1/2">
            <div
              className="w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] rounded-full flex flex-col items-center justify-center text-[9px] sm:text-[10px] md:text-xs border border-white/85"
              style={{
                background: "linear-gradient(145deg, #FFFFFF, #EDF1FF)",
                boxShadow:
                  "6px 6px 14px rgba(64,83,168,0.28), -5px -5px 14px rgba(255,255,255,0.98)",
              }}
            >
              <span className="text-lg sm:text-xl mb-0.5 text-[#243b76]">⚡</span>
              <span className="text-[#243b76]">Test</span>
            </div>
          </div>

          {/* Right: Iterate */}
          <div className="absolute top-1/2 -right-6 sm:-right-7 -translate-y-1/2">
            <div
              className="w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] rounded-full flex flex-col items-center justify-center text-[9px] sm:text-[10px] md:text-xs border border-white/85"
              style={{
                background: "linear-gradient(145deg, #FFFFFF, #EDF1FF)",
                boxShadow:
                  "6px 6px 14px rgba(64,83,168,0.28), -5px -5px 14px rgba(255,255,255,0.98)",
              }}
            >
              <Repeat className="w-4 h-4 sm:w-5 sm:h-5 mb-1 text-[#243b76]" />
              <span className="text-[#243b76]">Iterate</span>
            </div>
          </div>

          {/* Bottom: Measure */}
          <div className="absolute -bottom-6 sm:-bottom-7 left-1/2 -translate-x-1/2">
            <div
              className="w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] rounded-full flex flex-col items-center justify-center text-[9px] sm:text-[10px] md:text-xs border border-white/85"
              style={{
                background: "linear-gradient(145deg, #FFFFFF, #EDF1FF)",
                boxShadow:
                  "6px 6px 14px rgba(64,83,168,0.28), -5px -5px 14px rgba(255,255,255,0.98)",
              }}
            >
              <LineChart className="w-4 h-4 sm:w-5 sm:h-5 mb-1 text-[#243b76]" />
              <span className="text-[#243b76]">Measure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

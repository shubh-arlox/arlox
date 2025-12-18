// components/TrinitySection.js
"use client";

import { Zap, Shield, Lock, ArrowRight } from "lucide-react";
import WhatsappCTA from "./WhatsAppCTA";
import GlassButton from "./but";

const items = [
  {
    key: "mythos",
    icon: <Zap className="w-6 h-6 text-[#f59e0b]" />,
    title: "Mythos",
    label: "CREATIVE ADVANTAGE",
    labelColor: "#f59e0b",
    description:
      "Led by the Creative King. Weekly, high-performance ads with angles that cut through social feeds like lightning. Zero discount mania. Pure brand magnetism.",
  },
  {
    key: "sentinel",
    icon: <Shield className="w-6 h-6 text-[#2563eb]" />,
    title: "Sentinel",
    label: "SCIENTIFIC MEDIA BUYING",
    labelColor: "#2563eb",
    description:
      "Led by the Media Buyer. Daily performance logs and real-time data pivots. We guard your ROAS at all costs with relentless optimization across Meta & Google.",
  },
  {
    key: "vault",
    icon: <Lock className="w-6 h-6 text-[#22c55e]" />,
    title: "Vault",
    label: "BRAND VALUE ENGINE",
    labelColor: "#22c55e",
    description:
      "Led by the Conversion Expert. From site CRO to Email/WhatsApp flows, we turn traffic into loyal, high-LTV customers.",
  },
];

export default function TrinitySection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 space-y-8">
      {/* Top container */}
      <div className="bg-[#E0E5EC] rounded-[32px] shadow-[8px_8px_16px_rgba(90,90,90,0.20),-8px_-8px_16px_rgba(233,238,246,0.96)] px-6 md:px-12 py-10 border border-white/20">
        {/* Heading */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#404040] mb-3">
            The Arlox Scale Trinity™
          </h2>
          <p className="text-sm md:text-base text-[#787878]">
            We refuse to be just another marketing partner. We build a complete
            brand-scaling engine with three distinct pillars.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.key}
              className="bg-[#f2f2f2] rounded-[28px] px-4 py-6 md:px-5 md:py-7 shadow-[8px_8px_16px_rgba(90,90,90,0.20),-8px_-8px_16px_rgba(233,238,246,0.96)] flex flex-col border border-white/70"
            >
              {/* Icon block */}
              <div className="mb-5">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#f8f8f8] shadow-[6px_6px_14px_rgba(120,120,120,0.40),-6px_-6px_14px_rgba(255,255,255,1)]">
                  {item.icon}
                </div>
              </div>

              {/* Title + label */}
              <h3 className="text-base md:text-lg font-bold text-[#383838] mb-1">
                {item.title}
              </h3>
              <p
                className="text-[11px] md:text-xs font-semibold tracking-wide uppercase mb-3"
                style={{ color: item.labelColor }}
              >
                {item.label}
              </p>

              {/* Body */}
              <p className="text-xs md:text-sm text-[#787878] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

     {/* Bottom pill CTA */} 
<div className="flex justify-center px-4 sm:px-6">
  <div className="w-full max-w-6xl bg-[#E0E5EC] rounded-3xl sm:rounded-full shadow-[8px_8px_16px_rgba(90,90,90,0.20),-8px_-8px_16px_rgba(233,238,246,0.96)] px-4 sm:px-6 md:px-8 py-4 md:py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 border border-white/70">
    
    {/* Text Content */}
    <div className="flex-1 space-y-1.5 md:space-y-2">
      <p className="text-xs sm:text-sm md:text-base font-semibold text-[#404040] text-center md:text-left leading-snug">
        Plus Your Experienced Personal CMO to lead them for you
      </p>
      <p className="text-[10px] sm:text-[11px] md:text-xs text-center md:text-left text-[#787878] leading-relaxed">
        Your personal success strategist who orchestrates the trinity,
        ensuring you go from anxious to unstoppable.
      </p>
    </div>
    
    {/* Button Container */}
    <div className="flex items-center justify-center md:flex-shrink-0 mb-4">
      <WhatsappCTA 
        whatsappNumber="+919910220335" 
        calendlyUrl="https://calendly.com/arlox-/strategy-call-1"
      >
        <GlassButton 
          label="Start Scaling Today"  
          className="h-4 sm:h-5 transition-all duration-200"
          onClick={() => console.log('Focus mode toggled')}
        />
      </WhatsappCTA>
    </div>

  </div>
</div>


    </section>
  );
}

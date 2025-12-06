// components/FinalCtaSection.js
"use client";

import { ArrowRight } from "lucide-react";
import WhatsappCTA from "./WhatsAppCTA";

export default function FinalCtaSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#edf1f7] to-[#e4e8f0] py-16 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
        {/* Heading */}
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            <span className="block text-[#111827]">Stop Renting.</span>
            <span className="block bg-gradient-to-r from-[#2563eb] via-[#4f46e5] to-[#a855f7] bg-clip-text text-transparent">
              Start Owning.
            </span>
          </h2>
          <p className="mt-5 text-sm md:text-base text-[#6b7280] max-w-2xl mx-auto">
            We only work with brands ready to scale past $100k/month. If you
            are ready to build an asset, let&apos;s talk.
          </p>
        </div>

        {/* Buttons row */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* Primary CTA – neumorphic pill */}
          <WhatsappCTA whatsappNumber="+919910220335" calendlyUrl="https://calendly.com/arlox-/strategy-call-1">
          <button className="inline-flex items-center justify-center rounded-full bg-[#f5f6fa] px-9 py-3 shadow-[12px_12px_30px_rgba(163,175,195,0.5),-10px_-10px_26px_rgba(255,255,255,0.98)]">
            <span className="text-sm md:text-base font-semibold text-[#111827]">
              Start Scaling Today
            </span>
          </button>
          </WhatsappCTA>

          {/* Secondary link */}
          <button className="inline-flex items-center justify-center gap-2 text-sm md:text-base font-semibold text-[#4b5563]">
            <span>View Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

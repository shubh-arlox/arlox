// components/FinalCtaSection.js
"use client";

import { ArrowRight } from "lucide-react";
import WhatsappCTA from "./WhatsAppCTA";
import GlassButton from "./but";

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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 w-full sm:w-auto px-4 sm:px-0">
  
  {/* Primary CTA */}
  <div className="w-full sm:w-auto ">
    <WhatsappCTA 
      whatsappNumber="+919910220335" 
      calendlyUrl="https://calendly.com/arlox-/strategy-call-1"
    >
      <GlassButton 
        label="Start Scaling Today" 
        icon={ArrowRight} 
        className="h-4 sm:h-5 transition-all duration-200"
        onClick={() => console.log('Start Scaling clicked')}
      />
    </WhatsappCTA>
  </div>

  {/* Secondary CTA */}
  <div className="w-full sm:w-auto lg:px-0 lg:mt-0 px-20 mt-4">
    <GlassButton 
      label="View Case Studies"  
       icon={ArrowRight}
      className="h-4 sm:h-5 w-5 transition-all duration-200"
      onClick={() => window.location.href = '/results/case-studies'}
    />
  </div>
  
</div>

      </div>
    </section>
  );
}

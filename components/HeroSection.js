"use client";

import Image from "next/image";
import WhatsappCTA from "./WhatsAppCTA";
import { ArrowRight, ClipboardClock, Moon } from "lucide-react";
import GlassButton from "./but";

export default function HeroSection() {
  return (
    <section className="w-full pt-16 pb-10 flex flex-col items-center px-4 mt-8">
      {/* Heading */}
      <h1 className="text-center font-bold text-3xl md:text-5xl leading-tight mb-6">
        <span className="text-[#2f3f63] font-light block">
          Your AI-Powered
        </span>
        <span className="text-[#2f3f63] font-black tracking-wide underline decoration-[#2f3f63]/50">
          Scaling Partner
        </span>
      </h1>

      {/* Statue + CTA */}
      <div className="relative flex flex-col items-center w-full max-w-6xl">
        <Image
          src="/Roman_Hero.png"
          width={1200}
          height={1200}
          alt="Roman AI Statue"
          className="object-contain drop-shadow-xl w-full max-w-[500px] md:max-w-[900px] lg:max-w-[1000px]"
          priority
        />

        {/* Button overlay (both mobile and desktop) */}
        <div className="absolute flex justify-center bottom-4 sm:bottom-6 md:bottom-10 lg:bottom-12 left-1/2 -translate-x-1/2 z-10 w-[85%] sm:w-auto max-w-md"> 
  <WhatsappCTA 
    whatsappNumber="+919910220335" 
    calendlyUrl="https://calendly.com/arlox-/strategy-call-1"
  >
   <GlassButton 
  label="Start Scaling Today" 
  icon={ArrowRight} 
  className="h-4 sm:h-5 transition-all duration-200"
  buttonClassName="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base hover:scale-105 active:scale-100"
  onClick={() => console.log('Focus mode toggled')}
/>


    
  </WhatsappCTA>
</div>

      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import WhatsappCTA from "./WhatsAppCTA";

export default function HeroSection() {
  return (
    <section className="w-full pt-16 pb-10 flex flex-col items-center px-4">
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
      <div className="relative flex flex-col items-center w-full max-w-5xl">
        <Image
          src="/Roman_Hero.png"
          width={1200}
          height={1200}
          alt="Roman AI Statue"
          className="object-contain drop-shadow-xl w-full max-w-[500px] md:max-w-[720px]"
          priority
        />

        {/* Desktop / tablet overlay button */}
        <div className="hidden md:block absolute bottom-8">
          <WhatsappCTA 
            whatsappNumber="+919910220335" 
            calendlyUrl="https://calendly.com/arlox-/strategy-call-1"
          >
            <button
              className="
                button-neumorphic
                px-8 py-3
                text-base md:text-lg font-semibold
                rounded-xl
                shadow-neumorphic
                backdrop-blur-md
                bg-white/90
                hover:scale-105 transition-transform
              "
            >
              Start Scaling Today
            </button>
          </WhatsappCTA>
        </div>
      </div>

      {/* Mobile button (separate, under image) */}
      <div className="md:hidden mt-6">
        <WhatsappCTA 
          whatsappNumber="+919910220335" 
          calendlyUrl="https://calendly.com/arlox-/strategy-call-1"
        >
          <button
            className="
              button-neumorphic
              px-6 py-3
              text-base font-semibold
              rounded-xl
              shadow-neumorphic
              bg-white/80
            "
          >
            Start Scaling Today
          </button>
        </WhatsappCTA>
      </div>
    </section>
  );
}

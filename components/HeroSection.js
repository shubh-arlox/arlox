"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, X } from "lucide-react";

export default function HeroSection() {
  const [open, setOpen] = useState(false);

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
        <button
          onClick={() => setOpen(true)}
          className="
            button-neumorphic
            hidden md:inline-flex
            absolute bottom-8
            px-8 py-3
            text-base md:text-lg font-semibold
            rounded-xl
            shadow-neumorphic
            backdrop-blur-md
            bg-white/70
            hover:scale-105 transition-transform
          "
        >
          Start Scaling Today
        </button>
      </div>

      {/* Mobile button (separate, under image) */}
      <button
        onClick={() => setOpen(true)}
        className="
          button-neumorphic
          md:hidden
          mt-6
          px-6 py-3
          text-base font-semibold
          rounded-xl
          shadow-neumorphic
          bg-white/80
        "
      >
        Start Scaling Today
      </button>

      {/* Appointment Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <button
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-label="Close appointment modal"
          />

          {/* Modal */}
          <div className="relative z-10 w-full max-w-md bg-white/95 rounded-2xl p-6 shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-[#2f3f63]">
                Book an Appointment
              </h2>

              <button
                className="p-2 rounded-md hover:bg-gray-200"
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Options */}
            <div className="space-y-4">
              <a
                href="tel:+911234567890" // replace with real number
                className="flex items-center gap-3 p-4 button-neumorphic rounded-xl hover:scale-[1.02] transition-transform"
              >
                <Phone size={22} />
                <span className="text-base md:text-lg font-medium">Call Now</span>
              </a>

              <a
                href="mailto:info@arliox.io" // replace with real email
                className="flex items-center gap-3 p-4 button-neumorphic rounded-xl hover:scale-[1.02] transition-transform"
              >
                <Mail size={22} />
                <span className="text-base md:text-lg font-medium">Email Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

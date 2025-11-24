"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, X } from "lucide-react";

export default function HeroSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full pt-20 pb-10 flex flex-col items-center">
      
      {/* Heading */}
      <h1 className="text-center font-bold text-3xl md:text-5xl leading-tight mb-6">
        <span className="text-[#2f3f63] font-light block">
          Your AI-Powered
        </span>

        <span className="text-[#2f3f63] font-black tracking-wide underline decoration-[#2f3f63]/50">
          Scaling Partner
        </span>
      </h1>

      {/* Statue Container */}
      <div className="relative flex justify-center w-full max-w-4xl">
        <Image
          src="/Roman_Hero.png"
          width={1200}
          height={1200}
          alt="Roman AI Statue"
          className="object-contain drop-shadow-xl"
          priority
        />

        {/* Button overlay */}
        <button
          onClick={() => setOpen(true)}
          className="
            button-neumorphic
            absolute bottom-6
            px-8 py-3
            text-lg font-semibold
            rounded-xl
            shadow-neumorphic
            backdrop-blur-md
            bg-white/20
            hover:scale-105 transition-transform
          "
        >
          Start Scaling Today
        </button>
      </div>

      {/* Appointment Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Modal */}
          <div className="relative z-10 w-full max-w-md bg-white/90 rounded-2xl p-6 shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-[#2f3f63]">
                Book an Appointment
              </h2>

              <button
                className="p-2 rounded-md hover:bg-gray-200"
                onClick={() => setOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            {/* Options */}
            <div className="space-y-4">

              {/* Call Button */}
              <a
                href="tel:+911234567890" // 🔥 replace with your real number
                className="flex items-center gap-3 p-4 button-neumorphic rounded-xl cursor-pointer hover:scale-[1.02] transition-transform"
              >
                <Phone size={22} />
                <span className="text-lg font-medium">Call Now</span>
              </a>

              {/* Email Button */}
              <a
                href="mailto:info@arliox.io" // 🔥 replace with your real email
                className="flex items-center gap-3 p-4 button-neumorphic rounded-xl cursor-pointer hover:scale-[1.02] transition-transform"
              >
                <Mail size={22} />
                <span className="text-lg font-medium">Email Us</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

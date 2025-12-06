"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Mail, Phone, X } from "lucide-react";

/* Simple inline WhatsApp SVG component */
const WhatsappIcon = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...props} xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden>
    <path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2zM19 7.5c-2.4-3.9-8.7-3.9-12.4 0-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9 0-2.6-1-5.1-2.8-7z" />
  </svg>
);

export default function HeroSection() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // lock body scroll when modal open
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    // allow ESC key to close modal
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Replace these with your real values
  const calendlyUrl = "https://calendly.com/arlox-/strategy-call-1";
  const whatsappNumber = "9910220335"; // e.g. 919876543210
  const messages = [
  "Hey! I want to scale smarter, not harder. Can we talk?",
  "Quick question — can Arlox’s Scientific Positioning work for my brand?",
  "Hi! I'd like a quick audit of my marketing. What do you need from me?",
  "I’m ready to scale. Could you guide me through the next steps?",
  "Hello! Can you help me identify my Blue Swan advantage?"
];

const randomMessage = messages[Math.floor(Math.random() * messages.length)];

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(randomMessage)}`;

  const mailTo = "mailto:hello@arlox.io";

  return (
    <section className="w-full pt-16 pb-10 flex flex-col items-center px-4">
      {/* Heading */}
      <h1 className="text-center font-bold text-3xl md:text-5xl leading-tight mb-6">
        <span className="text-[#2f3f63] font-light block">Your AI-Powered</span>
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
            backdrop-blur-md
            bg-white/70
            hover:scale-105 transition-transform
          "
          aria-haspopup="dialog"
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
          bg-white/80
        "
      >
        Start Scaling Today
      </button>

      {/* Appointment Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Book an appointment"
        >
          {/* Overlay */}
          <button
            type="button"
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-label="Close modal"
          />

          {/* Modal */}
          <div className="relative z-10 w-full max-w-md bg-white/95 rounded-2xl p-6 shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-[#2f3f63]">Book an Appointment</h2>

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
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 button-neumorphic rounded-xl hover:scale-[1.02] transition-transform"
                aria-label="Book a call now on Calendly (opens in new tab)"
              >
                <Phone size={22} />
                <span className="text-base md:text-lg font-medium">Book Call Now</span>
              </a>

              <a
                href={whatsappUrl }
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 button-neumorphic rounded-xl hover:scale-[1.02] transition-transform"
                aria-label="Start WhatsApp chat (opens in new tab)"
              >
                <WhatsappIcon className="w-5 h-5" />
                <span className="text-base md:text-lg font-medium">Message on WhatsApp</span>
              </a>

            
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// components/WhatsAppCTA.jsx
"use client";

import { useState, useEffect } from "react";
import { Phone, X } from "lucide-react";

/* Inline WhatsApp SVG */
const WhatsappIcon = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...props} xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden>
    <path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2zM19 7.5c-2.4-3.9-8.7-3.9-12.4 0-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9 0-2.6-1-5.1-2.8-7z" />
  </svg>
);

/* Small helper: normalize phone -> digits only (E.164 without +) */
function normalizePhone(phone) {
  if (!phone) return "";
  return phone.replace(/\D/g, "");
}

/* Reusable component */
export default function WhatsAppCTA({
  whatsappNumber = "919910220335", // default (replace)
  calendlyUrl = "https://calendly.com/arlox-/strategy-call-1",
  buttonLabel = "Start Scaling Today",
  defaultMessages = [
    "Hey! I want to scale smarter, not harder. Can we talk?",
    "Quick question — can Arlox’s Scientific Positioning work for my brand?",
    "Hi! I'd like a quick audit of my marketing. What do you need from me?",
    "I’m ready to scale. Could you guide me through the next steps?",
    "Hello! Can you help me identify my Blue Swan advantage?"
  ],
}) {
  const [open, setOpen] = useState(false);
  const [randomMessage, setRandomMessage] = useState(defaultMessages[0]);

  useEffect(() => {
    // pick a random message once on mount/open for slight variety
    setRandomMessage(defaultMessages[Math.floor(Math.random() * defaultMessages.length)]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // lock body scroll when modal open
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const norm = normalizePhone(whatsappNumber);
  const waUrl = norm ? `https://wa.me/${norm}?text=${encodeURIComponent(randomMessage)}` : null;

  return (
    <>
      {/* Trigger button (you can place this wherever you want) */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="button-neumorphic mt-4 px-7 py-3 text-sm md:text-base font-semibold rounded-full shadow-neumorphic hover:scale-105 transition-transform text-[#1f2933]"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        {buttonLabel}
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Book an appointment">
          {/* overlay */}
          <button
            type="button"
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-label="Close modal"
          />

          <div className="relative z-10 w-full max-w-md bg-white/95 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-[#2f3f63]">Book an Appointment</h2>
              <button type="button" className="p-2 rounded-md hover:bg-gray-200" onClick={() => setOpen(false)} aria-label="Close">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 button-neumorphic rounded-xl hover:scale-[1.02] transition-transform"
                aria-label="Book a call (opens in new tab)"
              >
                <Phone size={22} />
                <span className="text-base md:text-lg font-medium">Book Call Now</span>
              </a>

              <a
                href={waUrl || "#"}
                onClick={() => !waUrl && alert("WhatsApp number not configured")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 button-neumorphic rounded-xl hover:scale-[1.02] transition-transform"
                aria-label="Message on WhatsApp (opens in new tab)"
              >
                <WhatsappIcon className="w-5 h-5" />
                <span className="text-base md:text-lg font-medium">Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

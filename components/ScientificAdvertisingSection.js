// components/ScientificAdvertisingSection.js
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Beaker, Repeat, LineChart, Phone, X } from "lucide-react";

/* -------------------- Whatsapp Icon -------------------- */
const WhatsappIcon = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...props} xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden>
    <path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2zM19 7.5c-2.4-3.9-8.7-3.9-12.4 0-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9 0-2.6-1-5.1-2.8-7z" />
  </svg>
);

/* -------------------- WhatsApp Composer Component -------------------- */
/* WhatsAppComposer (responsive & overflow-safe) */
const WhatsAppComposer = ({ phoneNumber, defaultMessage = "", onOpen }) => {
  const templates = [
    "Hi — I'd like to book a strategy call about growth.",
    "Hey team — I'm interested in your Scientific Positioning service.",
    "Hello — I want a quick audit of my ads and creative strategy.",
  ];
  const emojis = ["🚀", "📈", "💬", "🤝", "⚡"];

  const [message, setMessage] = useState(defaultMessage || templates[0]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const charLimit = 600;

  useEffect(() => {
    setCopied(false);
    setError("");
  }, [message]);

  const insertEmoji = (emoji) => {
    setMessage((m) => (m.length + emoji.length + 1 > charLimit ? m : m + " " + emoji));
  };

  const handleSelectTemplate = (t) => {
    setSelectedTemplate(t);
    setMessage(t);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  };

  const buildWaUrl = () => {
    const normalized = (phoneNumber || "").replace(/\D/g, "");
    if (!normalized) {
      setError("Phone number not configured.");
      return null;
    }
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${normalized}?text=${encoded}`;
  };

  const handleOpenWhatsApp = () => {
    setError("");
    const url = buildWaUrl();
    if (!url) return;
    if (onOpen) onOpen(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mt-2 w-full bg-[#f5f5f5]/60 p-4 rounded-xl shadow-[8px_8px_16px_rgba(209,217,230,0.7),-8px_-8px_16px_rgba(255,255,255,1)] box-border">
      {/* Outer flex: column on mobile, row on md+ */}
      <div className="flex flex-col md:flex-row gap-4 items-start">
        {/* Left column: icon */}
        <div className="flex-shrink-0">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#25D366] text-white text-lg shadow-sm">
            <WhatsappIcon className="w-5 h-5" />
          </div>
        </div>

        {/* Right / main column: this must be able to shrink (min-w-0) in flex */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-sm font-semibold text-slate-700">Message on WhatsApp</div>
              <div className="text-xs text-slate-400">Pick a template or craft your message</div>
            </div>
            <div className="text-xs text-slate-500">{message.length}/{charLimit}</div>
          </div>

          {/* Templates (wrap) */}
          <div className="flex flex-wrap gap-2 mb-3">
            {templates.map((t) => (
              <button
                type="button"
                key={t}
                onClick={() => handleSelectTemplate(t)}
                className={`px-3 py-1.5 rounded-full text-sm transition ${
                  selectedTemplate === t
                    ? "bg-[#667eea] text-white shadow-[inset_2px_2px_6px_rgba(0,0,0,0.06)]"
                    : "bg-white/90 text-slate-700 hover:scale-[1.02]"
                }`}
              >
                {t.length > 32 ? t.slice(0, 30) + "…" : t}
              </button>
            ))}
          </div>

          {/* Textarea: important -> min-w-0 so it can shrink inside flex */}
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value.slice(0, charLimit))}
            rows={3}
            className="w-full min-w-0 p-3 rounded-lg bg-white/95 border border-white/40 resize-none text-sm focus:outline-none focus:ring-2 focus:ring-[#667eea]/30 box-border break-words"
            aria-label="Edit WhatsApp message"
          />

          {/* Actions + emojis: layout adapts */}
          <div className="mt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              {emojis.map((em) => (
                <button
                  key={em}
                  type="button"
                  onClick={() => insertEmoji(em)}
                  aria-label={`Insert ${em}`}
                  className="px-2 py-1 rounded-md hover:bg-slate-100 transition text-lg"
                >
                  {em}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 ml-auto">
              <button
                type="button"
                onClick={handleCopy}
                className="button-neumorphic px-3 py-2 text-sm rounded-md"
                aria-label="Copy message"
              >
                {copied ? "Copied" : "Copy"}
              </button>

              <button
                type="button"
                onClick={() => { setMessage(defaultMessage || templates[0]); setSelectedTemplate(null); }}
                className="px-3 py-2 rounded-md border border-white/40 text-sm hover:bg-white/80"
              >
                Reset
              </button>

              {/* On small screens this becomes full width (so it won't overflow); on md+ it's inline */}
              <button
                type="button"
                onClick={handleOpenWhatsApp}
                className="ml-0 sm:ml-2 mt-2 sm:mt-0 bg-[#25D366] hover:bg-[#21c75a] text-white px-4 py-2 rounded-xl font-semibold shadow-[6px_6px_12px_rgba(37,211,102,0.18)] transition w-full sm:w-auto"
                aria-label="Open WhatsApp in new tab"
              >
                Open WhatsApp
              </button>
            </div>
          </div>

          {error && <div className="mt-2 text-xs text-red-500">{error}</div>}

          {/* Preview: break words and ensure it stays inside card */}
          <div className="mt-3 text-xs text-slate-500 italic break-words">
            Preview: <span className="text-slate-700">{message}</span>
          </div>
        </div>
      </div>
    </div>
  );
};


/* -------------------- ScientificAdvertisingSection -------------------- */

export default function ScientificAdvertisingSection() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
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

  // Replace with your real values
  const calendlyUrl = "https://calendly.com/arlox-/strategy-call-1";
  const whatsappNumber = "919910220335"; // E.164 without plus; replace with real number

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
          <span className="font-semibold text-[#1f2933]">Scientific Advertisers</span>.
          We don&apos;t just &quot;run ads&quot; – we hypothesize, test, measure,
          and iterate angles, avatars and hooks.
        </p>

        <p className="text-sm md:text-base text-[#3b4254] leading-relaxed">
          Traditional agencies see a failed campaign as a loss. We see it as a
          data point that refines the next hypothesis. We blend empirical
          evidence with creative intuition to build a dialogue with your
          customers, not a monologue.
        </p>

        <button
          onClick={() => setOpen(true)}
          className="button-neumorphic mt-4 px-7 py-3 text-sm md:text-base font-semibold rounded-full shadow-neumorphic hover:scale-105 transition-transform text-[#1f2933]"
        >
          Start Scaling Today
        </button>
      </div>

      {/* RIGHT: Growth Engine visual */}
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
              className="w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] rounded-full flex flex-col items-center justify-center text-[9px] sm:text-[10px] md:text-xs border border-white/85"
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

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Book an appointment">
          <button type="button" className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setOpen(false)} aria-label="Close modal" />

          <div className="relative z-10 w-full max-w-md bg-white/95 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-[#2f3f63]">Book an Appointment</h2>

              <button className="p-2 rounded-md hover:bg-gray-200" onClick={() => setOpen(false)} aria-label="Close">
                <X size={20} />
              </button>
            </div>

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

              <WhatsAppComposer
                phoneNumber={whatsappNumber}
                defaultMessage="Hi — I'd like to book a strategy call."
                onOpen={() => {
                  /* optional analytics hook */
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

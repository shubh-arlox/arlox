// components/WhatsAppCTA.jsx
"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Phone, X } from "lucide-react";

/* -------------------------------- Whatsapp Icon -------------------------------- */
const WhatsappIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
    fill="currentColor"
  >
    <path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2zM19 7.5c-2.4-3.9-8.7-3.9-12.4 0-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9 0-2.6-1-5.1-2.8-7z" />
  </svg>
);

/* -------------------------------- Composer -------------------------------- */
function WhatsAppComposer({ phoneNumber, defaultMessage = "", onOpen }) {
  const templates = [
    "Hi — I'd like to book a strategy call about growth.",
    "Hey team — I'm interested in your Scientific Positioning service.",
    "Hello — I want a quick audit of my ads and creative strategy.",
  ];
  const emojis = ["🚀", "📈", "💬", "🤝", "⚡"];

  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [message, setMessage] = useState(defaultMessage || templates[0]);
  const [copied, setCopied] = useState(false);
  const charLimit = 600;

  const insertEmoji = (emoji) => {
    setMessage((prev) =>
      prev.length + emoji.length + 1 > charLimit ? prev : prev + " " + emoji
    );
  };

  const copyMsg = async () => {
    await navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  const openWhatsApp = () => {
    const phone = phoneNumber.replace(/\D/g, "");
    if (!phone) return;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    if (onOpen) onOpen();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="mt-5 p-6 rounded-2xl bg-[#f4f6f8]"
      style={{
        boxShadow:
          "12px 16px 36px rgba(18,24,32,0.55), -10px -10px 28px rgba(255,255,255,0.04)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 flex items-center justify-center rounded-full"
            style={{
              background: "#f4f6f8",
              boxShadow:
                "inset 6px 6px 16px rgba(18,24,32,0.20), inset -6px -6px 16px rgba(255,255,255,0.03)",
            }}
          >
            <WhatsappIcon className="w-6 h-6 text-[#25D366]" />
          </div>

          <div>
            <p className="text-sm font-semibold text-[#111827]">
              Message on WhatsApp
            </p>
            <p className="text-xs text-[#6b7280]">
              Choose a template or write your message
            </p>
          </div>
        </div>

        <p className="text-xs text-[#6b7280]">{message.length}/600</p>
      </div>

      {/* Templates */}
      <div className="flex flex-wrap gap-2 mb-4">
        {templates.map((t) => (
          <button
            key={t}
            onClick={() => {
              setSelectedTemplate(t);
              setMessage(t);
            }}
            className={`
              px-4 py-1.5 rounded-full text-sm transition
              ${
                selectedTemplate === t
                  ? "text-white bg-[#5b6ae6]"
                  : "bg-[#f4f6f8] text-[#374151]"
              }
            `}
            style={{
              boxShadow:
                selectedTemplate === t
                  ? "6px 6px 16px rgba(10,14,20,0.35), -6px -6px 14px rgba(255,255,255,0.03)"
                  : "6px 6px 14px rgba(18,24,32,0.18), -6px -6px 12px rgba(255,255,255,0.03)",
            }}
          >
            {t.length > 38 ? t.slice(0, 38) + "…" : t}
          </button>
        ))}
      </div>

      {/* Textarea */}
      <div
        className="rounded-xl p-4 mb-4"
        style={{
          background: "#f4f6f8",
          boxShadow:
            "inset 6px 6px 16px rgba(18,24,32,0.18), inset -6px -6px 14px rgba(255,255,255,0.03)",
        }}
      >
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value.slice(0, charLimit))}
          className="w-full bg-transparent text-sm focus:outline-none resize-none"
        />
      </div>

      {/* Emoji Row + Actions */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex gap-1">
          {emojis.map((em) => (
            <button
              key={em}
              onClick={() => insertEmoji(em)}
              className="text-lg hover:scale-110 transition"
            >
              {em}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={copyMsg}
            className="px-4 py-2 text-xs rounded-lg bg-[#f4f6f8]"
            style={{
              boxShadow:
                "6px 6px 16px rgba(18,24,32,0.22), -6px -6px 12px rgba(255,255,255,0.02)",
            }}
          >
            {copied ? "Copied" : "Copy"}
          </button>

          <button
            onClick={() => {
              setMessage(defaultMessage || templates[0]);
              setSelectedTemplate(null);
            }}
            className="px-4 py-2 text-xs rounded-lg bg-[#f4f6f8]"
            style={{
              boxShadow:
                "6px 6px 16px rgba(18,24,32,0.22), -6px -6px 12px rgba(255,255,255,0.02)",
            }}
          >
            Reset
          </button>
        </div>
      </div>

      {/* WhatsApp Primary Button */}
      <button
        onClick={openWhatsApp}
        className="
          w-full py-3 rounded-full text-white font-semibold text-base
          flex items-center justify-center gap-2 active:scale-[0.98] transition
        "
        style={{
          background: "#25D366",
          boxShadow: "0 12px 28px rgba(4,9,12,0.45)",
        }}
      >
        <WhatsappIcon className="w-5 h-5" />
        Open WhatsApp
      </button>
    </div>
  );
}

/* ------------------------------- MAIN CTA ------------------------------- */

export default function WhatsappCTA({
  whatsappNumber = "919910220335",
  calendlyUrl = "https://calendly.com/arlox-/strategy-call-1",
  children,
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Client-side mounting check
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open]);

  // Modal content
  const modalContent = open ? (
    <div
      className="fixed inset-0 flex items-center justify-center p-6"
      style={{ zIndex: 9999 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      <div className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div
          className="rounded-3xl p-6 bg-[#f4f6f8]"
          style={{
            boxShadow:
              "16px 20px 48px rgba(18,24,32,0.55), -12px -12px 34px rgba(255,255,255,0.03)",
          }}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-[#111827]">
              Book an Appointment
            </h2>

            <button
              className="p-2 rounded-lg hover:bg-white/40"
              onClick={() => setOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          {/* Calendly Button */}
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block w-full rounded-xl py-3 px-4 mb-6 bg-[#f4f6f8]"
            style={{
              boxShadow:
                "8px 10px 28px rgba(18,24,32,0.38), -6px -6px 18px rgba(255,255,255,0.03)",
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: "#eef2ff",
                  boxShadow:
                    "inset 4px 4px 10px rgba(18,24,32,0.12), inset -4px -4px 8px rgba(255,255,255,0.03)",
                }}
              >
                <Phone size={18} className="text-[#203b80]" />
              </div>

              <span className="text-base font-semibold">Book Call Now</span>
            </div>
          </a>

          {/* WhatsApp Composer */}
          <WhatsAppComposer
            phoneNumber={whatsappNumber}
            defaultMessage="Hi — I'd like to book a strategy call."
            onOpen={() => setOpen(false)}
          />
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      {/* Trigger - Just render children directly with click handler */}
      {children ? (
        <div
          onClick={() => setOpen(true)}
          className="inline-block cursor-pointer"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setOpen(true);
            }
          }}
        >
          {children}
        </div>
      ) : (
        // Standalone button - your original design
        <div className="flex justify-center">
          <button
            onClick={() => setOpen(true)}
            className="
              inline-flex items-center gap-3 px-8 py-3 rounded-full 
              bg-[#f6f8fb]
              shadow-[8px_8px_16px_rgba(163,177,198,0.6),-8px_-8px_16px_rgba(255,255,255,0.5)]
              hover:shadow-[6px_6px_12px_rgba(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.5)]
              active:shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.5)]
              transition-all duration-200
            "
          >
            <span
              className="
                px-6 py-2 rounded-full font-semibold text-[#2550b0] 
                bg-[#f5f5f5]
                shadow-[inset_2px_2px_5px_rgba(163,177,198,0.4),inset_-2px_-2px_5px_rgba(255,255,255,0.4)]
                hover:shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.5)]
                active:shadow-[inset_4px_4px_10px_rgba(163,177,198,0.6),inset_-4px_-4px_10px_rgba(255,255,255,0.3)]
                transition-all duration-200
              "
            >
              Start Scaling Today
            </span>
          </button>
        </div>
      )}

      {/* Render modal via Portal to document.body */}
      {mounted && modalContent && createPortal(modalContent, document.body)}
    </>
  );
}

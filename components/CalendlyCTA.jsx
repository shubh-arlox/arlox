// components/CalendlyCTA.jsx
"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export default function CalendlyCTA({
  calendlyUrl = "https://calendly.com/arlox-/strategy-call-1",
  children,
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Client-side mount guard
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent body scroll while modal open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Modal content
  const modalContent = open ? (
    <div
      className="fixed inset-0 flex items-center justify-center p-6"
      style={{ zIndex: 9999 }}
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-transparent rounded-2xl overflow-hidden">
        {/* Modal Shell */}
        <div
          className="rounded-2xl p-4 bg-[#f4f6f8]"
          style={{
            boxShadow:
              "16px 20px 48px rgba(18,24,32,0.55), -12px -12px 34px rgba(255,255,255,0.03)",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-[#111827]">Book an Appointment</h2>
            <button
              aria-label="Close calendly modal"
              onClick={() => setOpen(false)}
              className="p-2 rounded-md hover:bg-black/5"
            >
              <X size={20} />
            </button>
          </div>

          {/* Calendly embed container */}
          <div style={{ height: "72vh", minHeight: 480 }} className="rounded-lg overflow-hidden border border-gray-200">
            {/* Use iframe to embed Calendly (Calendly free embed or link) */}
            <iframe
              src={calendlyUrl}
              title="Calendly scheduling"
              style={{ width: "100%", height: "100%", border: 0 }}
              frameBorder="0"
              scrolling="auto"
              allowTransparency="true"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            />
          </div>

          {/* Footer actions */}
          <div className="mt-4 flex items-center justify-between gap-3">
            <p className="text-sm text-[#6b7280]">Prefer to open Calendly in a new tab?</p>
            <div className="flex items-center gap-2">
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#eef2ff] font-semibold text-[#203b80]"
              >
                Open in new tab
              </a>
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-lg bg-[#f4f6f8] border border-gray-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      {/* Trigger: either children or default button */}
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
        <div className="flex justify-center">
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-[#f6f8fb] shadow-[8px_8px_16px_rgba(163,177,198,0.6),-8px_-8px_16px_rgba(255,255,255,0.5)] transition-all duration-200"
          >
            <span className="px-6 py-2 rounded-full font-semibold text-[#2550b0] bg-[#f5f5f5]">Start Scaling Today</span>
          </button>
        </div>
      )}

      {/* Portal render */}
      {mounted && modalContent && createPortal(modalContent, document.body)}
    </>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, Calendar, ExternalLink, Clock } from "lucide-react";

export default function CalendlyCTA({
  calendlyUrl = "https://calendly.com/arlox-/strategy-call-1",
  children,
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

  // Reset loading state when modal opens
  useEffect(() => {
    if (open) {
      setIsLoading(true);
    }
  }, [open]);

  // Modal content
  const modalContent = open ? (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 sm:p-6"
      style={{ zIndex: 9999 }}
      aria-modal="true"
      role="dialog"
      aria-labelledby="calendly-modal-title"
    >
      {/* Animated Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Inline Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slide-up {
          animation: slideUp 0.4s ease-out;
        }
        .animate-breathe {
          animation: breathe 2s ease-in-out infinite;
        }
        .animate-pulse-soft {
          animation: pulse 2s ease-in-out infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s linear infinite;
          background: linear-gradient(
            90deg,
            rgba(163,177,198,0.1) 0%,
            rgba(163,177,198,0.3) 50%,
            rgba(163,177,198,0.1) 100%
          );
          background-size: 200% 100%;
        }
      `}</style>

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] animate-slide-up">
        {/* Neumorphic Modal Shell */}
        <div
          className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 bg-[#e0e5ec]"
          style={{
            boxShadow:
              "12px 12px 24px rgb(163,177,198,0.6), -12px -12px 24px rgba(255,255,255,0.5)",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div className="flex items-center gap-3">
              <div
                className="p-2 rounded-lg bg-[#e0e5ec]"
                style={{
                  boxShadow:
                    "inset 4px 4px 8px rgb(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.8)",
                }}
              >
                <Calendar className="text-blue-600" size={20} />
              </div>
              <h2
                id="calendly-modal-title"
                className="text-base sm:text-lg font-bold text-slate-700"
              >
                Book Your Strategy Call
              </h2>
            </div>
            <button
              aria-label="Close calendly modal"
              onClick={() => setOpen(false)}
              className="p-2 rounded-lg bg-[#e0e5ec] hover:shadow-[inset_4px_4px_8px_rgb(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] shadow-[4px_4px_8px_rgb(163,177,198,0.6),-4px_-4px_8px_rgba(255,255,255,0.5)] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <X size={20} className="text-slate-600" />
            </button>
          </div>

          {/* Calendly Embed Container */}
          <div
            className="rounded-xl sm:rounded-2xl overflow-hidden relative bg-white"
            style={{
              height: "60vh",
              minHeight: "400px",
              maxHeight: "600px",
              boxShadow:
                "inset 6px 6px 12px rgb(163,177,198,0.3), inset -6px -6px 12px rgba(255,255,255,0.8)",
            }}
          >
            {/* Enhanced Loading State */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#e0e5ec] z-10">
                <div className="flex flex-col items-center gap-6">
                  
                  {/* Animated Neumorphic Circle with Icon */}
                  <div className="relative">
                    {/* Outer breathing circle */}
                    <div
                      className="w-24 h-24 rounded-full bg-[#e0e5ec] animate-breathe"
                      style={{
                        boxShadow:
                          "8px 8px 16px rgb(163,177,198,0.6), -8px -8px 16px rgba(255,255,255,0.5)",
                      }}
                    >
                      {/* Inner circle */}
                      <div
                        className="absolute inset-2 rounded-full bg-[#e0e5ec] flex items-center justify-center"
                        style={{
                          boxShadow:
                            "inset 4px 4px 8px rgb(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.8)",
                        }}
                      >
                        <Calendar className="text-blue-600 w-10 h-10 animate-pulse-soft" />
                      </div>
                    </div>

                    {/* Rotating ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-400 border-r-blue-300" style={{ animation: 'spin 2s linear infinite' }}></div>
                  </div>

                  {/* Loading Text with Animation */}
                  <div className="text-center space-y-2">
                    <p className="text-base font-bold text-slate-700 animate-pulse-soft">
                      Loading your calendar...
                    </p>
                    <p className="text-xs text-slate-500">
                      This will only take a moment
                    </p>
                  </div>

                  {/* Animated Dots */}
                  <div className="flex items-center gap-2">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full bg-blue-400"
                        style={{
                          animation: `pulse 1.5s ease-in-out infinite`,
                          animationDelay: `${i * 0.2}s`,
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Shimmer Cards */}
                  <div className="space-y-2 w-64">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="h-12 rounded-lg bg-[#e0e5ec] overflow-hidden"
                        style={{
                          boxShadow:
                            "inset 3px 3px 6px rgb(163,177,198,0.4), inset -3px -3px 6px rgba(255,255,255,0.6)",
                          animationDelay: `${i * 0.15}s`,
                        }}
                      >
                        <div className="h-full w-full animate-shimmer"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Calendly iframe */}
            <iframe
              src={calendlyUrl}
              title="Calendly scheduling page"
              className="w-full h-full border-0"
              frameBorder="0"
              scrolling="auto"
              onLoad={() => setIsLoading(false)}
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation allow-modals"
            />
          </div>

          {/* Footer Actions */}
          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-slate-500 flex items-center gap-2">
              <Clock size={14} className="text-slate-400" />
              Prefer to open in a new tab?
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#e0e5ec] shadow-[6px_6px_12px_rgb(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.5)] hover:shadow-[inset_4px_4px_8px_rgb(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] font-semibold text-blue-600 transition-all duration-200 text-sm focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                <ExternalLink size={16} />
                Open in New Tab
              </a>
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2.5 rounded-lg bg-[#e0e5ec] shadow-[6px_6px_12px_rgb(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.5)] hover:shadow-[inset_4px_4px_8px_rgb(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] text-slate-700 font-medium transition-all duration-200 text-sm focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
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
          aria-label="Open Calendly booking modal"
        >
          {children}
        </div>
      ) : (
        <div className="flex justify-center">
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#e0e5ec] shadow-[8px_8px_16px_rgba(163,177,198,0.6),-8px_-8px_16px_rgba(255,255,255,0.5)] hover:shadow-[inset_6px_6px_12px_rgb(163,177,198,0.6),inset_-6px_-6px_12px_rgba(255,255,255,0.8)] active:shadow-[inset_4px_4px_8px_rgb(163,177,198,0.7),inset_-4px_-4px_8px_rgba(255,255,255,0.9)] transition-all duration-200 group focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            aria-label="Book a strategy call"
          >
            <Calendar className="text-blue-600 group-hover:scale-110 transition-transform" size={20} />
            <span className="font-bold text-slate-700 text-sm sm:text-base">
              Start Scaling Today
            </span>
          </button>
        </div>
      )}

      {/* Portal render */}
      {mounted && modalContent && createPortal(modalContent, document.body)}
    </>
  );
}

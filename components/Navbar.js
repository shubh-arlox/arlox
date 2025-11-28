"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const MENU_COLUMNS = [
  {
    title: "Strategy",
    items: [
      "Scientific Positioning",
      "Scientific A/B testing",
      "Scientific Angle testing",
      "Scientific Copywriting",
      "Diagnosing & Planning",
    ],
  },
  {
    title: "Scaling",
    items: [
      "10X Facebook & Instagram Scaling",
      "Omnichannel AI Google Ads",
      "ROI Max Creative Engine",
      "TikTok Paid & Organic",
      "Streaming, TV & Youtube Ads",
    ],
  },
  {
    title: "Efficiency",
    items: [
      "AI CRO Optimisations",
      "Smart Retargeting & follow through",
      "Intelligence & Data",
      "Multi-Channel Tracking",
      "Emails, WhatsApp, SMS flows",
      "LTV maximisation",
    ],
  },
];

const TOP_LINKS = [
  { label: "Solutions", href: "/solutions" },
  { label: "Programs", href: "/programs" },
  { label: "Software", href: "/software" },
  { label: "Community", href: "/community" },
  { label: "Media", href: "/media" },
  { label: "About", href: "/about" },
];

function slugify(text) {
  return text
    .toString()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");
}

export default function Navbar() {
  const [openMobile, setOpenMobile] = useState(false);
  const [hoverOpen, setHoverOpen] = useState(false);
  const [mobileSolOpen, setMobileSolOpen] = useState(false);
  const hoverTimeout = useRef(null);
  const navRef = useRef(null);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setHoverOpen(false);
        setOpenMobile(false);
        setMobileSolOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openHover = useCallback(() => {
    clearTimeout(hoverTimeout.current);
    setHoverOpen(true);
  }, []);

  const closeHover = useCallback(() => {
    clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => setHoverOpen(false), 140);
  }, []);

  // prevent body scroll when mobile open
  useEffect(() => {
    document.body.style.overflow = openMobile ? "hidden" : "";
  }, [openMobile]);

  return (
    <header className="sticky top-0 z-50">
      {/* Glassmorphic navbar with #f5f5f5 tint */}
      <div
        className="
          bg-[#f5f5f5]/60
          backdrop-blur-4xl
          border-b
          border-white/40
          shadow-[0_8px_30px_rgba(15,23,42,0.06)]
        "
      >
        <nav
          ref={navRef}
          className="max-w-6xl mx-auto px-4"
          onMouseLeave={closeHover}
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between py-3 md:py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2" aria-label="Home">
              <Image
                src="/Arlox logo 6.png"
                width={120}
                height={42}
                alt="Arlox logo"
                className="h-8 w-auto md:h-10"
              />
            </Link>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-6 text-sm lg:text-base">
              {TOP_LINKS.map((link) => {
                if (link.label === "Solutions") {
                  return (
                    <li
                      key={link.label}
                      className="relative"
                      onMouseEnter={openHover}
                      onFocus={openHover}
                    >
                      <Link
                        href={link.href}
                        className="px-1 text-[#0f1724] font-medium transition-colors hover:text-[#10233a] focus:text-[#10233a]"
                        onClick={() => setHoverOpen(false)}
                        aria-haspopup="true"
                        aria-expanded={hoverOpen}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="px-1 text-[#0f1724] font-medium transition-colors hover:text-[#10233a]"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Right-side CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+911234567890"
                className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/20 text-[#0f1724] hover:bg-white/30 transition"
                aria-label="Call us"
              >
                <Phone size={16} /> <span className="text-sm">Call</span>
              </a>

              <button
                className="md:hidden p-2 rounded-lg hover:bg-white/20 transition"
                onClick={() => setOpenMobile((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={openMobile}
              >
                {openMobile ? <X size={22} color="#0f1724" /> : <Menu size={22} color="#0f1724" />}
              </button>
            </div>
          </div>

          {/* Desktop Mega Menu (Solutions) */}
          <div
            className={`absolute left-0 right-0 top-full z-40 transition-all duration-200 ${
              hoverOpen ? "opacity-100 pointer-events-auto translate-y-2" : "opacity-0 pointer-events-none -translate-y-3"
            }`}
            role="dialog"
            aria-hidden={!hoverOpen}
            onMouseEnter={openHover}
            onMouseLeave={closeHover}
          >
            <div className="max-w-6xl mx-auto px-4">
              <div
                className="
                  bg-white/70
                  backdrop-blur-lg
                  border border-white/50
                  rounded-2xl
                  p-6 md:p-8
                  shadow-[0_12px_40px_rgba(15,23,42,0.08)]
                "
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {MENU_COLUMNS.map((col) => (
                    <div key={col.title}>
                      <div className="text-xs text-slate-500 uppercase tracking-wider mb-3">
                        {col.title}
                      </div>
                      <ul className="space-y-3">
                        {col.items.map((item) => (
                          <li key={item}>
                            <Link
                              href={`/solutions/${slugify(item)}`}
                              className="text-[#071126] text-base hover:text-[#0b2540] transition"
                              onClick={() => setHoverOpen(false)}
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* Right column CTA (optional on larger screens) */}
                  <div className="hidden lg:flex items-center justify-center">
                    <div className="glass p-4 rounded-xl w-full max-w-xs text-center">
                      <h4 className="text-[#0f1724] font-semibold mb-2">Ready to scale?</h4>
                      <p className="text-sm text-slate-600 mb-3">Book a call and we’ll audit your account.</p>
                      <Link href="/book" className="button-neumorphic inline-flex px-4 py-2 rounded-full">
                        Book a call
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {openMobile && (
            <div className="md:hidden pb-4 mt-2">
              <div
                className="
                  rounded-xl
                  bg-white/95
                  shadow-[0_8px_30px_rgba(15,23,42,0.06)]
                  border border-white/60
                "
              >
                <ul className="flex flex-col text-sm font-medium text-[#0f1724]">
                  {TOP_LINKS.map((link) => (
                    <li key={link.label} className="px-4 py-2.5 border-b border-white/8">
                      {link.label === "Solutions" ? (
                        <>
                          <button
                            onClick={() => setMobileSolOpen((v) => !v)}
                            className="w-full flex items-center justify-between text-left"
                            aria-expanded={mobileSolOpen}
                            aria-controls="mobile-solutions"
                          >
                            <span>{link.label}</span>
                            <span className="text-slate-500">{mobileSolOpen ? "−" : "+"}</span>
                          </button>

                          <div
                            id="mobile-solutions"
                            className={`mt-3 space-y-2 transition-all duration-200 overflow-hidden ${
                              mobileSolOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                            }`}
                          >
                            {MENU_COLUMNS.map((col) => (
                              <div key={col.title} className="px-2">
                                <div className="text-xs uppercase text-slate-400 mb-1">{col.title}</div>
                                <div className="grid gap-1">
                                  {col.items.map((item) => (
                                    <Link
                                      key={item}
                                      href={`/solutions/${slugify(item)}`}
                                      className="py-1 px-2 rounded hover:bg-slate-100 text-sm block"
                                      onClick={() => {
                                        setOpenMobile(false);
                                        setMobileSolOpen(false);
                                      }}
                                    >
                                      {item}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <Link href={link.href} onClick={() => setOpenMobile(false)}>
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>

                <div className="px-4 py-3 border-t border-white/8 flex gap-2">
                  <a
                    href="tel:+911234567890"
                    className="button-neumorphic px-4 py-2 rounded-full inline-flex items-center gap-2"
                  >
                    <Phone size={16} /> Call
                  </a>
                  <Link href="/book" className="px-4 py-2 rounded-full border border-slate-300 ml-auto">
                    Book a Call
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

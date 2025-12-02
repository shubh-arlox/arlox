// components/Navbar.js
"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

// ---- DATA ----
const NAV_ITEMS = [
  { label: "Solutions", key: "solutions" },
  { label: "Tools", key: "tools" },
  { label: "Products", key: "products" },
  { label: "Results", key: "results" },
  { label: "Free", key: "free" },
  { label: "Company", key: "company" },
];

const MEGA_CONTENT = {
  solutions: [
    {
      title: "Strategy (Ensure Profits First)",
      items: [
        { label: "Scientific Positioning", href: "/solutions/scientific-positioning" },
        { label: "Market Research & Analysis", href: "/solutions/market-research-analysis" },
        { label: "Scientific Product testing", href: "/solutions/scientific-product-testing" },
        { label: "Scientific Angle testing", href: "/solutions/scientific-angle-testing" },
        { label: "Business Diagnostics", href: "/solutions/business-diagnostics" },
      ],
    },
    {
      title: "Scaling (Get More Customers)",
      items: [
        { label: "Meta Ads Scaling (FB/IG)", href: "/solutions/meta-ads-scaling" },
        { label: "Google Ads (AI-Driven)", href: "/solutions/google-ads-ai" },
        { label: "TikTok Growth Engine", href: "/solutions/tiktok-growth-engine" },
        { label: "YouTube & Streaming Ads", href: "/solutions/youtube-streaming-ads" },
        { label: "Ad Creative Production System", href: "/solutions/ad-creative-production" },
      ],
    },
    {
      title: "Efficiency (Make More Per Customer)",
      items: [
        { label: "AI CRO Optimisations", href: "/solutions/ai-cro" },
        { label: "Smart Retargeting", href: "/solutions/smart-retargeting" },
        { label: "Multi-Channel Tracking", href: "/solutions/multi-channel-tracking" },
        { label: "Emails/ WhatsApp/ SMS flows", href: "/solutions/lifecycle-flows" },
        { label: "LTV maximisation", href: "/solutions/ltv-maximisation" },
      ],
    },
  ],

  tools: [
    {
      title: "Tools",
      items: [{ label: "AI Bot", href: "/tools/ai-bot" }],
    },
  ],

  products: [
    {
      title: "For Agencies",
      subtitle: "Get more clients, keep them longer",
      items: [
        { label: "Scale Your Agency & Deliver Better", href: "/products/scale-your-agency" },
        { label: "Scientific Mediabuying™", href: "/products/scientific-mediabuying" },
        { label: "Client Retention Mastery™", href: "/products/client-retention-mastery" },
        { label: "AD Creative Mastery™", href: "/products/ad-creative-mastery" },
        { label: "1-on-1 Consulting (~$999 per session)", href: "/products/agency-consulting" },
      ],
    },
    {
      title: "For Fashion Brands",
      subtitle: "Independently scale to $500K+/month",
      items: [
        { label: "Setup Your Marketing Department", href: "/products/fashion-marketing-dept" },
        { label: "1-on-1 Consulting (~$999 per session)", href: "/products/fashion-consulting" },
      ],
    },
    {
      title: "For Online Service Businesses",
      subtitle: "Qualified leads who show up and buy",
      items: [
        {
          label: "Generate 21–53 Appointments / week from LinkedIn",
          href: "/products/linkedin-appointments",
        },
        { label: "1-on-1 Coaching (~$999 per hour)", href: "/products/service-coaching" },
      ],
    },
  ],

  results: [
    {
      title: "Results",
      items: [
        {
          label: "Success stories (330+ video testimonials)",
          href: "/results/success-stories",
        },
        { label: "Case studies", href: "/results/case-studies" },
        { label: "10X Ad Creatives", href: "/results/10x-ad-creatives" },
        { label: "Reviews (Wall of review)", href: "/results/reviews" },
      ],
    },
  ],

  free: [
    {
      title: "Free",
      items: [
        { label: "Scaling insights (Blog)", href: "/free/scaling-insights" },
        { label: "Arlox Channel (Free courses & guides)", href: "/free/arlox-channel" },
        { label: "Van Channel (Strategy focused)", href: "/free/van-channel" },
        { label: "Dennis Channel (Execution focused)", href: "/free/dennis-channel" },
        { label: "BROAS Tool", href: "/free/broas-tool" },
      ],
    },
  ],

  company: [
    {
      title: "Company",
      items: [
        { label: "Mission", href: "/company/mission" },
        { label: "Leadership", href: "/company/leadership" },
        { label: "Values", href: "/company/values" },
        { label: "Arloxian Way", href: "/company/arloxian-way" },
        { label: "Our Story", href: "/company/our-story" },
        { label: "We’re hiring", href: "/company/careers" },
      ],
    },
  ],
};

// ---------------- NAVBAR ----------------
export default function Navbar() {
  const [openMobile, setOpenMobile] = useState(false);
  const [openMega, setOpenMega] = useState(null); // key or null
  const [mobileOpenKey, setMobileOpenKey] = useState(null);
  const hoverTimeout = useRef(null);

  // ESC closes menus
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpenMega(null);
        setOpenMobile(false);
        setMobileOpenKey(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = openMobile ? "hidden" : "";
  }, [openMobile]);

  const openHover = useCallback((key) => {
    clearTimeout(hoverTimeout.current);
    setOpenMega(key);
  }, []);

  const closeHover = useCallback(() => {
    clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => setOpenMega(null), 140);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Heavier blur, less transparent */}
      <div className="bg-[#f5f5f5]/90 backdrop-blur-3xl border-b border-white/70 shadow-[0_16px_50px_rgba(15,23,42,0.16)]">
        <nav
          className="max-w-6xl mx-auto px-4"
          aria-label="Main navigation"
          onMouseLeave={closeHover}
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
                priority
              />
            </Link>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-6 text-sm lg:text-base">
              {NAV_ITEMS.map((item) => (
                <li
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => openHover(item.key)}
                  onFocus={() => openHover(item.key)}
                >
                  <button
                    type="button"
                    className="px-1 text-[#0f1724] font-medium transition-colors hover:text-[#10233a] select-none"
                    aria-haspopup="true"
                    aria-expanded={openMega === item.key}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Right: call + mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+911234567890"
                className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/60 text-[#0f1724] hover:bg-white/60 transition select-none"
              >
                <Phone size={16} /> <span className="text-sm">Call</span>
              </a>

              <button
                className="md:hidden p-2 rounded-lg hover:bg-white/60 transition"
                onClick={() => setOpenMobile((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={openMobile}
              >
                {openMobile ? <X size={22} color="#0f1724" /> : <Menu size={22} color="#0f1724" />}
              </button>
            </div>
          </div>

          {/* Desktop mega menu */}
          {openMega && (
            <div
              className="absolute left-0 right-0 top-full z-40 translate-y-2 opacity-100 pointer-events-auto transition-all duration-200"
              role="dialog"
              onMouseEnter={() => openHover(openMega)}
              onMouseLeave={closeHover}
            >
              <div className="max-w-6xl mx-auto px-4">
                <div className="bg-white/95 backdrop-blur-3xl border border-white/70 rounded-2xl p-6 md:p-8 shadow-[0_22px_60px_rgba(15,23,42,0.22)]">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {MEGA_CONTENT[openMega].map((col) => (
                      <div key={col.title}>
                        <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">
                          {col.title}
                        </div>
                        {col.subtitle && (
                          <p className="text-[11px] text-slate-500 mb-2">{col.subtitle}</p>
                        )}
                        <ul className="space-y-2">
                          {col.items.map((link) => (
                            <li key={link.label}>
                              <Link
                                href={link.href}
                                className="text-[#071126] text-sm md:text-base hover:text-[#0b2540] transition select-none"
                                onClick={() => setOpenMega(null)}
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mobile menu */}
          {openMobile && (
            <div className="md:hidden pb-4 mt-2">
              <div className="rounded-xl bg-white/98 backdrop-blur-3xl shadow-[0_16px_50px_rgba(15,23,42,0.18)] border border-white/80">
                <ul className="flex flex-col text-sm font-medium text-[#0f1724]">
                  {NAV_ITEMS.map((item) => {
                    const isOpen = mobileOpenKey === item.key;
                    return (
                      <li key={item.key} className="px-4 py-2.5 border-b border-white/60">
                        <button
                          onClick={() =>
                            setMobileOpenKey((prev) => (prev === item.key ? null : item.key))
                          }
                          className="w-full flex items-center justify-between text-left select-none"
                          aria-expanded={isOpen}
                        >
                          <span>{item.label}</span>
                          <span className="text-slate-500">{isOpen ? "−" : "+"}</span>
                        </button>

                        <div
                          className={`mt-2 overflow-hidden transition-all duration-200 ${
                            isOpen ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          {MEGA_CONTENT[item.key].map((col) => (
                            <div key={col.title} className="px-2 py-1">
                              <div className="text-xs uppercase text-slate-400 mb-1">
                                {col.title}
                              </div>
                              {col.subtitle && (
                                <p className="text-[11px] text-slate-500 mb-1">
                                  {col.subtitle}
                                </p>
                              )}
                              <div className="grid gap-1">
                                {col.items.map((link) => (
                                  <Link
                                    key={link.label}
                                    href={link.href}
                                    className="py-1 px-2 rounded hover:bg-slate-100 text-sm block select-none"
                                    onClick={() => {
                                      setOpenMobile(false);
                                      setMobileOpenKey(null);
                                    }}
                                  >
                                    {link.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </li>
                    );
                  })}
                </ul>

                <div className="px-4 py-3 border-t border-white/70 flex gap-2">
                  <a
                    href="tel:+911234567890"
                    className="px-4 py-2 rounded-full inline-flex items-center gap-2 bg-[#0f1724] text-white text-sm font-medium"
                  >
                    <Phone size={16} /> Call
                  </a>
                  <Link
                    href="/book"
                    className="px-4 py-2 rounded-full border border-slate-300 text-sm font-medium text-[#0f1724] ml-auto"
                    onClick={() => setOpenMobile(false)}
                  >
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

// components/Navbar.js
"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

/* NAV DATA (same as before) */
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
        { label: "Scientific Product Testing", href: "/solutions/scientific-product-testing" },
        { label: "Scientific Angle Testing", href: "/solutions/scientific-angle-testing" },
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
        { label: "Lifecycle Automations", href: "/solutions/lifecycle-flows" },
        { label: "LTV Maximisation", href: "/solutions/ltv-maximisation" },
      ],
    },
  ],

  tools: [
    {
      title: "Tools",
      items: [
        { label: "AI Bot", href: "/tools/ai-bot" },
        { label: "CRO", href: "https://cro-arlox.vercel.app" },
      ],
    },
  ],

  products: [
    {
      title: "For Agencies",
      subtitle: "Get more clients, keep them longer",
      items: [
        { label: "Scale Your Agency", href: "/products/scale-your-agency" },
        { label: "Scientific Mediabuying™", href: "/products/scientific-mediabuying" },
        { label: "Client Retention Mastery™", href: "/products/client-retention-mastery" },
        { label: "AD Creative Mastery™", href: "/products/ad-creative-mastery" },
        { label: "1-on-1 Consulting (~$999)", href: "/products/agency-consulting" },
      ],
    },
    {
      title: "For Fashion Brands",
      subtitle: "Independently scale to $500K+/month",
      items: [
        { label: "Marketing Setup", href: "/products/fashion-marketing-dept" },
        { label: "1-on-1 Consulting", href: "/products/fashion-consulting" },
      ],
    },
    {
      title: "For Online Service Businesses",
      subtitle: "Qualified leads on autopilot",
      items: [
        { label: "LinkedIn Appointment Engine", href: "/products/linkedin-appointments" },
        { label: "1-on-1 Coaching", href: "/products/service-coaching" },
      ],
    },
  ],

  results: [
    {
      title: "Results",
      items: [
        { label: "Success Stories (330+ videos)", href: "/results/success-stories" },
        { label: "Case Studies", href: "/results/case-studies" },
        { label: "10X Ad Creatives", href: "/results/10x-ad-creatives" },
        { label: "Wall of Reviews", href: "/results/reviews" },
      ],
    },
  ],

  free: [
    {
      title: "Free",
      items: [
        { label: "Scaling Insights (Blog)", href: "/free/scaling-insights" },
        { label: "Arlox Channel", href: "/free/arlox-channel" },
        { label: "Van Channel", href: "/free/van-channel" },
        { label: "Dennis Channel", href: "/free/dennis-channel" },
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
        { label: "Careers", href: "/company/careers" },
      ],
    },
  ],
};

/* helpers */
const isExternal = (url) => /^https?:\/\//.test(url);

/* NAV HEIGHT - keep in sync with the nav's padding/size */
const NAV_HEIGHT = 64; // px (adjust if your nav is taller)

export default function Navbar() {
  const [openMega, setOpenMega] = useState(null);
  const [openMobile, setOpenMobile] = useState(false);
  const [mobileKey, setMobileKey] = useState(null);
  const hoverTimeout = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpenMega(null);
        setOpenMobile(false);
        setMobileKey(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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
    <>
      {/* Fixed nav: always visible. Use background blur and shadow to match theme. */}
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{ height: NAV_HEIGHT }}
        aria-hidden={false}
      >
        <div className="h-full">
          <div className="h-full bg-[#f5f5f5]/95 backdrop-blur-2xl border-b border-white/70 shadow-[0_6px_20px_rgba(2,6,23,0.08)]">
            <nav className="max-w-6xl mx-auto px-4 h-full" onMouseLeave={closeHover} aria-label="Main navigation">
              <div className="flex items-center justify-between h-full">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2" aria-label="Home">
                  <Image
                    src="/Arlox logo 6.png"
                    width={130}
                    height={42}
                    alt="Arlox"
                    className="h-9 w-auto md:h-10"
                    priority
                  />
                </Link>

                {/* Desktop nav */}
                <ul className="hidden md:flex items-center gap-6 text-sm">
                  {NAV_ITEMS.map((item) => (
                    <li
                      key={item.key}
                      className="relative"
                      onMouseEnter={() => openHover(item.key)}
                      onFocus={() => openHover(item.key)}
                    >
                      <button
                        type="button"
                        className="px-1 text-[#0f1724] font-medium hover:text-[#0b2540] select-none"
                        aria-haspopup="true"
                        aria-expanded={openMega === item.key}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Right side */}
                <div className="flex items-center gap-3">
                  <a
                    href="tel:+911234567890"
                    className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-full border border-slate-300 text-[#0f1724] hover:bg-white/60"
                  >
                    <Phone size={16} /> <span className="text-sm">Call</span>
                  </a>

                  <button
                    className="md:hidden p-2 rounded-lg hover:bg-white/60"
                    onClick={() => setOpenMobile((v) => !v)}
                    aria-label="Toggle mobile menu"
                    aria-expanded={openMobile}
                  >
                    {openMobile ? <X size={20} /> : <Menu size={20} />}
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/* Desktop mega menu */}
        {openMega && (
          <div
            className="absolute left-0 right-0 top-full translate-y-2 z-50"
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
                      {col.subtitle && <p className="text-[11px] text-slate-500 mb-2">{col.subtitle}</p>}
                      <ul className="space-y-2">
                        {col.items.map((link) => (
                          <li key={link.label}>
                            {isExternal(link.href) ? (
                              <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#071126] text-sm md:text-base hover:text-[#0b2540] transition block"
                              >
                                {link.label}
                              </a>
                            ) : (
                              <Link
                                href={link.href}
                                className="text-[#071126] text-sm md:text-base hover:text-[#0b2540] transition block"
                                onClick={() => setOpenMega(null)}
                              >
                                {link.label}
                              </Link>
                            )}
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
          <div className="md:hidden pb-4 mt-2" style={{ marginTop: NAV_HEIGHT }}>
            <div className="rounded-xl bg-white/98 backdrop-blur-xl shadow-[0_16px_50px_rgba(15,23,42,0.18)] border border-white/80">
              <ul className="flex flex-col text-sm font-medium text-[#0f1724]">
                {NAV_ITEMS.map((item) => {
                  const isOpen = mobileKey === item.key;
                  return (
                    <li key={item.key} className="px-4 py-2.5 border-b border-white/60">
                      <button
                        onClick={() => setMobileKey((prev) => (prev === item.key ? null : item.key))}
                        className="w-full flex items-center justify-between text-left select-none"
                        aria-expanded={isOpen}
                      >
                        <span>{item.label}</span>
                        <span className="text-slate-500">{isOpen ? "−" : "+"}</span>
                      </button>

                      <div className={`mt-2 overflow-hidden transition-all duration-200 ${isOpen ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"}`}>
                        {MEGA_CONTENT[item.key].map((col) => (
                          <div key={col.title} className="px-2 py-1">
                            <div className="text-xs uppercase text-slate-400 mb-1">{col.title}</div>
                            {col.subtitle && <p className="text-[11px] text-slate-500 mb-1">{col.subtitle}</p>}
                            <div className="grid gap-1">
                              {col.items.map((link) =>
                                isExternal(link.href) ? (
                                  <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="py-1 px-2 rounded hover:bg-slate-100 text-sm block"
                                  >
                                    {link.label}
                                  </a>
                                ) : (
                                  <Link
                                    key={link.label}
                                    href={link.href}
                                    className="py-1 px-2 rounded hover:bg-slate-100 text-sm block"
                                    onClick={() => {
                                      setOpenMobile(false);
                                      setMobileKey(null);
                                    }}
                                  >
                                    {link.label}
                                  </Link>
                                )
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="px-4 py-3 border-t border-white/70 flex gap-2">
                <a href="tel:+911234567890" className="px-4 py-2 rounded-full inline-flex items-center gap-2 bg-[#0f1724] text-white text-sm font-medium">
                  <Phone size={16} /> Call
                </a>
                <Link href="/book" className="px-4 py-2 rounded-full border border-slate-300 text-sm font-medium ml-auto" onClick={() => setOpenMobile(false)}>
                  Book a Call
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* NAV SPACER - prevents content jumping under fixed nav */}
      <div style={{ height: NAV_HEIGHT }} aria-hidden="true" />
    </>
  );
}

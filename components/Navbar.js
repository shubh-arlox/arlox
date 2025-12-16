"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import CalendlyCTA from "./CalendlyCTA";

/* NAV DATA */
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
      title: "Strategy",
      items: [
        { label: "Scientific Positioning", href: "/solutions/scientific-positioning" },
        { label: "Market Research & Analysis", href: "/solutions/market-research-analysis" },
        { label: "Scientific Product Testing", href: "/solutions/scientific-product-testing" },
        { label: "Scientific Angle Testing", href: "/solutions/scientific-angle-testing" },
        { label: "Business Diagnostics", href: "/solutions/business-diagnostics" },
      ],
    },
    {
      title: "Scaling",
      items: [
        { label: "Meta Ads Scaling (FB/IG)", href: "/solutions/meta-ads-scaling" },
        { label: "Google Ads (AI-Driven)", href: "/solutions/google-ads-ai" },
        { label: "TikTok Growth Engine", href: "/solutions/tiktok-growth-engine" },
        { label: "YouTube & Streaming Ads", href: "/solutions/youtube-streaming-ads" },
        { label: "Ad Creative Production System", href: "/solutions/ad-creative-production" },
      ],
    },
    {
      title: "Efficiency",
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
        { label: "BROAS Tool", href: "/free/broas-tool" },
        { label: "CRO", href: "https://cro-arlox.vercel.app" },
      ],
    },
  ],

  products: [
    {
      title: "For Agencies",
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
      items: [
        { label: "Marketing Setup", href: "/products/fashion-marketing-dept" },
        { label: "1-on-1 Consulting", href: "/products/fashion-consulting" },
      ],
    },
    {
      title: "For Online Service Businesses",
      items: [
        { label: "LinkedIn Appointment Engine", href: "/products/linkedin-appointments" },
        { label: "1-on-1 Coaching", href: "/products/service-coaching" },
      ],
    },
  ],

  // HORIZONTAL LAYOUTS FOR THESE THREE
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

const isExternal = (url) => /^https?:\/\//.test(url);
const NAV_HEIGHT = 64;

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

  // Check if section should be horizontal
  const isHorizontalSection = (key) => ['results', 'free', 'company','tools'].includes(key);

  return (
    <>
      {/* Fixed nav with enhanced glassmorphism */}
      <header
        className="fixed top-0 left-0 right-0 z-40"
        style={{ height: NAV_HEIGHT }}
      >
        <div className="h-full">
          <div className="h-full bg-white/80 backdrop-blur-xl border-b border-white/40 shadow-[0_8px_32px_rgba(31,38,135,0.15)]">
            <nav className="max-w-6xl mx-auto px-4 h-full" onMouseLeave={closeHover}>
              <div className="flex items-center justify-between h-full">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
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
                        className="px-1 text-[#0f1724] font-medium hover:text-[#0b2540] select-none transition-colors"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Right side */}
                <div className="flex items-center gap-4">
                 <CalendlyCTA calendlyUrl="https://calendly.com/arlox-/strategy-call-1">
  <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#f5f5f5] text-slate-700 hover:shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] shadow-[4px_4px_8px_rgba(163,177,198,0.4),-4px_-4px_8px_rgba(255,255,255,0.9)] transition-all text-sm font-medium">
    <Phone size={16} />
    <span className="hidden sm:inline">Book Call</span>
  </button>
</CalendlyCTA>


                  <button
                    className="md:hidden p-2 rounded-lg hover:bg-white/60 transition-colors"
                    onClick={() => setOpenMobile((v) => !v)}
                  >
                    {openMobile ? <X size={20} /> : <Menu size={20} />}
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/* Desktop mega menu with ENHANCED GLASSMORPHISM */}
        {openMega && (
          <div
            className="absolute left-0 right-0 top-full translate-y-2 z-45"
            onMouseEnter={() => openHover(openMega)}
            onMouseLeave={closeHover}
          >
            <div className="max-w-6xl mx-auto px-4">
              <div className="bg-white/90 backdrop-blur-2xl border border-white/60 rounded-2xl p-6 md:p-8 shadow-[0_20px_70px_rgba(31,38,135,0.25)]">
                
                {/* HORIZONTAL LAYOUT for results, free, company */}
                {isHorizontalSection(openMega) ? (
                  <div className="flex flex-wrap gap-8 justify-center">
                    {MEGA_CONTENT[openMega][0].items.map((link) => (
                      <div key={link.label}>
                        {isExternal(link.href) ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#071126] text-sm md:text-base hover:text-[#0b2540] transition-colors font-medium whitespace-nowrap"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="text-[#071126] text-sm md:text-base hover:text-[#0b2540] transition-colors font-medium whitespace-nowrap"
                            onClick={() => setOpenMega(null)}
                          >
                            {link.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  // GRID LAYOUT for solutions, tools, products
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {MEGA_CONTENT[openMega].map((col) => (
                      <div key={col.title}>
                        <div className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-3">
                          {col.title}
                        </div>
                        <ul className="space-y-2">
                          {col.items.map((link) => (
                            <li key={link.label}>
                              {isExternal(link.href) ? (
                                <a
                                  href={link.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[#071126] text-sm md:text-base hover:text-[#0b2540] transition-colors block"
                                >
                                  {link.label}
                                </a>
                              ) : (
                                <Link
                                  href={link.href}
                                  className="text-[#071126] text-sm md:text-base hover:text-[#0b2540] transition-colors block"
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
                )}
              </div>
            </div>
          </div>
        )}

        {/* Mobile menu - KEEPING YOUR VERSION */}
        {openMobile && (
          <div
            className="md:hidden fixed left-0 right-0"
            style={{ top: NAV_HEIGHT, zIndex: 40 }}
          >
            <div className="w-full px-4 pb-4">
              <div className="mx-auto w-full max-w-md rounded-xl bg-white/98 backdrop-blur-xl shadow-[0_16px_50px_rgba(15,23,42,0.18)] border border-white/80">
                <div className="max-h-[calc(100vh-120px)] overflow-auto">
                  <ul className="flex flex-col text-sm font-medium text-[#0f1724]">
                    {NAV_ITEMS.map((item) => {
                      const isOpen = mobileKey === item.key;
                      return (
                        <li key={item.key} className="px-4 py-2.5 border-b border-white/60">
                          <button
                            onClick={() => setMobileKey((prev) => (prev === item.key ? null : item.key))}
                            className="w-full flex items-center justify-between text-left select-none"
                          >
                            <span>{item.label}</span>
                            <span className="text-slate-500">{isOpen ? "−" : "+"}</span>
                          </button>

                          <div className={`mt-2 overflow-hidden transition-all duration-200 ${isOpen ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"}`}>
                            {MEGA_CONTENT[item.key].map((col) => (
                              <div key={col.title} className="px-2 py-1">
                                <div className="text-xs uppercase text-slate-400 mb-1">{col.title}</div>
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
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <div style={{ height: NAV_HEIGHT }} aria-hidden="true" />
    </>
  );
}

"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import CalendlyCTA from "./CalendlyCTA";

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
        { label: "CRO Tool Kit", href: "https://cro-arlox.vercel.app" },
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
        { label: "Arlox Channel", href: "https://www.youtube.com/@arlox-io" },
        { label: "Van Channel", href: "https://www.youtube.com/@vannlaniakea" },
        { label: "Dennis Channel", href: "https://www.youtube.com/@dennisgoyal4210" },
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
const NAV_HEIGHT = 56;

export default function Navbar() {
  const [openMega, setOpenMega] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [mobileKey, setMobileKey] = useState(null);
  
  const hoverTimeout = useRef(null);
  const closeTimeout = useRef(null);

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

  const handleMouseEnter = (key) => {
    clearTimeout(hoverTimeout.current);
    clearTimeout(closeTimeout.current);
    setIsClosing(false);
    setOpenMega(key);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      setIsClosing(true);
      closeTimeout.current = setTimeout(() => {
        setOpenMega(null);
        setIsClosing(false);
      }, 300);
    }, 150);
  };

  const closeImmediate = () => {
    setOpenMega(null);
    setIsClosing(false);
  };

  return (
    <>
      <style jsx global>{`
        /* Apple-style Animations */
        .mega-enter {
          animation: appleFadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .mega-exit {
          animation: appleFadeOut 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @keyframes appleFadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes appleFadeOut {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(-8px); }
        }

        /* Scrollbar Hiding Utility */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>

      {/* Main Navbar */}
      <header 
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
        style={{ height: NAV_HEIGHT }}
        onMouseLeave={handleMouseLeave}
      >
        {/* Apple Glass Background for Desktop */}
        <div className={`absolute inset-0 backdrop-blur-xl backdrop-saturate-[180%] transition-colors duration-300 ${
          openMega ? "bg-white" : "bg-[#fbfbfd]/80"
        }`}>
          <div className={`absolute bottom-0 left-0 right-0 h-[1px] bg-black/5 transition-opacity duration-200 ${
            openMega ? "opacity-0" : "opacity-100"
          }`} />
        </div>

        <nav className="relative h-full max-w-[1024px] mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0 z-20" onClick={closeImmediate}>
            <Image
              src="/Arlox logo 6.png"
              width={100}
              height={32}
              alt="Arlox"
              className="h-7 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex h-full items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <li 
                key={item.key} 
                className="h-full flex items-center"
                onMouseEnter={() => handleMouseEnter(item.key)}
              >
                <Link
                  href={item.key === "free" ? "#" : `/${item.key}`}
                  className={`text-[12px] tracking-wide transition-colors duration-200 ${
                    openMega === item.key ? "text-black" : "text-[#1d1d1f] hover:text-black/70"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-2 z-20">
            <CalendlyCTA calendlyUrl="https://calendly.com/arlox-/strategy-call-1">
              <button 
                className="flex items-center gap-1.5 px-3 py-1.5 md:py-1.5 rounded-full bg-[rgba(251,251,253,0.5)] text-[#1d1d1f] hover:bg-[rgba(251,251,253,0.9)] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.12),inset_-1px_-1px_2px_rgba(255,255,255,0.7)] transition-all duration-200 text-xs font-medium"
                aria-label="Book a call"
              >
                <Phone size={14} className="opacity-70" />
                <span className="hidden md:inline">Call</span>
              </button>
            </CalendlyCTA>

            <button
              className="md:hidden p-2 text-[#1d1d1f]"
              onClick={() => setOpenMobile(!openMobile)}
            >
              {openMobile ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mega Menu (Apple Style) */}
        {(openMega || isClosing) && (
          <div
            className={`absolute left-0 right-0 bg-white border-b border-black/5 overflow-hidden ${isClosing ? 'mega-exit' : 'mega-enter'}`}
            style={{ top: NAV_HEIGHT }}
            onMouseEnter={() => {
              clearTimeout(hoverTimeout.current);
              clearTimeout(closeTimeout.current);
              setIsClosing(false);
            }}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-[1024px] mx-auto px-6 py-10 pb-16">
              {openMega && MEGA_CONTENT[openMega] && (
                <div className="flex flex-row justify-start gap-20">
                  {MEGA_CONTENT[openMega].map((col, idx) => (
                    <div key={idx} className="flex flex-col gap-4 min-w-[160px]">
                      <h3 className="text-[12px] font-semibold text-[#86868b] uppercase tracking-wider">
                        {col.title}
                      </h3>
                      <ul className="flex flex-col gap-2.5">
                        {col.items.map((link) => (
                          <li key={link.label}>
                            {isExternal(link.href) ? (
                              <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[14px] font-medium text-[#1d1d1f] hover:text-[#06c] hover:underline hover:decoration-1 transition-colors leading-normal block"
                              >
                                {link.label}
                              </a>
                            ) : (
                              <Link
                                href={link.href}
                                onClick={closeImmediate}
                                className="text-[14px] font-medium text-[#1d1d1f] hover:text-[#06c] hover:underline hover:decoration-1 transition-colors leading-normal block"
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
        )}
      </header>

      {/* Backdrop for Desktop */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-500 ease-in-out ${
          (openMega && !isClosing) ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ top: NAV_HEIGHT }}
      />

      {/* MOBILE MENU (Original UI with hidden scrollbar) */}
      {openMobile && (
        <div className="md:hidden fixed inset-0 z-40" style={{ top: NAV_HEIGHT }}>
          {/* Transparent Backdrop (to click away) */}
          <div className="absolute inset-0 bg-transparent" onClick={() => setOpenMobile(false)} />
          
          <div className="relative w-full px-4 pt-4">
             {/* Original White Card Style + no-scrollbar class */}
            <div className="mx-auto w-full max-w-md rounded-xl bg-white/98 backdrop-blur-xl shadow-[0_16px_50px_rgba(15,23,42,0.18)] border border-white/80 overflow-hidden max-h-[80vh] overflow-y-auto no-scrollbar">
              <ul className="flex flex-col text-sm font-medium text-[#0f1724]">
                {NAV_ITEMS.map((item) => {
                  const isOpen = mobileKey === item.key;
                  return (
                    <li key={item.key} className="px-4 py-2.5 border-b border-white/60">
                      <button
                        onClick={() => setMobileKey((prev) => (prev === item.key ? null : item.key))}
                        className="w-full flex items-center justify-between text-left"
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
      )}

      <div style={{ height: NAV_HEIGHT }} />
    </>
  );
}
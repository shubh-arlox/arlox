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
const NAV_HEIGHT = 44;

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
        handleClose();
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

  const handleClose = useCallback(() => {
    setIsClosing(true);
    clearTimeout(closeTimeout.current);
    closeTimeout.current = setTimeout(() => {
      setOpenMega(null);
      setIsClosing(false);
    }, 800);
  }, []);

  const openHover = useCallback((key) => {
    clearTimeout(hoverTimeout.current);
    clearTimeout(closeTimeout.current);
    setIsClosing(false);
    setOpenMega(key);
  }, []);

  const closeHover = useCallback(() => {
    clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      handleClose();
    }, 140);
  }, [handleClose]);

  return (
    <>
      <style jsx global>{`
        @keyframes appleBlurIn {
          from {
            opacity: 0;
            backdrop-filter: blur(0px);
          }
          to {
            opacity: 1;
            backdrop-filter: blur(12px);
          }
        }
        @keyframes appleBlurOut {
          from {
            opacity: 1;
            backdrop-filter: blur(12px);
          }
          to {
            opacity: 0;
            backdrop-filter: blur(0px);
          }
        }
        @keyframes appleSlideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes appleSlideUp {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-10px);
          }
        }
      `}</style>

      {/* Apple-style Blur Overlay */}
      {(openMega || isClosing) && (
        <div 
          className="fixed inset-0 bg-black/20 z-30"
          style={{ 
            top: NAV_HEIGHT,
            animation: isClosing 
              ? 'appleBlurOut 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards'
              : 'appleBlurIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards'
          }}
          onClick={handleClose}
        />
      )}

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50" style={{ height: NAV_HEIGHT }}>
        <div className="h-full bg-[rgba(251,251,253,0.8)] backdrop-blur-[20px] backdrop-saturate-[180%] border-b border-[rgba(0,0,0,0.1)]">
          <nav className="max-w-[980px] mx-auto px-6 h-full" onMouseLeave={closeHover}>
            <div className="flex items-center justify-between md:justify-start h-full md:gap-12">
              
              {/* Logo - Better mobile positioning */}
              <Link href="/" className="flex items-center flex-shrink-0 -ml-2 md:ml-0">
                <Image
                  src="/Arlox logo 6.png"
                  width={110}
                  height={36}
                  alt="Arlox"
                  className="h-7 md:h-8 w-auto"
                  priority
                />
              </Link>

              {/* Nav Items */}
              <ul className="hidden md:flex items-center gap-8 text-xs font-normal flex-1">
                {NAV_ITEMS.map((item) => (
                  <li key={item.key} onMouseEnter={() => openHover(item.key)}>
                    <button
                      type="button"
                      className="text-[#1d1d1f] hover:text-[#06c] transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Right Side */}
              <div className="flex items-center gap-2 md:gap-3 flex-shrink-0 ml-auto">
                <CalendlyCTA calendlyUrl="https://calendly.com/arlox-/strategy-call-1">
                  <button 
                    className="flex items-center gap-2 px-2.5 md:px-3 py-1.5 rounded-full bg-[rgba(251,251,253,0.5)] text-[#1d1d1f] hover:bg-[rgba(251,251,253,0.8)] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.15),inset_-1px_-1px_2px_rgba(255,255,255,0.7)] transition-all duration-300 text-xs font-medium"
                    aria-label="Book a call"
                  >
                    <Phone size={14} className="opacity-70" />
                  </button>
                </CalendlyCTA>

                <button
                  className="md:hidden p-1.5 rounded-lg hover:bg-black/5 transition-colors"
                  onClick={() => setOpenMobile((v) => !v)}
                >
                  {openMobile ? <X size={18} /> : <Menu size={18} />}
                </button>
              </div>
            </div>
          </nav>
        </div>

        {/* Mega Menu */}
        {(openMega || isClosing) && (
          <div
            className="absolute left-0 right-0 top-full z-40"
            style={{ 
              animation: isClosing
                ? 'appleSlideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards'
                : 'appleSlideDown 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onMouseEnter={() => openHover(openMega)}
            onMouseLeave={closeHover}
          >
            <div className="bg-[rgba(251,251,253,0.95)] backdrop-blur-[20px] backdrop-saturate-[180%] border-b border-[rgba(0,0,0,0.1)]">
              <div className="max-w-[980px] mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {openMega && MEGA_CONTENT[openMega].map((col) => (
                    <div key={col.title}>
                      <div className="text-xs text-[#86868b] uppercase tracking-wider font-bold mb-4">
                        {col.title}
                      </div>
                      <ul className="space-y-3">
                        {col.items.map((link) => (
                          <li key={link.label}>
                            {isExternal(link.href) ? (
                              <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#1d1d1f] text-sm hover:text-[#06c] transition-colors duration-200 block font-semibold"
                              >
                                {link.label}
                              </a>
                            ) : (
                              <Link
                                href={link.href}
                                className="text-[#1d1d1f] text-sm hover:text-[#06c] transition-colors duration-200 block font-semibold"
                                onClick={handleClose}
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

        {/* Mobile Menu */}
        {openMobile && (
          <div className="md:hidden fixed left-0 right-0" style={{ top: NAV_HEIGHT, zIndex: 40 }}>
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
          </div>
        )}
      </header>

      <div style={{ height: NAV_HEIGHT }} aria-hidden="true" />
    </>
  );
}

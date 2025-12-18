"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import CalendlyCTA from "./CalendlyCTA";

const NAV_HEIGHT = 56;

// --- DATA ---
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

export default function Navbar() {
  const [openMega, setOpenMega] = useState(null);
  const [openMobile, setOpenMobile] = useState(false);
  const [mobileKey, setMobileKey] = useState(null);
  
  const hoverTimeout = useRef(null);

  // 1. Cleanup timers on unmount
  useEffect(() => {
    return () => {
      clearTimeout(hoverTimeout.current);
    };
  }, []);

  // 2. Handle Escape key
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

  // 3. Lock body scroll on mobile
  useEffect(() => {
    if (openMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [openMobile]);

  const handleOpen = (key) => {
    clearTimeout(hoverTimeout.current);
    setOpenMega(key);
  };

  const handleNavLeave = () => {
    clearTimeout(hoverTimeout.current);
    // 200ms forgiveness timer before instant close
    hoverTimeout.current = setTimeout(() => {
      setOpenMega(null);
    }, 200);
  };

  const handleMegaEnter = () => {
    clearTimeout(hoverTimeout.current);
  };

  const closeImmediate = () => {
    clearTimeout(hoverTimeout.current);
    setOpenMega(null);
    setOpenMobile(false);
  };

  return (
    <>
      <style>{`
        @keyframes appleFadeInDown {
          0% { opacity: 0; transform: translateY(-10px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .mega-enter { animation: appleFadeInDown 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Main Header */}
      <header 
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ height: NAV_HEIGHT }}
      >
        {/* Glass Background */}
        <div className={`absolute inset-0 backdrop-blur-xl backdrop-saturate-[180%] transition-colors duration-700 ${
          openMega ? "bg-white/95" : "bg-[#fbfbfd]/70"
        }`}>
          <div className={`absolute bottom-0 left-0 right-0 h-[1px] bg-black/5 transition-opacity duration-500 ${
            openMega ? "opacity-0" : "opacity-100"
          }`} />
        </div>

        <nav 
          className="relative h-full max-w-[1024px] mx-auto px-6 flex items-center justify-between"
          onMouseLeave={handleNavLeave}
        >
          {/* Logo */}
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
          <ul className="hidden md:flex h-full items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.key} className="h-full flex items-center">
                <Link
                  href="#"
                  role="button"
                  aria-expanded={openMega === item.key}
                  onClick={(e) => e.preventDefault()}
                  className={`
                    relative z-10 py-2 px-2 text-[13px] tracking-wide transition-colors duration-300
                    ${openMega === item.key ? "text-black font-medium" : "text-[#1d1d1f] hover:text-black/80"}
                  `}
                  onMouseEnter={() => handleOpen(item.key)}
                  onFocus={() => handleOpen(item.key)}
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
              className="md:hidden p-2 text-[#1d1d1f] active:scale-95 transition-transform"
              onClick={() => setOpenMobile(!openMobile)}
              aria-label="Toggle menu"
            >
              {openMobile ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* === MEGA MENU (NO EXIT ANIMATION) === */}
        {openMega && (
          <div
            className="absolute left-0 right-0 z-40 outline-none" 
            style={{ top: NAV_HEIGHT }}
            onMouseEnter={handleMegaEnter}
            onMouseLeave={handleNavLeave}
          >
            {/* INVISIBLE BRIDGE */}
            <div className="absolute top-0 left-0 right-0 h-4 -mt-4 bg-transparent z-50" />
            
            {/* ANIMATED CONTENT (ENTRY ONLY) */}
            <div className="bg-white border-b border-black/5 overflow-hidden shadow-sm origin-top mega-enter">
              <div className="max-w-[1024px] mx-auto px-6 py-12 pb-20 relative z-10">
                {MEGA_CONTENT[openMega] && (
                  <div className="grid grid-cols-4 gap-10">
                    {MEGA_CONTENT[openMega].map((col, idx) => (
                      <div key={idx} className="flex flex-col gap-5">
                        <h3 className="text-[11px] font-semibold text-[#86868b] uppercase tracking-wider">
                          {col.title}
                        </h3>
                        <ul className="flex flex-col gap-3">
                          {col.items.map((link) => (
                            <li key={link.label}>
                              <Link
                                href={link.href}
                                target={isExternal(link.href) ? "_blank" : undefined}
                                rel={isExternal(link.href) ? "noopener noreferrer" : undefined}
                                onClick={closeImmediate}
                                className="group flex items-center gap-1 text-[14px] font-medium text-[#1d1d1f] hover:text-[#0066CC] transition-colors"
                              >
                                {link.label}
                                {isExternal(link.href) && (
                                  <ChevronRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                )}
                              </Link>
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
      </header>

      {/* Desktop Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/10 backdrop-blur-[2px] z-30 transition-opacity duration-300 ${
          openMega ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ top: NAV_HEIGHT }}
      />

      {/* Mobile Menu Overlay */}
      {openMobile && (
        <div className="md:hidden fixed inset-0 z-50 bg-white/60 backdrop-blur-xl pt-4" style={{ top: NAV_HEIGHT }}>
          <div className="h-full overflow-y-auto no-scrollbar pb-20">
            <div className="px-6 flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isOpen = mobileKey === item.key;
                return (
                  <div key={item.key} className="border-b border-black/5 last:border-0">
                    <button
                      onClick={() => setMobileKey(isOpen ? null : item.key)}
                      className="w-full py-4 flex items-center justify-between text-left"
                    >
                      <span className={`text-[17px] tracking-tight ${isOpen ? "font-semibold text-black" : "font-medium text-[#1d1d1f]"}`}>
                        {item.label}
                      </span>
                      <ChevronRight 
                        size={16} 
                        className={`text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-90 text-black" : ""}`} 
                      />
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? "max-h-[1000px] opacity-100 mb-6" : "max-h-0 opacity-0"
                    }`}>
                      {MEGA_CONTENT[item.key]?.map((col, idx) => (
                        <div key={idx} className="mb-6 last:mb-0 pl-2 border-l border-black/10 ml-1">
                           <h4 className="text-[11px] font-semibold text-[#86868b] uppercase tracking-wider mb-3 pl-3">
                            {col.title}
                          </h4>
                          <div className="flex flex-col gap-3 pl-3">
                            {col.items.map((link) => (
                              <Link
                                key={link.label}
                                href={link.href}
                                className="text-[15px] text-[#424245] block active:text-black"
                                onClick={closeImmediate}
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Spacer to prevent content overlap */}
      <div style={{ height: NAV_HEIGHT }} />
    </>
  );
}

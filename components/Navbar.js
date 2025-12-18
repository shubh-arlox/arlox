"use client";

import { useState, useRef, useEffect } from "react";
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

  // --- REFINED HOVER LOGIC ---
  const handleMouseEnter = (key) => {
    clearTimeout(hoverTimeout.current);
    clearTimeout(closeTimeout.current);
    setIsClosing(false);
    setOpenMega(key);
  };

  const handleNavLeave = () => {
    // Only close if we leave the ENTIRE nav container. 
    // This allows moving between links (over empty space) without closing.
    clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      setIsClosing(true);
      closeTimeout.current = setTimeout(() => {
        setOpenMega(null);
        setIsClosing(false);
      }, 600); 
    }, 150);
  };

  const handleMegaEnter = () => {
    // If we enter the mega menu content (downwards), stop the close timer.
    clearTimeout(hoverTimeout.current);
    clearTimeout(closeTimeout.current);
    setIsClosing(false);
  };

  const closeImmediate = () => {
    setOpenMega(null);
    setIsClosing(false);
  };

  return (
    <>
      <style>{`
        /* APPLE "PREMIUM SLOW" ANIMATION FOR MENU OPEN/CLOSE */
        .mega-enter {
          animation: appleFadeInDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .mega-exit {
          animation: appleFadeOutUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes appleFadeInDown {
          0% { opacity: 0; transform: translateY(-14px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes appleFadeOutUp {
          0% { opacity: 1; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(-10px) scale(0.99); }
        }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Main Navbar */}
      <header 
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ height: NAV_HEIGHT }}
      >
        {/* Background Blur */}
        <div className={`absolute inset-0 backdrop-blur-xl backdrop-saturate-[180%] transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          openMega ? "bg-white" : "bg-[#fbfbfd]/80"
        }`}>
          <div className={`absolute bottom-0 left-0 right-0 h-[1px] bg-black/5 transition-opacity duration-500 ${
            openMega ? "opacity-0" : "opacity-100"
          }`} />
        </div>

        {/* NAV CONTAINER 
          onMouseLeave is placed HERE instead of individual links. 
          This means you can hover the "empty space" between links without the menu closing 
          (as long as you stay within the navbar height).
        */}
        <nav 
          className="relative h-full max-w-[1024px] mx-auto px-6 flex items-center justify-between"
          onMouseLeave={handleNavLeave}
        >
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
              <li key={item.key} className="h-full flex items-center relative">
                {/* NOTE: No onMouseLeave on the Link itself. 
                  Leaving the Link to hit the gap will do nothing (Menu stays open).
                */}
                <Link
                  href="#" 
                  onClick={(e) => e.preventDefault()}
                  className={`
                    relative z-10 py-2 px-1 text-[12px] tracking-wide transition-colors duration-500 cursor-default
                    ${openMega === item.key ? "text-black font-medium" : "text-[#1d1d1f] hover:text-black/80"}
                  `}
                  onMouseEnter={() => handleMouseEnter(item.key)}
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
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[rgba(251,251,253,0.5)] text-[#1d1d1f] hover:bg-[rgba(251,251,253,0.9)] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.12),inset_-1px_-1px_2px_rgba(255,255,255,0.7)] transition-all duration-300 text-xs font-medium"
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

        {/* Mega Menu Dropdown */}
        {(openMega || isClosing) && (
          <div
            className={`absolute left-0 right-0 bg-white border-b border-black/5 overflow-hidden ${isClosing ? 'mega-exit' : 'mega-enter'}`}
            style={{ top: NAV_HEIGHT }}
            onMouseEnter={handleMegaEnter} // Keep open if we move down into content
            onMouseLeave={handleNavLeave}  // Close if we leave the content area
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

      {/* Backdrop (Closes on Hover) */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          (openMega && !isClosing) ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ top: NAV_HEIGHT }}
        onMouseEnter={handleNavLeave}
      />

      {/* MOBILE MENU - Solid White Background */}
      {openMobile && (
        <div className="md:hidden fixed inset-0 z-40" style={{ top: NAV_HEIGHT }}>
          <div className="absolute inset-0 bg-transparent" onClick={() => setOpenMobile(false)} />
          <div className="relative w-full px-4 pt-4">
            <div className="mx-auto w-full max-w-md rounded-xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-gray-100 overflow-hidden max-h-[80vh] overflow-y-auto no-scrollbar">
              <ul className="flex flex-col text-sm font-medium text-[#1d1d1f]">
                {NAV_ITEMS.map((item) => {
                  const isOpen = mobileKey === item.key;
                  return (
                    <li key={item.key} className="px-5 py-3 border-b border-gray-100 last:border-0">
                      <button
                        onClick={() => setMobileKey((prev) => (prev === item.key ? null : item.key))}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="text-[15px]">{item.label}</span>
                        <span className="text-gray-400 font-light text-lg">{isOpen ? "−" : "+"}</span>
                      </button>
                      <div className={`mt-1 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[900px] opacity-100 pt-2" : "max-h-0 opacity-0"}`}>
                        {MEGA_CONTENT[item.key] && MEGA_CONTENT[item.key].map((col) => (
                          <div key={col.title} className="py-2">
                            <div className="text-[11px] uppercase text-gray-400 font-semibold tracking-wide mb-1.5">{col.title}</div>
                            <div className="flex flex-col gap-1">
                              {col.items.map((link) =>
                                isExternal(link.href) ? (
                                  <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="py-1.5 px-2 -ml-2 rounded-lg hover:bg-gray-50 text-[14px] text-[#1d1d1f] block"
                                  >
                                    {link.label}
                                  </a>
                                ) : (
                                  <Link
                                    key={link.label}
                                    href={link.href}
                                    className="py-1.5 px-2 -ml-2 rounded-lg hover:bg-gray-50 text-[14px] text-[#1d1d1f] block"
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
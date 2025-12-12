"use client";

import React, { useState, useEffect, useRef } from 'react';

/*
  Single-file React component converted from the provided HTML file.
  - TailwindCSS classes are used throughout (assumes Tailwind is configured in the host app).
  - Small custom CSS is injected via a <style> tag to preserve the glass/neumorphic utilities and animations.
  - All inline SVG icons from the original are preserved as React components.
  - Scroll and CTA use React refs (no direct DOM id lookups).

  Usage: drop this file into a Next.js or CRA project that has Tailwind installed.
*/

/* ----------------------------- Icons ----------------------------- */
const Icon = ({ children, size = 24, className = '', color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {children}
  </svg>
);

const ArrowRight = (props) => (
  <Icon {...props}><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></Icon>
);
const BarChart2 = (props) => (
  <Icon {...props}><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></Icon>
);
const TrendingUp = (props) => (
  <Icon {...props}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></Icon>
);
const AlertTriangle = (props) => (
  <Icon {...props}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></Icon>
);
const Check = (props) => (<Icon {...props}><polyline points="20 6 9 17 4 12" /></Icon>);
const X = (props) => (<Icon {...props}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></Icon>);
const CheckCircle = (props) => (<Icon {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></Icon>);
const ShieldAlert = (props) => (<Icon {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></Icon>);
const Cpu = (props) => (<Icon {...props}><rect x="4" y="4" width="16" height="16" rx="2" ry="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" /></Icon>);
const Layers = (props) => (<Icon {...props}><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></Icon>);
const DollarSign = (props) => (<Icon {...props}><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></Icon>);
const Activity = (props) => (<Icon {...props}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></Icon>);
const Play = (props) => (<Icon {...props}><polygon points="5 3 19 12 5 21 5 3" /></Icon>);
const Search = (props) => (<Icon {...props}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></Icon>);
const Target = (props) => (<Icon {...props}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></Icon>);
const Users = (props) => (<Icon {...props}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></Icon>);
const Layout = (props) => (<Icon {...props}><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></Icon>);
const Zap = (props) => (<Icon {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></Icon>);
const Clock = (props) => (<Icon {...props}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></Icon>);
const MousePointer = (props) => (<Icon {...props}><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" /><path d="M13 13l6 6" /></Icon>);
const HelpCircle = (props) => (<Icon {...props}><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></Icon>);
const ChevronDown = (props) => (<Icon {...props}><polyline points="6 9 12 15 18 9" /></Icon>);
const ChevronUp = (props) => (<Icon {...props}><polyline points="18 15 12 9 6 15" /></Icon>);
const Menu = (props) => (<Icon {...props}><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></Icon>);

/* --------------------------- Atomic UI --------------------------- */
const Button = ({ children, variant = 'primary', className = '', onClick }) => {
  const base = "px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-primary-accent text-white shadow-md hover:bg-primary-hover hover:shadow-lg focus:ring-primary-accent",
    secondary: "bg-transparent border-2 border-primary-accent text-primary-accent hover:bg-secondary-bg",
    ghost: "bg-transparent text-primary-text hover:bg-secondary-bg"
  };
  return (
    <button onClick={onClick} className={`${base} ${variants[variant] || variants.primary} ${className}`}>
      {children}
    </button>
  );
};

const Badge = ({ children, color = 'blue' }) => {
  const colors = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    red: "bg-red-50 text-red-600",
    purple: "bg-purple-50 text-purple-600"
  };
  return (
    <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded-full ${colors[color]}`}>
      {children}
    </span>
  );
};

const Section = ({ children, className = '', id = '' }) => (
  <section id={id} className={`py-20 md:py-32 px-6 ${className}`}>
    <div className="max-w-7xl mx-auto">{children}</div>
  </section>
);

/* ----------------------- Interactive Components ---------------------- */
const ROASDashboard = () => {
  const [roas, setRoas] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRoas(prev => (prev < 4.8 ? +(prev + 0.1).toFixed(1) : 4.8)), 50);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="glass-card p-6 rounded-2xl shadow-glow relative overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-status-success animate-pulse"></div>
          <span className="text-xs font-mono uppercase text-secondary-text">Live Validation</span>
        </div>
        <Badge color="green">Profitable</Badge>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-sm text-secondary-text mb-1">Return on Ad Spend</p>
          <div className="text-4xl font-bold text-primary-accent">{roas.toFixed(1)}x</div>
        </div>
        <div>
          <p className="text-sm text-secondary-text mb-1">Testing Spend</p>
          <div className="text-4xl font-bold text-primary-text">$450</div>
        </div>
      </div>

      <div className="h-24 flex items-end gap-2">
        {[20,35,45,30,60,75,90,85,95,100].map((h,i)=> (
          <div key={i} className="w-full bg-primary-accent opacity-20 hover:opacity-100 transition-all duration-300 rounded-t-sm" style={{height: `${h}%`, animation: `pulse-soft ${1 + i * 0.1}s infinite`}} />
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between text-xs text-secondary-text">
        <span>Product ID: #ALX-992</span>
        <span>Decision: MANUFACTURE</span>
      </div>
    </div>
  );
};

const GamblingVisual = () => (
  <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-red-50 text-center overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-status-error" />
    <div className="mb-4 flex justify-center text-status-error"><AlertTriangle size={48} strokeWidth={1.5} /></div>
    <h3 className="text-xl font-bold text-primary-text mb-2">The Traditional Gamble</h3>
    <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg mb-4 font-mono text-sm">
      <span>Invest</span>
      <span className="text-status-error">-$150,000</span>
    </div>
    <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg font-mono text-sm">
      <span>Result</span>
      <span className="text-secondary-text animate-pulse">???</span>
    </div>
    <div className="mt-6 text-xs text-secondary-text uppercase tracking-widest">High Risk Protocol</div>
  </div>
);

const ComparisonToggle = () => {
  const [mode, setMode] = useState('arlox');
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex justify-center mb-12">
        <div className="bg-secondary-bg p-1 rounded-full inline-flex">
          <button onClick={()=>setMode('traditional')} className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${mode==='traditional' ? 'bg-white text-status-error shadow-sm' : 'text-secondary-text'}`}>Traditional Launch</button>
          <button onClick={()=>setMode('arlox')} className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${mode==='arlox' ? 'bg-primary-accent text-white shadow-sm' : 'text-secondary-text'}`}>Scientific Method</button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
            <span className="text-secondary-text font-medium">Time to Validate</span>
            <span className={`font-bold ${mode==='arlox' ? 'text-primary-accent' : 'text-status-error'}`}>{mode==='arlox' ? '2-4 Weeks' : '4-6 Months'}</span>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
            <span className="text-secondary-text font-medium">Capital at Risk</span>
            <span className={`font-bold ${mode==='arlox' ? 'text-status-success' : 'text-status-error'}`}>{mode==='arlox' ? '$2k / product' : '$50k+ upfront'}</span>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
            <span className="text-secondary-text font-medium">Success Rate</span>
            <span className={`font-bold ${mode==='arlox' ? 'text-status-success' : 'text-status-warning'}`}>{mode==='arlox' ? '80-90%' : '40-60%'}</span>
          </div>
        </div>

        <div className={`p-8 rounded-xl flex items-center justify-center transition-colors duration-500 ${mode==='arlox' ? 'bg-blue-50' : 'bg-red-50'}`}>
          {mode==='arlox' ? (
            <div className="text-center animate-fade-up">
              <CheckCircle size={64} className="mx-auto text-primary-accent mb-4" />
              <h4 className="text-lg font-bold text-primary-accent">Profit Guaranteed</h4>
              <p className="text-sm text-secondary-text mt-2">Before production starts.</p>
            </div>
          ) : (
            <div className="text-center animate-fade-up">
              <ShieldAlert size={64} className="mx-auto text-status-error mb-4" />
              <h4 className="text-lg font-bold text-status-error">Inventory Trap</h4>
              <p className="text-sm text-secondary-text mt-2">Cash flow frozen in warehouse.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const FlipCard = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className="group perspective h-64 w-full cursor-pointer" onClick={()=>setIsFlipped(!isFlipped)}>
      <div className={`relative w-full h-full duration-500 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        <div className="absolute w-full h-full backface-hidden bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center items-center text-center">
          <HelpCircle className="text-primary-accent mb-4" size={32} />
          <h4 className="font-semibold text-lg text-primary-text">{question}</h4>
          <span className="text-xs text-secondary-text mt-4 uppercase tracking-wide">Click to reveal reality</span>
        </div>
        <div className="absolute w-full h-full backface-hidden bg-secondary-bg border border-blue-100 p-8 rounded-2xl rotate-y-180 flex flex-col justify-center items-center text-center">
          <h4 className="font-bold text-primary-accent mb-2">The Reality</h4>
          <p className="text-sm text-secondary-text">{answer}</p>
        </div>
      </div>
    </div>
  );
};

/* ----------------------------- Main App ----------------------------- */
export default function ArloxLanding() {
  const [scrolled, setScrolled] = useState(false);
  const ctaRef = useRef(null);

  useEffect(()=>{
    const handle = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  },[]);

  const scrollToCta = () => ctaRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen">
      <style>{`
        /* small set of custom utilities (keeps the look identical to original) */
        :root{
          --primary-accent: #1B5FFF;
          --primary-hover: #1450E5;
        }
        .glass-card{ background: rgba(255,255,255,0.7); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.3); }
        .text-gradient{ background: linear-gradient(135deg, #1B5FFF 0%, #7A40D6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .bg-gradient-primary{ background: linear-gradient(135deg, #1B5FFF 0%, #7A40D6 100%); }
        .perspective{ perspective: 1000px; }
        .rotate-y-180{ transform: rotateY(180deg); }
        .preserve-3d{ transform-style: preserve-3d; }
        .backface-hidden{ backface-visibility: hidden; }
        @keyframes fadeUp{ from{ opacity:0; transform: translateY(20px);} to{ opacity:1; transform: translateY(0);} }
        .animate-fade-up{ animation: fadeUp 0.6s ease-out forwards; }
        @keyframes pulse-soft{ 0%,100%{ box-shadow: 0 0 0 0 rgba(27,95,255,0.4);} 70%{ box-shadow: 0 0 0 10px rgba(27,95,255,0);} }
        .animate-pulse-soft{ animation: pulse-soft 2s infinite; }
        .shadow-glow{ box-shadow: 0 10px 30px rgba(27,95,255,0.08); }
        /* color tokens for tailwind utility compatibility (if your Tailwind config maps these) */
        .text-primary-accent{ color: var(--primary-accent); }
        .bg-primary-accent{ background-color: var(--primary-accent); }
        .bg-primary-hover{ background-color: var(--primary-hover); }
        .text-primary-text{ color: #09111A; }
        .text-secondary-text{ color: #4A5568; }
        .bg-secondary-bg{ background-color: #F5F8FF; }
        .text-status-success{ color: #10B981; }
        .text-status-error{ color: #EF4444; }
        .text-status-warning{ color: #F59E0B; }
        .bg-status-success{ background-color: #10B981; }
        .bg-status-error{ background-color: #EF4444; }
        .bg-status-warning{ background-color: #F59E0B; }
      `}</style>

      {/* 1. Hero */}
      <Section className="pt-32 md:pt-48 bg-secondary-bg relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <Badge>Scientific Product Testing</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mt-6 mb-6 leading-tight text-primary-text">Launch Products That Are <span className="text-gradient">Proven to Sell.</span></h1>
            <p className="text-lg text-secondary-text mb-8 max-w-lg">What if you knew—with certainty—that your next collection would be profitable before you spent a dollar on inventory? Eliminate the guessing game.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToCta}>Validate Your Line →</Button>
              <Button variant="ghost">See How It Works <Play size={16} className="ml-2 inline" /></Button>
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30" />
            <ROASDashboard />

            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-50 flex items-center gap-3 animate-pulse-soft">
              <div className="bg-green-100 p-2 rounded-full text-green-600"><TrendingUp size={20} /></div>
              <div>
                <div className="text-xs text-gray-500">Inventory Turnover</div>
                <div className="font-bold text-gray-900">+420%</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Problem & Consequences */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">The Fashion Industry's <span className="text-status-error">Expensive Secret</span></h2>
          <p className="text-secondary-text">You design. You invest. You hope. But committing $50k+ to inventory before validating demand isn't business strategy. It's a gamble.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-secondary-bg p-8 rounded-2xl border border-transparent hover:border-gray-200 transition-all">
            <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-6 shadow-sm text-status-error"><DollarSign /></div>
            <h3 className="text-xl font-bold mb-3">Cash Flow Trap</h3>
            <p className="text-secondary-text text-sm leading-relaxed">20-30% of inventory becomes dead stock annually. Your capital sits in warehouses while opportunities pass you by.</p>
          </div>

          <div className="bg-secondary-bg p-8 rounded-2xl border border-transparent hover:border-gray-200 transition-all">
            <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-6 shadow-sm text-status-warning"><TrendingUp className="rotate-180" /></div>
            <h3 className="text-xl font-bold mb-3">Brand Erosion</h3>
            <p className="text-secondary-text text-sm leading-relaxed">Desperate to move inventory, you discount. 30% off. 50% off. Your brand becomes synonymous with "cheap".</p>
          </div>

          <div className="bg-secondary-bg p-8 rounded-2xl border border-transparent hover:border-gray-200 transition-all">
            <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-6 shadow-sm text-secondary-text"><Clock /></div>
            <h3 className="text-xl font-bold mb-3">Lost Time</h3>
            <p className="text-secondary-text text-sm leading-relaxed">Competitors move faster while you're stuck dealing with yesterday's mistakes.</p>
          </div>
        </div>

        <div className="mt-16 max-w-md mx-auto"><GamblingVisual /></div>
      </Section>

      {/* The Solution */}
      <Section id="method" className="bg-secondary-bg">
        <div className="text-center mb-16">
          <Badge color="purple">The Arloxian Method</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">Scientific Product Testing</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start relative">
          <div className="md:sticky md:top-32 hidden md:block">
            <div className="bg-white rounded-2xl p-8 shadow-glass border border-white/50">
              <div className="flex items-center justify-center h-64 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                <div className="text-center">
                  <Cpu className="mx-auto text-primary-accent mb-4 opacity-50" size={48} />
                  <p className="text-sm text-secondary-text">AI Generating Market Assets...</p>
                </div>
              </div>
              <div className="mt-6 flex justify-between">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-accent">3-5 Days</div>
                  <div className="text-xs uppercase text-secondary-text">Turnaround</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-status-success">98%</div>
                  <div className="text-xs uppercase text-secondary-text">Cost Savings</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {[
              { title: "Market-Ready Visuals", desc: "Using proprietary AI, we create product demo videos indistinguishable from professional shoots. No inventory required." },
              { title: "Controlled Tests", desc: "Strategic experiments across Meta & TikTok with small budgets ($300-$2K per product)." },
              { title: "Observe Demand", desc: "Real customers react. We track CTR, engagement, and add-to-cart rates." },
              { title: "Quantify Profitability", desc: "Calculate exact CAC and ROAS. Is this product profitable? The data answers." },
              { title: "Green or Red Light", desc: "Green: Invest and scale. Red: Kill it and save your capital." }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-4 group">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-primary-accent text-white flex items-center justify-center font-bold text-sm z-10">{idx+1}</div>
                  {idx !== 4 && <div className="w-0.5 h-full bg-gray-200 mt-2 group-hover:bg-blue-200 transition-colors" />}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold mb-2 text-primary-text">{step.title}</h3>
                  <p className="text-secondary-text">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Evidence */}
      <Section id="evidence">
        <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
          <div><div className="text-5xl font-bold text-primary-text mb-2">5-8x</div><div className="text-sm uppercase tracking-wide text-secondary-text">Average ROAS</div></div>
          <div><div className="text-5xl font-bold text-primary-text mb-2">$340K</div><div className="text-sm uppercase tracking-wide text-secondary-text">Dead Stock Avoided</div></div>
          <div><div className="text-5xl font-bold text-primary-text mb-2">87%</div><div className="text-sm uppercase tracking-wide text-secondary-text">Sell-Through Rate</div></div>
        </div>

        <div className="bg-secondary-bg rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge>Case Study</Badge>
              <h3 className="text-2xl font-bold mt-4 mb-4">Emerging Streetwear Brand</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3"><CheckCircle className="text-status-success mt-1 flex-shrink-0" size={18} /><span className="text-secondary-text">Tested 15 t-shirt designs with limited cash flow.</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="text-status-success mt-1 flex-shrink-0" size={18} /><span className="text-secondary-text">Found 4 clear winners (4.5x ROAS), eliminated 5 losers.</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="text-status-success mt-1 flex-shrink-0" size={18} /><span className="text-secondary-text font-semibold text-primary-text">Saved $27k in bad inventory, generated $81k revenue.</span></li>
              </ul>
              <p className="italic text-secondary-text border-l-4 border-primary-accent pl-4">"Before Arlox, we were guessing. Now we only produce what we know will sell."</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="text-sm font-bold text-secondary-text uppercase mb-4">Performance Matrix</h4>
              <div className="grid grid-cols-5 gap-2">
                {[...Array(15)].map((_, i) => (
                  <div key={i} className={`aspect-square rounded-md flex items-center justify-center text-xs font-bold text-white ${i < 4 ? 'bg-status-success' : i < 10 ? 'bg-status-warning' : 'bg-status-error'}`}>{i < 4 ? 'W' : i < 10 ? 'Avg' : 'Kill'}</div>
                ))}
              </div>
              <div className="mt-4 flex justify-between text-xs text-secondary-text">
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-status-success" /> Winner</span>
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-status-warning" /> Moderate</span>
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-status-error" /> Kill</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">4 Weeks. <span className="text-primary-accent">Zero Risk.</span></h2>
          <div className="border-l-2 border-gray-100 ml-4 md:ml-0 space-y-12">
            <div className="relative pl-8 md:pl-0">
              <div className="md:absolute md:left-0 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary-accent border-4 border-white shadow-sm"></div>
              <div className="md:grid md:grid-cols-5 gap-8">
                <div className="md:col-span-1 text-sm font-bold text-primary-accent uppercase tracking-wide">Week 1</div>
                <div className="md:col-span-4"><h4 className="text-xl font-bold mb-2">Asset Creation & Setup</h4><p className="text-secondary-text">We audit your pipeline. Our AI creates professional product videos indistinguishable from real shoots. Your time investment: 2 hours.</p></div>
              </div>
            </div>

            <div className="relative pl-8 md:pl-0">
              <div className="md:absolute md:left-0 md:-translate-x-1/2 w-4 h-4 rounded-full bg-gray-300 border-4 border-white shadow-sm"></div>
              <div className="md:grid md:grid-cols-5 gap-8">
                <div className="md:col-span-1 text-sm font-bold text-secondary-text uppercase tracking-wide">Week 2-3</div>
                <div className="md:col-span-4"><h4 className="text-xl font-bold mb-2">Live Testing</h4><p className="text-secondary-text">Controlled experiments run on Meta/TikTok. We monitor CTR, conversions, and qualitative feedback daily.</p></div>
              </div>
            </div>

            <div className="relative pl-8 md:pl-0">
              <div className="md:absolute md:left-0 md:-translate-x-1/2 w-4 h-4 rounded-full bg-status-success border-4 border-white shadow-sm"></div>
              <div className="md:grid md:grid-cols-5 gap-8">
                <div className="md:col-span-1 text-sm font-bold text-status-success uppercase tracking-wide">Week 4</div>
                <div className="md:col-span-4"><h4 className="text-xl font-bold mb-2">The Verdict</h4><p className="text-secondary-text">Comprehensive report. Clear Green/Red light recommendations. You produce only the winners.</p></div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Uniqueness */}
      <Section className="bg-secondary-bg">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Arlox is <span className="text-primary-accent">Different</span></h2>
            <div className="space-y-6">
              {[{ title: "Proprietary AI Tech", desc: "No $10k photoshoots. We generate photorealistic assets in days." },{ title: "Scientific Methodology", desc: "Not just 'running ads'. Statistically valid experiments with controlled variables." },{ title: "Holistic Business Impact", desc: "We measure success by bottom-line profit, not just vanity metrics." }].map((item,i)=> (
                <div key={i} className="flex gap-4"><div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-primary-accent flex-shrink-0"><Zap size={20} /></div><div><h4 className="font-bold text-lg">{item.title}</h4><p className="text-sm text-secondary-text">{item.desc}</p></div></div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-glass border border-white/50">
            <div className="flex justify-between items-end mb-6">
              <div>
                <div className="text-xs uppercase text-secondary-text mb-1">Traditional Photoshoot</div>
                <div className="text-2xl font-bold text-status-error">$15,000+</div>
                <div className="text-xs text-secondary-text">4-8 Weeks</div>
              </div>
              <div className="text-right">
                <div className="text-xs uppercase text-secondary-text mb-1">Arlox AI Generation</div>
                <div className="text-2xl font-bold text-status-success">$0 (Included)</div>
                <div className="text-xs text-secondary-text">3-5 Days</div>
              </div>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden"><div className="h-full w-full bg-gradient-to-r from-red-400 to-green-500"></div></div>
            <div className="mt-4 text-center text-sm font-medium text-primary-accent">Indistinguishable Quality. Fraction of the Cost.</div>
          </div>
        </div>
      </Section>

      {/* Comparison */}
      <Section className="bg-white text-center">
        <Badge color="blue">The Choice</Badge>
        <h2 className="text-3xl font-bold mt-4 mb-12">Old Way vs. The Arloxian Way</h2>
        <ComparisonToggle />
      </Section>

      {/* Objections */}
      <Section className="bg-secondary-bg">
        <div className="text-center mb-12"><h2 className="text-3xl font-bold">Let's Address Your Concerns</h2></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { q: "This sounds expensive.", a: "Testing 10 products costs $3K-$15K. Producing them without testing costs $80K+. Testing doesn't cost money; it saves you from losing it." },
            { q: "My products are unique/luxury.", a: "The principle—validate demand before production—applies universally. We've worked across luxury, streetwear, and mass market." },
            { q: "What if customers are disappointed by AI?", a: "Our AI videos are photorealistic. Customers can't tell. Tests run briefly, and refunds are handled seamlessly." },
            { q: "I don't have time.", a: "Total commitment: 4-7 hours over 4 weeks. It's the highest-ROI time investment you'll make this year." },
            { q: "What if test results are wrong?", a: "Products with strong test performance succeed 85-90% of the time. Would you rather bet on 90% probability or blind luck?" },
            { q: "My competitors aren't doing this.", a: "That's exactly WHY you should. While they guess and lose money on dead stock, you'll know and invest only in winners." }
          ].map((item,i)=> <FlipCard key={i} question={item.q} answer={item.a} />)}
        </div>
      </Section>

      {/* CTA */}
      <Section id="cta" className="bg-white" ref={ctaRef}>
        <div className="bg-gradient-primary rounded-3xl p-8 md:p-20 text-center text-white shadow-glow relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Stop Gambling With Your Brand's Future.</h2>
            <p className="text-blue-100 text-lg mb-10">Six months from now, will you be celebrating products you knew would succeed? Or dealing with inventory that didn't sell?</p>
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg mx-auto text-primary-text">
              <h3 className="text-xl font-bold mb-4">Book Your Free Strategy Session</h3>
              <p className="text-secondary-text text-sm mb-6">We work with a limited number of brands per quarter. No sales pitch, just a strategic roadmap.</p>
              <Button className="w-full justify-center">Schedule Strategy Call →</Button>
              <div className="mt-4 text-xs text-secondary-text flex justify-center items-center gap-4">
                <span className="flex items-center gap-1"><ShieldAlert size={12} /> No Commitment</span>
                <span className="flex items-center gap-1"><Users size={12} /> Limited Spots</span>
              </div>
            </div>
            <div className="mt-8 text-blue-100/80 text-sm"><p>Questions? hello@arlox.io</p></div>
          </div>

          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
          </div>
        </div>
      </Section>

      
    </div>
  );
}

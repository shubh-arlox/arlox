"use client"
import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Users, 
  AlertTriangle, 
  Ghost, 
  DollarSign, 
  Activity, 
  Zap, 
  ArrowRight, 
  Search, 
  Smartphone,
  BarChart3,
  ShieldAlert,
  Clock,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import CalendlyCTA from '@/components/CalendlyCTA';
import GlassButton from '@/components/but';

// --- Components ---

const NeuCard = ({ children, className = "", variant = "flat" }) => {
  const variants = {
    flat: "neu-flat",
    pressed: "neu-pressed",
    convex: "neu-convex",
    elevated: "card-elevated",
    inset: "card-inset"
  };
  return (
    <div className={`${variants[variant]} ${className} p-6 transition-all duration-300`}>
      {children}
    </div>
  );
};

const NeuButton = ({ children, onClick, className = "", variant = "primary" }) => {
  return (
    <button 
      onClick={onClick}
      className={`button-neumorphic px-6 py-3 font-semibold text-slate-700 active:scale-95 flex items-center gap-2 justify-center ${className}`}
    >
      {children}
    </button>
  );
};

const NeuIcon = ({ icon: Icon, size = 24, className = "" }) => (
  <div className={`neu-icon-btn ${className}`}>
    <Icon size={size} />
  </div>
);

const SectionHeading = ({ number, title, subtitle }) => (
  <div className="mb-8">
    <div className="flex items-center gap-4 mb-3">
      <div className="neu-step-circle text-xl font-bold text-slate-600">
        {number}
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800">{title}</h2>
    </div>
    {subtitle && <p className="text-slate-500 ml-20 text-lg">{subtitle}</p>}
  </div>
);

const ComparisonTable = ({ title, current, powerPack }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
    <NeuCard variant="inset" className="border-l-4 border-red-400">
      <h4 className="font-bold text-red-500 mb-2 flex items-center gap-2">
        <XCircle size={18} /> Current Trajectory
      </h4>
      <div className="space-y-2 text-slate-600">
        {current.map((item, i) => <p key={i}>{item}</p>)}
      </div>
    </NeuCard>
    <NeuCard variant="elevated" className="border-l-4 border-emerald-400 bg-emerald-50/10">
      <h4 className="font-bold text-emerald-600 mb-2 flex items-center gap-2">
        <CheckCircle2 size={18} /> Power Pack
      </h4>
      <div className="space-y-2 text-slate-600">
        {powerPack.map((item, i) => <p key={i}>{item}</p>)}
      </div>
    </NeuCard>
  </div>
);

// --- Main Application ---

export default function Hidden() {
  const [activeTab, setActiveTab] = useState(0);
  const [cacSimulation, setCacSimulation] = useState(1); // 0=Today, 1=6mo, 2=12mo

  // Inject Custom CSS
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');
      
      /* Overriding font-family to Manrope for this preview since local fonts aren't available */
      body {
        font-family: 'Manrope', system-ui, -apple-system, sans-serif !important;
      }

      /* Original User CSS (Ported) */
      .glass {
        background: rgba(224, 229, 236, 0.4);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border-radius: 1.5rem;
        box-shadow: 0 8px 32px rgba(163, 177, 198, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
      .neu-flat {
        background: #E0E5EC;
        box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5);
        border-radius: 1.5rem;
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
      .neu-pressed {
        background: #E0E5EC;
        box-shadow: inset 6px 6px 10px 0 rgba(163, 177, 198, 0.7), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.8);
        border-radius: 1.5rem;
      }
      .neu-convex {
        background: linear-gradient(135deg, #f0f5fc 0%, #caced4 100%);
        box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5);
        border-radius: 1.5rem;
      }
      .neu-icon-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: 9999px;
        background: #E0E5EC;
        box-shadow: 5px 5px 10px #a3b1c6, -5px -5px 10px #ffffff;
        transition: all 0.3s ease;
        color: rgb(75, 85, 99);
      }
      .neu-icon-btn:hover {
        box-shadow: inset 5px 5px 10px #a3b1c6, inset -5px -5px 10px #ffffff;
        color: #000000;
        transform: scale(0.95);
      }
      .neu-step-circle {
        width: 3.5rem;
        height: 3.5rem;
        display: flex;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        background: #E0E5EC;
        border-radius: 9999px;
        box-shadow: inset 4px 4px 8px 0 rgba(163, 177, 198, 0.7), inset -4px -4px 8px 0 rgba(255, 255, 255, 0.8);
      }
      .button-neumorphic {
        box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5);
        background: #E0E5EC;
        border-radius: 1rem;
        transition: all 0.2s ease;
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
      .button-neumorphic:hover {
        transform: translateY(-2px);
        box-shadow: 12px 12px 20px rgba(163, 177, 198, 0.65), -12px -12px 20px rgba(255, 255, 255, 0.6);
      }
      .button-neumorphic:active {
        box-shadow: inset 6px 6px 12px rgba(163, 177, 198, 0.6), inset -6px -6px 12px rgba(255, 255, 255, 0.5);
        transform: translateY(0);
      }
      .card-elevated {
        background: #E0E5EC;
        box-shadow: 12px 12px 24px rgba(163, 177, 198, 0.6), -12px -12px 24px rgba(255, 255, 255, 0.5);
        border-radius: 1.5rem;
        border: 1px solid rgba(255, 255, 255, 0.3);
      }
      .card-inset {
        background: #E0E5EC;
        box-shadow: inset 8px 8px 16px rgba(163, 177, 198, 0.5), inset -8px -8px 16px rgba(255, 255, 255, 0.6);
        border-radius: 1.5rem;
      }
      
      /* Utilities */
      .bg-neu-base { background: #E0E5EC; }
      .text-neu-dark { color: #4B5563; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const cacData = [
    { label: "Today", spend: "$50K", cac: 58, margin: "60% Profit", color: "bg-emerald-500" },
    { label: "6 Months", spend: "$120K", cac: 94, margin: "Break-even", color: "bg-yellow-500" },
    { label: "12 Months", spend: "$120K+", cac: 135, margin: "Losing $22/cust", color: "bg-red-500" }
  ];

  return (
    <div className="min-h-screen bg-neu-base pb-20 overflow-x-hidden">
      

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4">
            <div className="neu-pressed px-4 py-2 rounded-full text-red-500 font-semibold text-sm flex items-center gap-2">
              <AlertTriangle size={16} />
              CRITICAL BUSINESS ALERT
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 mb-6 leading-tight">
            The Hidden Consequences:<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-400">
              Single-Engine Dependency
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            This isn’t just about missed revenue. It’s a compounding existential threat to your business that is costing you <span className="font-bold text-slate-800">$3.45M annually</span>.
          </p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 space-y-24">

        {/* 1. CAC Time Bomb */}
        <section id="cac">
          <NeuCard variant="elevated">
            <SectionHeading 
              number="01" 
              title="Your CAC Becomes a Ticking Time Bomb" 
              subtitle="The trajectory of Shopping-only scaling"
            />
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-slate-600 leading-relaxed">
                  Search volume is finite. Scaling Shopping spend WITHOUT unlocking new channels (Lens, Demand Gen) forces you into higher CPCs for the same shrinking audience. You’re not growing—you’re bidding against yourself.
                </p>
                
                <div className="neu-pressed p-4 rounded-2xl">
                  <h4 className="font-bold text-slate-700 mb-4">Select Timeline Scenario:</h4>
                  <div className="flex gap-4">
                    {[0, 1, 2].map((idx) => (
                      <button
                        key={idx}
                        onClick={() => setCacSimulation(idx)}
                        className={`flex-1 py-2 rounded-xl text-sm font-bold transition-all ${
                          cacSimulation === idx 
                          ? 'bg-slate-300 shadow-inner text-slate-800' 
                          : 'shadow-[-2px_-2px_5px_white,2px_2px_5px_rgba(0,0,0,0.1)] text-slate-500'
                        }`}
                      >
                        {cacData[idx].label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="neu-inset p-8 rounded-3xl flex flex-col items-center justify-center relative min-h-[300px] bg-slate-200/50">
                <div className="absolute top-4 right-4 text-xs font-bold text-slate-400">LIVE SIMULATION</div>
                
                <div className={`text-6xl font-bold mb-2 transition-all duration-500 ${
                  cacSimulation === 2 ? 'text-red-500' : cacSimulation === 1 ? 'text-yellow-600' : 'text-emerald-600'
                }`}>
                  ${cacData[cacSimulation].cac}
                </div>
                <div className="text-slate-500 font-medium mb-8">Cost Per Acquisition (CAC)</div>

                <div className="w-full space-y-4">
                  <div className="flex justify-between text-sm text-slate-600 font-medium">
                    <span>Spend: {cacData[cacSimulation].spend}</span>
                    <span>{cacData[cacSimulation].margin}</span>
                  </div>
                  <div className="w-full h-4 bg-slate-300 rounded-full overflow-hidden shadow-inner">
                    <div 
                      className={`h-full transition-all duration-700 ease-out ${cacData[cacSimulation].color}`} 
                      style={{ width: `${(cacData[cacSimulation].cac / 150) * 100}%` }}
                    />
                  </div>
                </div>

                {cacSimulation === 2 && (
                  <div className="mt-6 p-3 bg-red-100 border border-red-200 rounded-lg text-red-700 text-sm flex items-center gap-2 animate-pulse">
                    <AlertTriangle size={16} />
                    CRITICAL: Losing $22 per customer order
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-300/50">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-emerald-100 text-emerald-600 shadow-sm">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">The Power Pack Advantage</h4>
                  <p className="text-slate-600 text-sm mt-1">
                    Competitors see CAC drop from <span className="font-bold">$58 → $52</span> as they scale because Demand Gen (YouTube Shorts at $0.08 CPC) offsets Shopping saturation.
                  </p>
                </div>
              </div>
            </div>
          </NeuCard>
        </section>

        {/* 2. Demographic Invisibility */}
        <section id="demographics">
          <SectionHeading 
            number="02" 
            title="Invisible to 67% of Your Demographic" 
            subtitle="The 2025 Consumer Behavior Shift"
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            <NeuCard variant="convex" className="md:col-span-1 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full neu-pressed mb-6 flex items-center justify-center text-slate-400">
                <Ghost size={40} />
              </div>
              <h3 className="text-4xl font-bold text-slate-800 mb-2">33%</h3>
              <p className="text-slate-500 text-sm uppercase tracking-wide font-bold">Your Current Reach</p>
              <p className="text-slate-600 mt-4 text-sm">
                Only reaching text-search-only users (mostly Boomers/Millennials).
              </p>
            </NeuCard>

            <NeuCard variant="flat" className="md:col-span-2 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <Search size={120} />
               </div>
               <h3 className="font-bold text-xl text-slate-800 mb-6">Where The Other 67% Went:</h3>
               
               <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 neu-pressed rounded-xl">
                    <Smartphone className="text-purple-500" />
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="font-bold text-slate-700">18-24 Year Olds</span>
                        <span className="text-purple-600 font-bold">61%</span>
                      </div>
                      <div className="text-sm text-slate-500">Discover via Visual Search (Lens) or Shorts</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 neu-pressed rounded-xl">
                    <TrendingUp className="text-blue-500" />
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="font-bold text-slate-700">25-34 Year Olds</span>
                        <span className="text-blue-600 font-bold">48%</span>
                      </div>
                      <div className="text-sm text-slate-500">Use AI-assisted search ("best linen dress under $150")</div>
                    </div>
                  </div>
               </div>
               
               <div className="mt-6 p-4 bg-slate-200/50 rounded-xl border border-white/40">
                 <p className="text-slate-700 italic text-sm">
                   "If your ideal customer is 28, there’s a 48% chance your brand doesn’t exist in her discovery path—even if she’s looking for your exact product."
                 </p>
               </div>
            </NeuCard>
          </div>
        </section>

        {/* 3. Algorithm Degradation */}
        <section>
          <NeuCard>
            <SectionHeading 
              number="03" 
              title="Algorithm Degradation" 
              subtitle="You are actively training Google to fail"
            />
            
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between text-center md:text-left">
              <div className="flex-1 p-4">
                <div className="text-sm font-bold text-slate-400 uppercase mb-2">Month 1</div>
                <div className="font-bold text-slate-800">Scale Budget 2x</div>
                <div className="text-xs text-slate-500 mt-1">Shopping Only</div>
              </div>
              
              <ArrowRight className="text-slate-400 rotate-90 md:rotate-0" />
              
              <div className="flex-1 p-4 bg-red-50 rounded-xl border border-red-100">
                <div className="text-sm font-bold text-red-400 uppercase mb-2">The Glitch</div>
                <div className="font-bold text-red-900">Broad Matches</div>
                <div className="text-xs text-red-700 mt-1">Google shows "Women's Dress" instead of "Linen Midi Size 8"</div>
              </div>

              <ArrowRight className="text-slate-400 rotate-90 md:rotate-0" />

              <div className="flex-1 p-4">
                <div className="text-sm font-bold text-slate-400 uppercase mb-2">Result</div>
                <div className="font-bold text-slate-800">CTR Crash</div>
                <div className="text-xs text-slate-500 mt-1">2.8% → 1.1% relevance drop</div>
              </div>

              <ArrowRight className="text-slate-400 rotate-90 md:rotate-0" />

              <div className="flex-1 p-4 bg-slate-800 rounded-xl text-white shadow-lg">
                <div className="text-sm font-bold text-slate-400 uppercase mb-2">Consequence</div>
                <div className="font-bold">Quality Score Drop</div>
                <div className="text-xs text-slate-400 mt-1">You pay 40% more CPC forever</div>
              </div>
            </div>
          </NeuCard>
        </section>

        {/* 4. Competitive Displacement */}
        <section>
          <SectionHeading number="04" title="Competitive Displacement" subtitle="The Invisible Takeover" />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-700">The Market Share Illusion</h3>
              <p className="text-slate-600">
                You think: "We're holding steady at $180K/month revenue—we're fine."
              </p>
              <p className="text-slate-600">
                Reality: TAM grew 40% via Lens/AI Overviews. Your "steady" revenue actually means your market share plummeted from 25% to 14%.
              </p>
              <div className="mt-8">
                 <div className="text-sm font-bold text-slate-500 mb-2">Real Market Share</div>
                 <div className="h-8 bg-slate-300 rounded-full flex overflow-hidden">
                    <div className="h-full bg-slate-500 w-[14%] flex items-center justify-center text-[10px] text-white font-bold">You 14%</div>
                    <div className="h-full bg-blue-500 w-[86%] flex items-center justify-center text-xs text-white font-bold">Competitors (Power Pack) 86%</div>
                 </div>
              </div>
            </div>
            <div className="neu-inset p-6 rounded-2xl">
               <h4 className="font-bold text-slate-700 mb-4">The Blind Spot</h4>
               <p className="text-sm text-slate-600 mb-4">
                 Your Google Analytics only tracks the 40% of traffic you are visible on. The 60% going to competitors never touches your domain.
               </p>
               <div className="flex items-center gap-3 p-3 bg-white/40 rounded-lg">
                 <ShieldAlert className="text-orange-500" />
                 <span className="text-sm font-semibold text-slate-700">3 Competitors are currently invisible to your monitoring tools.</span>
               </div>
            </div>
          </div>
        </section>

        {/* 5. Capital Inefficiency */}
        <section>
          <NeuCard variant="convex" className="border-t-4 border-blue-500">
            <SectionHeading 
              number="05" 
              title="Capital Inefficiency" 
              subtitle="The $480K Annual Waste"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-8">
              <div className="md:col-span-1 space-y-2">
                <div className="text-sm font-bold text-slate-400">Current Strategy</div>
                <div className="text-3xl font-bold text-slate-700">$3.46M</div>
                <div className="text-xs text-slate-500">Annual Revenue (2.4x MER)</div>
              </div>

              <div className="md:col-span-1 flex flex-col items-center justify-center">
                <div className="p-3 bg-red-100 text-red-600 rounded-full mb-2">
                   <DollarSign size={24} />
                </div>
                <div className="text-xl font-bold text-red-600">$3.45M GAP</div>
                <div className="text-xs text-red-400">Left on table annually</div>
              </div>

              <div className="md:col-span-1 space-y-2">
                <div className="text-sm font-bold text-slate-400">Power Pack Strategy</div>
                <div className="text-3xl font-bold text-emerald-600">$6.91M</div>
                <div className="text-xs text-slate-500">Annual Revenue (4.8x MER)</div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-xl text-center border border-blue-100">
               <p className="text-blue-800 font-medium">
                 Reallocating just 30% of your $120K budget from saturated Shopping to Demand Gen unlocks 80% of this gap.
               </p>
            </div>
          </NeuCard>
        </section>

        {/* 6. Algorithm Change Risk */}
        <section>
          <SectionHeading number="06" title='The "One Algorithm Change = Dead" Risk' />
          <div className="grid md:grid-cols-2 gap-6">
             <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
                <h4 className="text-red-800 font-bold mb-2">Current Risk Profile</h4>
                <p className="text-sm text-red-700 mb-4">
                  One major update (e.g., visual try-on requirement) and your $1.92M/year revenue stream vanishes in 30 days. You have zero redundancy.
                </p>
                <div className="w-full h-2 bg-red-200 rounded-full mt-4">
                  <div className="w-[95%] h-full bg-red-500 rounded-full"></div>
                </div>
                <div className="text-right text-xs text-red-600 mt-1">95% Risk Exposure</div>
             </div>
             <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                <h4 className="text-emerald-800 font-bold mb-2">Power Pack Profile</h4>
                <p className="text-sm text-emerald-700 mb-4">
                  Multi-channel redundancy. When Search traffic dropped 20% in May 2024 due to AI Overviews, Power Pack brands only saw a 3-5% dip.
                </p>
                <div className="w-full h-2 bg-emerald-200 rounded-full mt-4">
                  <div className="w-[15%] h-full bg-emerald-500 rounded-full"></div>
                </div>
                <div className="text-right text-xs text-emerald-600 mt-1">15% Risk Exposure</div>
             </div>
          </div>
        </section>

        {/* 7. Team Burnout */}
        <section>
          <SectionHeading number="07" title="Team Burnout & Talent Exodus" />
          <ComparisonTable 
            title="Team Impact"
            current={[
              "Media buyer spends 20 hrs/week fighting fires",
              "Crisis management instead of strategy",
              "Talent leaves for scalable systems",
              "Constant question: 'Why did CAC spike?'"
            ]}
            powerPack={[
              "Media buyer spends 5 hrs/week monitoring",
              "System optimizes itself",
              "Creative velocity feeds Demand Gen",
              "Focus on growth, not repair"
            ]}
          />
        </section>

        {/* Bottom Line */}
        <section className="pb-20">
          <NeuCard variant="convex" className="text-center py-12 px-6 border-2 border-white/50">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">The Bottom Line</h2>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
              This isn’t a media buying problem. It’s a business survival problem. 
              12 months from now, you will be in one of two scenarios:
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
               <div className="p-6 rounded-2xl border border-slate-300 bg-slate-100 opacity-70">
                 <h3 className="font-bold text-slate-500 mb-2">Scenario A</h3>
                 <div className="text-2xl font-bold text-slate-600 mb-4">$180K / month</div>
                 <p className="text-sm text-slate-500">
                   CAC at $110. Fighting for 40% of traffic. Bleeding cash on saturated Shopping campaigns while competitors dominate.
                 </p>
               </div>

               <div
  className="
    relative p-5 sm:p-6 rounded-2xl
    bg-white
    border border-blue-200
    shadow-[0_10px_30px_rgba(59,130,246,0.15)]
    md:-translate-y-4
  "
>
  {/* Header */}
  <div className="flex items-center justify-between mb-3 gap-3">
    <h3 className="font-bold text-blue-600 text-sm sm:text-base">
      Scenario B
    </h3>

    <span
      className="
        bg-blue-100 text-blue-700
        text-[10px] sm:text-xs
        px-2.5 py-1
        rounded-full font-bold uppercase tracking-wide
        whitespace-nowrap
      "
    >
      Recommended
    </span>
  </div>

  {/* Revenue */}
  <div className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-3">
    $936K <span className="text-sm sm:text-base font-semibold text-slate-500">/ month</span>
  </div>

  {/* Description */}
  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5">
    CAC at <span className="font-semibold">$52</span>.  
    Owning <span className="font-semibold">100% of discovery surfaces</span>
    (Search, Visual, AI). A growth engine that compounds.
  </p>

  {/* CTA */}
  <CalendlyCTA calendlyUrl="https://calendly.com/arlox-/strategy-call-1">
    <GlassButton
      label="Implement The System Today"
      icon={ArrowRight}
      className="w-full"
      buttonClassName="
        w-full sm:w-auto
        px-6 sm:px-8
        py-3 sm:py-3.5
        text-sm sm:text-base
        font-bold
        transition-transform duration-200
        hover:scale-[1.03]
        active:scale-[0.98]
      "
      onClick={() => console.log('Focus mode toggled')}
    />
  </CalendlyCTA>
</div>

            </div>
          </NeuCard>
        </section>

      </main>
      
     

    </div>
  );
}
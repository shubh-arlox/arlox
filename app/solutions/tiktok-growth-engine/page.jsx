"use client"
import React, { useState } from 'react';
import { 
  TrendingUp, TrendingDown, Zap, Target, Vault, ArrowRight, AlertTriangle, 
  CheckCircle, BarChart2, Users, Clock, Layers, ChevronDown, ChevronUp, 
  Mail, Lock, Play, Skull, Activity, ShieldAlert, BrainCircuit, Globe, 
  DollarSign, EyeOff, XCircle, Split,
  HelpCircle,
  Shield,
  LockIcon
} from 'lucide-react';
import GlassButton from '@/components/but'; 
import WhatsappCTA from '@/components/WhatsAppCTA'; 

// --- THEME: ULTRA-SOFT CLAY (Low Contrast) ---
const WaterfallArrow= () => {
  return (
    <svg
      width="40"
      height="50"
      viewBox="0 0 40 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mt-4"
    >
      {/* dotted vertical line */}
      <line
        x1="20"
        y1="0"
        x2="20"
        y2="60"
        stroke="#94a3b8"
        strokeWidth="3"
        strokeDasharray="6 6"
      />

      {/* arrow head */}
      <path
        d="M14 54 L20 60 L26 54"
        stroke="#94a3b8"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};



const theme = {
  bg: "bg-[#2b2b30]", // Soft Charcoal (absorbs light)
  textMain: "text-zinc-400", // Muted text for reading
  textHighlight: "text-zinc-200", // Soft white for headings (never pure white)
  textDim: "text-zinc-600",
  
  // Dusty Teal (No Neon)
  primary: "text-teal-400", 
  primaryBorder: "border-teal-400/30",
  primaryBg: "bg-teal-400/5",
  
  // Muted Coral (No Hot Pink)
  accent: "text-rose-400",
  accentBorder: "border-rose-400/30",
  accentBg: "bg-rose-400/5",
  
  // Soft Gold
  gold: "text-amber-300",
};

// --- NEUMORPHIC UTILS (Soft & Diffuse) ---

// Base classes
const neuBase = `${theme.bg} ${theme.textMain}`;

// Soft, diffuse shadows (High blur radius, low opacity)
const neuShadow = "shadow-[16px_16px_32px_#232327,-16px_-16px_32px_#333339]"; 
// Deep, soft pressed look
const neuInset = "shadow-[inset_8px_8px_16px_#212125,inset_-8px_-8px_16px_#35353b]";

// Button style
const neuBtn = `transition-all duration-500 active:scale-95 ${neuBase} ${neuShadow} rounded-2xl border border-[#333339]`;

// --- COMPONENTS ---

const Card = ({ children, className = "", inset = false }) => (
  <div className={`rounded-3xl p-6 border border-[#333339] ${inset ? neuInset : neuShadow} ${neuBase} ${className}`}>
    {children}
  </div>
);

// Section Header Icon Wrapper (Always Inset)
const SectionIcon = ({ icon, colorClass = "text-teal-400" }) => (
  <div className={`w-14 h-14 rounded-full ${neuInset} flex items-center justify-center border border-[#333339]/50 ${theme.bg}`}>
    <div className={colorClass}>
      {icon}
    </div>
  </div>
);

const Button = ({ children, onClick, className = "", primary = false }) => (
  <button 
    onClick={onClick}
    className={`${neuBtn} px-8 py-4 font-bold flex items-center justify-center gap-2 relative overflow-hidden group ${className}`}
  >
    {primary && (
      <div className={`absolute inset-0 bg-gradient-to-r from-teal-500/10 to-rose-500/10 opacity-30`}></div>
    )}
    <span className={`relative z-10 ${primary ? theme.textHighlight : 'text-zinc-400 group-hover:text-zinc-200'}`}>
      {children}
    </span>
  </button>
);

const Badge = ({ children, color = "cyan" }) => {
  const styles = {
    cyan: `${theme.primary} border-teal-400/30 bg-teal-400/5`,
    pink: `${theme.accent} border-rose-400/30 bg-rose-400/5`,
    gold: `${theme.gold} border-amber-300/20 bg-amber-300/5`,
  };

  return (
    <span
      className={`
        px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide
        border
        ${styles[color] || styles.cyan}
        ${neuInset}        /*  inset shadow */
        bg-[#2b2b30]       /* me surface as page */
      `}
    >
      {children}
    </span>
  );
};

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className={`rounded-2xl border border-[#333339] overflow-hidden transition-all duration-500 ${isOpen ? neuInset : neuShadow} mb-6`}>
    <button 
      onClick={onClick}
      className="w-full p-6 flex justify-between items-center text-left focus:outline-none"
    >
      <span className={`font-bold text-lg ${isOpen ? theme.primary : 'text-zinc-300'}`}>{question}</span>
      {isOpen ? <ChevronUp className="text-teal-400" /> : <ChevronDown className="text-zinc-500" />}
    </button>
    <div className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
      <p className="text-zinc-400 leading-relaxed font-light">{answer}</p>
    </div>
  </div>
);

// --- Section : The Fork ---

const ScalingFork = () => {
  const [activePath, setActivePath] = useState('arlox'); 

  return (
    <div className="py-12">
      <div className={`flex justify-center mb-10 gap-8 p-3 rounded-2xl w-fit mx-auto ${neuInset}`}>
        <button 
          onClick={() => setActivePath('traditional')}
          className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 ${activePath === 'traditional' ? `${neuShadow} ${theme.accent}` : 'text-zinc-500 hover:text-zinc-400'}`}
        >
          Traditional Path
        </button>
        <button 
          onClick={() => setActivePath('arlox')}
          className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 ${activePath === 'arlox' ? `${neuShadow} ${theme.primary}` : 'text-zinc-500 hover:text-zinc-400'}`}
        >
          Arlox System
        </button>
      </div>

      <Card className="relative overflow-hidden min-h-[450px]">
        {activePath === 'traditional' ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h3 className={`text-2xl font-bold ${theme.accent} mb-2`}>The Death Spiral</h3>
            <p className="mb-8 text-zinc-400 font-light">Single winning creative scales, saturates, and crashes.</p>
            
            <div className="flex items-end h-64 gap-6 px-4 pb-4">
              <div className="w-1/3 bg-gradient-to-t from-rose-900/40 to-rose-500/40 rounded-t-2xl relative group h-[80%] opacity-80 hover:opacity-100 transition-all border-t border-rose-500/20">
                <div className={`absolute -top-14 left-1/2 -translate-x-1/2 text-xs font-bold ${theme.bg} ${neuShadow} ${theme.accent} px-3 py-2 rounded-lg whitespace-nowrap`}>Week 1-2: 4.5x</div>
              </div>
              <div className="w-1/3 bg-gradient-to-t from-rose-950/40 to-rose-800/40 rounded-t-2xl relative group h-[50%] opacity-80 hover:opacity-100 transition-all border-t border-rose-500/10">
                 <div className={`absolute -top-14 left-1/2 -translate-x-1/2 text-xs font-bold ${theme.bg} ${neuShadow} text-zinc-500 px-3 py-2 rounded-lg whitespace-nowrap`}>Week 3-4: 3.2x</div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 text-rose-500/50"><AlertTriangle size={28} /></div>
              </div>
              <div className="w-1/3 bg-[#232327] rounded-t-2xl relative group h-[20%] opacity-80 hover:opacity-100 transition-all border-t border-zinc-700">
                 <div className={`absolute -top-14 left-1/2 -translate-x-1/2 text-xs font-bold ${theme.bg} ${neuShadow} text-zinc-600 px-3 py-2 rounded-lg whitespace-nowrap`}>Week 5+: 1.8x</div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 text-zinc-600"><TrendingDown size={28} /></div>
              </div>
            </div>
            <div className={`mt-8 p-5 rounded-2xl ${neuInset} text-center`}>
              <p className={`font-bold ${theme.accent} text-lg`}>Outcome: $144K Profit (Stuck)</p>
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
             <h3 className={`text-2xl font-bold ${theme.primary} mb-2`}>Creative Velocity</h3>
             <p className="mb-8 text-zinc-400 font-light">75+ creatives rotating to feed the algorithm.</p>

             <div className="flex items-end h-64 gap-3 px-4 pb-4">
               {[...Array(12)].map((_, i) => {
                 const height = 40 + (i * 5) + Math.random() * 10;
                 return (
                   <div key={i} className="flex-1 bg-gradient-to-t from-teal-900/40 to-teal-500/40 rounded-t-lg relative group transition-all hover:brightness-125 border-t border-teal-500/20" style={{ height: `${height}%` }}>
                     <div className={`hidden group-hover:block absolute -top-16 left-1/2 -translate-x-1/2 text-xs font-bold ${theme.bg} ${neuShadow} ${theme.primary} px-3 py-2 rounded-lg z-10 whitespace-nowrap`}>
                       Wk {i+1}: {(4.5 + (i * 0.1)).toFixed(1)}x
                     </div>
                   </div>
                 )
               })}
             </div>
             <div className={`mt-8 p-5 rounded-2xl ${neuInset} flex justify-between items-center`}>
              <p className={`font-bold ${theme.primary} text-lg`}>Outcome: $1.52M Profit</p>
              <Badge color="cyan">10.5x Growth</Badge>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

// --- Section 4: The Trinity ---

const TrinitySystem = () => {
  const [activePillar, setActivePillar] = useState('mythos');

  const pillars = {
    mythos: {
      title: "MYTHOS",
      subtitle: "Creative Velocity Engine",
      icon: <Zap size={28} className="text-[#f59e0b]" />,
      desc: "Produces 80-120 TikTok-native ads per month. Hook-angle testing matrix ensures the algorithm never saturates.",
      details: [
        "Hook-Angle Matrix: 8-12 angles x 3 hooks",
        "TikTok Native: 9:16, 3s hooks, trending sounds",
        "Rapid Kill Protocol: Pause bottom 50% by Day 4"
      ],
      stat: "15-20 new ads/week",
      color: "text-[#f59e0b]",
      borderColor: "border-teal-500",
    },
    sentinel: {
      title: "SENTINEL",
      subtitle: "Scientific Media Buying",
      icon: <Shield size={28} className="text-[#2565ec]" />,
      desc: "Data-driven campaign architecture. Rotates creatives every 14 days. Kills losers fast, scales winners scientifically.",
      details: [
        "14-Day Rotation: Kill bottom 60%, scale top 40%",
        "Broad Targeting: Let creative be the targeting",
        "Blue Swan Protocol: 20% budget for 'wild cards'"
      ],
      stat: "4-6x ROAS Sustained",
      color: "text-[#2565ec]",
      borderColor: "border-rose-500",
    },
    vault: {
      title: "VAULT",
      subtitle: "The 80% Profit Engine",
      icon: <LockIcon size={28} className="text-[#22c55e]" />,
      desc: "Captures 30-50% of traffic as email/SMS subs. Turns rented attention into owned assets with 80% margins.",
      details: [
        "Phase 1: Reinvest 100% front-end profit",
        "Phase 2: Harvest 3-5 campaigns/mo",
        "Outcome: 50% profit from owned attention"
      ],
      stat: "0 Ad Spend Revenue",
      color: "text-[#22c55e]",
      borderColor: "border-amber-300",
    }
  };

  return (
    <div className="grid md:grid-cols-12 gap-8">
      <div className="md:col-span-4 space-y-6">
        {Object.entries(pillars).map(([key, data]) => (
          <div 
            key={key}
            onClick={() => setActivePillar(key)}
            className={`cursor-pointer p-6 rounded-3xl transition-all duration-300 flex items-center gap-5 border border-transparent ${activePillar === key ? `${neuInset} border-[#333339]` : `${neuShadow} hover:translate-x-1`}`}
          >
            {/* Small Inset Icon for list items */}
            <div className={`w-12 h-12 rounded-full ${neuInset} flex items-center justify-center bg-[#2b2b30] flex-shrink-0`}>
              {data.icon}
            </div>
            <div>
              <h3 className={`font-bold text-lg ${activePillar === key ? 'text-zinc-200' : 'text-zinc-500'}`}>{data.title}</h3>
              <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium">{data.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="md:col-span-8">
        <Card className="h-full flex flex-col justify-center items-center text-center p-12 relative overflow-hidden">
           {/* Large Inset Icon for active display */}
           <div className={`mb-10 w-24 h-24 rounded-full ${neuInset} flex items-center justify-center bg-[#2b2b30] border border-[#333339]`}>
             {React.cloneElement(pillars[activePillar].icon, { size: 40 })}
           </div>
           
           <h2 className={`text-5xl font-black mb-2 tracking-tight ${pillars[activePillar].color}`}>{pillars[activePillar].title}</h2>
           <h4 className="text-xl text-zinc-400 mb-10 font-medium">{pillars[activePillar].subtitle}</h4>
           <p className="text-lg text-zinc-400 mb-12 max-w-lg leading-relaxed font-light">
             {pillars[activePillar].desc}
           </p>
           
           <div className={`mb-10 w-full max-w-md text-left p-8 rounded-2xl ${neuInset} bg-[#2b2b30]`}>
             <h5 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">Core Protocols</h5>
             <ul className="space-y-4">
               {pillars[activePillar].details.map((detail, i) => (
                 <li key={i} className="flex items-start gap-4 text-sm text-zinc-300">
                   <CheckCircle size={18} className={`${pillars[activePillar].color} flex-shrink-0`} />
                   {detail}
                 </li>
               ))}
             </ul>
           </div>

           <div className={`text-xl font-bold px-10 py-5 rounded-2xl ${neuShadow} border ${pillars[activePillar].borderColor} border-opacity-20 ${pillars[activePillar].color} bg-[#2b2b30]`}>
             {pillars[activePillar].stat}
           </div>
        </Card>
      </div>
    </div>
  );
};
// --- Section: Case Studies & Timeline ---

// --- Section: Case Studies & Timeline (Interactive Rail) ---

// --- Section: Case Studies & Timeline (Timeline + Spotlight) ---





// --- Section 7: The Insight (Decision Tree) ---

const InsightDecisionTree = () => {
  const [activeTab, setActiveTab] = useState('95');

  return (
    <div className="my-12">
      <div className="flex justify-center mb-10">
        <div className={`flex p-2 rounded-2xl ${neuInset}`}>
          <button 
            onClick={() => setActiveTab('95')} 
            className={`px-10 py-4 rounded-xl font-bold transition-all duration-300 ${activeTab === '95' ? 'bg-rose-500/10 text-rose-400 shadow-sm border border-rose-500/20' : 'text-zinc-500'}`}
          >
            The 95% Path
          </button>
          <button 
            onClick={() => setActiveTab('5')} 
            className={`px-10 py-4 rounded-xl font-bold transition-all duration-300 ${activeTab === '5' ? 'bg-teal-500/10 text-teal-400 shadow-sm border border-teal-500/20' : 'text-zinc-500'}`}
          >
            The 5% Path
          </button>
        </div>
      </div>

      <Card className="min-h-[400px]">
        {activeTab === '95' ? (
          <div className="animate-in fade-in duration-500">
            <h3 className={`text-2xl font-bold ${theme.accent} mb-8 flex items-center gap-4`}>
              <div className={`w-10 h-10 rounded-full ${neuInset} flex items-center justify-center text-rose-400`}><XCircle size={20} /></div>
              The Mistake: Budget = Scaling
            </h3>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <p className="text-zinc-400 mb-6 leading-relaxed">They believe scaling means pouring money into "proven" ads. But budget doesn't unlock audiences, creative does.</p>
                <div className={`p-8 rounded-2xl ${neuInset}`}>
                  <h4 className="text-zinc-200 font-bold mb-6">Brand A (Creative Scarcity)</h4>
                  <ul className="space-y-4 text-sm text-zinc-400">
                    <li className="flex justify-between"><span>Inputs:</span> <span className="text-zinc-300">5 Ads, $60K Budget</span></li>
                    <li className="flex justify-between"><span>Action:</span> <span className={theme.accent}>Exhausts 5 segments</span></li>
                    <li className="flex justify-between"><span>Result:</span> <span className={theme.accent}>ROAS crashes to 2.2x</span></li>
                    <li className="flex justify-between border-t border-[#333339] pt-4 font-bold"><span>Outcome:</span> <span className="text-zinc-300">$132K Revenue (Stuck)</span></li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-6 text-sm text-zinc-500">
                <div className={`p-6 rounded-2xl ${neuShadow} border border-[#333339]`}>
                  <p className={`mb-2 font-bold ${theme.accent}`}>The Lie: Data Accuracy</p>
                  <p>TikTok over-attributes by 25%. If dash says 4.2x, your bank account says 3.1x. You're bleeding cash celebrating fake wins.</p>
                </div>
                <div className={`p-6 rounded-2xl ${neuShadow} border border-[#333339]`}>
                  <p className={`mb-2 font-bold ${theme.accent}`}>The Risk: Rented Attention</p>
                  <p>If TikTok bans tomorrow, Brand A has $0 revenue. Zero owned assets.</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in duration-500">
            <h3 className={`text-2xl font-bold ${theme.primary} mb-8 flex items-center gap-4`}>
               <div className={`w-10 h-10 rounded-full ${neuInset} flex items-center justify-center text-teal-400`}><CheckCircle size={20} /></div>
               The Truth: Creative = Targeting
            </h3>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <p className="text-zinc-400 mb-6 leading-relaxed">The 5% use creative diversity to unlock new audience segments. 80 creatives = 80 keys.</p>
                <div className={`p-8 rounded-2xl ${neuInset}`}>
                  <h4 className="text-zinc-200 font-bold mb-6">Brand B (Creative Velocity)</h4>
                  <ul className="space-y-4 text-sm text-zinc-400">
                    <li className="flex justify-between"><span>Inputs:</span> <span className="text-zinc-300">90 Ads, $60K Budget</span></li>
                    <li className="flex justify-between"><span>Action:</span> <span className={theme.primary}>Unlocks 40+ segments</span></li>
                    <li className="flex justify-between"><span>Result:</span> <span className={theme.primary}>ROAS sustains 4.9x</span></li>
                    <li className="flex justify-between border-t border-[#333339] pt-4 font-bold"><span>Outcome:</span> <span className="text-zinc-300">$294K Revenue (+123%)</span></li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-6 text-sm text-zinc-500">
                <div className={`p-6 rounded-2xl ${neuShadow} border border-[#333339]`}>
                  <p className={`mb-2 font-bold ${theme.primary}`}>The Fix: Triple Verification</p>
                  <p>We use CAPI + Manual Tracking + MER. We know the real unit economics.</p>
                </div>
                <div className={`p-6 rounded-2xl ${neuShadow} border border-[#333339]`}>
                  <p className={`mb-2 font-bold ${theme.primary}`}>The Moat: Owned Assets</p>
                  <p>Brand B builds a 30K email list. If TikTok bans, they still make $180K/mo from backend.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

// --- Section 8: Uniqueness ---

const UniquenessList = () => {
  const items = [
    { title: "Growth Engineering Firm", trad: "Manage ad spend & care about vanity metrics.", arlox: "Engineer self-sustaining systems (Mythos, Sentinel, Vault). Paid on performance." },
    { title: "The Scale Trinity™", trad: "Media buying only (rented attention).", arlox: "Creative + Media Buying + Owned Attention. Builds a compounding business moat." },
    { title: "300+ Fashion Hooks", trad: "Test random 'Stop scrolling' hooks.", arlox: "Proprietary library of 300+ fashion-specific angles (Problem/Agitation, Transformation, Anti-Brand)." },
    { title: "Triple Data Verify", trad: "Trust TikTok dashboard (15-25% error).", arlox: "CAPI + Manual Tracking + MER. We measure real cash in the bank." },
    { title: "Blue Swan Protocol", trad: "Hypothesis-only testing (limited by assumptions).", arlox: "20% budget to 'wild card' outliers. Systematically discovering 10x winners." },
    { title: "Continuous Optimization", trad: "Set up Month 1, minor tweaks Month 2-12.", arlox: "Daily monitoring, weekly rotation, 48-hour algorithm adaptation." },
    { title: "You Own The System", trad: "Black box. You learn nothing.", arlox: "Full IP transfer. SOPs, Playbooks, Angle Libraries. You can run it in-house eventually." },
    { title: "Strict Qualification", trad: "Take anyone with a credit card.", arlox: "We reject 70%. Must have product-market fit ($50K/mo) and healthy margins." }
  ];

  return (
    <div className="space-y-6">
      {items.map((item, i) => (
        <div key={i} className={`p-8 rounded-3xl border border-[#333339] ${neuShadow} hover:border-teal-500/20 transition-all group`}>
          <h4 className="text-xl font-bold text-zinc-300 mb-6 flex items-center gap-4">
             {/* Small Inset Icon */}
             <div className={`w-10 h-10 rounded-full ${neuInset} flex items-center justify-center text-teal-400`}>
               <CheckCircle size={18} />
             </div>
             {item.title}
          </h4>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className={`p-5 rounded-2xl ${neuInset} border-l-2 border-rose-400/50 text-zinc-500`}>
              <span className={`font-bold block ${theme.accent} mb-2 uppercase text-xs tracking-wider`}>Traditional Agency</span>
              {item.trad}
            </div>
            <div className={`p-5 rounded-2xl ${neuInset} border-l-2 border-teal-400/50 text-zinc-400`}>
              <span className={`font-bold block ${theme.primary} mb-2 uppercase text-xs tracking-wider`}>Arlox</span>
              {item.arlox}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// --- Section 10: Objections ---


const Objections = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const avatars = [
    "/unnamed.jpg",
    "/avatar2.jpg",
    "/avatar3.jpg",
    "/avatar4.jpg",
    "/avatar5.jpg",
  ];

  const faqs = [
    {
      q: "This sounds expensive. I can't afford Arlox.",
      a: "You can't afford NOT to have a system. Without Arlox, you waste $40K/month on saturated ads. With Arlox, you build a $1.24M net gain system. You're not paying for Arlox; you're paying to stop bleeding cash.",
    },
    {
      q: "I'm in a niche category. Will this work for me?",
      a: "The framework is universal; the angles are custom. Whether you're sustainable fashion, plus-size, or modest wear, the physics of algorithm creative diversity apply. We have 300+ proven hooks adapted to your niche.",
    },
    {
      q: "I already have an agency. Why would I switch?",
      a: "Is your ROAS above 4.5x? Are they producing 80+ ads/month? Do you have 20K+ email subs? If not, your agency is managing ads, not engineering growth. We build the system you own.",
    },
    {
      q: "I don't have time. This sounds like a lot of work.",
      a: "We handle creative production (120 ads/mo), media buying, data tracking, and email marketing. You focus on product. You get your time back from micromanaging failing ads.",
    },
    {
      q: "What if TikTok gets banned?",
      a: "That's exactly why you need the Vault. By Month 9, 40% of profit comes from your owned email/SMS list. If TikTok disappears, your revenue survives. You become platform-independent.",
    },
    {
      q: "How do I know you're not just another agency over-promising?",
      a: "We use a 30-Day Proof Protocol. Week 1: Blueprint. Week 2: First 20 ads. Week 3: First winners. Week 4: Performance Report. If you don't see +20-40% ROAS improvement and 40+ new ads in testing by Day 30, you can fire us. No questions asked.",
    },
    {
      q: "I'm only at $60K/month. Am I too small?",
      a: "You DON'T qualify if you're under $50K/month revenue. You DO qualify if you're doing $50-100K/month with 60-75% gross margins. We only take brands we can scale. If you're ready to commit to reinvesting profit for growth, you're a fit.",
    }
  ];

  return (
    <div className="max-w-3xl mx-auto py-12 space-y-6">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const avatarIndex = index % avatars.length;

        return (
          <div
            key={index}
            className={`
              rounded-2xl border border-[#333339]
              bg-[#2b2b30]
              transition-all duration-500
              ${isOpen
                ? "shadow-[inset_8px_8px_16px_#212125,inset_-8px_-8px_16px_#35353b]"
                : "shadow-[16px_16px_32px_#232327,-16px_-16px_32px_#333339]"
              }
            `}
          >
            {/* HEADER */}
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full p-6 flex items-start gap-4 text-left"
            >
              {/* Avatar – only when open */}
              {isOpen && (
                <div
                  className="
                    w-10 h-10 rounded-full shrink-0
                    shadow-[inset_2px_2px_6px_#1f1f23,inset_-2px_-2px_6px_#35353b]
                    border border-[#333339]
                    bg-[#2b2b30]
                    flex items-center justify-center
                  "
                >
                  <img
                    src={avatars[avatarIndex]}
                    alt="Founder"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </div>
              )}

              {/* Question */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-zinc-300 flex items-start gap-2">
                  <HelpCircle
                    size={16}
                    className={`mt-1 ${isOpen ? "text-teal-400" : "text-zinc-500"}`}
                  />
                  {faq.q}
                </h3>
              </div>
            </button>

            {/* ANSWER */}
            {isOpen && (
              <div className="px-6 pb-6 pl-[72px] text-zinc-400 text-sm leading-relaxed">
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};


// --- Section 11: Two Futures ---

const FuturesComparison = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10 my-16">
      {/* Future A */}
      <Card className="border-t-4 border-rose-500/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <AlertTriangle size={200} className="text-rose-500" />
        </div>
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-3xl font-bold text-zinc-300">Future A: Stuck</h3>
            <Badge color="pink">Traditional</Badge>
          </div>
          
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl ${neuInset} border border-rose-500/10`}>
              <div className={`text-xs ${theme.accent} font-bold uppercase mb-3 tracking-wider`}>Monthly Revenue</div>
              <div className="text-3xl font-bold text-zinc-500">$120K <span className={`text-sm font-normal ${theme.accent} ml-2`}>(Stagnant)</span></div>
            </div>
            
            <div className={`p-6 rounded-2xl ${neuInset} border border-[#333339]`}>
              <div className="text-xs text-zinc-500 font-bold uppercase mb-3 tracking-wider">Platform Risk</div>
              <div className={`text-2xl font-bold ${theme.accent}`}>100% Dependent</div>
              <div className="text-sm text-zinc-500 mt-2 flex items-center gap-2"><AlertTriangle size={14}/> One ban = Business dead</div>
            </div>

            <div className={`p-6 rounded-2xl ${neuInset} border border-[#333339]`}>
               <div className="text-xs text-zinc-500 font-bold uppercase mb-3 tracking-wider">Founder State</div>
               <div className="flex items-center gap-3 font-bold text-zinc-400">
                 <Clock size={18} className="text-zinc-600" /> 15 hrs/week micromanaging
               </div>
            </div>
          </div>
          
          <div className="mt-10 text-center py-4 rounded-xl text-zinc-600 font-mono text-sm border border-dashed border-zinc-700">
            Valuation: $420k (Low Multiple)
          </div>
        </div>
      </Card>

      {/* Future B */}
      <Card className="border-t-4 border-teal-500/50 relative overflow-hidden shadow-[0_0_40px_rgba(45,212,191,0.05)]">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Vault size={200} className="text-teal-400" />
        </div>
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-3xl font-bold text-zinc-200">Future B: Domination</h3>
            <Badge color="cyan">Arlox Trinity</Badge>
          </div>
          
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl ${neuInset} border border-teal-500/10`}>
              <div className={`text-xs ${theme.primary} font-bold uppercase mb-3 tracking-wider`}>Monthly Revenue</div>
              <div className="text-3xl font-bold text-zinc-200">$680K <span className={`text-sm font-bold ${theme.primary} ml-2`}>(+556%)</span></div>
              <div className="text-xs text-teal-500/60 mt-2 font-medium">$260K from Owned List (0 Ad Spend)</div>
            </div>
            
            <div className={`p-6 rounded-2xl ${neuInset} border border-[#333339]`}>
              <div className="text-xs text-zinc-500 font-bold uppercase mb-3 tracking-wider">Platform Risk</div>
              <div className={`text-2xl font-bold ${theme.primary}`}>Diversified</div>
              <div className="text-sm text-zinc-500 mt-2 flex items-center gap-2"><CheckCircle size={14} className={theme.primary}/> Business survives without TikTok</div>
            </div>

            <div className={`p-6 rounded-2xl ${neuInset} border border-[#333339]`}>
               <div className="text-xs text-zinc-500 font-bold uppercase mb-3 tracking-wider">Founder State</div>
               <div className="flex items-center gap-3 font-bold text-zinc-300">
                 <Users size={18} className="text-teal-400" /> 3 hrs/week (Strategy Only)
               </div>
            </div>
          </div>

          <div className="mt-10 text-center bg-teal-400/5 py-4 rounded-xl text-teal-400 font-mono text-sm border border-teal-400/20 font-bold">
            Valuation: $3.2M (High Multiple)
          </div>
        </div>
      </Card>
    </div>
  );
};

// --- Main App Component ---

const App = () => {
  return (
    <div className={`min-h-screen ${neuBase} font-sans selection:bg-teal-500/20 selection:text-teal-200`}>
      
      <div className="pt-24 max-w-5xl mx-auto px-8 pb-24 space-y-32">
        
        {/* HERO SECTION */}
        <header className="text-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
  
  {/* BADGE */}
  <div className="flex justify-center">
    <Badge color="cyan">New 2025 Framework</Badge>
  </div>

  {/* HEADLINE */}
  <h1
    className="
      mt-8 sm:mt-10
      text-3xl sm:text-4xl md:text-5xl lg:text-7xl
      font-black text-zinc-300
      leading-tight sm:leading-tight lg:leading-[1.05]
      tracking-tight
      max-w-5xl mx-auto
    "
  >
    Scale TikTok Ads{" "}
    <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-rose-400 opacity-90">
      3–5x
    </span>{" "}
    Without Your ROAS Collapsing
  </h1>

  {/* SUBHEAD */}
  <p
    className="
      mt-6 sm:mt-8 md:mt-10
      text-base sm:text-lg md:text-xl lg:text-2xl
      text-zinc-500
      max-w-xl sm:max-w-2xl lg:max-w-3xl
      mx-auto
      leading-relaxed
      font-light
    "
  >
    95% of fashion brands hit a wall at $30K spend. Our 10x Scaling System
    maintains 4–6x ROAS through creative velocity.
  </p>

  {/* CTA */}
  <div className="mt-10 sm:mt-12 lg:mt-16 flex flex-col sm:flex-row justify-center gap-5 sm:gap-6">
    <WhatsappCTA
      whatsappNumber="+919910220335"
      calendlyUrl="https://calendly.com/arlox-/strategy-call-1"
    >
      <GlassButton
        label="Get The Solution"
        icon={Play}
        className="text-zinc-200 w-full sm:w-auto"
        style={{
          background:
            "linear-gradient(135deg, rgba(251,113,133,0.1) 0%, rgba(45,212,191,0.1) 100%)",
        }}
      />
    </WhatsappCTA>
  </div>

</header>

        {/* 1. THE PROBLEM */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
         <div className="md:col-span-2 flex justify-center">
    <Badge color="gold">CORE PROBLEM</Badge>
  </div>
          <div>
            <div className="flex items-center gap-6 mb-8">
               <SectionIcon icon={<AlertTriangle />} colorClass={theme.accent} />
              <h2 className="text-4xl font-bold text-zinc-300">The 21-Day Death Cycle</h2>
            </div>
            <p className="text-zinc-400 text-lg mb-10 text-center font-bold leading-relaxed">
             This is what your Tiktok launch looks like :
            </p>
          <div className="relative flex flex-col items-center w-full">
  {[
    {
      week: "Week 1",
       body: (
    <>
      Days 1–7: Your winner finds its ideal audience.{" "}
      <strong className="text-green-200 font-bold">
        CPM $8, CTR 2.8%, ROAS 4.8x
      </strong>
      . You’re euphoric.
    </>
  ),
      danger: false,
    },
    {
      week: "Week 2",
      body: (
    <>
      Days 8–14: TikTok’s algorithm exhausts that audience. Starts showing your ad to less-relevant people{" "}
       Frequency climbs to 3.5x, CPM rises to $12,
       <strong className="text-yellow-200 font-bold">
        CTR drops to 1.6%. ROAS: 3.2x </strong>
       You think it’s “variance.”

    </>
  ),
    
      danger: false,
    },
    {
      week: "Week 3",
      body:
        "Days 15–21: Complete saturation. Frequency hits 6.2x, CPM explodes to $18, CTR collapses to 0.8%. ROAS crashes to 2.1x. Your “winner” is now burning cash",
        danger: true,
    },
  ].map((item, i, arr) => (
    <React.Fragment key={i}>
      {/* CARD */}
      <div
        className={`
          group
          w-1/2 max-w-xl
          rounded-3xl
          p-4
          border border-[#333339]
          bg-[#2b2b30]
          ${neuShadow}
          transition-all duration-500
          hover:w-full
          hover:${neuInset}
        `}
      >
        <h3
          className={`
            text-xl font-bold text-center mb-4
            ${item.danger ? theme.accent : "text-zinc-300"}
          `}
        >
          {item.week}
        </h3>

        <div
          className={`
            overflow-hidden
            max-h-0
            opacity-0
            transition-all duration-500 ease-out
            group-hover:max-h-40
            group-hover:opacity-100
          `}
        >
          <div className={`p-4 rounded-2xl ${neuInset}`}>
            <p
              className={`
                text-lg leading-relaxed
                ${item.danger ? `font-bold ${theme.accent}` : "text-zinc-500"}
              `}
            >
              {item.body}
            </p>
          </div>
        </div>
      </div>

      {/* ARROW (not after last card) */}
      {i < arr.length - 1 && <WaterfallArrow />}
    </React.Fragment>
  ))}
</div>
<div className="space-y-2 mt-20 text-zinc-400 text-lg leading-relaxed">
  <p className="font-bold text-zinc-300 ">
    What this costs you:
  </p>

  <p>
    <strong className="text-rose-400">$30–50K/month</strong> wasted on dead creatives.
  </p>

  <p>
    Missed growth windows while competitors with <strong className="text-zinc-300">creative velocity</strong> capture market share.
  </p>

  <p>
    Team burnout from constant <em>“back to square one”</em> cycles.
  </p>

  <p className="pt-4 border-t border-[#333339] text-zinc-500">
    The brutal truth: your 2018 playbook doesn’t work in TikTok’s 2025 algorithm.
    <br />
    <span className="text-rose-400 font-bold">
      Creative diversity wins. Budget scaling fails.
    </span>
  </p>
</div>
          </div>
          
          <Card inset className="p-6 sm:p-8 md:p-10 border-rose-500/10">
  <div className="space-y-6 sm:space-y-8">

    {/* TIMELINE LABELS */}
    <div className="flex justify-between text-[11px] sm:text-sm font-bold text-zinc-600">
      <span>Day 1</span>
      <span>Day 14</span>
      <span>Day 21</span>
    </div>

    {/* GRAPH */}
    <div className="relative w-full h-40 sm:h-48 md:h-56">

      {/* SVG RESPONSIVE */}
      <svg
        viewBox="0 0 400 200"
        preserveAspectRatio="none"
        className="w-full h-full overflow-visible"
      >
        <path
          d="M0,20 Q150,20 200,80 T400,180"
          fill="none"
          stroke="#fb7185"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.8"
        />
        <circle cx="0" cy="20" r="6" fill="#2b2b30" stroke="#fb7185" strokeWidth="3" />
        <circle cx="200" cy="80" r="6" fill="#2b2b30" stroke="#fb7185" strokeWidth="3" />
        <circle cx="400" cy="180" r="6" fill="#2b2b30" stroke="#fb7185" strokeWidth="3" />
      </svg>

      {/* TOP CALLOUT */}
      <div
        className={`
          absolute top-2 right-2
          sm:top-0 sm:right-0
          ${theme.bg} ${neuInset} ${theme.accent}
          text-[10px] sm:text-xs font-bold
          px-2 sm:px-3 py-1.5 sm:py-2
          rounded-lg
          max-w-[70%] sm:max-w-none
          text-center
        `}
      >
        CPM Explodes to $18
      </div>

      {/* BOTTOM CALLOUT */}
      <div
        className="
          absolute bottom-2 right-2
          sm:bottom-0 sm:right-0
          bg-rose-500/90 text-white
          text-[10px] sm:text-xs font-bold
          px-2 sm:px-3 py-1.5 sm:py-2
          rounded-lg
          max-w-[70%] sm:max-w-none
          text-center
        "
      >
        ROAS Crashes to 2.1x
      </div>
    </div>

    {/* FINANCIAL DAMAGE */}
    <div className="bg-[#26262a] p-4 sm:p-6 rounded-2xl border border-rose-900/30 shadow-inner">
      <h5 className={`${theme.accent} font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-3 sm:mb-4`}>
        The Financial Damage
      </h5>

      <div className="flex justify-between text-xs sm:text-sm mb-2">
        <span className="text-zinc-500">Week 1 Profit:</span>
        <span className="text-teal-500 font-bold">$33.6K</span>
      </div>

      <div className="flex justify-between text-xs sm:text-sm">
        <span className="text-zinc-500">Week 3 Profit:</span>
        <span className={`${theme.accent} font-bold`}>-$2.6K (LOSS)</span>
      </div>
    </div>

    {/* FOOTNOTE */}
    <div
      className={`
        text-center
        text-[10px] sm:text-xs
        uppercase tracking-widest
        ${theme.accent}
        font-bold
        py-2
        opacity-80
      `}
    >
      The Pattern You Can’t See
    </div>

  </div>
</Card>

        </section>


        {/* 2. HIDDEN CONSEQUENCES */}
        <section>
             <div className="flex justify-center mb-4"> <Badge color="cyan">HIDDEN CONSEQUENCES </Badge></div>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-zinc-300 mb-4">The Compounding Cost</h2>
            <p className="text-zinc-500 text-lg">This isn't just one failed ad. It's an existential business threat.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="flex flex-col gap-6">
               <div className="flex items-center gap-4 text-rose-400">
                 <div className={`p-3 rounded-2xl ${neuInset}`}><Skull size={20} /></div> <h3 className="font-bold text-lg text-zinc-300">Competitors Steal Share</h3>
               </div>
               <p className="text-zinc-500 leading-relaxed text-sm">While you re-test one ad, they run 120. They capture 5x more audience segments. You become invisible.</p>
            </Card>
            <Card className="flex flex-col gap-6">
               <div className="flex items-center gap-4 text-amber-400">
                 <div className={`p-3 rounded-2xl ${neuInset}`}><Activity size={20} /></div> <h3 className="font-bold text-lg text-zinc-300">Algorithm Poisoning</h3>
               </div>
               <p className="text-zinc-500 leading-relaxed text-sm">Scaling dead creatives teaches TikTok your brand = low engagement. Trust score drops. CPMs rise.</p>
            </Card>
            <Card className="flex flex-col gap-6">
               <div className="flex items-center gap-4 text-purple-400">
                 <div className={`p-3 rounded-2xl ${neuInset}`}><Users size={20} /></div> <h3 className="font-bold text-lg text-zinc-300">Team Burnout</h3>
               </div>
               <p className="text-zinc-500 leading-relaxed text-sm">Creative → Test → Win → Crash. This cycle destroys morale. Your best people leave.</p>
            </Card>
            <Card className="flex flex-col gap-6">
               <div className="flex items-center gap-4 text-red-400">
                 <div className={`p-3 rounded-2xl ${neuInset}`}><DollarSign size={20} /></div> <h3 className="font-bold text-lg text-zinc-300">You Bleed Capital</h3>
               </div>
               <p className="text-zinc-500 leading-relaxed text-sm">Fashion brands waste $240K-$480K annually on saturated creatives that should have been killed in Week 2.</p>
            </Card>
            <Card className="flex flex-col gap-6">
               <div className="flex items-center gap-4 text-rose-300">
                 <div className={`p-3 rounded-2xl ${neuInset}`}><ShieldAlert size={20} /></div> <h3 className="font-bold text-lg text-zinc-300">No Endurance</h3>
               </div>
               <p className="text-zinc-500 leading-relaxed text-sm">One TikTok update (like 2024's "For You" change) can drop revenue 60% overnight if you rely on 2 winners.</p>
            </Card>
            <Card className="flex flex-col gap-6">
               <div className="flex items-center gap-4 text-zinc-400">
                 <div className={`p-3 rounded-2xl ${neuInset}`}><EyeOff size={20} /></div> <h3 className="font-bold text-lg text-zinc-300">Losing Attention War</h3>
               </div>
               <p className="text-zinc-500 leading-relaxed text-sm">TikTok Shop GMV hit $33.2B. Competitors with creative velocity capture 80% of that growth. You fight for scraps.</p>
            </Card>
          </div>
          <p className='mt-10 text-center font-bold text-xl '>This is an existential business problem, not a <strong>“media buying”</strong> issue.
</p>
        </section>
        
        {/* 3. THE SOLUTION (Trinity) */}
        <section>
                <div className="flex justify-center mb-4"> <Badge color="cyan">THE SOLUTION</Badge></div>
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-zinc-300 mb-8">The Arlox TikTok Scaling System</h2>
            <p className="text-xl text-zinc-500">You don't have an "ad" problem. You have a system problem.</p>
          </div>
          <TrinitySystem />
        </section>

        {/* 4. EVIDENCE (Case Studies) */}
        <section>
            <p >case study</p>
        </section>

        {/* 6. ROADMAP */}
        <section className="py-20">
             <div className="flex justify-center mb-4"> <Badge color="cyan">ROADMAP</Badge></div>
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-zinc-300">90-Day Implementation</h2>
            <p className="text-zinc-500 mt-4 text-lg">
              Each phase builds irreversible leverage.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { phase: "Phase 1", title: "Foundation", time: "Wk 1–2", color: "border-teal-400", text: "text-teal-400", desc: "Clarity, positioning, and structural setup." },
              { phase: "Phase 2", title: "Mythos Activation", time: "Wk 3–6", color: "border-purple-400", text: "text-purple-400", desc: "Narrative deployment and authority signals." },
              { phase: "Phase 3", title: "Sentinel Deployment", time: "Wk 7–10", color: "border-rose-400", text: "text-rose-400", desc: "Automation and performance enforcement." },
              { phase: "Phase 4", title: "Vault Construction", time: "Wk 11–16", color: "border-amber-300", text: "text-amber-300", desc: "Long-term moat and IP consolidation." }
            ].map((item, i) => (
              <div
                key={i}
                className={`p-10 rounded-[2rem] ${neuBase} ${neuShadow} border-t-4 ${item.color}`}
              >
                <span className={`text-xs font-bold uppercase tracking-widest ${item.text}`}>
                  {item.phase}
                </span>
                <h4 className="text-2xl font-bold text-zinc-200 mt-4">{item.title}</h4>
                <p className="text-zinc-500 text-sm mt-4 leading-relaxed">{item.desc}</p>

                <div className={`mt-8 inline-block font-mono text-xs px-4 py-2 rounded-xl bg-[#26262a] ${item.text} ${neuInset}`}>
                  {item.time}
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* 7. THE INSIGHT (Decision Tree) */}
         <div className="flex justify-center mb-4"> <Badge color="cyan">THE INSIGHT</Badge></div>
        <section>
           <div className="text-center mb-10">
             <h2 className="text-4xl font-bold text-zinc-300">Why 95% Fail (Decision Tree)</h2>
             <p className="text-zinc-500 mt-4 text-lg">The difference between stagnation and scale is one strategic choice.</p>
           </div>
           <InsightDecisionTree />
        </section>

        {/* 8. UNIQUENESS */}
        <section>
                     <div className="flex justify-center mb-4"> <Badge color="cyan">UNIQUENESS</Badge></div>

          <div className="mb-12 flex items-center gap-6">
             <SectionIcon icon={<Globe />} colorClass={theme.primary} />
             <h2 className="text-4xl font-bold text-zinc-300">Why Arlox Is Different</h2>
          </div>
          <UniquenessList />
        </section>

        {/* 9. COMPARISON TABLE */}
        <section>
                                 <div className="flex justify-center mb-4"> <Badge color="cyan">COMPARISON</Badge></div>

           <Card className="overflow-hidden p-0 border border-[#333339]">
             <div className="overflow-x-auto">
               <table className="w-full text-left">
                 <thead>
                   <tr className="bg-[#26262a] border-b border-[#333339]">
                     <th className="p-8 text-zinc-500 font-bold uppercase text-xs tracking-wider">Factor</th>
                     <th className="p-8 text-zinc-500 font-bold uppercase text-xs tracking-wider">Traditional Agency</th>
                     <th className={`p-8 ${theme.primary} font-bold uppercase text-xs tracking-wider bg-teal-500/5 border-l border-teal-500/10`}>Arlox Scale Trinity</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-[#333339]">
                    <tr>
                      <td className="p-8 font-bold text-zinc-400">Creative Output</td>
                      <td className="p-8 text-zinc-500">5-12 ads/month</td>
                      <td className="p-8 font-bold text-zinc-200 bg-teal-500/5 border-l border-teal-500/10">80-120 ads/month</td>
                    </tr>
                    <tr>
                      <td className="p-8 font-bold text-zinc-400">Owned Attention</td>
                      <td className="p-8 text-zinc-500">None</td>
                      <td className="p-8 font-bold text-zinc-200 bg-teal-500/5 border-l border-teal-500/10">Vault (80% Margin)</td>
                    </tr>
                    <tr className="align-middle">
  <td className="p-8 font-bold text-zinc-400 align-middle">
    Platform Risk
  </td>

  <td className="p-8 text-rose-400 align-middle">
    <div className="flex items-center gap-3">
      <AlertTriangle size={16} />
      <span>100% Dependent</span>
    </div>
  </td>

  <td className="p-8 font-bold text-teal-400 bg-teal-500/5 border-l border-teal-500/10 align-middle">
    <div className="flex items-center gap-3">
      <CheckCircle size={16} />
      <span>Diversified</span>
    </div>
  </td>
</tr>

                    <tr>
                      <td className="p-8 font-bold text-zinc-400">Algorithm Strategy</td>
                      <td className="p-8 text-zinc-500">Slow reaction</td>
                      <td className="p-8 font-bold text-zinc-200 bg-teal-500/5 border-l border-teal-500/10">48-Hour Adaptation</td>
                    </tr>
                 </tbody>
               </table>
             </div>
           </Card>
        </section>

        {/* 10. OBJECTIONS */}
        <section>
          <h2 className="text-4xl font-bold text-zinc-300 mb-12 text-center">But What About...</h2>
          <Objections />
          
        </section>

        {/* 11. TWO FUTURES & CTA */}
        <section id="audit" className="pb-12">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-zinc-300">Two Futures. Choose One.</h2>
            <p className="mt-6 text-xl text-zinc-500">Six months from today, where will your brand be?</p>
          </div>
          
          <FuturesComparison />

          <div className="mt-24 text-center space-y-12">
            <div className="relative inline-block rounded-3xl group">
              {/* Glow ring - ultra diffused */}
              <div
                className="
                  absolute inset-0 rounded-3xl
                  bg-gradient-to-r from-teal-500 to-rose-500
                  blur-[20px] opacity-10
                  group-hover:opacity-20
                  transition-opacity duration-700
                "
              />

              {/* Border line */}
              <div
                className="
                  absolute inset-0 rounded-3xl
                  bg-gradient-to-r from-teal-500/20 to-rose-500/20
                  p-[1px]
                "
              >
                <div className="h-full w-full rounded-3xl bg-transparent" />
              </div>

              {/* Glass content */}
              <div
                className="
                  relative rounded-3xl
                  bg-[#2b2b30]/60
                  backdrop-blur-xl
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]
                "
              >
                <WhatsappCTA
                  whatsappNumber="+919910220335"
                  calendlyUrl="https://calendly.com/arlox-/strategy-call-1"
                >
                  <GlassButton
                    label="APPLY FOR FREE GROWTH AUDIT"
                    icon={ArrowRight}
                    className="h-4 sm:h-5 text-zinc-200"
                    style={{
                      background: 'linear-gradient(135deg, rgba(251,113,133,0.1) 0%, rgba(45,212,191,0.1) 100%)'
                    }}
                  />
                </WhatsappCTA>
              </div>
            </div>

            <div className="max-w-2xl mx-auto space-y-8">
              <p className="text-zinc-500 font-medium text-lg">
                Next 10 applicants get the <span className={`${theme.primary} font-bold`}>$8,500 Resource Package</span> instantly.
              </p>
              
              <div className="flex justify-center flex-wrap gap-6 text-sm font-bold text-zinc-500">
                 <span className={`flex items-center gap-3 px-6 py-3 rounded-full ${neuInset}`}><CheckCircle size={16} className="text-teal-400"/> Hook Library</span>
                 <span className={`flex items-center gap-3 px-6 py-3 rounded-full ${neuInset}`}><CheckCircle size={16} className="text-teal-400"/> Creative Templates</span>
                 <span className={`flex items-center gap-3 px-6 py-3 rounded-full ${neuInset}`}><CheckCircle size={16} className="text-teal-400"/> Ad Swipe File</span>
              </div>
            </div>

            <div className="pt-20 border-t border-[#333339]">
               <p className="italic text-zinc-500 font-serif text-xl max-w-3xl mx-auto leading-relaxed opacity-80">
                 "The fashion brands scaling to $1M+/month right now aren't smarter than you. They have better systems. The Scale Trinity is that system."
               </p>
              
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default App;
"use client"
import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Zap, 
  Target, 
  Vault, 
  ArrowRight, 
  AlertTriangle, 
  CheckCircle, 
  BarChart2, 
  Users, 
  Clock,
  Layers,
  ChevronDown,
  ChevronUp,
  Mail,
  Lock,
  Play,
  Skull,
  Activity,
  ShieldAlert,
  BrainCircuit,
  Globe,
  DollarSign,
  EyeOff,
  XCircle,
  Split
} from 'lucide-react';
import GlassButton from '@/components/but';
import WhatsappCTA from '@/components/WhatsAppCTA';

// --- Original Light Neumorphic Styles with TikTok Accents ---

// Base colors & Utils
const neuBase = "bg-[#e0e5ec] text-slate-700";
const neuShadow = "shadow-[9px_9px_16px_rgb(163,177,198),-9px_-9px_16px_rgba(255,255,255,0.5)]";
const neuInset = "shadow-[inset_6px_6px_10px_rgb(163,177,198),inset_-6px_-6px_10px_rgba(255,255,255,0.5)]";
const neuBtn = `transition-all duration-300 active:scale-95 ${neuBase} ${neuShadow} rounded-xl border border-white/20`;

const Card = ({ children, className = "", inset = false }) => (
  <div className={`rounded-3xl p-6 border border-white/40 ${inset ? neuInset : neuShadow} ${neuBase} ${className}`}>
    {children}
  </div>
);

const Button = ({ children, onClick, className = "", primary = false }) => (
  <button 
    onClick={onClick}
    className={`${neuBtn} px-8 py-4 font-bold flex items-center justify-center gap-2 relative overflow-hidden group ${className}`}
  >
    {primary && (
      <div className="absolute inset-0 bg-gradient-to-r from-[#00f2ea] to-[#ff0050] opacity-10 group-hover:opacity-20 transition-opacity"></div>
    )}
    <span className={`relative z-10 ${primary ? 'text-slate-800' : 'text-slate-500 group-hover:text-slate-800'}`}>
      {children}
    </span>
  </button>
);

const Badge = ({ children, color = "cyan" }) => {
  // Adapted for light mode visibility
  const styles = {
    cyan: "text-[#00b3ad] bg-cyan-50 border-cyan-200",
    pink: "text-[#d60043] bg-pink-50 border-pink-200",
    purple: "text-purple-600 bg-purple-50 border-purple-200",
    gold: "text-amber-600 bg-amber-50 border-amber-200"
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border ${neuInset} ${styles[color] || styles.cyan}`}>
      {children}
    </span>
  );
};

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className={`rounded-2xl border border-white/20 overflow-hidden transition-all duration-300 ${isOpen ? neuInset : neuShadow} mb-4`}>
    <button 
      onClick={onClick}
      className="w-full p-6 flex justify-between items-center text-left focus:outline-none"
    >
      <span className={`font-bold text-lg ${isOpen ? 'text-[#00b3ad]' : 'text-slate-700'}`}>{question}</span>
      {isOpen ? <ChevronUp className="text-[#00b3ad]" /> : <ChevronDown className="text-slate-400" />}
    </button>
    <div className={`px-6 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
      <p className="text-slate-500 leading-relaxed">{answer}</p>
    </div>
  </div>
);

// --- Section 1: The Fork ---

const ScalingFork = () => {
  const [activePath, setActivePath] = useState('arlox'); 

  return (
    <div className="py-12">
      <div className={`flex justify-center mb-8 gap-6 p-2 rounded-2xl w-fit mx-auto ${neuInset}`}>
        <button 
          onClick={() => setActivePath('traditional')}
          className={`px-6 py-3 rounded-xl font-bold transition-all ${activePath === 'traditional' ? `${neuShadow} text-[#ff0050]` : 'text-slate-500 hover:text-slate-700'}`}
        >
          Traditional Path
        </button>
        <button 
          onClick={() => setActivePath('arlox')}
          className={`px-6 py-3 rounded-xl font-bold transition-all ${activePath === 'arlox' ? `${neuShadow} text-[#00b3ad]` : 'text-slate-500 hover:text-slate-700'}`}
        >
          Arlox System
        </button>
      </div>

      <Card className="relative overflow-hidden min-h-[400px]">
        {activePath === 'traditional' ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-2xl font-bold text-[#ff0050] mb-2">The Death Spiral</h3>
            <p className="mb-6 text-slate-500">Single winning creative scales, saturates, and crashes.</p>
            
            <div className="flex items-end h-64 gap-4 px-4 pb-4">
              <div className="w-1/3 bg-gradient-to-t from-[#ff0050] to-[#ff4d80] rounded-t-xl relative group h-[80%] opacity-90 hover:opacity-100 transition-all shadow-xl">
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-sm font-bold bg-[#e0e5ec] text-[#ff0050] p-2 rounded-lg shadow-md whitespace-nowrap">Week 1-2: 4.5x ROAS</div>
              </div>
              <div className="w-1/3 bg-gradient-to-t from-[#990030] to-[#cc0040] rounded-t-xl relative group h-[50%] opacity-90 hover:opacity-100 transition-all">
                 <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-sm font-bold bg-[#e0e5ec] text-slate-500 p-2 rounded-lg shadow-md whitespace-nowrap">Week 3-4: 3.2x ROAS</div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 text-white/50"><AlertTriangle size={32} /></div>
              </div>
              <div className="w-1/3 bg-gradient-to-t from-[#330010] to-[#660020] rounded-t-xl relative group h-[20%] opacity-90 hover:opacity-100 transition-all">
                 <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-sm font-bold bg-[#e0e5ec] text-slate-500 p-2 rounded-lg shadow-md whitespace-nowrap">Week 5-12: 1.8x ROAS</div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 text-white"><TrendingDown size={32} /></div>
              </div>
            </div>
            <div className={`mt-6 p-4 rounded-xl ${neuInset} border border-[#ff0050]/10 text-center`}>
              <p className="font-bold text-[#ff0050] text-lg">Outcome: $144K Profit (Stuck)</p>
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
             <h3 className="text-2xl font-bold text-[#00b3ad] mb-2">Creative Velocity</h3>
             <p className="mb-6 text-slate-500">75+ creatives rotating to feed the algorithm.</p>

             <div className="flex items-end h-64 gap-2 px-4 pb-4">
               {[...Array(12)].map((_, i) => {
                 const height = 40 + (i * 5) + Math.random() * 10;
                 return (
                   <div key={i} className="flex-1 bg-gradient-to-t from-[#00f2ea] to-[#009995] rounded-t-lg relative group transition-all hover:brightness-110 shadow-lg" style={{ height: `${height}%` }}>
                     <div className="hidden group-hover:block absolute -top-14 left-1/2 -translate-x-1/2 text-xs font-bold bg-[#e0e5ec] text-[#00b3ad] p-2 rounded-lg shadow-md z-10 whitespace-nowrap">
                       Wk {i+1}: {(4.5 + (i * 0.1)).toFixed(1)}x ROAS
                     </div>
                   </div>
                 )
               })}
             </div>
             <div className={`mt-6 p-4 rounded-xl ${neuInset} border border-[#00f2ea]/10 flex justify-between items-center`}>
              <p className="font-bold text-[#00b3ad] text-lg">Outcome: $1.52M Profit (Scaled)</p>
              <Badge color="cyan">10.5x More Profit</Badge>
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
      icon: <Zap size={32} className="text-[#00b3ad]" />,
      desc: "Produces 80-120 TikTok-native ads per month. Hook-angle testing matrix ensures the algorithm never saturates.",
      details: [
        "Hook-Angle Matrix: 8-12 angles x 3 hooks = 24-36 unique ads/mo",
        "TikTok Native: 9:16, 3s hooks, trending sounds (no polished TV ads)",
        "Rapid Kill Protocol: Pause bottom 50% by Day 4 (Hook Rate <45%)"
      ],
      stat: "15-20 new ads/week",
      color: "text-[#00b3ad]",
      borderColor: "border-[#00b3ad]",
      shadow: "shadow-[0_0_20px_rgba(0,179,173,0.15)]"
    },
    sentinel: {
      title: "SENTINEL",
      subtitle: "Scientific Media Buying",
      icon: <Target size={32} className="text-[#ff0050]" />,
      desc: "Data-driven campaign architecture. Rotates creatives every 14 days. Kills losers fast, scales winners scientifically.",
      details: [
        "14-Day Rotation: Kill bottom 60%, scale top 40%, retire winners at Day 21",
        "Broad Targeting: Let creative be the targeting (18-55+)",
        "Blue Swan Protocol: 20% budget for 'wild card' tests"
      ],
      stat: "4-6x ROAS Sustained",
      color: "text-[#ff0050]",
      borderColor: "border-[#ff0050]",
      shadow: "shadow-[0_0_20px_rgba(255,0,80,0.15)]"
    },
    vault: {
      title: "VAULT",
      subtitle: "The 80% Profit Engine",
      icon: <Vault size={32} className="text-amber-500" />,
      desc: "Captures 30-50% of traffic as email/SMS subs. Turns rented attention into owned assets with 80% margins.",
      details: [
        "Phase 1: Reinvest 100% front-end profit to build list (Months 1-3)",
        "Phase 2: Harvest 3-5 campaigns/mo ($3-8 revenue per sub)",
        "Outcome: 50% of profit from owned attention by Month 12"
      ],
      stat: "0 Ad Spend Revenue",
      color: "text-amber-500",
      borderColor: "border-amber-500",
      shadow: "shadow-[0_0_20px_rgba(245,158,11,0.15)]"
    }
  };

  return (
    <div className="grid md:grid-cols-12 gap-8">
      <div className="md:col-span-4 space-y-4">
        {Object.entries(pillars).map(([key, data]) => (
          <div 
            key={key}
            onClick={() => setActivePillar(key)}
            className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 flex items-center gap-4 border border-transparent ${activePillar === key ? `${neuInset} border-slate-200` : `${neuShadow} hover:translate-x-1`}`}
          >
            <div className={`p-3 rounded-xl bg-[#e0e5ec] ${neuShadow}`}>
              {data.icon}
            </div>
            <div>
              <h3 className={`font-bold ${activePillar === key ? 'text-slate-800' : 'text-slate-500'}`}>{data.title}</h3>
              <p className="text-xs text-slate-400 uppercase tracking-wider">{data.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="md:col-span-8">
        <Card className="h-full flex flex-col justify-center items-center text-center p-12 relative overflow-hidden">
           <div className={`mb-8 p-8 rounded-full bg-[#e0e5ec] ${neuShadow} border border-white ${pillars[activePillar].shadow}`}>
             {pillars[activePillar].icon}
           </div>
           <h2 className={`text-5xl font-black mb-2 tracking-tighter ${pillars[activePillar].color}`}>{pillars[activePillar].title}</h2>
           <h4 className="text-xl text-slate-500 mb-8 font-medium">{pillars[activePillar].subtitle}</h4>
           <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
             {pillars[activePillar].desc}
           </p>
           
           <div className="mb-8 w-full max-w-md text-left bg-slate-50/50 p-6 rounded-xl border border-slate-200">
             <h5 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Core Protocols</h5>
             <ul className="space-y-3">
               {pillars[activePillar].details.map((detail, i) => (
                 <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                   <CheckCircle size={16} className={`${pillars[activePillar].color} mt-1 flex-shrink-0`} />
                   {detail}
                 </li>
               ))}
             </ul>
           </div>

           <div className={`text-xl font-bold px-8 py-4 rounded-xl ${neuInset} border ${pillars[activePillar].borderColor} border-opacity-30 ${pillars[activePillar].color}`}>
             {pillars[activePillar].stat}
           </div>
        </Card>
      </div>
    </div>
  );
};

// --- Section 7: The Insight (Decision Tree) ---

const InsightDecisionTree = () => {
  const [activeTab, setActiveTab] = useState('95');

  return (
    <div className="my-12">
      <div className="flex justify-center mb-8">
        <div className={`flex p-2 rounded-2xl ${neuInset}`}>
          <button 
            onClick={() => setActiveTab('95')} 
            className={`px-8 py-3 rounded-xl font-bold transition-all ${activeTab === '95' ? 'bg-[#ff0050] text-white shadow-md' : 'text-slate-500'}`}
          >
            The 95% Path (Failure)
          </button>
          <button 
            onClick={() => setActiveTab('5')} 
            className={`px-8 py-3 rounded-xl font-bold transition-all ${activeTab === '5' ? 'bg-[#00b3ad] text-white shadow-md' : 'text-slate-500'}`}
          >
            The 5% Path (Success)
          </button>
        </div>
      </div>

      <Card className="min-h-[400px]">
        {activeTab === '95' ? (
          <div className="animate-in fade-in duration-300">
            <h3 className="text-2xl font-bold text-[#ff0050] mb-6 flex items-center gap-3">
              <XCircle /> The Mistake: Budget = Scaling
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-slate-600 mb-4">They believe scaling means pouring money into "proven" ads. But budget doesn't unlock audiences, creative does.</p>
                <div className="bg-slate-100/50 p-6 rounded-xl border border-[#ff0050]/20">
                  <h4 className="text-slate-800 font-bold mb-4">Brand A (Creative Scarcity)</h4>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex justify-between"><span>Inputs:</span> <span className="text-slate-800">5 Ads, $60K Budget</span></li>
                    <li className="flex justify-between"><span>Action:</span> <span className="text-[#ff0050]">Exhausts 5 segments</span></li>
                    <li className="flex justify-between"><span>Result:</span> <span className="text-[#ff0050]">ROAS crashes to 2.2x</span></li>
                    <li className="flex justify-between border-t border-slate-300 pt-2 font-bold"><span>Outcome:</span> <span className="text-slate-800">$132K Revenue (Stuck)</span></li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-4 text-sm text-slate-500">
                <div className="p-4 rounded-xl border border-white bg-[#e0e5ec] shadow-sm">
                  <p className="mb-2 font-bold text-[#ff0050]">The Lie: Data Accuracy</p>
                  <p>TikTok over-attributes by 25%. If dash says 4.2x, your bank account says 3.1x. You're bleeding cash celebrating fake wins.</p>
                </div>
                <div className="p-4 rounded-xl border border-white bg-[#e0e5ec] shadow-sm">
                  <p className="mb-2 font-bold text-[#ff0050]">The Risk: Rented Attention</p>
                  <p>If TikTok bans tomorrow, Brand A has $0 revenue. Zero owned assets.</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in duration-300">
            <h3 className="text-2xl font-bold text-[#00b3ad] mb-6 flex items-center gap-3">
              <CheckCircle /> The Truth: Creative = Targeting
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-slate-600 mb-4">The 5% use creative diversity to unlock new audience segments. 80 creatives = 80 keys.</p>
                <div className="bg-slate-100/50 p-6 rounded-xl border border-[#00b3ad]/20">
                  <h4 className="text-slate-800 font-bold mb-4">Brand B (Creative Velocity)</h4>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex justify-between"><span>Inputs:</span> <span className="text-slate-800">90 Ads, $60K Budget</span></li>
                    <li className="flex justify-between"><span>Action:</span> <span className="text-[#00b3ad]">Unlocks 40+ segments</span></li>
                    <li className="flex justify-between"><span>Result:</span> <span className="text-[#00b3ad]">ROAS sustains 4.9x</span></li>
                    <li className="flex justify-between border-t border-slate-300 pt-2 font-bold"><span>Outcome:</span> <span className="text-slate-800">$294K Revenue (+123%)</span></li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-4 text-sm text-slate-500">
                <div className="p-4 rounded-xl border border-white bg-[#e0e5ec] shadow-sm">
                  <p className="mb-2 font-bold text-[#00b3ad]">The Fix: Triple Verification</p>
                  <p>We use CAPI + Manual Tracking + MER. We know the real unit economics.</p>
                </div>
                <div className="p-4 rounded-xl border border-white bg-[#e0e5ec] shadow-sm">
                  <p className="mb-2 font-bold text-[#00b3ad]">The Moat: Owned Assets</p>
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
    <div className="space-y-4">
      {items.map((item, i) => (
        <div key={i} className={`p-6 rounded-2xl border border-white ${neuShadow} hover:border-[#00b3ad]/30 transition-all`}>
          <h4 className="text-xl font-bold text-slate-700 mb-4 flex items-center gap-2">
            <CheckCircle size={20} className="text-[#00b3ad]" /> {item.title}
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="p-3 rounded-xl bg-slate-100/50 border-l-2 border-[#ff0050] text-slate-500">
              <span className="font-bold block text-[#ff0050] mb-1">Traditional Agency:</span>
              {item.trad}
            </div>
            <div className="p-3 rounded-xl bg-slate-100/50 border-l-2 border-[#00b3ad] text-slate-700">
              <span className="font-bold block text-[#00b3ad] mb-1">Arlox:</span>
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

  const faqs = [
    { 
      q: "This sounds expensive. I can't afford Arlox.", 
      a: "You can't afford NOT to have a system. Without Arlox, you waste $40K/month on saturated ads. With Arlox, you build a $1.24M net gain system. You're not paying for Arlox; you're paying to stop bleeding cash.",
      avatar: 0
    },
    { 
      q: "I'm in a niche category. Will this work for me?", 
      a: "The framework is universal; the angles are custom. Whether you're sustainable fashion, plus-size, or modest wear, the physics of algorithm creative diversity apply. We have 300+ proven hooks adapted to your niche.",
      avatar: 0
    },
    { 
      q: "I already have an agency. Why would I switch?", 
      a: "Is your ROAS above 4.5x? Are they producing 80+ ads/month? Do you have 20K+ email subs? If not, your agency is managing ads, not engineering growth. We build the system you own.",
      avatar: 0
    },
    { 
      q: "I don't have time. This sounds like a lot of work.", 
      a: "We handle creative production (120 ads/mo), media buying, data tracking, and email marketing. You focus on product. You get your time back from micromanaging failing ads.",
      avatar: 0
    },
    { 
      q: "What if TikTok gets banned?", 
      a: "That's exactly why you need the Vault. By Month 9, 40% of profit comes from your owned email/SMS list. If TikTok disappears, your revenue survives. You become platform-independent.",
      avatar: 0
    },
    { 
      q: "How do I know you're not just another agency over-promising?", 
      a: "We use a 30-Day Proof Protocol. Week 1: Blueprint. Week 2: First 20 ads. Week 3: First winners. Week 4: Performance Report. If you don't see +20-40% ROAS improvement and 40+ new ads in testing by Day 30, you can fire us. No questions asked.",
      avatar: 0
    },
    { 
      q: "I'm only at $60K/month. Am I too small?", 
      a: "You DON'T qualify if you're under $50K/month revenue. You DO qualify if you're doing $50-100K/month with 60-75% gross margins. We only take brands we can scale. If you're ready to commit to reinvesting profit for growth, you're a fit.",
      avatar: 0
    }
  ];

  return (
    <div className="max-w-3xl mx-auto py-12">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index}
            question={faq.q}
            answer={faq.a}
            avatar={faq.avatar}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            showAvatars={true}
          />
        ))}
      </div>
    </div>
  );
};


// --- Section 11: Two Futures ---

const FuturesComparison = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 my-12">
      {/* Future A */}
      <Card className="border-t-4 border-[#ff0050] relative overflow-hidden bg-gradient-to-b from-[#e0e5ec] to-white/50">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <AlertTriangle size={200} className="text-[#ff0050]" />
        </div>
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-bold text-slate-700">Future A: Stuck</h3>
            <Badge color="pink">Traditional</Badge>
          </div>
          
          <div className="space-y-4">
            <div className={`p-5 rounded-2xl ${neuInset} border border-[#ff0050]/10`}>
              <div className="text-xs text-[#ff0050] font-bold uppercase mb-2 tracking-wider">Monthly Revenue</div>
              <div className="text-3xl font-bold text-slate-600">$120K <span className="text-sm font-normal text-[#ff0050] ml-2">(Stagnant)</span></div>
            </div>
            
            <div className={`p-5 rounded-2xl ${neuInset} border border-slate-200`}>
              <div className="text-xs text-slate-500 font-bold uppercase mb-2 tracking-wider">Platform Risk</div>
              <div className="text-2xl font-bold text-[#ff0050]">100% Dependent</div>
              <div className="text-sm text-slate-500 mt-2 flex items-center gap-2"><AlertTriangle size={14}/> One ban = Business dead</div>
            </div>

            <div className={`p-5 rounded-2xl ${neuInset} border border-slate-200`}>
               <div className="text-xs text-slate-500 font-bold uppercase mb-2 tracking-wider">Founder State</div>
               <div className="flex items-center gap-2 font-bold text-slate-600">
                 <Clock size={18} className="text-slate-500" /> 15 hrs/week micromanaging
               </div>
            </div>
          </div>
          
          <div className="mt-8 text-center py-3 rounded-lg text-slate-500 font-mono text-sm border border-dashed border-slate-300">
            Valuation: $420k (Low Multiple)
          </div>
        </div>
      </Card>

      {/* Future B */}
      <Card className="border-t-4 border-[#00f2ea] relative overflow-hidden bg-gradient-to-b from-[#e0e5ec] to-white/50 shadow-[0_0_30px_rgba(0,242,234,0.05)]">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Vault size={200} className="text-[#00b3ad]" />
        </div>
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-bold text-slate-700">Future B: Domination</h3>
            <Badge color="cyan">Arlox Trinity</Badge>
          </div>
          
          <div className="space-y-4">
            <div className={`p-5 rounded-2xl ${neuInset} border border-[#00b3ad]/20`}>
              <div className="text-xs text-[#00b3ad] font-bold uppercase mb-2 tracking-wider">Monthly Revenue</div>
              <div className="text-3xl font-bold text-slate-800">$680K <span className="text-sm font-bold text-[#00b3ad] ml-2">(+556%)</span></div>
              <div className="text-xs text-[#00b3ad] mt-2 font-medium">$260K from Owned List (0 Ad Spend)</div>
            </div>
            
            <div className={`p-5 rounded-2xl ${neuInset} border border-slate-200`}>
              <div className="text-xs text-slate-500 font-bold uppercase mb-2 tracking-wider">Platform Risk</div>
              <div className="text-2xl font-bold text-[#00b3ad]">Diversified</div>
              <div className="text-sm text-slate-500 mt-2 flex items-center gap-2"><CheckCircle size={14} className="text-[#00b3ad]"/> Business survives without TikTok</div>
            </div>

            <div className="p-5 rounded-2xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_rgb(163,177,198),inset_-4px_-4px_8px_rgba(255,255,255,0.5)]">
               <div className="text-xs text-slate-500 font-bold uppercase mb-2 tracking-wider">Founder State</div>
               <div className="flex items-center gap-2 font-bold text-slate-700">
                 <Users size={18} className="text-[#00b3ad]" /> 3 hrs/week (Strategy Only)
               </div>
            </div>
          </div>

          <div className="mt-8 text-center bg-[#00f2ea]/5 py-3 rounded-lg text-[#00b3ad] font-mono text-sm border border-[#00b3ad]/20 font-bold shadow-sm">
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
    <div className={`min-h-screen ${neuBase} font-sans selection:bg-[#00f2ea] selection:text-white`}>
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#e0e5ec]/90 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className={`p-2 rounded-lg bg-[#e0e5ec] border border-white ${neuShadow} transition-all duration-500`}>
                <div className="relative text-slate-700">
                   <Layers size={24} />
                </div>
              </div>
              <span className="font-bold text-2xl tracking-tighter text-slate-700">ARLOX</span>
            </div>
            <Button primary className="hidden md:flex text-sm py-2 px-6 rounded-full">
              Get Growth Audit
            </Button>
          </div>
        </div>
      </nav>

      <div className="pt-24 max-w-5xl mx-auto px-6 pb-20 space-y-24">
        
        {/* HERO SECTION */}
        <header className="text-center py-16">
          <Badge color="cyan">New 2025 Framework</Badge>
          <h1 className="mt-8 text-5xl md:text-7xl font-black text-slate-800 leading-tight tracking-tight">
            Scale TikTok Ads <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b3ad] to-[#ff0050]">3-5x</span> Without Your ROAS Collapsing
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            95% of fashion brands hit a wall at $30K spend. Our 10x Scaling System maintains 4-6x ROAS through creative velocity.
          </p>
          
          <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
            <Button primary onClick={() => document.getElementById('audit').scrollIntoView({behavior: 'smooth'})} className="text-lg px-10 py-5 rounded-full">
              <Play fill="currentColor" size={20} className="mr-2" /> See The Solution
            </Button>
          </div>
        </header>

        {/* 1. THE PROMISE (Split Path) */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className={`p-3 rounded-full bg-[#e0e5ec] ${neuShadow} text-[#00b3ad] border border-white`}><TrendingUp /></div>
            <h2 className="text-3xl font-bold text-slate-700">The TikTok Scaling Fork</h2>
          </div>
          <ScalingFork />
        </section>

        {/* 2. THE PROBLEM */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 rounded-full bg-[#e0e5ec] ${neuShadow} text-[#ff0050] border border-white`}><AlertTriangle /></div>
              <h2 className="text-3xl font-bold text-slate-700">The 21-Day Death Cycle</h2>
            </div>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              You launch a winner. Week 1: 4.8x ROAS. Week 3: 2.2x ROAS. 
              It's not bad luck. It's a predictable algorithmic pattern.
            </p>
            <ul className="space-y-6">
              {[
                "Days 1-7: Euphoria (4.8x ROAS)",
                "Days 8-14: Variance (3.2x ROAS)",
                "Days 15-21: Saturation (2.1x ROAS)"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                   <div className={`w-3 h-3 rounded-full ${i === 2 ? 'bg-[#ff0050] shadow-md' : 'bg-slate-300'}`}></div>
                   <span className={`text-lg ${i === 2 ? 'font-bold text-[#ff0050]' : 'text-slate-500'}`}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card inset className="p-8 border-[#ff0050]/20">
            <div className="space-y-6">
               <div className="flex justify-between text-sm font-bold text-slate-500">
                 <span>Day 1</span>
                 <span>Day 14</span>
                 <span>Day 21</span>
               </div>
               {/* Animated Graph Representation */}
               <div className="relative h-48 w-full">
                  {/* ROAS Line */}
                  <svg className="w-full h-full overflow-visible">
                    <path d="M0,20 Q150,20 200,80 T400,180" fill="none" stroke="#ff0050" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="0" cy="20" r="6" fill="#e0e5ec" stroke="#ff0050" strokeWidth="3" />
                    <circle cx="200" cy="80" r="6" fill="#e0e5ec" stroke="#ff0050" strokeWidth="3" />
                    <circle cx="400" cy="180" r="6" fill="#e0e5ec" stroke="#ff0050" strokeWidth="3" />
                  </svg>
                  
                  <div className="absolute top-0 right-0 bg-[#e0e5ec] border border-[#ff0050]/30 text-[#ff0050] text-xs font-bold px-2 py-1 rounded shadow-md">CPM Explodes to $18</div>
                  <div className="absolute bottom-0 right-0 bg-[#ff0050] text-white text-xs font-bold px-2 py-1 rounded shadow-md">ROAS Crashes to 2.1x</div>
               </div>
               
               {/* New Financial Damage Box */}
               <div className="bg-slate-100 p-4 rounded-xl border border-red-200">
                  <h5 className="text-[#ff0050] font-bold text-xs uppercase tracking-widest mb-2">The Financial Damage</h5>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-500">Week 1 Profit:</span>
                    <span className="text-green-600 font-bold">$33.6K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Week 3 Profit:</span>
                    <span className="text-[#ff0050] font-bold">-$2.6K (LOSS)</span>
                  </div>
               </div>

               <div className="text-center text-xs uppercase tracking-widest text-[#ff0050] font-bold py-2 rounded">The Pattern You Can't See</div>
            </div>
          </Card>
        </section>

        {/* 3. HIDDEN CONSEQUENCES - RESTORED FULL LIST */}
        <section>
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-slate-700 mb-4">The Compounding Cost</h2>
            <p className="text-slate-500">This isn't just one failed ad. It's an existential business threat.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="flex flex-col gap-4">
               <div className="flex items-center gap-3 text-[#ff0050]">
                 <Skull size={24} /> <h3 className="font-bold text-xl text-slate-700">Competitors Steal Share</h3>
               </div>
               <p className="text-slate-500">While you re-test one ad, they run 120. They capture 5x more audience segments. You become invisible.</p>
            </Card>
            <Card className="flex flex-col gap-4">
               <div className="flex items-center gap-3 text-orange-500">
                 <Activity size={24} /> <h3 className="font-bold text-xl text-slate-700">Algorithm Poisoning</h3>
               </div>
               <p className="text-slate-500">Scaling dead creatives teaches TikTok your brand = low engagement. Trust score drops. CPMs rise.</p>
            </Card>
            <Card className="flex flex-col gap-4">
               <div className="flex items-center gap-3 text-purple-600">
                 <Users size={24} /> <h3 className="font-bold text-xl text-slate-700">Team Burnout</h3>
               </div>
               <p className="text-slate-500">Creative → Test → Win → Crash. This cycle destroys morale. Your best people leave.</p>
            </Card>
            <Card className="flex flex-col gap-4">
               <div className="flex items-center gap-3 text-red-600">
                 <DollarSign size={24} /> <h3 className="font-bold text-xl text-slate-700">You Bleed Capital</h3>
               </div>
               <p className="text-slate-500">Fashion brands waste $240K-$480K annually on saturated creatives that should have been killed in Week 2.</p>
            </Card>
            <Card className="flex flex-col gap-4">
               <div className="flex items-center gap-3 text-red-500">
                 <ShieldAlert size={24} /> <h3 className="font-bold text-xl text-slate-700">Existential Risk</h3>
               </div>
               <p className="text-slate-500">One TikTok update (like 2024's "For You" change) can drop revenue 60% overnight if you rely on 2 winners.</p>
            </Card>
            <Card className="flex flex-col gap-4">
               <div className="flex items-center gap-3 text-slate-700">
                 <EyeOff size={24} /> <h3 className="font-bold text-xl">Losing Attention War</h3>
               </div>
               <p className="text-slate-500">TikTok Shop GMV hit $33.2B. Competitors with creative velocity capture 80% of that growth. You fight for scraps.</p>
            </Card>
          </div>
        </section>

        {/* 4. THE SOLUTION (Trinity) */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-700 mb-6">The Arlox Scale Trinity™</h2>
            <p className="text-xl text-slate-500">You don't have an "ad" problem. You have a system problem.</p>
          </div>
          <TrinitySystem />
        </section>

        {/* 5. EVIDENCE (Case Studies) */}
        <section>
          <h2 className="text-3xl font-bold text-slate-700 mb-10 flex items-center gap-3">
             <div className={`p-2 rounded-full bg-[#e0e5ec] ${neuShadow} text-[#00b3ad]`}><BarChart2 /></div>
             The Evidence
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
             {[
               { title: "Sustainable Streetwear", growth: "+165%", label: "Revenue Growth" },
               { title: "Women's Athleisure", growth: "42K", label: "Owned Subscribers" },
               { title: "Luxury Accessories", growth: "5.4x", label: "Sustained ROAS" }
             ].map((study, i) => (
               <Card key={i} className="text-center hover:-translate-y-2 transition-transform duration-300 border-b-4 border-[#00b3ad]">
                 <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{study.title}</div>
                 <div className="text-5xl font-black text-slate-700 mb-4 tracking-tight">{study.growth}</div>
                 <div className="text-[#00b3ad] font-medium">{study.label}</div>
               </Card>
             ))}
          </div>
        </section>

        {/* 6. ROADMAP */}
        <section className="py-16">
  <div className="mb-12">
    <h2 className="text-3xl font-bold text-slate-700">90-Day Implementation</h2>
    <p className="text-slate-500 mt-2">
      Each phase builds irreversible leverage.
    </p>
  </div>

  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
    {[
      { phase: "Phase 1", title: "Foundation", time: "Wk 1–2", color: "border-[#00b3ad]", text: "text-[#00b3ad]", desc: "Clarity, positioning, and structural setup." },
      { phase: "Phase 2", title: "Mythos Activation", time: "Wk 3–6", color: "border-purple-500", text: "text-purple-600", desc: "Narrative deployment and authority signals." },
      { phase: "Phase 3", title: "Sentinel Deployment", time: "Wk 7–10", color: "border-[#ff0050]", text: "text-[#ff0050]", desc: "Automation and performance enforcement." },
      { phase: "Phase 4", title: "Vault Construction", time: "Wk 11–16", color: "border-amber-400", text: "text-amber-500", desc: "Long-term moat and IP consolidation." }
    ].map((item, i) => (
      <div
        key={i}
        className={`p-8 rounded-3xl ${neuBase} ${neuShadow} border-t-4 ${item.color}`}
      >
        <span className={`text-xs font-bold uppercase tracking-widest ${item.text}`}>
          {item.phase}
        </span>
        <h4 className="text-xl font-bold text-slate-700 mt-2">{item.title}</h4>
        <p className="text-slate-500 text-sm mt-3">{item.desc}</p>

        <div className={`mt-6 inline-block font-mono text-xs px-3 py-1 rounded-lg ${neuInset} ${item.text} bg-slate-50`}>
          {item.time}
        </div>
      </div>
    ))}
  </div>
</section>


        {/* 7. THE INSIGHT (Decision Tree) */}
        <section>
           <div className="text-center mb-8">
             <h2 className="text-3xl font-bold text-slate-700">Why 95% Fail (Decision Tree)</h2>
             <p className="text-slate-500 mt-2">The difference between stagnation and scale is one strategic choice.</p>
           </div>
           <InsightDecisionTree />
        </section>

        {/* 8. UNIQUENESS */}
        <section>
          <div className="mb-8 flex items-center gap-3">
             <div className={`p-2 rounded-full bg-[#e0e5ec] ${neuShadow} text-[#00b3ad]`}><Globe /></div>
             <h2 className="text-3xl font-bold text-slate-700">Why Arlox Is Different</h2>
          </div>
          <UniquenessList />
        </section>

        {/* 9. COMPARISON TABLE */}
        <section>
           <Card className="overflow-hidden p-0 border border-white">
             <div className="overflow-x-auto">
               <table className="w-full text-left">
                 <thead>
                   <tr className="bg-slate-100 border-b border-white">
                     <th className="p-6 text-slate-500 font-bold uppercase text-sm tracking-wider">Factor</th>
                     <th className="p-6 text-slate-500 font-bold uppercase text-sm tracking-wider">Traditional Agency</th>
                     <th className="p-6 text-[#00b3ad] font-bold uppercase text-sm tracking-wider bg-[#00b3ad]/5 border-l border-[#00b3ad]/20">Arlox Scale Trinity</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-white">
                    <tr>
                      <td className="p-6 font-bold text-slate-700">Creative Output</td>
                      <td className="p-6 text-slate-500">5-12 ads/month</td>
                      <td className="p-6 font-bold text-slate-800 bg-[#00b3ad]/5 border-l border-[#00b3ad]/20">80-120 ads/month</td>
                    </tr>
                    <tr>
                      <td className="p-6 font-bold text-slate-700">Owned Attention</td>
                      <td className="p-6 text-slate-500">None</td>
                      <td className="p-6 font-bold text-slate-800 bg-[#00b3ad]/5 border-l border-[#00b3ad]/20">Vault (80% Margin)</td>
                    </tr>
                    <tr>
                      <td className="p-6 font-bold text-slate-700">Platform Risk</td>
                      <td className="p-6 text-[#ff0050] flex items-center gap-2"><AlertTriangle size={16}/> 100% Dependent</td>
                      <td className="p-6 font-bold text-[#00b3ad] bg-[#00b3ad]/5 border-l border-[#00b3ad]/20 flex items-center gap-2"><CheckCircle size={16}/> Diversified</td>
                    </tr>
                    <tr>
                      <td className="p-6 font-bold text-slate-700">Algorithm Strategy</td>
                      <td className="p-6 text-slate-500">Slow reaction</td>
                      <td className="p-6 font-bold text-slate-800 bg-[#00b3ad]/5 border-l border-[#00b3ad]/20">48-Hour Adaptation</td>
                    </tr>
                 </tbody>
               </table>
             </div>
           </Card>
        </section>

        {/* 10. OBJECTIONS */}
        <section>
          <h2 className="text-3xl font-bold text-slate-700 mb-8 text-center">But What About...</h2>
          <Objections />
        </section>

        {/* 11. TWO FUTURES & CTA */}
        <section id="audit" className="pb-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-700">Two Futures. Choose One.</h2>
            <p className="mt-4 text-xl text-slate-500">Six months from today, where will your brand be?</p>
          </div>
          
          <FuturesComparison />

          <div className="mt-20 text-center space-y-10">
            <div className="relative inline-block rounded-3xl">
  {/* Glow ring */}
  <div
    className="
      absolute inset-0 rounded-3xl
      bg-gradient-to-r from-[#00f2ea] to-[#ff0050]
      blur-[6px] opacity-40
      group-hover:opacity-70
      transition-opacity duration-500
    "
  />

  {/* Border line */}
  <div
    className="
      absolute inset-0 rounded-3xl
      bg-gradient-to-r from-[#00f2ea] to-[#ff0050]
      p-[1.5px]
    "
  >
    <div className="h-full w-full rounded-3xl bg-transparent" />
  </div>

  {/* Glass content */}
  <div
    className="
      relative rounded-3xl
      bg-[#e0e5ec]/70
      backdrop-blur-md
      shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]
    "
  >
    <WhatsappCTA
      whatsappNumber="+919910220335"
      calendlyUrl="https://calendly.com/arlox-/strategy-call-1"
    >
      <GlassButton
        label="APPLY FOR FREE GROWTH AUDIT"
        icon={ArrowRight}
        className="h-4 sm:h-5 text-white font-bold"
          style={{
    background:  'linear-gradient(135deg, #ff0050 0%, #6a5cff 45%, #00f2ea 100%)'

  }}
      />
    </WhatsappCTA>
  </div>
</div>


            
            <div className="max-w-2xl mx-auto space-y-6">
              <p className="text-slate-500 font-medium text-lg">
                Next 10 applicants get the <span className="text-[#00b3ad] font-black">$8,500 Resource Package</span> instantly.
              </p>
              
              <div className="flex justify-center flex-wrap gap-4 text-sm font-bold text-slate-500">
                 <span className={`flex items-center gap-2 px-4 py-2 rounded-full ${neuInset}`}><CheckCircle size={16} className="text-[#00b3ad]"/> Hook Library</span>
                 <span className={`flex items-center gap-2 px-4 py-2 rounded-full ${neuInset}`}><CheckCircle size={16} className="text-[#00b3ad]"/> Creative Templates</span>
                 <span className={`flex items-center gap-2 px-4 py-2 rounded-full ${neuInset}`}><CheckCircle size={16} className="text-[#00b3ad]"/> Ad Swipe File</span>
              </div>
            </div>

            <div className="pt-16 border-t border-slate-300">
               <p className="italic text-slate-500 font-serif text-lg max-w-2xl mx-auto leading-relaxed">
                 "The fashion brands scaling to $1M+/month right now aren't smarter than you. They have better systems. The Scale Trinity is that system."
               </p>
               <div className="mt-8 flex justify-center items-center gap-2 text-slate-500">
                 <Mail size={16} /> <span>hello@arlox.io</span>
               </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default App;
"use client"
import React, { useState, useEffect } from 'react';
import { 
  GitFork, 
  TrendingUp, 
  AlertCircle, 
  Zap, 
  Calendar, 
  ArrowRight, 
  MessageCircle, 
  Activity,
  ExternalLink,
  PlayCircle,
  PauseCircle
} from 'lucide-react';
import CalendlyCTA from '@/components/CalendlyCTA';
import GlassButton from '@/components/but';

// WhatsApp Icon Component
const WhatsAppIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

// WhatsApp Composer Component
const WhatsAppComposer = ({ phoneNumber, onClose }) => {
  const templates = [
    "Hi — I'd like to book a strategy call about growth.",
    "Hey team — I'm interested in your Scientific Positioning service.",
    "Hello — I want a quick audit of my ads and creative strategy.",
  ];
  const emojis = ["🚀", "📈", "💬", "🤝", "⚡"];

  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [message, setMessage] = useState(templates[0]);
  const [copied, setCopied] = useState(false);
  const charLimit = 600;

  const insertEmoji = (emoji) => {
    setMessage((prev) =>
      prev.length + emoji.length + 1 > charLimit ? prev : prev + " " + emoji
    );
  };

  const copyMsg = async () => {
    await navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  const openWhatsApp = () => {
    const phone = phoneNumber.replace(/\D/g, "");
    if (!phone) return;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    if (onClose) onClose();
  };

  return (
    <div
      className="p-6 rounded-2xl bg-[#E0E5EC]"
      style={{
        boxShadow:
          "12px 16px 36px rgba(190,195,202,0.6), -10px -10px 28px rgba(255,255,255,0.8)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 flex items-center justify-center rounded-full"
            style={{
              background: "#E0E5EC",
              boxShadow:
                "inset 6px 6px 16px rgba(190,195,202,0.5), inset -6px -6px 16px rgba(255,255,255,0.8)",
            }}
          >
            <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-700">
              Message on WhatsApp
            </p>
            <p className="text-xs text-slate-500">
              Choose a template or write your message
            </p>
          </div>
        </div>

        <p className="text-xs text-slate-500">{message.length}/600</p>
      </div>

      {/* Templates */}
      <div className="flex flex-wrap gap-2 mb-4">
        {templates.map((t, idx) => (
          <button
            key={idx}
            onClick={() => {
              setSelectedTemplate(t);
              setMessage(t);
            }}
            className={`
              px-4 py-1.5 rounded-full text-xs transition-all
              ${
                selectedTemplate === t
                  ? "text-white bg-slate-700 shadow-md"
                  : "bg-[#E0E5EC] text-slate-700 shadow-[4px_4px_8px_#bec3ca,-4px_-4px_8px_#ffffff]"
              }
            `}
          >
            {t.length > 38 ? t.slice(0, 38) + "…" : t}
          </button>
        ))}
      </div>

      {/* Textarea */}
      <div
        className="rounded-xl p-4 mb-4"
        style={{
          background: "#E0E5EC",
          boxShadow:
            "inset 6px 6px 16px rgba(190,195,202,0.5), inset -6px -6px 14px rgba(255,255,255,0.8)",
        }}
      >
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value.slice(0, charLimit))}
          className="w-full bg-transparent text-sm focus:outline-none resize-none text-slate-700"
          placeholder="Type your message..."
        />
      </div>

      {/* Emoji Row + Actions */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex gap-1">
          {emojis.map((em) => (
            <button
              key={em}
              onClick={() => insertEmoji(em)}
              className="text-lg hover:scale-110 transition-transform"
            >
              {em}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={copyMsg}
            className="px-4 py-2 text-xs rounded-lg bg-[#E0E5EC] text-slate-700 font-semibold shadow-[4px_4px_8px_#bec3ca,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3ca,inset_-2px_-2px_4px_#ffffff] transition-all"
          >
            {copied ? "✓ Copied" : "Copy"}
          </button>

          <button
            onClick={() => {
              setMessage(templates[0]);
              setSelectedTemplate(null);
            }}
            className="px-4 py-2 text-xs rounded-lg bg-[#E0E5EC] text-slate-700 font-semibold shadow-[4px_4px_8px_#bec3ca,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3ca,inset_-2px_-2px_4px_#ffffff] transition-all"
          >
            Reset
          </button>
        </div>
      </div>

      {/* WhatsApp Primary Button */}
      <button
        onClick={openWhatsApp}
        className="
          w-full py-3 rounded-xl text-white font-semibold text-base
          flex items-center justify-center gap-2 active:scale-[0.98] transition-all
          bg-[#25D366] hover:bg-[#20BA5A] shadow-lg hover:shadow-xl
        "
      >
        <WhatsAppIcon className="w-5 h-5" />
        Open WhatsApp
      </button>
    </div>
  );
};

const TheClose = () => {
  const [month, setMonth] = useState(0);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const WHATSAPP_NUMBER = "919876543210"; // Replace with actual number

  // Smooth Automatic Animation Loop
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setMonth(prev => (prev >= 6 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Data Projection Engine
  const getTimelineData = (m) => {
    const baseline = { spend: 10000, roas: 2.3, revenue: 23000, profit: 13000 };
    if (m === 0) return { trad: baseline, arlox: baseline };

    const tradRoas = Math.max(1.8, 2.3 - (m * 0.05));
    const tradRevenue = 10000 * tradRoas;
    const tradProfit = tradRevenue - 10000;

    const arloxSpend = m < 2 ? 10000 : 10000 + ((m-2) * 10000);
    const arloxRoas = Math.min(5.2, 2.3 + (m * 0.5));
    const arloxRevenue = arloxSpend * arloxRoas;
    const arloxProfit = arloxRevenue - arloxSpend;

    return {
      trad: {
        spend: 10000,
        roas: tradRoas.toFixed(2),
        revenue: Math.floor(tradRevenue),
        profit: Math.floor(tradProfit),
        status: m > 3 ? "Critical Failure" : "Stagnant",
        desc: m < 3 ? "Random testing yields noise." : "Creative fatigue. Efficiency drops."
      },
      arlox: {
        spend: arloxSpend,
        roas: arloxRoas.toFixed(1),
        revenue: Math.floor(arloxRevenue),
        profit: Math.floor(arloxProfit),
        status: "Scaling",
        desc: m < 2 ? "Winner identified." : `Scale to $${(arloxSpend/1000)}k/mo.`
      }
    };
  };

  const currentData = getTimelineData(month);
  const diffProfit = currentData.arlox.profit - currentData.trad.profit;
  const fmt = (num) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(num);

  // Neumorphic Utility Classes
  const neuOuter = "bg-[#E0E5EC] shadow-[8px_8px_16px_#bec3ca,-8px_-8px_32px_#ffffff]";
  const neuInner = "bg-[#E0E5EC] shadow-[inset_6px_6px_12px_#bec3ca,inset_-6px_-6px_12px_#ffffff]";
  const neuBtn = "bg-[#E0E5EC] hover:shadow-[inset_4px_4px_8px_#bec3ca,inset_-4px_-4px_8px_#ffffff] shadow-[6px_6px_12px_#bec3ca,-6px_-6px_12px_#ffffff] transition-all duration-300";
  const neuPressed = "bg-[#E0E5EC] shadow-[inset_4px_4px_8px_#bec3ca,inset_-4px_-4px_8px_#ffffff] border border-slate-200";

  return (
    <section className="relative w-full min-h-screen bg-[#E0E5EC] text-slate-600 font-sans py-24 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-[10%] right-[-10%] w-[40vw] h-[40vw] bg-slate-300/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-slate-300/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        
        {/* HEADER */}
        <div className="text-center mb-20">
          <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full ${neuPressed} text-slate-700 font-bold text-xs tracking-widest uppercase mb-6`}>
            <GitFork size={14} /> Decision Point
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-slate-800 tracking-tight mb-6">
            Choose Your Future.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Watch the financial divergence between "Guessing" and "Scientific Engineering" over the next 6 months.
          </p>
        </div>

        {/* PROFESSIONAL PROJECTION ENGINE */}
        <div className="mb-24 space-y-6">
           
           {/* Control Header */}
           <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                 <div className={`p-3 rounded-2xl ${neuOuter} text-slate-700`}>
                    <Activity size={24} />
                 </div>
                 <div>
                    <h3 className="text-slate-800 font-bold text-2xl">6-Month Growth Projection</h3>
                    <p className="text-sm text-slate-500">Real-time comparison of both strategies</p>
                 </div>
              </div>

              {/* Play/Pause Control */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl ${neuBtn} text-slate-700 font-semibold hover:text-slate-900`}
              >
                {isPlaying ? (
                  <>
                    <PauseCircle size={20} />
                    Pause
                  </>
                ) : (
                  <>
                    <PlayCircle size={20} />
                    Play
                  </>
                )}
              </button>
           </div>

           {/* Timeline Progress Bar */}
           <div className={`p-6 rounded-3xl ${neuOuter}`}>
              <div className="flex items-center justify-between mb-4">
                 <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Timeline Progress</span>
                 <span className="text-sm font-bold text-slate-800">
                    {month === 0 ? "Starting Point" : `Month ${month} of 6`}
                 </span>
              </div>
              
              <div className={`relative h-4 rounded-full ${neuInner} overflow-hidden`}>
                 <div 
                    className="absolute top-0 left-0 h-full bg-slate-700 rounded-full"
                    style={{ 
                      width: `${(month / 6) * 100}%`,
                      transition: 'width 2000ms cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                 />
                 
                 {/* Milestone Markers */}
                 <div className="absolute inset-0 flex justify-between px-1">
                    {[0, 1, 2, 3, 4, 5, 6].map((m) => (
                      <div 
                        key={m} 
                        className={`w-0.5 h-full transition-colors ${month >= m ? 'bg-white/30' : 'bg-slate-400/20'}`}
                      />
                    ))}
                 </div>
              </div>
              
              {/* Month Labels */}
              <div className="flex justify-between mt-2 px-1">
                 {[0, 1, 2, 3, 4, 5, 6].map((m) => (
                    <span 
                      key={m} 
                      className={`text-[10px] font-bold transition-colors ${month >= m ? 'text-slate-700' : 'text-slate-400'}`}
                    >
                      M{m}
                    </span>
                 ))}
              </div>
           </div>

           {/* Comparison Cards - Side by Side */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Traditional Path Card */}
              <div className={`${neuOuter} rounded-3xl p-8 transition-all duration-700 ${month > 2 ? 'border-2 border-red-200' : ''}`}>
                 <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                       <div className={`p-2 rounded-xl ${neuInner} text-red-500`}>
                          <AlertCircle size={20} />
                       </div>
                       <div>
                          <h4 className="text-lg font-bold text-slate-800">Traditional Testing</h4>
                          <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Guessing Game</p>
                       </div>
                    </div>
                    
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${neuInner} ${month > 3 ? 'text-red-600' : 'text-slate-600'}`}>
                       {currentData.trad.status}
                    </span>
                 </div>

                 <p className="text-sm text-slate-600 mb-6 min-h-[40px]">{currentData.trad.desc}</p>

                 {/* Metrics */}
                 <div className="space-y-4 mb-6">
                    <MetricRow label="Monthly Spend" value={fmt(currentData.trad.spend)} />
                    <MetricRow label="ROAS" value={`${currentData.trad.roas}x`} />
                    <MetricRow label="Revenue" value={fmt(currentData.trad.revenue)} />
                    <MetricRow label="Net Profit" value={fmt(currentData.trad.profit)} trend="down" />
                 </div>

                 {/* Mini Chart */}
                 <div className={`h-24 flex items-end gap-1 p-4 rounded-2xl ${neuInner}`}>
                    {[...Array(12)].map((_, i) => {
                      const barHeight = 25 + (i * 1.5);
                      return (
                        <div 
                          key={i} 
                          className={`flex-1 rounded-t ${i/2 < month ? 'bg-red-400' : 'bg-slate-300'}`}
                          style={{ 
                            height: `${barHeight}%`,
                            transition: 'all 800ms ease-in-out'
                          }} 
                        />
                      );
                    })}
                 </div>
              </div>

              {/* Arlox Path Card */}
              <div className={`${neuOuter} rounded-3xl p-8 border-2 border-green-200`}>
                 <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                       <div className={`p-2 rounded-xl bg-green-50 text-green-600 ${neuInner}`}>
                          <Zap size={20} />
                       </div>
                       <div>
                          <h4 className="text-lg font-bold text-slate-800">Scientific Engineering</h4>
                          <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Systematic Scale</p>
                       </div>
                    </div>
                    
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-green-50 text-green-700 border border-green-200 flex items-center gap-1">
                       <TrendingUp size={10} /> {currentData.arlox.status}
                    </span>
                 </div>

                 <p className="text-sm text-slate-700 font-medium mb-6 min-h-[40px]">{currentData.arlox.desc}</p>

                 {/* Metrics */}
                 <div className="space-y-4 mb-6">
                    <MetricRow label="Monthly Spend" value={fmt(currentData.arlox.spend)} highlight />
                    <MetricRow label="ROAS" value={`${currentData.arlox.roas}x`} highlight />
                    <MetricRow label="Revenue" value={fmt(currentData.arlox.revenue)} highlight />
                    <MetricRow label="Net Profit" value={fmt(currentData.arlox.profit)} trend="up" highlight />
                 </div>

                 {/* Mini Chart */}
                 <div className={`h-24 flex items-end gap-1 p-4 rounded-2xl ${neuInner}`}>
                    {[...Array(12)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`flex-1 rounded-t ${i/2 <= month ? 'bg-green-500' : 'bg-slate-300'}`}
                        style={{ 
                          height: `${(i + 1) * 7}%`,
                          transition: 'all 800ms cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                      />
                    ))}
                 </div>
              </div>

           </div>

           {/* Summary Card */}
           {month === 6 && (
             <div className={`${neuOuter} rounded-3xl p-8 border-2 border-slate-300`}>
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                   <div className="flex items-center gap-6">
                      <div className={`p-5 rounded-2xl ${neuOuter} bg-green-50 flex-shrink-0`}>
                         <TrendingUp size={32} className="text-green-600" />
                      </div>
                      <div>
                         <div className="text-xs text-slate-500 uppercase font-bold mb-2">6-Month Profit Difference</div>
                         <div className="text-5xl font-black text-slate-800">
                            +{fmt(diffProfit)}
                         </div>
                         <div className="text-sm text-slate-600 mt-2 font-medium">Same budget. Different science.</div>
                      </div>
                   </div>
                   
                   <div className="text-center md:text-right">
                      <div className="text-base text-slate-600 font-semibold mb-1">Strategy beats luck.</div>
                      <div className="text-lg text-slate-800 font-bold">Every single time.</div>
                   </div>
                </div>
             </div>
           )}

        </div>

        {/* CTA SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
           
           {/* Left Context */}
           <div className="lg:col-span-5 space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
                Your Next Move
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium text-base">
                 You don't need to commit to a 12-month contract to see if this works. 
                 Start with an audit. We'll show you exactly where you're leaving money on the table.
              </p>
              
              <div className="space-y-4">
                 <StepRow num="01" text="Book Free Angle Audit (45 min)" />
                 <StepRow num="02" text="Receive Custom Testing Plan" />
                 <StepRow num="03" text="Review AI Production Tech" />
                 <StepRow num="04" text="Launch Scientific Testing" />
              </div>

              {/* Trust Indicators */}
              <div className={`p-6 rounded-2xl ${neuInner} mt-8`}>
                 <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                       <TrendingUp className="text-green-600" size={20} />
                    </div>
                    <div>
                       <div className="text-sm font-bold text-slate-800 mb-1">No-Risk Strategy Session</div>
                       <div className="text-xs text-slate-600">Pure strategic value. No commitment required.</div>
                    </div>
                 </div>
              </div>
           </div>

           {/* Right Card - Centered Buttons */}
           <div className="lg:col-span-7 flex items-center justify-center">
              <div className={`rounded-[2.5rem] ${neuOuter} p-8 lg:p-12 relative overflow-hidden w-full max-w-2xl`}>
                 
                 {/* Decorative BG Icon */}
                 <div className="absolute -top-10 -right-10 text-slate-300/10 transition-colors duration-500 pointer-events-none transform rotate-12">
                    <Calendar size={240} />
                 </div>

                 <div className="relative z-10">
                    <div className="text-center mb-8">
                       <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${neuInner} text-slate-700 text-[10px] font-bold uppercase mb-6`}>
                          <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                          Limited Audit Slots Available
                       </div>
                       
                       <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3 leading-tight">
                         Schedule Your Free Audit
                       </h3>
                       <p className="text-slate-600 font-medium">
                         45-minute deep dive into your current ad strategy. Zero obligation.
                       </p>
                    </div>

                    <div className="space-y-4 max-w-md mx-auto">
                       {/* Primary CTA - Calendly */}
                       <CalendlyCTA calendlyUrl="https://calendly.com/arlox-/strategy-call-1">
                         <div className="flex justify-center">
                           <GlassButton 
                             label="Book Your Strategy Call" 
                             icon={Calendar} 
                             className="h-5"
                             buttonClassName="px-8 py-4 text-base"
                           />
                         </div>
                       </CalendlyCTA>
                       
                       <div className="relative py-2">
                          <div className="absolute inset-0 flex items-center">
                             <div className="w-full border-t border-slate-300"></div>
                          </div>
                          <div className="relative flex justify-center text-xs uppercase">
                             <span className={`px-3 py-1 ${neuOuter} text-slate-500 font-bold tracking-wider`}>
                               Or reach out directly
                             </span>
                          </div>
                       </div>

                       {/* Secondary CTA - WhatsApp */}
                       <div className="flex justify-center">
                         <GlassButton 
                           label="Message on WhatsApp" 
                           icon={WhatsAppIcon} 
                           className="h-5"
                           buttonClassName="px-8 py-3.5 text-base"
                           onClick={() => setShowWhatsAppModal(true)}
                         />
                       </div>
                    </div>
                 </div>
              </div>
           </div>

        </div>

        <div className="mt-24 text-center border-t border-slate-300/60 pt-8">
           <p className="text-slate-500 text-xs font-bold tracking-widest uppercase">ARLOX.IO • SYSTEMATIC SCALE</p>
        </div>

      </div>

      {/* WhatsApp Modal */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="max-w-lg w-full">
            <div className="relative">
              <button 
                onClick={() => setShowWhatsAppModal(false)}
                className="absolute -top-4 -right-4 z-10 w-10 h-10 rounded-full bg-white text-slate-600 hover:text-slate-800 transition-colors shadow-lg flex items-center justify-center font-bold text-xl"
              >
                ✕
              </button>
              <WhatsAppComposer 
                phoneNumber={WHATSAPP_NUMBER}
                onClose={() => setShowWhatsAppModal(false)}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Sub-components
const MetricRow = ({ label, value, highlight, trend }) => (
  <div className="flex items-center justify-between py-2 border-b border-slate-200">
     <span className="text-xs text-slate-600 font-semibold uppercase tracking-wider">{label}</span>
     <div className="flex items-center gap-2">
        {trend && (
          <span className={`text-sm font-bold ${trend === 'up' ? 'text-green-600' : 'text-red-500'}`}>
            {trend === 'up' ? '↑' : '↓'}
          </span>
        )}
        <span className={`text-lg font-black ${highlight ? 'text-green-600' : 'text-slate-800'}`}>
           {value}
        </span>
     </div>
  </div>
);

const StepRow = ({ num, text }) => {
   const neuInner = "bg-[#E0E5EC] shadow-[inset_3px_3px_6px_#bec3ca,inset_-3px_-3px_6px_#ffffff]";
   
   return (
     <div className="flex items-center gap-5 group">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${neuInner} text-slate-500 text-xs font-bold group-hover:text-slate-800 transition-colors`}>
           {num}
        </div>
        <span className="text-slate-600 font-medium text-sm group-hover:text-slate-800 transition-colors">{text}</span>
     </div>
   );
};

export default TheClose;

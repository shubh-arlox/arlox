"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  TrendingDown, Zap, ArrowRight, AlertTriangle,
  Instagram, Heart, MessageCircle, Send, Bookmark, 
  MoreHorizontal, CheckCircle2, Sparkles, Activity,
  ShoppingBag, Star, Tag, Clock
} from 'lucide-react';
import ProtocolBadge from '@/components/ProtocolBadge';
import WhatsappCTA from '@/components/WhatsAppCTA';
import GlassButton from '@/components/but';

// ===== REUSABLE COMPONENTS =====

const InstagramHeader = ({ username, isVerified, subtitle, avatarContent, avatarBg }) => (
  <div className="flex items-center justify-between px-3 py-2.5 border-b border-slate-200/50 bg-white/50 backdrop-blur-sm">
    <div className="flex items-center gap-2.5">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${avatarBg}`}>
        {avatarContent}
      </div>
      <div>
        <div className="font-semibold text-sm text-slate-800 flex items-center gap-1">
          {username}
          {isVerified && <CheckCircle2 className="text-blue-500 fill-blue-500" size={12} />}
        </div>
        <div className="text-[11px] text-slate-500">{subtitle}</div>
      </div>
    </div>
    <MoreHorizontal className="text-slate-600" size={20} />
  </div>
);

const EngagementBar = ({ likeCount, heartColor, heartFill, bookmarkColor }) => (
  <div className="flex items-center justify-between mb-2">
    <div className="flex gap-3">
      <Heart className={`${heartColor} ${heartFill ? 'fill-current' : ''}`} size={26} />
      <MessageCircle className="text-slate-800" size={26} />
      <Send className="text-slate-800" size={26} />
    </div>
    <Bookmark className={bookmarkColor} size={24} />
  </div>
);

const MetricsCard = ({ month, spend, revenue, roas, roasColor, status, statusBg, statusText, shadowPressed }) => (
  <div className={`rounded-xl bg-[#E0E5EC] p-3 mb-2 ${shadowPressed}`}>
    <div className="grid grid-cols-2 gap-3 mb-2">
      <div>
        <div className="text-[10px] text-slate-500 uppercase font-semibold">Month {month}</div>
        <div className="text-lg font-black text-slate-800">{spend} spend</div>
      </div>
      <div className="text-right">
        <div className="text-[10px] text-slate-500 uppercase font-semibold">ROAS</div>
        <div className={`text-2xl font-black ${roasColor}`}>{roas}</div>
      </div>
    </div>
    <div className="text-sm text-slate-700 mb-2">→ {revenue} revenue</div>
    <div className={`w-full py-1.5 text-center rounded-lg text-[11px] font-bold ${statusBg} ${statusText}`}>
      {status}
    </div>
  </div>
);

// ===== MAIN COMPONENT =====

const RefactoredMetaHero = () => {
  const [activeMonth, setActiveMonth] = useState(1);
  const [likeCount, setLikeCount] = useState({ trad: 0, arlox: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMonth((prev) => (prev === 3 ? 1 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setLikeCount({
      trad: Math.max(0, 1200 - (activeMonth - 1) * 400),
      arlox: 1200 + (activeMonth - 1) * 800
    });
  }, [activeMonth]);

  // Consistent shadow system
  const shadowCard = "shadow-[6px_6px_12px_rgba(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.5)]";
  const shadowPressed = "shadow-[inset_3px_3px_6px_rgba(163,177,198,0.4),inset_-3px_-3px_6px_rgba(255,255,255,0.5)]";
  const shadowButton = "shadow-[3px_3px_6px_rgba(163,177,198,0.5),-3px_-3px_6px_rgba(255,255,255,0.5)]";

  const stats = {
    1: { 
      spend: "$20K", 
      trad: { revenue: "$100K", roas: "5.0x", status: "Strong Start 🔥", statusBg: "bg-green-100", statusText: "text-green-700" },
      arlox: { revenue: "$100K", roas: "5.0x", status: "Strong Start 🚀", statusBg: "bg-emerald-100", statusText: "text-emerald-700" }
    },
    2: { 
      spend: "$50K", 
      trad: { revenue: "$180K", roas: "3.6x", status: "Declining 😰", statusBg: "bg-orange-100", statusText: "text-orange-700" },
      arlox: { revenue: "$280K", roas: "5.6x", status: "Improving 📈", statusBg: "bg-emerald-100", statusText: "text-emerald-700" }
    },
    3: { 
      spend: "$100K", 
      trad: { revenue: "$220K", roas: "2.2x", status: "Collapsed 💀", statusBg: "bg-red-100", statusText: "text-red-700" },
      arlox: { revenue: "$520K", roas: "5.2x", status: "Sustained 👑", statusBg: "bg-emerald-100", statusText: "text-emerald-700" }
    }
  };

  const currentTrad = stats[activeMonth].trad;
  const currentArlox = stats[activeMonth].arlox;

  return (
    <section className="relative w-full bg-[#E0E5EC] py-16 md:py-24 font-sans overflow-hidden">

      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-gradient-to-br from-pink-300 to-purple-300 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-gradient-to-tr from-blue-300 to-indigo-300 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">

        {/* === 1. THE PROMISE HEADER === */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <ProtocolBadge
  label="Creative Velocity System"
  icon={Instagram}
  iconColor="#5239dd"
 
/>

          <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
  className="text-4xl md:text-6xl lg:text-7xl mt-6 font-black leading-[1.1] mb-6 tracking-tight"
>
  <span className="text-slate-800">
    Scale Meta Ads 3–5x
  </span>
  <br />
 <span className="
  text-transparent bg-clip-text
  bg-gradient-to-r
  from-[#1e3a8a] via-[#312e81] to-[#1e40af]
  font-extrabold
  drop-shadow-[0_1px_0_rgba(255,255,255,0.35)]
">
  Without Your ROAS Collapsing
</span>
</motion.h1>


          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-700 font-bold max-w-3xl mx-auto mb-4"
          >
            Your Meta ads work at <span className="text-emerald-600">$10K/month</span>. 
            They die at <span className="text-red-600">$50K/month</span>.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto"
          >
            We've engineered the system that scales Facebook and Instagram ads profitably—while your competitors watch their winners burn out in 3 weeks.
          </motion.p>
        </div>

        {/* === 2. SIDE-BY-SIDE TEXT (Parallel Comparison) === */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20 items-stretch">
          
          {/* LEFT: THE BRUTAL TRUTH */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col p-8 rounded-3xl bg-[#E0E5EC] border-l-4 border-red-500 h-full ${shadowCard}`}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className={`p-3 rounded-xl bg-[#E0E5EC] ${shadowButton} text-red-500`}>
                <AlertTriangle size={28} />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-800 pt-1 leading-tight">The Brutal Truth About Meta Scaling</h2>
            </div>

            <div className="space-y-5 text-slate-700 text-lg flex-1">
              <p><strong className="text-slate-900">95% of fashion brands hit a wall</strong> between $30K–$100K monthly Meta spend.</p>
              <div className={`p-4 rounded-xl ${shadowPressed} bg-[#E0E5EC]`}>
                <p className="text-base">They find a winning ad. Scale the budget. Watch ROAS crash from <strong className="text-red-600">5x to 2x in 21 days</strong>.</p>
              </div>
              <p>They think Meta's algorithm is unpredictable. <strong className="text-slate-900">It's not. They're just feeding it wrong.</strong></p>
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-300">
               <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Median Fashion ROAS</p>
               <p className="text-4xl font-black text-red-500 mt-1">2.89x</p>
            </div>
          </motion.div>

          {/* RIGHT: THE ARLOX SYSTEM */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col p-8 rounded-3xl bg-[#E0E5EC] border-l-4 border-emerald-500 h-full ${shadowCard}`}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className={`p-3 rounded-xl bg-[#E0E5EC] ${shadowButton} text-emerald-500`}>
                <Zap size={28} fill="currentColor" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-800 pt-1 leading-tight">The Arlox Meta 10x Scaling System</h2>
            </div>

            <div className="space-y-5 text-slate-700 text-lg flex-1">
              <p>We've cracked Meta's <strong className="text-blue-600">2025 Andromeda algorithm</strong>.</p>
              <div className={`p-4 rounded-xl ${shadowPressed} bg-[#E0E5EC]`}>
                <p className="text-base">
                  Fashion brands scaling spend <strong className="text-emerald-600">3–5x</strong> while maintaining or improving ROAS. Not for 3 weeks. <strong className="text-slate-900">Sustainably.</strong>
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 flex-shrink-0 mt-1" size={20} />
                  <p className="text-base text-slate-600">Scale $20K → $100K+ without collapse</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 flex-shrink-0 mt-1" size={20} />
                  <p className="text-base text-slate-600">Predictable growth engine (no luck)</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-300">
               <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Arlox Lever</p>
               <p className="text-2xl font-black text-blue-600 mt-1">Creative Velocity</p>
            </div>
          </motion.div>

        </div>

        {/* === 3. THE VISUAL BREAKTHROUGH === */}
        <div className="mb-16">
            
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-slate-800 text-center mb-3"
          >
            The Meta Scaling Breakthrough
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600 text-center mb-10"
          >
            Same 90 days. Same Meta platform. Completely different outcomes.
          </motion.p>
            {/* TIMELINE (Simple Dot Indicator) */}
          <div className="flex justify-center">
            <div className={`bg-[#E0E5EC] px-2 py-1.5 rounded-full flex gap-1.5 ${shadowButton}`}>
              {[1, 2, 3].map((m) => (
                <button
                  key={m}
                  onClick={() => setActiveMonth(m)}
                  className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    activeMonth === m ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md' : 'text-slate-600'
                  }`}
                >
                  Month {m}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-8 mt-8">

            {/* LEFT GRAPHIC: Traditional */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`rounded-2xl bg-[#E0E5EC] overflow-hidden ${shadowCard}`}
            >
              <InstagramHeader 
                username="traditional_scaling"
                subtitle="Fashion Brand • Sponsored"
                avatarBg="bg-gradient-to-br from-red-400 to-orange-400"
                avatarContent={<TrendingDown className="text-white" size={16} />}
              />

              {/* Text-Based Creative (Traditional) */}
              <div className="relative bg-slate-100 aspect-square flex flex-col items-center justify-center p-8 text-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMonth}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 flex flex-col items-center justify-center transition-all duration-1000 ${
                      activeMonth > 1 ? 'grayscale opacity-70 blur-[1px]' : ''
                    }`}
                  >
                    <ShoppingBag size={48} className="text-slate-800 mb-4" />
                    <h3 className="text-3xl font-black text-slate-900 uppercase leading-none mb-2">Summer<br/>Collection</h3>
                    <div className="w-12 h-1 bg-red-500 mb-6"></div>
                    <div className="bg-slate-900 text-white text-xs font-bold px-6 py-2 uppercase tracking-widest">Shop Now</div>
                  </motion.div>
                </AnimatePresence>

                {activeMonth > 1 && (
                  <motion.div
                    initial={{ scale: 0, rotate: -12 }}
                    animate={{ scale: 1, rotate: -12 }}
                    className="absolute inset-0 flex items-center justify-center z-10"
                  >
                    <div className="bg-red-500 text-white font-black text-xl px-6 py-3 rounded-lg shadow-2xl border-4 border-white">
                      {activeMonth === 2 ? '⚠️ AD FATIGUE' : '💀 BURNOUT'}
                    </div>
                  </motion.div>
                )}

                <div className="absolute bottom-3 left-3 bg-[#E0E5EC]/90 backdrop-blur-sm px-3 py-1 rounded-lg z-20">
                  <p className="text-xs font-bold text-slate-800">THE WALL</p>
                  <p className="text-[10px] text-slate-600">Can't scale past $50K</p>
                </div>
              </div>

              {/* Engagement + Metrics */}
              <div className="px-3 py-2.5">
                <EngagementBar 
                  heartColor={activeMonth === 3 ? "text-slate-400" : "text-red-500"}
                  heartFill={activeMonth !== 3}
                  bookmarkColor="text-slate-800"
                />

                <div className="text-sm font-semibold text-slate-900 mb-2">
                  {likeCount.trad.toLocaleString()} likes
                </div>

                <MetricsCard 
                  month={activeMonth}
                  spend={stats[activeMonth].spend}
                  revenue={currentTrad.revenue}
                  roas={currentTrad.roas}
                  roasColor={activeMonth === 3 ? "text-red-600" : "text-slate-800"}
                  status={currentTrad.status}
                  statusBg={currentTrad.statusBg}
                  statusText={currentTrad.statusText}
                  shadowPressed={shadowPressed}
                />

                <div className="text-xs text-slate-600">
                  <span className="font-semibold text-slate-900">traditional_scaling</span> Single creative concept exhausted. ROAS collapsing.
                </div>
              </div>
            </motion.div>

            {/* RIGHT GRAPHIC: Arlox */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`rounded-2xl bg-[#E0E5EC] overflow-hidden ${shadowCard} relative`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 via-transparent to-blue-400/5 rounded-2xl pointer-events-none"></div>

              <div className="relative z-10">
                <InstagramHeader 
                  username="arlox.scaling"
                  isVerified={true}
                  subtitle="Meta 10x System • Verified"
                  avatarBg="p-[2px] bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888]"
                  avatarContent={
                    <div className="w-full h-full rounded-full bg-[#E0E5EC] flex items-center justify-center">
                      <Zap className="text-emerald-600" size={16} fill="currentColor" />
                    </div>
                  }
                />

                {/* Text-Based Creative (Arlox Dynamic) */}
                <div className="relative bg-white aspect-square flex flex-col items-center justify-center text-center overflow-hidden">
                  <AnimatePresence mode="wait">
                    {/* Creative 1 */}
                    {activeMonth === 1 && (
                      <motion.div
                        key="cr1"
                        initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-8"
                      >
                        <div className="text-xs font-bold text-blue-600 bg-white px-2 py-1 mb-4 uppercase tracking-widest rounded shadow-sm">New Drop</div>
                        <h2 className="text-4xl font-black text-slate-900 leading-none mb-4">Define<br/>Your Era.</h2>
                        <div className="flex gap-2">
                           <div className="w-4 h-4 rounded-full bg-slate-900 border border-white/50"></div>
                           <div className="w-4 h-4 rounded-full bg-blue-600 border border-white/50"></div>
                           <div className="w-4 h-4 rounded-full bg-indigo-600 border border-white/50"></div>
                        </div>
                      </motion.div>
                    )}
                    {/* Creative 2 */}
                    {activeMonth === 2 && (
                      <motion.div
                        key="cr2"
                        initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-100 flex flex-col items-center justify-center p-8"
                      >
                        <div className="flex text-yellow-500 mb-4 gap-1">
                          <Star fill="currentColor" size={20}/><Star fill="currentColor" size={20}/><Star fill="currentColor" size={20}/><Star fill="currentColor" size={20}/><Star fill="currentColor" size={20}/>
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 italic mb-4">"The fit is<br/>absolute perfection."</h2>
                        <div className="text-sm font-bold text-emerald-800 bg-white/60 px-3 py-1 rounded-full">– Sarah J., Verified Buyer</div>
                      </motion.div>
                    )}
                    {/* Creative 3 */}
                    {activeMonth === 3 && (
                      <motion.div
                        key="cr3"
                        initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-100 flex flex-col items-center justify-center p-8"
                      >
                        <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded mb-4 animate-pulse">LOW STOCK WARNING</div>
                        <h2 className="text-4xl font-black text-slate-900 leading-none mb-3">Restock<br/>Live Now</h2>
                        <div className="flex items-center gap-2 text-purple-800 font-bold text-sm bg-white/60 px-3 py-1 rounded-full">
                          <Clock size={16}/> Ends Midnight
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent pointer-events-none"></div>

                  <motion.div 
                    key={`badge-${activeMonth}`} 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    className="absolute top-2 right-2 z-20"
                  >
                    <div className="bg-emerald-500 text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1">
                      <Sparkles size={10} fill="currentColor" />
                      NEW CREATIVE
                    </div>
                  </motion.div>

                  <div className="absolute bottom-3 left-3 bg-[#E0E5EC]/90 backdrop-blur-sm px-3 py-1 rounded-lg">
                    <p className="text-xs font-bold text-emerald-700">THE BREAKTHROUGH</p>
                    <p className="text-[10px] text-slate-600">Scale 5x maintaining performance</p>
                  </div>
                </div>

                {/* Engagement + Metrics */}
                <div className="px-3 py-2.5">
                  <EngagementBar 
                    likeCount={likeCount.arlox}
                    heartColor="text-emerald-500"
                    heartFill={true}
                    bookmarkColor="text-emerald-600"
                  />

                  <div className="text-sm font-semibold text-slate-900 mb-2">
                    {likeCount.arlox.toLocaleString()} likes
                  </div>

                  <MetricsCard 
                    month={activeMonth}
                    spend={stats[activeMonth].spend}
                    revenue={currentArlox.revenue}
                    roas={currentArlox.roas}
                    roasColor="text-emerald-600"
                    status={currentArlox.status}
                    statusBg={currentArlox.statusBg}
                    statusText={currentArlox.statusText}
                    shadowPressed={shadowPressed}
                  />

                  <div className="text-xs text-slate-600">
                    <span className="font-semibold text-slate-900">arlox.scaling</span> Multiple creative angles refreshing. Sustained high ROAS 🚀
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* CENTER COMPARISON */}
         <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  className="
    p-8 rounded-3xl text-center mb-8
    bg-[#E0E5EC]
    shadow-[inset_8px_8px_16px_rgba(163,177,198,0.7),inset_-8px_-8px_16px_rgba(255,255,255,0.85)]
  "
>
  <div className="flex flex-col md:flex-row items-center justify-center gap-6">
    
    {/* Metric */}
    <div>
      <div className="text-6xl md:text-7xl font-black mb-2
        text-transparent bg-clip-text
        bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600
      ">
        2.4x
      </div>
      <div className="text-xl font-black uppercase tracking-wider text-slate-700">
        Better Results
      </div>
    </div>

    {/* Divider Arrow */}
    <ArrowRight size={40} className="hidden md:block text-slate-400" />

    {/* Copy */}
    <div className="text-left max-w-md">
      <p className="text-lg font-bold text-slate-700 mb-1">
        Same 90 days. Same Meta platform.
      </p>
      <p className="text-2xl font-black text-slate-800">
        Dramatically different outcomes.
      </p>
    </div>
  </div>
</motion.div>



        
        </div>

        {/* === BOTTOM PROMISE === */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className={`inline-block p-8 rounded-3xl bg-slate-900 text-white mb-8 ${shadowCard}`}>
            <p className="text-2xl md:text-3xl font-black mb-4">
              This is what engineering Meta's algorithm looks like.
            </p>
            <p className="text-xl text-slate-300">
              Not hoping. Not guessing. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-black">Engineering.</span>
            </p>
          </div>

          <p className="text-3xl md:text-4xl font-black text-slate-800 mb-3">
            This is Meta 10x Scaling.
          </p>
          <p className="text-xl text-slate-700 mb-8">
            This is how fashion brands break the ROAS ceiling on Facebook and Instagram in 2025.
          </p>

          <WhatsappCTA 
                    whatsappNumber="+919910220335" 
                    calendlyUrl="https://calendly.com/arlox-/strategy-call-1"
                  >
                <GlassButton 
               label="Apply for Free Growth Audit" 
               icon={Instagram} 
               className="h-4 sm:h-5 transition-all duration-200"
               buttonClassName="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base hover:scale-105 active:scale-100"
               onClick={() => console.log('Focus mode toggled')}
             />
                </WhatsappCTA>
        </motion.div>

      </div>
    </section>
  );
};

export default RefactoredMetaHero;
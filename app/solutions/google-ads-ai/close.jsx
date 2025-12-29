"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, TrendingDown, TrendingUp, AlertTriangle, 
  CheckCircle2, Clock, ShieldCheck, FileText, 
  Video, Layout, Code, Lock, X
} from 'lucide-react';
import GlassButton from '@/components/but';
import WhatsappCTA from '@/components/WhatsAppCTA';

const ArloxCloseSection = () => {
  
  // Neumorphic & Shadow Styles
  const shadowExtruded = "shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff]";
  const shadowPressed = "shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]";
  const shadowFloating = "shadow-[12px_12px_24px_#d1d9e6,-12px_-12px_24px_#ffffff]";

  return (
    <section className="w-full bg-[#e8ebf0] py-20 md:py-32 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <motion.div
  initial={{ opacity: 0, y: -8 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, ease: "easeOut" }}
  viewport={{ once: true }}
  className="
    inline-flex items-center gap-2
    px-4 py-2
    rounded-full
    bg-[#ecf0f3]
    shadow-[inset_3px_3px_6px_#d1d9e6,inset_-3px_-3px_6px_#ffffff]
    text-slate-600
    font-semibold
    text-xs sm:text-sm
    tracking-wide
    mb-6
  "
>
  <Clock size={14} className="text-slate-500" />
  <span>The Final Decision</span>
</motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-slate-800 mb-6 leading-tight">
            Two Futures. <span className="text-blue-600">Choose One.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium">
            Twelve months from today, you’ll be in one of two places.
          </p>
        </div>

        {/* --- THE TWO FUTURES (Full Narrative) --- */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          
          {/* Future A: Stuck */}
          <div className={`p-8 md:p-10 rounded-3xl bg-[#eef1f5] border border-slate-300 ${shadowPressed}`}>
            <div className="flex items-center gap-3 mb-6 text-red-500 border-b border-slate-300 pb-4">
              <TrendingDown size={32} />
              <h3 className="text-2xl font-black uppercase tracking-widest">Future A: Stuck in the 40%</h3>
            </div>
            
            <div className="prose prose-slate prose-sm max-w-none space-y-4 text-slate-600 leading-relaxed">
              <p>
                You’re at <strong className="text-slate-800">$240K/month revenue</strong>. You’ve “optimized” your Shopping campaigns to death. You hired a freelancer to help with Search ads. You tried running some YouTube ads (they flopped—you didn’t know about Shorts format).
              </p>
              <p>
                Your CAC has crept up from <strong className="text-red-600">$68 → $94</strong>. Your ROAS has slid from 3.6x → 2.9x. Every time you try to scale past $60K Google spend, it crashes. You’re trapped in what you now realize is <strong className="text-slate-800">“The Efficiency Illusion”</strong>—profitable at small scale, bankrupt at big scale.
              </p>
              <p>
                You read an article about “Google Lens” and “AI Overviews.” You realize you’ve been invisible to 60% of Google traffic for 18 months. Your competitors (the ones now at $1.2M+/month) were running Power Pack while you were tweaking keyword bids.
              </p>
              <p>
                You’re frustrated. Your team is burned out (25 hrs/week firefighting). You’ve spent $960K on Google Ads this year for $2.88M revenue. You netted $480K profit—but it could’ve been $1.8M+ if you’d built a system instead of renting competence.
              </p>
              
              <div className="bg-red-50 p-5 rounded-xl border-l-4 border-red-500 mt-6">
                <div className="text-xs font-bold text-red-500 uppercase mb-2">Your 12-Month Outcome:</div>
                <div className="font-bold text-slate-800 text-lg">
                  $2.88M revenue, $480K profit, 0 systems, invisible to 60% of market, team exhausted.
                </div>
              </div>
            </div>
          </div>

          {/* Future B: Dominating */}
          <div className={`p-8 md:p-10 rounded-3xl bg-white border-2 border-emerald-400 relative overflow-hidden ${shadowFloating}`}>
             {/* Background Glow */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl -mr-20 -mt-20"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6 text-emerald-600 border-b border-emerald-100 pb-4">
                <TrendingUp size={32} />
                <h3 className="text-2xl font-black uppercase tracking-widest">Future B: Dominating the 100%</h3>
              </div>
              
              <div className="prose prose-slate prose-sm max-w-none space-y-4 text-slate-600 leading-relaxed">
                <p>
                  You’re at <strong className="text-slate-900">$885K/month revenue</strong>. Your Power Pack is humming: PMax capturing all traffic at 5.6x ROAS, Demand Gen publishing 95 Shorts/month (8 viral), and your Feed citing in AI Overviews 62% of the time.
                </p>
                <p>
                  You’re spending $180K/month on Google (3x start), but <strong className="text-emerald-600">CAC dropped $68 → $54</strong>. Your MER is 5.4x. You own 7 simultaneous traffic sources. When one dips, the other six sustain you.
                </p>
                <p>
                  Last quarter, a Demand Gen Short went viral (3.2M views). It drove 220K branded searches. PMax captured them at $0.48 CPC. That week: <strong className="text-slate-900">11.8x ROAS, $420K revenue, $280K profit.</strong>
                </p>
                <p>
                  Your media buyer works 6 hrs/week (scripts automate the rest). She’s expanding to UK/Australia. Your creative team produces Shorts using Arlox SOPs—you own the system. You sleep well. If Google Shopping disappeared, you’d still have YouTube/Lens. You’re the category leader.
                </p>
                
                <div className="bg-emerald-50 p-5 rounded-xl border-l-4 border-emerald-500 mt-6">
                  <div className="text-xs font-bold text-emerald-600 uppercase mb-2">Your 12-Month Outcome:</div>
                  <div className="font-bold text-slate-800 text-lg">
                    $7.4M revenue, $2.1M profit, owned Power Pack system (worth $300K IP), 30% market share.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xl font-bold text-slate-800">
            The Difference Between Future A and Future B: <br/>
            <span className="text-blue-600 font-black text-2xl">One decision. Made today.</span>
          </p>
        </div>

        {/* --- WHAT HAPPENS NEXT (DETAILED STEPS) --- */}
        <div className="mb-24 relative">
          <h3 className="text-3xl font-black text-slate-800 mb-12 text-center">Here’s What Happens Next:</h3>
          
          {/* Connecting Line (Desktop) */}
          <div className="absolute left-[32px] md:left-1/2 top-24 bottom-0 w-1 bg-slate-300 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            
            {/* Step 1 */}
            <div className="relative flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/2 md:text-right order-2 md:order-1">
                <div className={`inline-block p-6 rounded-2xl bg-white ${shadowExtruded} text-left`}>
                  <h4 className="text-xl font-black text-slate-800 mb-2">Free Google Growth Audit</h4>
                  <p className="text-sm font-bold text-blue-600 uppercase mb-3">45 Minutes • No Obligation</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex gap-2"><CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0"/>Audit account (last 90 days) + Merchant Center feed.</li>
                    <li className="flex gap-2"><CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0"/>Identify 3-5 missed opportunities ($80-200K value).</li>
                    <li className="flex gap-2"><CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0"/><strong>Deliverables:</strong> Feed Roadmap, Demand Gen Frameworks, 90-Day Plan.</li>
                  </ul>
                </div>
              </div>
              <div className="absolute left-[22px] md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-black z-10 shadow-lg border-4 border-[#e8ebf0]">
                1
              </div>
              <div className="md:w-1/2 order-3 pl-12 md:pl-0"></div>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/2 order-2"></div>
              <div className="absolute left-[22px] md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white text-slate-400 flex items-center justify-center font-black z-10 shadow-lg border-4 border-[#e8ebf0]">
                2
              </div>
              <div className="md:w-1/2 order-3 pl-12 md:pl-0">
                <div className={`inline-block p-6 rounded-2xl bg-[#eef1f5] ${shadowPressed} text-left w-full`}>
                   <h4 className="text-xl font-black text-slate-800 mb-2">Custom Power Pack Blueprint</h4>
                   <p className="text-sm font-bold text-slate-500 uppercase mb-3">If You’re a Fit</p>
                   <p className="text-sm text-slate-600 mb-3 font-medium">We build a 35-page Strategic Plan including:</p>
                   <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex gap-2"><FileText size={16} className="text-slate-400 mt-0.5 shrink-0"/>Account Performance Audit (Profit by SKU/Channel)</li>
                    <li className="flex gap-2"><FileText size={16} className="text-slate-400 mt-0.5 shrink-0"/>Feed Engineering Roadmap (Specs, templates, video)</li>
                    <li className="flex gap-2"><FileText size={16} className="text-slate-400 mt-0.5 shrink-0"/>Demand Gen Creative Plan (15-20 Shorts/week schedule)</li>
                    <li className="flex gap-2"><FileText size={16} className="text-slate-400 mt-0.5 shrink-0"/>12-Month Financial Projection (Rev, MER, Profit)</li>
                  </ul>
                </div>
              </div>
            </div>

             {/* Step 3 */}
             <div className="relative flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/2 md:text-right order-2 md:order-1">
                <div className={`inline-block p-6 rounded-2xl bg-white ${shadowExtruded} text-left`}>
                  <h4 className="text-xl font-black text-slate-800 mb-2">We Start in 7 Days</h4>
                  <p className="text-sm font-bold text-emerald-600 uppercase mb-3">If You Say Yes</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex gap-2"><Clock size={16} className="text-emerald-500 mt-0.5 shrink-0"/><strong>Wk 1:</strong> Diagnostic & Data Setup</li>
                    <li className="flex gap-2"><Clock size={16} className="text-emerald-500 mt-0.5 shrink-0"/><strong>Wk 2-3:</strong> Feed Overhaul (10-12 images/prod)</li>
                    <li className="flex gap-2"><Clock size={16} className="text-emerald-500 mt-0.5 shrink-0"/><strong>Wk 4-6:</strong> Demand Gen Production (60 Shorts tested)</li>
                    <li className="flex gap-2"><Clock size={16} className="text-emerald-500 mt-0.5 shrink-0"/><strong>Wk 7+:</strong> Deployment & Scaling (20-30% scale/2 wks)</li>
                  </ul>
                </div>
              </div>
              <div className="absolute left-[22px] md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black z-10 shadow-lg border-4 border-[#e8ebf0]">
                3
              </div>
              <div className="md:w-1/2 order-3 pl-12 md:pl-0"></div>
            </div>
          </div>
        </div>

        {/* --- INVESTMENT & VALUE --- */}
        <div className="grid lg:grid-cols-12 gap-8 mb-24">
          
          {/* Investment Column (4 cols) */}
          <div className="lg:col-span-5">
             <div className={`h-full p-8 rounded-3xl bg-[#eef1f5] border border-slate-300 ${shadowPressed}`}>
                <h3 className="text-2xl font-black text-slate-800 mb-4">The Investment</h3>
                <p className="text-sm text-slate-600 mb-4">
                  We don’t publish static pricing because every Power Pack is custom based on spend, market (US/India), and creative capacity.
                </p>
                <div className="bg-white p-4 rounded-xl border border-slate-200 mb-6">
                  <div className="text-xs font-bold text-slate-400 uppercase mb-1">Typical Range</div>
                  <div className="text-2xl font-black text-slate-800">$15K - $42K<span className="text-sm text-slate-500 font-medium"> /month</span></div>
                  <div className="text-xs text-slate-500 mt-1">For brands scaling $100K → $800K/mo</div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-slate-800 text-sm">ROI (Based on 127 Clients):</h4>
                  <div className="flex items-center gap-3 text-emerald-600 font-black text-xl">
                    <TrendingUp size={24} />
                    4.8x - 12.2x in Year 1
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    You invest $180-504K, gain $860K-$6.15M incremental revenue vs. baseline.
                  </p>
                </div>
             </div>
          </div>

          {/* Value Stack Column (7 cols) - Dark Mode */}
          <div className="lg:col-span-7">
            <div className="relative h-full rounded-3xl bg-slate-900 text-white p-8 overflow-hidden shadow-2xl">
              {/* Abstract Background */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[80px] -mr-32 -mt-32"></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <h3 className="text-3xl font-black mb-2">Immediate Value <span className="text-blue-400">($11,900)</span></h3>
                  <p className="text-slate-400 text-sm">
                    Yours <span className="text-white font-bold">FREE</span> when you book the Growth Audit—even if you never hire us.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <Layout className="text-blue-400" size={20} />
                      <span className="text-lg font-black text-white">$1,800</span>
                    </div>
                    <div className="font-bold text-sm text-slate-200">Google Feed Optimization Checklist</div>
                    <div className="text-xs text-slate-500 mt-1">37-point audit tool for DIY upgrades.</div>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <Video className="text-blue-400" size={20} />
                      <span className="text-lg font-black text-white">$3,200</span>
                    </div>
                    <div className="font-bold text-sm text-slate-200">Demand Gen Creative Playbook</div>
                    <div className="text-xs text-slate-500 mt-1">15 Shorts formats, scripts & templates.</div>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <FileText className="text-blue-400" size={20} />
                      <span className="text-lg font-black text-white">$2,400</span>
                    </div>
                    <div className="font-bold text-sm text-slate-200">Power Pack Structure Template</div>
                    <div className="text-xs text-slate-500 mt-1">Exact PMax + Brand Defense architecture.</div>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <Code className="text-blue-400" size={20} />
                      <span className="text-lg font-black text-white">$4,500</span>
                    </div>
                    <div className="font-bold text-sm text-slate-200">Automation Scripts Library</div>
                    <div className="text-xs text-slate-500 mt-1">Inventory, RTO, Margin bidding scripts.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- GUARANTEE & LIMITED AVAILABILITY --- */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className={`p-8 rounded-3xl bg-white border-l-4 border-emerald-500 ${shadowExtruded}`}>
            <div className="flex items-center gap-3 mb-4 text-emerald-600">
              <ShieldCheck size={28} />
              <h4 className="text-xl font-black uppercase">90-Day Guarantee</h4>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-4 font-medium">
              If after 90 days you don't see:
            </p>
            <ul className="space-y-2 text-sm text-slate-600 mb-4">
              <li className="flex gap-2"><CheckCircle2 size={14} className="text-emerald-500 mt-1"/>+35% MER improvement</li>
              <li className="flex gap-2"><CheckCircle2 size={14} className="text-emerald-500 mt-1"/>Feed optimized to 8+ images</li>
              <li className="flex gap-2"><CheckCircle2 size={14} className="text-emerald-500 mt-1"/>60+ Shorts produced</li>
            </ul>
            <p className="font-bold text-slate-800 border-t border-slate-100 pt-3">
              We refund 100% of your Arlox fees.
            </p>
          </div>

          <div className={`p-8 rounded-3xl bg-white border-l-4 border-amber-500 ${shadowExtruded}`}>
            <div className="flex items-center gap-3 mb-4 text-amber-500">
              <Lock size={28} />
              <h4 className="text-xl font-black uppercase">Limited Availability</h4>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              We only take 5 new Power Pack clients per quarter to maintain quality (our team can't build more simultaneous systems).
            </p>
            <div className="inline-block px-4 py-2 bg-amber-50 text-amber-800 rounded-lg font-bold text-sm border border-amber-200">
              5 Slots Remaining for Q1 2026
            </div>
          </div>
        </div>

        {/* --- FINAL CTA --- */}
        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-8">
            You didn’t start a brand to be stuck at $200K/mo.
            <br className="hidden md:block"/>
            <span className="text-blue-600">Apply for the audit. Build the system. Dominate.</span>
          </h3>
          <WhatsappCTA 
                    whatsappNumber="+919910220335" 
                    calendlyUrl="https://calendly.com/arlox-/strategy-call-1"
                  >
                <GlassButton 
               label="Apply for Free Growth Audit" 
               icon={ArrowRight} 
               className="h-4 sm:h-5 transition-all duration-200"
               buttonClassName="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base hover:scale-105 active:scale-100"
               onClick={() => console.log('Focus mode toggled')}
             />
                </WhatsappCTA>
          
            <div className="absolute -top-3 -right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full animate-pulse shadow-md">
              Next 8 Applicants Only
            </div>
          
          
          <p className="mt-6 text-sm text-slate-500 font-medium">
            Get the $11,900 resource package instantly upon booking.
          </p>

         
        </div>

      </div>
    </section>
  );
};

export default ArloxCloseSection;
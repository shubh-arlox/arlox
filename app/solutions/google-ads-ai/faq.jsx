"use client"
import React from 'react';

import { ShieldAlert, CheckCircle2, XCircle, TrendingUp, Clock, AlertTriangle } from 'lucide-react';
import SimpleFAQSection from '@/components/FAQ';

const ArloxObjections = () => {
  
  const objectionsData = [
    {
      q: "This sounds expensive. We can’t afford Arlox.",
      a: (
        <div className="space-y-4">
          <p className="font-bold text-slate-800">Reframe: You can’t afford NOT to fix your Google strategy.</p>
          <div className="bg-slate-200/50 p-4 rounded-xl text-sm">
            <p className="mb-2"><span className="font-bold">The Math:</span></p>
            <ul className="space-y-1 list-disc pl-4 text-slate-700">
              <li>Current Revenue (3.2x MER): <span className="font-mono">$3.84M</span></li>
              <li>Power Pack Revenue (5.4x MER): <span className="font-mono text-emerald-600 font-bold">$6.48M</span></li>
              <li>Revenue Gap: <span className="font-bold">$2.64M annually</span> left on the table.</li>
              <li>Arlox Investment: ~$216K</li>
            </ul>
            <div className="mt-3 pt-3 border-t border-slate-300 font-bold text-emerald-700">
              ROI: 12.2x in Year 1 (Every $1 pays back $12.20)
            </div>
          </div>
          <p>The real cost is staying stuck at 3.2x MER while competitors capture your market.</p>
        </div>
      )
    },
    {
      q: "We’re in a super niche category. Will Power Pack work for us?",
      a: (
        <div className="space-y-4">
          <p>The framework is universal. The angles are custom. We serve categories like Plus-Size, Modest Wear, and Sustainable Fashion.</p>
          <div className="space-y-3">
            <div className="pl-3 border-l-2 border-blue-400">
              <span className="font-bold block text-slate-800">Plus-Size Activewear:</span>
              <span className="text-sm">Demand Gen angle: "Leggings that don't roll down." Result: 6.2x MER.</span>
            </div>
            <div className="pl-3 border-l-2 border-emerald-400">
              <span className="font-bold block text-slate-800">Sustainable Denim:</span>
              <span className="text-sm">AI Overviews favored "Carbon Neutral" keywords. Result: 7.1x MER.</span>
            </div>
          </div>
          <p className="text-sm italic">If you have 55%+ margins and an addressable market of 500K+ people, the niche determines the creative, not whether the system works.</p>
        </div>
      )
    },
    {
      q: "We already have an agency managing Google. Why switch?",
      a: (
        <div className="space-y-4">
          <p>Ask yourself these 3 questions. If the answer is "No", they are maintaining you, not growing you.</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <ShieldAlert size={16} className="text-red-500 mt-0.5 shrink-0" />
              <span>Is your MER consistently above <strong>4.8x</strong>?</span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldAlert size={16} className="text-red-500 mt-0.5 shrink-0" />
              <span>Are they producing <strong>15-20 YouTube Shorts/week</strong>? (If not, you're missing 30% of traffic).</span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldAlert size={16} className="text-red-500 mt-0.5 shrink-0" />
              <span>Do you <strong>OWN the system</strong> (scripts/SOPs) if they leave?</span>
            </li>
          </ul>
          <div className="bg-white/60 p-3 rounded-lg font-bold text-slate-800 text-sm border border-slate-200">
            Offer: Hire us as "Consultants" alongside them for 90 days. If we don't improve MER by 35%, fire us.
          </div>
        </div>
      )
    },
    {
      q: "We don’t have time. This sounds like a lot of work.",
      a: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="p-3 bg-slate-200/50 rounded-lg">
              <div className="font-bold text-slate-700 mb-1 flex items-center gap-1"><Clock size={14}/> Months 1-2</div>
              <p>6-8 hrs/week. Foundation setup, interviews, access.</p>
            </div>
            <div className="p-3 bg-emerald-100/50 rounded-lg">
              <div className="font-bold text-emerald-800 mb-1 flex items-center gap-1"><Clock size={14}/> Months 7+</div>
              <p>2-3 hrs/week. System runs on autopilot (Scripts + SOPs).</p>
            </div>
          </div>
          <p className="text-sm">
            <strong>Reality Check:</strong> You are likely spending 15-20 hrs/week right now putting out fires ("Why did CAC spike?"). Arlox eliminates fires, giving you time back.
          </p>
        </div>
      )
    },
    {
      q: "What if Google’s algorithm changes? Or my product category gets saturated?",
      a: (
        <div className="space-y-4">
          <p><span className="font-bold">Algorithm Protection:</span> We rely on 7 traffic sources (Shopping, Search, YouTube, Lens, Discover, etc). If one update hits Search, the other 6 sustain you.</p>
          <p><span className="font-bold">Saturation:</span> Currently, only 8% of brands run the full Power Pack. 92% are stuck on Shopping.</p>
          <div className="text-sm bg-blue-50 p-3 rounded-lg text-blue-800 font-medium">
             You have a 3-5 year head start. By the time they catch up, you have a library of 1,500+ Shorts and unbeatable Quality Scores.
          </div>
        </div>
      )
    },
    {
      q: "How do I know you’re not just over-promising?",
      a: (
        <div className="space-y-4">
          <p className="font-bold">The 30-Day Proof Protocol:</p>
          <ul className="space-y-2 text-sm list-disc pl-4">
            <li><strong>Week 2:</strong> Feed optimization (image count goes 2 → 12).</li>
            <li><strong>Week 3:</strong> First 20 Shorts produced & launched.</li>
            <li><strong>Week 4:</strong> MER trending +15-25% from baseline.</li>
          </ul>
          <p className="text-sm">If you don't see these results in 30 days, <span className="font-bold underline decoration-red-400 decoration-2">you can fire us, no questions asked.</span></p>
        </div>
      )
    },
    {
      q: "We’re only at $120K/month revenue. Are we too small?",
      a: (
        <div className="space-y-4">
          <div className="grid gap-3">
             <div className="flex items-start gap-3 p-2 bg-red-50 rounded-lg text-sm">
                <XCircle className="text-red-500 shrink-0 mt-0.5" size={16} />
                <div>
                  <span className="font-bold text-red-700 block">You DO NOT Qualify if:</span>
                  Margins &lt; 55% or Revenue &lt; $80K/mo.
                </div>
             </div>
             <div className="flex items-start gap-3 p-2 bg-emerald-50 rounded-lg text-sm">
                <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                <div>
                  <span className="font-bold text-emerald-700 block">You DO Qualify if:</span>
                  $80K-$500K Revenue, 60%+ Margins, ready to scale.
                </div>
             </div>
          </div>
          <p className="text-sm font-medium text-slate-700">
            At $120K/mo, you are in the sweet spot. Expected trajectory: $120K → $350K (Month 6) → $680K (Month 12).
          </p>
        </div>
      )
    }
  ];

  return (
    <SimpleFAQSection 
      faqs={objectionsData}
      title="But What About..."
      subtitle="The hard questions you should be asking us right now."
      badgeText="Objections & Reality"
      badgeIcon={AlertTriangle}
      // You can add paths to your own avatars here
      avatars={[
        "/avatar2.jpg",
        "/avatar3.jpg",
        "/avatar4.jpg",
        "/avatar5.jpg"
      ]}
    />
  );
};

export default ArloxObjections;
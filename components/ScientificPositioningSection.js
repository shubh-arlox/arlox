"use client";

import React, { useState } from "react";
import {
  ChevronRight,
  Microscope,
  Target,
  AlertTriangle,
  XCircle,
  CheckCircle2,
  ArrowRight,
  ArrowDown,
  Zap,
  Feather,
  Lightbulb,
  FileText,
  BookOpen,
  Sparkles,
  HelpCircle,
  Menu,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* NEUMORPHIC PRIMITIVES                                                      */
/* -------------------------------------------------------------------------- */

// Card
const NeumorphicCard = ({
  children,
  className = "",
  onClick,
  inset = false,
}) => {
  return (
    <div
      onClick={onClick}
      className={`
      relative rounded-[1.5rem] p-8 transition-all duration-300
      bg-[#f5f5f5] text-slate-600 border border-white/40
      ${
        inset
          ? "shadow-[inset_6px_6px_12px_#d1d9e6,inset_-6px_-6px_12px_#ffffff]"
          : "shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] hover:-translate-y-1"
      }
      ${className}
    `}
    >
      {children}
    </div>
  );
};

// Button (relies on your global .button-neumorphic for shape/shadow)
const NeumorphicButton = ({
  children,
  variant = "primary",
  className = "",
  onClick,
}) => {
  const baseClass =
    "button-neumorphic px-8 py-4 font-bold tracking-wider uppercase text-xs flex items-center justify-center gap-3 outline-none";

  const variants = {
    primary: "text-[#667eea] hover:text-[#5a67d8]",
    secondary: "text-slate-500 hover:text-slate-700",
    action: "!bg-[#667eea] !text-white hover:!bg-[#5a67d8]",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClass} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

const SectionTitle = ({ subtitle, title, centered = true }) => (
  <div className={`mb-16 ${centered ? "text-center" : "text-left"}`}>
    <span className="text-[#667eea] font-bold text-xs uppercase tracking-[0.2em] mb-4 flex items-center justify-center gap-2">
      <span className="w-2 h-2 rounded-full bg-[#667eea]" />
      {subtitle}
      <span className="w-2 h-2 rounded-full bg-[#667eea]" />
    </span>
    <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-800">
      {title}
    </h2>
  </div>
);

/* -------------------------------------------------------------------------- */
/* HERO                                                                       */
/* -------------------------------------------------------------------------- */

const HeroSection = () => (
  <section className="pt-36 pb-20 px-6 relative overflow-hidden">
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-7xl font-extrabold text-slate-800 mb-8 leading-tight tracking-tight">
          Most Fashion Brands Waste <span className="text-red-500">60%</span> of
          Ad Budget on <br />
          <span className="relative inline-block mt-2 text-[#667eea]">
            Generic Positioning.
          </span>
        </h1>
        <p className="text-xl text-slate-500 max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
          We Engineer Your Unique Market Position That Multiplies ROAS by{" "}
          <span className="text-[#667eea] font-bold">3-7x</span>—Guaranteed.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <NeumorphicButton variant="primary">
            Book Positioning Audit <ArrowRight size={16} />
          </NeumorphicButton>
          <NeumorphicButton variant="secondary">
            The Science <ArrowDown size={16} />
          </NeumorphicButton>
        </div>
      </div>

      {/* Hero Visual: Chaotic vs Engineered */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* The Chaos */}
        <div className="relative group">
          <NeumorphicCard className="h-full border-t-4 border-red-400 !bg-[#f5f5f5]/50 backdrop-blur-sm">
            <h3 className="text-red-500 font-bold mb-8 flex items-center gap-3 tracking-widest uppercase text-sm">
              <AlertTriangle size={16} className="text-red-500" /> The Chaotic
              Reality
            </h3>

            {/* Generic Terms Cloud */}
            <div className="h-64 relative font-mono text-gray-400">
              <span className="absolute top-4 left-4 text-xs bg-[#f5f5f5] shadow-[5px_5px_10px_#d1d9e6,-5px_-5px_10px_#ffffff] px-3 py-2 rounded -rotate-12">
                "Premium Quality"
              </span>
              <span className="absolute top-12 right-12 text-xs bg-[#f5f5f5] shadow-[5px_5px_10px_#d1d9e6,-5px_-5px_10px_#ffffff] px-3 py-2 rounded rotate-6">
                "Fast Shipping"
              </span>
              <span className="absolute bottom-8 left-12 text-xs bg-[#f5f5f5] shadow-[5px_5px_10px_#d1d9e6,-5px_-5px_10px_#ffffff] px-3 py-2 rounded rotate-15">
                "Best Service"
              </span>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="text-red-500 font-bold text-lg block">
                  ROAS: 1.2x
                </span>
                <span className="text-[10px] text-gray-400">
                  Struggling to Break Even
                </span>
              </div>

              <span className="absolute bottom-12 right-8 text-xs bg-[#f5f5f5] shadow-[5px_5px_10px_#d1d9e6,-5px_-5px_10px_#ffffff] px-3 py-2 rounded -rotate-5">
                "Sustainable"
              </span>
            </div>
            <p className="text-center text-gray-400 text-xs uppercase tracking-widest mt-4">
              Status: Generic Positioning Graveyard
            </p>
          </NeumorphicCard>
        </div>

        {/* The Precision */}
        <div className="relative group">
          <NeumorphicCard className="h-full border-t-4 border-[#667eea] !bg-[#f5f5f5]/80">
            <h3 className="text-[#667eea] font-bold mb-8 flex items-center gap-3 tracking-widest uppercase text-sm">
              <Target size={16} className="text-[#667eea]" /> Scientific
              Precision
            </h3>

            <div className="h-64 flex flex-col justify-center items-center relative">
              <div className="w-full max-w-xs bg-[#f5f5f5] p-4 rounded-xl shadow-[inset_5px_5px_10px_#d1d9e6,inset_-5px_-5px_10px_#ffffff] mb-6 text-center">
                <p className="text-[10px] text-[#667eea] uppercase tracking-widest mb-1">
                  Unique Angle
                </p>
                <p className="font-bold text-slate-700 text-sm">
                  "The Only Jeans Guaranteed Comfortable by Month 2"
                </p>
              </div>

              {/* Graph */}
              <div className="w-full max-w-xs h-24 flex items-end gap-2 px-4 border-b border-gray-300">
                <div className="w-1/5 bg-gray-300 h-[20%] rounded-t-sm" />
                <div className="w-1/5 bg-gray-300 h-[35%] rounded-t-sm" />
                <div className="w-1/5 bg-gray-300 h-[50%] rounded-t-sm" />
                <div className="w-1/5 bg-gray-400 h-[75%] rounded-t-sm" />
                <div className="w-1/5 bg-[#667eea] h-[95%] rounded-t-sm relative shadow-lg">
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-[#667eea]">
                    7.2x
                  </span>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-400 text-xs uppercase tracking-widest mt-4">
              Status: Growth Inevitable
            </p>
          </NeumorphicCard>
        </div>
      </div>
    </div>
  </section>
);

/* -------------------------------------------------------------------------- */
/* PROBLEM                                                                    */
/* -------------------------------------------------------------------------- */

const ProblemSection = () => (
  <section id="problem" className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <SectionTitle
        subtitle="Current Painful Reality"
        title="Why Your Ads Won't Scale Past $50K/Month"
      />

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h3 className="text-2xl font-bold mb-6 text-slate-800">
            The Generic Positioning Graveyard
          </h3>
          <p className="text-slate-600 mb-8 leading-relaxed font-medium">
            You’ve tried everything. New creatives. Influencer partnerships. But
            you’re still stuck because your positioning sounds exactly like
            everyone else.
            <br />
            <br />
            When everyone claims "Quality" and "Sustainability", no one believes
            anyone.
          </p>

          <div className="space-y-4">
            {[
              "Premium quality materials",
              "Sustainable and eco-friendly",
              "Best customer service",
              "Affordable luxury",
            ].map((item, i) => (
              <NeumorphicCard
                key={i}
                className="!p-4 flex items-center gap-4 !rounded-xl"
                inset
              >
                <div className="w-8 h-8 rounded-full bg-[#f5f5f5] shadow-[3px_3px_6px_#d1d9e6,-3px_-3px_6px_#ffffff] flex items-center justify-center text-red-500 font-bold text-xs">
                  RIP
                </div>
                <span className="text-slate-500 line-through decoration-red-400 decoration-2">
                  {item}
                </span>
              </NeumorphicCard>
            ))}
          </div>
        </div>

        <div className="relative">
          <NeumorphicCard className="p-8 border-l-4 border-red-400">
            <h4 className="text-center font-bold text-lg mb-8 text-slate-800 uppercase tracking-widest">
              The Death Spiral
            </h4>
            <div className="space-y-6 relative">
              <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-slate-200" />
              {[
                "Your ads blend into the feed (Low CTR)",
                "Customers choose based on price",
                "You're forced to discount",
                "ROAS plateaus at 1.5-2.5x",
                "Scaling becomes impossible",
              ].map((step, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 relative z-10"
                >
                  <div className="w-10 h-10 rounded-full bg-[#f5f5f5] shadow-[5px_5px_10px_#d1d9e6,-5px_-5px_10px_#ffffff] flex items-center justify-center text-red-500 font-bold text-sm">
                    {i + 1}
                  </div>
                  <span className="text-slate-600 text-sm font-medium">
                    {step}
                  </span>
                </div>
              ))}
              <div className="mt-8 p-4 bg-[#f5f5f5] shadow-[inset_5px_5px_10px_#d1d9e6,inset_-5px_-5px_10px_#ffffff] rounded-xl text-center">
                <span className="text-red-500 font-bold block mb-1 text-sm tracking-widest">
                  YOU ARE HERE
                </span>
                <span className="text-[10px] text-slate-500 uppercase">
                  The Scaling Ceiling
                </span>
              </div>
            </div>
          </NeumorphicCard>
        </div>
      </div>
    </div>
  </section>
);

/* -------------------------------------------------------------------------- */
/* SOLUTION                                                                   */
/* -------------------------------------------------------------------------- */

const SolutionSection = () => (
  <section id="solution" className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <SectionTitle
        subtitle="The Solution"
        title="From Guessing to Engineering"
      />

      <div className="mb-20">
        <div className="grid md:grid-cols-2 gap-8">
          <NeumorphicCard className="text-center opacity-70 scale-95 origin-right" inset>
            <div className="h-12 w-12 mx-auto bg-[#f5f5f5] rounded-full shadow-[5px_5px_10px_#d1d9e6,-5px_-5px_10px_#ffffff] flex items-center justify-center mb-4 text-gray-400">
              <HelpCircle />
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-600">
              Traditional Agency
            </h3>
            <p className="text-sm text-slate-500 mb-6 font-mono">
              "Creative Intuition"
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <span className="text-[10px] px-2 py-1 rounded text-slate-500 border border-slate-300">
                Brainstorming
              </span>
              <span className="text-[10px] px-2 py-1 rounded text-slate-500 border border-slate-300">
                Gut Feel
              </span>
              <span className="text-[10px] px-2 py-1 rounded text-slate-500 border border-slate-300">
                Random Testing
              </span>
            </div>
            <p className="font-bold text-slate-500 text-sm uppercase tracking-wide">
              Result: Expensive Guessing
            </p>
          </NeumorphicCard>

          <NeumorphicCard className="text-center relative overflow-hidden border-t-4 border-[#667eea]">
            <div className="h-12 w-12 mx-auto bg-[#f5f5f5] rounded-full shadow-[5px_5px_10px_#d1d9e6,-5px_-5px_10px_#ffffff] flex items-center justify-center mb-4 text-[#667eea]">
              <Microscope size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#667eea]">
              Scientific Positioning
            </h3>
            <p className="text-sm text-slate-500 mb-6 font-mono">
              "Causal Proof"
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <span className="text-[10px] bg-blue-100 text-blue-600 px-2 py-1 rounded">
                Systematic Research
              </span>
              <span className="text-[10px] bg-purple-100 text-purple-600 px-2 py-1 rounded">
                Falsifiable Hypotheses
              </span>
              <span className="text-[10px] bg-green-100 text-green-600 px-2 py-1 rounded">
                Controlled Testing
              </span>
            </div>
            <p className="font-bold text-slate-800 text-sm uppercase tracking-wide">
              Result: The "Blue Swan"
            </p>
          </NeumorphicCard>
        </div>
      </div>

      <div className="text-center max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-8 text-slate-800">
          Discovery of Your "Blue Swan"
        </h3>
        <p className="text-slate-600 mb-12 font-medium">
          We filter 60,000 combinations down to one unique Product × Audience ×
          Offer angle that 10x's your results.
        </p>

        {/* Funnel Visual */}
        <div className="relative max-w-2xl mx-auto font-mono text-xs">
          <div className="w-full bg-[#f5f5f5] shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] p-4 mb-2 rounded-t-lg text-center text-gray-400">
            60,000 Combinations
          </div>
          <div className="w-[80%] mx-auto bg-[#f5f5f5] shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] p-4 mb-2 text-center text-gray-500">
            Research: 500 Options
          </div>
          <div className="w-[60%] mx-auto bg-[#f5f5f5] shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] p-4 mb-2 text-center text-slate-500">
            Hypothesis: 20 Angles
          </div>
          <div className="w-[40%] mx-auto bg-[#f5f5f5] shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] p-4 mb-2 rounded-b-lg text-center text-slate-800">
            Testing: 3 Winners
          </div>

          <div className="w-[2px] mx-auto h-12 bg-[#667eea]" />

          <NeumorphicCard className="!p-6 flex items-center justify-center gap-6 transform hover:scale-105 transition-transform duration-500 border-l-4 border-[#667eea]">
            <div className="p-3 bg-[#f5f5f5] rounded-full shadow-[5px_5px_10px_#d1d9e6,-5px_-5px_10px_#ffffff]">
              <Feather size={24} className="text-[#667eea]" />
            </div>
            <div className="text-left">
              <div className="font-bold text-lg text-slate-800 tracking-widest uppercase mb-1">
                ONE BLUE SWAN
              </div>
              <div className="text-slate-500 text-xs">
                Unfair Competitive Advantage • 5-8x ROAS
              </div>
            </div>
          </NeumorphicCard>
        </div>
      </div>
    </div>
  </section>
);

/* -------------------------------------------------------------------------- */
/* EVIDENCE                                                                   */
/* -------------------------------------------------------------------------- */

const CaseStudyCard = ({ title, industry, oldPos, newPos, metrics }) => (
  <NeumorphicCard className="h-full flex flex-col">
    <div className="mb-6">
      <div className="text-[10px] font-bold text-[#667eea] uppercase tracking-[0.2em] mb-3">
        {industry}
      </div>
      <h3 className="text-2xl font-bold text-slate-800">{title}</h3>
    </div>

    <div className="grid md:grid-cols-2 gap-4 mb-8 flex-grow">
      <div className="p-4 bg-[#f5f5f5] shadow-[inset_5px_5px_10px_#d1d9e6,inset_-5px_-5px_10px_#ffffff] rounded-lg">
        <div className="text-[10px] text-gray-400 uppercase font-bold mb-2 tracking-wider">
          Old Positioning
        </div>
        <p className="text-slate-500 text-xs italic leading-relaxed">
          "{oldPos}"
        </p>
      </div>
      <div className="p-4 bg-[#f5f5f5] border border-[#667eea]/20 rounded-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 p-1 bg-[#667eea] rounded-bl-lg">
          <Feather size={10} className="text-white" />
        </div>
        <div className="text-[10px] text-[#667eea] uppercase font-bold mb-2 tracking-wider">
          Scientific Positioning
        </div>
        <p className="text-slate-800 text-xs font-bold leading-relaxed">
          "{newPos}"
        </p>
      </div>
    </div>

    <div className="space-y-3 pt-4 border-t border-slate-200">
      <div className="flex justify-between items-center">
        <span className="text-xs text-slate-500 uppercase tracking-wide">
          ROAS
        </span>
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-400 line-through font-mono">
            {metrics.before.roas}
          </span>
          <ArrowRight size={12} className="text-gray-400" />
          <span className="text-sm text-green-600 font-bold bg-green-100 px-2 py-0.5 rounded font-mono">
            {metrics.after.roas}
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xs text-slate-500 uppercase tracking-wide">
          Revenue
        </span>
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-400 font-mono">
            {metrics.before.rev}
          </span>
          <ArrowRight size={12} className="text-gray-400" />
          <span className="text-sm text-slate-800 font-bold font-mono">
            {metrics.after.rev}
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center text-[10px] text-gray-400 px-1 pt-2">
        <span>TIMELINE: {metrics.time.toUpperCase()}</span>
        <span className="flex items-center gap-1 text-[#667eea]">
          <Zap size={10} /> {metrics.change}
        </span>
      </div>
    </div>
  </NeumorphicCard>
);

const EvidenceSection = () => (
  <section className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <SectionTitle subtitle="The Evidence" title="Real Brands. Real Results." />

      <div className="grid lg:grid-cols-2 gap-8">
        <CaseStudyCard
          title="The 27-Piece Wardrobe™"
          industry="Premium Basics"
          oldPos="Minimalist essentials. Quality over quantity. Timeless designs."
          newPos="A complete closet system that eliminates decision fatigue. Get dressed in 90 seconds. Look elevated every time."
          metrics={{
            before: { roas: "1.6x", rev: "$45K" },
            after: { roas: "7.8x", rev: "$380K" },
            time: "67 days",
            change: "+488% ROAS",
          }}
        />
        <CaseStudyCard
          title="The Runner's Uniform"
          industry="Activewear"
          oldPos="High-performance athletic wear for serious athletes."
          newPos="Designed by marathon runners, for marathon runners. Apply with your race results to unlock access."
          metrics={{
            before: { roas: "2.3x", rev: "$65K" },
            after: { roas: "6.4x", rev: "$285K" },
            time: "60 days",
            change: "+278% ROAS",
          }}
        />
        <CaseStudyCard
          title="Anti-Fast Fashion"
          industry="Artisan Fashion"
          oldPos="Ethically made, sustainable fashion. Supports artisans."
          newPos="Engineered to last 10+ years—or we replace them free. Includes Lifetime Durability Score."
          metrics={{
            before: { roas: "1.4x", rev: "$28K" },
            after: { roas: "8.2x", rev: "$195K" },
            time: "75 days",
            change: "+486% ROAS",
          }}
        />
        <CaseStudyCard
          title="The 20-Year Jacket™"
          industry="Heritage Outerwear"
          oldPos="Handcrafted heritage outerwear. Built to last generations."
          newPos="We only manufacture 500 units per design, per year. When your size sells out, it's retired forever."
          metrics={{
            before: { roas: "2.0x", rev: "$52K" },
            after: { roas: "7.1x", rev: "$240K" },
            time: "Start of Season",
            change: "+255% ROAS",
          }}
        />
      </div>
    </div>
  </section>
);

/* -------------------------------------------------------------------------- */
/* METHOD                                                                     */
/* -------------------------------------------------------------------------- */

const TimelineStage = ({ number, title, weeks, desc, items, color }) => (
  <div className="relative pl-8 md:pl-0 md:w-1/4 pb-12 md:pb-0 group">
    <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-slate-200 md:hidden" />
    <div
      className={`
        w-12 h-12 rounded-full border-4 border-[#f5f5f5] shadow-[5px_5px_10px_#d1d9e6,-5px_-5px_10px_#ffffff] flex items-center justify-center font-bold text-lg relative z-10 mb-6 transition-all duration-500 group-hover:scale-110
        ${
          color === "purple"
            ? "bg-purple-100 text-purple-600"
            : color === "blue"
            ? "bg-blue-100 text-blue-600"
            : color === "green"
            ? "bg-green-100 text-green-600"
            : "bg-gray-100 text-gray-600"
        }
        md:mx-auto
      `}
    >
      {number}
    </div>
    <div className="md:text-center px-4">
      <div className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-gray-400">
        {weeks}
      </div>
      <h4 className="text-lg font-bold text-slate-800 mb-3">{title}</h4>
      <p className="text-xs text-slate-500 mb-4 leading-relaxed">{desc}</p>
      <ul className="text-left space-y-2 text-[10px] text-slate-500 bg-[#f5f5f5] shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] p-4 rounded-lg">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span
              className={`w-1.5 h-1.5 rounded-full mt-1 shrink-0 ${
                color === "purple"
                  ? "bg-purple-400"
                  : color === "blue"
                  ? "bg-blue-400"
                  : color === "green"
                  ? "bg-green-400"
                  : "bg-gray-400"
              }`}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const MethodSection = () => (
  <section id="method" className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <SectionTitle
        subtitle="The Method"
        title="How We Engineer Your Blue Swan"
      />

      <div className="relative">
        <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-[2px] bg-slate-300 -z-10" />

        <div className="flex flex-col md:flex-row">
          <TimelineStage
            number="1"
            color="blue"
            title="Deep Research"
            weeks="Weeks 1-2"
            desc="Forensic market intelligence to eliminate biases."
            items={[
              "Product catalog analysis",
              "Competitive audit",
              "Customer psychographics",
              "Positioning map creation",
            ]}
          />
          <TimelineStage
            number="2"
            color="purple"
            title="Hypothesis"
            weeks="Weeks 2-3"
            desc="Engineering 15-25 falsifiable positioning angles."
            items={[
              "Target audience definition",
              "Predicted ROAS modeling",
              "Success criteria definition",
              "Creative briefs",
            ]}
          />
          <TimelineStage
            number="3"
            color="green"
            title="Systematic Testing"
            weeks="Weeks 3-6"
            desc="Proving what works with real money and scientific rigor."
            items={[
              "Rapid testing phase",
              "Refinement phase",
              "Blue Swan confirmation",
              "Causal documentation",
            ]}
          />
          <TimelineStage
            number="4"
            color="gray"
            title="Scale & Dominate"
            weeks="Week 7+"
            desc="Deploying your proven winner across all channels."
            items={[
              "Full creative rollout",
              "Landing page rewrite",
              "Channel expansion",
              "Monthly Bayesian updates",
            ]}
          />
        </div>
      </div>
    </div>
  </section>
);

/* -------------------------------------------------------------------------- */
/* COMPARISON                                                                 */
/* -------------------------------------------------------------------------- */

const ComparisonTable = () => (
  <section id="comparison" className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <SectionTitle
        subtitle="The Uniqueness"
        title="Why The Scientific Postioning is Different"
      />

      <div className="overflow-x-auto">
        <NeumorphicCard className="min-w-[800px] !p-8">
          <div className="grid grid-cols-12 gap-4 pb-6 border-b border-gray-200 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
            <div className="col-span-4">Feature</div>
            <div className="col-span-4 text-center text-red-400">
              Most Agencies
            </div>
            <div className="col-span-4 text-center text-[#667eea]">
              Arlox
            </div>
          </div>

          {[
            {
              label: "Research Depth",
              bad: "2-3 hours (strategy call)",
              good: "60-80 hours (deep study)",
            },
            {
              label: "Hypothesis Count",
              bad: "3-5 random ideas",
              good: "15-25 systematic hypotheses",
            },
            {
              label: "Testing Approach",
              bad: "Trial & Error",
              good: "Controlled Experiments",
            },
            {
              label: "Logic",
              bad: "Correlation-based",
              good: "Causation-proven",
            },
            {
              label: "Durability",
              bad: "Campaign-based (starts over)",
              good: "Moat-building (compounds)",
            },
            {
              label: "Accountability",
              bad: "Report results after",
              good: "Predict results before",
            },
            { label: "Timeline", bad: "6-9 months", good: "60 days" },
            { label: "ROAS Result", bad: "1.5x - 2.5x", good: "5x - 8x" },
          ].map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-12 gap-4 py-6 border-b border-gray-100 items-center hover:bg-gray-50 transition-colors"
            >
              <div className="col-span-4 font-bold text-slate-600">
                {row.label}
              </div>
              <div className="col-span-4 text-center text-slate-500 flex justify-center items-center gap-2 text-sm">
                <XCircle size={14} className="text-red-400" /> {row.bad}
              </div>
              <div className="col-span-4 text-center text-slate-800 font-bold flex justify-center items-center gap-2 bg-[#667eea]/10 py-2 rounded">
                <CheckCircle2 size={14} className="text-[#667eea]" />{" "}
                {row.good}
              </div>
            </div>
          ))}
        </NeumorphicCard>
      </div>
    </div>
  </section>
);

/* -------------------------------------------------------------------------- */
/* OBJECTIONS                                                                 */
/* -------------------------------------------------------------------------- */

const ObjectionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0 group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-[#667eea] transition-colors"
      >
        <span className="text-lg font-bold text-slate-800 group-hover:text-[#667eea] transition-colors">
          {question}
        </span>
        <div
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180 text-[#667eea]" : "text-gray-400"
          }`}
        >
          <ChevronRight />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-slate-500 leading-relaxed pr-8 font-medium">
          {answer}
        </p>
      </div>
    </div>
  );
};

const ObjectionSection = () => (
  <section className="py-20 px-6">
    <div className="max-w-4xl mx-auto">
      <SectionTitle
        subtitle="The Objection Crusher"
        title="But What If...?"
      />

      <NeumorphicCard className="p-4 md:p-8">
        <ObjectionItem
          question="We already tried repositioning. It didn't work."
          answer="Most 'repositioning' is just rebranding (changing logo, colors, site). We don't touch your branding yet. We focus exclusively on why customers choose you over competitors (positioning), test it with real spend, and only then recommend alignment. Did you actually reposition, or did you just rebrand?"
        />
        <ObjectionItem
          question="This sounds expensive..."
          answer="Staying stuck at 1.5x ROAS costs you $50k-$200k/year in wasted ad spend and lost opportunity. Our clients typically see a 10-20x return on their investment in the first year alone. The real question is: Can you afford NOT to fix your positioning?"
        />
        <ObjectionItem
          question="Can't we figure this out ourselves?"
          answer="Maybe, if you have 200 hours, statistical analysis skills, and objective distance from your own brand. Most founders are too close to see their brand clearly. We bring the tools, the time, and the proven framework to do it in 60 days."
        />
      </NeumorphicCard>
    </div>
  </section>
);

/* -------------------------------------------------------------------------- */
/* FOOTER CTA                                                                 */
/* -------------------------------------------------------------------------- */

const FooterCTA = () => (
  <section className="py-32 px-6 relative overflow-hidden">
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="text-5xl md:text-7xl font-extrabold text-slate-800 mb-8 leading-tight">
        Stop Gambling.
        <br />
        <span className="text-[#667eea]">Start Engineering.</span>
      </h2>
      <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-medium">
        Every week you delay is another{" "}
        <span className="text-slate-800 font-mono">$10K-$50K</span> in lost
        revenue. Book your audit to see the exact angle we'd test first.
      </p>

      <div className="flex flex-col items-center gap-6">
        <NeumorphicButton
          variant="primary"
          className="text-xl px-12 py-6 w-full md:w-auto"
        >
          Book Your Free Positioning Audit <ArrowRight className="ml-2" />
        </NeumorphicButton>
        <p className="text-xs text-gray-400 uppercase tracking-widest">
          30 minutes • No obligation • Get clarity
        </p>
      </div>

      <div className="mt-16 pt-8 border-t border-slate-300 flex flex-wrap justify-center gap-8 text-slate-500 font-medium text-xs uppercase tracking-widest">
        <span className="flex items-center gap-2">
          <CheckCircle2 size={14} className="text-[#667eea]" /> 1,000+
          Campaigns
        </span>
        <span className="flex items-center gap-2">
          <CheckCircle2 size={14} className="text-[#667eea]" /> 5.8x Avg ROAS
        </span>
        <span className="flex items-center gap-2">
          <CheckCircle2 size={14} className="text-[#667eea]" /> $47M+ Generated
        </span>
      </div>
    </div>
  </section>
);

/* -------------------------------------------------------------------------- */
/* PAGE                                                                       */
/* -------------------------------------------------------------------------- */

export default function App() {
  return (
    <div className="min-h-screen text-slate-700 selection:bg-[#667eea] selection:text-white pb-10 bg-[#f5f5f5]">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <EvidenceSection />
      <MethodSection />
      <ComparisonTable />
      <ObjectionSection />
      <FooterCTA />
    </div>
  );
}

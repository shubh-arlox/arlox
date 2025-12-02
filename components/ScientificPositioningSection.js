// components/ScientificPositioningSection.js
"use client";

import { motion } from "framer-motion";
import {
  Target,
  ArrowRight,
  TrendingUp,
  HelpCircle,
  Microscope,
  Dices,
  Leaf,
  Diamond,
  Zap,
  Shirt,
  Search,
  Lightbulb,
  FlaskConical,
  Rocket,
  EyeOff,
  MousePointer2,
  Percent,
  BarChart2,
} from "lucide-react";

const neuCard =
  "rounded-3xl bg-[#f1f2f6] shadow-[10px_10px_30px_rgba(0,0,0,0.14),-10px_-10px_28px_rgba(255,255,255,0.9)] border border-white/70";
const neuInset =
  "rounded-3xl bg-[#f1f2f6] shadow-[inset_6px_6px_14px_rgba(0,0,0,0.14),inset_-6px_-6px_14px_rgba(255,255,255,0.9)]";
const neuPill =
  "rounded-full bg-[#f1f2f6] shadow-[8px_8px_20px_rgba(0,0,0,0.16),-8px_-8px_20px_rgba(255,255,255,0.9)]";

export default function ScientificPositioningSection() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#e2e4ea] to-[#d7dae2] text-[#2d3748]">
      {/* NAV */}
      <header className="fixed top-0 left-0 w-full z-40">
        <div className="mx-auto max-w-6xl px-4">
          <motion.nav
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${neuPill} mt-4 px-5 py-2 flex items-center justify-between backdrop-blur-xl bg-[#f5f6fa]/95`}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#1f2937] flex items-center justify-center text-white font-bold text-xs">
                A
              </div>
              <span className="font-semibold tracking-tight text-[#1f2937]">
                Arlox.io
              </span>
            </div>
            <div className="hidden md:flex gap-6 text-xs font-medium text-[#6b7280]">
              <a href="#problem" className="hover:text-[#111827] transition-colors">
                The Problem
              </a>
              <a href="#solution" className="hover:text-[#111827] transition-colors">
                Scientific Method
              </a>
              <a href="#evidence" className="hover:text-[#111827] transition-colors">
                Evidence
              </a>
            </div>
            <button
              className={`${neuPill} px-4 py-1.5 text-xs font-semibold text-[#1d4ed8] hover:scale-95 active:scale-90 transition-transform`}
            >
              Audit Positioning
            </button>
          </motion.nav>
        </div>
      </header>

      <div className="pt-32 md:pt-36" />

      {/* HERO */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div
              className={`${neuInset} inline-flex items-center gap-2 px-4 py-2 text-[11px] text-[#4b5563]`}
            >
              <Target className="w-4 h-4 text-[#2563eb]" />
              <span className="font-semibold tracking-[0.18em] uppercase">
                Proven methodology
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#111827] leading-tight">
              Become The
              <br />
              <span className="bg-gradient-to-r from-[#2563eb] via-[#4f46e5] to-[#7c3aed] bg-clip-text text-transparent">
                Only Choice.
              </span>
            </h1>

            <p className="text-sm md:text-base text-[#4b5563] leading-relaxed border-l-4 border-[#2563eb] pl-4 md:pl-5">
              Scientific Positioning is how brands escape the ad treadmill and
              dominate a category. Replace intuition and random testing with a
              repeatable, evidence‑driven system.
            </p>

            {/* CTA & metrics */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <motion.button
                whileHover={{ scale: 0.97, y: -1 }}
                whileTap={{ scale: 0.93 }}
                className={`${neuPill} px-6 py-3 text-sm font-semibold text-[#1d4ed8] flex items-center gap-2`}
              >
                Book Your Free Positioning Audit
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap items-center gap-3 text-[11px] font-medium text-[#6b7280]"
              >
                <span className="flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-[#22c55e]" />
                  5.8x average ROAS lift
                </span>
                <span className="w-1 h-1 rounded-full bg-[#9ca3af]" />
                <span>1,000+ campaigns</span>
                <span className="w-1 h-1 rounded-full bg-[#9ca3af]" />
                <span>$47M+ tracked revenue</span>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT – chaos vs order */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className={`${neuInset} relative h-[440px] rounded-[32px] overflow-hidden flex`}
          >
            {/* Chaos */}
            <div className="relative w-1/2 border-r border-white/60">
              <div className="absolute inset-0 bg-gradient-to-br from-[#fecaca] via-transparent to-transparent" />
              {[
                { text: '"Best Quality"', className: "top-8 left-3 rotate-6" },
                { text: '"Cheap Price"', className: "top-28 right-3 -rotate-6" },
                { text: '"Free Shipping"', className: "bottom-24 left-4 rotate-12" },
                { text: '"Timeless Style"', className: "bottom-10 right-5 -rotate-12" },
              ].map((t, i) => (
                <motion.div
                  key={t.text}
                  initial={{ y: 0 }}
                  animate={{ y: i % 2 ? [-4, 3, -4] : [4, -3, 4] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                  className={`${neuPill} absolute px-3 py-1 text-[10px] text-[#b91c1c] bg-[#f1f2f6]/95 ${t.className}`}
                >
                  {t.text}
                </motion.div>
              ))}

              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: [0.9, 1, 0.9] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="text-2xl font-extrabold text-[#dc2626]"
                >
                  1.2x
                </motion.div>
                <div className="text-[10px] tracking-wide text-[#b91c1c] uppercase">
                  Stagnant ROAS
                </div>
              </div>
            </div>

            {/* Order */}
            <div className="relative w-1/2 flex flex-col items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#bbf7d0]/40 to-transparent" />
              <motion.div
                initial={{ y: 8, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className={`${neuCard} px-6 py-4 text-center`}
              >
                <Target className="w-6 h-6 text-[#16a34a] mx-auto mb-2" />
                <span className="text-xs font-semibold tracking-wide text-[#0f172a]">
                  Precision Positioning
                </span>
              </motion.div>

              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "80%" }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                className="mt-8 h-24 flex items-end gap-1"
              >
                <div className="w-1/4 bg-gradient-to-t from-[#bbf7d0] to-[#22c55e]/40 h-[25%] rounded-t-lg" />
                <div className="w-1/4 bg-gradient-to-t from-[#bbf7d0] to-[#22c55e]/60 h-[45%] rounded-t-lg" />
                <div className="w-1/4 bg-gradient-to-t from-[#bbf7d0] to-[#22c55e]/80 h-[70%] rounded-t-lg" />
                <div className="relative w-1/4 bg-gradient-to-t from-[#bbf7d0] to-[#22c55e] h-[100%] rounded-t-lg">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-[#15803d]">
                    7x
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Center arrow */}
            <motion.div
              initial={{ rotate: -10, scale: 0.9 }}
              animate={{ rotate: [-10, 10, -10], scale: [0.9, 1, 0.9] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className={`${neuPill} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-[#4b5563]`}
            >
              <ArrowRight className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="px-4 pb-20">
        <div className="max-w-5xl mx-auto text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-[#111827] mb-3"
          >
            Why Your Ads Won&apos;t Scale Past $50K/Month
          </motion.h2>
          <p className="text-sm md:text-base text-[#4b5563] max-w-2xl mx-auto">
            You&apos;ve cycled new creatives, audiences, agencies—and still hit the
            same ceiling. The issue isn&apos;t your product or media buyer. It&apos;s
            that your positioning is indistinguishable from everyone else.
          </p>
        </div>

        {/* GRAVEYARD */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className={`${neuInset} p-10 rounded-[32px] relative overflow-hidden`}>
            <div className="absolute inset-x-10 top-5 text-center text-[11px] font-semibold tracking-[0.22em] text-[#9ca3af] uppercase">
              Generic Positioning Graveyard
            </div>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
              {[
                ['"Premium Quality"', "Died of overuse"],
                ['"Eco Friendly"', "10,000 clones"],
                ['"Timeless Design"', "Too vague"],
                ['"Affordable Luxury"', "Contradiction"],
              ].map(([text, sub], idx) => (
                <motion.div
                  key={text}
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="h-32 neu-tombstone bg-[#f1f2f6] shadow-[6px_6px_16px_rgba(0,0,0,0.14),-6px_-6px_16px_rgba(255,255,255,0.9)] flex flex-col items-center justify-center px-3 text-center"
                >
                  <span className="text-[10px] text-[#9ca3af] mb-1">RIP</span>
                  <span className="text-xs font-semibold text-[#374151] line-through decoration-red-400">
                    {text}
                  </span>
                  <span className="mt-1 text-[9px] text-[#b91c1c]">{sub}</span>
                </motion.div>
              ))}
            </div>
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#e2e4ea] to-transparent" />
          </div>
        </motion.div>

        {/* DEATH SPIRAL */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-lg font-bold text-center text-[#111827] mb-6">
            The Death Spiral
          </h3>
          <div
            className={`${neuCard} px-6 py-8 md:py-6 flex flex-col md:flex-row items-center justify-between gap-5`}
          >
            {[
              [EyeOff, "Generic Positioning"],
              [MousePointer2, "Low CTR"],
              [Percent, "Discount Addiction"],
              [BarChart2, "ROAS Plateau"],
            ].map(([Icon, label], idx) => (
              <div key={label} className="flex items-center gap-3 md:gap-2">
                <motion.div
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ duration: 3 + idx, repeat: Infinity, ease: "easeInOut" }}
                  className="w-10 h-10 rounded-full bg-[#fee2e2] flex items-center justify-center text-[#b91c1c]"
                >
                  <Icon className="w-5 h-5" />
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-semibold text-[#111827]">
                    {label}
                  </span>
                  {idx < 3 && (
                    <span className="hidden md:inline text-[10px] text-[#9ca3af]">
                      Leads to the next step
                    </span>
                  )}
                </div>
                {idx < 3 && (
                  <ArrowRight className="hidden md:block w-4 h-4 text-[#fca5a5]" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SOLUTION */}
      <section id="solution" className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.4 }}
              className={`${neuInset} inline-flex px-4 py-1 rounded-full mb-3`}
            >
              <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#2563eb]">
                The Antidote
              </span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827]">
              Scientific Positioning
            </h2>
            <p className="mt-3 text-sm md:text-base text-[#4b5563]">
              Replace gut‑feel brainstorming with a repeatable, falsifiable
              methodology that discovers the angle your market can&apos;t ignore.
            </p>
          </div>

          {/* comparison */}
          <div className="grid gap-10 md:grid-cols-2 mb-14">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className={`${neuInset} p-7`}
            >
              <h3 className="flex items-center gap-2 text-sm font-semibold text-[#374151] mb-3">
                <HelpCircle className="w-5 h-5" /> Creative Guessing
              </h3>
              <p className="text-xs md:text-sm text-[#6b7280] mb-5">
                Random angles. &apos;Let&apos;s try this.&apos; Confirmation bias
                dressed up as &apos;data&apos; after a few lucky ad sets.
              </p>
              <div className="h-32 flex items-center justify-center border border-dashed border-[#d1d5db] rounded-2xl">
                <Dices className="w-10 h-10 text-[#9ca3af]" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`${neuCard} p-7 border border-[#bfdbfe]`}
            >
              <h3 className="flex items-center gap-2 text-sm font-semibold text-[#111827] mb-3">
                <Microscope className="w-5 h-5 text-[#2563eb]" /> Scientific
                Engineering
              </h3>
              <p className="text-xs md:text-sm text-[#4b5563] mb-5">
                Hypotheses, controlled experiments and causal proof. A
                repeatable system that turns 60,000 possible combinations into a
                single winning angle.
              </p>
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-3 rounded-full bg-[#e5e7eb] overflow-hidden"
              >
                <div className="h-full w-full bg-gradient-to-r from-[#2563eb] via-[#4f46e5] to-[#22c55e]" />
              </motion.div>
            </motion.div>
          </div>

          {/* examples */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="grid gap-8 md:grid-cols-2"
          >
            {[
              {
                before: '"Sustainable, high-quality clothing"',
                after: '"Save Soil With Hemp"',
                from: "1.2x ROAS",
                to: "6.5x ROAS",
              },
              {
                before: '"Premium denim made with the finest materials"',
                after: '"Jeans engineered to fit perfectly after 30 washes"',
                from: "2.1x ROAS",
                to: "6.8x ROAS",
              },
            ].map((ex) => (
              <div key={ex.before} className={neuCard + " p-6"}>
                <div className="flex justify-between text-[11px] mb-3">
                  <span className="font-semibold text-[#9ca3af]">GENERIC</span>
                  <span className="font-semibold text-[#2563eb]">
                    SCIENTIFIC
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1 text-center p-4 rounded-2xl bg-[#e5e7eb]">
                    <p className="text-xs text-[#4b5563]">{ex.before}</p>
                    <span className="mt-2 block text-[11px] font-semibold text-[#b91c1c]">
                      {ex.from}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#9ca3af]" />
                  <div className="flex-1 text-center p-4 rounded-2xl bg-[#e0f2fe] border border-[#bfdbfe]">
                    <p className="text-xs text-[#0f172a] font-semibold">
                      {ex.after}
                    </p>
                    <span className="mt-2 block text-[11px] font-semibold text-[#16a34a]">
                      {ex.to}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* EVIDENCE */}
      <section id="evidence" className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] mb-10 text-center">
            Real Brands. Engineered Positioning.
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="grid gap-7 md:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                icon: Leaf,
                title: "Hemp Brand",
                before: '"Buy hemp t‑shirts"',
                after: '"Save Soil With Hemp"',
                result: "1.2x → 6.5x ROAS",
                color: "text-[#16a34a] bg-[#dcfce7]",
              },
              {
                icon: Diamond,
                title: "₹25K Premium Brand",
                before: '"Premium product. Buy online"',
                after: '"Inquire via WhatsApp only"',
                result: "Higher close‑rate",
                color: "text-[#7c3aed] bg-[#ede9fe]",
              },
              {
                icon: Zap,
                title: "Gen Z Jackets",
                before: '"Quality craftsmanship"',
                after: '"Rebellion against fast fashion"',
                result: "ROAS ≈ 2x",
                color: "text-[#ef4444] bg-[#fee2e2]",
              },
              {
                icon: Shirt,
                title: "Bamboo Tees",
                before: '"Bamboo shirts and benefits"',
                after: '"Natural Organic Athletic Wear"',
                result: "1.6x → 4.5x ROAS",
                color: "text-[#22c55e] bg-[#dcfce7]",
              },
            ].map((c) => (
              <motion.article
                key={c.title}
                whileHover={{ y: -4 }}
                className={neuCard + " p-5"}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${c.color}`}
                >
                  <c.icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-semibold text-[#111827] mb-2">
                  {c.title}
                </h4>
                <div className="text-[11px] space-y-1 mb-4">
                  <p className="flex justify-between text-[#6b7280]">
                    <span>Before:</span>
                    <span className="text-[#9ca3af] ml-2 text-right">
                      {c.before}
                    </span>
                  </p>
                  <p className="flex justify-between text-[#6b7280]">
                    <span>After:</span>
                    <span className="text-[#111827] font-semibold ml-2 text-right">
                      {c.after}
                    </span>
                  </p>
                </div>
                <div className={neuInset + " px-3 py-2 rounded-2xl text-center"}>
                  <span className="text-[10px] tracking-wide text-[#9ca3af] uppercase">
                    Result
                  </span>
                  <p className="text-xs font-semibold text-[#16a34a]">
                    {c.result}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* METHOD */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] mb-10 text-center">
            The Scientific Positioning System
          </h2>

          <div className="space-y-7">
            {[
              {
                icon: Search,
                title: "Stage 1: Deep Research",
                body: "Forensic analysis of brand, market and customers to remove bias and uncover hidden positioning gaps.",
                color: "text-[#2563eb]",
                tags: ["Brand & offer map", "Competitor & category scan"],
              },
              {
                icon: Lightbulb,
                title: "Stage 2: Hypothesis Engine",
                body: "Generate 15–25 falsifiable positioning angles with explicit predictions and disqualifying criteria.",
                color: "text-[#7c3aed]",
                tags: ["Angle library", "Predicted ROAS bands"],
              },
              {
                icon: FlaskConical,
                title: "Stage 3: Controlled Testing",
                body: "Run structured experiments where only one variable changes—the positioning—across matched audiences.",
                color: "text-[#ef4444]",
                tags: ["Rapid A/B batches", "Causal proof"],
              },
              {
                icon: Rocket,
                title: "Stage 4: Scale & Deploy",
                body: "Roll the winning angle into ads, landing pages, emails and retention flows until the market catches up.",
                color: "text-[#16a34a]",
                tags: ["Messaging playbook", "Full‑funnel rollout"],
                highlight: true,
              },
            ].map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`${neuCard} p-6 md:p-7 flex gap-5 items-start ${
                  s.highlight ? "border border-[#bbf7d0]" : ""
                }`}
              >
                <motion.div
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                  className={`w-12 h-12 md:w-14 md:h-14 rounded-full ${neuInset} flex items-center justify-center ${s.color}`}
                >
                  <s.icon className="w-6 h-6 md:w-7 md:h-7" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-sm md:text-base font-semibold text-[#111827] mb-1">
                    {s.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#4b5563] mb-3">
                    {s.body}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-[11px] text-[#6b7280] rounded-full bg-[#e5e7eb]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] mb-4">
            Stop Renting Attention. Start Owning A Position.
          </h2>
          <p className="text-sm md:text-base text-[#4b5563] mb-6">
            If your brand has the product and budget but keeps hitting the same
            ceiling, your next breakthrough won&apos;t come from &quot;better
            creatives.&quot; It will come from engineered positioning.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <motion.button
              whileHover={{ scale: 0.97, y: -1 }}
              whileTap={{ scale: 0.93 }}
              className={`${neuPill} px-7 py-3 text-sm font-semibold text-[#1d4ed8]`}
            >
              Book Positioning Audit
            </motion.button>
            <button className="px-7 py-3 rounded-full border border-[#d1d5db] text-sm font-semibold text-[#111827] bg-[#e5e7eb] hover:bg-[#dcdfe7] transition-colors">
              View Case Studies
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

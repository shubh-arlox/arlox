// components/OwnershipSection.js
"use client";

import { BarChart3, UserPlus, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function OwnershipSection() {
  return (
    <section className="w-full bg-[#050816] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
        {/* LEFT: Copy + steps */}
        <div className="space-y-6">
          <span className="inline-block px-4 py-1 text-[11px] tracking-wide rounded-full bg-[#0b1b33] text-[#8fa3ff]">
            THE ECONOMICS
          </span>

          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-3">
              The Compound
              <br />
              Effect of{" "}
              <span className="text-[#4f8dfd]">Ownership</span>
            </h2>
            <p className="text-sm md:text-base text-[#c3c7d5] max-w-xl">
              Consider one customer over one year. When you own the relationship,
              the first sale pays for acquisition. Every subsequent sale is 100%
              profit margin.
            </p>
          </div>

          {/* Week cards */}
          <div className="space-y-4 max-w-sm">
            {/* Week 1 */}
            <motion.div
              className="flex items-center gap-4 bg-gradient-to-br from-[#0b1320] to-[#050816] rounded-2xl px-4 py-3 shadow-[0_14px_30px_rgba(0,0,0,0.55)] border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-10 h-10 rounded-xl bg-[#111827] flex items-center justify-center text-[#5ea0ff]">
                <UserPlus className="w-5 h-5" />
              </div>
              <div className="text-xs md:text-sm">
                <p className="text-[11px] text-[#9ca3b8] mb-0.5">Week 1</p>
                <p className="font-semibold">
                  Acquisition Cost: <span className="text-white">$10</span>
                </p>
                <p className="text-[11px] text-[#6b7280]">Break Even</p>
              </div>
            </motion.div>

            {/* Week 8 */}
            <motion.div
              className="flex items-center gap-4 bg-gradient-to-br from-[#0b1320] to-[#050816] rounded-2xl px-4 py-3 shadow-[0_14px_30px_rgba(0,0,0,0.55)] border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <div className="w-10 h-10 rounded-xl bg-[#111827] flex items-center justify-center text-[#4ade80]">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-xs md:text-sm">
                <p className="text-[11px] text-[#9ca3b8] mb-0.5">
                  Week 8 (Email)
                </p>
                <p className="font-semibold">
                  <span className="text-[#22c55e]">
                    Cost: $0 → Profit: $20
                  </span>
                </p>
                <p className="text-[11px] text-[#6b7280]">100% Margin</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT: Revenue card */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full max-w-md bg-[#0b1320] rounded-[28px] shadow-[0_26px_60px_rgba(0,0,0,0.7)] border border-white/5 px-5 py-6 space-y-5">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-[#22c55e]" />
                <p className="text-sm font-semibold">Revenue Projection</p>
              </div>
            </div>

            {/* Rented bar */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-[11px] text-[#9ca3b8]">
                <span>Rented (Standard Agency)</span>
                <span className="text-[#9ca3b8]">$10k Profit</span>
              </div>
              <div className="h-2 rounded-full bg-[#1f2933] overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-[#4b5563]"
                  initial={{ width: 0 }}
                  whileInView={{ width: "40%" }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Owned bar */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-[11px] text-[#9ca3b8]">
                <span>Owned (Arlox System)</span>
                <span className="text-[#4ade80]">$85k Profit</span>
              </div>
              <div className="h-2 rounded-full bg-[#1f2933] overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#2563eb] via-[#38bdf8] to-[#22c55e]"
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
                />
              </div>
            </div>

            {/* 8.5x block */}
            <motion.div
              className="mt-4 bg-[#050816] rounded-2xl px-4 py-6 flex flex-col items-center justify-center border border-white/5"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <motion.p
                className="text-3xl md:text-4xl font-extrabold text-white mb-1"
                animate={{ scale: [1, 1.06, 1] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                8.5x
              </motion.p>
              <p className="text-[11px] md:text-xs text-[#9ca3b8]">
                Higher Lifetime Value
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

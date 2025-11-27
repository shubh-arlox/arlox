// components/TenantOwnerSection.js
"use client";

import { ArrowRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function TenantOwnerSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide text-[#2d4475]">
          Are you a Tenant or Owner?
        </h2>
        <p className="mt-3 text-sm md:text-base text-[#7181a3]">
          Most brands are stuck on a treadmill. We build you a flywheel.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid gap-8 md:grid-cols-2 items-stretch">
        <HamsterWheelCard />
        <FlywheelCard />
      </div>

      {/* CTA button */}
      <div className="mt-10 flex justify-center">
        <button className="relative inline-flex items-center gap-3 px-8 py-3 rounded-full bg-[#f5f6fa] shadow-[10px_10px_26px_rgba(143,155,179,0.35),-10px_-10px_26px_rgba(255,255,255,0.96)]">
          <span className="px-4 py-2 rounded-full bg-white text-sm md:text-base font-semibold text-[#2550b0] shadow-[6px_6px_12px_rgba(143,155,179,0.3),-6px_-6px_12px_rgba(255,255,255,0.98)]">
            Start Scaling Today
          </span>
          <ArrowRight className="w-4 h-4 text-[#2550b0]" />
        </button>
      </div>
    </section>
  );
}

/* ------------------ Hamster Wheel Card ------------------ */

function HamsterWheelCard() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: { repeat: Infinity, duration: 5, ease: "linear" },
    });
  }, [controls]);

  const handleHoverStart = () => controls.stop();
  const handleHoverEnd = () =>
    controls.start({
      rotate: 360,
      transition: { repeat: Infinity, duration: 5, ease: "linear" },
    });

  return (
    <div className="bg-[#f3f4f8] rounded-3xl shadow-[12px_12px_30px_rgba(143,155,179,0.35),-10px_-10px_26px_rgba(255,255,255,0.95)] p-5 md:p-7 flex">
      <div className="bg-[#f7f8fc] rounded-3xl shadow-[8px_8px_18px_rgba(150,162,186,0.25),-8px_-8px_16px_rgba(255,255,255,0.96)] p-5 flex flex-col w-full">
        <h3 className="text-lg md:text-xl font-bold text-[#222630] text-center mb-4">
          The Hamster Wheel
          <br />
          <span className="font-semibold">of Rented Attention</span>
        </h3>

        {/* Wheel visual */}
        <motion.div
          className="relative flex items-center justify-center h-40 md:h-44 mb-5"
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
        >
          <div className="relative w-full max-w-[260px] h-full bg-[#f4f5f8] rounded-3xl shadow-[16px_16px_32px_rgba(120,128,146,0.4),-12px_-12px_28px_rgba(255,255,255,0.96)] flex items-center justify-center">
            {/* Wheel frame */}
            <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full bg-[#e3e4ea] shadow-[9px_9px_20px_rgba(90,96,112,0.45),-8px_-8px_18px_rgba(255,255,255,0.98)] border-[3px] border-[#d0d3dd] flex items-center justify-center">
              {/* rotating cage */}
              <motion.div
                animate={controls}
                className="relative w-[78%] h-[78%] rounded-full border-[3px] border-[#c2c5d0] flex items-center justify-center bg-gradient-to-br from-[#f9fafb] to-[#e5e7eb]"
                style={{ originX: 0.5, originY: 0.5 }}
              >
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-[2px] h-[82%] bg-[#b4b8c3]"
                    style={{ transform: `rotate(${i * 30}deg)` }}
                  />
                ))}
                <div className="absolute inset-1 rounded-full border-2 border-[#d0d3dc]" />
                <div className="relative w-7 h-7 rounded-full bg-[#f5f5f6] shadow-[3px_3px_6px_rgba(90,96,112,0.45),-3px_-3px_6px_rgba(255,255,255,0.96)] flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#b0b4c0]" />
                </div>
              </motion.div>

              {/* stand */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-24 h-8 rounded-b-3xl bg-gradient-to-b from-[#edeef3] to-[#c9ccd6] border-t-4 border-[#a3a8b5] shadow-[0_8px_16px_rgba(90,96,112,0.55)]" />
            </div>

            {/* Labels */}
            <div className="absolute right-4 top-4 px-3 py-1.5 rounded-xl bg-white shadow-[6px_6px_14px_rgba(120,128,146,0.45),-6px_-6px_14px_rgba(255,255,255,0.98)] text-[10px] font-medium text-[#b3261e] flex items-center gap-1">
              <span>No Asset</span>
              <span className="text-xs">✕</span>
            </div>
            <div className="absolute left-4 top-4 text-[11px] font-semibold text-[#22c55e]">
              $$$
            </div>
          </div>
        </motion.div>

        {/* Bullets */}
        <ul className="space-y-2 text-xs md:text-sm text-[#444b5c] mt-auto">
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ff4b4b]" />
            <span>Unpredictable revenue surges &amp; slumps.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ff4b4b]" />
            <span>Paying &quot;rent&quot; for every single impression.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ff4b4b]" />
            <span>Zero asset value created.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

/* ------------------ Flywheel Card (Animated) ------------------ */



function FlywheelCard() {
  return (
    <div className="bg-[#f3f4f8] rounded-3xl shadow-[12px_12px_30px_rgba(143,155,179,0.35),-10px_-10px_26px_rgba(255,255,255,0.95)] p-5 md:p-7 flex">
      <div className="bg-[#f7f8fc] rounded-3xl shadow-[8px_8px_18px_rgba(150,162,186,0.25),-8px_-8px_16px_rgba(255,255,255,0.96)] p-5 flex flex-col w-full">
        {/* Header */}
        <div className="mb-4 text-center">
          <div className="h-1 w-full rounded-full bg-gradient-to-r from-[#37c56a] via-[#22c55e] to-[#37c56a] opacity-90 mb-3" />
          <h3 className="text-lg md:text-xl font-bold text-[#dfe4f0] drop-shadow-sm">
            The Owner
          </h3>
          <p className="text-[11px] md:text-xs font-semibold tracking-wide text-[#45a55f]">
            THE FLYWHEEL OF OWNED ASSETS
          </p>
        </div>

        {/* Flywheel visual */}
        <div className="relative flex items-center justify-center h-40 md:h-44 mb-5">
          <div className="relative w-full max-w-[260px] h-full bg-[#f5f6fb] rounded-3xl shadow-[16px_16px_32px_rgba(143,155,179,0.38),-12px_-12px_30px_rgba(255,255,255,0.98)] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-3 rounded-2xl bg-gradient-to-br from-white via-[#f5f7ff] to-[#e3ebff]" />

            <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full bg-[#f4f6ff] shadow-[8px_8px_22px_rgba(132,144,176,0.4),-8px_-8px_22px_rgba(255,255,255,0.98)] border border-white/80 flex items-center justify-center">
              {/* 1) Rotating outer ring */}
              <motion.div
                className="relative w-[82%] h-[82%] rounded-full border-[6px] border-[#22c55e] bg-gradient-to-br from-[#ecfff5] to-[#e2fbe9]"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
              >
                {/* inner glow */}
                <div className="absolute inset-[14%] rounded-full bg-gradient-to-br from-white to-[#edf3ff] shadow-[0_0_18px_rgba(34,197,94,0.35)]" />
              </motion.div>

              {/* 2) Pulsing center hub */}
              <motion.div
                className="absolute w-16 h-16 md:w-18 md:h-18 rounded-full bg-[#f7f8fc] shadow-[6px_6px_16px_rgba(120,132,164,0.45),-6px_-6px_16px_rgba(255,255,255,0.98)] flex items-center justify-center border border-white/85"
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-7 h-7 rounded-full bg-white border-2 border-[#22c55e] flex items-center justify-center shadow-[0_0_10px_rgba(34,197,94,0.5)]">
                  <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
                </div>
              </motion.div>

              {/* 3) Floating pills */}
              <motion.div
                className="absolute -top-4 px-3 py-1 rounded-full bg-[#fde68a] shadow-[4px_4px_12px_rgba(250,204,21,0.55)] text-[10px] font-semibold text-[#854d0e]"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              >
                Mythos
              </motion.div>

              <motion.div
                className="absolute -left-5 px-3 py-1 rounded-full bg-[#bbf7d0] shadow-[4px_4px_12px_rgba(34,197,94,0.55)] text-[10px] font-semibold text-[#166534]"
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              >
                Vault
              </motion.div>

              <motion.div
                className="absolute -right-5 px-3 py-1 rounded-full bg-[#bfdbfe] shadow-[4px_4px_12px_rgba(37,99,235,0.6)] text-[10px] font-semibold text-[#1d4ed8]"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              >
                Sentinel
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bullets */}
        <ul className="space-y-2 text-xs md:text-sm text-[#444b5c] mt-auto">
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#37c56a]" />
            <span>First sale pays for acquisition.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#37c56a]" />
            <span>Repeat sales cost $0 (100% margin).</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#37c56a]" />
            <span>Compounding asset value.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

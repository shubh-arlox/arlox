"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ShoppingBag,
  CheckCircle,
  Play,
  Eye,
  Sparkles,
} from "lucide-react";
import { NeumorphicCard, fadeInUp } from "./SharedUI";

export default function TrinitySection() {
  // 1️⃣ Declare refs FIRST
  const trinityRef = useRef(null);
  const tableRef = useRef(null);

  // 2️⃣ Then use them
  const trinityInView = useInView(trinityRef, {
    once: true,
    margin: "-100px",
  });

  const tableInView = useInView(tableRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-16 sm:mb-20 md:mb-24">

        {/* TRINITY CARDS */}
        <motion.div
          ref={trinityRef}
          initial="hidden"
          animate={trinityInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-8 sm:mb-12">
            The 2025 Power Pack Trinity
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Performance Max */}
            <NeumorphicCard className="p-6 border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#ecf0f3] shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center">
                  <ShoppingBag className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Performance Max</h4>
                  <p className="text-xs text-blue-600 font-semibold">
                    The Harvester (40%)
                  </p>
                </div>
              </div>

              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <CheckCircle size={16} className="text-blue-500 mt-0.5" />
                  Optimized feed for Google Lens
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={16} className="text-blue-500 mt-0.5" />
                  8–12 images per product
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={16} className="text-blue-500 mt-0.5" />
                  New-customer acquisition mode
                </li>
              </ul>
            </NeumorphicCard>

            {/* Demand Gen */}
            <NeumorphicCard className="p-6 border-l-4 border-red-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#ecf0f3] shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center">
                  <Play className="text-red-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Demand Gen</h4>
                  <p className="text-xs text-red-600 font-semibold">
                    The Creator (35%)
                  </p>
                </div>
              </div>

              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <CheckCircle size={16} className="text-red-500 mt-0.5" />
                  15–20 Shorts per week
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={16} className="text-red-500 mt-0.5" />
                  Discover & Shorts storytelling
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={16} className="text-red-500 mt-0.5" />
                  Creates new search demand
                </li>
              </ul>
            </NeumorphicCard>

            {/* AI Search */}
            <NeumorphicCard className="p-6 border-l-4 border-purple-500 sm:col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#ecf0f3] shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center">
                  <Eye className="text-purple-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">AI Search</h4>
                  <p className="text-xs text-purple-600 font-semibold">
                    The Future (25%)
                  </p>
                </div>
              </div>

              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <CheckCircle size={16} className="text-purple-500 mt-0.5" />
                  Lens & multimodal search
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={16} className="text-purple-500 mt-0.5" />
                  AI Overview optimization
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={16} className="text-purple-500 mt-0.5" />
                  Rich product data wins answers
                </li>
              </ul>
            </NeumorphicCard>
          </div>
        </motion.div>

        {/* 2025 DIFFERENCE */}
        <motion.div
          ref={tableRef}
          className="mt-16 sm:mt-20"
          initial="hidden"
          animate={tableInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <NeumorphicCard className="p-6 sm:p-8 border-l-4 border-blue-500 max-w-3xl mx-auto">
            <div className="flex gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#ecf0f3] shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center">
                <Sparkles className="text-blue-600" size={18} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 mb-2">
                  What Makes 2025 Different
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Google no longer optimizes keywords — it optimizes{" "}
                  <span className="font-semibold text-blue-600">
                    visual intent
                  </span>.
                  Your images are targeting. Your Shorts are keywords.
                  Shopping-only brands are invisible to{" "}
                  <span className="font-semibold text-red-600">
                    60% of Google traffic
                  </span>.
                </p>
              </div>
            </div>
          </NeumorphicCard>
        </motion.div>

      </div>
    </div>
  );
}

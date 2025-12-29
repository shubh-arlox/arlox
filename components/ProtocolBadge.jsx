"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/app/solutions/google-ads-ai/SharedUI";


const neuPressed =
  "bg-[#E0E5EC] shadow-[inset_6px_6px_10px_0_rgba(163,177,198,0.7),inset_-6px_-6px_10px_0_rgba(255,255,255,0.8)] rounded-3xl";

const ProtocolBadge = ({
  label,
  icon: Icon,
  iconSize = 12,
  iconColor = "#5239dd",
  className = "",
  badgeClassName = "",
  variants = fadeInUp,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      className={`z-10 ${className}`}
    >
      <div
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${neuPressed} ${badgeClassName}`}
      >
        {Icon && <Icon size={iconSize} color={iconColor} />}
        <span
          className="text-[10px] md:text-xs font-semibold tracking-wider uppercase"
          style={{ color: iconColor }}
        >
          {label}
        </span>
      </div>
    </motion.div>
  );
};

export default ProtocolBadge;

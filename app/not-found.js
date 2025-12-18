'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Calendar, Sparkles, Wrench } from 'lucide-react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

/* -------------------------------- Whatsapp Icon -------------------------------- */
const WhatsappIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
    fill="currentColor"
  >
    <path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2zM19 7.5c-2.4-3.9-8.7-3.9-12.4 0-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9 0-2.6-1-5.1-2.8-7z" />
  </svg>
);

/* -------------------------------- WhatsApp Composer -------------------------------- */
function WhatsAppComposer({ phoneNumber, defaultMessage = "", onOpen }) {
  const templates = [
    "Hi — I'd like to book a strategy call about growth.",
    "Hey team — I'm interested in your Scientific Positioning service.",
    "Hello — I want a quick audit of my ads and creative strategy.",
  ];
  const emojis = ["🚀", "📈", "💬", "🤝", "⚡"];

  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [message, setMessage] = useState(defaultMessage || templates[0]);
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

    if (onOpen) onOpen();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="p-6 rounded-2xl bg-[#ECF0F3]"
      style={{
        boxShadow:
          "12px 16px 36px rgba(193,201,210,0.6), -10px -10px 28px rgba(255,255,255,0.8)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 flex items-center justify-center rounded-full"
            style={{
              background: "#ECF0F3",
              boxShadow:
                "inset 6px 6px 16px rgba(193,201,210,0.5), inset -6px -6px 16px rgba(255,255,255,0.8)",
            }}
          >
            <WhatsappIcon className="w-6 h-6 text-[#25D366]" />
          </div>

          <div>
            <p className="text-sm font-semibold text-[#2D3748]">
              Message on WhatsApp
            </p>
            <p className="text-xs text-[#718096]">
              Choose a template or write your message
            </p>
          </div>
        </div>

        <p className="text-xs text-[#718096]">{message.length}/600</p>
      </div>

      {/* Templates */}
      <div className="flex flex-wrap gap-2 mb-4">
        {templates.map((t) => (
          <button
            key={t}
            onClick={() => {
              setSelectedTemplate(t);
              setMessage(t);
            }}
            className={`
              px-4 py-1.5 rounded-full text-sm transition
              ${
                selectedTemplate === t
                  ? "text-white bg-[#3B82F6]"
                  : "bg-[#ECF0F3] text-[#2D3748]"
              }
            `}
            style={{
              boxShadow:
                selectedTemplate === t
                  ? "6px 6px 16px rgba(59,130,246,0.4), -6px -6px 14px rgba(255,255,255,0.8)"
                  : "6px 6px 14px rgba(193,201,210,0.5), -6px -6px 12px rgba(255,255,255,0.8)",
            }}
          >
            {t.length > 38 ? t.slice(0, 38) + "…" : t}
          </button>
        ))}
      </div>

      {/* Textarea */}
      <div
        className="rounded-xl p-4 mb-4"
        style={{
          background: "#ECF0F3",
          boxShadow:
            "inset 6px 6px 16px rgba(193,201,210,0.5), inset -6px -6px 14px rgba(255,255,255,0.8)",
        }}
      >
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value.slice(0, charLimit))}
          className="w-full bg-transparent text-sm focus:outline-none resize-none text-[#2D3748]"
        />
      </div>

      {/* Emoji Row + Actions */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex gap-1">
          {emojis.map((em) => (
            <button
              key={em}
              onClick={() => insertEmoji(em)}
              className="text-lg hover:scale-110 transition"
            >
              {em}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={copyMsg}
            className="px-4 py-2 text-xs rounded-lg bg-[#ECF0F3] text-[#2D3748]"
            style={{
              boxShadow:
                "6px 6px 16px rgba(193,201,210,0.5), -6px -6px 12px rgba(255,255,255,0.8)",
            }}
          >
            {copied ? "Copied" : "Copy"}
          </button>

          <button
            onClick={() => {
              setMessage(defaultMessage || templates[0]);
              setSelectedTemplate(null);
            }}
            className="px-4 py-2 text-xs rounded-lg bg-[#ECF0F3] text-[#2D3748]"
            style={{
              boxShadow:
                "6px 6px 16px rgba(193,201,210,0.5), -6px -6px 12px rgba(255,255,255,0.8)",
            }}
          >
            Reset
          </button>
        </div>
      </div>

      {/* WhatsApp Primary Button */}
      <button
        onClick={openWhatsApp}
        className="
          w-full py-3 rounded-full text-white font-semibold text-base
          flex items-center justify-center gap-2 active:scale-[0.98] transition
        "
        style={{
          background: "#25D366",
          boxShadow: "0 12px 28px rgba(37,211,102,0.4)",
        }}
      >
        <WhatsappIcon className="w-5 h-5" />
        Open WhatsApp
      </button>
    </div>
  );
}

/* -------------------------------- Main Component -------------------------------- */
export default function WorkInProgressBooking() {
  const [isHovering, setIsHovering] = useState(false);
  const [particles, setParticles] = useState([]);
  const [whatsappOpen, setWhatsappOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const whatsappNumber = "+919910220335";
  const calendlyUrl = "https://calendly.com/arlox-/strategy-call-1";

  const colors = {
    bg: "#ECF0F3",
    textMain: "#2D3748",
    textSub: "#718096",
    accent: "#E53E3E",
    accentBlue: "#3B82F6",
    shadowDark: "#C1C9D2",
    shadowLight: "#FFFFFF"
  };

  useEffect(() => {
    setMounted(true);
    setParticles(
      [...Array(20)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  useEffect(() => {
    if (whatsappOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [whatsappOpen]);

  useEffect(() => {
    if (!whatsappOpen) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") setWhatsappOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [whatsappOpen]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  const openCalendly = () => {
    window.open(calendlyUrl, "_blank", "noopener,noreferrer");
  };

  const whatsappModal = whatsappOpen ? (
    <div
      className="fixed inset-0 flex items-center justify-center p-6"
      style={{ zIndex: 9999 }}
    >
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setWhatsappOpen(false)}
      />

      <div className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div
          className="rounded-3xl p-6 bg-[#ECF0F3]"
          style={{
            boxShadow:
              "16px 20px 48px rgba(193,201,210,0.8), -12px -12px 34px rgba(255,255,255,0.9)",
          }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-[#2D3748]">
              Message Us on WhatsApp
            </h2>

            <button
              className="p-2 rounded-lg hover:bg-white/40 transition"
              onClick={() => setWhatsappOpen(false)}
            >
              <X size={20} className="text-[#2D3748]" />
            </button>
          </div>

          <WhatsAppComposer
            phoneNumber={whatsappNumber}
            defaultMessage="Hi — I'd like to book a strategy call while the site is being built!"
            onOpen={() => setWhatsappOpen(false)}
          />
        </div>
      </div>
    </div>
  ) : null;

  return (
    <div 
      style={{ backgroundColor: colors.bg }}
      className="relative flex items-center justify-center min-h-screen w-full overflow-hidden font-sans select-none p-4"
    >
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-gray-300 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 w-full max-w-7xl grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* LEFT SIDE: Oscar the Cat */}
        <motion.div 
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <motion.div
              className="inline-flex items-center gap-2 sm:gap-3 mb-4 px-4 sm:px-6 py-2 sm:py-3 rounded-full"
              style={{
                backgroundColor: colors.bg,
                boxShadow: `6px 6px 12px ${colors.shadowDark}, -6px -6px 12px ${colors.shadowLight}`,
              }}
            >
              <Wrench className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: colors.accent }} />
              <span style={{ color: colors.accent }} className="text-xs sm:text-sm font-bold uppercase tracking-wider">
                Work In Progress
              </span>
            </motion.div>
            
            <motion.h2 
              style={{ 
                color: colors.textMain,
                textShadow: `2px 2px 4px ${colors.shadowDark}, -1px -1px 2px ${colors.shadowLight}`
              }}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-3"
            >
              Oscar is Guarding
            </motion.h2>
            <p style={{ color: colors.textSub }} className="text-sm sm:text-base md:text-lg font-medium">
              While we build something amazing
            </p>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{ perspective: 1000 }}
          >
            <motion.div
              className="relative rounded-full group"
              style={{ 
                boxShadow: isHovering 
                  ? `20px 20px 40px ${colors.shadowDark}, -20px -20px 40px ${colors.shadowLight}` 
                  : `15px 15px 30px ${colors.shadowDark}, -15px -15px 30px ${colors.shadowLight}`,
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              animate={{ 
                scale: isHovering ? [1, 1.02, 1] : [1, 1.015, 1],
              }}
              transition={{ 
                scale: { duration: isHovering ? 0.8 : 4, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              {isHovering && (
                <motion.div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  animate={{
                    boxShadow: [`0 0 0px ${colors.accent}`, `0 0 40px ${colors.accent}`, `0 0 0px ${colors.accent}`]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}

              <video 
                ref={videoRef} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] object-cover rounded-full mix-blend-multiply pointer-events-none relative z-10"
              >
                <source src="/Cat_Playing_With_Ball_Animation.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>

          <motion.div
            className="px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase"
            style={{
              backgroundColor: colors.bg,
              color: colors.textSub,
              boxShadow: `inset 4px 4px 8px ${colors.shadowDark}, inset -4px -4px 8px ${colors.shadowLight}`,
            }}
            animate={{
              boxShadow: [
                `inset 4px 4px 8px ${colors.shadowDark}, inset -4px -4px 8px ${colors.shadowLight}`,
                `inset 6px 6px 12px ${colors.shadowDark}, inset -6px -6px 12px ${colors.shadowLight}`,
                `inset 4px 4px 8px ${colors.shadowDark}, inset -4px -4px 8px ${colors.shadowLight}`,
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Oscar Protocol: Active
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE: Booking Interface */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div
            className="rounded-3xl p-6 sm:p-8"
            style={{
              backgroundColor: colors.bg,
              boxShadow: `16px 16px 32px ${colors.shadowDark}, -16px -16px 32px ${colors.shadowLight}`,
            }}
          >
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6" style={{ color: colors.accentBlue }} />
                <h3 style={{ color: colors.textMain }} className="text-2xl sm:text-3xl font-bold">
                  Book Your Call
                </h3>
              </div>
              <p style={{ color: colors.textSub }} className="text-sm sm:text-base leading-relaxed">
                Our site is under construction, but we're still here for you! Book a strategy call while Oscar keeps watch.
              </p>
            </div>

            <motion.div 
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span style={{ color: colors.textSub }} className="text-xs font-semibold">
                  Site Progress
                </span>
                <span style={{ color: colors.accentBlue }} className="text-xs font-bold">
                  45%
                </span>
              </div>
              <div 
                className="h-2 rounded-full overflow-hidden"
                style={{
                  backgroundColor: colors.bg,
                  boxShadow: `inset 3px 3px 6px ${colors.shadowDark}, inset -3px -3px 6px ${colors.shadowLight}`,
                }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: colors.accentBlue }}
                  initial={{ width: 0 }}
                  animate={{ width: '45%' }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                />
              </div>
            </motion.div>

            <div className="space-y-4">
              {/* Calendly Button */}
              <motion.button
                onClick={openCalendly}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 rounded-2xl font-bold text-white shadow-lg transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
                style={{ backgroundColor: colors.accentBlue }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span className="text-base sm:text-lg">Schedule Strategy Call</span>
              </motion.button>

              {/* WhatsApp Button */}
              <motion.button
                onClick={() => setWhatsappOpen(true)}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 group"
                style={{ 
                  backgroundColor: colors.bg,
                  color: colors.textMain,
                  boxShadow: `8px 8px 16px ${colors.shadowDark}, -8px -8px 16px ${colors.shadowLight}`
                }}
              >
                <WhatsappIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span className="text-base sm:text-lg">Message on WhatsApp</span>
              </motion.button>
            </div>

            <motion.div
              className="mt-6 p-4 rounded-xl"
              style={{
                backgroundColor: colors.bg,
                boxShadow: `inset 4px 4px 8px ${colors.shadowDark}, inset -4px -4px 8px ${colors.shadowLight}`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <p style={{ color: colors.textSub }} className="text-xs sm:text-sm text-center leading-relaxed">
                💡 <span className="font-semibold">Pro Tip:</span> Book now and get early access when we launch!
              </p>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* WhatsApp Modal */}
      {mounted && whatsappModal && createPortal(whatsappModal, document.body)}
    </div>
  );
}

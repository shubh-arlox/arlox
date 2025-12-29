"use client"
import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SimpleFAQSection = ({
  faqs = [],
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about our services.",
  badgeText = "FAQ",
  badgeIcon = MessageCircle,
  avatars = [],
  showAvatars = true,
  className = ""
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Neumorphic styles
  const neuPressed = "bg-[#E0E5EC] shadow-[inset_6px_6px_12px_#bec3ca,inset_-6px_-6px_12px_#ffffff]";
  const faqFlat = "bg-[#E0E5EC] shadow-[6px_6px_12px_#bec3ca,-6px_-6px_12px_#ffffff]";

  const BadgeIcon = badgeIcon;

  return (
    <section className={`relative w-full bg-[#E0E5EC] text-slate-600 font-sans py-16 md:py-24 overflow-hidden ${className}`}>
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-[10%] right-[-10%] w-[40vw] h-[40vw] bg-slate-300/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-slate-300/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-4xl">
        
        {/* HEADER */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center items-center mb-6">
            <div className={`${neuPressed} inline-flex items-center gap-1.5 px-5 py-2 rounded-full`}>
              <BadgeIcon size={12} className="text-slate-600" />
              <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">
                {badgeText}
              </span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            {subtitle}
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-6">
          
          {faqs.map((faq, i) => {
            const isOpen = activeIndex === i;
            const avatarIndex = (avatars.length > 0) ? i % avatars.length : 0;
            const hasAvatars = showAvatars && avatars.length > 0;

            return (
              <motion.div
                key={i}
                layout
                onClick={() => toggleFAQ(i)}
                className={`
                  p-6 md:p-8 rounded-2xl cursor-pointer transition-all duration-300
                  ${isOpen ? neuPressed : faqFlat}
                `}
              >
                {/* Question Header */}
                <div className="flex justify-between items-start gap-4">
                  <h4 className={`
                    font-bold transition-colors duration-300 flex items-start gap-3 
                    text-base md:text-lg leading-tight
                    ${isOpen ? 'text-slate-900' : 'text-slate-700'}
                  `}>
                    <HelpCircle className={`
                      w-6 h-6 mt-0.5 shrink-0 transition-colors
                      ${isOpen ? 'text-blue-600' : 'text-slate-400'}
                    `} />
                    {faq.q}
                  </h4>
                  
                  <motion.div 
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="text-slate-400 shrink-0"
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6" />
                  </motion.div>
                </div>

                {/* Answer Area */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`pt-6 ${hasAvatars ? 'pl-0 md:pl-8 flex gap-3 md:gap-5 items-start' : ''}`}>
                        
                        {/* Avatar (Optional) */}
                        {hasAvatars && (
                          <motion.div 
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ 
                              type: "spring", 
                              stiffness: 260, 
                              damping: 20,
                              delay: 0.05
                            }}
                            className="shrink-0 relative hidden sm:block"
                          >
                            <img 
                              src={avatars[avatarIndex]} 
                              alt="Expert" 
                              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#E0E5EC] shadow-md object-cover"
                            />
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#E0E5EC] rounded-full"></div>
                          </motion.div>
                        )}

                        {/* Answer Text - Changed wrapper from motion.div containing <p> to motion.div containing children directly */}
                        <motion.div 
                          initial={{ x: hasAvatars ? -10 : 0, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.15 }}
                          className={`
                            text-sm md:text-base text-slate-700 leading-relaxed flex-1
                            ${hasAvatars 
                              ? 'bg-white/40 p-5 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl border border-white/50' 
                              : 'pl-0 md:pl-8'
                            }
                          `}
                        >
                          {/* Render rich content directly */}
                          {faq.a}
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SimpleFAQSection;
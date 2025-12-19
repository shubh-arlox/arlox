"use client"
import React, { useState } from 'react';
import { 
  GitFork, 
  TrendingUp, 
  AlertCircle, 
  Zap, 
  Calendar, 
  HelpCircle,
  ChevronDown,
  User,
  TableOfContents
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CalendlyCTA from '@/components/CalendlyCTA';
import GlassButton from '@/components/but';

// WhatsApp Icon Component
const WhatsAppIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

// WhatsApp Composer Component
const WhatsAppComposer = ({ phoneNumber, onClose }) => {
  const templates = [
    "Hi — I'd like to book a strategy call about growth.",
    "Hey team — I'm interested in your Scientific Positioning service.",
    "Hello — I want a quick audit of my ads and creative strategy.",
  ];
  const emojis = ["🚀", "📈", "💬", "🤝", "⚡"];

  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [message, setMessage] = useState(templates[0]);
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
    window.open(url, "_blank", "noopener,noreferrer");
    if (onClose) onClose();
  };

  return (
    <div
      className="p-6 rounded-2xl bg-[#E0E5EC]"
      style={{
        boxShadow:
          "12px 16px 36px rgba(190,195,202,0.6), -10px -10px 28px rgba(255,255,255,0.8)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 flex items-center justify-center rounded-full"
            style={{
              background: "#E0E5EC",
              boxShadow:
                "inset 6px 6px 16px rgba(190,195,202,0.5), inset -6px -6px 16px rgba(255,255,255,0.8)",
            }}
          >
            <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-700">
              Message on WhatsApp
            </p>
            <p className="text-xs text-slate-500">
              Choose a template or write your message
            </p>
          </div>
        </div>

        <p className="text-xs text-slate-500">{message.length}/600</p>
      </div>

      {/* Templates */}
      <div className="flex flex-wrap gap-2 mb-4">
        {templates.map((t, idx) => (
          <button
            key={idx}
            onClick={() => {
              setSelectedTemplate(t);
              setMessage(t);
            }}
            className={`
              px-4 py-1.5 rounded-full text-xs transition-all
              ${
                selectedTemplate === t
                  ? "text-white bg-slate-700 shadow-md"
                  : "bg-[#E0E5EC] text-slate-700 shadow-[4px_4px_8px_#bec3ca,-4px_-4px_8px_#ffffff]"
              }
            `}
          >
            {t.length > 38 ? t.slice(0, 38) + "…" : t}
          </button>
        ))}
      </div>

      {/* Textarea */}
      <div
        className="rounded-xl p-4 mb-4"
        style={{
          background: "#E0E5EC",
          boxShadow:
            "inset 6px 6px 16px rgba(190,195,202,0.5), inset -6px -6px 14px rgba(255,255,255,0.8)",
        }}
      >
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value.slice(0, charLimit))}
          className="w-full bg-transparent text-sm focus:outline-none resize-none text-slate-700"
          placeholder="Type your message..."
        />
      </div>

      {/* Emoji Row + Actions */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex gap-1">
          {emojis.map((em) => (
            <button
              key={em}
              onClick={() => insertEmoji(em)}
              className="text-lg hover:scale-110 transition-transform"
            >
              {em}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={copyMsg}
            className="px-4 py-2 text-xs rounded-lg bg-[#E0E5EC] text-slate-700 font-semibold shadow-[4px_4px_8px_#bec3ca,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3ca,inset_-2px_-2px_4px_#ffffff] transition-all"
          >
            {copied ? "✓ Copied" : "Copy"}
          </button>

          <button
            onClick={() => {
              setMessage(templates[0]);
              setSelectedTemplate(null);
            }}
            className="px-4 py-2 text-xs rounded-lg bg-[#E0E5EC] text-slate-700 font-semibold shadow-[4px_4px_8px_#bec3ca,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3ca,inset_-2px_-2px_4px_#ffffff] transition-all"
          >
            Reset
          </button>
        </div>
      </div>

      {/* WhatsApp Primary Button */}
      <button
        onClick={openWhatsApp}
        className="
          w-full py-3 rounded-xl text-white font-semibold text-base
          flex items-center justify-center gap-2 active:scale-[0.98] transition-all
          bg-[#25D366] hover:bg-[#20BA5A] shadow-lg hover:shadow-xl
        "
      >
        <WhatsAppIcon className="w-5 h-5" />
        Open WhatsApp
      </button>
    </div>
  );
};

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  const WHATSAPP_NUMBER = "919910220335"; // Replace with actual number

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Neumorphic styles
  const neuOuter = "bg-[#E0E5EC] shadow-[8px_8px_16px_#bec3ca,-8px_-8px_32px_#ffffff]";
  const neuInner = "bg-[#E0E5EC] shadow-[inset_6px_6px_12px_#bec3ca,inset_-6px_-6px_12px_#ffffff]";
  const neuPressed = "bg-[#E0E5EC] shadow-[inset_4px_4px_8px_#bec3ca,inset_-4px_-4px_8px_#ffffff] border border-slate-200";
  const faqFlat = "bg-[#E0E5EC] shadow-[6px_6px_12px_#bec3ca,-6px_-6px_12px_#ffffff]";

  // Multiple avatar images for variety
  const avatars = [
    "/unnamed.jpg",
    "/avatar2.jpg",
    "/avatar3.jpg",
    "/avatar4.jpg",
    "/avatar5.jpg"
  ];

  const faqs = [
    { 
      q: "This sounds complicated. Do I need to understand all the framework details?",
      a: "No. We handle the complexity. You approve strategic direction and review results. The framework runs in the background. Think of it like driving: You don't need to understand engine mechanics. You just need to know where you're going. Your involvement is only 7-10 hours total over 4 weeks—mostly approvals and strategic input.",
      avatar: 0
    },
    { 
      q: "What if none of the angles work?",
      a: "With 3-5 angles tested (27-45 hooks total), statistical probability of finding no winners is <5%. But if it happens, the data tells us why—and we iterate with new angle hypotheses. You learn what doesn't resonate before spending big on production and inventory. That's the point: Fail cheap at $2-5K, not at $50-200K with dead inventory.",
      avatar: 1
    },
    { 
      q: "How is this different from hiring a good creative strategist?",
      a: "A talented strategist might develop 1-2 strong angle ideas based on intuition and experience. We systematically test 3-5 strategic frameworks with 9 variations each, backed by data. Then we prove which one works before you scale. We don't just create smart hypotheses—we prove which ones drive revenue. Intuition + data > intuition alone.",
      avatar: 2
    },
    { 
      q: "Won't audiences get fatigued seeing multiple variations?",
      a: "No. We deploy controlled budgets ($50-100 per hook). Total audience overlap is minimal during testing phase (<15%). Once we identify winners, we kill underperformers immediately. Your audience sees your best work, not test failures. The testing phase is short (2-3 weeks) with low budgets. Only proven winners scale to your full audience.",
      avatar: 0
    },
    { 
      q: "What if my brand already has established positioning? Why test angles?",
      a: "Established brand positioning is your strategic north star. Angles are tactical positioning at the campaign level. Nike's brand is 'athletic inspiration,' but campaign angles vary: 'Just Do It' (empowerment), 'Find Your Greatness' (inclusivity), 'Dream Crazy' (rebellion). Your brand can (and should) test multiple angles within your positioning umbrella. We're not changing who you are—we're finding the most effective way to communicate it.",
      avatar: 3
    },
    { 
      q: "This feels like a lot of content production. Do I need a huge creative team?",
      a: "No. Our AI-accelerated production handles 80% of the heavy lifting. You need: Product images/mockups, brand guidelines, and strategic input (3-4 hours workshop). We handle video production, model/lifestyle contexts, text animations, audio mixing, and all variations. Traditional approach = 80 hours of your team's time. Arlox approach = 5 hours of your time for approvals only.",
      avatar: 1
    },
    { 
      q: "How long does the testing phase take?",
      a: "The complete cycle is 4-6 weeks: Week 1: Strategic workshop and angle development. Week 2-3: Hook production and launch. Week 3-4: Data collection and analysis. Week 5-6: Winner identification and scale preparation. You get actionable results within a month, not 6 months of guessing.",
      avatar: 4
    },
    { 
      q: "What's the minimum budget required?",
      a: "Testing phase: $2,000-$5,000 total ($50-100 per hook variation). This covers 27-45 hook tests across 3-5 angles. After winners are identified, scale budgets are determined by your growth goals—typically starting at $10K-$20K/month for proven winners. The testing investment is tiny compared to traditional product launch budgets.",
      avatar: 2
    },
    { 
      q: "What if I'm a solo founder with limited resources?",
      a: "That's exactly who this is for. You don't need a creative team, a production agency, or a six-figure ad budget. Our AI handles production. Our strategists guide the framework. You provide product knowledge and approval. 60% of our clients are solo founders or small teams (2-5 people). The framework makes enterprise-level testing accessible.",
      avatar: 0
    },
    { 
      q: "How do I know which metrics actually matter?",
      a: "We track everything, but focus on what drives revenue: Hook Rate (% who watch 3+ seconds), Hold Rate (% who watch to end), CTR (Click-Through Rate), CPA (Cost Per Acquisition), and ROAS (Return on Ad Spend). We simplify the data into clear winner/loser signals. You don't need to be a data scientist—we translate insights into strategic actions.",
      avatar: 3
    },
    { 
      q: "Can this work for physical products or just digital?",
      a: "Both. 70% of our clients are physical product brands (fashion, beauty, home goods, food/beverage). The framework works for anything with a visual identity and target audience. If you can photograph or mockup your product, we can test angles for it. Digital products and services work too—we've done SaaS, coaching, and online courses.",
      avatar: 1
    },
    { 
      q: "What if my product isn't ready yet? Can I test pre-launch?",
      a: "Yes—and you should. Pre-launch angle testing is one of the smartest moves. Test angles before you finalize product design, positioning, or inventory orders. Learn what resonates before committing $50K+ to production. Use mockups, prototypes, or competitor proxies. Validate demand before you build. That's de-risking at its finest.",
      avatar: 4
    },
    { 
      q: "Do you guarantee specific ROAS results?",
      a: "No one can ethically guarantee ROAS—too many variables (product quality, pricing, fulfillment, market conditions). What we guarantee: A systematic testing process, clear data on what works, and strategic recommendations based on results. Our average client sees 3-5x improvement over their baseline, but your results depend on execution beyond creative (offer, pricing, customer experience).",
      avatar: 2
    },
    { 
      q: "What happens after we find winning angles?",
      a: "You scale them. We provide the winning hooks, performance data, and strategic playbook. You can: Run them yourself on your ad accounts, hire a media buyer to scale (we can recommend partners), or work with us on ongoing creative iteration (new variations, seasonal updates, competitive responses). The framework doesn't end—it evolves as your brand grows.",
      avatar: 0
    },
    { 
      q: "How is this different from traditional market research?",
      a: "Market research asks people what they think. We test what they actually do. Surveys lie. Behavior doesn't. Focus groups tell you what sounds good in a conference room. Hook testing shows you what drives clicks, engagement, and purchases in the wild. We're not asking opinions—we're measuring actions with real ad spend and real audiences.",
      avatar: 3
    },
    { 
      q: "What if I already have a creative agency?",
      a: "Perfect. We complement agencies, not replace them. Agencies produce beautiful assets—we tell them which strategic angles to produce. Many of our clients keep their agency for brand campaigns and use our framework for performance creative testing. Think of us as the R&D lab that de-risks your agency's creative investments. They'll love you for giving them data-backed direction instead of subjective feedback.",
      avatar: 1
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#E0E5EC] text-slate-600 font-sans py-24 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-[10%] right-[-10%] w-[40vw] h-[40vw] bg-slate-300/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-slate-300/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <div className={`${neuPressed} inline-flex items-center gap-1.5 px-5 py-2 rounded-full`}>
              <TableOfContents size={12} className="text-slate-600" />
              <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">
                FAQ
              </span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-slate-800 tracking-tight mb-4">
            The Silent Objections
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We've done this 50+ times. These are the questions you're not asking out loud.
          </p>
        </div>

        {/* FAQ GRID */}
        <div className="max-w-5xl mx-auto space-y-4 mb-20">
          {faqs.map((faq, i) => {
            const isOpen = activeIndex === i;
            const avatarIndex = faq.avatar % avatars.length;

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
                  <h4 className={`font-bold transition-colors duration-300 flex items-start gap-3 text-sm md:text-base ${isOpen ? 'text-slate-800' : 'text-slate-700'}`}>
                    <HelpCircle className={`w-5 h-5 mt-0.5 shrink-0 transition-colors ${isOpen ? 'text-slate-700' : 'text-slate-400'}`} />
                    {faq.q}
                  </h4>
                  
                  <motion.div 
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="text-slate-400 shrink-0"
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </div>

                {/* Answer Area with Dynamic Avatar */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="pt-6 pl-0 md:pl-8 flex gap-3 md:gap-4 items-start">
                        {/* Avatar Image - Changes per FAQ */}
                        <motion.div 
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 260, 
                            damping: 20,
                            delay: 0.05
                          }}
                          className="shrink-0 relative"
                        >
                          <img 
                            src={avatars[avatarIndex]} 
                            alt="Team Expert" 
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#E0E5EC] shadow-md object-cover"
                          />
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#E0E5EC] rounded-full"></div>
                        </motion.div>

                        {/* Answer Text Bubble */}
                        <motion.div 
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.15 }}
                          className="text-sm md:text-base text-slate-700 bg-white/50 p-4 md:p-5 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl leading-relaxed shadow-sm flex-1"
                        >
                          <p>{faq.a}</p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-24">
           
           {/* Left Context */}
           <div className="lg:col-span-5 space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
                Still Have Questions?
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium text-base">
                 Book a free 45-minute strategy session. We'll walk through your specific situation, 
                 answer your concerns, and show you exactly how the framework applies to your brand.
              </p>
              
              <div className="space-y-4">
                 <StepRow num="01" text="Book Free Strategy Call" />
                 <StepRow num="02" text="Discuss Your Brand & Goals" />
                 <StepRow num="03" text="Get Custom Recommendations" />
                 <StepRow num="04" text="Decide If It's Right For You" />
              </div>

              {/* Trust Indicators */}
              <div className={`p-6 rounded-2xl ${neuInner} mt-8`}>
                 <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                       <TrendingUp className="text-green-600" size={20} />
                    </div>
                    <div>
                       <div className="text-sm font-bold text-slate-800 mb-1">Zero Pressure Consultation</div>
                       <div className="text-xs text-slate-600">We'll tell you honestly if this is a fit for your stage and goals.</div>
                    </div>
                 </div>
              </div>
           </div>

           {/* Right Card - Centered Buttons */}
           <div className="lg:col-span-7 flex items-center justify-center">
              <div className={`rounded-[2.5rem] ${neuOuter} p-8 lg:p-12 relative overflow-hidden w-full max-w-2xl`}>
                 
                 {/* Decorative BG Icon */}
                 <div className="absolute -top-10 -right-10 text-slate-300/10 transition-colors duration-500 pointer-events-none transform rotate-12">
                    <Calendar size={240} />
                 </div>

                 <div className="relative z-10">
                    <div className="text-center mb-8">
                       <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${neuInner} text-slate-700 text-[10px] font-bold uppercase mb-6`}>
                          <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                          Limited Consultation Slots
                       </div>
                       
                       <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3 leading-tight">
                         Let's Talk Strategy
                       </h3>
                       <p className="text-slate-600 font-medium">
                         45-minute deep dive into your specific questions and brand goals.
                       </p>
                    </div>

                    <div className="max-w-md mx-auto flex flex-col items-center gap-4 text-center">
                       {/* Primary CTA */}
                       <CalendlyCTA calendlyUrl="https://calendly.com/arlox-/strategy-call-1">
                         <GlassButton 
                           label="Book Free Strategy Call"
                           icon={Calendar}
                           buttonClassName="px-8 py-4 text-base w-full sm:w-auto"
                         />
                       </CalendlyCTA>

                       {/* Divider */}
                       <div className="relative w-full py-2">
                         <div className="absolute inset-0 flex items-center">
                           <div className="w-full border-t border-slate-300" />
                         </div>
                         <div className="relative flex justify-center">
                           <span className={`px-3 py-1 ${neuOuter} text-slate-500 font-bold tracking-wider text-xs uppercase`}>
                             Or message us directly
                           </span>
                         </div>
                       </div>

                       {/* Secondary CTA */}
                       <GlassButton
                         label="Message on WhatsApp"
                         icon={WhatsAppIcon}
                         buttonClassName="px-8 py-4 text-base w-full sm:w-auto"
                         onClick={() => setShowWhatsAppModal(true)}
                       />
                    </div>
                 </div>
              </div>
           </div>

        </div>

      </div>

      {/* WhatsApp Modal */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="max-w-lg w-full">
            <div className="relative">
              <button 
                onClick={() => setShowWhatsAppModal(false)}
                className="absolute -top-4 -right-4 z-10 w-10 h-10 rounded-full bg-white text-slate-600 hover:text-slate-800 transition-colors shadow-lg flex items-center justify-center font-bold text-xl"
              >
                ✕
              </button>
              <WhatsAppComposer 
                phoneNumber={WHATSAPP_NUMBER}
                onClose={() => setShowWhatsAppModal(false)}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Sub-components
const StepRow = ({ num, text }) => {
   const neuInner = "bg-[#E0E5EC] shadow-[inset_3px_3px_6px_#bec3ca,inset_-3px_-3px_6px_#ffffff]";
   
   return (
     <div className="flex items-center gap-5 group">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${neuInner} text-slate-500 text-xs font-bold group-hover:text-slate-800 transition-colors`}>
           {num}
        </div>
        <span className="text-slate-600 font-medium text-sm group-hover:text-slate-800 transition-colors">{text}</span>
     </div>
   );
};

export default FAQSection;

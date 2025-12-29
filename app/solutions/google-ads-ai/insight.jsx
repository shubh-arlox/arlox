"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, Search, Video, Eye, Sparkles, 
  Globe, Mail, TrendingUp, AlertCircle, Info,
  ChevronRight, Zap, Camera, Target, BarChart3,
  Layers, Users, ChevronDown
} from 'lucide-react';
import { fadeIn } from './SharedUI';

const WhyBrandsFailSection = () => {
  const [selectedSegment, setSelectedSegment] = useState(null);
  const [viewMode, setViewMode] = useState('traffic');
  const [expandedTruth, setExpandedTruth] = useState(1);

  // Neumorphic styles
  const shadowExtruded = "shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff]";
  const shadowPressed = "shadow-[inset_6px_6px_12px_#d1d9e6,inset_-6px_-6px_12px_#ffffff]";

  const segments = [
    {
      id: 1,
      name: "Shopping",
      traffic: 22,
      icon: <ShoppingBag size={20} />,
      color: "#f59e0b",
      gradient: "from-amber-400 to-amber-600",
      coverage92: 18,
      coverage8: 72,
      gap: "4x",
      revenueAt150k: { avg: 76000, top: 304000 },
      strategy: "Superior feed quality (10x more images, Product Highlights), win more auctions at lower CPCs"
    },
    {
      id: 2,
      name: "Search",
      traffic: 16,
      icon: <Search size={20} />,
      color: "#3b82f6",
      gradient: "from-blue-400 to-blue-600",
      coverage92: 20,
      coverage8: 52,
      gap: "2.6x",
      revenueAt150k: { avg: 64000, top: 166400 },
      strategy: "Capture branded searches created by Demand Gen (low CPC, high conversion)"
    },
    {
      id: 3,
      name: "YouTube",
      traffic: 24,
      icon: <Video size={20} />,
      color: "#ef4444",
      gradient: "from-red-400 to-red-600",
      coverage92: 2,
      coverage8: 42,
      gap: "21x",
      revenueAt150k: { avg: 9600, top: 201600 },
      strategy: "Produce 15-20 Shorts/week, dominate fastest-growing Google surface"
    },
    {
      id: 4,
      name: "Lens",
      traffic: 18,
      icon: <Eye size={20} />,
      color: "#8b5cf6",
      gradient: "from-purple-400 to-purple-600",
      coverage92: 4,
      coverage8: 58,
      gap: "14.5x",
      revenueAt150k: { avg: 14400, top: 209000 },
      strategy: "10-12 images per product optimized for visual matching"
    },
    {
      id: 5,
      name: "AI Overviews",
      traffic: 12,
      icon: <Sparkles size={20} />,
      color: "#10b981",
      gradient: "from-emerald-400 to-emerald-600",
      coverage92: 5,
      coverage8: 50,
      gap: "10x",
      revenueAt150k: { avg: 12000, top: 120000 },
      strategy: "Product Highlights, reviews, rich data that AI cites"
    },
    {
      id: 6,
      name: "Discover",
      traffic: 5,
      icon: <Globe size={20} />,
      color: "#f97316",
      gradient: "from-orange-400 to-orange-600",
      coverage92: 1,
      coverage8: 28,
      gap: "28x",
      revenueAt150k: { avg: 1000, top: 28000 },
      strategy: "Run Demand Gen campaigns that serve to Discover"
    },
    {
      id: 7,
      name: "Gmail",
      traffic: 3,
      icon: <Mail size={20} />,
      color: "#ec4899",
      gradient: "from-pink-400 to-pink-600",
      coverage92: 1,
      coverage8: 23,
      gap: "23x",
      revenueAt150k: { avg: 600, top: 13800 },
      strategy: "Use Demand Gen carousel ads in Gmail promotional tabs"
    }
  ];

  const totalCoverage92 = 6.8;
  const totalCoverage8 = 29.9;
  const totalRevenue92 = 510000;
  const totalRevenue8 = 2250000;

  const formatCurrency = (val) => {
    if (val >= 1000000) return `$${(val / 1000000).toFixed(2)}M`;
    if (val >= 1000) return `$${(val / 1000).toFixed(0)}K`;
    return `$${val}`;
  };

  const truths = [
    {
      id: 1,
      title: "The Algorithm Doesn't Optimize Keywords Anymore—It Optimizes Visual Intent",
      icon: <Camera size={24} />,
      color: "blue",
      sections: [
        {
          subtitle: "The 92% Mistake:",
          content: "They still think Google Ads is about 'keyword targeting.' They obsess over search terms reports, negative keywords, match types. They believe winning = finding the 'perfect keyword.'"
        },
        {
          subtitle: "The 2025 Reality:",
          content: "Google's algorithm is now image-first, not text-first. Here's what actually happens when someone searches:",
          comparison: {
            old: {
              title: "Old Google (Pre-2023)",
              points: [
                "User types 'red silk dress'",
                "Google matches TEXT in your product title",
                "Shows your Shopping ad"
              ]
            },
            new: {
              title: "New Google (2025)",
              points: [
                "User types 'red silk dress'",
                "Google's AI analyzes your product images (color, style, fabric texture via Google Lens)",
                "Your product context (Product Highlights: 'Perfect for cocktail parties')",
                "User's behavioral history (previously searched 'wedding guest outfit' → AI infers intent)",
                "Visual similarity to products user engaged with"
              ]
            }
          }
        },
        {
          subtitle: "The Math:",
          stats: [
            { label: "Brand A (Text-Optimized)", desc: "Perfect keyword-stuffed titles, 2 images per product", result: "Reaches 180K people/month on $60K spend" },
            { label: "Brand B (Visual-Optimized)", desc: "Decent titles, 12 images per product (angles, lifestyle, video)", result: "Reaches 850K people/month on $60K spend" }
          ],
          insight: "Same budget. 4.7x more reach. Why? Google's AI has 6x more visual data to match users to Brand B's products."
        },
        {
          subtitle: "The Brutal Truth:",
          breakdown: [
            "40% of fashion searches are now image-based (Lens, Circle to Search)",
            "28% of searches go through AI Overviews (which favor rich product data)",
            "Your text-only optimization captures: The remaining 32% (traditional Shopping/Search)",
            "The 8% who dominate: They treat Google Ads as a visual discovery engine, not a keyword auction"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Search Volume Has a Ceiling (And You've Already Hit It)",
      icon: <BarChart3 size={24} />,
      color: "violet",
      sections: [
        {
          subtitle: "The 92% Mistake:",
          content: "They keep scaling Shopping/Search budget, expecting linear growth. 'If we hit $200K revenue at $50K spend, we'll hit $600K at $150K spend!'"
        },
        {
          subtitle: "The Math Doesn't Work:",
          example: {
            category: "Women's Linen Dresses",
            searches: "12,400 monthly searches (US)",
            capture: "15-20% = 1,860-2,480 clicks/month",
            revenue: "$6,700-8,930 revenue max from Search",
            problem: "To hit $500K/month: You'd need to capture 1,389% more Search traffic than exists"
          }
        },
        {
          subtitle: "What Happens When You Scale Anyway:",
          scenarios: [
            { option: "A", action: "Bid higher for same searches", result: "CPC: $1.90 → $4.20 → CAC explodes, ROAS crashes" },
            { option: "B", action: "Google shows ads for broader searches", result: "CTR collapses, wasted spend" }
          ],
          plateau: "Most Shopping-only brands hit their ceiling at $150-300K/month revenue"
        },
        {
          subtitle: "How the 8% Break the Ceiling:",
          flywheel: [
            { week: 1, event: "Launch Demand Gen Shorts ('5 Ways to Style a Linen Dress')" },
            { week: 2, event: "340K views, 0 immediate sales (top-of-funnel awareness)" },
            { week: 3, event: "Branded searches spike 180% ('[Your Brand] linen dress')" },
            { week: 4, event: "Shopping captures branded searches at $0.65 CPC (vs. $2.10) → 6.2x ROAS" }
          ],
          caseStudy: {
            before: "Brand stuck at $180K/mo (Shopping-only): Captured 18% of available search volume",
            after: "Same brand after Demand Gen (Month 4): Revenue $520K/mo → Created 15,800 NEW branded searches"
          }
        }
      ]
    },
    {
      id: 3,
      title: "Your Feed IS Your Creative (And Yours Is Mediocre)",
      icon: <Layers size={24} />,
      color: "orange",
      sections: [
        {
          subtitle: "The 92% Mistake:",
          content: "They think 'creative' means ad copy and headlines. They spend hours A/B testing text. They ignore their product feed."
        },
        {
          subtitle: "The 2025 Reality:",
          reality: [
            "Performance Max doesn't use your ad copy 90% of the time",
            "It dynamically generates ads from your feed data:",
            "• Your product images become the visual",
            "• Your Product Highlights become the bullet points",
            "• Your title becomes the headline",
            "Translation: If your feed is mediocre (2-3 images, no highlights), your ads are mediocre"
          ]
        },
        {
          subtitle: "The Competitive Audit (Real Data):",
          audit: [
            { tier: "Bottom 50%", brands: "50%", images: "2.3", highlights: "12%", mer: "2.9x" },
            { tier: "Middle 42%", brands: "42%", images: "4.7", highlights: "48%", mer: "3.8x" },
            { tier: "Top 8%", brands: "8%", images: "11.2", highlights: "94%", mer: "5.4x" }
          ],
          gap: "Top 8% have 4.9x more images per product than bottom 50%. Result: 86% higher MER (5.4x vs. 2.9x)"
        },
        {
          subtitle: "Why Feed Quality = ROAS:",
          feedScenarios: [
            {
              type: "Mediocre Feed",
              flow: [
                "User searches 'sustainable women's jacket'",
                "Google shows your basic 2-image listing",
                "User sees 4 competitors with 10+ images, Product Highlights, video",
                "Your CTR: 0.8%, Quality Score: 6/10, CPC: $3.20 (40% premium)"
              ]
            },
            {
              type: "Excellent Feed",
              flow: [
                "Same search",
                "Your listing: 12 images, Product Highlights ('100% Organic Cotton', 'Fair Trade')",
                "Your CTR: 2.6%, Quality Score: 9/10, CPC: $1.90 (41% lower)"
              ]
            }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "You're Competing on One Front While They're Winning on Seven",
      icon: <Target size={24} />,
      color: "emerald",
      sections: [
        {
          subtitle: "The 92% Mistake:",
          content: "They think 'Google Ads' = Shopping + Search. They optimize these two channels, ignore the other five."
        },
        {
          subtitle: "The 2025 Reality:",
          surfaces: "Google Ads now spans 7 major traffic surfaces: Shopping, Search, YouTube, Lens, Discover, AI Overviews, Gmail",
          breakdown: "Shopping + Search = 38% of total Google traffic. The other 5 surfaces = 62% of traffic"
        },
        {
          subtitle: "The Market Share Illusion:",
          marketComparison: [
            {
              type: "You (Shopping/Search Only)",
              coverage: "6.8% of total Google traffic",
              thought: "We're doing well, revenue is stable",
              reality: "You're invisible to 93.2% of available traffic"
            },
            {
              type: "Competitor Running Power Pack",
              breakdown: [
                "Shopping/Search: 6.8%",
                "YouTube: 8.4%",
                "Lens: 8.1%",
                "AI Overviews: 4.8%",
                "Discover/Gmail: 1.8%"
              ],
              coverage: "29.9% of total Google traffic (4.4x more)"
            }
          ]
        },
        {
          subtitle: "The Strategic Implication:",
          shopScale: [
            "Fighting for bigger slice of shrinking pie (38% of traffic)",
            "CAC goes up (more competition)",
            "ROAS goes down (diminishing returns)"
          ],
          powerScale: [
            "Capturing multiple pies simultaneously (100% coverage)",
            "CAC stays flat (Demand Gen at $0.10 CPC offsets saturation)",
            "ROAS sustains (creative diversity prevents saturation)"
          ]
        }
      ]
    }
  ];

  return (
    <div className="w-full bg-[#e8ebf0] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

        {/* Main Header */}
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex justify-center items-center gap-2 px-4 py-2 rounded-full bg-[#ecf0f3] shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] text-red-600 font-semibold text-xs sm:text-sm mb-6"
            variants={fadeIn}
          >
            <AlertCircle size={16} />
            <span>The Insight</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 mb-6 leading-tight">
            Why 92% of Fashion Brands Fail at Google Scaling<br/>
            <span className="text-emerald-600">(And How the 8% Dominate)</span>
          </h2>

          <p className="text-slate-600 text-lg sm:text-xl font-medium max-w-4xl mx-auto leading-relaxed">
            The difference between brands stuck at $200K/month and brands scaling to $1M+ isn't budget, product quality, or market timing.
          </p>
          <p className="text-slate-800 text-xl sm:text-2xl font-bold mt-4">
            It's whether they understand these four truths about Google's 2025 algorithm:
          </p>
        </div>

        {/* The 4 Truths */}
        <div className="space-y-8 mb-20">
          {truths.map((truth, idx) => {
            const isExpanded = expandedTruth === truth.id;
            const colorMap = {
              blue: { bg: 'bg-blue-500', text: 'text-blue-600', tint: 'bg-blue-50', border: 'border-blue-400' },
              violet: { bg: 'bg-violet-500', text: 'text-violet-600', tint: 'bg-violet-50', border: 'border-violet-400' },
              orange: { bg: 'bg-orange-500', text: 'text-orange-600', tint: 'bg-orange-50', border: 'border-orange-400' },
              emerald: { bg: 'bg-emerald-500', text: 'text-emerald-600', tint: 'bg-emerald-50', border: 'border-emerald-400' }
            };
            const colors = colorMap[truth.color];

            return (
              <motion.div
                key={truth.id}
                className={`rounded-3xl overflow-hidden cursor-pointer transition-all ${
                  isExpanded 
                    ? `bg-[#ecf0f3] ${shadowExtruded} border border-white/60` 
                    : `bg-[#eef1f5] ${shadowExtruded} opacity-90 hover:bg-[#ecf0f3] hover:opacity-100`
                }`}
                onClick={() => setExpandedTruth(isExpanded ? null : truth.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                {/* Header */}
                <div className="p-6 sm:p-8 flex items-start gap-4 sm:gap-6">
                  <div className={`p-4 rounded-2xl flex-shrink-0 ${
                    isExpanded 
                      ? `${shadowPressed} ${colors.tint} ${colors.text}` 
                      : `${shadowExtruded} bg-[#ecf0f3] text-slate-400`
                  }`}>
                    {truth.icon}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className={`text-lg sm:text-xl md:text-2xl font-black ${
                        isExpanded ? 'text-slate-800' : 'text-slate-600'
                      }`}>
                        {truth.id}. {truth.title}
                      </h3>
                      <ChevronDown 
                        className={`text-slate-400 transition-transform flex-shrink-0 ${
                          isExpanded ? 'rotate-180' : ''
                        }`} 
                        size={24} 
                      />
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-8 space-y-6">
                        <div className="w-full h-px bg-slate-300/30 mb-6"></div>

                        {truth.sections.map((section, sIdx) => (
                          <div key={sIdx} className={`p-6 rounded-2xl bg-white/60 ${shadowPressed}`}>
                            <h4 className={`font-black text-slate-800 mb-3 ${colors.text}`}>
                              {section.subtitle}
                            </h4>

                            {section.content && (
                              <p className="text-slate-600 leading-relaxed mb-4">{section.content}</p>
                            )}

                            {/* Comparison (Truth 1) */}
                            {section.comparison && (
                              <div className="grid md:grid-cols-2 gap-4 mt-4">
                                <div className="p-4 rounded-xl bg-slate-100">
                                  <h5 className="font-bold text-slate-700 mb-2">{section.comparison.old.title}</h5>
                                  <ul className="space-y-1">
                                    {section.comparison.old.points.map((pt, i) => (
                                      <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                                        <ChevronRight size={14} className="mt-0.5 flex-shrink-0" />
                                        {pt}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className={`p-4 rounded-xl ${colors.tint}`}>
                                  <h5 className="font-bold text-slate-700 mb-2">{section.comparison.new.title}</h5>
                                  <ul className="space-y-1">
                                    {section.comparison.new.points.map((pt, i) => (
                                      <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                                        <ChevronRight size={14} className={`mt-0.5 flex-shrink-0 ${colors.text}`} />
                                        {pt}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            )}

                            {/* Stats (Truth 1) */}
                            {section.stats && (
                              <div className="space-y-3 mt-4">
                                {section.stats.map((stat, i) => (
                                  <div key={i} className={`p-4 rounded-xl ${i === 1 ? colors.tint : 'bg-slate-100'}`}>
                                    <div className="font-bold text-slate-800 mb-1">{stat.label}</div>
                                    <div className="text-sm text-slate-600 mb-2">{stat.desc}</div>
                                    <div className={`font-bold ${i === 1 ? colors.text : 'text-slate-700'}`}>
                                      → {stat.result}
                                    </div>
                                  </div>
                                ))}
                                {section.insight && (
                                  <div className={`p-4 rounded-xl ${colors.tint} border-l-4 ${colors.border}`}>
                                    <p className="font-bold text-slate-800">{section.insight}</p>
                                  </div>
                                )}
                              </div>
                            )}

                            {/* Breakdown list - Fix: Check for Array before mapping */}
                            {section.breakdown && Array.isArray(section.breakdown) && (
                              <ul className="space-y-2 mt-4">
                                {section.breakdown.map((item, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                    <div className={`w-1.5 h-1.5 rounded-full mt-1.5 ${colors.bg} flex-shrink-0`}></div>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            )}

                            {/* Example (Truth 2) */}
                            {section.example && (
                              <div className={`p-4 rounded-xl ${colors.tint} mt-4`}>
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                  <div><span className="font-bold">Category:</span> {section.example.category}</div>
                                  <div><span className="font-bold">Monthly Searches:</span> {section.example.searches}</div>
                                  <div><span className="font-bold">Realistic Capture:</span> {section.example.capture}</div>
                                  <div><span className="font-bold">Max Revenue:</span> {section.example.revenue}</div>
                                </div>
                                <div className="mt-3 p-3 bg-red-100 rounded-lg text-sm text-red-700 font-bold">
                                  ⚠️ {section.example.problem}
                                </div>
                              </div>
                            )}

                            {/* Scenarios (Truth 2) */}
                            {section.scenarios && (
                              <div className="space-y-3 mt-4">
                                {section.scenarios.map((sc, i) => (
                                  <div key={i} className="p-4 rounded-xl bg-red-50">
                                    <div className="font-bold text-slate-800 mb-1">
                                      Option {sc.option}: {sc.action}
                                    </div>
                                    <div className="text-sm text-red-700 font-semibold">→ {sc.result}</div>
                                  </div>
                                ))}
                                {section.plateau && (
                                  <div className={`p-4 rounded-xl ${colors.tint} border-l-4 ${colors.border}`}>
                                    <p className="font-bold text-slate-800">The Plateau: {section.plateau}</p>
                                  </div>
                                )}
                              </div>
                            )}

                            {/* Flywheel (Truth 2) */}
                            {section.flywheel && (
                              <div className="mt-4 space-y-2">
                                <h5 className="font-bold text-slate-800 mb-3">The Flywheel:</h5>
                                {section.flywheel.map((week, i) => (
                                  <div key={i} className={`p-3 rounded-xl ${i === 3 ? colors.tint : 'bg-slate-100'}`}>
                                    <span className="font-bold text-slate-700">Week {week.week}:</span>{' '}
                                    <span className="text-sm text-slate-600">{week.event}</span>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Case Study (Truth 2) */}
                            {section.caseStudy && (
                              <div className={`mt-4 p-4 rounded-xl ${colors.tint} border-l-4 ${colors.border}`}>
                                <h5 className="font-bold text-slate-800 mb-2">Case Study Evidence:</h5>
                                <div className="space-y-2 text-sm">
                                  <div><span className="font-bold">Before:</span> {section.caseStudy.before}</div>
                                  <div><span className="font-bold">After:</span> {section.caseStudy.after}</div>
                                </div>
                              </div>
                            )}

                            {/* Reality list (Truth 3) */}
                            {section.reality && (
                              <ul className="space-y-2 mt-4">
                                {section.reality.map((item, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                    <ChevronRight size={14} className={`mt-0.5 ${colors.text} flex-shrink-0`} />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            )}

                            {/* Audit table (Truth 3) */}
                            {section.audit && (
                              <div className="mt-4 overflow-x-auto">
                                <table className="w-full text-sm">
                                  <thead className="bg-slate-100">
                                    <tr>
                                      <th className="p-3 text-left font-bold">Tier</th>
                                      <th className="p-3 text-center font-bold">% Brands</th>
                                      <th className="p-3 text-center font-bold">Avg Images</th>
                                      <th className="p-3 text-center font-bold">Highlights</th>
                                      <th className="p-3 text-center font-bold">Avg MER</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {section.audit.map((row, i) => (
                                      <tr key={i} className={i === 2 ? colors.tint : ''}>
                                        <td className="p-3 font-bold">{row.tier}</td>
                                        <td className="p-3 text-center">{row.brands}</td>
                                        <td className="p-3 text-center">{row.images}</td>
                                        <td className="p-3 text-center">{row.highlights}</td>
                                        <td className="p-3 text-center font-bold">{row.mer}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                                {section.gap && (
                                  <div className={`mt-3 p-3 rounded-lg ${colors.tint} text-sm font-bold`}>
                                    📊 {section.gap}
                                  </div>
                                )}
                              </div>
                            )}

                            {/* Feed Scenarios (Truth 3) */}
                            {section.feedScenarios && (
                              <div className="grid md:grid-cols-2 gap-4 mt-4">
                                {section.feedScenarios.map((sc, i) => (
                                  <div key={i} className={`p-4 rounded-xl ${i === 0 ? 'bg-red-50' : colors.tint}`}>
                                    <h5 className="font-bold text-slate-800 mb-3">{sc.type}</h5>
                                    <ul className="space-y-2">
                                      {sc.flow.map((step, j) => (
                                        <li key={j} className="text-xs text-slate-600 flex items-start gap-2">
                                          <div className={`w-1 h-1 rounded-full mt-1.5 ${i === 0 ? 'bg-red-500' : colors.bg} flex-shrink-0`}></div>
                                          {step}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Surfaces (Truth 4) */}
                            {section.surfaces && (
                              <div className="space-y-2 mt-4">
                                <p className="text-slate-600">{section.surfaces}</p>
                                {section.breakdown && (
                                  <div className={`p-4 rounded-xl ${colors.tint} font-bold`}>
                                    {section.breakdown}
                                  </div>
                                )}
                              </div>
                            )}

                            {/* Market Comparison (Truth 4) */}
                            {section.marketComparison && (
                              <div className="grid md:grid-cols-2 gap-4 mt-4">
                                {section.marketComparison.map((comp, i) => (
                                  <div key={i} className={`p-4 rounded-xl ${i === 0 ? 'bg-red-50' : colors.tint}`}>
                                    <h5 className="font-bold text-slate-800 mb-2">{comp.type}</h5>
                                    {comp.coverage && (
                                      <div className="text-sm space-y-1">
                                        <div><span className="font-bold">Coverage:</span> {comp.coverage}</div>
                                        {comp.thought && <div className="italic text-slate-500">"{comp.thought}"</div>}
                                        {comp.reality && <div className="text-red-700 font-bold">Reality: {comp.reality}</div>}
                                      </div>
                                    )}
                                    {comp.breakdown && (
                                      <ul className="space-y-1 text-sm mt-2">
                                        {comp.breakdown.map((item, j) => (
                                          <li key={j} className="text-slate-600">• {item}</li>
                                        ))}
                                        <li className="font-bold text-slate-800 pt-2">Total: {comp.coverage}</li>
                                      </ul>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Scaling implications (Truth 4) */}
                            {section.shopScale && (
                              <div className="grid md:grid-cols-2 gap-4 mt-4">
                                <div className="p-4 rounded-xl bg-red-50">
                                  <h5 className="font-bold text-slate-800 mb-2">When You Scale Shopping/Search:</h5>
                                  <ul className="space-y-1 text-sm">
                                    {section.shopScale.map((item, i) => (
                                      <li key={i} className="text-red-700">• {item}</li>
                                    ))}
                                  </ul>
                                </div>
                                <div className={`p-4 rounded-xl ${colors.tint}`}>
                                  <h5 className="font-bold text-slate-800 mb-2">When They Scale Power Pack:</h5>
                                  <ul className="space-y-1 text-sm">
                                    {section.powerScale.map((item, i) => (
                                      <li key={i} className="text-emerald-700">• {item}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Line Summary */}
        <div className={`p-8 rounded-3xl bg-[#ecf0f3] ${shadowExtruded} border border-white/60 mb-20`}>
          <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-6 text-center">
            The Bottom Line: Why the 8% Win
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className={`p-6 rounded-2xl bg-red-50/80 ${shadowPressed} border-l-4 border-red-500`}>
              <h4 className="font-black text-slate-800 mb-4 flex items-center gap-2">
                <AlertCircle className="text-red-600" size={20} />
                The 92% Optimize Tactics:
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Better keyword targeting</li>
                <li>• Lower CPCs</li>
                <li>• Higher Quality Scores</li>
                <li>• A/B test ad copy</li>
              </ul>
              <div className="mt-4 p-3 bg-white rounded-lg">
                <p className="text-sm font-bold text-slate-700">
                  Tactics get you to $200K/month. Then you plateau.
                </p>
              </div>
            </div>

            <div className={`p-6 rounded-2xl bg-emerald-50/80 ${shadowPressed} border-l-4 border-emerald-500`}>
              <h4 className="font-black text-slate-800 mb-4 flex items-center gap-2">
                <Zap className="text-emerald-600" size={20} />
                The 8% Build Systems:
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Visual-First Feed Architecture (10-12 images, highlights, video)</li>
                <li>• Demand Creation Engine (15-20 Shorts/week)</li>
                <li>• Omnichannel Presence (100% traffic coverage)</li>
                <li>• Data Orchestration (CAPI, scripts, MER optimization)</li>
              </ul>
              <div className="mt-4 p-3 bg-white rounded-lg">
                <p className="text-sm font-bold text-slate-700">
                  Systems get you to $1M+/month. And keep you there.
                </p>
              </div>
            </div>
          </div>

          <div className={`mt-8 p-6 rounded-2xl bg-slate-50 border-2 border-slate-300`}>
            <h5 className="font-black text-slate-800 mb-3">The Harsh Reality:</h5>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you're still running Shopping/Search only, you're not competing with brands running Power Pack. 
              You're playing a different game.
            </p>
            <ul className="space-y-1 text-sm text-slate-600">
              <li>• They're capturing <strong>4.4x more traffic</strong> on the same budget</li>
              <li>• They're paying <strong>30-45% lower CAC</strong> (diversified traffic sources)</li>
              <li>• They're <strong>manufacturing demand</strong> (not waiting for searches)</li>
              <li>• They're <strong>algorithm-proof</strong> (7 traffic sources = redundancy)</li>
            </ul>
            <div className="mt-4 p-4 bg-gradient-to-r from-red-100 to-emerald-100 rounded-xl">
              <p className="font-black text-slate-800 text-center">
                You're fighting for 38% of the market. They own 100%.
              </p>
            </div>
          </div>
        </div>

        {/* The 7-Surface Coverage Gap Graphic */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 mb-4">
            The 7-Surface Coverage Gap
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium max-w-3xl mx-auto">
            Why the 92% capture 6.8% of Google traffic while the Top 8% dominate 29.9%—on the <span className="font-bold text-slate-800">same budget</span>.
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-[#ecf0f3] p-2 rounded-2xl shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]">
            <button
              onClick={() => setViewMode('traffic')}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                viewMode === 'traffic'
                  ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Traffic View
            </button>
            <button
              onClick={() => setViewMode('revenue')}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                viewMode === 'revenue'
                  ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Revenue Impact
            </button>
          </div>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            className={`p-6 sm:p-8 rounded-3xl bg-[#ecf0f3] ${shadowExtruded} border border-white/60`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center">
                <AlertCircle size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-800">The 92%</h3>
                <p className="text-xs text-slate-500 font-semibold uppercase">Shopping/Search Only</p>
              </div>
            </div>

            <div className={`p-6 rounded-2xl bg-red-50/80 border-l-4 border-red-500 mb-4`}>
              <div className="text-6xl font-black text-red-600 mb-2">
                {viewMode === 'traffic' ? '6.8%' : formatCurrency(totalRevenue92)}
              </div>
              <p className="text-sm text-slate-600 font-semibold">
                {viewMode === 'traffic' 
                  ? 'Total Market Coverage' 
                  : 'Revenue at $150K/mo Spend'
                }
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600 flex items-center gap-2">
                  <ShoppingBag size={14} className="text-amber-600" /> Shopping
                </span>
                <span className="font-bold text-slate-800">{viewMode === 'traffic' ? '18%' : formatCurrency(76000)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600 flex items-center gap-2">
                  <Search size={14} className="text-blue-600" /> Search
                </span>
                <span className="font-bold text-slate-800">{viewMode === 'traffic' ? '20%' : formatCurrency(64000)}</span>
              </div>
              <div className="flex items-center justify-between text-sm opacity-40">
                <span className="text-slate-600">5 Other Surfaces</span>
                <span className="font-bold text-slate-800">{viewMode === 'traffic' ? '~0-5%' : formatCurrency(370000)}</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className={`p-6 sm:p-8 rounded-3xl bg-[#ecf0f3] ${shadowExtruded} border border-white/60`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <Zap size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-800">The Top 8%</h3>
                <p className="text-xs text-slate-500 font-semibold uppercase">Power Pack (7 Surfaces)</p>
              </div>
            </div>

            <div className={`p-6 rounded-2xl bg-emerald-50/80 border-l-4 border-emerald-500 mb-4`}>
              <div className="text-6xl font-black text-emerald-600 mb-2">
                {viewMode === 'traffic' ? '29.9%' : formatCurrency(totalRevenue8)}
              </div>
              <p className="text-sm text-slate-600 font-semibold">
                {viewMode === 'traffic' 
                  ? 'Total Market Coverage (4.4x)' 
                  : 'Revenue at $150K/mo Spend (4.4x)'
                }
              </p>
            </div>

            <div className="space-y-2">
              {segments.slice(0, 3).map((seg) => (
                <div key={seg.id} className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 flex items-center gap-2">
                    <div style={{ color: seg.color }}>{seg.icon}</div>
                    {seg.name}
                  </span>
                  <span className="font-bold text-slate-800">
                    {viewMode === 'traffic' 
                      ? `${seg.coverage8}%` 
                      : formatCurrency(seg.revenueAt150k.top)
                    }
                  </span>
                </div>
              ))}
              <div className="text-xs text-slate-500 font-semibold pt-2">
                + 4 more surfaces (see breakdown below)
              </div>
            </div>
          </motion.div>
        </div>

     
     {/* Detailed Breakdown Table / List */}
<div className={`p-6 sm:p-8 rounded-3xl bg-[#ecf0f3] ${shadowExtruded} border border-white/60`}>
  <h3 className="text-xl sm:text-2xl font-black text-slate-800 mb-6">
    Surface-by-Surface Breakdown
  </h3>

  {/* Desktop Header Row (Hidden on Mobile) */}
  <div className="hidden md:grid md:grid-cols-12 gap-4 px-6 py-4 border-b-2 border-slate-300 text-xs font-bold text-slate-500 uppercase">
    <div className="col-span-4">Surface</div>
    <div className="col-span-2 text-center">% Traffic</div>
    <div className="col-span-2 text-center">92% Cov</div>
    <div className="col-span-2 text-center">Top 8%</div>
    <div className="col-span-1 text-center">Gap</div>
    <div className="col-span-1"></div>
  </div>

  <div className="space-y-2 md:space-y-0 md:mt-4">
    {segments.map((seg, idx) => {
      const isOpen = selectedSegment === seg.id;

      return (
        <motion.div
          key={seg.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * idx }}
          className={`
            rounded-2xl transition-all duration-300 overflow-hidden
            ${isOpen 
              ? `${shadowPressed} bg-[#ecf0f3] my-6 ring-1 ring-white/50` // Active: Deep inset look + margin
              : 'hover:bg-white/40 border-b border-slate-200 md:border-none' // Default: Flat list
            }
          `}
        >
          {/* Main Clickable Header */}
          <div 
            onClick={() => setSelectedSegment(isOpen ? null : seg.id)}
            className="p-5 md:px-6 md:py-4 cursor-pointer"
          >
            <div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:items-center">
              
              {/* Top Row: Icon + Name + Chevron (Mobile) */}
              <div className="flex items-center justify-between md:col-span-4">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${seg.color}20`, color: seg.color }}
                  >
                    {seg.icon}
                  </div>
                  <span className="font-bold text-slate-800 text-lg md:text-base">{seg.name}</span>
                </div>
                {/* Mobile Chevron */}
                <ChevronRight 
                  size={20}
                  className={`md:hidden transition-transform duration-300 ${isOpen ? 'rotate-90 text-slate-600' : 'text-slate-400'}`} 
                />
              </div>

              {/* Mobile Stats Grid (Visible only on mobile) */}
              <div className="grid grid-cols-2 gap-4 mt-2 md:hidden">
                <div className="p-3 rounded-lg bg-white/50">
                   <div className="text-xs text-slate-500 font-bold mb-1">Traffic Share</div>
                   <div className="text-lg font-bold text-slate-700">{seg.traffic}%</div>
                </div>
                <div className="p-3 rounded-lg bg-white/50">
                   <div className="text-xs text-slate-500 font-bold mb-1">Coverage Gap</div>
                   <div className="text-lg font-black text-slate-800">{seg.gap}</div>
                </div>
                <div className="p-3 rounded-lg bg-red-50">
                   <div className="text-xs text-red-700/70 font-bold mb-1">92% Cov</div>
                   <div className="text-lg font-bold text-red-700">{seg.coverage92}%</div>
                </div>
                <div className="p-3 rounded-lg bg-emerald-50">
                   <div className="text-xs text-emerald-700/70 font-bold mb-1">Top 8% Cov</div>
                   <div className="text-lg font-bold text-emerald-700">{seg.coverage8}%</div>
                </div>
              </div>

              {/* Desktop Stats Columns (Hidden on Mobile) */}
              <div className="hidden md:block md:col-span-2 text-center font-bold text-slate-700">
                {seg.traffic}%
              </div>
              <div className="hidden md:block md:col-span-2 text-center">
                <span className="px-3 py-1 rounded-lg bg-red-50 text-red-700 font-bold text-sm">
                  {seg.coverage92}%
                </span>
              </div>
              <div className="hidden md:block md:col-span-2 text-center">
                <span className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-sm">
                  {seg.coverage8}%
                </span>
              </div>
              <div className="hidden md:block md:col-span-1 text-center font-black text-slate-800">
                {seg.gap}
              </div>
              <div className="hidden md:flex col-span-1 justify-end">
                <ChevronRight 
                  size={20}
                  className={`transition-transform duration-300 ${isOpen ? 'rotate-90 text-slate-600' : 'text-slate-400'}`} 
                />
              </div>
            </div>
          </div>

          {/* Expanded Content (Inside the same Inset container) */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-6 pt-0 md:px-6 md:pb-6">
                  <div className="w-full h-px bg-slate-300/50 mb-6"></div>
                  
                  <div className="flex flex-col md:flex-row items-start gap-4">
                     {/* Gradient Icon Box */}
                    <div className={`hidden md:flex w-14 h-14 rounded-2xl items-center justify-center flex-shrink-0 bg-gradient-to-br ${seg.gradient} text-white shadow-lg`}>
                      {seg.icon}
                    </div>
                    
                    <div className="flex-1 w-full">
                      <h4 className="text-lg font-black text-slate-800 mb-2">
                        Why Top 8% Win on {seg.name}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                        {seg.strategy}
                      </p>

                      {viewMode === 'revenue' && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="p-4 rounded-xl bg-white border border-red-100 shadow-sm">
                            <div className="text-xs text-slate-500 font-bold uppercase mb-1">92% Avg Revenue</div>
                            <div className="text-2xl font-black text-red-600">
                              {formatCurrency(seg.revenueAt150k.avg)}
                            </div>
                          </div>
                          <div className="p-4 rounded-xl bg-white border border-emerald-100 shadow-sm">
                            <div className="text-xs text-slate-500 font-bold uppercase mb-1">Top 8% Avg Revenue</div>
                            <div className="text-2xl font-black text-emerald-600">
                              {formatCurrency(seg.revenueAt150k.top)}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      );
    })}
  </div>
</div>

        {/* Final Insight */}
        <div className={`mt-8 p-6 sm:p-8 rounded-3xl bg-[#ecf0f3] ${shadowPressed} border-l-4 border-blue-500`}>
          <div className="flex items-start gap-4">
            <Info className="text-blue-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h4 className="text-lg font-black text-slate-800 mb-2">The Structural Advantage</h4>
              <p className="text-slate-600 leading-relaxed">
                The 92% are optimizing their 6.8% with laser precision—better keywords, lower CPCs, perfect Quality Scores. 
                The Top 8% are capturing 29.9% with <span className="font-bold text-slate-800">systems</span>—feed optimization, 
                Demand Gen, visual discovery. You can't out-optimize a <span className="font-bold text-slate-800">4.4x structural advantage</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyBrandsFailSection;
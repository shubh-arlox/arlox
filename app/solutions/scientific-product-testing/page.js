'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, PlayCircle, AlertCircle, TrendingDown, Zap, X, ArrowBigUpDash } from 'lucide-react';

export default function NeumorphicHeroSection() {
  const [collectionA, setCollectionA] = useState(0);
  const [collectionB, setCollectionB] = useState(0);
  const [collectionC, setCollectionC] = useState(0);
  const [showBurnoutModal, setShowBurnoutModal] = useState(false);

  // Simulation Effects
  useEffect(() => {
    const intervalA = setInterval(() => {
      setCollectionA(prev => prev < 4.5 ? +(prev + 0.15).toFixed(2) : 4.5);
    }, 50);
    return () => clearInterval(intervalA);
  }, []);

  useEffect(() => {
    const intervalB = setInterval(() => {
      setCollectionB(prev => prev < 3.5 ? +(prev + 0.12).toFixed(2) : 3.5);
    }, 60);
    return () => clearInterval(intervalB);
  }, []);

  useEffect(() => {
    const intervalC = setInterval(() => {
      setCollectionC(prev => prev < 1.8 ? +(prev + 0.06).toFixed(2) : 1.8);
    }, 80);
    return () => clearInterval(intervalC);
  }, []);

  // Helpers
  const getProgressWidth = (value, max) => (value / max) * 100;
  const getStatus = (value) => {
    if (value >= 4) return { label: 'Profit Margin ✓', color: 'text-green-600' };
    if (value >= 3) return { label: 'High Demand ✓', color: 'text-green-600' };
    if (value >= 1.5) return { label: 'Trending (But Low ROAS) ⚠️', color: 'text-orange-600' };
    return { label: 'Low ROAS ✗', color: 'text-red-600' };
  };

  const burnoutLevel = 75; 

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="min-h-screen bg-gradient-to-br from-[#E0E5EC] via-[#E8EEF5] to-[#E0E5EC] overflow-hidden relative font-sans flex items-center justify-center">
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          :root {
            --primary: #1B5FFF;
            --secondary: #7A40D6;
            --text-dark: #202020;
            --text-light: #666666;
            --shadow-dark: #A3B1C6;
            --shadow-light: #FFFFFF;
          }

          /* Button Styles */
          .neu-button {
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            box-shadow: 6px 6px 12px #A3B1C6, -6px -6px 12px #FFFFFF;
            border: 0; border-radius: 14px; color: white; font-weight: 700;
            padding: 16px 32px; cursor: pointer; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            font-size: 1rem;
          }
          .neu-button:hover {
            box-shadow: 4px 4px 10px #A3B1C6, -4px -4px 10px #FFFFFF;
            transform: translateY(2px);
          }
          .neu-button:active {
            box-shadow: inset 4px 4px 10px #A3B1C6, inset -4px -4px 10px #FFFFFF;
            transform: translateY(4px);
          }
          .neu-button-secondary {
            background: linear-gradient(145deg, #E8EEF5, #D1D9E6);
            box-shadow: 5px 5px 12px #A3B1C6, -5px -5px 12px #FFFFFF;
            border: 0; border-radius: 12px; color: var(--text-dark); font-weight: 600;
            padding: 14px 28px; cursor: pointer; transition: all 0.3s ease;
            font-size: 0.95rem;
          }
          .neu-button-secondary:hover {
            box-shadow: 3px 3px 8px #A3B1C6, -3px -3px 8px #FFFFFF;
            transform: translateY(1px);
          }
          .neu-button-secondary:active {
            box-shadow: inset 3px 3px 8px #A3B1C6, inset -3px -3px 8px #FFFFFF;
            transform: translateY(3px);
          }

          /* Progress Bars */
          .neu-progress-bar {
            background: linear-gradient(145deg, #D1D9E6, #E8EEF5);
            box-shadow: inset 3px 3px 8px #A3B1C6, inset -3px -3px 8px #FFFFFF;
            border-radius: 10px; height: 14px; overflow: hidden; position: relative;
          }
          .neu-progress-fill {
            height: 100%; border-radius: 10px;
            background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
            transition: width 0.3s ease; position: relative;
          }
          .neu-progress-fill-green { background: linear-gradient(90deg, #10B981 0%, #34d399 100%); }
          .neu-progress-fill-purple { background: linear-gradient(90deg, #d946ef 0%, #a855f7 100%); }
          .progress-label { font-size: 11px; font-weight: 700; margin-top: 6px; display: inline-block; }

          /* Cards & Metrics */
          .neu-stat-box {
            background: linear-gradient(145deg, #E8EEF5, #D1D9E6);
            box-shadow: 5px 5px 12px #A3B1C6, -5px -5px 12px #FFFFFF;
            border-radius: 16px; padding: 20px; text-align: center; transition: all 0.3s ease;
          }
          .neu-stat-box:hover {
            box-shadow: 3px 3px 8px #A3B1C6, -3px -3px 8px #FFFFFF;
            transform: translateY(-2px);
          }
          .neu-badge {
            display: inline-flex; align-items: center; gap: 8px;
            background: linear-gradient(145deg, #E8EEF5, #D1D9E6);
            color: var(--primary); padding: 10px 18px; border-radius: 10px;
            font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;
            box-shadow: 4px 4px 10px #A3B1C6, -4px -4px 10px #FFFFFF;
          }
          .neu-card {
            background: linear-gradient(145deg, #E8EEF5, #D1D9E6);
            box-shadow: 12px 12px 24px #A3B1C6, -12px -12px 24px #FFFFFF;
            border-radius: 24px; padding: 32px; position: relative;
          }
          .neu-metric {
            background: linear-gradient(145deg, #D1D9E6, #E8EEF5);
            box-shadow: inset 5px 5px 12px #A3B1C6, inset -5px -5px 12px #FFFFFF;
            border-radius: 12px; padding: 12px; text-align: center;
          }

          /* Text & Animations */
          .text-gradient {
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          .animate-float { animation: float 3s ease-in-out infinite; }
          @keyframes pulse-neu {
            0%, 100% { box-shadow: 12px 12px 24px #A3B1C6, -12px -12px 24px #FFFFFF; }
            50% { box-shadow: 14px 14px 28px #A3B1C6, -14px -14px 28px #FFFFFF; }
          }
          .animate-pulse-neu { animation: pulse-neu 3s ease-in-out infinite; }

          /* Problems Section specific */
          .problem-header { text-align: center; margin-bottom: 80px; }
          .problem-header h2 { font-size: 3.5rem; font-weight: 900; line-height: 1.1; color: #202020; margin-bottom: 24px; }
          .problem-header h2 .highlight { color: #E63946; }
          .problem-header p { font-size: 1.1rem; color: #555; max-width: 900px; margin: 0 auto; line-height: 1.6; }
          .problem-header .bold { font-weight: 700; color: #202020; }
          
          .problems-grid {
            display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 40px; margin-bottom: 60px;
          }
          .problem-card {
            background: linear-gradient(145deg, #E8EEF5, #D1D9E6);
            box-shadow: 8px 8px 16px #A3B1C6, -8px -8px 16px #FFFFFF;
            border-radius: 20px; padding: 32px; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .problem-card:hover {
            box-shadow: 12px 12px 24px #A3B1C6, -12px -12px 24px #FFFFFF;
            transform: translateY(-8px);
          }
          
          .card-icon {
            width: 80px; height: 80px; border-radius: 16px;
            display: flex; align-items: center; justify-content: center;
            margin-bottom: 24px;
            box-shadow: inset 4px 4px 10px #A3B1C6, inset -4px -4px 10px #FFFFFF;
          }
          .card-icon.red { background: linear-gradient(145deg, #FFE5E5, #FFCCCF); }
          .card-icon.orange { background: linear-gradient(145deg, #FFECD1, #FFDDB5); }
          .card-icon.purple { background: linear-gradient(145deg, #F3E8FF, #E9D5FF); }
          .card-icon svg { width: 40px; height: 40px; }
          .card-icon.red svg { stroke: #E63946; color: #E63946; }
          .card-icon.orange svg { stroke: #F97316; color: #F97316; }
          .card-icon.purple svg { stroke: #A855F7; color: #A855F7; }

          .problem-card h3 { font-size: 1.5rem; font-weight: 900; color: #202020; margin-bottom: 16px; }
          .problem-card p { color: #555; font-size: 0.95rem; line-height: 1.6; margin-bottom: 12px; }
          .problem-card .bold { font-weight: 700; color: #E63946; }
          .stat-highlight { font-weight: 900; color: #E63946; font-size: 1rem; }

          .progress-bar {
            width: 100%; height: 8px; background: linear-gradient(145deg, #D1D9E6, #E8EEF5);
            box-shadow: inset 2px 2px 6px #A3B1C6, inset -2px -2px 6px #FFFFFF;
            border-radius: 10px; margin-top: 20px; overflow: hidden;
          }
          .progress-fill {
            width: 65%; height: 100%; background: linear-gradient(90deg, #E63946 0%, #c1121f 100%);
            border-radius: 10px; box-shadow: 0 2px 8px rgba(230, 57, 70, 0.3);
          }

          .price-section { margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(163, 177, 198, 0.3); }
          .price-row { display: flex; align-items: center; gap: 16px; margin-bottom: 12px; font-size: 0.9rem; }
          .price-original { text-decoration: line-through; color: #888; font-weight: 600; }
          .price-arrow { color: #888; }
          .price-new { font-weight: 900; color: #E63946; font-size: 1.1rem; }
          .price-discount {
            background: linear-gradient(145deg, #FFCCCF, #FFB8BC); color: #E63946;
            padding: 4px 8px; border-radius: 6px; font-weight: 700; font-size: 0.75rem;
            margin-left: auto; box-shadow: 2px 2px 6px #A3B1C6, -2px -2px 6px #FFFFFF;
          }

          /* Burnout Elements */
          .burnout-container { margin-top: 24px; position: relative; cursor: pointer; }
          .burnout-bar {
            width: 100%; height: 16px; background: linear-gradient(90deg, #10B981 0%, #FBBF24 50%, #E63946 100%);
            border-radius: 12px; position: relative; overflow: hidden;
            box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.1), 0 3px 8px rgba(0, 0, 0, 0.15);
            transition: all 0.3s ease;
          }
          .burnout-bar:hover { box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.1), 0 5px 12px rgba(0, 0, 0, 0.25); height: 18px; }
          .burnout-fill {
            width: 75%; height: 100%;
            background: linear-gradient(90deg, rgba(16, 185, 129, 0.3), rgba(251, 191, 36, 0.3), rgba(230, 57, 70, 0.5));
            border-radius: 12px;
          }
          .burnout-label {
            position: absolute; left: 12px; top: 50%; transform: translateY(-50%);
            font-size: 0.65rem; font-weight: 900; color: #202020;
            text-transform: uppercase; letter-spacing: 0.5px; z-index: 10;
          }
          .burnout-percentage {
            position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
            font-size: 0.75rem; font-weight: 900; color: #202020; z-index: 10;
          }
          .burnout-click-hint { font-size: 0.65rem; color: #888; margin-top: 6px; font-style: italic; }

          .section-footer { text-align: center; margin-top: 80px; padding-top: 40px; border-top: 1px solid rgba(163, 177, 198, 0.3); }
          .section-footer p { font-size: 1.1rem; color: #555; margin-bottom: 24px; }
          .section-footer .bold { font-weight: 700; color: #202020; }
          .cta-button {
            background: linear-gradient(135deg, #1B5FFF 0%, #7A40D6 100%);
            color: white; border: none; padding: 16px 40px; font-size: 1rem; font-weight: 700;
            border-radius: 14px; cursor: pointer;
            box-shadow: 6px 6px 12px #A3B1C6, -6px -6px 12px #FFFFFF;
            transition: all 0.3s ease;
          }
          .cta-button:hover { transform: translateY(-2px); box-shadow: 4px 4px 10px #A3B1C6, -4px -4px 10px #FFFFFF; }
          .cta-button:active { transform: translateY(2px); box-shadow: inset 4px 4px 10px #A3B1C6, inset -4px -4px 10px #FFFFFF; }

          /* Modal */
          .burnout-modal-overlay {
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0, 0, 0, 0.5); display: flex; align-items: center; justify-content: center;
            z-index: 1000; padding: 16px;
          }
          .burnout-modal {
            background: linear-gradient(145deg, #E8EEF5, #D1D9E6);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            border-radius: 24px; padding: 32px; max-width: 500px; width: 100%; position: relative;
          }
          .modal-close-btn {
            position: absolute; top: 20px; right: 20px; background: none; border: none; cursor: pointer;
            color: #202020; transition: transform 0.2s ease;
          }
          .modal-close-btn:hover { transform: rotate(90deg); }
          .modal-header { margin-bottom: 24px; padding-right: 32px; }
          .modal-header h3 { font-size: 1.75rem; font-weight: 900; color: #202020; margin-bottom: 8px; }
          .modal-header p { color: #555; font-size: 0.95rem; }
          .modal-metric {
            background: linear-gradient(145deg, #D1D9E6, #E8EEF5);
            box-shadow: inset 3px 3px 8px #A3B1C6, inset -3px -3px 8px #FFFFFF;
            border-radius: 12px; padding: 16px; margin-bottom: 16px;
            display: flex; justify-content: space-between; align-items: center;
          }
          .modal-metric-label { font-weight: 700; color: #202020; }
          .modal-metric-value { font-size: 1.5rem; font-weight: 900; color: #E63946; }
          .modal-tips {
            background: linear-gradient(145deg, #FFE5E5, #FFCCCF);
            border-radius: 12px; padding: 16px; margin-top: 20px;
          }
          .modal-tips h4 { font-weight: 900; color: #E63946; margin-bottom: 12px; }
          .modal-tips ul { list-style: none; color: #555; }
          .modal-tips li { font-size: 0.9rem; margin-bottom: 8px; padding-left: 24px; position: relative; }
          .modal-tips li:before { content: "✓"; position: absolute; left: 0; color: #10B981; font-weight: 900; }

          @media (max-width: 1024px) {
            h1 { font-size: 2.25rem; } .neu-card { padding: 24px; }
          }
          @media (max-width: 768px) {
            h1 { font-size: 1.875rem; } .neu-card { padding: 20px; }
            .neu-button { padding: 12px 24px; font-size: 0.9rem; }
            .neu-button-secondary { padding: 10px 20px; font-size: 0.85rem; }
            .progress-label { font-size: 10px; }
            .problem-header h2 { font-size: 2.25rem; }
            .problems-grid { grid-template-columns: 1fr; gap: 24px; margin-bottom: 40px; }
            .problem-header { margin-bottom: 60px; } .problem-card { padding: 24px; }
            .section-footer { margin-top: 60px; padding-top: 30px; }
            .burnout-modal { padding: 24px; margin: 16px; }
            .modal-header h3 { font-size: 1.5rem; }
            .modal-close-btn { top: 16px; right: 16px; }
          }
        `}</style>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-8"
            >
              <motion.div className="inline-block" whileHover={{ scale: 1.05 }}>
                <div className="neu-badge">
                  <span>🧪</span>
                  <span>Scientific Product Testing</span>
                </div>
              </motion.div>

              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-gray-900">
                  Launch Products That Are
                  <span className="text-gradient block mt-2">Proven to Sell</span>
                </h1>
              </div>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-lg">
                Stop gambling with $50K–$500K in inventory. Test with real customers. Validate demand with real data. Manufacture only what's proven to work.
              </p>

              <div className="grid grid-cols-3 gap-3 sm:gap-4 py-6 border-t-2 border-b-2 border-gray-300">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-gradient">80–90%</div>
                  <p className="text-xs sm:text-sm text-gray-700 font-bold mt-1">Success Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-gradient">2–4 Weeks</div>
                  <p className="text-xs sm:text-sm text-gray-700 font-bold mt-1">To Decision</p>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-gradient">$300–$2K</div>
                  <p className="text-xs sm:text-sm text-gray-700 font-bold mt-1">Per Test</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6">
                <motion.button
                  className="neu-button flex items-center justify-center gap-2 text-base sm:text-lg whitespace-nowrap"
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                >
                  Book Free Strategy Session <ArrowRight size={20} />
                </motion.button>
                <motion.button
                  className="neu-button-secondary flex items-center justify-center gap-2 text-base whitespace-nowrap"
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                >
                  <PlayCircle size={18} /> See How It Works
                </motion.button>
              </div>
            </motion.div>

            {/* Right: Dashboard Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="animate-float"
            >
              <div className="neu-card animate-pulse-neu">
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900">Your Brand</h2>
                  <motion.div
                    className="neu-badge"
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ background: 'linear-gradient(135deg, #10B981 0%, #34d399 100%)', color: 'white', gap: '6px' }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-xs sm:text-sm">Performance</span>
                  </motion.div>
                </div>

                <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-10">
                  {/* Collection A */}
                  <div>
                    <div className="flex justify-between items-center mb-2 sm:mb-3">
                      <label className="text-xs sm:text-sm font-bold text-gray-800">Collection A</label>
                      <div className="neu-metric text-base sm:text-lg lg:text-xl font-black text-gradient" style={{ minWidth: '70px' }}>
                        {collectionA.toFixed(2)}x
                      </div>
                    </div>
                    <div className="neu-progress-bar">
                      <motion.div className="neu-progress-fill" style={{ width: `${getProgressWidth(collectionA, 5)}%` }} transition={{ width: { duration: 0.3 } }}></motion.div>
                    </div>
                    <motion.div className={`progress-label ${getStatus(collectionA).color}`} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}>
                      {getStatus(collectionA).label}
                    </motion.div>
                  </div>

                  {/* Collection B */}
                  <div>
                    <div className="flex justify-between items-center mb-2 sm:mb-3">
                      <label className="text-xs sm:text-sm font-bold text-gray-800">Collection B</label>
                      <div className="neu-metric text-base sm:text-lg lg:text-xl font-black text-green-600" style={{ minWidth: '70px' }}>
                        {collectionB.toFixed(2)}x
                      </div>
                    </div>
                    <div className="neu-progress-bar">
                      <motion.div className="neu-progress-fill neu-progress-fill-green" style={{ width: `${getProgressWidth(collectionB, 5)}%` }} transition={{ width: { duration: 0.3 } }}></motion.div>
                    </div>
                    <motion.div className={`progress-label ${getStatus(collectionB).color}`} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}>
                      {getStatus(collectionB).label}
                    </motion.div>
                  </div>

                  {/* Collection C */}
                  <div>
                    <div className="flex justify-between items-center mb-2 sm:mb-3">
                      <label className="text-xs sm:text-sm font-bold text-gray-800">Collection C</label>
                      <div className="neu-metric text-base sm:text-lg lg:text-xl font-black text-purple-600" style={{ minWidth: '70px' }}>
                        {collectionC.toFixed(2)}x
                      </div>
                    </div>
                    <div className="neu-progress-bar">
                      <motion.div className="neu-progress-fill neu-progress-fill-purple" style={{ width: `${getProgressWidth(collectionC, 5)}%` }} transition={{ width: { duration: 0.3 } }}></motion.div>
                    </div>
                    <motion.div className={`progress-label ${getStatus(collectionC).color}`} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}>
                      {getStatus(collectionC).label}
                    </motion.div>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-gray-400 to-transparent mb-6 sm:mb-8"></div>

                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  <motion.div className="neu-stat-box" whileHover={{ scale: 1.05 }}>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900">42</div>
                    <p className="text-xs sm:text-sm text-gray-700 font-bold mt-1 sm:mt-2">Products Tested</p>
                  </motion.div>
                  <motion.div className="neu-stat-box" whileHover={{ scale: 1.05 }}>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-black text-green-600">18</div>
                    <p className="text-xs sm:text-sm text-gray-700 font-bold mt-1 sm:mt-2">Winners Found</p>
                  </motion.div>
                  <motion.div className="neu-stat-box" whileHover={{ scale: 1.05 }}>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-black text-red-600">$340K</div>
                    <p className="text-xs sm:text-sm text-gray-700 font-bold mt-1 sm:mt-2">Money Saved</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PROBLEMS SECTION --- */}
      <section className="min-h-screen bg-gradient-to-br from-[#E0E5EC] via-[#E8EEF5] to-[#E0E5EC] flex items-center justify-center py-20 sm:py-24 md:py-32">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="problem-header"
            >
              <h2>
                Fashion Launches Are
                <br />
                <span className="highlight">Expensive Gambles</span>
              </h2>
              <p>
                You commit <span className="bold">$50K–$500K</span> to inventory before a single customer confirms they want it.
                <br />
                <span className="bold">98% of fashion startups fail</span> within their first few years.
              </p>
            </motion.div>

            {/* Problem Cards */}
            <motion.div
              className="problems-grid"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, staggerChildren: 0.1 }}
              viewport={{ once: true }}
            >
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="problem-card"
              >
                <div className="card-icon red">
                  <AlertCircle strokeWidth={1.5} />
                </div>
                <h3>Capital Locked</h3>
                <p>
                  <span className="stat-highlight">20-30%</span> of inventory becomes dead stock annually. Average brand has <span className="bold">$150,000</span> tied up in unsold inventory.
                </p>
                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="problem-card"
              >
                <div className="card-icon orange">
                  <TrendingDown strokeWidth={1.5} />
                </div>
                <h3>Brand Destroyed</h3>
                <p>Desperate discounting <span className="stat-highlight">30%, 50%, 70%</span> off destroys premium positioning. Customers learn to wait for sales.</p>
                <div className="price-section">
                  <div className="price-row">
                    <span className="price-original">$100</span>
                    <span className="price-arrow">→</span>
                    <span className="price-new">$30</span>
                    <span className="price-discount">70% OFF</span>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Stress Overload - CLICKABLE */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="problem-card"
              >
                <div className="card-icon purple">
                  <Zap strokeWidth={1.5} />
                </div>
                <h3>Stress Overload</h3>
                <p>Every launch becomes anxiety. Every decision second-guessed. The stress affects creativity, relationships, and health.</p>
                <div 
                  className="burnout-container"
                  onClick={() => setShowBurnoutModal(true)}
                >
                  <div className="burnout-bar">
                    <div className="burnout-fill"></div>
                    <div className="burnout-label">Burnout</div>
                    <div className="burnout-percentage">{burnoutLevel}%</div>
                  </div>
                  <div className="burnout-click-hint flex ">
                      <ArrowBigUpDash className='text-red-400 '/><span className='text-red-400 mt-1 ml-1 font-semibold'> Click to see details</span> </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Footer CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="section-footer"
            >
              <p>
                There's a better way. <span className="bold">Validate before you manufacture.</span>
              </p>
              <motion.button
                className="cta-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Testing Today
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- BURNOUT MODAL --- */}
      <AnimatePresence>
        {showBurnoutModal && (
          <motion.div
            className="burnout-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowBurnoutModal(false)}
          >
            <motion.div
              className="burnout-modal"
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setShowBurnoutModal(false)}
              >
                <X size={24} />
              </button>

              <div className="modal-header">
                <h3>Burnout Level: {burnoutLevel}%</h3>
                <p>Your stress indicator based on typical founder journey</p>
              </div>

              <div className="modal-content">
                {/* Metric 1 */}
                <motion.div 
                    className="modal-metric"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                >
                    <span className="modal-metric-label">Stress Level</span>
                    <motion.span 
                        className="modal-metric-value"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                    >
                        Critical ⚠️
                    </motion.span>
                </motion.div>

                {/* Metric 2 */}
                <motion.div 
                    className="modal-metric"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <span className="modal-metric-label">Decision Paralysis</span>
                    <span className="modal-metric-value">High</span>
                </motion.div>

                {/* Metric 3 */}
                <motion.div 
                    className="modal-metric"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <span className="modal-metric-label">Recovery Time</span>
                    <span className="modal-metric-value">6+ Months</span>
                </motion.div>

                {/* Tips Section */}
                <motion.div 
                    className="modal-tips"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                  <h4>🎯 How We Help Reduce Burnout</h4>
                  <ul>
                    <li>Validate ideas BEFORE investing $50K+</li>
                    <li>Real data replaces guesswork & anxiety</li>
                    <li>Fast decisions in 2-4 weeks, not months</li>
                    <li>Sleep better knowing you tested first</li>
                    <li>Focus on winners, kill losers early</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
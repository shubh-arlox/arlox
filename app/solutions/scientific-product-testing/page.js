'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function NeumorphicHeroSection() {
  const [collectionA, setCollectionA] = useState(0);
  const [collectionB, setCollectionB] = useState(0);
  const [collectionC, setCollectionC] = useState(0);

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

  const getProgressWidth = (value, max) => (value / max) * 100;
  const getStatus = (value) => {
    if (value >= 4) return { label: 'Profit Margin ✓', color: 'text-green-600' };
    if (value >= 3) return { label: 'High Demand ✓', color: 'text-green-600' };
    if (value >= 1.5) return { label: 'Trending (But Low ROAS) ⚠️', color: 'text-orange-600' };
    return { label: 'Low ROAS ✗', color: 'text-red-600' };
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#E0E5EC] via-[#E8EEF5] to-[#E0E5EC] overflow-hidden relative font-sans flex items-center justify-center">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary: #1B5FFF;
          --secondary: #7A40D6;
          --text-dark: #202020;
          --text-light: #666666;
          --shadow-dark: #A3B1C6;
          --shadow-light: #FFFFFF;
        }

        /* TRUE NEUMORPHIC BUTTON */
        .neu-button {
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          box-shadow: 
            6px 6px 12px #A3B1C6,
            -6px -6px 12px #FFFFFF;
          border: 0;
          border-radius: 14px;
          color: white;
          font-weight: 700;
          padding: 16px 32px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          font-size: 1rem;
        }

        .neu-button:hover {
          box-shadow: 
            4px 4px 10px #A3B1C6,
            -4px -4px 10px #FFFFFF;
          transform: translateY(2px);
        }

        .neu-button:active {
          box-shadow: 
            inset 4px 4px 10px #A3B1C6,
            inset -4px -4px 10px #FFFFFF;
          transform: translateY(4px);
        }

        /* SECONDARY BUTTON */
        .neu-button-secondary {
          background: linear-gradient(145deg, #E8EEF5, #D1D9E6);
          box-shadow: 
            5px 5px 12px #A3B1C6,
            -5px -5px 12px #FFFFFF;
          border: 0;
          border-radius: 12px;
          color: var(--text-dark);
          font-weight: 600;
          padding: 14px 28px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.95rem;
        }

        .neu-button-secondary:hover {
          box-shadow: 
            3px 3px 8px #A3B1C6,
            -3px -3px 8px #FFFFFF;
          transform: translateY(1px);
        }

        .neu-button-secondary:active {
          box-shadow: 
            inset 3px 3px 8px #A3B1C6,
            inset -3px -3px 8px #FFFFFF;
          transform: translateY(3px);
        }

        /* NEUMORPHIC PROGRESS BAR */
        .neu-progress-bar {
          background: linear-gradient(145deg, #D1D9E6, #E8EEF5);
          box-shadow: 
            inset 3px 3px 8px #A3B1C6,
            inset -3px -3px 8px #FFFFFF;
          border-radius: 10px;
          height: 14px;
          overflow: hidden;
          position: relative;
        }

        .neu-progress-fill {
          height: 100%;
          border-radius: 10px;
          background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
          transition: width 0.3s ease;
          position: relative;
        }

        .neu-progress-fill-green {
          background: linear-gradient(90deg, #10B981 0%, #34d399 100%);
        }

        .neu-progress-fill-purple {
          background: linear-gradient(90deg, #d946ef 0%, #a855f7 100%);
        }

        .progress-label {
          font-size: 11px;
          font-weight: 700;
          margin-top: 6px;
          display: inline-block;
        }

        /* NEUMORPHIC STAT BOX */
        .neu-stat-box {
          background: linear-gradient(145deg, #E8EEF5, #D1D9E6);
          box-shadow: 
            5px 5px 12px #A3B1C6,
            -5px -5px 12px #FFFFFF;
          border-radius: 16px;
          padding: 20px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .neu-stat-box:hover {
          box-shadow: 
            3px 3px 8px #A3B1C6,
            -3px -3px 8px #FFFFFF;
          transform: translateY(-2px);
        }

        /* NEUMORPHIC BADGE */
        .neu-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(145deg, #E8EEF5, #D1D9E6);
          color: var(--primary);
          padding: 10px 18px;
          border-radius: 10px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 
            4px 4px 10px #A3B1C6,
            -4px -4px 10px #FFFFFF;
        }

        /* NEUMORPHIC CARD */
        .neu-card {
          background: linear-gradient(145deg, #E8EEF5, #D1D9E6);
          box-shadow: 
            12px 12px 24px #A3B1C6,
            -12px -12px 24px #FFFFFF;
          border-radius: 24px;
          padding: 32px;
          position: relative;
        }

        /* NEUMORPHIC METRIC */
        .neu-metric {
          background: linear-gradient(145deg, #D1D9E6, #E8EEF5);
          box-shadow: 
            inset 5px 5px 12px #A3B1C6,
            inset -5px -5px 12px #FFFFFF;
          border-radius: 12px;
          padding: 12px;
          text-align: center;
        }

        .text-gradient {
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes pulse-neu {
          0%, 100% { 
            box-shadow: 
              12px 12px 24px #A3B1C6,
              -12px -12px 24px #FFFFFF;
          }
          50% { 
            box-shadow: 
              14px 14px 28px #A3B1C6,
              -14px -14px 28px #FFFFFF;
          }
        }

        .animate-pulse-neu {
          animation: pulse-neu 3s ease-in-out infinite;
        }

        @media (max-width: 1024px) {
          h1 { font-size: 2.25rem; }
          .neu-card { padding: 24px; }
        }

        @media (max-width: 768px) {
          h1 { font-size: 1.875rem; }
          .neu-card { padding: 20px; }
          .neu-button { padding: 12px 24px; font-size: 0.9rem; }
          .neu-button-secondary { padding: 10px 20px; font-size: 0.85rem; }
          .progress-label { font-size: 10px; }
        }
      `}</style>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Badge */}
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
            >
              <div className="neu-badge">
                <span>🧪</span>
                <span>Scientific Product Testing</span>
              </div>
            </motion.div>

            {/* Heading */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-gray-900">
                Launch Products That Are
                <span className="text-gradient block mt-2">Proven to Sell</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-lg">
              Stop gambling with $50K–$500K in inventory. Test with real customers. Validate demand with real data. Manufacture only what's proven to work.
            </p>

            {/* Key Stats */}
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

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6">
              <motion.button
                className="neu-button flex items-center justify-center gap-2 text-base sm:text-lg whitespace-nowrap"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Free Strategy Session
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                className="neu-button-secondary flex items-center justify-center gap-2 text-base whitespace-nowrap"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <PlayCircle size={18} />
                See How It Works
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
              {/* Header */}
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900">
                  Your Brand
                </h2>
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

              {/* Metrics */}
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
                    <motion.div 
                      className="neu-progress-fill" 
                      style={{ width: `${getProgressWidth(collectionA, 5)}%` }}
                      transition={{ width: { duration: 0.3 } }}
                    ></motion.div>
                  </div>
                  <motion.div 
                    className={`progress-label ${getStatus(collectionA).color}`}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
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
                    <motion.div 
                      className="neu-progress-fill neu-progress-fill-green" 
                      style={{ width: `${getProgressWidth(collectionB, 5)}%` }}
                      transition={{ width: { duration: 0.3 } }}
                    ></motion.div>
                  </div>
                  <motion.div 
                    className={`progress-label ${getStatus(collectionB).color}`}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
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
                    <motion.div 
                      className="neu-progress-fill neu-progress-fill-purple" 
                      style={{ width: `${getProgressWidth(collectionC, 5)}%` }}
                      transition={{ width: { duration: 0.3 } }}
                    ></motion.div>
                  </div>
                  <motion.div 
                    className={`progress-label ${getStatus(collectionC).color}`}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {getStatus(collectionC).label}
                  </motion.div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-gray-400 to-transparent mb-6 sm:mb-8"></div>

              {/* Summary Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <motion.div
                  className="neu-stat-box"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900">42</div>
                  <p className="text-xs sm:text-sm text-gray-700 font-bold mt-1 sm:mt-2">Products Tested</p>
                </motion.div>
                <motion.div
                  className="neu-stat-box"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-green-600">18</div>
                  <p className="text-xs sm:text-sm text-gray-700 font-bold mt-1 sm:mt-2">Winners Found</p>
                </motion.div>
                <motion.div
                  className="neu-stat-box"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-red-600">$340K</div>
                  <p className="text-xs sm:text-sm text-gray-700 font-bold mt-1 sm:mt-2">Money Saved</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

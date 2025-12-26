import React, { useState, useEffect } from 'react';
import { 
  AlertTriangle, 
  Search, 
  Camera, 
  Youtube, 
  Sparkles, 
  TrendingDown, 
  TrendingUp, 
  Eye, 
  EyeOff,
  DollarSign,
  Smartphone,
  Info,
  ArrowRight
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { fadeIn } from './SharedUI';
import IcebergSection from './ice';
import IcebergCompetencyModel from './ice';
import IcebergCompetencyModelNeu from './ice';
import IcebergAccordionNeu from './ice';

// Neumorphic Design Constants
const BG_COLOR = '#E0E5EC';
const TEXT_MAIN = '#4D5B7C';
const TEXT_LIGHT = '#8D9CB8';
const SHADOW_OUT = '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)';
const SHADOW_IN = 'inset 6px 6px 10px 0 rgba(163,177,198, 0.7), inset -6px -6px 10px 0 rgba(255,255,255, 0.8)';
const ACCENT_RED = '#FF6B6B';
const ACCENT_BLUE = '#4D96FF';
const ACCENT_PURPLE = '#9D4EDD';

// Component: Neumorphic Card
const NeuCard = ({ children, className = '', pressed = false, accent = '' }) => (
  <div 
    className={`rounded-2xl p-6 transition-all duration-300 ${className}`}
    style={{
      backgroundColor: BG_COLOR,
      boxShadow: pressed ? SHADOW_IN : SHADOW_OUT,
      border: accent ? `1px solid ${accent}` : 'none'
    }}
  >
    {children}
  </div>
);

// Component: Neumorphic Button
const NeuButton = ({ children, onClick, active = false, className = '', variant = 'default' }) => {
  const getTextColor = () => {
    if (active && variant === 'danger') return 'text-red-500';
    if (active && variant === 'primary') return 'text-blue-600';
    return 'text-slate-600';
  };

  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${getTextColor()} ${className}`}
      style={{
        backgroundColor: BG_COLOR,
        boxShadow: active ? SHADOW_IN : SHADOW_OUT,
      }}
    >
      {children}
    </button>
  );
};

// Main App Component
const InvisibleProblem = () => {
  const [viewMode, setViewMode] = useState('traffic'); // 'traffic' or 'revenue'
  const [hoveredSection, setHoveredSection] = useState(null);
  const [userRevenue, setUserRevenue] = useState(30000);
  const [calculatedLoss, setCalculatedLoss] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // Constants for Data
  const VISIBLE_TRAFFIC = 40;
  const HIDDEN_LENS = 25;
  const HIDDEN_DEMAND = 20;
  const HIDDEN_AI = 15;

  useEffect(() => {
    setIsCalculating(true);
    const timer = setTimeout(() => {
      // More realistic calculation accounting for channel overlap
      const visibleRevenue = userRevenue;
      const totalPotential = visibleRevenue / 0.40; // Your 40% base

      // Adjust multipliers based on industry benchmarks:
      // - Lens captures additional traffic with 15% overlap discount
      // - Demand Gen creates new demand with 10% overlap discount
      // - AI Overviews have 25% overlap with existing search

      const lensRevenue = totalPotential * 0.25 * 0.85; // 15% discount for overlap
      const demandRevenue = totalPotential * 0.20 * 0.90; // 10% discount
      const aiRevenue = totalPotential * 0.15 * 0.75; // 25% discount (more overlap)

      setCalculatedLoss({
        total: lensRevenue + demandRevenue + aiRevenue,
        lens: lensRevenue,
        demand: demandRevenue,
        ai: aiRevenue,
        potentialTotal: visibleRevenue + lensRevenue + demandRevenue + aiRevenue
      });
      setIsCalculating(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [userRevenue]);

  const formatCurrency = (val) => new Intl.NumberFormat('en-US', { 
    style: 'currency', 
    currency: 'USD', 
    maximumFractionDigits: 0 
  }).format(val);

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: BG_COLOR, color: TEXT_MAIN }}>

      {/* Header */}
     <header className="p-6 sm:p-10 max-w-6xl mx-auto space-y-8">

  {/* Status Pill */}
  <div className="flex justify-center">
    <motion.div 
      variants={fadeIn}
      className="
        inline-flex items-center gap-3 px-5 py-2 rounded-full
        bg-[#ecf0f3]
        shadow-[inset_2px_2px_4px_rgba(120,130,150,0.35),inset_-2px_-2px_4px_rgba(255,255,255,0.6)]
        text-rose-600 font-semibold text-xs sm:text-sm tracking-wide
      "
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-rose-400/60 animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500" />
      </span>
      The Invisible Problem
    </motion.div>
  </div>

  {/* Main Hero Panel */}
  <div
    className="
      relative rounded-3xl p-6 sm:p-10
      bg-[#ecf0f3]
      shadow-[6px_6px_14px_rgba(120,130,150,0.35),-6px_-6px_14px_rgba(255,255,255,0.55)]
      overflow-hidden
    "
  >
    {/* Very subtle danger wash */}
    <div className="absolute inset-0 bg-gradient-to-br from-rose-100/25 via-transparent to-transparent pointer-events-none" />

    {/* Alert Strip */}
    <div className="flex items-center gap-3 mb-6 text-rose-600">
      <AlertTriangle size={16} />
      <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">
        Algorithmic Risk Detected
      </span>
    </div>

    {/* Headline */}
    <h1 className="text-3xl sm:text-5xl font-black text-slate-800 leading-tight max-w-4xl">
      Your Google Ads Are Quietly Dying From{" "}
      <span className="text-rose-600">
        Single-Engine Dependency
      </span>
    </h1>

    {/* Sub-headline */}
    <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-3xl leading-relaxed">
      You don’t see it in your dashboard.{" "}
      <span className="font-semibold text-slate-700">
        But the damage compounds every time you scale.
      </span>
    </p>

    {/* Narrative Block */}
    <div
      className="
        mt-6 max-w-3xl p-5 rounded-2xl
        bg-[#ecf0f3]
        shadow-[inset_4px_4px_8px_rgba(120,130,150,0.35),inset_-4px_-4px_8px_rgba(255,255,255,0.6)]
        text-slate-600 text-sm sm:text-base leading-relaxed
      "
    >
      You’re running Google Shopping. It’s working.  
      <span className="font-semibold"> 4.0× ROAS at $30K/month.</span>  
      You scale to <span className="font-semibold">$80K/month.</span>
      <br className="hidden sm:block" />
      Within six weeks:
      <span className="text-rose-600 font-semibold">
        {" "}ROAS collapses to 2.3×. CAC doubles. Panic sets in.
      </span>
    </div>

    {/* Closing Truth */}
    <p className="mt-5 text-sm sm:text-base italic text-slate-500 max-w-3xl">
      This isn’t bad luck.{" "}
      <span className="font-semibold text-slate-700">
        It’s algorithmic physics you can’t see.
      </span>
    </p>
  </div>

</header>



      <main className="max-w-6xl mx-auto px-6 pb-20 space-y-16">

        {/* Section 1: The Death Spiral */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <TrendingDown className="text-red-500" />
            <h2 className="text-2xl font-bold text-slate-700">The Single-Engine Death Spiral</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <NeuCard className="relative overflow-hidden group h-full flex flex-col justify-between">
              <div>
                <div className="absolute top-0 left-0 w-2 h-full bg-green-400"></div>
                <h3 className="text-xl font-bold mb-2">Weeks 1-4</h3>
                <p className="text-sm font-bold text-green-500 mb-4">THE HONEYMOON</p>
                <div className="text-sm text-slate-600 mb-4 space-y-1">
                   <p>Target: "Black leather jacket women"</p>
                   <p>Pool: <span className="font-bold">10,000 monthly searches</span></p>
                   <p>Share: Winning 15% (1,500 clicks)</p>
                </div>
              </div>
              <ul className="text-sm space-y-2 text-slate-600 border-t border-slate-200 pt-4">
                <li className="flex justify-between"><span>CPC:</span> <span className="font-bold">$1.80</span></li>
                <li className="flex justify-between"><span>Conv. Rate:</span> <span className="font-bold">3.2%</span></li>
                <li className="flex justify-between"><span>ROAS:</span> <span className="font-bold text-green-600">4.2x</span></li>
                <li className="mt-2 text-xs italic text-green-600">"This works! Let's scale!"</li>
              </ul>
            </NeuCard>

            <NeuCard className="relative overflow-hidden group h-full flex flex-col justify-between">
              <div>
                <div className="absolute top-0 left-0 w-2 h-full bg-yellow-400"></div>
                <h3 className="text-xl font-bold mb-2">Weeks 5-8</h3>
                <p className="text-sm font-bold text-yellow-600 mb-4">THE SATURATION</p>
                <div className="text-sm text-slate-600 mb-4 space-y-1">
                   <p>Budget: $30k → $60k</p>
                   <p>Problem: <span className="font-bold text-red-500">STILL only 10k searches</span></p>
                   <p>Result: Bidding on "black jacket" (low intent)</p>
                </div>
              </div>
              <ul className="text-sm space-y-2 text-slate-600 border-t border-slate-200 pt-4">
                <li className="flex justify-between"><span>CPC:</span> <span className="font-bold text-red-500">$3.20 ↑</span></li>
                <li className="flex justify-between"><span>Conv. Rate:</span> <span className="font-bold text-red-500">1.4% ↓</span></li>
                <li className="flex justify-between"><span>ROAS:</span> <span className="font-bold text-yellow-600">2.6x</span></li>
                <li className="mt-2 text-xs italic text-red-500">Performance crashes in 3 weeks</li>
              </ul>
            </NeuCard>

            <NeuCard className="relative overflow-hidden group h-full flex flex-col justify-between">
              <div>
                <div className="absolute top-0 left-0 w-2 h-full bg-red-500"></div>
                <h3 className="text-xl font-bold mb-2">Weeks 9-12</h3>
                <p className="text-sm font-bold text-red-500 mb-4">THE WALL</p>
                <div className="text-sm text-slate-600 mb-4 space-y-1">
                   <p>Status: Internal Auction Cannibalization</p>
                   <p>Matches: "Black jacket recipe" (Irrelevant)</p>
                   <p>Outcome: Bleeding cash to maintain spend</p>
                </div>
              </div>
              <ul className="text-sm space-y-2 text-slate-600 border-t border-slate-200 pt-4">
                <li className="flex justify-between"><span>CPM:</span> <span className="font-bold text-red-600">$32 ↑↑</span></li>
                <li className="flex justify-between"><span>CAC:</span> <span className="font-bold text-red-600">$92</span></li>
                <li className="flex justify-between"><span>Growth:</span> <span className="font-bold text-red-600">Stalled</span></li>
                <li className="mt-2 text-xs italic text-red-500">Can't scale without profit loss</li>
              </ul>
            </NeuCard>
          </div>
        </section>

       <IcebergAccordionNeu/>

        {/* Section 3: The Calculator */}
        <section id="calculator">
            <div className="flex justify-center items-center mb-8">
    <motion.div 
      variants={fadeIn}
      className="
        inline-flex items-center gap-3 px-5 py-2 rounded-full
        bg-[#ecf0f3]
        shadow-[inset_2px_2px_4px_rgba(120,130,150,0.35),inset_-2px_-2px_4px_rgba(255,255,255,0.6)]
        text-rose-600 font-semibold text-xs sm:text-sm tracking-wide
      "
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-rose-400/60 animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500" />
      </span>
       
      Show My Blindspot
    </motion.div>
  </div>
         <div className='flex justify-center items-center mb-8 text-xl '><h1 className='font-bold text-center '>Lost Revenue Calculator</h1></div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            
            <div>
                
              <p className="mb-4 text-slate-600">Enter your monthly revenue from Google Shopping/Search today:</p>
              <NeuCard pressed className="flex items-center px-4 py-2 mb-6">
                <span className="text-slate-400 font-bold mr-2">$</span>
                <input 
                  type="number" 
                  value={userRevenue} 
                  onChange={(e) => setUserRevenue(Number(e.target.value))}
                  className="bg-transparent border-none outline-none w-full font-mono text-xl text-slate-700 font-bold"
                  placeholder="30000"
                />
              </NeuCard>

              <div className="space-y-4">
                 <div className="flex justify-between text-sm">
                    <span>Current Visibility (40%):</span>
                    <span className="font-bold text-slate-700">{formatCurrency(userRevenue)}</span>
                 </div>
                 <div className="flex justify-between text-sm">
                    <span className="text-green-600 font-bold">Total Potential (100%):</span>
                    <span className="font-bold text-green-600">
                      {isCalculating ? '...' : (calculatedLoss ? formatCurrency(calculatedLoss.potentialTotal) : '-')}
                    </span>
                 </div>
                 <div className="flex justify-between text-sm">
                    <span className="text-orange-500 font-bold">Annual Potential:</span>
                    <span className="font-bold text-orange-500">
                      {isCalculating ? '...' : (calculatedLoss ? formatCurrency(calculatedLoss.potentialTotal * 12) : '-')}
                    </span>
                 </div>
              </div>
            </div>

            <NeuCard className="bg-slate-50 border border-slate-200">
               <h3 className="text-lg font-bold mb-4 text-slate-700 border-b pb-2">Monthly Revenue You're Losing</h3>

               <div className={`space-y-4 transition-opacity duration-300 ${isCalculating ? 'opacity-50' : 'opacity-100'}`}>
                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <Camera size={16} className="text-blue-500"/>
                        <span className="text-sm">Visual Search (Lens)</span>
                     </div>
                     <span className="font-mono font-bold text-red-500">
                       -{calculatedLoss ? formatCurrency(calculatedLoss.lens) : '-'}
                     </span>
                  </div>

                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <Youtube size={16} className="text-indigo-500"/>
                        <span className="text-sm">Demand Gen (Shorts)</span>
                     </div>
                     <span className="font-mono font-bold text-red-500">
                       -{calculatedLoss ? formatCurrency(calculatedLoss.demand) : '-'}
                     </span>
                  </div>

                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <Sparkles size={16} className="text-purple-500"/>
                        <span className="text-sm">AI Overviews</span>
                     </div>
                     <span className="font-mono font-bold text-red-500">
                       -{calculatedLoss ? formatCurrency(calculatedLoss.ai) : '-'}
                     </span>
                  </div>

                  <div className="pt-4 border-t border-slate-200 mt-2">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-slate-500">TOTAL MONTHLY LOSS</span>
                        <span className="text-2xl font-black text-red-600">
                          -{calculatedLoss ? formatCurrency(calculatedLoss.total) : '-'}
                        </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-400">Annual Loss:</span>
                        <span className="font-bold text-red-500">
                          -{calculatedLoss ? formatCurrency(calculatedLoss.total * 12) : '-'}
                        </span>
                    </div>
                  </div>
               </div>

               <div className="mt-4 pt-4 border-t border-slate-300">
                 <p className="text-xs text-slate-500 italic">
                   * Calculations account for 10-25% channel overlap based on industry benchmarks
                 </p>
               </div>
            </NeuCard>
          </div>
        </section>

        {/* Section 4: The Comparison */}
        <section>
           <h2 className="text-2xl font-bold text-slate-700 mb-6 text-center">The Strategic Gap</h2>
           <div className="grid md:grid-cols-2 gap-6">

              {/* Old Way */}
              <NeuCard className="opacity-80">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-lg text-slate-500">Your Current Strategy</h3>
                    <span className="px-2 py-1 bg-slate-200 text-xs rounded text-slate-500 font-bold">LEGACY</span>
                  </div>
                  <div className="space-y-2 text-sm text-slate-600 mb-6">
                     <p>• Shopping + Search Only</p>
                     <p>• 1-2 Images per Product</p>
                     <p>• Waiting for Search Volume</p>
                     <p>• Text-based targeting only</p>
                  </div>
                  <div className="bg-slate-200 p-4 rounded-xl text-center">
                     <div className="text-xs font-bold text-slate-500 uppercase mb-1">Current Annual Revenue</div>
                     <div className="text-2xl font-bold text-slate-600">
                       {calculatedLoss ? formatCurrency(userRevenue * 12) : formatCurrency(30000 * 12)}
                     </div>
                     <div className="text-xs text-red-500 mt-2">Struggling at 2.3x ROAS</div>
                     <div className="text-xs text-slate-400 mt-1">40% market visibility</div>
                  </div>
              </NeuCard>

              {/* New Way */}
              <NeuCard className="border-2 border-blue-200 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-bl-full opacity-30"></div>
                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <h3 className="font-bold text-lg text-blue-600">Power Pack Strategy</h3>
                    <span className="px-2 py-1 bg-blue-100 text-xs rounded text-blue-600 font-bold">2025 READY</span>
                  </div>
                  <div className="space-y-2 text-sm text-slate-600 mb-6">
                     <p>• Lens + Shorts + Discover + AI</p>
                     <p>• 8-12 Lifestyle Images per Product</p>
                     <p>• Creating Demand via Video</p>
                     <p>• Visual + conversational targeting</p>
                     <p className="text-xs italic text-orange-500 pt-2">
                       ⚠️ Demand Gen starts at 1.5-2.0x ROAS (top-funnel), scales to 4-5x when paired with Shopping retargeting
                     </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-4 rounded-xl text-center shadow-lg shadow-blue-200">
                     <div className="text-xs font-bold text-blue-200 uppercase mb-1">Projected Annual Revenue</div>
                     <div className="text-2xl font-bold text-white">
                       {calculatedLoss ? formatCurrency(calculatedLoss.potentialTotal * 12) : '$11.2M'}
                     </div>
                     <div className="text-xs text-blue-100 mt-2">Blended 3.8x ROAS across all channels</div>
                     <div className="text-xs text-green-300 mt-1 font-bold">100% market visibility</div>
                  </div>
                  <div className="mt-4 text-center">
                    <div className="inline-flex items-center gap-2 text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                      <TrendingUp size={14}/>
                      <span className="font-bold">
                        +{calculatedLoss ? formatCurrency((calculatedLoss.potentialTotal - userRevenue) * 12) : '$9.28M'} Annual Growth
                      </span>
                    </div>
                  </div>
              </NeuCard>

           </div>
        </section>

        {/* Section 5: Key Insights */}
        <section>
          <h2 className="text-2xl font-bold text-slate-700 mb-6 text-center" >Why This Happens</h2>
          <div className="grid md:grid-cols-3 gap-6">

            <NeuCard className="border-l-4 border-purple-400">
              <div className="flex items-start gap-3 mb-3">
                <Camera className="text-purple-500 flex-shrink-0 mt-1" size={20}/>
                <div>
                  <h3 className="font-bold text-slate-700 mb-2">Visual Search Domination</h3>
                  <p className="text-sm text-slate-600">
                    40% of fashion searches now start with images. Google Lens handles 20B searches monthly. 
                    Shopping-only campaigns are invisible to this traffic.
                  </p>
                </div>
              </div>
            </NeuCard>

            <NeuCard className="border-l-4 border-blue-400">
              <div className="flex items-start gap-3 mb-3">
                <Search className="text-blue-500 flex-shrink-0 mt-1" size={20}/>
                <div>
                  <h3 className="font-bold text-slate-700 mb-2">The Demand Desert</h3>
                  <p className="text-sm text-slate-600">
                    Search volume has a hard ceiling. Even at 100% share, text searches can't support $1M+/month revenue. 
                    You must CREATE demand, not wait for it.
                  </p>
                </div>
              </div>
            </NeuCard>

            <NeuCard className="border-l-4 border-orange-400">
              <div className="flex items-start gap-3 mb-3">
                <Sparkles className="text-orange-500 flex-shrink-0 mt-1" size={20}/>
                <div>
                  <h3 className="font-bold text-slate-700 mb-2">Creative Starvation</h3>
                  <p className="text-sm text-slate-600">
                    Performance Max needs 8-12 images per product to unlock full audience reach. 
                    Your 2-image feed gives Google 5x fewer "keys" than competitors.
                  </p>
                </div>
              </div>
            </NeuCard>

          </div>
        </section>

      </main>

      
    </div>
  );
};

export default InvisibleProblem;
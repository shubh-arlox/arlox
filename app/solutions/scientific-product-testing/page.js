// app/page.js
"use client";

import { useEffect } from "react";
import {
  ArrowRight,
  Microscope,
  Quote,
  PieChart,
  Target,
  TrendingUp,
  User,
  FileText,
  Rocket,
  TrendingDown,
  Dices,
  Wallet,
  X,
  Bot,
  Brain,
  Unlock,
  Search,
  Mic,
  GitBranch,
  Calendar,
  Calculator,
  Map as MapIcon,
  RefreshCw,
  CheckCircle,
  Book,
  Clipboard,
  MapPin,
  Lightbulb,
  HelpCircle,
  Clock,
  XCircle,
  Check,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function Page() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://cdn.tailwindcss.com";
      script.async = true;
      document.head.appendChild(script);

      const fontLink = document.createElement("link");
      fontLink.rel = "stylesheet";
      fontLink.href =
        "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap";
      document.head.appendChild(fontLink);
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Arloxian Market Research & Analysis | Scientific Intelligence</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          body {
            font-family: 'Inter', sans-serif;
            background-color: #E0E5EC;
            color: #2D3748;
            overflow-x: hidden;
          }

          .neu-flat {
            background: #E0E5EC;
            box-shadow: 9px 9px 16px rgb(163,177,198,0.6), 
                        -9px -9px 16px rgba(255,255,255, 0.5);
            border-radius: 24px;
            border: 1px solid rgba(255,255,255,0.2);
          }

          .neu-pressed {
            background: #E0E5EC;
            box-shadow: inset 6px 6px 10px 0 rgba(163,177,198, 0.7), 
                        inset -6px -6px 10px 0 rgba(255,255,255, 0.8);
            border-radius: 24px;
          }

          .neu-convex {
            background: linear-gradient(145deg, #f0f5fc, #caced4);
            box-shadow: 9px 9px 16px rgb(163,177,198,0.6), 
                        -9px -9px 16px rgba(255,255,255, 0.5);
            border-radius: 24px;
          }

          .neu-icon-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #E0E5EC;
            box-shadow: 5px 5px 10px #a3b1c6, 
                        -5px -5px 10px #ffffff;
            transition: all 0.3s ease;
          }

          .neu-icon-btn:hover {
            box-shadow: inset 5px 5px 10px #a3b1c6, 
                        inset -5px -5px 10px #ffffff;
            color: #000;
          }

          .fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
            opacity: 0;
            transform: translateY(20px);
          }

          @keyframes fadeInUp {
            to { opacity: 1; transform: translateY(0); }
          }

          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-400 { animation-delay: 0.4s; }
        `}</style>
      </head>
      <body className="antialiased min-h-screen selection:bg-gray-300">
        {/* Navigation */}
        <nav className="fixed w-full z-50 top-0 left-0 px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white font-bold text-xs">
                A
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold tracking-tight text-gray-800">
                  ARLOXIAN
                </span>
                <span className="text-[10px] text-gray-500 tracking-widest uppercase">
                  Research &amp; Analysis
                </span>
              </div>
            </div>
            <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
              <a href="#protocol" className="hover:text-black transition-colors">
                The Protocol
              </a>
              <a
                href="#comparison"
                className="hover:text-black transition-colors"
              >
                Proof
              </a>
              <a href="#roadmap" className="hover:text-black transition-colors">
                Process
              </a>
              <a href="#faq" className="hover:text-black transition-colors">
                FAQ
              </a>
            </div>
            <button className="neu-flat px-6 py-2 text-sm font-semibold hover:scale-[0.98] transition-transform text-gray-800">
              Book Audit
            </button>
          </div>
        </nav>

        {/* SECTION 1: HERO */}
        <section className="pt-40 pb-20 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div className="fade-in-up z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-pressed mb-8">
                <span className="text-xs font-semibold tracking-wider uppercase text-gray-500">
                  THE ARLOXIAN INTELLIGENCE PROTOCOL
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 text-gray-900 leading-[1.1]">
                Know More Than Your Competitors. <br />
                <span className="text-gray-400">Spend Less Finding Out.</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed mb-10 border-l-4 border-blue-500 pl-6">
                Scientific market intelligence that turns guesswork into
                mathematical certainty. We extract what customers actually
                want—not what surveys claim they want—through forensic
                behavioral research.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-10">
                <div className="neu-pressed p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-gray-800">15-20</div>
                  <div className="text-[10px] uppercase text-gray-500 font-bold">
                    Interviews / Segment
                  </div>
                </div>
                <div className="neu-pressed p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-gray-800">10-14</div>
                  <div className="text-[10px] uppercase text-gray-500 font-bold">
                    Days To Complete
                  </div>
                </div>
                <div className="neu-pressed p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-red-500">87%</div>
                  <div className="text-[10px] uppercase text-gray-500 font-bold">
                    Launch Wrong
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button className="neu-flat px-8 py-4 text-blue-600 font-bold rounded-full hover:scale-95 active:scale-90 transition-all flex items-center justify-center gap-2 text-lg w-full md:w-auto">
                  Get Your Market Intelligence Audit
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-xs text-gray-500 text-center md:text-left ml-4">
                  90-minute deep-dive. Zero obligation. See what we&apos;d
                  uncover.
                </p>
                <button className="px-8 py-2 text-gray-500 font-medium hover:text-gray-900 transition-colors w-full md:w-auto text-left ml-4 underline">
                  See The Full SOP
                </button>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative h-[600px] w-full flex items-center justify-center fade-in-up delay-200">
              {/* Central Microscope Metaphor */}
              <div className="neu-convex w-72 h-72 rounded-full flex items-center justify-center relative z-20">
                <Microscope className="w-32 h-32 text-gray-300" />
              </div>

              {/* Floating Data Cards */}
              <div className="absolute top-10 right-4 neu-flat p-5 rounded-xl z-30 animate-bounce delay-100 max-w-[220px]">
                <div className="flex items-start gap-3">
                  <Quote className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                  <p className="text-sm text-gray-600 italic">
                    &quot;I waste 5 hours every Sunday...&quot;
                  </p>
                </div>
              </div>

              <div className="absolute bottom-32 left-0 neu-flat p-5 rounded-xl z-30 animate-bounce delay-300">
                <div className="flex items-center gap-3">
                  <PieChart className="w-6 h-6 text-purple-500" />
                  <div>
                    <p className="text-sm font-bold text-gray-800">
                      Segment A: 42%
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 left-[-20px] neu-flat p-4 rounded-xl z-10 opacity-90">
                <div className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-red-500" />
                  <p className="text-xs font-bold text-gray-600">
                    Pain: Time Poverty
                  </p>
                </div>
              </div>

              <div className="absolute bottom-10 right-20 neu-flat p-4 rounded-xl z-10 opacity-90">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                  <p className="text-sm font-bold text-gray-800">
                    ROAS: 5.8x
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: SYSTEMIC DIAGNOSIS */}
        <section
          className="py-20 px-6 bg-[#E0E5EC]"
          id="diagnosis"
        >
          <div className="max-w-5xl mx-auto text-center mb-16 fade-in-up">
            <div className="neu-pressed inline-block px-4 py-1 rounded-full mb-4">
              <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">
                THE INDUSTRY FAILURE LOOP
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why 87% Of Fashion Brands Launch With The Wrong Messaging (And
              Bleed Budget Proving It)
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The standard agency playbook: &quot;Launch fast, test
              everything, optimize later.&quot; Sounds efficient. Costs you
              6-12 months and $50K-$200K discovering what you could have known
              in Week 1.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto mb-20 fade-in-up delay-100">
            {/* Failure Loop Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
              {/* Node 1 */}
              <div className="neu-flat p-4 rounded-xl border-t-4 border-blue-600 text-center h-full">
                <User className="w-6 h-6 mx-auto text-blue-600 mb-2" />
                <h4 className="font-bold text-gray-800 text-xs mb-1">
                  Persona Guesswork
                </h4>
                <p className="text-[10px] text-gray-500">
                  Agency builds ICA from founder&apos;s assumptions
                </p>
                <div className="mt-2 text-[9px] text-red-400 font-bold">
                  No actual interviews
                </div>
              </div>

              {/* Node 2 */}
              <div className="neu-flat p-4 rounded-xl border-t-4 border-blue-400 text-center h-full">
                <FileText className="w-6 h-6 mx-auto text-blue-400 mb-2" />
                <h4 className="font-bold text-gray-800 text-xs mb-1">
                  Generic Messaging
                </h4>
                <p className="text-[10px] text-gray-500">
                  Copy uses industry jargon, not customer language
                </p>
              </div>

              {/* Node 3 */}
              <div className="neu-flat p-4 rounded-xl border-t-4 border-yellow-500 text-center h-full">
                <Rocket className="w-6 h-6 mx-auto text-yellow-500 mb-2" />
                <h4 className="font-bold text-gray-800 text-xs mb-1">
                  Campaign Launch
                </h4>
                <p className="text-[10px] text-gray-500">
                  $5K-$20K initial budget deployed
                </p>
                <div className="mt-2 text-[9px] text-red-400 font-bold">
                  Wrong audience + wrong message = math
                </div>
              </div>

              {/* Node 4 */}
              <div className="neu-flat p-4 rounded-xl border-t-4 border-orange-500 text-center h-full">
                <TrendingDown className="w-6 h-6 mx-auto text-orange-500 mb-2" />
                <h4 className="font-bold text-gray-800 text-xs mb-1">
                  Low CTR / High CPA
                </h4>
                <p className="text-[10px] text-gray-500">
                  1.2% CTR, $85 CPA (need: $35)
                </p>
              </div>

              {/* Node 5 */}
              <div className="neu-flat p-4 rounded-xl border-t-4 border-red-500 text-center h-full">
                <Dices className="w-6 h-6 mx-auto text-red-500 mb-2" />
                <h4 className="font-bold text-gray-800 text-xs mb-1">
                  &quot;Optimization&quot;
                </h4>
                <p className="text-[10px] text-gray-500">
                  Test 40 variations hoping one works
                </p>
                <div className="mt-2 text-[9px] text-red-400 font-bold">
                  Optimizing guesses = still guessing
                </div>
              </div>

              {/* Node 6 */}
              <div className="neu-flat p-4 rounded-xl border-t-4 border-red-700 text-center h-full bg-red-50">
                <Wallet className="w-6 h-6 mx-auto text-red-700 mb-2" />
                <h4 className="font-bold text-gray-800 text-xs mb-1">
                  Budget Exhausted
                </h4>
                <p className="text-[10px] text-gray-500">
                  6 months later: &quot;Market isn&apos;t ready&quot; excuse
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <div className="neu-convex inline-flex items-center gap-2 px-6 py-3 rounded-full text-blue-600 font-bold text-sm cursor-pointer hover:text-blue-700">
                The Arloxian Protocol Starts Here
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto fade-in-up delay-200">
            {/* The Cost */}
            <div className="neu-pressed p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-red-500 mb-6">
                The Cost Of Assumption-Based Campaigns
              </h3>
              <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex gap-3">
                  <X className="w-5 h-5 text-red-400 shrink-0" /> $15K-$50K
                  wasted testing messages that were never going to work
                </li>
                <li className="flex gap-3">
                  <X className="w-5 h-5 text-red-400 shrink-0" /> 3-6 months
                  lost while competitors who &quot;knew&quot; their customers
                  pulled ahead
                </li>
                <li className="flex gap-3">
                  <X className="w-5 h-5 text-red-400 shrink-0" /> Creative team
                  demoralized by constant &quot;failing&quot; tests
                </li>
                <li className="flex gap-3">
                  <X className="w-5 h-5 text-red-400 shrink-0" /> Founder loses
                  confidence in paid acquisition entirely
                </li>
                <li className="flex gap-3">
                  <X className="w-5 h-5 text-red-400 shrink-0" /> Agency blames
                  &quot;the algorithm&quot; or &quot;iOS 14&quot; instead of
                  their methodology
                </li>
              </ul>
            </div>

            {/* The Cause */}
            <div className="neu-flat p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Why This Happens
              </h3>
              <div className="mb-6">
                <p className="font-bold text-sm mb-2">
                  The standard agency intake:
                </p>
                <ul className="space-y-2 text-sm text-gray-500 ml-4 border-l-2 border-gray-300 pl-4">
                  <li>1-hour kick-off call</li>
                  <li>&quot;Tell us about your ideal customer&quot;</li>
                  <li>You describe who you hope buys</li>
                  <li>Agency writes copy based on your assumptions</li>
                  <li>Launch</li>
                </ul>
              </div>
              <div className="neu-pressed p-4 rounded-xl border-l-4 border-red-400">
                <p className="text-xs font-bold text-gray-700 mb-1">MISSING:</p>
                <p className="text-sm text-gray-600 italic">
                  &quot;Talking to actual humans who already tried to solve
                  this problem.&quot;
                </p>
              </div>
              <div className="mt-6 text-sm font-medium text-gray-700">
                You can&apos;t optimize your way out of a positioning problem.
                If you&apos;re talking to the wrong segment with the wrong
                promise, no amount of A/B testing will save you.
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: AI RECONCILIATION */}
        <section
          className="py-24 px-6"
          id="ai-reconciliation"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Why AI-Assisted Research Isn&apos;t &quot;Cheating&quot;—It&apos;s
                Removing The Bottleneck That Made This Impossible At Scale
              </h2>
              <p className="text-gray-600 max-w-4xl mx-auto">
                You&apos;ve been told that real research means months of manual
                work. But the constraint was never &quot;effort&quot;—it was
                economic feasibility. AI doesn&apos;t replace the thinking. It
                removes the barrier that made thinking at this depth
                impossibly expensive.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              {/* Old Constraint */}
              <div className="neu-pressed p-8 rounded-3xl opacity-70">
                <h3 className="text-xl font-bold text-gray-500 mb-6">
                  Old Constraint (Manual Research)
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                    <span className="text-gray-500 font-medium">
                      Transcription Time
                    </span>
                    <span className="font-mono text-gray-600">
                      20-30 interviews = 40-60 hours
                    </span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                    <span className="text-gray-500 font-medium">
                      Thematic Coding
                    </span>
                    <span className="font-mono text-gray-600">
                      3-5 days analyst time
                    </span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                    <span className="text-gray-500 font-medium">Cost</span>
                    <span className="font-mono text-gray-600">
                      $15K-$25K per project
                    </span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                    <span className="text-gray-500 font-medium">Timeline</span>
                    <span className="font-mono text-gray-600">6-8 weeks</span>
                  </div>
                  <div className="flex justify-between text-sm pt-2 bg-gray-200 p-2 rounded">
                    <span className="text-gray-600 font-bold">
                      Economic Result
                    </span>
                    <span className="text-gray-600 font-bold text-right">
                      Only huge brands could afford this
                    </span>
                  </div>
                </div>
              </div>

              {/* New Constraint */}
              <div className="neu-flat p-8 rounded-3xl border-2 border-blue-500/20 transform md:scale-105 shadow-xl">
                <h3 className="text-xl font-bold text-blue-600 mb-6">
                  New Constraint (AI-Augmented Protocol)
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                    <span className="text-gray-700 font-medium">
                      Transcription Time
                    </span>
                    <span className="font-mono text-gray-900 font-bold">
                      Real-time (Otter.ai) = 0 hours
                    </span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                    <span className="text-gray-700 font-medium">
                      Thematic Coding
                    </span>
                    <span className="font-mono text-gray-900 font-bold">
                      AI pattern recognition: 2 hours validation
                    </span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                    <span className="text-gray-700 font-medium">Cost</span>
                    <span className="font-mono text-gray-900 font-bold">
                      $3K-$5K (same depth, 80% less labor)
                    </span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                    <span className="text-gray-700 font-medium">Timeline</span>
                    <span className="font-mono text-gray-900 font-bold">
                      10-14 days
                    </span>
                  </div>
                  <div className="flex justify-between text-sm pt-2 bg-blue-100 p-2 rounded">
                    <span className="text-blue-800 font-bold">
                      Economic Result
                    </span>
                    <span className="text-blue-800 font-bold text-right">
                      Now feasible for $100K-$500K brands
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="neu-convex p-6 rounded-2xl text-center max-w-3xl mx-auto mb-16">
              <p className="text-gray-800 font-bold text-lg">
                AI didn&apos;t change what good research is. It changed who can
                afford to do it properly.
              </p>
            </div>

            {/* Reassurance Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="neu-flat p-8 rounded-3xl">
                <div className="w-12 h-12 rounded-full neu-pressed flex items-center justify-center mb-6 text-gray-600">
                  <Bot className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-800 mb-1">What AI Does</h4>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">
                  The Mechanical Work
                </p>
                <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
                  <li>
                    Transcribes 15-20 hours of interviews in real-time
                  </li>
                  <li>Tags 500+ data points across transcripts</li>
                  <li>Clusters thematic patterns</li>
                  <li>Cross-references competitive intel</li>
                  <li>Generates first-draft segmentation models</li>
                </ul>
              </div>

              <div className="neu-flat p-8 rounded-3xl border border-blue-200">
                <div className="w-12 h-12 rounded-full neu-pressed flex items-center justify-center mb-6 text-blue-600">
                  <Brain className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-800 mb-1">What Humans Do</h4>
                <p className="text-xs text-blue-500 uppercase tracking-widest mb-4">
                  The Strategic Work
                </p>
                <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
                  <li>
                    Designs the interview questions (The Mom Test)
                  </li>
                  <li>Conducts live interviews with active listening</li>
                  <li>Interprets why patterns matter strategically</li>
                  <li>Connects insights to offer engineering</li>
                  <li>Makes final positioning recommendations</li>
                </ul>
              </div>

              <div className="neu-flat p-8 rounded-3xl">
                <div className="w-12 h-12 rounded-full neu-pressed flex items-center justify-center mb-6 text-green-600">
                  <Unlock className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-800 mb-1">What Changes</h4>
                <p className="text-xs text-green-500 uppercase tracking-widest mb-4">
                  The Unlocked Capability
                </p>
                <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
                  <li>5X faster without quality loss</li>
                  <li>75% cost reduction</li>
                  <li>Accessible to mid-market brands</li>
                  <li>Repeatable every 6 months (vs. once-ever)</li>
                  <li>Data depth previously reserved for Fortune 500s</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: THE MECHANISM (7 Phases) */}
        <section
          className="py-24 px-6 bg-[#E0E5EC]"
          id="mechanism"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="neu-pressed inline-block px-4 py-1 rounded-full mb-4">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                  THE SOLUTION ARCHITECTURE
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">
                The Arloxian Intelligence Protocol™
              </h2>
              <p className="text-gray-600 mt-4">
                Seven-Phase Forensic Research System That Extracts Mathematical
                Certainty From Market Chaos
              </p>
            </div>

            {/* Timeline Badge */}
            <div className="flex justify-center mb-12">
              <div className="neu-convex px-8 py-4 rounded-2xl text-center">
                <div className="text-xl font-bold text-gray-800">
                  Total Timeline: 10-14 Days
                </div>
                <div className="text-xs text-gray-500">
                  What used to take 6-8 weeks
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Phase 1 */}
              <div className="neu-flat p-6 rounded-2xl flex gap-4">
                <div className="text-4xl font-bold text-gray-200">1</div>
                <div>
                  <h4 className="font-bold text-gray-800 flex items-center gap-2">
                    <Search className="w-4 h-4 text-gray-500" /> Pre-Research
                    Intelligence Gathering
                  </h4>
                  <span className="text-xs font-bold text-blue-500 uppercase tracking-wide block mb-2">
                    Days 1-3
                  </span>
                  <p className="text-sm text-gray-600 mb-2">
                    Kickoff call, data audit, hypothesis drafting, recruitment
                    design.
                  </p>
                  <p className="text-xs text-gray-500 border-t border-gray-200 pt-2">
                    <strong>You Provide:</strong> Analytics access, 5-10
                    customer intros, competitor list.
                  </p>
                  <p className="text-xs font-bold text-gray-700 mt-2">
                    <FileText className="w-3 h-3 inline" /> Deliverable:
                    Customer Avatar Hypothesis Document
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="neu-flat p-6 rounded-2xl flex gap-4 border-2 border-blue-500/20">
                <div className="text-4xl font-bold text-blue-100">2</div>
                <div>
                  <h4 className="font-bold text-blue-700 flex items-center gap-2">
                    <Mic className="w-4 h-4" /> The Mom Test Interview Protocol
                  </h4>
                  <span className="text-xs font-bold text-blue-500 uppercase tracking-wide block mb-2">
                    Days 4-10
                  </span>
                  <p className="text-sm text-gray-600 mb-2">
                    15-20 behavioral interviews per segment. No pitching. Pure
                    listening. Focusing on past behavior.
                  </p>

                  <div className="neu-pressed p-3 rounded-lg bg-blue-50/50 mb-2 text-xs">
                    <strong>Interview Structure:</strong> Trigger Event,
                    Struggle Safari, Competitive Audit, Value Quantification,
                    Decision Process, Outcome Reality Check.
                  </div>
                  <p className="text-xs font-bold text-gray-700">
                    <DatabaseIcon /> Deliverable: Voice-of-Customer Database
                  </p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="neu-flat p-6 rounded-2xl flex gap-4">
                <div className="text-4xl font-bold text-gray-200">3</div>
                <div>
                  <h4 className="font-bold text-gray-800 flex items-center gap-2">
                    <GitBranch className="w-4 h-4 text-gray-500" /> Thematic
                    Coding + Segmentation
                  </h4>
                  <span className="text-xs font-bold text-blue-500 uppercase tracking-wide block mb-2">
                    Days 11-14
                  </span>
                  <p className="text-sm text-gray-600 mb-2">
                    AI-assisted analysis, pain point clustering (Ask Method),
                    prioritized segment matrix.
                  </p>
                  <p className="text-xs font-bold text-gray-700 mt-2">
                    <FileText className="w-3 h-3 inline" /> Deliverable:
                    Customer Intelligence Profile (3-5 Personas)
                  </p>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="neu-flat p-6 rounded-2xl flex gap-4">
                <div className="text-4xl font-bold text-gray-200">4</div>
                <div>
                  <h4 className="font-bold text-gray-800 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-gray-500" /> Market
                    Trend &amp; Timing Analysis
                  </h4>
                  <span className="text-xs font-bold text-blue-500 uppercase tracking-wide block mb-2">
                    Day 14
                  </span>
                  <p className="text-sm text-gray-600 mb-2">
                    Google Trends (5-year), search volume, adoption lifecycle
                    mapping, seasonality research.
                  </p>
                  <p className="text-xs font-bold text-gray-700 mt-2">
                    <Calendar className="w-3 h-3 inline" /> Deliverable:
                    12-Month Market Timing Calendar
                  </p>
                </div>
              </div>

              {/* Phase 5 */}
              <div className="neu-flat p-6 rounded-2xl flex gap-4">
                <div className="text-4xl font-bold text-gray-200">5</div>
                <div>
                  <h4 className="font-bold text-gray-800 flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-gray-500" /> Value
                    Equation Optimization
                  </h4>
                  <span className="text-xs font-bold text-blue-500 uppercase tracking-wide block mb-2">
                    Days 15-16
                  </span>
                  <p className="text-sm text-gray-600 mb-2">
                    Hormozi Value Equation scoring. Offer stack redesign. Price
                    strategy matrix. Guarantee framework.
                  </p>
                  <p className="text-xs font-bold text-gray-700 mt-2">
                    <FileText className="w-3 h-3 inline" /> Deliverable: Offer
                    Optimization Report
                  </p>
                </div>
              </div>

              {/* Phase 6 */}
              <div className="neu-flat p-6 rounded-2xl flex gap-4">
                <div className="text-4xl font-bold text-gray-200">6</div>
                <div>
                  <h4 className="font-bold text-gray-800 flex items-center gap-2">
                    <MapIcon className="w-4 h-4 text-gray-500" /> 90-Day Media
                    Buying Roadmap
                  </h4>
                  <span className="text-xs font-bold text-blue-500 uppercase tracking-wide block mb-2">
                    Days 17-18
                  </span>
                  <p className="text-sm text-gray-600 mb-2">
                    Grand Slam Market Report compilation. Campaign roadmap
                    (Validation -&gt; Scaling -&gt; Optimization). Creative
                    briefs. KPI benchmarks.
                  </p>
                  <div className="mt-2 space-y-1">
                    <p className="text-xs font-bold text-gray-700">
                      <Book className="w-3 h-3 inline" /> Deliverable: Grand
                      Slam Report (80-120 pages)
                    </p>
                    <p className="text-xs font-bold text-gray-700">
                      <Clipboard className="w-3 h-3 inline" /> Deliverable:
                      Creative Briefs
                    </p>
                    <p className="text-xs font-bold text-gray-700">
                      <MapPin className="w-3 h-3 inline" /> Deliverable:
                      Execution Roadmap
                    </p>
                  </div>
                </div>
              </div>

              {/* Phase 7 */}
              <div className="neu-flat p-6 rounded-2xl flex gap-4 md:col-span-2">
                <div className="text-4xl font-bold text-green-100">7</div>
                <div className="w-full">
                  <h4 className="font-bold text-green-700 flex items-center gap-2">
                    <RefreshCw className="w-4 h-4" /> Delivery + Continuous
                    Intelligence
                  </h4>
                  <span className="text-xs font-bold text-green-500 uppercase tracking-wide block mb-2">
                    Day 19+ (Optional Ongoing)
                  </span>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-2 font-bold">
                        The Handoff:
                      </p>
                      <ul className="text-sm text-gray-600 list-disc pl-4">
                        <li>90-minute presentation &amp; walkthrough</li>
                        <li>Q&amp;A session with team/agency</li>
                        <li>
                          Handoff of all source files (transcripts, data)
                        </li>
                      </ul>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-2 font-bold">
                        Ongoing Add-On:
                      </p>
                      <ul className="text-sm text-gray-600 list-disc pl-4">
                        <li>Monthly interviews (n=5) to track evolution</li>
                        <li>Competitive monitoring</li>
                        <li>Quarterly trend updates</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 neu-convex p-3 rounded-xl text-center text-green-800 font-bold text-sm bg-green-50">
                    <CheckCircle className="w-4 h-4 inline mr-2" /> Deliverable:
                    Complete Research Package
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: CATEGORY POSITIONING */}
        <section
          className="py-24 px-6"
          id="positioning"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              This Isn&apos;t A &quot;Better Agency&quot;—It&apos;s A Different
              Category
            </h2>
            <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              You&apos;re not choosing between good research and bad research.
              You&apos;re choosing between two philosophies: &quot;Launch and
              Learn&quot; vs. &quot;Know Before You Go.&quot; Both have
              trade-offs. Choose your risk profile.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Positioning Map Visual */}
              <div className="neu-pressed p-8 rounded-3xl relative h-[400px] flex items-center justify-center bg-gray-50 overflow-hidden">
                {/* Axes */}
                <div className="absolute left-8 top-8 bottom-8 w-px bg-gray-300" />
                <div className="absolute bottom-8 left-8 right-8 h-px bg-gray-300" />

                {/* Axis Labels */}
                <span className="absolute top-4 left-4 text-[10px] font-bold text-gray-400 uppercase -rotate-90 origin-bottom-left">
                  Statistical Certainty
                </span>
                <span className="absolute bottom-4 right-4 text-[10px] font-bold text-gray-400 uppercase">
                  Speed to Launch
                </span>

                {/* Quadrant Labels */}
                <span className="absolute top-10 right-10 text-xs font-bold text-gray-300">
                  Certainty Before Launch
                </span>
                <span className="absolute bottom-10 left-10 text-xs font-bold text-gray-300">
                  Assumption Based
                </span>

                {/* Points */}
                <div className="absolute left-[20%] top-[15%] flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-gray-400" />
                  <span className="text-[9px] font-bold text-gray-500 mt-1 bg-white/80 px-1 rounded">
                    Traditional Firms ($50K, 8wks)
                  </span>
                </div>

                <div className="absolute left-[85%] top-[75%] flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="text-[9px] font-bold text-red-500 mt-1 bg-white/80 px-1 rounded">
                    Most Agencies (0 days)
                  </span>
                </div>

                <div className="absolute left-[25%] top-[80%] flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-gray-400" />
                  <span className="text-[9px] font-bold text-gray-500 mt-1 bg-white/80 px-1 rounded">
                    DIY Founder
                  </span>
                </div>

                <div className="absolute left-[45%] top-[25%] flex flex-col items-center z-10">
                  <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                  <span className="text-[10px] font-bold text-blue-600 mt-1 bg-white px-2 py-1 rounded shadow border border-blue-100">
                    ⭐ ARLOXIAN PROTOCOL
                  </span>
                  <span className="text-[8px] text-gray-500 mt-0.5 bg-white/80 px-1 rounded">
                    10-14 days, $4.5K
                  </span>
                </div>
              </div>

              {/* Tradeoff Table */}
              <div className="neu-flat p-8 rounded-3xl">
                <h3 className="text-lg font-bold text-gray-800 mb-6">
                  The Trade-Off Matrix
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="grid grid-cols-3 gap-2 border-b border-gray-200 pb-2 font-bold text-gray-400 text-xs uppercase tracking-wider">
                    <div>Dimension</div>
                    <div>Launch Fast Agency</div>
                    <div>Arloxian Protocol</div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-2 border-b border-gray-200">
                    <div className="font-bold text-gray-700">
                      Speed to Launch
                    </div>
                    <div className="text-green-600 font-bold">🟢 5-7 days</div>
                    <div className="text-yellow-600 font-bold">
                      🟡 14-21 days
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-2 border-b border-gray-200">
                    <div className="font-bold text-gray-700">
                      Message-Market Fit
                    </div>
                    <div className="text-red-500 font-bold">
                      🔴 10-20% (Guessing)
                    </div>
                    <div className="text-green-600 font-bold">
                      🟢 70-85% (Validated)
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-2 border-b border-gray-200">
                    <div className="font-bold text-gray-700">
                      Wasted Budget Risk
                    </div>
                    <div className="text-red-500 font-bold">
                      🔴 High ($15K-$50K)
                    </div>
                    <div className="text-green-600 font-bold">
                      🟢 Low ($0-$5K)
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-2 border-b border-gray-200">
                    <div className="font-bold text-gray-700">
                      Time to Profit
                    </div>
                    <div className="text-red-500 font-bold">🔴 3-9 Months</div>
                    <div className="text-green-600 font-bold">
                      🟢 30-60 Days
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-2 border-b border-gray-200">
                    <div className="font-bold text-gray-700">Upfront Cost</div>
                    <div className="text-green-600 font-bold">
                      🟢 $0 (Skipped)
                    </div>
                    <div className="text-red-500 font-bold">🔴 $4,500</div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-6 italic">
                  Transparency: If you have unlimited budget and love testing,
                  you don&apos;t need us. If you have one shot to get it right,
                  you do.
                </p>
              </div>
            </div>

            {/* Key Insight */}
            <div className="mt-12 neu-convex p-8 rounded-3xl text-center max-w-4xl mx-auto">
              <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-500" /> The Pareto
                Principle Applied To Research
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Most agencies operate in the &quot;fast but blind&quot;
                quadrant. Traditional firms in &quot;certain but slow&quot;.
                The Arloxian Protocol occupies the Pareto frontier:{" "}
                <strong>80% of the certainty in 20% of the time.</strong>
              </p>
              <div className="text-sm font-bold text-gray-700">
                We optimized for the middle: Fast enough to matter. Certain
                enough to bet on.
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: FAQ (Silent Objections) */}
        <section
          className="py-24 px-6 bg-[#E0E5EC]"
          id="faq"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              The Silent Objections
            </h2>
            <p className="text-gray-600 text-center mb-12">
              We&apos;ve done this 50+ times. These are the questions you&apos;re
              not asking out loud.
            </p>

            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="neu-flat p-6 rounded-2xl">
                <h4 className="font-bold text-gray-800 mb-3 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-gray-400 mt-1" />
                  How is this different from sending a survey to my list?
                </h4>
                <div className="pl-8 text-sm text-gray-600 space-y-2">
                  <p>
                    <strong>
                      Surveys reveal aspirations. Interviews reveal truth.
                    </strong>
                  </p>
                  <p>
                    Survey: &quot;Would you buy premium?&quot; → 80% say yes.
                    Reality: 8% buy.
                  </p>
                  <p>
                    The Mom Test methodology focuses on{" "}
                    <strong>past behavior</strong> (&quot;Walk me through the
                    last time you bought...&quot;), not future intentions.
                    Plus, we interview <strong>churned customers</strong> who
                    won&apos;t answer your surveys.
                  </p>
                </div>
              </div>

              {/* FAQ 2 */}
              <div className="neu-flat p-6 rounded-2xl">
                <h4 className="font-bold text-gray-800 mb-3 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-gray-400 mt-1" />
                  Can&apos;t I just have my agency do interviews?
                </h4>
                <div className="pl-8 text-sm text-gray-600 space-y-2">
                  <p>You can, but 3 things usually go wrong:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>
                      <strong>Wrong Questions:</strong> They ask &quot;What do
                      you like about us?&quot; (Compliments) vs &quot;What
                      triggered your search?&quot; (Intel).
                    </li>
                    <li>
                      <strong>Confirmation Bias:</strong> They want their
                      creative to work. We have no horse in the race.
                    </li>
                    <li>
                      <strong>No Methodology:</strong> 15 random chats ≠
                      research. We use sampling + coding + validation.
                    </li>
                  </ul>
                </div>
              </div>

              {/* FAQ 3 */}
              <div className="neu-flat p-6 rounded-2xl">
                <h4 className="font-bold text-gray-800 mb-3 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-gray-400 mt-1" />
                  Can&apos;t I just test my way to the answer?
                </h4>
                <div className="pl-8 text-sm text-gray-600 space-y-2">
                  <p>
                    <strong>Option A (Test):</strong> 90 days, $30K-$45K spend,
                    1 audience &quot;kinda works&quot;.
                  </p>
                  <p>
                    <strong>Option B (Know):</strong> $4.5K research + 60 days,
                    $30K spend = Repeatable system.
                  </p>
                  <p className="font-bold text-gray-800">
                    The cost is the same. The difference is WHEN you pay to
                    learn.
                  </p>
                  <p>
                    We frontload learning. Agencies backload it (and call it
                    &quot;optimization&quot;).
                  </p>
                </div>
              </div>

              {/* FAQ 4 */}
              <div className="neu-flat p-6 rounded-2xl">
                <h4 className="font-bold text-gray-800 mb-3 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-gray-400 mt-1" />
                  What if research reveals my offer is wrong?
                </h4>
                <div className="pl-8 text-sm text-gray-600 space-y-2">
                  <p className="font-bold text-green-600">
                    Then you just saved $50K-$150K.
                  </p>
                  <p>
                    Would you rather spend $4.5K to learn now, or $80K in ads to
                    learn 6 months later?
                  </p>
                  <p>
                    Usually we find: 70% messaging fix, 20% segment fix, 10%
                    offer fix. In every case, knowing is better than guessing.
                  </p>
                </div>
              </div>

              {/* FAQ 5 */}
              <div className="neu-flat p-6 rounded-2xl">
                <h4 className="font-bold text-gray-800 mb-3 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-gray-400 mt-1" />
                  Can you just do the media buying too?
                </h4>
                <div className="pl-8 text-sm text-gray-600 space-y-2">
                  <p>Not yet. Our Media Buying arm has a waitlist (8-10 brands only).</p>
                  <p>
                    We deliver the research ($4.5K). You can hand it to your
                    team, OR apply for our Media Buying service ($5K/mo min).
                    We separate them because the intel is valuable regardless of
                    who pushes the buttons.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: COST OF INACTION */}
        <section
          className="py-24 px-6"
          id="cost-inaction"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              Every Month You Run Ads Without This Costs You $8,000-$25,000
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Not in fees. In wasted ad spend targeting the wrong people with
              the wrong message.
            </p>

            <div className="neu-convex p-10 rounded-[40px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* The Waste */}
                <div>
                  <h4 className="font-bold text-red-500 mb-4 uppercase text-xs tracking-widest">
                    Your Waste Projection (90 Days)
                  </h4>
                  <div className="space-y-4">
                    <div className="neu-pressed p-4 rounded-xl flex justify-between items-center">
                      <div>
                        <span className="block text-xs font-bold text-gray-600">
                          Month 1
                        </span>
                        <span className="text-[10px] text-gray-400">
                          Testing wrong audiences
                        </span>
                      </div>
                      <span className="font-bold text-red-400">
                        $8K - $12K
                      </span>
                    </div>
                    <div className="neu-pressed p-4 rounded-xl flex justify-between items-center">
                      <div>
                        <span className="block text-xs font-bold text-gray-600">
                          Month 2
                        </span>
                        <span className="text-[10px] text-gray-400">
                          Iterating wrong foundation
                        </span>
                      </div>
                      <span className="font-bold text-red-400">
                        $7K - $10K
                      </span>
                    </div>
                    <div className="neu-pressed p-4 rounded-xl flex justify-between items-center">
                      <div>
                        <span className="block text-xs font-bold text-gray-600">
                          Month 3
                        </span>
                        <span className="text-[10px] text-gray-400">
                          Finally getting signal
                        </span>
                      </div>
                      <span className="font-bold text-red-400">$5K - $8K</span>
                    </div>
                    <div className="pt-4 border-t border-gray-300 flex justify-between items-center">
                      <span className="font-bold text-gray-800">
                        Total Opportunity Cost
                      </span>
                      <span className="font-bold text-red-600 text-xl">
                        $20,000 - $30,000
                      </span>
                    </div>
                  </div>
                </div>

                {/* The ROI */}
                <div className="flex flex-col justify-center border-l border-gray-300 pl-0 md:pl-12 mt-8 md:mt-0">
                  <div className="mb-8">
                    <p className="text-sm text-gray-600 mb-1">
                      Meanwhile, Arloxian Research Cost:
                    </p>
                    <p className="text-4xl font-bold text-gray-800">$4,500</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Research Investment</span>
                      <span className="font-bold text-gray-700">$4,500</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Waste Prevented</span>
                      <span className="font-bold text-green-500">
                        $20K - $30K
                      </span>
                    </div>
                    <div className="neu-flat p-4 rounded-xl bg-green-50 mt-4 text-center">
                      <span className="block text-xs text-green-600 font-bold uppercase tracking-widest mb-1">
                        Immediate ROI
                      </span>
                      <span className="text-3xl font-bold text-green-700">
                        344% - 566%
                      </span>
                    </div>
                    <p className="text-xs text-center text-gray-400 mt-2">
                      You&apos;re not buying research. You&apos;re buying $20K
                      back.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Penalty Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="neu-flat p-6 rounded-2xl border-t-4 border-green-500">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <h4 className="font-bold text-gray-800">Start This Month</h4>
                </div>
                <ul className="text-xs text-gray-600 space-y-2 mb-4">
                  <li>
                    Research done: <strong>Week 3</strong>
                  </li>
                  <li>
                    Launch: <strong>Week 4</strong>
                  </li>
                  <li>
                    Profitable: <strong>60 Days</strong>
                  </li>
                </ul>
                <p className="text-[10px] text-green-600 font-bold">
                  2-month head start on competitors.
                </p>
              </div>

              <div className="neu-flat p-6 rounded-2xl border-t-4 border-yellow-500">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-yellow-500" />
                  <h4 className="font-bold text-gray-800">Wait 3 Months</h4>
                </div>
                <ul className="text-xs text-gray-600 space-y-2 mb-4">
                  <li>
                    Wasted ad spend: <strong>~$25K</strong>
                  </li>
                  <li>Competitor intel: They have it.</li>
                  <li>Team morale: 3 months of failure.</li>
                </ul>
              </div>

              <div className="neu-flat p-6 rounded-2xl border-t-4 border-red-500">
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="w-5 h-5 text-red-500" />
                  <h4 className="font-bold text-gray-800">Wait 12 Months</h4>
                </div>
                <ul className="text-xs text-gray-600 space-y-2 mb-4">
                  <li>
                    Wasted ad spend: <strong>$80K-$120K</strong>
                  </li>
                  <li>Market share: Lost.</li>
                  <li>Founder: Considering shutting down.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: CASE STUDY */}
        <section
          className="py-24 px-6 bg-[#E0E5EC]"
          id="case-studies"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              What Happens When You Know Before You Spend
            </h2>

            <div className="neu-flat p-10 rounded-[40px] relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-bl-2xl">
                SUSTAINABLE FASHION BRAND
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-8">
                From &quot;Eco-Friendly Basics&quot; To &quot;The Capsule
                Wardrobe For Busy Professionals&quot;
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-700 text-sm mb-2 uppercase tracking-wide">
                      The Situation
                    </h4>
                    <p className="text-sm text-gray-600">
                      $200K revenue. Stuck at $20K/mo spend. Positioning:
                      &quot;Sustainable fashion for conscious consumers.&quot;
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-600 text-sm mb-2 uppercase tracking-wide">
                      Research Revealed
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>
                        → Best customers weren&apos;t eco-warriors. They were
                        35-45 pros tired of <strong>decision fatigue</strong>.
                      </li>
                      <li>
                        → Real trigger: &quot;I waste 30 mins every morning
                        deciding what to wear.&quot;
                      </li>
                      <li>
                        → VOC Phrase: &quot;I just want 10 pieces that work
                        together.&quot;
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-600 text-sm mb-2 uppercase tracking-wide">
                      The Pivot
                    </h4>
                    <p className="text-sm text-gray-600">
                      New Messaging: &quot;The 10-Piece Capsule Wardrobe That
                      Eliminates Morning Decision Fatigue.&quot; Repositioned
                      from &quot;Eco&quot; to &quot;System.&quot;
                    </p>
                  </div>
                </div>

                <div className="neu-pressed p-6 rounded-2xl flex flex-col justify-center">
                  <h4 className="font-bold text-gray-800 text-center mb-6">
                    Metrics Transformation
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-xs text-gray-500">Before ROAS</div>
                      <div className="text-xl font-bold text-red-400">2.1x</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">After ROAS</div>
                      <div className="text-xl font-bold text-green-500">
                        5.8x
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Before CPA</div>
                      <div className="text-xl font-bold text-gray-400">$95</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">After CPA</div>
                      <div className="text-xl font-bold text-green-500">
                        $38
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Before Rev</div>
                      <div className="text-xl font-bold text-gray-400">$42K</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">After Rev</div>
                      <div className="text-xl font-bold text-green-500">
                        $116K
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-300 text-center">
                    <div className="text-3xl font-bold text-gray-800">
                      $74K/Mo
                    </div>
                    <div className="text-xs font-bold text-blue-500 uppercase tracking-widest">
                      Revenue Increase
                    </div>
                  </div>
                </div>
              </div>

              <div className="neu-convex p-4 rounded-xl text-center bg-white/50 italic text-gray-600 text-sm">
                &quot;We were so focused on selling sustainability that we
                missed what customers actually cared about: saving time.
                Arloxian found that in 48 hours.&quot; — Sarah K., Founder
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: FOOTER CTA */}
        <section
          className="py-24 px-6 border-t border-gray-300/50"
          id="cta-final"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Stop Guessing. Start Knowing. <br />
              Launch Smarter.
            </h2>
            <p className="text-gray-600 mb-10 text-lg">
              Two-week intelligence sprint. One comprehensive report. Zero more
              wondering if you&apos;re targeting the right people.
            </p>

            <div className="flex flex-col justify-center items-center gap-6">
              <a
                href="mailto:research@arloxian.io?subject=Market%20Intelligence%20Audit%20Request"
                className="neu-flat px-10 py-5 text-blue-600 font-bold rounded-full hover:scale-95 active:scale-90 transition-all text-lg flex items-center gap-3"
              >
                Book Your Market Intelligence Audit
                <ArrowRight className="w-5 h-5" />
              </a>

              <button className="px-8 py-2 text-gray-500 font-medium hover:text-gray-900 transition-colors underline">
                Download Sample Report
              </button>

              <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500 font-bold uppercase tracking-widest mt-4">
                <span className="flex items-center gap-1">
                  <Check className="w-3 h-3" /> $4,500 Flat Fee
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-3 h-3" /> 10-14 Day Turnaround
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-3 h-3" /> No Retainer
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-3 h-3" /> Full Source Data
                </span>
              </div>

              <p className="text-xs text-gray-400 mt-4">
                Average client saves $20K-$30K in wasted ad spend by knowing
                their positioning before launch.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER LINKS */}
        <footer className="py-12 px-6 bg-[#E0E5EC]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
              <div className="font-bold text-gray-800 mb-4">ARLOXIAN</div>
              <p className="text-xs text-gray-500 mb-4">
                Scientific Advertising. Not Guessing.
              </p>
              <p className="text-xs text-gray-500">
                We help fashion eCommerce brands stop bleeding budget on
                assumption-based campaigns and start launching with mathematical
                certainty.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-700 text-sm mb-4">
                Services
              </h4>
              <ul className="space-y-2 text-xs text-gray-500">
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Market Research &amp; Analysis
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Media Buying (Arloxian Ads)
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Creative Strategy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Offer Engineering
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-700 text-sm mb-4">
                Resources
              </h4>
              <ul className="space-y-2 text-xs text-gray-500">
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Download Sample Report
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    The Full SOP (PDF)
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Book Audit Call
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-700 text-sm mb-4">
                Contact
              </h4>
              <p className="text-xs text-gray-500 mb-2">
                <strong>Email:</strong> research@arloxian.io
              </p>
              <p className="text-xs text-gray-500">
                <strong>Response time:</strong> &lt;24 hours
              </p>
              <div className="mt-4 flex gap-4">
                <a href="#" className="neu-icon-btn w-8 h-8">
                  <Linkedin className="w-3 h-3" />
                </a>
                <a href="#" className="neu-icon-btn w-8 h-8">
                  <Twitter className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-300/50 flex justify-between text-xs text-gray-400">
            <p>© 2024 Arloxian. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

function DatabaseIcon(props) {
  return <DatabaseDummy {...props} />;
}

function DatabaseDummy({ className }) {
  // Fallback since lucide-react doesn't export 'Database' in this import list
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
    </svg>
  );
}

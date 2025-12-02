// app/scientific-positioning/page.js  (Next 13+ app router)
// or pages/scientific-positioning.js (pages router, export default function Page)

"use client";

export default function ScientificPositioningPage() {
  return (
    <main className="w-full bg-[#050816] text-white">
      {/* SECTION 1: HERO */}
      <section className="min-h-screen flex items-center bg-gradient-to-b from-[#050816] to-[#0b1424] px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-6 text-center md:text-left">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#60a5fa]">
            Scientific Positioning
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Become <span className="text-[#60a5fa]">The Only Choice</span>.
            <br />
            Scientific Positioning for market dominance.
          </h1>
          <p className="text-sm md:text-base text-[#c3c7d5] max-w-2xl">
            {/* Paste hero subcopy from PDF here */}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <button className="inline-flex items-center justify-center rounded-full px-6 py-2.5 bg-[#60a5fa] text-sm font-semibold text-[#020617] shadow-lg">
              Book Your Free Positioning Audit
            </button>
            <p className="text-[11px] text-[#9ca3b8] self-center sm:self-end">
              {/* “Average 5.8x ROAS • 1,000+ campaigns • $47M+ generated” */}
            </p>
          </div>

          {/* HERO GRAPHIC PLACEHOLDER */}
          <div className="mt-10 h-64 rounded-3xl bg-[#020617] border border-white/5 flex items-center justify-center text-xs text-[#6b7280]">
            Split-screen graphic: chaotic vs. clear positioning + ROAS graph
          </div>
        </div>
      </section>

      {/* SECTION 2: PROBLEM */}
      <section className="min-h-screen flex items-center bg-[#050816] px-4 py-16">
        <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold">
              Why Your Ads Won’t Scale Past $50K/Month
            </h2>
            <p className="text-sm md:text-base text-[#c3c7d5]">
              {/* Paste problem intro paragraph from PDF */}
            </p>

            <ul className="mt-2 space-y-2 text-sm text-[#e5e7eb]">
              {/* Turn each ❌ bullet from PDF into <li> */}
              <li>❌ Premium quality materials – so does everyone else.</li>
              {/* ... */}
            </ul>

            <p className="mt-4 text-sm text-[#c3c7d5]">
              {/* Paste “Death Spiral” explanation from PDF */}
            </p>
          </div>

          {/* PROBLEM GRAPHICS PLACEHOLDER */}
          <div className="space-y-4 text-xs text-[#9ca3b8]">
            <div className="h-32 rounded-2xl bg-[#020617] border border-white/5 flex items-center justify-center">
              Generic Positioning Graveyard
            </div>
            <div className="h-32 rounded-2xl bg-[#020617] border border-white/5 flex items-center justify-center">
              Death Spiral Diagram
            </div>
            <div className="h-32 rounded-2xl bg-[#020617] border border-white/5 flex items-center justify-center">
              ROAS Plateau Graph
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SOLUTION – WHAT SCIENTIFIC POSITIONING IS */}
      <section className="min-h-screen flex items-center bg-[#050816] px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-8">
          <header className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold">
              The Difference Between Guessing and Scientific Positioning
            </h2>
            <p className="text-sm md:text-base text-[#c3c7d5]">
              {/* Paste “Most agencies…” vs “Scientific Positioning is different.” */}
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2 text-sm">
            <div className="space-y-2">
              <h3 className="font-semibold text-[#e5e7eb]">
                Generic Positioning (what everyone does)
              </h3>
              <p className="text-[#c3c7d5]">
                {/* Example: “We make sustainable, high-quality clothing…” */}
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-[#22c55e]">
                Scientific Positioning (what Arlox engineers)
              </h3>
              <p className="text-[#c3c7d5]">
                {/* Example: “Save Soil With Hemp…” */}
              </p>
            </div>
          </div>

          <ul className="grid gap-3 md:grid-cols-2 text-xs md:text-sm text-[#c3c7d5]">
            {/* Paste bullet “Why this works” items as <li> */}
            <li>Shifts from product to impact.</li>
            {/* ... */}
          </ul>

          {/* PROCESS GRAPHIC PLACEHOLDER */}
          <div className="mt-6 h-56 rounded-3xl bg-[#020617] border border-white/5 flex items-center justify-center text-xs text-[#9ca3b8]">
            Positioning Discovery Process / Scientific Method diagram
          </div>
        </div>
      </section>

      {/* SECTION 4: CASE STUDIES */}
      <section className="min-h-screen flex items-center bg-[#050816] px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-8">
          <header className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold">
              When Positioning Changes, Everything Changes
            </h2>
            <p className="text-sm md:text-base text-[#c3c7d5]">
              {/* Paste short intro before case studies */}
            </p>
          </header>

          <div className="space-y-6">
            {/* Repeat this block for each case study (Hemp, ₹25k, Gen Z, Bamboo) */}
            <article className="rounded-2xl bg-[#020617] border border-white/5 p-5 space-y-3">
              <h3 className="text-sm md:text-base font-semibold text-[#e5e7eb]">
                Case Study #1 – Hemp Clothing Brand (India)
              </h3>
              <p className="text-xs md:text-sm text-[#9ca3b8]">
                {/* Situation */}
              </p>
              <p className="text-xs md:text-sm text-[#9ca3b8]">
                {/* What Arlox discovered */}
              </p>
              <p className="text-xs md:text-sm text-[#22c55e]">
                {/* Result line: 1.2x → 6.5x etc. */}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION 5: METHOD – 4 STAGES */}
      <section className="min-h-screen flex items-center bg-[#050816] px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-8">
          <header className="space-y-3 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold">
              The Scientific Positioning System
            </h2>
            <p className="text-sm md:text-base text-[#c3c7d5]">
              {/* Short intro for the 4 stages */}
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2 text-sm">
            {/* Stage 1 */}
            <div className="rounded-2xl bg-[#020617] border border-white/5 p-5 space-y-2">
              <h3 className="font-semibold text-[#e5e7eb]">
                Stage 1 – Deep Research
              </h3>
              <p className="text-[#c3c7d5]">
                {/* Paste “Understanding everything that matters” + bullets */}
              </p>
            </div>
            {/* Stage 2, Stage 3, Stage 4 – repeat same pattern */}
          </div>
        </div>
      </section>

      {/* SECTION 6: CTA */}
      <section className="min-h-[60vh] flex items-center bg-gradient-to-b from-[#050816] to-[#020617] px-4 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <h2 className="text-2xl md:text-3xl font-extrabold">
            Ready to Engineer Your Positioning?
          </h2>
          <p className="text-sm md:text-base text-[#c3c7d5]">
            {/* Final CTA copy from PDF */}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button className="inline-flex items-center justify-center rounded-full px-7 py-2.5 bg-[#60a5fa] text-sm font-semibold text-[#020617] shadow-lg">
              Book Your Free Positioning Audit
            </button>
            <button className="inline-flex items-center justify-center rounded-full px-7 py-2.5 border border-white/20 text-sm font-semibold text-[#e5e7eb]">
              View Positioning Case Studies
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

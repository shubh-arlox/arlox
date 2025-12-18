// components/ScientificAdsGrid.js
"use client";

import { FlaskConical, Database, Layout, Shield, BarChart3 } from "lucide-react";
import WhatsappCTA from "./WhatsAppCTA";

export default function ScientificAdsGrid() {
  return (
    <section className="w-full bg-[#e4e8f0] py-14 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111827] mb-2">
            Scientific Advertising
          </h2>
          <p className="text-sm md:text-base text-[#6b7280] max-w-xl">
            A system, not a tactic. We transform advertising from gambling
            into engineering.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-5 md:grid-cols-3">
          {/* 1 */}
          <FeatureCard
            icon={<FlaskConical className="w-5 h-5 text-[#2563eb]" />}
            title="1. Defined Objectives"
            body="We separate ‘Growth’ phases from ‘Profit’ phases. You cannot optimize for both simultaneously without breaking the machine."
          />
          {/* 2 */}
          <FeatureCard
            icon={<Database className="w-5 h-5 text-[#2563eb]" />}
            title="2. Sophisticated Research"
            body="We don’t guess. We analyze tens of thousands of creative combinations to find the 20% that will generate 80% of your returns."
          />
          {/* 3 */}
          <FeatureCard
            icon={<Layout className="w-5 h-5 text-[#2563eb]" />}
            title="3. 9:16 Creative Engineering"
            body="Visuals that don’t just look good—they’re engineered to stop the scroll and convert cold traffic."
          />

          {/* 4 */}
          <FeatureCard
            icon={<Shield className="w-5 h-5 text-[#2563eb]" />}
            title="4. Standardized Execution"
            body="A platform-agnostic tracking system. When ad platforms fail, our data remains accurate. We build resilience."
          />
          {/* 5 */}
          <FeatureCard
            icon={<BarChart3 className="w-5 h-5 text-[#2563eb]" />}
            title="5. Manual Verification"
            body="We verify every dollar manually. No ‘estimated’ pixel data—real bank-account returns and verified profit."
          />

          {/* 6 – CTA card */}
          {/* <CTACard /> */}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, body }) {
  return (
    <div className="bg-[#eef1f7] rounded-[26px] px-5 py-6 shadow-[10px_10px_26px_rgba(165,175,195,0.45),-10px_-10px_24px_rgba(255,255,255,0.98)] flex flex-col">
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-white shadow-[6px_6px_14px_rgba(185,194,211,0.5),-6px_-6px_14px_rgba(255,255,255,1)] mb-4">
        {icon}
      </div>
      <h3 className="text-sm md:text-base font-extrabold text-[#111827] mb-2">
        {title}
      </h3>
      <p className="text-xs md:text-sm text-[#6b7280] leading-relaxed">
        {body}
      </p>
    </div>
  );
}

// function CTACard() {
//   return (
//     <div className="bg-[#E0E5EC] rounded-[26px] px-5 py-6 shadow-[10px_10px_26px_rgba(165,175,195,0.45),-10px_-10px_24px_rgba(255,255,255,0.98)] flex flex-col justify-between border-l-4 border-[#2563eb]">
//       <div>
//         <h3 className="text-sm md:text-base font-extrabold text-[#111827] mb-2">
//           Ready to deploy?
//         </h3>
//         <p className="text-xs md:text-sm text-[#6b7280] leading-relaxed">
//           Stop guessing. Start engineering your growth.
//         </p>
//       </div>
//       <div className="mt-1 flex justify-center items-center">
//         <WhatsappCTA whatsappNumber="+919910220335" calendlyUrl="https://calendly.com/arlox-/strategy-call-1">
//  <button
//   className="
//     liquid-glass-btn
//     bg-[#dddddd]
//     px-4 py-1.5 text-xs
//     sm:px-5 sm:py-2 sm:text-sm
//     md:px-6 md:py-2.5 md:text-base
//     lg:px-8 lg:py-3 lg:text-base
//   "
// >
//   <span className="text-slate-600 font-bold">
//     Scrutinize
//   </span>
// </button>



// </WhatsappCTA>
//       </div>


//     </div>
//   );
// }

// components/Footer.js
"use client";

import Image from "next/image";

const columns = [
  {
    title: "Contact Us",
    links: [
      "Chat with us",
      "Chat with Arloxian AI",
      "Mail to us",
      "Book a Strategy Call",
      "Customer Support",
      "General Inquiries",
      "Press Inquiries",
      "Podcast Inquiries",
    ],
  },
  {
    title: "Resources & Support",
    links: [
      "Help Center",
      "FAQs",
      "Free Tutorials",
      "ROI Calculator",
      "Free Business Tools",
      "Blogs",
      "Free Scaling reports",
      "See our 8-figure Ads",
      "Reviews & Testimonials",
    ],
  },
  {
    title: "Case Studies",
    links: [
      "XYZ from 1 to 10",
      "XYZ from 1 to 10",
      "XYZ from 1 to 10",
      "XYZ from 1 to 10",
      "XYZ from 1 to 10",
      "XYZ from 1 to 10",
      "XYZ from 1 to 10",
      "XYZ from 1 to 10",
      "…see more",
    ],
  },
  {
    title: "Solutions",
    links: [
      "10x Media Scaling",
      "Omnichannel Ad Strategy",
      "CRO Optimisations",
      "Smart Retargeting & follow up",
      "Intelligent Creative Testing",
      "High ROAS Data",
      "Multi-Channel Tracking",
      "Scientific Positioning",
      "Scientific A/B testing",
      "Scientific Angle testing",
      "Scientific Copywriting",
      "ROl Max Creative Engine",
    ],
  },
  {
    title: "Programs",
    links: [
      "Arloxian Media Buyer Academy",
      "D2C Fashion E‑commerce",
      "Agency Growth Accelerator",
      "Arloxian Creative School",
      "Arloxian Copywriting School",
      "Fix Entrepreneurs Course",
      "Critical Thinking for Founders",
      "FREE quiz to unlock growth",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#111827] text-[#9ca3b8] text-xs md:text-[11px]">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        {/* Top row: logo + columns */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          {/* Logo + tagline */}
          <div className="w-full lg:w-1/5 space-y-3">
            <Image
              src="/Arlox_logo_white.jpg"
              alt="Arlox.io"
              width={140}
              height={40}
              className="h-8 w-auto"
            />
            <div className="text-[11px] leading-relaxed text-[#e5e7eb]">
              <p>You Built It.</p>
              <p>We Scaled It.</p>
            </div>
            <div className="pt-4 space-y-1 text-[11px]">
              <p className="font-semibold text-[#e5e7eb]">Arloxian Free</p>
              <p>Community</p>
            </div>
          </div>

          {/* Link columns */}
          <div className="flex-1 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {columns.map((col) => (
              <div key={col.title} className="space-y-2">
                <p className="font-semibold text-[#e5e7eb] text-[11px]">
                  {col.title}
                </p>
                <ul className="space-y-1.5">
                  {col.links.map((link) => (
                    <li
                      key={link}
                      className="hover:text-white transition-colors cursor-pointer"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Social row */}
        <div className="mt-8 border-t border-[#1f2937] pt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div className="space-x-4 text-[11px]">
            <span className="font-semibold text-[#e5e7eb]">Media</span>
            <span className="hover:text-white cursor-pointer">LinkedIn</span>
            <span className="hover:text-white cursor-pointer">Youtube</span>
            <span className="hover:text-white cursor-pointer">Facebook</span>
            <span className="hover:text-white cursor-pointer">Instagram</span>
            <span className="hover:text-white cursor-pointer">X</span>
            <span className="hover:text-white cursor-pointer">TikTok</span>
            <span className="hover:text-white cursor-pointer">Podcasts</span>
            <span className="hover:text-white cursor-pointer">Press</span>
          </div>
        </div>

        {/* Bottom legal row */}
        <div className="mt-4 border-t border-[#1f2937] pt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-[10px] text-[#6b7280]">
            Copyright © 2025 Arlox.io. All Rights Reserved
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px]">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Press &amp; Media</span>
            <span className="hover:text-white cursor-pointer">GDPR</span>
            <span className="hover:text-white cursor-pointer">Earnings Disclaimer</span>
            <span className="hover:text-white cursor-pointer">Refunds &amp; Cancellations</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

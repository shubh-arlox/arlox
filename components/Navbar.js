"use client";

import { useState } from "react";
import Image from "next/image";
// Lucide React icons
import { Menu, X } from "lucide-react";

const links = ["Solutions", "Programs", "Software", "Community", "Media", "About"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="backdrop-blur-xl bg-white/40 border-b border-white/40 shadow-[0_8px_30px_rgba(56,81,121,0.08)]">
        <nav className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between py-3 md:py-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Image
                src="/Arlox logo 6.png"
                width={120}
                height={42}
                alt="Arlox logo"
                className="h-8 w-auto md:h-10"
              />
            </div>

            {/* Desktop links */}
            <ul className="hidden md:flex space-x-7 text-sm lg:text-base font-medium text-[#2f3f63]">
              {links.map((link) => (
                <li
                  key={link}
                  className="cursor-pointer transition-colors hover:text-[#385179]"
                >
                  {link}
                </li>
              ))}
            </ul>

            {/* Mobile menu toggle using Lucide icons */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/60 transition"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile dropdown */}
          {open && (
            <div className="md:hidden pb-3">
              <div className="rounded-2xl bg-white/90 shadow-neumorphic border border-white/60">
                <ul className="flex flex-col text-sm font-medium text-[#2f3f63]">
                  {links.map((link) => (
                    <li
                      key={link}
                      onClick={() => setOpen(false)}
                      className="px-4 py-2.5 hover:bg-gray-50 cursor-pointer"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

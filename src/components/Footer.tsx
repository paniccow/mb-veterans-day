"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#030508] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div>
                <div className="text-xs text-red-400 tracking-widest uppercase font-[var(--font-inter)] font-semibold">City of</div>
                <div className="text-xl font-bold text-white font-[var(--font-playfair)]">Manhattan Beach</div>
                <div className="text-sm text-gray-400 font-[var(--font-inter)]">Veterans Day Celebration</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm font-[var(--font-inter)] leading-relaxed max-w-sm">
              Honoring the brave men and women who served our nation.
              November 11, 2025 — Polliwog Park, Manhattan Beach, California.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white text-sm font-bold mb-3 font-[var(--font-inter)] uppercase tracking-wider">Event</h4>
            <ul className="space-y-2">
              {[
                { label: "Program Schedule", href: "#program" },
                { label: "Military Displays", href: "#displays" },
                { label: "Student Contest", href: "#students" },
                { label: "Veteran Outreach", href: "#veterans" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-red-400 text-sm transition-colors font-[var(--font-inter)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-bold mb-3 font-[var(--font-inter)] uppercase tracking-wider">Participate</h4>
            <ul className="space-y-2">
              {[
                { label: "Vendor Sign-Up", href: "#vendors" },
                { label: "Register to Attend", href: "#register" },
                { label: "Volunteer", href: "#register" },
                { label: "Contact Committee", href: "mailto:veteransday@manhattanbeach.gov" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-red-400 text-sm transition-colors font-[var(--font-inter)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Mini flag */}
            <div className="flex gap-0.5 items-center">
              {["#B22234", "#ffffff", "#B22234", "#ffffff", "#3C3B6E"].map((color, i) => (
                <div key={i} className="h-4 w-1 rounded-sm" style={{ background: color }} />
              ))}
            </div>
            <p className="text-gray-600 text-xs font-[var(--font-inter)]">
              © 2025 City of Manhattan Beach. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-700 text-xs font-[var(--font-inter)]">November 11, 2025 — 10:00 AM — Polliwog Park</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

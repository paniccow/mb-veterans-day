"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { StarField } from "./AnimatedStar";

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl md:text-5xl font-bold text-white font-[var(--font-inter)] tabular-nums min-w-[3rem] text-center">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-xs text-gray-400 uppercase tracking-wider mt-1 font-[var(--font-inter)]">
        {label}
      </div>
    </div>
  );
}

function Countdown() {
  const target = new Date("2026-11-11T10:00:00");
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const diff = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return (
    <div className="flex gap-6 md:gap-10">
      <CountdownUnit value={days} label="Days" />
      <div className="text-4xl md:text-5xl text-gray-500 font-bold self-start pt-1">:</div>
      <CountdownUnit value={hours} label="Hours" />
      <div className="text-4xl md:text-5xl text-gray-500 font-bold self-start pt-1">:</div>
      <CountdownUnit value={minutes} label="Minutes" />
      <div className="text-4xl md:text-5xl text-gray-500 font-bold self-start pt-1">:</div>
      <CountdownUnit value={seconds} label="Seconds" />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      id="event"
      style={{ scrollMarginTop: "0px" }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020818] via-[#0d1b35] to-[#0d1117]" />

      {/* Stars — CSS-only, no Framer Motion */}
      <StarField count={70} />

      {/* Subtle red glow — static, no animation */}
      <div
        className="absolute top-20 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(178,34,52,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-40 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,48,135,0.15) 0%, transparent 70%)" }}
      />

      {/* Flag silhouette — static */}
      <div
        className="absolute right-0 top-0 bottom-0 w-2/5 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            to bottom,
            #b22234 0px, #b22234 7.69%,
            #ffffff 7.69%, #ffffff 15.38%,
            #b22234 15.38%, #b22234 23.08%,
            #ffffff 23.08%, #ffffff 30.77%,
            #b22234 30.77%, #b22234 38.46%,
            #ffffff 38.46%, #ffffff 46.15%,
            #b22234 46.15%, #b22234 53.85%,
            #ffffff 53.85%, #ffffff 61.54%,
            #b22234 61.54%, #b22234 69.23%,
            #ffffff 69.23%, #ffffff 76.92%,
            #b22234 76.92%, #b22234 84.62%,
            #ffffff 84.62%, #ffffff 92.31%,
            #b22234 92.31%, #b22234 100%
          )`,
        }}
      />

      {/* Content — simple fade-in animations, no scroll-driven transforms */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto pt-20">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 px-4 py-2 rounded-full border border-red-700/50 bg-red-900/20 backdrop-blur-sm"
        >
          <span className="text-red-300 text-sm font-semibold tracking-widest uppercase font-[var(--font-inter)]">
            November 11, 2026 • Manhattan Beach, California
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="flex items-center gap-2 mb-4"
        >
          <div className="w-8 h-0.5 bg-red-500" />
          <span className="text-xs tracking-widest text-red-400 uppercase font-[var(--font-inter)] font-semibold">
            Honoring All Who Served
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight font-[var(--font-playfair)] mb-6"
          style={{ textShadow: "0 4px 40px rgba(0,0,0,0.8), 0 0 80px rgba(178,34,52,0.2)" }}
        >
          Veterans
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-orange-400">
            Day 2026
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed mb-10 font-[var(--font-inter)]"
        >
          Manhattan Beach celebrates and honors the brave men and women who
          served our nation — a community event of gratitude, pride, and remembrance.
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mb-10 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
        >
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4 font-[var(--font-inter)]">Event Begins In</p>
          <Countdown />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.a
            href="#register"
            className="px-8 py-4 bg-red-700 hover:bg-red-600 text-white font-bold rounded-xl text-lg transition-colors duration-200 pulse-glow font-[var(--font-inter)]"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Register to Attend
          </motion.a>
          <motion.a
            href="#vendors"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl text-lg border border-white/20 transition-colors duration-200 font-[var(--font-inter)]"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Food Vendor Sign-Up
          </motion.a>
        </motion.div>

        {/* Service branches */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-16 flex flex-wrap justify-center gap-4 text-xs text-gray-500 font-[var(--font-inter)]"
        >
          {["Army", "Navy", "Air Force", "Marines", "Coast Guard", "Space Force"].map((branch) => (
            <span
              key={branch}
              className="px-3 py-1 rounded-full border border-white/10 text-gray-400 hover:border-red-500/50 hover:text-red-300 transition-colors duration-200"
            >
              {branch}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-indicator">
        <span className="text-xs text-gray-500 tracking-widest uppercase font-[var(--font-inter)]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  );
}

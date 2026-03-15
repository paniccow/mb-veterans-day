"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { StarField } from "./AnimatedStar";

const serviceColors = ["#003087", "#b22234", "#004165", "#c8102e", "#005f86", "#00308F"];

function FloatingRibbon({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.8 }}
      className="flex items-center gap-2"
    >
      <div className="w-8 h-0.5 bg-red-500" />
      <span className="text-xs tracking-widest text-red-400 uppercase font-[var(--font-inter)] font-semibold">
        {text}
      </span>
    </motion.div>
  );
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        key={value}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-4xl md:text-5xl font-bold text-white font-[var(--font-inter)] tabular-nums min-w-[3rem] text-center"
      >
        {String(value).padStart(2, "0")}
      </motion.div>
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
      className="flex gap-6 md:gap-10"
    >
      <CountdownUnit value={days} label="Days" />
      <div className="text-4xl md:text-5xl text-gray-500 font-bold self-start pt-1">:</div>
      <CountdownUnit value={hours} label="Hours" />
      <div className="text-4xl md:text-5xl text-gray-500 font-bold self-start pt-1">:</div>
      <CountdownUnit value={minutes} label="Minutes" />
      <div className="text-4xl md:text-5xl text-gray-500 font-bold self-start pt-1">:</div>
      <CountdownUnit value={seconds} label="Seconds" />
    </motion.div>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      id="event"
    >
      {/* Deep navy gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020818] via-[#0d1b35] to-[#0d1117]" />

      {/* Stars */}
      <StarField count={80} />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 left-1/4 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(178,34,52,0.15) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 right-1/4 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,48,135,0.2) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* American flag stripes — subtle */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <motion.div
            key={i}
            className="absolute left-0 right-0 h-[1px]"
            style={{
              top: `${14 * i + 7}%`,
              background: i % 2 === 0
                ? "linear-gradient(90deg, transparent, rgba(178,34,52,0.08), transparent)"
                : "linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent)",
            }}
            animate={{ scaleX: [0.8, 1.0, 0.8], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Flag silhouette on the right */}
      <motion.div
        className="absolute right-0 top-0 bottom-0 w-2/5 pointer-events-none opacity-5"
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

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto"
      >
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 px-4 py-2 rounded-full border border-red-700/50 bg-red-900/20 backdrop-blur-sm"
        >
          <span className="text-red-300 text-sm font-semibold tracking-widest uppercase font-[var(--font-inter)]">
            November 11, 2026 • Manhattan Beach, California
          </span>
        </motion.div>

        <div className="flex flex-col gap-2 mb-4">
          <FloatingRibbon text="Honoring All Who Served" delay={0.2} />
        </div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none font-[var(--font-playfair)] mb-4"
          style={{ textShadow: "0 4px 40px rgba(0,0,0,0.8), 0 0 80px rgba(178,34,52,0.2)" }}
        >
          Veterans
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-orange-400">
            Day 2025
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed mb-10 font-[var(--font-inter)]"
        >
          Manhattan Beach celebrates and honors the brave men and women who
          served our nation — a community event of gratitude, pride, and remembrance.
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mb-10 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
        >
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4 font-[var(--font-inter)]">Event Begins In</p>
          <Countdown />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.a
            href="#register"
            className="px-8 py-4 bg-red-700 hover:bg-red-600 text-white font-bold rounded-xl text-lg transition-all duration-300 pulse-glow font-[var(--font-inter)]"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Register to Attend
          </motion.a>
          <motion.a
            href="#vendors"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl text-lg border border-white/20 transition-all duration-300 font-[var(--font-inter)]"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Food Vendor Sign-Up
          </motion.a>
        </motion.div>

        {/* Service branches icons row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-16 flex flex-wrap justify-center gap-4 text-xs text-gray-500 font-[var(--font-inter)]"
        >
          {["Army", "Navy", "Air Force", "Marines", "Coast Guard", "Space Force"].map((branch, i) => (
            <motion.span
              key={branch}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 + i * 0.1 }}
              className="px-3 py-1 rounded-full border border-white/10 text-gray-400 hover:border-red-500/50 hover:text-red-300 transition-all"
            >
              {branch}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs text-gray-500 tracking-widest uppercase font-[var(--font-inter)]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.div>
    </section>
  );
}

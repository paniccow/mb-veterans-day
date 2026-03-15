"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Event", href: "#event" },
  { label: "Program", href: "#program" },
  { label: "Military Displays", href: "#displays" },
  { label: "Students", href: "#students" },
  { label: "Veterans", href: "#veterans" },
  { label: "Vendors", href: "#vendors" },
  { label: "Register", href: "#register" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0d1117]/95 backdrop-blur-md border-b border-red-900/30 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col leading-none">
              <span className="text-[10px] font-bold tracking-[0.3em] text-red-400 uppercase font-[var(--font-inter)]">Manhattan Beach</span>
              <span className="text-lg font-bold text-white font-[var(--font-playfair)]">Veterans Day</span>
            </div>
          </motion.div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
                className="px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 font-[var(--font-inter)]"
                whileHover={{ scale: 1.05 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#vendors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="ml-2 px-4 py-2 bg-red-700 hover:bg-red-600 text-white text-sm font-semibold rounded-lg transition-all duration-200 font-[var(--font-inter)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Vendor Sign-Up
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
              className="w-6 h-0.5 bg-white block"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="w-6 h-0.5 bg-white block"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
              className="w-6 h-0.5 bg-white block"
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden bg-[#0d1117]/98 backdrop-blur-md border-t border-red-900/20"
      >
        <div className="px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all font-[var(--font-inter)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}

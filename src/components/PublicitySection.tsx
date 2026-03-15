"use client";
import { motion } from "framer-motion";
import { SectionTitle } from "./SectionWrapper";

const mediaOutlets = [
  { name: "Daily Breeze", type: "Newspaper", icon: "📰" },
  { name: "MB Weekly", type: "Local News", icon: "📄" },
  { name: "Easy Reader", type: "Community Paper", icon: "📋" },
  { name: "Beach Reporter", type: "Beach Cities News", icon: "🏖️" },
];

const wowFactors = [
  {
    icon: "🎵",
    title: "Patriotic Walk-Up Music",
    description: "Instrumental patriotic music plays before the event starts — immediately setting the emotional tone as guests arrive.",
  },
  {
    icon: "🏳️",
    title: "Flag Ceremony",
    description: "Boy Scouts and Girl Scouts lead a formal flag presentation, color guard expansion, and flag retirement ceremony.",
  },
  {
    icon: "🕯️",
    title: "11th Hour Moment",
    description: "The 11th minute of the 11th hour — a powerful, solemn national moment of silence observed together as a community.",
  },
  {
    icon: "🎗️",
    title: "Street Banners",
    description: "City street banners hung two weeks in advance. Social media countdown posts build anticipation and community buzz.",
  },
];

export default function PublicitySection() {
  return (
    <section className="py-24 bg-[#0d1117] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          accent="Awareness & Publicity"
          title="Community Visibility"
          subtitle="A multi-channel publicity campaign to reach every resident of Manhattan Beach and the South Bay."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Media */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white font-[var(--font-playfair)] mb-6 flex items-center gap-3"
            >
              <span className="w-8 h-0.5 bg-red-600" />
              Media Partners
            </motion.h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {mediaOutlets.map((outlet, i) => (
                <motion.div
                  key={outlet.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-red-700/40 transition-all text-center"
                  whileHover={{ scale: 1.04 }}
                >
                  <div className="text-3xl mb-2">{outlet.icon}</div>
                  <div className="text-white font-bold text-sm font-[var(--font-inter)]">{outlet.name}</div>
                  <div className="text-gray-500 text-xs font-[var(--font-inter)]">{outlet.type}</div>
                </motion.div>
              ))}
            </div>

            {/* Crowd strategy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-5 bg-gradient-to-br from-red-950/40 to-transparent border border-red-700/30 rounded-2xl"
            >
              <h4 className="text-white font-bold font-[var(--font-playfair)] mb-4 text-lg">
                📊 Crowd Size Strategy
              </h4>
              <p className="text-gray-400 text-sm font-[var(--font-inter)] mb-4">
                In a city of 35,000, we aim for 2,000+ attendees through these proven multipliers:
              </p>
              <div className="space-y-3">
                {[
                  { tactic: "School Tie-In", impact: "Largest multiplier — families follow students" },
                  { tactic: "Static Equipment Displays", impact: "Families with children drive 40% more attendance" },
                  { tactic: "Public Group Recognition", impact: "Veterans + Students + Scouts bring networks" },
                  { tactic: "Featured Veteran Story", impact: "Creates shareworthy, emotional moment" },
                  { tactic: "Social Media Countdown", impact: "Pre-event buzz creates FOMO attendance" },
                ].map((item, i) => (
                  <motion.div
                    key={item.tactic}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-red-500 mt-1 flex-shrink-0 text-xs">▶</span>
                    <div>
                      <span className="text-white text-sm font-semibold font-[var(--font-inter)]">{item.tactic}</span>
                      <span className="text-gray-500 text-xs ml-2 font-[var(--font-inter)]">— {item.impact}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Zero-budget WOW factors */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white font-[var(--font-playfair)] mb-6 flex items-center gap-3"
            >
              <span className="w-8 h-0.5 bg-red-600" />
              Zero-Budget WOW Moments
            </motion.h3>
            <div className="space-y-4">
              {wowFactors.map((factor, i) => (
                <motion.div
                  key={factor.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 p-5 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 hover:bg-white/8 transition-all group"
                  whileHover={{ x: 4 }}
                >
                  <span className="text-3xl flex-shrink-0">{factor.icon}</span>
                  <div>
                    <h4 className="text-white font-bold font-[var(--font-inter)] mb-1 group-hover:text-red-200 transition-colors">
                      {factor.title}
                    </h4>
                    <p className="text-gray-400 text-sm font-[var(--font-inter)] leading-relaxed">
                      {factor.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Budget note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-6 p-4 bg-gradient-to-r from-green-950/30 to-transparent border border-green-700/30 rounded-xl"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-400 text-lg">💰</span>
                <span className="text-green-400 font-bold font-[var(--font-inter)] text-sm">Zero Incremental Budget</span>
              </div>
              <p className="text-gray-400 text-xs font-[var(--font-inter)]">
                All event enhancements are achieved through partnerships, volunteer coordination, and community engagement — at no additional cost to the city.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

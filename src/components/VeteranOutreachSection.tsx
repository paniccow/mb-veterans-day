"use client";
import { motion } from "framer-motion";
import { SectionTitle } from "./SectionWrapper";

const outreachChannels = [
  { icon: "📰", title: "City Newsletter", desc: "Call-out: 'Are You a Manhattan Beach Veteran?'" },
  { icon: "📱", title: "Social Media Form", desc: "Online submission for veterans to register and be recognized" },
  { icon: "⛪", title: "Church Bulletins", desc: "Reaching veterans through faith community networks" },
  { icon: "🏘️", title: "Neighborhood Associations", desc: "Email outreach through all Manhattan Beach neighborhood groups" },
  { icon: "🔄", title: "Manhattan Beach Rotary", desc: "Coordination with local service clubs for veteran identification" },
  { icon: "🤝", title: "Veteran Organizations", desc: "Sharing contact lists through American Legion and VFW posts" },
];

const specialFeatures = [
  {
    icon: "📸",
    title: "Veteran Photo Wall",
    subtitle: "Faces of Manhattan Beach Veterans",
    description: "Veterans submit photo + branch + years served. Displayed at the event and later rotated to City Hall.",
    highlight: "Legacy Display",
  },
  {
    icon: "🎙️",
    title: "Moment of Storytelling",
    subtitle: "Personal Veteran Story",
    description: "A powerful 3–5 minute personal veteran story shared on stage. Increases emotional connection across generations.",
    highlight: "Most Impactful",
  },
  {
    icon: "✍️",
    title: '"Thank a Veteran" Cards',
    subtitle: "Children's Card Station",
    description: "Children can write personal thank-you notes during the event. Veterans take them home as lasting treasures.",
    highlight: "Community Favorite",
  },
  {
    icon: "🏷️",
    title: "Reserved Veteran Seating",
    subtitle: "Recognition & Comfort",
    description: "Dedicated seating section with veteran name badges. Ensures veterans feel honored and welcomed throughout.",
    highlight: "Premium Experience",
  },
];

export default function VeteranOutreachSection() {
  return (
    <section id="veterans" className="py-24 scroll-mt-16 bg-[#080d14] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-800/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          accent="Veteran Recognition"
          title="Active Veteran Outreach"
          subtitle="Our goal: personally invite every veteran living in Manhattan Beach. No one left behind."
        />

        {/* Goal banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16 p-6 bg-gradient-to-r from-red-950/60 to-red-900/20 border border-red-700/40 rounded-2xl text-center"
        >
          <div className="text-5xl mb-3">🎖️</div>
          <h3 className="text-2xl font-bold text-white font-[var(--font-playfair)] mb-2">
            Mission: Find Every Manhattan Beach Veteran
          </h3>
          <p className="text-gray-400 font-[var(--font-inter)] max-w-lg mx-auto">
            Manhattan Beach has a rich military heritage. Our outreach campaign will personally invite every veteran in our community of 35,000 residents.
          </p>
        </motion.div>

        {/* Outreach channels */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xl font-bold text-white font-[var(--font-playfair)] mb-6 flex items-center gap-3"
          >
            <span className="w-6 h-0.5 bg-red-600" />
            Outreach Channels
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {outreachChannels.map((channel, i) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-red-700/40 hover:bg-red-950/20 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-2xl flex-shrink-0">{channel.icon}</span>
                <div>
                  <h4 className="text-white font-semibold font-[var(--font-inter)] text-sm">{channel.title}</h4>
                  <p className="text-gray-500 text-xs mt-0.5 font-[var(--font-inter)]">{channel.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Special features */}
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xl font-bold text-white font-[var(--font-playfair)] mb-6 flex items-center gap-3"
        >
          <span className="w-6 h-0.5 bg-red-600" />
          Special Veteran Recognition Features
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specialFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-6 hover:border-red-700/40 transition-all duration-300 group"
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-4xl">{feature.icon}</span>
                <span className="text-xs px-2 py-1 bg-red-900/40 text-red-300 rounded-full font-[var(--font-inter)] font-semibold">
                  {feature.highlight}
                </span>
              </div>
              <h4 className="text-xl font-bold text-white font-[var(--font-playfair)] mb-1 group-hover:text-red-200 transition-colors">
                {feature.title}
              </h4>
              <p className="text-sm text-red-300/70 italic font-[var(--font-inter)] mb-3">{feature.subtitle}</p>
              <p className="text-gray-400 text-sm font-[var(--font-inter)] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

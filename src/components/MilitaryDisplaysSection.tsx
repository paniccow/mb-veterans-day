"use client";
import { motion } from "framer-motion";
import { SectionTitle } from "./SectionWrapper";

const organizations = [
  {
    name: "West LA Veterans Administration",
    category: "VA Benefits Outreach",
    description: "Learn about VA benefits, healthcare, and resources available to all veterans.",
    color: "from-blue-900/40 to-blue-800/20",
    border: "border-blue-700/40",
    badge: "VA",
    icon: "🏥",
  },
  {
    name: "American Legion Posts",
    category: "Hawthorne, Redondo Beach, Torrance, Westchester",
    description: "The nation's largest wartime veterans service organization, supporting veterans since 1919.",
    color: "from-red-900/40 to-red-800/20",
    border: "border-red-700/40",
    badge: "AL",
    icon: "⭐",
  },
  {
    name: "Veterans of Foreign Wars (VFW)",
    category: "Hawthorne, Redondo Beach, Gardena, Carson",
    description: "Advocating for veterans rights and serving local communities with honor and commitment.",
    color: "from-amber-900/40 to-amber-800/20",
    border: "border-amber-700/40",
    badge: "VFW",
    icon: "🎖️",
  },
  {
    name: "Vietnam Veterans of America",
    category: "South Bay Chapter",
    description: "Never again will one generation of veterans abandon another — supporting Vietnam-era veterans.",
    color: "from-green-900/40 to-green-800/20",
    border: "border-green-700/40",
    badge: "VVA",
    icon: "🌿",
  },
  {
    name: "National Guard",
    category: "Manhattan Beach & Inglewood Infantry Battalion",
    description: "Always ready, always there. Dual mission serving state and nation.",
    color: "from-olive-900/40 to-olive-800/20",
    border: "border-yellow-700/40",
    badge: "NG",
    icon: "🪖",
  },
  {
    name: "United States Coast Guard",
    category: "Marina del Rey & USCG Sector San Pedro",
    description: "Protecting those on the sea — maritime law enforcement and national defense.",
    color: "from-cyan-900/40 to-cyan-800/20",
    border: "border-cyan-700/40",
    badge: "USCG",
    icon: "⚓",
  },
  {
    name: "United States Space Force",
    category: "El Segundo",
    description: "America's newest branch, defending the nation's interests in space.",
    color: "from-indigo-900/40 to-indigo-800/20",
    border: "border-indigo-700/40",
    badge: "USSF",
    icon: "🚀",
  },
  {
    name: "Military Recruiters",
    category: "All Service Branches",
    description: "Information booths for Army, Navy, Air Force, Marines, Coast Guard, and Space Force.",
    color: "from-gray-900/40 to-gray-800/20",
    border: "border-gray-600/40",
    badge: "REC",
    icon: "📋",
  },
];

const staticDisplays = [
  { title: "Military Humvee", description: "Up-close look at the military's iconic tactical vehicle. Perfect for photos!", icon: "🚛" },
  { title: "National Guard Equipment", description: "Infantry gear, tactical equipment, and demonstration tables.", icon: "⚙️" },
  { title: "Coast Guard Vessel", description: "Coast Guard small craft on display from Marina del Rey.", icon: "🚤" },
  { title: "Recruitment Booths", description: "Information, merchandise, and career guidance from all branches.", icon: "🏛️" },
];

export default function MilitaryDisplaysSection() {
  return (
    <section id="displays" className="py-24 scroll-mt-16 bg-[#080d14] relative">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-800/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          accent="Military Presence"
          title="Organizations & Displays"
          subtitle="Join us for unprecedented military and veteran organization participation — a truly special gathering."
        />

        {/* Static displays highlight */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white font-[var(--font-playfair)] mb-6 flex items-center gap-3"
          >
            <span className="w-8 h-0.5 bg-red-600" />
            Static Military Displays
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {staticDisplays.map((display, i) => (
              <motion.div
                key={display.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-red-950/40 to-red-900/10 border border-red-800/30 rounded-2xl p-5 text-center hover:border-red-600/50 transition-all duration-300 group"
                whileHover={{ scale: 1.03, y: -4 }}
              >
                <div className="text-4xl mb-3">{display.icon}</div>
                <h4 className="text-white font-bold font-[var(--font-playfair)] mb-2 group-hover:text-red-200 transition-colors">
                  {display.title}
                </h4>
                <p className="text-gray-400 text-sm font-[var(--font-inter)]">{display.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Organizations */}
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-white font-[var(--font-playfair)] mb-6 flex items-center gap-3"
        >
          <span className="w-8 h-0.5 bg-red-600" />
          Participating Organizations
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {organizations.map((org, i) => (
            <motion.div
              key={org.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`bg-gradient-to-br ${org.color} border ${org.border} rounded-2xl p-5 hover:scale-[1.02] transition-all duration-300 group cursor-pointer`}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{org.icon}</span>
                <span className="text-xs font-bold px-2 py-0.5 bg-white/10 rounded-full text-white font-[var(--font-inter)]">
                  {org.badge}
                </span>
              </div>
              <h4 className="text-white font-bold font-[var(--font-playfair)] mb-1 text-sm leading-snug group-hover:text-red-200 transition-colors">
                {org.name}
              </h4>
              <p className="text-xs text-gray-400 font-semibold mb-2 font-[var(--font-inter)]">{org.category}</p>
              <p className="text-xs text-gray-500 font-[var(--font-inter)] leading-relaxed">{org.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

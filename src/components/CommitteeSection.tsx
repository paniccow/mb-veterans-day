"use client";
import { motion } from "framer-motion";
import { SectionTitle } from "./SectionWrapper";

const committee = [
  {
    name: "Larry Zimbalist",
    role: "Committee Chair",
    icon: "⭐",
    description: "Leads the planning committee with a vision for the most impactful Veterans Day celebration in Manhattan Beach history.",
  },
  {
    name: "Stephen Doran",
    role: "Committee Member",
    icon: "🎖️",
    description: "Brings organizational expertise and community connections to ensure seamless event coordination.",
  },
  {
    name: "Bob Holmes",
    role: "Former Mayor",
    icon: "🏛️",
    description: "Former Mayor of Manhattan Beach brings invaluable civic leadership and deep community relationships.",
  },
  {
    name: "Gary McAuley",
    role: "City Historian",
    icon: "📚",
    description: "Manhattan Beach City Historian ensuring the celebration honors the full depth of our community's military heritage.",
  },
  {
    name: "Ishaan Aggarwal",
    role: "Committee Member",
    icon: "💻",
    description: "Committee member and creator of this website — bringing digital strategy and technology to the Veterans Day celebration.",
  },
];

export default function CommitteeSection() {
  return (
    <section className="py-24 bg-[#080d14] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-800/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          accent="The Team"
          title="Planning Committee"
          subtitle="Dedicated community leaders working together to honor Manhattan Beach veterans."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {committee.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="text-center p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-red-700/40 hover:bg-white/8 transition-all duration-300 group"
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-gradient-to-br from-red-900/60 to-red-800/20 border-2 border-red-700/40 flex items-center justify-center text-3xl mx-auto mb-4"
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.4 }}
              >
                {member.icon}
              </motion.div>
              <h3 className="text-white font-bold text-lg font-[var(--font-playfair)] mb-1 group-hover:text-red-200 transition-colors">
                {member.name}
              </h3>
              <p className="text-red-400 text-xs font-semibold uppercase tracking-wider mb-3 font-[var(--font-inter)]">
                {member.role}
              </p>
              <p className="text-gray-500 text-sm font-[var(--font-inter)] leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center p-8 bg-gradient-to-r from-red-950/30 via-transparent to-red-950/30 border border-red-800/30 rounded-2xl"
        >
          <h3 className="text-xl font-bold text-white font-[var(--font-playfair)] mb-2">
            Questions or Want to Get Involved?
          </h3>
          <p className="text-gray-400 font-[var(--font-inter)] mb-4">
            We welcome volunteers, sponsors, and community partners.
          </p>
          <a
            href="mailto:veteransday@manhattanbeach.gov"
            className="inline-block px-6 py-3 bg-red-700 hover:bg-red-600 text-white font-semibold rounded-xl transition-all font-[var(--font-inter)]"
          >
            Contact the Committee
          </a>
        </motion.div>
      </div>
    </section>
  );
}

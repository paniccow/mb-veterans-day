"use client";
import { motion } from "framer-motion";
import { SectionTitle } from "./SectionWrapper";

const initiatives = [
  {
    icon: "🎨",
    title: "Art / Essay / Poetry Contest",
    theme: '"What Veterans Day Means to Me"',
    description: "Students from all Manhattan Beach schools are invited to express their appreciation for veterans through art, written essays, or poetry.",
    details: [
      "Winners recognized during the ceremony",
      "Artwork displayed at City Hall, Library & Joslyn Center",
      "Winning student reads their essay on stage",
      "Each participant brings family members — multiplying attendance",
    ],
    color: "from-purple-900/30 to-purple-800/10",
    border: "border-purple-700/40",
    label: "Creative",
  },
  {
    icon: "🎺",
    title: "Student Band Performances",
    theme: "Service Branch Anthem Medley",
    description: "Student bands open the ceremony with a moving bugle call, then perform the anthem of each military branch.",
    details: [
      "Opening bugle call to begin the ceremony",
      "Army, Navy, Air Force, Marines, Coast Guard & Space Force anthems",
      "Veterans of each branch stand to be recognized",
      "Emotionally powerful — connecting music and service",
    ],
    color: "from-blue-900/30 to-blue-800/10",
    border: "border-blue-700/40",
    label: "Music",
  },
  {
    icon: "📚",
    title: "Extra Credit Incentives",
    theme: "Academic Engagement",
    description: "Coordinate with MBUSD to offer academic credit for student participation — dramatically increasing turnout.",
    details: [
      "Civic engagement credit for attending",
      "History or student government class participation",
      "Reflection assignment tied to attendance",
      "ASB promotion through all school channels",
    ],
    color: "from-amber-900/30 to-amber-800/10",
    border: "border-amber-700/40",
    label: "Academic",
  },
];

export default function StudentSection() {
  return (
    <section id="students" className="py-24 scroll-mt-16 bg-[#0d1117] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #a855f7 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          accent="Youth Engagement"
          title="Student Involvement"
          subtitle="Students are our greatest attendance multiplier — each participating child brings parents and grandparents."
        />

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-4 mb-16 max-w-2xl mx-auto">
          {[
            { num: "3x", label: "Attendance Multiplier" },
            { num: "6", label: "School Channels" },
            { num: "3", label: "Incentive Programs" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center p-4 bg-white/5 rounded-xl border border-white/10"
            >
              <div className="text-3xl font-bold text-red-400 font-[var(--font-inter)]">{stat.num}</div>
              <div className="text-xs text-gray-500 mt-1 font-[var(--font-inter)]">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {initiatives.map((initiative, i) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`bg-gradient-to-br ${initiative.color} border ${initiative.border} rounded-2xl p-7 group hover:scale-[1.02] transition-all duration-300`}
              whileHover={{ y: -6 }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-5xl float-animation" style={{ animationDelay: `${i * 0.5}s` }}>
                  {initiative.icon}
                </span>
                <span className="text-xs font-bold px-2 py-0.5 bg-white/10 rounded-full text-white font-[var(--font-inter)]">
                  {initiative.label}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white font-[var(--font-playfair)] mb-2 group-hover:text-red-200 transition-colors">
                {initiative.title}
              </h3>

              <p className="text-sm text-red-300/80 italic font-[var(--font-inter)] mb-3">
                {initiative.theme}
              </p>

              <p className="text-gray-400 font-[var(--font-inter)] text-sm leading-relaxed mb-5">
                {initiative.description}
              </p>

              <ul className="space-y-2">
                {initiative.details.map((detail, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + j * 0.08 }}
                    className="flex items-start gap-2 text-sm text-gray-400 font-[var(--font-inter)]"
                  >
                    <span className="text-red-500 mt-0.5 flex-shrink-0">→</span>
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* School channels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10"
        >
          <h4 className="text-white font-bold font-[var(--font-playfair)] mb-4 text-center">
            School & Parent Communication Channels
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "MBUSD Email Blasts",
              "PTA Newsletters",
              "School Websites",
              "ASB Promotion",
              "Parent Apps",
              "Teacher Announcements",
            ].map((channel) => (
              <span
                key={channel}
                className="px-3 py-1.5 bg-blue-900/30 border border-blue-700/40 text-blue-300 text-xs rounded-full font-[var(--font-inter)]"
              >
                {channel}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

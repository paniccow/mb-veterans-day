"use client";
import { motion } from "framer-motion";
import { SectionTitle, FadeIn } from "./SectionWrapper";

const programItems = [
  {
    time: "8:00 AM",
    title: "Gates Open",
    description: "Event grounds open to the public. Patriotic music begins.",
    icon: "🚪",
  },
  {
    time: "8:30 AM",
    title: "Military Displays Open",
    description: "Static military vehicle and equipment displays open for exploration.",
    icon: "🪖",
  },
  {
    time: "9:00 AM",
    title: "Student Art Exhibition Opens",
    description: "Winning entries from the 'What Veterans Day Means to Me' contest on display.",
    icon: "🎨",
  },
  {
    time: "9:30 AM",
    title: "Opening Bugle Call",
    description: "Student band opens with a stirring bugle call to mark the beginning of the ceremony.",
    icon: "🎺",
  },
  {
    time: "9:45 AM",
    title: "Service Branch Anthem Medley",
    description: "Each branch's anthem played in honor. Veterans of each branch asked to stand and be recognized.",
    icon: "🎵",
  },
  {
    time: "10:00 AM",
    title: "Official Ceremony Begins",
    description: "Welcome remarks by the Mayor of Manhattan Beach and Committee Chair Larry Zimbalist.",
    icon: "🎙️",
  },
  {
    time: "10:15 AM",
    title: "Veteran Storytelling",
    description: "A local veteran shares a 5-minute personal story of service and sacrifice.",
    icon: "📖",
  },
  {
    time: "10:30 AM",
    title: "Student Essay Reading",
    description: "Contest winner reads their award-winning essay on stage.",
    icon: "📜",
  },
  {
    time: "10:45 AM",
    title: "Flag Ceremony",
    description: "Boy Scouts and Girl Scouts lead a formal flag presentation and color guard ceremony.",
    icon: "🇺🇸",
  },
  {
    time: "11:00 AM",
    title: "Moment of Silence",
    description: "The 11th hour of the 11th day — a solemn moment of remembrance for all fallen.",
    icon: "🕯️",
  },
  {
    time: "11:11 AM",
    title: "Veterans Recognition",
    description: "All veterans in attendance recognized and presented with appreciation ribbons.",
    icon: "🎖️",
  },
  {
    time: "11:30 AM",
    title: "Community Fair & Vendors",
    description: "Enjoy food vendors, informational booths, and 'Thank a Veteran' card station.",
    icon: "🎪",
  },
  {
    time: "1:00 PM",
    title: "Event Concludes",
    description: "Thank you for celebrating with us.",
    icon: "🌅",
  },
];

export default function ProgramSection() {
  return (
    <section id="program" className="py-24 bg-[#0d1117] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          accent="Schedule of Events"
          title="Program of Ceremony"
          subtitle="A thoughtfully crafted day of honor, reflection, and community celebration."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-700/50 via-red-700/30 to-transparent -translate-x-1/2" />

          <div className="space-y-8">
            {programItems.map((item, i) => (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Mobile: left-aligned timeline */}
                <div className="flex-shrink-0 relative z-10 ml-0 md:ml-0">
                  <div className="md:hidden">
                    <div className="absolute left-8 top-6 w-4 h-4 rounded-full bg-red-600 border-2 border-red-400 -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-red-900/50" />
                  </div>
                </div>

                {/* Desktop left content */}
                <div className={`flex-1 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-16 md:pl-0`}>
                  {i % 2 === 0 ? (
                    <ProgramCard item={item} />
                  ) : (
                    <div className="md:opacity-0 md:pointer-events-none">
                      <ProgramCard item={item} />
                    </div>
                  )}
                </div>

                {/* Center dot (desktop) */}
                <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 -translate-y-1/2 z-10">
                  <motion.div
                    className="w-4 h-4 rounded-full bg-red-600 border-2 border-red-400 shadow-lg shadow-red-900/50"
                    whileHover={{ scale: 1.5 }}
                    animate={{
                      boxShadow: ["0 0 0 0 rgba(178,34,52,0.4)", "0 0 0 8px rgba(178,34,52,0)", "0 0 0 0 rgba(178,34,52,0)"],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  />
                </div>

                {/* Desktop right content */}
                <div className={`hidden md:block flex-1 ${i % 2 === 1 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  {i % 2 === 1 && <ProgramCard item={item} />}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramCard({ item }: { item: typeof programItems[0] }) {
  return (
    <motion.div
      className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/8 hover:border-red-700/40 transition-all duration-300 group"
      whileHover={{ scale: 1.02, y: -2 }}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">{item.icon}</span>
        <span className="text-red-400 text-sm font-bold font-[var(--font-inter)] tracking-wide">{item.time}</span>
      </div>
      <h3 className="text-white font-bold text-lg font-[var(--font-playfair)] mb-1 group-hover:text-red-200 transition-colors">
        {item.title}
      </h3>
      <p className="text-gray-400 text-sm font-[var(--font-inter)] leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );
}

"use client";
import { motion } from "framer-motion";
import { SectionTitle } from "./SectionWrapper";

const programItems = [
  { time: "8:00 AM", title: "Gates Open", description: "Event grounds open to the public. Patriotic music begins.", icon: "🚪" },
  { time: "8:30 AM", title: "Military Displays Open", description: "Static military vehicle and equipment displays open for exploration.", icon: "🪖" },
  { time: "9:00 AM", title: "Student Art Exhibition", description: "Winning entries from the 'What Veterans Day Means to Me' contest on display.", icon: "🎨" },
  { time: "9:30 AM", title: "Opening Bugle Call", description: "Student band opens with a stirring bugle call to mark the beginning of the ceremony.", icon: "🎺" },
  { time: "9:45 AM", title: "Service Branch Anthem Medley", description: "Each branch's anthem played in honor. Veterans of each branch asked to stand and be recognized.", icon: "🎵" },
  { time: "10:00 AM", title: "Official Ceremony Begins", description: "Welcome remarks by the Mayor of Manhattan Beach and Committee Chair Larry Zimbalist.", icon: "🎙️" },
  { time: "10:15 AM", title: "Veteran Storytelling", description: "A local veteran shares a 5-minute personal story of service and sacrifice.", icon: "📖" },
  { time: "10:30 AM", title: "Student Essay Reading", description: "Contest winner reads their award-winning essay on stage.", icon: "📜" },
  { time: "10:45 AM", title: "Flag Ceremony", description: "Boy Scouts and Girl Scouts lead a formal flag presentation and color guard ceremony.", icon: "🇺🇸" },
  { time: "11:00 AM", title: "Moment of Silence", description: "The 11th hour of the 11th day — a solemn moment of remembrance for all fallen.", icon: "🕯️" },
  { time: "11:11 AM", title: "Veterans Recognition", description: "All veterans in attendance recognized and presented with appreciation ribbons.", icon: "🎖️" },
  { time: "11:30 AM", title: "Community Fair & Vendors", description: "Enjoy food vendors, informational booths, and 'Thank a Veteran' card station.", icon: "🎪" },
  { time: "1:00 PM", title: "Event Concludes", description: "Thank you for celebrating with us.", icon: "🌅" },
];

export default function ProgramSection() {
  return (
    <section id="program" className="py-24 scroll-mt-16 bg-[#0d1117] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          accent="Schedule of Events"
          title="Program of Ceremony"
          subtitle="A thoughtfully crafted day of honor, reflection, and community celebration."
        />

        <div className="relative">
          {/* Vertical center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-700/50 via-red-700/30 to-transparent -translate-x-1/2 hidden md:block" />
          {/* Mobile left line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-red-700/50 via-red-700/30 to-transparent md:hidden" />

          <div className="space-y-6">
            {programItems.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.time}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.04 }}
                  className="relative flex items-center md:justify-center"
                >
                  {/* Desktop layout */}
                  <div className="hidden md:flex w-full items-center">
                    {/* Left slot */}
                    <div className="flex-1 pr-10 flex justify-end">
                      {isLeft ? <ProgramCard item={item} align="right" /> : <div />}
                    </div>

                    {/* Center dot */}
                    <motion.div
                      className="w-4 h-4 rounded-full bg-red-600 border-2 border-red-400 shadow-lg shadow-red-900/50 flex-shrink-0 z-10"
                      whileHover={{ scale: 1.5 }}
                      animate={{
                        boxShadow: ["0 0 0 0 rgba(178,34,52,0.4)", "0 0 0 8px rgba(178,34,52,0)", "0 0 0 0 rgba(178,34,52,0)"],
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
                    />

                    {/* Right slot */}
                    <div className="flex-1 pl-10 flex justify-start">
                      {!isLeft ? <ProgramCard item={item} align="left" /> : <div />}
                    </div>
                  </div>

                  {/* Mobile layout */}
                  <div className="flex md:hidden items-start gap-4 pl-10">
                    <div className="absolute left-4 top-6 w-3 h-3 rounded-full bg-red-600 border-2 border-red-400 -translate-x-1/2 -translate-y-1/2" />
                    <ProgramCard item={item} align="left" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramCard({ item, align }: { item: typeof programItems[0]; align: "left" | "right" }) {
  return (
    <motion.div
      className={`bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/8 hover:border-red-700/40 transition-all duration-300 group max-w-xs w-full ${align === "right" ? "text-right" : "text-left"}`}
      whileHover={{ scale: 1.02, y: -2 }}
    >
      <div className={`flex items-center gap-2 mb-2 ${align === "right" ? "flex-row-reverse" : ""}`}>
        <span className="text-xl">{item.icon}</span>
        <span className="text-red-400 text-xs font-bold font-[var(--font-inter)] tracking-wide">{item.time}</span>
      </div>
      <h3 className="text-white font-bold text-base font-[var(--font-playfair)] mb-1 group-hover:text-red-200 transition-colors">
        {item.title}
      </h3>
      <p className="text-gray-400 text-xs font-[var(--font-inter)] leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );
}

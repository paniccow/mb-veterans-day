"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SectionTitle } from "./SectionWrapper";
import { toast } from "sonner";

interface AttendeeForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  isVeteran: boolean;
  branch: string;
  yearsServed: string;
  attendingAs: string;
  groupSize: string;
  heardAbout: string;
  submitPhoto: boolean;
  photoConsent: boolean;
}

const branches = ["Army", "Navy", "Air Force", "Marines", "Coast Guard", "Space Force", "National Guard", "Other"];

export default function AttendeeRegisterSection() {
  const [form, setForm] = useState<AttendeeForm>({
    firstName: "", lastName: "", email: "", phone: "",
    isVeteran: false, branch: "", yearsServed: "", attendingAs: "individual",
    groupSize: "1", heardAbout: "", submitPhoto: false, photoConsent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (field: keyof AttendeeForm, value: string | boolean) =>
    setForm((p) => ({ ...p, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Registration failed');
      setSubmitted(true);
      toast.success("Registration confirmed! See you November 11th.");
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="register" className="py-24 scroll-mt-16 bg-[#080d14] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-800/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          accent="RSVP"
          title="Register to Attend"
          subtitle="Help us plan the perfect event. Registration is free and only takes a minute."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Info cards */}
          <div className="space-y-4">
            {[
              {
                icon: "📍",
                title: "Location",
                detail: "Polliwog Park\n1601 Marine Ave\nManhattan Beach, CA 90266",
              },
              {
                icon: "🕙",
                title: "Date & Time",
                detail: "Tuesday, November 11, 2026\n10:00 AM – 1:00 PM\n(Gates open 8:00 AM)",
              },
              {
                icon: "🆓",
                title: "Admission",
                detail: "FREE for all attendees\nNo tickets required\nAll are welcome",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-red-700/40 transition-all"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <h4 className="text-white font-bold font-[var(--font-playfair)] mb-1">{item.title}</h4>
                <p className="text-gray-400 text-sm font-[var(--font-inter)] whitespace-pre-line">{item.detail}</p>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-7"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-7xl mb-4">🇺🇸</div>
                  <h3 className="text-2xl font-bold text-white font-[var(--font-playfair)] mb-3">
                    You&apos;re Registered!
                  </h3>
                  <p className="text-gray-400 font-[var(--font-inter)] mb-2">
                    Thank you, <span className="text-white">{form.firstName}</span>! We&apos;ll see you on November 11th.
                  </p>
                  <p className="text-sm text-gray-500 mb-6 font-[var(--font-inter)]">
                    Confirmation sent to <span className="text-red-300">{form.email}</span>
                  </p>
                  <div className="flex justify-center gap-4 flex-wrap">
                    <a
                      href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=Manhattan+Beach+Veterans+Day+2025&dates=20251111T100000/20251111T130000&location=Polliwog+Park,+Manhattan+Beach+CA`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 bg-red-700 hover:bg-red-600 text-white rounded-lg text-sm font-[var(--font-inter)] transition-all"
                    >
                      Add to Google Calendar
                    </a>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", email: "", phone: "", isVeteran: false, branch: "", yearsServed: "", attendingAs: "individual", groupSize: "1", heardAbout: "", submitPhoto: false, photoConsent: false }); }}
                      className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-[var(--font-inter)] transition-all"
                    >
                      Register Another
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-gray-400 mb-1 block font-[var(--font-inter)]">First Name *</label>
                      <input
                        type="text"
                        value={form.firstName}
                        onChange={(e) => update("firstName", e.target.value)}
                        placeholder="First"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors font-[var(--font-inter)]"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-400 mb-1 block font-[var(--font-inter)]">Last Name *</label>
                      <input
                        type="text"
                        value={form.lastName}
                        onChange={(e) => update("lastName", e.target.value)}
                        placeholder="Last"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors font-[var(--font-inter)]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-gray-400 mb-1 block font-[var(--font-inter)]">Email *</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="you@email.com"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors font-[var(--font-inter)]"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-400 mb-1 block font-[var(--font-inter)]">Phone (optional)</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder="(310) 555-0000"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors font-[var(--font-inter)]"
                      />
                    </div>
                  </div>

                  {/* Attending as */}
                  <div>
                    <label className="text-xs text-gray-400 mb-2 block font-[var(--font-inter)]">Attending as</label>
                    <div className="flex gap-3">
                      {[
                        { value: "individual", label: "Individual" },
                        { value: "family", label: "Family" },
                        { value: "group", label: "Group / School" },
                        { value: "organization", label: "Organization" },
                      ].map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => update("attendingAs", opt.value)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-[var(--font-inter)] border transition-all ${
                            form.attendingAs === opt.value
                              ? "bg-red-900/40 border-red-600 text-white"
                              : "bg-white/5 border-white/10 text-gray-400 hover:border-white/30"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Veteran section */}
                  <div className="p-4 bg-gradient-to-r from-red-950/30 to-transparent border border-red-800/30 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <input
                        type="checkbox"
                        id="isVeteran"
                        checked={form.isVeteran}
                        onChange={(e) => update("isVeteran", e.target.checked)}
                        className="w-4 h-4 accent-red-600"
                      />
                      <label htmlFor="isVeteran" className="text-white font-semibold text-sm font-[var(--font-inter)]">
                        🎖️ I am a veteran or currently serving
                      </label>
                    </div>
                    {form.isVeteran && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="grid grid-cols-2 gap-3 mt-2"
                      >
                        <div>
                          <label className="text-xs text-gray-400 mb-1 block font-[var(--font-inter)]">Branch of Service</label>
                          <select
                            value={form.branch}
                            onChange={(e) => update("branch", e.target.value)}
                            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-red-500 transition-colors font-[var(--font-inter)]"
                          >
                            <option value="" className="bg-gray-900">Select branch</option>
                            {branches.map((b) => (
                              <option key={b} value={b} className="bg-gray-900">{b}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="text-xs text-gray-400 mb-1 block font-[var(--font-inter)]">Years Served</label>
                          <input
                            type="text"
                            value={form.yearsServed}
                            onChange={(e) => update("yearsServed", e.target.value)}
                            placeholder="e.g., 1985–1993"
                            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors font-[var(--font-inter)]"
                          />
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Photo wall opt-in */}
                  <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl">
                    <input
                      type="checkbox"
                      id="submitPhoto"
                      checked={form.submitPhoto}
                      onChange={(e) => update("submitPhoto", e.target.checked)}
                      className="w-4 h-4 accent-red-600 mt-0.5"
                    />
                    <label htmlFor="submitPhoto" className="text-gray-300 text-sm font-[var(--font-inter)]">
                      📸 I&apos;d like to be featured on the <strong>Veteran Photo Wall</strong> — &quot;Faces of Manhattan Beach Veterans&quot;
                    </label>
                  </div>

                  <div>
                    <label className="text-xs text-gray-400 mb-1 block font-[var(--font-inter)]">How did you hear about this event?</label>
                    <select
                      value={form.heardAbout}
                      onChange={(e) => update("heardAbout", e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-red-500 transition-colors font-[var(--font-inter)]"
                    >
                      <option value="" className="bg-gray-900">Select one</option>
                      <option value="city" className="bg-gray-900">City of Manhattan Beach</option>
                      <option value="school" className="bg-gray-900">School / MBUSD</option>
                      <option value="social" className="bg-gray-900">Social Media</option>
                      <option value="newspaper" className="bg-gray-900">Newspaper / Daily Breeze</option>
                      <option value="friend" className="bg-gray-900">Friend / Neighbor</option>
                      <option value="rotary" className="bg-gray-900">Rotary Club</option>
                      <option value="veteran" className="bg-gray-900">Veteran Organization</option>
                      <option value="other" className="bg-gray-900">Other</option>
                    </select>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-red-800 to-red-600 hover:from-red-700 hover:to-red-500 text-white font-bold rounded-xl transition-all font-[var(--font-inter)] disabled:opacity-70 text-lg"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        />
                        Registering...
                      </span>
                    ) : (
                      "Register for Free 🇺🇸"
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

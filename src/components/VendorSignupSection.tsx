"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SectionTitle } from "./SectionWrapper";
import { toast } from "sonner";

const vendorTypes = [
  { id: "food", label: "Food Vendor", icon: "🍔", desc: "Hot food, snacks, beverages" },
  { id: "dessert", label: "Dessert/Sweets", icon: "🍦", desc: "Ice cream, pastries, treats" },
  { id: "beverage", label: "Beverage Only", icon: "☕", desc: "Coffee, lemonade, drinks" },
  { id: "specialty", label: "Specialty Food", icon: "🌮", desc: "Ethnic cuisine, specialty items" },
];

const vendorPerks = [
  { icon: "📍", text: "Prime event location on Polliwog Park lawn" },
  { icon: "👥", text: "Expected 2,000+ attendees" },
  { icon: "⚡", text: "Electricity hookup available" },
  { icon: "🅿️", text: "Vendor parking with early access" },
  { icon: "📣", text: "Promotion on all event marketing materials" },
  { icon: "🤝", text: "Zero additional vendor fee — community focused" },
];

interface FormData {
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  vendorType: string;
  cuisineType: string;
  boothSize: string;
  needsElectricity: boolean;
  description: string;
  website: string;
  hasPermit: boolean;
  agreeToTerms: boolean;
}

const initialForm: FormData = {
  businessName: "",
  contactName: "",
  email: "",
  phone: "",
  vendorType: "",
  cuisineType: "",
  boothSize: "10x10",
  needsElectricity: false,
  description: "",
  website: "",
  hasPermit: false,
  agreeToTerms: false,
};

export default function VendorSignupSection() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateForm = (field: keyof FormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step === 1) {
      if (!form.businessName || !form.contactName || !form.email || !form.phone) {
        toast.error("Please fill in all required fields.");
        return;
      }
    }
    if (step === 2) {
      if (!form.vendorType) {
        toast.error("Please select a vendor type.");
        return;
      }
    }
    setStep((s) => Math.min(s + 1, 3));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.agreeToTerms) {
      toast.error("Please agree to the vendor terms.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/vendor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submission failed');
      setSubmitted(true);
      toast.success("Vendor application submitted! We'll contact you within 48 hours.");
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : 'Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="vendors" className="py-24 scroll-mt-16 bg-[#0d1117] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #b22234 0%, transparent 70%)" }} />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-800/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          accent="Food Vendor Registration"
          title="Join Us as a Vendor"
          subtitle="Apply to set up your food booth at Manhattan Beach's premier community celebration. Limited spots available."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Perks */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-white font-[var(--font-playfair)] mb-6">
                Why Vendor at Veterans Day?
              </h3>
              <div className="space-y-4">
                {vendorPerks.map((perk, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/10 hover:border-red-700/40 transition-all"
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-2xl">{perk.icon}</span>
                    <span className="text-gray-300 font-[var(--font-inter)] text-sm">{perk.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Important dates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-5 bg-gradient-to-br from-amber-950/40 to-amber-900/10 border border-amber-700/40 rounded-2xl"
            >
              <h4 className="text-white font-bold font-[var(--font-playfair)] mb-4 flex items-center gap-2">
                <span>📅</span> Important Vendor Dates
              </h4>
              <div className="space-y-3">
                {[
                  { date: "Oct 1, 2026", event: "Vendor applications open" },
                  { date: "Oct 25, 2026", event: "Application deadline" },
                  { date: "Nov 1, 2026", event: "Acceptance notifications sent" },
                  { date: "Nov 10, 2026", event: "Vendor setup & load-in day" },
                  { date: "Nov 11, 2026", event: "Event Day — 8am to 1pm" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                    <span className="text-amber-300 text-xs font-bold font-[var(--font-inter)] w-28 flex-shrink-0">{item.date}</span>
                    <span className="text-gray-400 text-xs font-[var(--font-inter)]">{item.event}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="text-7xl mb-4"
                  >
                    🎉
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white font-[var(--font-playfair)] mb-3">
                    Application Submitted!
                  </h3>
                  <p className="text-gray-400 font-[var(--font-inter)] mb-4">
                    Thank you, <span className="text-white font-semibold">{form.contactName}</span>! We've received your vendor application for <span className="text-white font-semibold">{form.businessName}</span>.
                  </p>
                  <p className="text-sm text-gray-500 font-[var(--font-inter)] mb-6">
                    We'll review your application and contact you at <span className="text-red-300">{form.email}</span> within 48 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm(initialForm); setStep(1); }}
                    className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-[var(--font-inter)] transition-all"
                  >
                    Submit Another Application
                  </button>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {/* Step indicator */}
                  <div className="flex items-center gap-2 mb-8">
                    {[1, 2, 3].map((s) => (
                      <div key={s} className="flex items-center gap-2">
                        <motion.div
                          animate={{
                            background: step >= s ? "#b22234" : "rgba(255,255,255,0.1)",
                            scale: step === s ? 1.1 : 1,
                          }}
                          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white font-[var(--font-inter)]"
                        >
                          {step > s ? "✓" : s}
                        </motion.div>
                        <span className="text-xs text-gray-500 font-[var(--font-inter)] hidden sm:block">
                          {s === 1 ? "Contact Info" : s === 2 ? "Booth Details" : "Confirm"}
                        </span>
                        {s < 3 && <div className="w-8 h-px bg-white/10 hidden sm:block" />}
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit}>
                    <AnimatePresence mode="wait">
                      {step === 1 && (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-4"
                        >
                          <h3 className="text-xl font-bold text-white font-[var(--font-playfair)] mb-4">Contact Information</h3>
                          <FormField label="Business Name *" id="businessName">
                            <input
                              type="text"
                              id="businessName"
                              value={form.businessName}
                              onChange={(e) => updateForm("businessName", e.target.value)}
                              placeholder="e.g., Joe's BBQ"
                              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors font-[var(--font-inter)]"
                            />
                          </FormField>
                          <FormField label="Contact Name *" id="contactName">
                            <input
                              type="text"
                              id="contactName"
                              value={form.contactName}
                              onChange={(e) => updateForm("contactName", e.target.value)}
                              placeholder="Your full name"
                              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors font-[var(--font-inter)]"
                            />
                          </FormField>
                          <div className="grid grid-cols-2 gap-4">
                            <FormField label="Email *" id="email">
                              <input
                                type="email"
                                id="email"
                                value={form.email}
                                onChange={(e) => updateForm("email", e.target.value)}
                                placeholder="you@email.com"
                                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors font-[var(--font-inter)]"
                              />
                            </FormField>
                            <FormField label="Phone *" id="phone">
                              <input
                                type="tel"
                                id="phone"
                                value={form.phone}
                                onChange={(e) => updateForm("phone", e.target.value)}
                                placeholder="(310) 555-0000"
                                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors font-[var(--font-inter)]"
                              />
                            </FormField>
                          </div>
                          <FormField label="Website (optional)" id="website">
                            <input
                              type="url"
                              id="website"
                              value={form.website}
                              onChange={(e) => updateForm("website", e.target.value)}
                              placeholder="https://yourwebsite.com"
                              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors font-[var(--font-inter)]"
                            />
                          </FormField>
                        </motion.div>
                      )}

                      {step === 2 && (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-4"
                        >
                          <h3 className="text-xl font-bold text-white font-[var(--font-playfair)] mb-4">Booth Details</h3>

                          <div>
                            <label className="text-sm text-gray-400 mb-2 block font-[var(--font-inter)]">Vendor Type *</label>
                            <div className="grid grid-cols-2 gap-2">
                              {vendorTypes.map((type) => (
                                <motion.button
                                  key={type.id}
                                  type="button"
                                  onClick={() => updateForm("vendorType", type.id)}
                                  className={`p-3 rounded-xl border text-left transition-all ${
                                    form.vendorType === type.id
                                      ? "bg-red-900/40 border-red-600 text-white"
                                      : "bg-white/5 border-white/10 text-gray-400 hover:border-white/30"
                                  }`}
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <div className="text-xl mb-1">{type.icon}</div>
                                  <div className="text-xs font-semibold font-[var(--font-inter)]">{type.label}</div>
                                  <div className="text-xs opacity-60 font-[var(--font-inter)]">{type.desc}</div>
                                </motion.button>
                              ))}
                            </div>
                          </div>

                          <FormField label="Cuisine/Specialty Type" id="cuisineType">
                            <input
                              type="text"
                              id="cuisineType"
                              value={form.cuisineType}
                              onChange={(e) => updateForm("cuisineType", e.target.value)}
                              placeholder="e.g., American BBQ, Mexican, Thai..."
                              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors font-[var(--font-inter)]"
                            />
                          </FormField>

                          <div>
                            <label className="text-sm text-gray-400 mb-2 block font-[var(--font-inter)]">Booth Size</label>
                            <select
                              value={form.boothSize}
                              onChange={(e) => updateForm("boothSize", e.target.value)}
                              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors font-[var(--font-inter)]"
                            >
                              <option value="10x10" className="bg-gray-900">10&apos; x 10&apos; (Standard)</option>
                              <option value="10x20" className="bg-gray-900">10&apos; x 20&apos; (Double)</option>
                              <option value="custom" className="bg-gray-900">Custom Size (contact us)</option>
                            </select>
                          </div>

                          <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                            <input
                              type="checkbox"
                              id="electricity"
                              checked={form.needsElectricity}
                              onChange={(e) => updateForm("needsElectricity", e.target.checked)}
                              className="w-4 h-4 accent-red-600"
                            />
                            <label htmlFor="electricity" className="text-gray-300 text-sm font-[var(--font-inter)]">
                              I need electricity hookup (available at no extra charge)
                            </label>
                          </div>

                          <FormField label="Describe Your Menu/Products" id="description">
                            <textarea
                              id="description"
                              value={form.description}
                              onChange={(e) => updateForm("description", e.target.value)}
                              placeholder="Tell us about what you'll be serving..."
                              rows={3}
                              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors font-[var(--font-inter)] resize-none"
                            />
                          </FormField>
                        </motion.div>
                      )}

                      {step === 3 && (
                        <motion.div
                          key="step3"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-4"
                        >
                          <h3 className="text-xl font-bold text-white font-[var(--font-playfair)] mb-4">Review & Confirm</h3>

                          <div className="p-4 bg-white/5 rounded-xl space-y-2">
                            {[
                              { label: "Business", value: form.businessName },
                              { label: "Contact", value: form.contactName },
                              { label: "Email", value: form.email },
                              { label: "Phone", value: form.phone },
                              { label: "Vendor Type", value: vendorTypes.find(v => v.id === form.vendorType)?.label || "—" },
                              { label: "Booth Size", value: form.boothSize },
                              { label: "Electricity", value: form.needsElectricity ? "Yes" : "No" },
                            ].map(({ label, value }) => (
                              <div key={label} className="flex justify-between text-sm">
                                <span className="text-gray-500 font-[var(--font-inter)]">{label}</span>
                                <span className="text-white font-[var(--font-inter)]">{value}</span>
                              </div>
                            ))}
                          </div>

                          <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl">
                            <input
                              type="checkbox"
                              id="permit"
                              checked={form.hasPermit}
                              onChange={(e) => updateForm("hasPermit", e.target.checked)}
                              className="w-4 h-4 accent-red-600 mt-0.5"
                            />
                            <label htmlFor="permit" className="text-gray-300 text-sm font-[var(--font-inter)]">
                              I confirm that I will obtain all necessary City of Manhattan Beach health permits and food handler certifications before the event.
                            </label>
                          </div>

                          <div className="flex items-start gap-3 p-4 bg-red-950/20 border border-red-700/30 rounded-xl">
                            <input
                              type="checkbox"
                              id="terms"
                              checked={form.agreeToTerms}
                              onChange={(e) => updateForm("agreeToTerms", e.target.checked)}
                              className="w-4 h-4 accent-red-600 mt-0.5"
                            />
                            <label htmlFor="terms" className="text-gray-300 text-sm font-[var(--font-inter)]">
                              I agree to the vendor terms and conditions. I understand this is a patriotic community event and will conduct business respectfully in honor of our veterans. *
                            </label>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Navigation buttons */}
                    <div className="flex gap-3 mt-6">
                      {step > 1 && (
                        <motion.button
                          type="button"
                          onClick={() => setStep((s) => s - 1)}
                          className="flex-1 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold font-[var(--font-inter)] transition-all"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          ← Back
                        </motion.button>
                      )}
                      {step < 3 ? (
                        <motion.button
                          type="button"
                          onClick={handleNext}
                          className="flex-1 py-3 bg-red-700 hover:bg-red-600 text-white rounded-xl font-bold font-[var(--font-inter)] transition-all"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Continue →
                        </motion.button>
                      ) : (
                        <motion.button
                          type="submit"
                          disabled={loading}
                          className="flex-1 py-3 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white rounded-xl font-bold font-[var(--font-inter)] transition-all disabled:opacity-70"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {loading ? (
                            <span className="flex items-center justify-center gap-2">
                              <motion.div
                                className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                              />
                              Submitting...
                            </span>
                          ) : (
                            "Submit Vendor Application 🎉"
                          )}
                        </motion.button>
                      )}
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FormField({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm text-gray-400 mb-1.5 block font-[var(--font-inter)]">
        {label}
      </label>
      {children}
    </div>
  );
}

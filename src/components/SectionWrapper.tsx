"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export function SectionWrapper({ children, className = "", id, delay = 0 }: SectionWrapperProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export function FadeIn({ children, delay = 0, className = "" }: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({ title, subtitle, accent }: {
  title: string;
  subtitle?: string;
  accent?: string;
}) {
  return (
    <div className="text-center mb-16">
      {accent && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-red-400 text-sm font-semibold tracking-widest uppercase mb-3 font-[var(--font-inter)]"
        >
          {accent}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold text-white font-[var(--font-playfair)] mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto font-[var(--font-inter)]"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-6 h-0.5 w-24 bg-gradient-to-r from-red-700 to-red-500 mx-auto"
      />
    </div>
  );
}

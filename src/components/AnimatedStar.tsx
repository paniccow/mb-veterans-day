"use client";
import { motion } from "framer-motion";

export function AnimatedStar({ delay = 0, x = 50, y = 50, size = 2 }: {
  delay?: number;
  x?: number;
  y?: number;
  size?: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full bg-white"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
      animate={{
        opacity: [0.2, 1, 0.2],
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration: 2 + Math.random() * 2,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

export function StarField({ count = 60 }: { count?: number }) {
  const stars = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <AnimatedStar key={star.id} {...star} />
      ))}
    </div>
  );
}

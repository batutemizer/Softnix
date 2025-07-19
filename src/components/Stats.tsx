"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const stats = [
  { label: "Tamamlanan Proje", value: 120 },
  { label: "Mutlu Müşteri", value: 85 },
  { label: "Yıllık Tecrübe", value: 6 },
];

function useCountUp(end: number, duration = 1.5) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(end / (duration * 60));
    let current = start;
    const interval = setInterval(() => {
      current += step;
      if (current >= end) {
        current = end;
        clearInterval(interval);
      }
      if (ref.current) ref.current.textContent = current.toString();
    }, 1000 / 60);
    return () => clearInterval(interval);
  }, [end, duration]);
  return ref;
}

export default function Stats() {
  return (
    <section className="w-full max-w-5xl py-8 sm:py-12 px-2 sm:px-4 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 w-full"
      >
        {stats.map((stat, i) => {
          const ref = useCountUp(stat.value);
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="bg-white dark:bg-[#18181b] rounded-2xl shadow-lg p-4 sm:p-8 flex flex-col items-center text-center border border-gray-100 dark:border-gray-800"
            >
              <span ref={ref} className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2" />
              <span className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-200">{stat.label}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
} 
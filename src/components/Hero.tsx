"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";

const headline = [
  "Web Geliştirme, Tasarım, Kodlama",
  "ve QR Tabanlı Dijital Çözümler"
];

const titleVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, damping: 12, stiffness: 200 } },
};

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const blob1 = useRef<HTMLDivElement>(null);
  const blob2 = useRef<HTMLDivElement>(null);
  const blob3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" }
      );
    }
    // Hafif, çok yavaş blob animasyonları
    if (blob1.current) {
      gsap.to(blob1.current, {
        x: 40,
        y: 20,
        scale: 1.08,
        repeat: -1,
        yoyo: true,
        duration: 16,
        ease: "sine.inOut",
      });
    }
    if (blob2.current) {
      gsap.to(blob2.current, {
        x: -30,
        y: 30,
        scale: 1.12,
        repeat: -1,
        yoyo: true,
        duration: 18,
        ease: "sine.inOut",
      });
    }
    if (blob3.current) {
      gsap.to(blob3.current, {
        x: 20,
        y: -20,
        scale: 1.05,
        repeat: -1,
        yoyo: true,
        duration: 22,
        ease: "sine.inOut",
      });
    }
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-2 sm:px-4 overflow-hidden">
      {/* SoftNix Kurum İsmi ve Logo */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.05, type: "spring" }}
        className="mb-4 sm:mb-6 flex items-center justify-center gap-2 sm:gap-3"
      >
        <Image src="/sn-logo.svg" alt="SoftNix Logo" width={48} height={48} className="w-10 h-10 sm:w-12 sm:h-12 drop-shadow-xl rounded-2xl" />
        <span className="inline-block text-2xl sm:text-3xl md:text-4xl font-black tracking-tight bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
          SoftNix
        </span>
      </motion.div>
      {/* Animated Headline */}
      <motion.h1
        className="text-2xl sm:text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2 sm:mb-4 flex flex-wrap justify-center"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        {headline[0].split("").map((char, i) => (
          <motion.span key={i} variants={letterVariants} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, type: "spring" }}
        className="text-lg sm:text-2xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 mb-4 sm:mb-8"
      >
        {headline[1]}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="max-w-xl text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-300 mb-6 sm:mb-8"
      >
        Modern, etkileyici ve yüksek performanslı dijital çözümlerle işinizi bir üst seviyeye taşıyın.
      </motion.p>
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.08, boxShadow: "0 0 24px 0 #a78bfa", background: "linear-gradient(90deg,#60a5fa,#a78bfa,#f472b6)", color: "#fff" }}
        whileTap={{ scale: 0.96 }}
        className="inline-block px-5 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-blue-600 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Teklif Al
      </motion.a>
    </section>
  );
} 
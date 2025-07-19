"use client";
import { motion } from "framer-motion";

const links = [
  {
    label: "E-posta",
    href: "mailto:softnixiletisim@gmail.com",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <rect width="20" height="16" x="2" y="4" rx="4" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    label: "Instagram",
    href: "https://instagram.com/softnixresmi",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <rect width="20" height="20" x="2" y="2" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="17" cy="7" r="1.5" fill="currentColor"/>
      </svg>
    )
  }
];

export default function SocialLinks() {
  return (
    <section className="w-full max-w-5xl py-6 sm:py-8 px-2 sm:px-4 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex gap-4 sm:gap-8 justify-center"
      >
        {links.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, rotate: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center gap-1 sm:gap-2 text-gray-700 dark:text-gray-200 hover:text-pink-500 transition-colors text-sm sm:text-base"
          >
            {link.icon}
            <span className="font-medium">{link.label}</span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
} 
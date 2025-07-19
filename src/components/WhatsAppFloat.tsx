"use client";
import { motion } from "framer-motion";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/905522641898"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 80, scale: 0.7 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.45 }}
      whileHover={{ scale: 1.08, boxShadow: "0 8px 32px 0 rgba(37,211,102,0.18)", backgroundColor: "#e6f9f0", color: "#25D366" }}
      whileTap={{ scale: 0.95 }}
      className="fixed z-50 bottom-3 sm:bottom-6 right-3 sm:right-6 bg-white dark:bg-[#18181b] border border-gray-200 dark:border-gray-700 shadow-xl rounded-full px-4 sm:px-6 py-2 sm:py-3 flex items-center justify-center text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-200 transition-all duration-300"
      aria-label="WhatsApp ile iletişime geç"
      style={{ boxShadow: "0 4px 16px 0 rgba(37,211,102,0.10)" }}
    >
      WhatsApp
    </motion.a>
  );
} 
"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const res = await fetch("https://formspree.io/f/mldlgeze", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });
    setLoading(false);
    if (res.ok) {
      setSent(true);
      form.reset();
    } else {
      alert("Bir hata oluştu, lütfen tekrar deneyin.");
    }
  };

  return (
    <section id="contact" className="w-full max-w-xl py-10 sm:py-16 px-2 sm:px-4 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      >
        İletişim / Teklif Al
      </motion.h2>
      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full bg-white dark:bg-[#18181b] rounded-2xl shadow-lg p-4 sm:p-8 flex flex-col gap-3 sm:gap-4 border border-gray-100 dark:border-gray-800"
      >
        <input
          type="text"
          name="name"
          placeholder="Adınız Soyadınız"
          required
          className="px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 dark:text-gray-100 text-base sm:text-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="E-posta adresiniz"
          required
          className="px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 dark:text-gray-100 text-base sm:text-lg"
        />
        <textarea
          name="message"
          placeholder="Mesajınız veya talebiniz"
          required
          rows={4}
          className="px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 dark:text-gray-100 text-base sm:text-lg"
        />
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="mt-2 px-5 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-blue-600 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-60 text-base sm:text-lg"
          disabled={loading}
        >
          {loading ? "Gönderiliyor..." : "Gönder"}
        </motion.button>
        {sent && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-600 dark:text-green-400 mt-2 text-center text-base sm:text-lg"
          >
            Mesajınız başarıyla gönderildi!
          </motion.p>
        )}
      </motion.form>
    </section>
  );
} 
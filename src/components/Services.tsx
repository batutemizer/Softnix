"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Web Geliştirme",
    desc: "Modern, hızlı ve güvenli web siteleri ve uygulamalar geliştiriyoruz.",
    icon: "🌐",
    details: "React, Next.js, TailwindCSS, performans optimizasyonu, SEO uyumlu kodlama, mobil uyumlu responsive tasarım, özel API entegrasyonları."
  },
  {
    title: "Tasarım",
    desc: "Kreatif ve kullanıcı odaklı arayüz tasarımları sunuyoruz.",
    icon: "🎨",
    details: "UI/UX, wireframe, prototipleme, marka renkleri, modern ve minimalist tasarım, Adobe XD & Figma ile profesyonel çalışma."
  },
  {
    title: "Kodlama",
    desc: "Temiz, ölçeklenebilir ve sürdürülebilir kod altyapısı.",
    icon: "💻",
    details: "TypeScript, modüler yapı, test edilebilirlik, sürdürülebilirlik, kod standartları ve dokümantasyon."
  },
  {
    title: "QR Dijital Çözümler",
    desc: "QR tabanlı kartvizit, menü ve özel dijital çözümler.",
    icon: "📱",
    details: "QR menü, dijital kartvizit, özel QR entegrasyonları, hızlı ve güvenli erişim, mobil uyumlu çözümler."
  }
];

export default function Services() {
  const [open, setOpen] = useState<number | null>(null);

  const handleContactScroll = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(null);
    }
  };

  return (
    <section id="services" className="w-full max-w-5xl py-10 sm:py-16 px-2 sm:px-4 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-10 text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      >
        Hizmetlerimiz
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 w-full">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className="bg-white dark:bg-[#18181b] rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col items-center text-center border border-gray-100 dark:border-gray-800 hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer"
            onClick={() => setOpen(i)}
          >
            <span className="text-3xl sm:text-4xl mb-3 sm:mb-4">{service.icon}</span>
            <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {open !== null && (
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-2"
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-white dark:bg-[#18181b] rounded-2xl shadow-2xl p-4 sm:p-8 max-w-md w-full relative flex flex-col items-center text-center border border-gray-100 dark:border-gray-800"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-pink-500 text-2xl font-bold"
                onClick={() => setOpen(null)}
                aria-label="Kapat"
              >
                ×
              </button>
              <span className="text-4xl mb-4">{services[open].icon}</span>
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {services[open].title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{services[open].desc}</p>
              <div className="text-gray-800 dark:text-gray-200 text-base mb-6">
                {services[open].details}
              </div>
              <button
                className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={handleContactScroll}
              >
                Hizmetten Yararlan
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 
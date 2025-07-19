"use client";
import { motion } from "framer-motion";

const missions = [
  "En yeni web teknolojilerini kullanarak işletmelere hızlı, estetik ve kullanıcı odaklı dijital çözümler sunmak.",
  "Yenilikçi yazılım çözümleri ve etkileyici tasarımlarla dijital varlığınızı bir adım öteye taşımak.",
  "Web geliştirme, tasarım ve QR tabanlı sistemlerde, yüksek performans ve modern kullanıcı deneyimini bir araya getirerek müşterilere katma değer sağlamak.",
  "Kodun gücüyle fikirleri hayata geçirmek ve her ölçekten işletmeye dijital dünyada görünürlük kazandırmak.",
  "Geleceğin dijital ihtiyaçlarına bugünden çözümler üreterek kullanıcı dostu ve sürdürülebilir web projeleri geliştirmek."
];

export default function Mission() {
  return (
    <section className="w-full max-w-4xl py-10 sm:py-16 px-2 sm:px-4 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      >
        Misyonumuz
      </motion.h2>
      <ul className="flex flex-col gap-4 sm:gap-6 w-full">
        {missions.map((m, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className="bg-white dark:bg-[#18181b] rounded-xl shadow p-4 sm:p-6 text-base sm:text-lg text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-800"
          >
            {m}
          </motion.li>
        ))}
      </ul>
    </section>
  );
} 
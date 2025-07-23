"use client";
import { useRef, useEffect, useState, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const stats = [
  { label: "Tamamlanan Proje", value: 120 },
  { label: "Mutlu Müşteri", value: 85 },
  { label: "Yıllık Tecrübe", value: 6 },
];

function useCountUp(ref: React.RefObject<HTMLSpanElement | null>, end: number, duration = 1.5) {
  useEffect(() => {
    const start = 0;
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
  }, [end, duration, ref]);
}

type Package = {
  title: string;
  description: string;
  price: string;
  details: string[];
};

const packages: Package[] = [
  {
    title: "Web Site Satın Alma",
    description: "Kendi profesyonel web sitenizi hızlıca satın alın.",
    price: "₺15.000",
    details: [
      "Ücretsiz Hosting",
      "SSL Sertifikası",
      "Yönetim Paneli",
      "Mobil Uyumlu Tasarım",
      "Teknik Destek (1 yıl)",
      "SEO Optimizasyonu"
    ]
  },
  {
    title: "QR Oluşturma",
    description: "Kişisel veya işletmeniz için özel QR kodları oluşturun.",
    price: "₺1.000",
    details: [
      "Sınırsız QR Oluşturma",
      "Renk ve Logo Özelleştirme",
      "Yüksek Çözünürlükte İndirme",
      "Kullanım Analizi",
      "Teknik Destek (6 ay)"
    ]
  },
  {
    title: "Düğün QR",
    description: "Düğün davetiyeniz için özel QR menü ve bilgi kartı.",
    price: "₺1.500",
    details: [
      "Kişiye Özel QR Tasarımı",
      "Davetli Bilgi Formu",
      "Online Menü Erişimi",
      "Mobil Uyumlu Sayfa",
      "Teknik Destek (3 ay)"
    ]
  },
  {
    title: "Menü QR",
    description: "Restoran ve kafeler için temassız QR menü hizmeti.",
    price: "₺1.200",
    details: [
      "Sınırsız Menü QR",
      "Kolay Menü Güncelleme",
      "Mobil Uyumlu Menü",
      "Kullanım Analizi",
      "Teknik Destek (6 ay)"
    ]
  }
];

type StatsProps = {
  cart: Package[];
  setCart: Dispatch<SetStateAction<Package[]>>;
};

export default function Stats({ cart, setCart }: StatsProps) {
  // Her stat için ayrı ref ve hook
  const ref1 = useRef<HTMLSpanElement | null>(null);
  const ref2 = useRef<HTMLSpanElement | null>(null);
  const ref3 = useRef<HTMLSpanElement | null>(null);
  const router = useRouter();
  const [cartOpen, setCartOpen] = useState(false);

  useCountUp(ref1, stats[0].value);
  useCountUp(ref2, stats[1].value);
  useCountUp(ref3, stats[2].value);

  return (
    <section className="w-full max-w-5xl py-8 sm:py-12 px-2 sm:px-4 flex flex-col items-center relative">
      {/* Paketler ve istatistikler */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 w-full"
      >
        <motion.div
          key={stats[0].label}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0 * 0.15 }}
          className="bg-white dark:bg-[#18181b] rounded-2xl shadow-lg p-4 sm:p-8 flex flex-col items-center text-center border border-gray-100 dark:border-gray-800"
        >
          <span ref={ref1} className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2" />
          <span className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-200">{stats[0].label}</span>
        </motion.div>
        <motion.div
          key={stats[1].label}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1 * 0.15 }}
          className="bg-white dark:bg-[#18181b] rounded-2xl shadow-lg p-4 sm:p-8 flex flex-col items-center text-center border border-gray-100 dark:border-gray-800"
        >
          <span ref={ref2} className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2" />
          <span className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-200">{stats[1].label}</span>
        </motion.div>
        <motion.div
          key={stats[2].label}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 2 * 0.15 }}
          className="bg-white dark:bg-[#18181b] rounded-2xl shadow-lg p-4 sm:p-8 flex flex-col items-center text-center border border-gray-100 dark:border-gray-800"
        >
          <span ref={ref3} className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2" />
          <span className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-200">{stats[2].label}</span>
        </motion.div>
      </motion.div>
      {/* Paketler bölümü */}
      <div className="mt-12 w-full">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Paketler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {packages.map((pkg) => (
            <div key={pkg.title} className="bg-white dark:bg-[#18181b] rounded-2xl shadow-lg p-4 flex flex-col items-center text-center border border-gray-100 dark:border-gray-800">
              <div className="text-lg font-semibold mb-2">{pkg.title}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">{pkg.description}</div>
              <ul className="text-xs text-left text-gray-500 dark:text-gray-400 mb-2 list-disc list-inside">
                {pkg.details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              {/* Fiyat ve sepete ekle butonu kaldırıldı */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
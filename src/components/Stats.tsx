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

  function addToCart(pkg: Package) {
    setCart((prev: Package[]) => {
      if (prev.find((item) => item.title === pkg.title)) return prev;
      return [...prev, pkg];
    });
    setCartOpen(true);
  }

  function removeFromCart(title: string) {
    setCart((prev: Package[]) => prev.filter((item) => item.title !== title));
  }

  const total = cart.reduce((sum, item) => sum + Number(item.price.replace(/[^\d]/g, "")), 0);

  return (
    <section className="w-full max-w-5xl py-8 sm:py-12 px-2 sm:px-4 flex flex-col items-center relative">
      {cart.length > 0 && !cartOpen && (
        <button
          className="fixed top-24 right-6 z-50 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-full shadow-lg w-14 h-14 flex flex-col items-center justify-center hover:scale-105 transition-transform"
          onClick={() => setCartOpen(true)}
          aria-label="Sepeti Aç"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path d="M6 6h15l-1.5 9h-13z" stroke="currentColor" strokeWidth="2" fill="none"/>
            <circle cx="9" cy="21" r="1.5" fill="currentColor"/>
            <circle cx="18" cy="21" r="1.5" fill="currentColor"/>
          </svg>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5 shadow">{cart.length}</span>
        </button>
      )}
      {/* Sepet sağdan açılır panel */}
      {cart.length > 0 && cartOpen && (
        <aside className="fixed top-0 right-0 z-40 w-full max-w-sm h-full bg-white dark:bg-[#18181b] shadow-2xl border-l border-gray-200 dark:border-gray-800 flex flex-col p-6 animate-slide-in-right">
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-pink-500 text-2xl font-bold"
            onClick={() => setCartOpen(false)}
            aria-label="Kapat"
          >
            ×
          </button>
          <h3 className="text-xl font-bold mb-4 text-center">Sepetiniz</h3>
          <ul className="mb-4">
            {cart.map((item) => (
              <li key={item.title} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                <span>{item.title}</span>
                <span>{item.price}</span>
                <button
                  className="ml-4 px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => removeFromCart(item.title)}
                >
                  Kaldır
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center font-bold text-lg mb-4">
            <span>Toplam:</span>
            <span>₺{total.toLocaleString("tr-TR")}</span>
          </div>
          <button
            className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-lg font-semibold shadow hover:scale-105 transition-transform"
            onClick={() => router.push('/odeme')}
          >
            Satın Al
          </button>
        </aside>
      )}
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
              <div className="text-xl font-bold text-blue-600 dark:text-blue-400">{pkg.price}</div>
              <button
                className="mt-3 px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-lg font-semibold shadow hover:scale-105 transition-transform disabled:opacity-60"
                onClick={() => addToCart(pkg)}
                disabled={!!cart.find((item) => item.title === pkg.title)}
              >
                {!!cart.find((item) => item.title === pkg.title) ? "Sepette" : "Sepete Ekle"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
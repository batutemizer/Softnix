"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaCreditCard, FaUser, FaEnvelope, FaCalendarAlt, FaLock } from "react-icons/fa";

function onlyDigits(str: string) {
  return str.replace(/\D/g, "");
}

export default function PaymentPage() {
  const router = useRouter();
  const [cart] = useState([
    { title: "Web Site Satın Alma", price: "₺15.000" },
    { title: "QR Oluşturma", price: "₺1.000" }
  ]);
  const total = cart.reduce((sum, item) => sum + Number(item.price.replace(/[^\d]/g, "")), 0);

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [errors, setErrors] = useState<{[k:string]:string}>({});

  function validate() {
    const errs: {[k:string]:string} = {};
    if (!/^.{3,40}$/.test(name)) errs.name = "Ad Soyad 3-40 karakter olmalı.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) errs.email = "Geçerli bir e-posta girin.";
    if (!/^\d{16,19}$/.test(card.replace(/\s/g, ""))) errs.card = "Kart numarası 16-19 hane olmalı.";
    if (!/^\d{2}\/\d{2}$/.test(expiry)) errs.expiry = "Tarih AA/YY formatında olmalı.";
    else {
      const [ay, yy] = expiry.split("/").map(Number);
      const now = new Date();
      const curYY = Number(now.getFullYear().toString().slice(-2));
      if (ay < 1 || ay > 12) errs.expiry = "Ay 01-12 arası olmalı.";
      if (yy < curYY) errs.expiry = "Yıl güncel olmalı.";
    }
    if (!/^\d{3,4}$/.test(cvc)) errs.cvc = "CVC 3 veya 4 hane olmalı.";
    return errs;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      alert("Yakında ödeme sistemimiz ");
      router.push("/");
    }
  }

  // Kart numarası otomatik boşluk ekleme (4'lü gruplar)
  function handleCardChange(e: React.ChangeEvent<HTMLInputElement>) {
    let val = onlyDigits(e.target.value).slice(0, 19);
    val = val.replace(/(.{4})/g, "$1 ").trim();
    setCard(val);
  }
  // Expiry AA/YY mask
  function handleExpiryChange(e: React.ChangeEvent<HTMLInputElement>) {
    let val = onlyDigits(e.target.value).slice(0, 4);
    if (val.length > 2) val = val.slice(0,2) + "/" + val.slice(2);
    setExpiry(val);
  }
  // CVC mask
  function handleCvcChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCvc(onlyDigits(e.target.value).slice(0,4));
  }

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-2 py-8 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #18122B 0%, #2D3250 50%, #F6B17A 100%)",
      }}
    >
      {/* Parıltı ve blur efektli arka plan blobları */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-gradient-to-br from-purple-700 via-fuchsia-500 to-pink-400 opacity-40 blur-3xl rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-tr from-yellow-400 via-pink-400 to-purple-600 opacity-30 blur-2xl rounded-full z-0 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#fff6] to-[#f6b17a33] opacity-20 blur-2xl rounded-3xl z-0" />
      <div className="relative z-10 w-full max-w-md">
        <div className="backdrop-blur-xl bg-white/20 dark:bg-[#23232a]/60 border border-white/30 dark:border-[#444] shadow-2xl rounded-3xl p-8 sm:p-12 flex flex-col gap-6 glass-card animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight">
            Ödeme
          </h2>
          <div className="mb-2">
            <h3 className="font-semibold mb-2 text-lg text-gray-800 dark:text-gray-200 flex items-center gap-2">
              <FaCreditCard className="text-pink-400" /> Sepet Özeti
            </h3>
            <ul className="mb-2">
              {cart.map((item) => (
                <li key={item.title} className="flex justify-between py-1 text-base text-gray-700 dark:text-gray-200">
                  <span>{item.title}</span>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between font-bold text-xl border-t border-white/30 pt-2 text-gray-900 dark:text-gray-100">
              <span>Toplam:</span>
              <span>₺{total.toLocaleString("tr-TR")}</span>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                required
                placeholder="Ad Soyad"
                maxLength={40}
                value={name}
                onChange={e => setName(e.target.value)}
                className={`pl-10 pr-3 py-3 rounded-xl border border-white/40 bg-white/60 dark:bg-[#18181b]/60 focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-900 dark:text-gray-100 shadow-inner transition-all ${errors.name ? 'border-red-400' : ''}`}
              />
              {errors.name && <span className="text-xs text-red-500 absolute left-0 -bottom-5">{errors.name}</span>}
            </div>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                required
                placeholder="E-posta"
                maxLength={50}
                value={email}
                onChange={e => setEmail(e.target.value)}
                className={`pl-10 pr-3 py-3 rounded-xl border border-white/40 bg-white/60 dark:bg-[#18181b]/60 focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-900 dark:text-gray-100 shadow-inner transition-all ${errors.email ? 'border-red-400' : ''}`}
              />
              {errors.email && <span className="text-xs text-red-500 absolute left-0 -bottom-5">{errors.email}</span>}
            </div>
            <div className="relative">
              <FaCreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                required
                placeholder="Kart Numarası "
                maxLength={24}
                value={card}
                onChange={handleCardChange}
                inputMode="numeric"
                className={`pl-10 pr-3 py-3 rounded-xl border border-white/40 bg-white/60 dark:bg-[#18181b]/60 focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-900 dark:text-gray-100 shadow-inner transition-all ${errors.card ? 'border-red-400' : ''}`}
              />
              {errors.card && <span className="text-xs text-red-500 absolute left-0 -bottom-5">{errors.card}</span>}
            </div>
            <div className="flex gap-2">
              <div className="relative w-1/2">
                <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  required
                  placeholder="AA/YY"
                  maxLength={5}
                  value={expiry}
                  onChange={handleExpiryChange}
                  inputMode="numeric"
                  className={`pl-10 pr-3 py-3 rounded-xl border border-white/40 bg-white/60 dark:bg-[#18181b]/60 focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-900 dark:text-gray-100 shadow-inner transition-all w-full ${errors.expiry ? 'border-red-400' : ''}`}
                />
                {errors.expiry && <span className="text-xs text-red-500 absolute left-0 -bottom-5">{errors.expiry}</span>}
              </div>
              <div className="relative w-1/2">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  required
                  placeholder="CVC"
                  maxLength={4}
                  value={cvc}
                  onChange={handleCvcChange}
                  inputMode="numeric"
                  className={`pl-10 pr-3 py-3 rounded-xl border border-white/40 bg-white/60 dark:bg-[#18181b]/60 focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-900 dark:text-gray-100 shadow-inner transition-all w-full ${errors.cvc ? 'border-red-400' : ''}`}
                />
                {errors.cvc && <span className="text-xs text-red-500 absolute left-0 -bottom-5">{errors.cvc}</span>}
              </div>
            </div>
            <button
              type="submit"
              className="mt-3 px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-2xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all text-lg tracking-wide border-none outline-none focus:ring-4 focus:ring-pink-300/40"
            >
              <span className="drop-shadow">Ödemeyi Tamamla</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 
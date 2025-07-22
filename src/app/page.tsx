"use client";
import BackgroundBlobs from "../components/BackgroundBlobs";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Stats from "../components/Stats";
import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import SocialLinks from "../components/SocialLinks";
import Services from "../components/Services";
import ContactForm from "../components/ContactForm";

type CartItem = {
  title: string;
  price: string;
};

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  return (
    <>
      <BackgroundBlobs />
      <main className="min-h-screen flex flex-col justify-center items-center bg-background text-foreground px-1 sm:px-0 pt-[env(safe-area-inset-top)]">
        <Hero />
        <Mission />
        <Stats cart={cart} setCart={setCart as Dispatch<SetStateAction<CartItem[]>>} />
        <SocialLinks />
        <Services />
        <ContactForm />
      </main>
    </>
  );
}

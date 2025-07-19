import BackgroundBlobs from "../components/BackgroundBlobs";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Stats from "../components/Stats";
import SocialLinks from "../components/SocialLinks";
import Services from "../components/Services";
import ContactForm from "../components/ContactForm";
import WhatsAppFloat from "../components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <BackgroundBlobs />
      <main className="min-h-screen flex flex-col justify-center items-center bg-background text-foreground px-1 sm:px-0">
        <Hero />
        <Mission />
        <Stats />
        <SocialLinks />
        <Services />
        <ContactForm />
      </main>
      <WhatsAppFloat />
    </>
  );
}

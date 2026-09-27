import { ContactHeroSection } from "@/components/contact/ContactHeroSection";
import { ContactFormSection } from "@/components/contact/ContactFormSection";

export const metadata = {
  title: "Contact Us | AdunniTrak",
  description: "Discuss your operational requirements with AdunniTrak.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden bg-white">
      <ContactHeroSection />
      <ContactFormSection />
    </main>
  );
}

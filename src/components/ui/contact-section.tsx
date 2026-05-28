import { ContactPage } from "@/components/ui/contact-page";

interface ContactSectionProps {
  isDark?: boolean;
}

export default function ContactSection({ isDark = true }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="px-4 py-16 transition-colors md:py-24"
      style={{
        backgroundColor: isDark ? "hsl(0 0% 0%)" : "hsl(0 0% 98%)",
        color: isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)",
      }}
    >
      <ContactPage />
    </section>
  );
}

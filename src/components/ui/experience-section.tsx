import JobSlider from "@/components/ui/job-slider";

interface ExperienceSectionProps {
  isDark?: boolean;
}

export default function ExperienceSection({ isDark = true }: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      className="px-4 py-16 transition-colors md:py-24"
      style={{
        backgroundColor: isDark ? "hsl(0 0% 0%)" : "hsl(0 0% 98%)",
        color: isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)",
      }}
    >
      <JobSlider />
    </section>
  );
}

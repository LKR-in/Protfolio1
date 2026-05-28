import { ProjectsCarousel, type Project } from "@/components/ui/carousel";

interface ProjectsSectionProps {
  isDark?: boolean;
}

const projectsData: Project[] = [
  {
    id: "portfolio",
    title: "Hand Gesture To Text And Speech",
    meta: "PYTHON",
    description: "Converts hand gestures into readable text and speech output.",
    imageSrc: "/handgesture.png?w=900&auto=format&fit=crop",
    href: "https://github.com/lavjeetrai/handgesturetotext",
    isNew: true,
  },
  {
    id: "blog",
    title: "SecureScan",
    meta: "REACT || TYPESCRIPT",
    description: "Creates QR code for both text and images.",
    imageSrc: "/secure.png?w=900&auto=format&fit=crop",
    href: "https://securescanbylav.vercel.app/",
  },
  {
    id: "dashboard",
    title: "LEARN X",
    meta: "REACT || TYPESCRIPT",
    description: "AI powered classroom which analyse student assignmnet submission and tell the weak point.",
    imageSrc: "/learnx.png?w=900&auto=format&fit=crop",
    href: "https://expo1student.vercel.app/",
  },
];

export default function ProjectsSection({ isDark = true }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="px-0 py-16 transition-colors md:py-24"
      style={{
        backgroundColor: isDark ? "hsl(0 0% 0%)" : "hsl(0 0% 98%)",
        color: isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)",
      }}
    >
      <ProjectsCarousel
        projects={projectsData}
        title="Projects"
      />
    </section>
  );
}

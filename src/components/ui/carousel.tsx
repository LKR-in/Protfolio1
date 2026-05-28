import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Project {
  id: string;
  title: string;
  meta: string;
  description: string;
  imageSrc: string;
  href?: string;
  isNew?: boolean;
}

interface ProjectsCarouselProps {
  projects: Project[];
  title?: string;
  className?: string;
}

export const ProjectsCarousel = React.forwardRef<HTMLDivElement, ProjectsCarouselProps>(
  ({ projects, title = "Projects", className, ...props }, ref) => {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);

    const checkScrollability = React.useCallback(() => {
      const container = scrollContainerRef.current;
      if (container) {
        const { scrollLeft, scrollWidth, clientWidth } = container;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
      }
    }, []);

    React.useEffect(() => {
      const container = scrollContainerRef.current;
      if (container) {
        checkScrollability();
        container.addEventListener("scroll", checkScrollability);
      }
      return () => {
        if (container) {
          container.removeEventListener("scroll", checkScrollability);
        }
      };
    }, [projects, checkScrollability]);

    const scroll = (direction: "left" | "right") => {
      const container = scrollContainerRef.current;
      if (container) {
        const scrollAmount = container.clientWidth * 0.8;
        container.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    };

    return (
      <section
        ref={ref}
        className={cn("mx-auto w-full max-w-7xl py-8", className)}
        aria-labelledby="projects-heading"
        {...props}
      >
        <div className="mb-4 flex items-center justify-between px-4 sm:px-6">
          <h2 id="projects-heading" className="text-2xl font-semibold tracking-tight text-current">
            {title}
          </h2>
          <div className="hidden items-center gap-2 sm:flex">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className="rounded-full border border-neutral-700 bg-white p-2 text-neutral-950 transition-opacity duration-300 hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-30 dark:bg-neutral-950 dark:text-white dark:hover:bg-neutral-900"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className="rounded-full border border-neutral-700 bg-white p-2 text-neutral-950 transition-opacity duration-300 hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-30 dark:bg-neutral-950 dark:text-white dark:hover:bg-neutral-900"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="scrollbar-hide flex snap-x snap-mandatory space-x-4 overflow-x-auto scroll-smooth px-4 pb-1 sm:px-6 md:space-x-6"
        >
          {projects.map((project) => {
            const CardWrapper = project.href ? "a" : "div";

            return (
              <div key={project.id} className="w-[min(78vw,240px)] flex-shrink-0 snap-start sm:w-[280px]">
                <CardWrapper
                  href={project.href}
                  target={project.href ? "_blank" : undefined}
                  rel={project.href ? "noopener noreferrer" : undefined}
                  className="group block cursor-pointer"
                >
                <div className="relative mb-3 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950 transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:shadow-lg">
                  <img
                    src={project.imageSrc}
                    alt={`Preview for ${project.title}`}
                    className="h-[300px] w-full object-cover sm:h-[380px]"
                  />
                  <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider">
                        {project.title}
                      </h3>
                      <p className="text-xs text-white/80">{project.meta}</p>
                    </div>
                    <p className="text-sm font-medium">{project.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <h4 className="text-sm font-semibold text-current sm:text-base">
                    {project.title}
                  </h4>
                  {project.isNew && (
                    <span className="rounded-full bg-[#C3E41D] px-2 py-0.5 text-xs font-semibold text-black">
                      NEW
                    </span>
                  )}
                </div>
              </CardWrapper>
            </div>
            );
          })}
        </div>
      </section>
    );
  },
);

ProjectsCarousel.displayName = "ProjectsCarousel";

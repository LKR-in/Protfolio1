import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import ButtonSocialIconDemo from "@/components/ui/social-icon";

interface AboutSectionProps {
  isDark?: boolean;
}

export default function AboutSection({ isDark = true }: AboutSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionBg = isDark ? "hsl(0 0% 0%)" : "hsl(0 0% 98%)";
  const textColor = isDark ? "text-white" : "text-neutral-950";
  const mutedColor = isDark ? "text-neutral-400" : "text-neutral-600";

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.16,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const scaleVariants = {
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.16,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  };

  return (
    <section
      id="about"
      className="px-4 py-16 transition-colors md:py-24"
      ref={heroRef}
      style={{ backgroundColor: sectionBg }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative">
          <div className="absolute -top-3 z-10 flex w-[85%] items-center justify-between sm:-top-2 md:top-0 lg:top-4">
            <div className="flex items-center gap-2 text-xl">
              <span className="animate-spin text-[#C3E41D]">✱</span>
              <TimelineContent
                as="span"
                animationNum={0}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className={`text-sm font-medium ${mutedColor}`}
              >
                WHO I AM
              </TimelineContent>
            </div>
            <TimelineContent
              as="div"
              animationNum={1}
              timelineRef={heroRef}
              customVariants={revealVariants}
            >
              <ButtonSocialIconDemo />
            </TimelineContent>
          </div>

          <TimelineContent
            as="figure"
            animationNum={4}
            timelineRef={heroRef}
            customVariants={scaleVariants}
            className="group relative"
          >
            <svg className="w-full" width="100%" height="100%" viewBox="0 0 100 40">
              <defs>
                <clipPath id="clip-inverted" clipPathUnits="objectBoundingBox">
                  <path
                    d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z"
                    fill="#D9D9D9"
                  />
                </clipPath>
              </defs>
              <image
                clipPath="url(#clip-inverted)"
                preserveAspectRatio="xMidYMid slice"
                width="100%"
                height="130%"
                href="images/backgrnd.jpeg?w=1200&auto=format&fit=crop"
              />
            </svg>
          </TimelineContent>

          <div className="flex flex-wrap items-center justify-between py-3 text-sm lg:justify-start">
            <TimelineContent
              as="div"
              animationNum={5}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="flex gap-4"
            >
              <div className="mb-2 flex items-center gap-2 text-xs sm:text-base">
                <span className="font-bold text-[#C3E41D]">1+</span>
                <span className={mutedColor}>years learning by building</span>
                <span className="text-neutral-500">|</span>
              </div>
              <div className="mb-2 flex items-center gap-2 text-xs sm:text-base">
                <span className="font-bold text-[#C3E41D]">10+</span>
                <span className={mutedColor}>projects explored</span>
              </div>
            </TimelineContent>
            <div className="right-0 bottom-16 flex flex-row-reverse gap-4 lg:absolute lg:flex-col lg:gap-0">
              <TimelineContent
                as="div"
                animationNum={6}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="mb-2 flex items-center gap-2 text-2xl sm:text-3xl lg:text-4xl"
              >
                <span className="font-semibold text-[#C3E41D]">100%</span>
                <span className={`${mutedColor} uppercase`}>lazy</span>
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={7}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="mb-2 flex items-center gap-2 text-xs sm:text-base"
              >
                <span className="block text-neutral-500 lg:hidden">|</span>
              </TimelineContent>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h1 className={`mb-8 text-2xl font-semibold !leading-[110%] sm:text-4xl md:text-5xl ${textColor}`}>
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.1}
                staggerFrom="first"
                reverse
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 30,
                  delay: 0.4,
                }}
              >
               Architecting Intelligence: Full-Stack Development & AI Research
              </VerticalCutReveal>
            </h1>

            <TimelineContent
              as="div"
              animationNum={9}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className={`grid gap-8 ${mutedColor} md:grid-cols-2`}
            >
              <TimelineContent
                as="div"
                animationNum={10}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-xs sm:text-base"
              >
                <p className="text-justify leading-relaxed">
                  I enjoy transforming advanced AI research and rough concepts into resilient, full-stack applications, keeping the underlying architecture strictly logical, scalable, and grounded in solid evidence. My focus is on learning deeply—whether that means exploring LLM fine-tuning or optimizing low-level WebAssembly
                </p>
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={11}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-xs sm:text-base"
              >
                <p className="text-justify leading-relaxed">
                  improving steadily through rigorous problem-solving, and building intelligent platforms like LearnX that feel seamless for the people using them. Ultimately, I aim to bridge the gap between heavy computational theory and intuitive, accessible software.
                </p>
              </TimelineContent>
            </TimelineContent>
          </div>

          <div className="md:col-span-1">
            <div className="text-right">
              <TimelineContent
                as="div"
                animationNum={12}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="mb-2 text-2xl font-bold text-[#C3E41D]"
              >
                LAVJEET
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={13}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className={`mb-8 text-sm ${mutedColor}`}
              >
                Developer | Learner | Builder
              </TimelineContent>

              <TimelineContent
                as="div"
                animationNum={14}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="mb-6"
              >
                <p className={`mb-4 font-medium ${textColor}`}>
                  Want to explore the projects and ideas behind the work?
                </p>
              </TimelineContent>

              <TimelineContent
                as="a"
                animationNum={15}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="#projects"
                className="ml-auto flex w-fit cursor-pointer gap-2 rounded-lg border border-neutral-700 bg-neutral-900 px-5 py-3 font-semibold text-white shadow-lg shadow-neutral-900 transition-all duration-300 ease-in-out hover:gap-4 hover:bg-neutral-950"
              >
                VIEW PROJECTS <ArrowRight />
              </TimelineContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

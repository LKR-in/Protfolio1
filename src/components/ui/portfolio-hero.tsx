import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className = "", children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});
Button.displayName = "Button";

interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  className?: string;
  style?: React.CSSProperties;
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 50,
  animateBy = "words",
  direction = "top",
  className = "",
  style,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 },
    );
    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const segments = useMemo(() => {
    return animateBy === "words" ? text.split(" ") : text.split("");
  }, [text, animateBy]);

  return (
    <p ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {segments.map((segment, i) => (
        <span
          key={`${segment}-${i}`}
          style={{
            display: "inline-block",
            filter: inView ? "blur(0px)" : "blur(10px)",
            opacity: inView ? 1 : 0,
            transform: inView
              ? "translateY(0)"
              : `translateY(${direction === "top" ? "-20px" : "20px"})`,
            transition: `all 0.5s ease-out ${i * delay}ms`,
          }}
        >
          {segment}
          {animateBy === "words" && i < segments.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </p>
  );
};

export default function PortfolioHero() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const menuItems = [
  { label: "HOME", href: "#home", highlight: true },
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "EDUCATION", href: "#education" },
  { label: "BLOG", href: "#blog" },
  { label: "CONTACT", href: "#contact" },
];
  return (
    <div
      className="min-h-screen text-foreground transition-colors"
      style={{
        backgroundColor: isDark ? "hsl(0 0% 0%)" : "hsl(0 0% 98%)",
        color: isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)",
      }}
    >
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
        <nav className="mx-auto flex max-w-screen-2xl items-center justify-between">
          <div className="relative">
            <Button
              ref={buttonRef}
              type="button"
              className="z-50 p-2 text-neutral-500 transition-colors duration-300 hover:text-black dark:hover:text-white"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-8 w-8 transition-colors duration-300" strokeWidth={2} />
              ) : (
                <Menu className="h-8 w-8 transition-colors duration-300" strokeWidth={2} />
              )}
            </Button>

            {isMenuOpen && (
              <div
                ref={menuRef}
                className="absolute top-full left-0 z-[100] mt-2 ml-4 w-[200px] rounded-lg border-none p-4 shadow-2xl md:w-[240px]"
                style={{
                  backgroundColor: isDark ? "hsl(0 0% 0%)" : "hsl(0 0% 98%)",
                }}
              >
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block cursor-pointer px-2 py-1.5 text-lg font-bold tracking-tight transition-colors duration-300 md:text-xl"
                    style={{
                      color: item.highlight
                        ? "#C3E41D"
                        : isDark
                          ? "hsl(0 0% 100%)"
                          : "hsl(0 0% 10%)",
                    }}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.color = "#C3E41D";
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.color = item.highlight
                        ? "#C3E41D"
                        : isDark
                          ? "hsl(0 0% 100%)"
                          : "hsl(0 0% 10%)";
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

         <div
          className="text-4xl transition-transform duration-300 hover:scale-110 cursor-pointer inline-block"
          style={{
          color: isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)",
          fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive",
            }}
>
            LKR
              </div>

          <Button
            type="button"
            onClick={toggleTheme}
            className="relative h-8 w-16 rounded-full p-0 transition-opacity hover:opacity-80"
            style={{ backgroundColor: isDark ? "hsl(0 0% 15%)" : "hsl(0 0% 90%)" }}
            aria-label="Toggle theme"
          >
            <div
              className="absolute top-1 left-1 h-6 w-6 rounded-full transition-transform duration-300"
              style={{
                backgroundColor: isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)",
                transform: isDark ? "translateX(2rem)" : "translateX(0)",
              }}
            />
          </Button>
        </nav>
      </header>

      <main className="relative flex min-h-screen flex-col overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-4">
          <div className="relative text-center">
            <div>
              <BlurText
                text="LAVJEET"
                delay={100}
                animateBy="letters"
                direction="top"
                className="justify-center whitespace-nowrap font-bold text-[100px] leading-[0.75] tracking-tighter uppercase sm:text-[140px] md:text-[180px] lg:text-[210px]"
                style={{ color: "#C3E41D", fontFamily: "'Fira Code', monospace" }}
              />
            </div>
            <div>
              <BlurText
                text="Kr.rai"
                delay={100}
                animateBy="letters"
                direction="top"
                className="justify-center whitespace-nowrap font-bold text-[100px] leading-[0.75] tracking-tighter uppercase sm:text-[140px] md:text-[180px] lg:text-[210px]"
                style={{ color: "#C3E41D", fontFamily: "'Fira Code', monospace" }}
              />
            </div>

            <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <div className="h-[110px] w-[65px] cursor-pointer overflow-hidden rounded-full shadow-2xl transition-transform duration-300 hover:scale-110 sm:h-[152px] sm:w-[90px] md:h-[185px] md:w-[110px] lg:h-[218px] lg:w-[129px]">
                <img
                  src="images/logo.png?auto=format&fit=crop&w=480&q=80"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-16 left-1/2 w-full -translate-x-1/2 px-6 sm:bottom-20 md:bottom-24 lg:bottom-32 xl:bottom-36">
          <div className="flex justify-center">
            <BlurText
              text="Laziness is the key...."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-center text-[15px] text-neutral-500 transition-colors duration-300 hover:text-black sm:text-[18px] md:text-[20px] lg:text-[22px] dark:hover:text-white"
              style={{ fontFamily: "'Antic', sans-serif" }}
            />
          </div>
        </div>

        <Button
          type="button"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 p-0 transition-colors duration-300 md:bottom-10"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-5 w-5 text-neutral-500 transition-colors duration-300 hover:text-black md:h-8 md:w-8 dark:hover:text-white" />
        </Button>
      </main>
    </div>
  );
}

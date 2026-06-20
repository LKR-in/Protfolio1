import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

// Re-added TypeScript definition for type safety
type SocialLink = {
  label: string;
  href: string;
  icon?: string;
  darkIcon?: string;
};

const socialLinks: SocialLink[] = [
  {
    label: "Cv",
    href: "/lavjeet.pdf",
  },
  {
    label: "Github",
    href: "https://github.com/lavjeetrai",
    icon: "https://images.shadcnspace.com/assets/svgs/icon-github.svg",
    darkIcon: "https://images.shadcnspace.com/assets/svgs/icon-github-white.svg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lavjeet-rai/",
    icon: "https://images.shadcnspace.com/assets/svgs/icon-linkedin.svg",
  },
  {
    label: "X",
    href: "https://x.com/lavjeetkumarrai",
  },
];

const ButtonSocialIconDemo = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
      {socialLinks.map((item) => (
        <Button
          key={item.label}
          asChild
          variant="outline"
          size="icon"
          className="rounded-lg transition-all duration-300 hover:scale-110"
        >
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${item.label}`}
          >
            {/* Renders Lucide Icon for CV */}
            {item.label === "CV" && <FileText className="h-4 w-4" />}
            
            {/* Renders Text for X */}
            {item.label === "X" && <span className="text-sm font-semibold">X</span>}
            
            {/* Renders Light Mode / Default SVG */}
            {item.icon && (
              <img
                src={item.icon}
                alt=""
                className={`h-4 w-4 ${item.darkIcon ? "dark:hidden" : ""}`}
              />
            )}
            
            {/* Renders Dark Mode SVG (only visible in dark mode) */}
            {item.darkIcon && (
              <img 
                src={item.darkIcon} 
                alt="" 
                className="hidden h-4 w-4 dark:block" 
              />
            )}
          </a>
        </Button>
      ))}
    </div>
  );
};

export default ButtonSocialIconDemo;

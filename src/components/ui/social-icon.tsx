import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    label: "CV",
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
    <div className="flex flex-wrap items-center justify-center gap-4">
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
            {item.label === "CV" && <FileText className="h-4 w-4" />}
            {item.label === "X" && <span className="text-sm font-semibold">X</span>}
            {item.icon && (
              <img
                src={item.icon}
                alt=""
                className={`${item.darkIcon ? "dark:hidden " : ""}h-4 w-4`}
              />
            )}
            {item.darkIcon && (
              <img src={item.darkIcon} alt="" className="hidden h-4 w-4 dark:block" />
            )}
          </a>
        </Button>
      ))}
    </div>
  );
};

export default ButtonSocialIconDemo;

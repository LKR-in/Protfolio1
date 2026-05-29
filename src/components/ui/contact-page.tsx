import React from "react";
import {
  BriefcaseBusiness,
  Check,
  Code2,
  Copy,
  Mail,
  MapPin,
  Send,
  XIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const APP_EMAIL = "lavjeetkumarrai@gmail.com";
const APP_LOCATION = "India";

const socialLinks = [
  {
    icon: Code2,
    href: "https://github.com/lavjeetrai",
    label: "GitHub",
  },
  {
    icon: BriefcaseBusiness,
    href: "https://www.linkedin.com/in/lavjeet-rai/",
    label: "LinkedIn",
  },
  {
    icon: XIcon,
    href: "https://x.com/lavjeetkumarrai",
    label: "X",
  },
];

export function ContactPage() {
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-lg border border-neutral-200 bg-white text-neutral-950 transition-colors dark:border-neutral-800 dark:bg-neutral-950 dark:text-white">
        <div className="relative px-4 pt-14 pb-10 md:px-8 md:pt-16">
          <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top_right,rgba(195,228,29,0.16),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)]" />
          <div className="relative z-10 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase text-[#C3E41D]">
              Contact
            </p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Let&apos;s build something useful.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
              Send an idea, opportunity, bug, or collaboration note. I am usually
              around for focused work on AI products, computer vision, and React
              experiences.
            </p>
          </div>
        </div>

        <BorderSeparator />

        <div className="grid md:grid-cols-3">
          <Box
            icon={Mail}
            title="Email"
            description="Best place for project discussions and opportunities."
          >
            <a
              href={`mailto:${APP_EMAIL}`}
              className="min-w-0 break-all font-mono text-sm font-medium tracking-wide hover:underline sm:text-base"
            >
              {APP_EMAIL}
            </a>
            <CopyButton className="size-9 shrink-0" text={APP_EMAIL} />
          </Box>

          <Box
            icon={MapPin}
            title="Location"
            description="Remote-friendly, async-friendly, and comfortable shipping fast."
          >
            <span className="font-mono text-base font-medium tracking-wide">
              {APP_LOCATION}
            </span>
          </Box>

          <Box
            icon={Send}
            title="Blog"
            description="Read my latest posts and insights."
            className="md:border-r-0"
          >
            <a
              href="https://blog.lavjeetkumarrai.dpdns.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium leading-relaxed text-[#white] hover:underline transition-colors"
            >
              blog.lavjeetkumarrai.dpdns.org
            </a>
          </Box>
        </div>

        <BorderSeparator />

        <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden px-4 py-14">
          <div
            aria-hidden
            className={cn(
              "absolute inset-0",
              "bg-[radial-gradient(rgba(195,228,29,0.26)_1px,transparent_1px)]",
              "bg-[size:32px_32px]",
              "[mask-image:radial-gradient(ellipse_at_center,black_28%,transparent_72%)]",
            )}
          />

          <div className="relative z-10 space-y-6 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Find me online</h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-2 rounded-full border border-neutral-200 bg-white/80 px-4 py-2 text-neutral-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C3E41D] hover:bg-[#C3E41D] hover:text-black dark:border-neutral-800 dark:bg-neutral-950/80 dark:text-white dark:hover:bg-[#C3E41D] dark:hover:text-black"
                >
                  <link.icon className="size-4" />
                  <span className="font-mono text-sm font-medium tracking-wide">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
            <div className="mx-auto h-px w-24 bg-neutral-200 dark:bg-neutral-800" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
              (c) {new Date().getFullYear()} Lavjeet
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Designed, built, and kept quietly improving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BorderSeparator() {
  return <div className="h-px w-full border-b border-neutral-200 dark:border-neutral-800" />;
}

type ContactBox = React.ComponentProps<"div"> & {
  icon: LucideIcon;
  title: string;
  description: string;
};

function Box({
  icon: Icon,
  title,
  description,
  className,
  children,
  ...props
}: ContactBox) {
  return (
    <div
      className={cn(
        "flex min-h-[250px] flex-col justify-between border-b border-neutral-200 md:border-r md:border-b-0 dark:border-neutral-800",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-x-3 border-b border-neutral-200 bg-neutral-100/70 p-4 dark:border-neutral-800 dark:bg-black/50">
        <Icon className="size-5 text-neutral-500 dark:text-neutral-400" strokeWidth={1.5} />
        <h2 className="text-lg font-medium tracking-wide">{title}</h2>
      </div>
      <div className="flex min-w-0 items-center gap-x-2 p-4 py-10">{children}</div>
      <div className="border-t border-neutral-200 p-4 dark:border-neutral-800">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">{description}</p>
      </div>
    </div>
  );
}

type CopyButtonProps = ButtonProps & {
  text: string;
};

function CopyButton({
  className,
  variant = "ghost",
  size = "icon",
  text,
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={cn("relative disabled:opacity-100", className)}
      onClick={handleCopy}
      aria-label={copied ? "Copied" : "Copy to clipboard"}
      disabled={copied || props.disabled}
      {...props}
    >
      <Check
        className={cn(
          "absolute size-3.5 stroke-emerald-500 transition-all",
          copied ? "scale-100 opacity-100" : "scale-0 opacity-0",
        )}
        aria-hidden="true"
      />
      <Copy
        aria-hidden="true"
        className={cn(
          "absolute size-3.5 transition-all",
          copied ? "scale-0 opacity-0" : "scale-100 opacity-100",
        )}
      />
    </Button>
  );
}

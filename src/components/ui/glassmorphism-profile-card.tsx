"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Clock, Copy, Mail, Plus, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface GlassmorphismProfileCardProps {
  name?: string;
  role?: string;
  email?: string;
  avatarSrc?: string;
  statusText?: string;
  statusColor?: string;
  glowText?: string;
  className?: string;
}

export default function GlassmorphismProfileCard({
  name = "Lavjeet Kumar Rai",
  role = "Full-Stack Developer | AI Research Learner",
  email = "lavjeetkumarrai@gmail.com",
  avatarSrc = "/lav.jpg",
  statusText = "Available for work",
  statusColor = "bg-[#C3E41D]",
  glowText = "Currently Giving My 110%.",
  className,
}: GlassmorphismProfileCardProps) {
  const [copied, setCopied] = useState(false);

  const timeText = useMemo(() => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes().toString().padStart(2, "0");
    const hour12 = ((h + 11) % 12) + 1;
    const ampm = h >= 12 ? "PM" : "AM";
    return `${hour12}:${m}${ampm}`;
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 24, scale: 0.98 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 24, scale: 0.98 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className={cn("relative w-full max-w-sm", className)}
    >
      <div className="pointer-events-none absolute inset-x-6 -bottom-8 top-[86%] z-0 rounded-[28px] bg-[#C3E41D]/90 shadow-[0_40px_80px_-18px_rgba(195,228,29,0.85)]" />

      <div className="pointer-events-none absolute inset-x-0 -bottom-10 z-0 mx-auto w-full">
        <div className="flex items-center justify-center gap-2 bg-transparent py-3 text-center text-sm font-medium text-black">
          <Zap className="h-4 w-4" />
          {glowText}
        </div>
      </div>

      <Card
        className={cn(
          "relative z-10 mx-auto w-full overflow-visible rounded-[20px]",
          "border border-white/15 bg-neutral-950/80 text-white shadow-2xl shadow-black/40 backdrop-blur-xl",
          "dark:bg-neutral-950/75",
        )}
      >
        <CardContent className="p-6 sm:p-7">
          <div className="mb-6 flex items-center justify-between text-sm text-neutral-400">
            <div className="flex items-center gap-2">
              <span className={cn("inline-block h-2.5 w-2.5 animate-pulse rounded-full", statusColor)} />
              <span className="select-none">{statusText}</span>
            </div>
            <div className="flex items-center gap-2 opacity-80">
              <Clock className="h-4 w-4" />
              <span className="tabular-nums">{timeText}</span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-5">
            <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-[20px] border border-white/10 bg-black ring-2 ring-white/10">
              <img
                src={avatarSrc}
                alt={`${name} avatar`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="min-w-0 text-center">
              <h3 className="truncate text-xl font-semibold tracking-tight sm:text-3xl">
                {name}
              </h3>
              <p className="mt-1 text-sm text-neutral-400">{role}</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Button
              asChild
              variant="outline"
              className="h-12 justify-start gap-3 rounded-2xl border-white/15 bg-white/10 text-white hover:bg-[#C3E41D] hover:text-black"
            >
              <a href={`mailto:${email}`}>
                <Plus className="h-4 w-4" />
                Hire Me
              </a>
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={handleCopy}
              className="h-12 justify-start gap-3 rounded-2xl border-white/15 bg-white/10 text-white hover:bg-[#C3E41D] hover:text-black"
            >
              {copied ? <Mail className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied" : "Copy Email"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

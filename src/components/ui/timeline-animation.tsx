import { motion, useInView, type Variants } from "framer-motion";
import React, { useMemo } from "react";

type TimelineContentProps<T extends React.ElementType> = {
  as?: T;
  animationNum?: number;
  timelineRef: React.RefObject<Element | null>;
  customVariants?: Variants;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function TimelineContent<T extends React.ElementType = "div">({
  as,
  animationNum = 0,
  timelineRef,
  customVariants,
  className,
  children,
  ...props
}: TimelineContentProps<T>) {
  const isInView = useInView(timelineRef, { once: true, amount: 0.2 });
  const Component = useMemo(() => motion.create((as ?? "div") as React.ElementType), [as]);

  const variants =
    customVariants ??
    ({
      hidden: {
        opacity: 0,
        y: -20,
        filter: "blur(10px)",
      },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          delay: i * 0.2,
          duration: 0.5,
        },
      }),
    } satisfies Variants);

  return (
    <Component
      className={className}
      custom={animationNum}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      {...props}
    >
      {children}
    </Component>
  );
}

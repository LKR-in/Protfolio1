"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const slides = [
  [
    { role: "Open Source Contributor @sugarlabs", count: "2026" },
    { role: "Open Source Contributor @@HSF by cern", count: "2026" },
    { role: "Open Source Contributor @singlecorelabs", count: "2026" },
    { role: "Seed Grant Recipient ", count: "2026" },
    { role: "Understanding Machine-Learning", count: "2026" },
    { role: "Computer-Vision", count: "2026" },
    
  ]
];

export default function JobSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-8 rounded-lg border border-neutral-200 bg-white px-4 py-8 transition-colors dark:border-neutral-800 dark:bg-neutral-950 md:flex-row md:gap-10 md:px-8 md:py-10">
      <div className="w-full space-y-5 text-left md:w-2/5">
        <p className="mb-3 text-sm font-medium uppercase text-[#C3E41D]">
          Experience Map
        </p>
        <img
          src="images/logo.png?auto=format&fit=crop&w=600&q=90"
          alt="Lavjeet"
          className="mx-auto aspect-[4/3] w-full max-w-[320px] rounded-lg border border-neutral-200 object-cover shadow-lg shadow-neutral-200/60 dark:border-neutral-800 dark:shadow-black/40 md:mx-0"
        />
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold leading-tight text-neutral-950 dark:text-white sm:text-3xl md:text-5xl">
            Laziness is the key...
          </h2>
          <p className="max-w-md text-neutral-600 dark:text-neutral-400">
            A progressive timeline documenting the engineering roles and technical projects I executed.
          </p>
        </div>
      </div>

      <div className="relative flex w-full items-center px-2 sm:px-0 md:w-1/2">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute -left-1 top-1/2 z-10 rounded-full border border-neutral-200 bg-white shadow hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800 sm:-left-6"
          onClick={handlePrev}
          aria-label="Previous roles"
        >
          <ChevronLeft className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />
        </Button>

        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                className="grid min-w-full grid-cols-1 gap-3 rounded-lg bg-neutral-100 p-3 dark:bg-black sm:grid-cols-2 sm:gap-4 sm:p-4"
              >
                {slide.map((job) => (
                  <Card
                    key={job.role}
                    className="border-neutral-200 bg-white p-4 text-center shadow-md shadow-neutral-200/60 transition-colors hover:border-[#C3E41D] dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-black/30"
                  >
                    <CardHeader className="p-0 text-base font-semibold text-neutral-900 dark:text-neutral-100 sm:text-lg">
                      {job.role}
                    </CardHeader>
                    <CardContent className="mt-1 p-0 text-sm text-neutral-500 dark:text-neutral-400">
                      {job.count}
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute -right-1 top-1/2 z-10 rounded-full border border-neutral-200 bg-white shadow hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800 sm:-right-6"
          onClick={handleNext}
          aria-label="Next roles"
        >
          <ChevronRight className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />
        </Button>
      </div>
    </section>
  );
}

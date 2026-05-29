import { useEffect, useState } from "react";
import PortfolioHero from "@/components/ui/portfolio-hero";
import { WeaveSpinner } from "@/components/ui/weave-spinner";

export default function App() {
  const [isWindowLoaded, setIsWindowLoaded] = useState(
    document.readyState === "complete",
  );
  const [isHeroVideoReady, setIsHeroVideoReady] = useState(false);
  const isSiteReady = isWindowLoaded && isHeroVideoReady;

  useEffect(() => {
    if (document.readyState === "complete") {
      setIsWindowLoaded(true);
      return;
    }

    const handleWindowLoad = () => setIsWindowLoaded(true);
    window.addEventListener("load", handleWindowLoad, { once: true });

    return () => window.removeEventListener("load", handleWindowLoad);
  }, []);

  return (
    <div className="w-full">
      {!isSiteReady && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black transition-opacity duration-500"
          role="status"
          aria-live="polite"
          aria-label="Loading website"
        >
          <WeaveSpinner />
        </div>
      )}
      <PortfolioHero onHeroVideoReady={() => setIsHeroVideoReady(true)} />
    </div>
  );
}

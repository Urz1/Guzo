import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface KenBurnsHeroProps {
  images: { url: string; alt: string }[];
  interval?: number;
  overlay?: boolean;
  children?: React.ReactNode;
  className?: string;
  height?: string;
}

const KenBurnsHero = ({
  images,
  interval = 6000,
  overlay = true,
  children,
  className = "",
  height = "h-screen",
}: KenBurnsHeroProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const advance = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(advance, interval);
    return () => clearInterval(timer);
  }, [advance, interval, images.length]);

  return (
    <div className={`relative ${height} w-full overflow-hidden ${className}`}>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: 1,
            scale: 1.2,
            transition: {
              opacity: { duration: 1.5 },
              scale: { duration: interval / 1000 + 2, ease: "linear" },
            },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 1.5 },
          }}
          className="absolute inset-0"
        >
          <img
            src={images[currentIndex].url}
            alt={images[currentIndex].alt}
            className="h-full w-full object-cover"
            loading={currentIndex === 0 ? "eager" : "lazy"}
          />
        </motion.div>
      </AnimatePresence>

      {overlay && (
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              to bottom,
              hsla(20, 10%, 5%, 0.5) 0%,
              hsla(20, 10%, 5%, 0.2) 40%,
              hsla(20, 10%, 5%, 0.6) 75%,
              hsla(20, 10%, 5%, 0.95) 100%
            )`,
          }}
        />
      )}

      {children && (
        <div className="relative z-10 flex h-full flex-col">{children}</div>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1 transition-all duration-500 ${
                i === currentIndex ? "w-8 bg-gold" : "w-4 bg-white/30"
              }`}
              aria-label={`Show image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default KenBurnsHero;

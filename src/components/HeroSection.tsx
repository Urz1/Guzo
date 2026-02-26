import { useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

import heroLalibela from "@/assets/hero-lalibela.png";
import heroHighlands from "@/assets/hero-highlands.jpg";
import heroAxum from "@/assets/hero-axum.jpg";
import heroHarar from "@/assets/hero-harar.jpg";

const heroImages = [
  { url: heroLalibela, alt: "Rock-hewn churches of Lalibela at golden hour" },
  { url: heroHighlands, alt: "Dramatic peaks of the Ethiopian highlands" },
  { url: heroAxum, alt: "Ancient obelisks of Axum" },
  { url: heroHarar, alt: "Colorful streets of Harar's walled city" },
];

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.8]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const advance = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(advance, 6000);
    return () => clearInterval(timer);
  }, [advance]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{
            opacity: 1,
            scale: 1.2,
            transition: {
              opacity: { duration: 1.5 },
              scale: { duration: 8, ease: "linear" },
            },
          }}
          exit={{ opacity: 0, transition: { duration: 1.5 } }}
          className="absolute inset-0"
        >
          <img
            src={heroImages[currentImage].url}
            alt={heroImages[currentImage].alt}
            className="h-full w-full object-cover"
            loading={currentImage === 0 ? "eager" : "lazy"}
          />
        </motion.div>
      </AnimatePresence>

      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to bottom,
            hsla(20, 10%, 5%, 0.4) 0%,
            hsla(20, 10%, 5%, 0.1) 30%,
            hsla(20, 10%, 5%, 0.5) 70%,
            hsla(20, 10%, 5%, 0.95) 100%
          )`,
          opacity: overlayOpacity,
        }}
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gold/20"
            style={{ left: `${15 + i * 15}%`, top: `${20 + i * 10}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          />
        ))}
      </div>

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20 text-center"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 60 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-6 h-px bg-gold"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-6 font-body text-xs font-semibold uppercase tracking-[0.4em] text-gold"
        >
          The Gateway to Ethiopia
        </motion.p>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-5xl font-display text-5xl font-bold leading-[1.05] text-primary-foreground md:text-7xl lg:text-[6.5rem]"
          >
            Where Ancient
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 1.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-5xl font-display text-5xl font-bold italic leading-[1.05] text-primary-foreground md:text-7xl lg:text-[6.5rem]"
          >
            Meets Eternal
          </motion.h1>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-8 max-w-xl font-body text-base leading-relaxed text-primary-foreground/60 md:text-lg"
        >
          Discover a land of ancient wonders, untamed highlands, and cultures
          that have endured for three millennia.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            to="/destinations"
            className="group inline-flex items-center gap-3 bg-gold px-10 py-4 font-body text-sm font-semibold uppercase tracking-widest text-accent-foreground transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
          >
            Explore Destinations
            <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              →
            </motion.span>
          </Link>
          <Link
            to="/wildlife"
            className="inline-flex items-center gap-3 border border-primary-foreground/20 px-10 py-4 font-body text-sm font-semibold uppercase tracking-widest text-primary-foreground/80 transition-all duration-300 hover:border-gold hover:text-gold"
          >
            Discover Wildlife
          </Link>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-24 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            className={`h-0.5 transition-all duration-700 ${
              i === currentImage ? "w-10 bg-gold" : "w-5 bg-white/25"
            }`}
            aria-label={`Show image ${i + 1}`}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="font-body text-[10px] uppercase tracking-[0.4em] text-primary-foreground/40">
            Scroll to explore
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-gold/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

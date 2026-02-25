import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-lalibela.jpg";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.8]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[110vh] w-full overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div className="absolute inset-0" style={{ scale: imageScale, y: imageY }}>
        <img
          src={heroImage}
          alt="Ancient rock-hewn church of Lalibela at golden hour"
          className="h-full w-full object-cover"
          loading="eager"
        />
      </motion.div>

      {/* Dynamic overlay */}
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

      {/* Floating particles / atmosphere */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gold/20"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-8 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center"
        >
          <span className="font-display text-3xl font-bold tracking-wider text-primary-foreground">
            GUZO
          </span>
          <span className="ml-3 font-display text-xl text-gold opacity-80">ጉዞ</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden items-center gap-10 md:flex"
        >
          {["Destinations", "Experiences", "Culture", "Plan Your Journey"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="font-body text-sm font-medium tracking-wide text-primary-foreground/70 transition-colors duration-300 hover:text-gold"
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      </nav>

      {/* Hero Content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 flex h-[calc(100%-100px)] flex-col items-center justify-center px-6 text-center"
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
          Discover a land of rock-hewn churches, untamed highlands, and cultures
          that have endured for three millennia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#destinations"
            className="group inline-flex items-center gap-3 bg-gold px-10 py-4 font-body text-sm font-semibold uppercase tracking-widest text-accent-foreground transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
          >
            Explore Destinations
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
          <a
            href="#culture"
            className="inline-flex items-center gap-3 border border-primary-foreground/20 px-10 py-4 font-body text-sm font-semibold uppercase tracking-widest text-primary-foreground/80 transition-all duration-300 hover:border-gold hover:text-gold"
          >
            Discover Culture
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2"
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

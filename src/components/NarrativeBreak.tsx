import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import highlandsImg from "@/assets/highlands-panorama.jpg";

const NarrativeBreak = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={containerRef} className="relative h-[70vh] w-full overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <img
          src={highlandsImg}
          alt="Ethiopian highlands at sunrise"
          className="h-[120%] w-full object-cover"
          loading="lazy"
        />
      </motion.div>
      <div className="absolute inset-0 bg-earth/60" />

      <div
        ref={textRef}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 40 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-6 h-px bg-gold"
        />
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-3xl font-display text-2xl font-light italic leading-relaxed text-primary-foreground/90 md:text-4xl lg:text-5xl"
        >
          "I came to see a country.{" "}
          <span className="text-gold">I found the origin of everything.</span>"
        </motion.blockquote>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 font-body text-sm uppercase tracking-widest text-primary-foreground/40"
        >
          — A traveler, after Lalibela
        </motion.p>
      </div>
    </section>
  );
};

export default NarrativeBreak;

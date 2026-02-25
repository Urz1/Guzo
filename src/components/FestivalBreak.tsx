import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import meskelImg from "@/assets/meskel-festival.jpg";

const FestivalBreak = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section ref={containerRef} className="relative h-[80vh] w-full overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <img
          src={meskelImg}
          alt="Meskel Festival bonfire celebration"
          className="h-[130%] w-full object-cover"
          loading="lazy"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-earth/80 via-earth/40 to-earth/80" />

      <div
        ref={textRef}
        className="relative z-10 flex h-full flex-col items-start justify-end px-6 pb-16 md:px-12 lg:px-20"
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold"
        >
          Living Traditions
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="max-w-2xl font-display text-4xl font-bold leading-tight text-primary-foreground md:text-6xl"
        >
          Festivals that set the{" "}
          <span className="italic text-gold">sky on fire</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 max-w-lg font-body text-base leading-relaxed text-primary-foreground/60"
        >
          From the bonfires of Meskel to the dawn processions of Timkat, Ethiopian
          festivals are not spectacles — they are invitations to belong.
        </motion.p>
        <motion.a
          href="#experiences"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 inline-flex items-center gap-2 border-b border-gold pb-1 font-body text-sm font-medium uppercase tracking-widest text-gold transition-all hover:border-gold-light hover:text-gold-light"
        >
          Explore Festival Calendar →
        </motion.a>
      </div>
    </section>
  );
};

export default FestivalBreak;

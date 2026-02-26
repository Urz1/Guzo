import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="plan"
      className="relative overflow-hidden bg-background px-6 py-32 md:px-12 lg:px-20 lg:py-40"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 Ethiopian-pattern opacity-50" />
      <div className="absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-gold/3 blur-3xl" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 60 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mb-6 h-px bg-gold"
        />

        <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.4em] text-gold">
          Begin Your Journey
        </p>
        <h2 className="font-display text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
          Ethiopia is <span className="italic">calling</span>
        </h2>
        <p className="mx-auto mt-8 max-w-lg font-body text-base leading-relaxed text-muted-foreground md:text-lg">
          Tell us when you want to travel, what moves you, and how deep you want
          to go. We'll craft a journey that exists nowhere else.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 bg-gold px-12 py-5 font-body text-sm font-semibold uppercase tracking-widest text-accent-foreground transition-all duration-300 hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20"
          >
            Start Planning
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-border px-12 py-5 font-body text-sm font-semibold uppercase tracking-widest text-foreground transition-all duration-300 hover:border-gold hover:text-gold"
          >
            Speak to a Guide
          </Link>
        </motion.div>

        <p className="mt-10 font-body text-xs text-muted-foreground">
          No commitment. No generic packages. Just a conversation about what Ethiopia means to you.
        </p>

        {/* Amharic script decoration */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 font-display text-6xl text-foreground md:text-8xl"
        >
          ጉዞ
        </motion.p>
      </motion.div>
    </section>
  );
};

export default CTASection;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "3,000+", label: "Years of Civilization", suffix: "" },
  { value: "9", label: "UNESCO World Heritage Sites", suffix: "" },
  { value: "80+", label: "Languages Spoken", suffix: "" },
  { value: "13", label: "Months of Sunshine", suffix: "" },
  { value: "4,550", label: "Meters — Highest Peak", suffix: "m" },
  { value: "∞", label: "Reasons to Return", suffix: "" },
];

const StatsBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="border-y border-gold/10 bg-background py-20">
      <div ref={ref} className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-3xl font-bold text-gold md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 font-body text-[11px] uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;

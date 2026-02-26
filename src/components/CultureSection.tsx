import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import coffeeImg from "@/assets/coffee-cermony.jpg";

const CultureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="culture" className="overflow-hidden bg-earth px-6 py-24 md:px-0 lg:py-32">
      <div className="mx-auto max-w-7xl md:px-12 lg:px-20">
        <div ref={ref} className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative overflow-hidden"
          >
            <img
              src={coffeeImg}
              alt="Traditional Ethiopian coffee ceremony"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-earth/50 to-transparent p-8">
              <p className="font-display text-sm italic text-primary-foreground/60">
                The coffee ceremony — three cups, three blessings
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Culture
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight text-primary-foreground md:text-5xl">
              Three thousand years of
              <span className="italic"> unbroken </span>
              civilization
            </h2>
            <div className="mt-4 h-px w-20 bg-gold" />
            <p className="mt-8 font-body text-base leading-relaxed text-primary-foreground/70">
              Ethiopia is the only African nation never colonized. Its calendar has
              13 months. Its mosques and churches are among the oldest on Earth. Its coffee
              ceremony is a meditation. Its music uses scales found nowhere else on
              Earth.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-primary-foreground/70">
              This is not tourism. This is a journey to the source.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { number: "13", label: "Months of Sunshine" },
                { number: "80+", label: "Ethnic Groups" },
                { number: "9", label: "UNESCO Sites" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-bold text-gold">{stat.number}</p>
                  <p className="mt-1 font-body text-xs uppercase tracking-wider text-primary-foreground/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;

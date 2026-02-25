import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Shield } from "lucide-react";
import {
  getFeaturedWildlife,
  conservationStatusLabels,
  conservationStatusColors,
} from "@/data/wildlife";

const WildlifeTeaser = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const featured = getFeaturedWildlife();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-earth px-6 py-24 md:px-12 lg:px-20 lg:py-32"
    >
      <div className="Ethiopian-pattern absolute inset-0 opacity-10" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Wildlife
            </p>
            <h2 className="max-w-lg font-display text-4xl font-bold text-white md:text-5xl">
              Endemic species found{" "}
              <span className="italic">nowhere else</span>
            </h2>
          </div>
          <Link
            to="/wildlife"
            className="group flex items-center gap-2 font-body text-sm font-semibold uppercase tracking-widest text-gold transition-colors hover:text-gold-light"
          >
            Explore Wildlife
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible">
          {featured.map((species, i) => (
            <motion.div
              key={species.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="min-w-[280px] flex-shrink-0 md:min-w-0"
            >
              <Link to="/wildlife" className="group block">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={species.image}
                    alt={species.name}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="mb-3">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2 py-0.5 font-body text-[9px] font-bold uppercase tracking-wider text-white ${
                          conservationStatusColors[species.conservationStatus]
                        }`}
                      >
                        <Shield className="h-3 w-3" />
                        {conservationStatusLabels[species.conservationStatus]}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      {species.name}
                    </h3>
                    <p className="mt-1 font-body text-xs italic text-white/60">
                      {species.scientificName}
                    </p>
                    <p className="mt-2 font-body text-xs text-white/50">
                      {species.location}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WildlifeTeaser;

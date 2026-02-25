import { Link } from "react-router-dom";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { destinations } from "@/data/destinations";

const highlighted = destinations.filter((d) =>
  ["nejashi-mosque", "aba-jifar-palace", "harar"].includes(d.slug)
);

const HeritageHighlights = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-15%"]);

  return (
    <section
      ref={containerRef}
      className="overflow-hidden bg-background py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Hidden Gems
            </p>
            <h2 className="max-w-lg font-display text-4xl font-bold text-foreground md:text-5xl">
              Beyond the{" "}
              <span className="italic">historic route</span>
            </h2>
          </div>
          <Link
            to="/destinations"
            className="group flex items-center gap-2 font-body text-sm font-semibold uppercase tracking-widest text-gold transition-colors hover:text-gold-light"
          >
            All Destinations
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <motion.div style={{ x }} className="flex gap-5 pl-6 md:pl-12 lg:pl-20">
        {highlighted.map((dest) => (
          <Link
            key={dest.slug}
            to={`/destinations/${dest.slug}`}
            className="group relative block h-[70vh] min-h-[500px] w-[75vw] flex-shrink-0 overflow-hidden md:w-[45vw] lg:w-[35vw]"
          >
            <img
              src={dest.heroImage}
              alt={dest.name}
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-earth/90 via-earth/20 to-transparent transition-opacity duration-500" />

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
              <span className="mb-3 inline-block bg-gold/90 px-3 py-1 font-body text-[9px] font-bold uppercase tracking-widest text-earth">
                {dest.category}
              </span>
              <h3 className="font-display text-3xl font-bold text-white md:text-4xl">
                {dest.name}
              </h3>
              <p className="mt-1 font-display text-base italic text-gold/70">
                {dest.tagline}
              </p>
              <p className="mt-3 max-w-sm font-body text-sm leading-relaxed text-white/60">
                {dest.description[0].slice(0, 140)}...
              </p>
              <div className="mt-5 flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-gold opacity-0 transition-all duration-500 group-hover:opacity-100">
                Discover
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
};

export default HeritageHighlights;

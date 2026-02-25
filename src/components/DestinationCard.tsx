import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Destination } from "@/data/destinations";

interface DestinationCardProps {
  destination: Destination;
  index?: number;
  size?: "default" | "large";
}

const DestinationCard = ({
  destination,
  index = 0,
  size = "default",
}: DestinationCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <Link
        to={`/destinations/${destination.slug}`}
        className={`group relative block cursor-pointer overflow-hidden ${
          size === "large" ? "aspect-[4/5]" : "aspect-[3/4]"
        }`}
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={destination.heroImage}
            alt={destination.name}
            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
            loading="lazy"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-earth via-earth/30 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

        <div className="absolute right-4 top-4 overflow-hidden">
          <motion.span
            initial={{ y: 30 }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            className="block bg-gold/90 px-3 py-1 font-body text-[9px] font-bold uppercase tracking-widest text-accent-foreground"
          >
            {destination.category}
          </motion.span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="mb-4 h-px w-0 bg-gold transition-all duration-700 group-hover:w-full" />

          <h3 className="font-display text-2xl font-bold text-white md:text-3xl">
            {destination.name}
          </h3>
          <p className="mt-1 font-display text-sm italic text-gold/70">
            {destination.tagline}
          </p>
          <p className="mt-1 font-body text-xs text-white/50">
            {destination.region}
          </p>

          <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-white/60 opacity-0 transition-all duration-500 group-hover:opacity-100">
            {destination.description[0].slice(0, 120)}...
          </p>

          <div className="mt-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-gold">
              Explore
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default DestinationCard;

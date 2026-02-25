import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import DestinationCard from "@/components/DestinationCard";
import { destinations } from "@/data/destinations";

const DestinationsSection = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="destinations"
      className="bg-section-warm px-6 py-24 md:px-12 lg:px-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Destinations
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              A land that{" "}
              <span className="italic">demands</span> to be witnessed
            </h2>
          </div>
          <div className="flex items-center gap-8">
            <motion.div
              initial={{ width: 0 }}
              animate={headerInView ? { width: 120 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden h-px bg-gold md:block"
            />
            <Link
              to="/destinations"
              className="group flex items-center gap-2 font-body text-sm font-semibold uppercase tracking-widest text-gold transition-colors hover:text-gold-light"
            >
              View All
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.slice(0, 6).map((dest, i) => (
            <DestinationCard key={dest.slug} destination={dest} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;

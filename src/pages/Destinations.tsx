import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import DestinationCard from "@/components/DestinationCard";
import ScrollReveal from "@/components/ScrollReveal";
import FooterSection from "@/components/FooterSection";
import PageTransition from "@/components/PageTransition";
import { destinations, type Destination } from "@/data/destinations";

type FilterCategory = "all" | Destination["category"];

const filters: { label: string; value: FilterCategory }[] = [
  { label: "All", value: "all" },
  { label: "Heritage", value: "heritage" },
  { label: "Nature", value: "nature" },
  { label: "Sacred Sites", value: "sacred" },
];

const Destinations = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered =
    activeFilter === "all"
      ? destinations
      : destinations.filter((d) => d.category === activeFilter);

  return (
    <PageTransition>
      <main className="overflow-x-hidden bg-background">
        <Navbar />

        {/* Hero Banner */}
        <section className="relative flex h-[60vh] min-h-[400px] items-end overflow-hidden bg-earth">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${destinations[0].heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(
                to bottom,
                hsla(20, 10%, 5%, 0.5) 0%,
                hsla(20, 10%, 5%, 0.3) 40%,
                hsla(20, 10%, 5%, 0.85) 80%,
                hsla(20, 10%, 5%, 1) 100%
              )`,
            }}
          />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 md:px-12 lg:px-20">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-6 h-px bg-gold"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.4em] text-gold"
            >
              Explore Ethiopia
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="max-w-3xl font-display text-4xl font-bold text-white md:text-6xl lg:text-7xl"
            >
              Discover Ethiopia's{" "}
              <span className="italic">Treasures</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-4 max-w-xl font-body text-base text-white/60 md:text-lg"
            >
              From ancient rock-hewn churches to cloud forests teeming with
              endemic wildlife — every corner tells a story three millennia in
              the making.
            </motion.p>
          </div>
        </section>

        {/* Filter + Grid */}
        <section className="px-6 py-16 md:px-12 lg:px-20 lg:py-24">
          <div className="mx-auto max-w-7xl">
            {/* Filter tabs */}
            <ScrollReveal>
              <div className="mb-14 flex flex-wrap gap-3">
                {filters.map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setActiveFilter(filter.value)}
                    className={`border px-6 py-2.5 font-body text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                      activeFilter === filter.value
                        ? "border-gold bg-gold text-earth"
                        : "border-border text-muted-foreground hover:border-gold/50 hover:text-gold"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </ScrollReveal>

            {/* Staggered grid */}
            <motion.div
              layout
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((dest, i) => (
                <motion.div
                  key={dest.slug}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className={i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}
                >
                  <DestinationCard
                    destination={dest}
                    index={i}
                    size={i === 0 ? "large" : "default"}
                  />
                </motion.div>
              ))}
            </motion.div>

            {filtered.length === 0 && (
              <div className="py-24 text-center">
                <p className="font-body text-lg text-muted-foreground">
                  No destinations found in this category.
                </p>
              </div>
            )}
          </div>
        </section>

        <FooterSection />
      </main>
    </PageTransition>
  );
};

export default Destinations;

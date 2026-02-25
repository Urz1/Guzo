import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import FooterSection from "@/components/FooterSection";
import PageTransition from "@/components/PageTransition";
import {
  wildlife,
  getFeaturedWildlife,
  conservationStatusLabels,
  conservationStatusColors,
  wildlifeStats,
  type WildlifeSpecies,
} from "@/data/wildlife";

type FilterCategory = "all" | WildlifeSpecies["category"];

const categoryFilters: { label: string; value: FilterCategory }[] = [
  { label: "All Species", value: "all" },
  { label: "Mammals", value: "mammal" },
  { label: "Birds", value: "bird" },
  { label: "Reptiles & Amphibians", value: "amphibian" },
  { label: "Flora", value: "flora" },
];

const Wildlife = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const featured = getFeaturedWildlife();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered =
    activeFilter === "all"
      ? wildlife
      : wildlife.filter((w) => w.category === activeFilter);

  return (
    <PageTransition>
      <main className="overflow-x-hidden bg-background">
        <Navbar />

        {/* Hero */}
        <section className="relative flex h-[70vh] min-h-[500px] items-end overflow-hidden bg-earth">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${featured[0]?.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(
                to bottom,
                hsla(20, 10%, 5%, 0.4) 0%,
                hsla(20, 10%, 5%, 0.2) 30%,
                hsla(20, 10%, 5%, 0.8) 75%,
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
              Endemic & Indigenous
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="max-w-4xl font-display text-4xl font-bold text-white md:text-6xl lg:text-7xl"
            >
              Ethiopia's Living{" "}
              <span className="italic">Treasures</span>
            </motion.h1>

            {/* Stat ribbon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-10 flex flex-wrap gap-8 md:gap-12"
            >
              {[
                { value: wildlifeStats.mammalSpecies, label: "Mammal Species" },
                { value: wildlifeStats.birdSpecies, label: "Bird Species" },
                {
                  value: wildlifeStats.endemicMammals,
                  label: "Endemic Mammals",
                },
                { value: wildlifeStats.endemicBirds, label: "Endemic Birds" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-bold text-gold md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="font-body text-xs uppercase tracking-wider text-white/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Endemic Highlights */}
        <section className="px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Flagship Species
              </p>
              <h2 className="mb-16 font-display text-3xl font-bold text-foreground md:text-5xl">
                Icons of the Highlands
              </h2>
            </ScrollReveal>

            <div className="space-y-20">
              {featured.map((species, i) => (
                <ScrollReveal key={species.id}>
                  <div
                    className={`grid items-center gap-10 lg:grid-cols-2 ${
                      i % 2 === 1 ? "lg:direction-rtl" : ""
                    }`}
                  >
                    <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={species.image}
                          alt={species.name}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute bottom-4 left-4">
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-wider text-white ${
                              conservationStatusColors[
                                species.conservationStatus
                              ]
                            }`}
                          >
                            <Shield className="h-3 w-3" />
                            {
                              conservationStatusLabels[
                                species.conservationStatus
                              ]
                            }
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                      <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                        {species.category}
                      </p>
                      <h3 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                        {species.name}
                      </h3>
                      <p className="mt-1 font-body text-sm italic text-muted-foreground">
                        {species.scientificName}
                      </p>
                      <p className="mt-6 font-body text-base leading-relaxed text-muted-foreground">
                        {species.description}
                      </p>
                      <p className="mt-4 flex items-center gap-2 font-body text-sm text-gold">
                        <span className="h-1 w-1 rounded-full bg-gold" />
                        {species.location}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Species Grid */}
        <section className="bg-section-warm px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Field Guide
              </p>
              <h2 className="mb-12 font-display text-3xl font-bold text-foreground md:text-4xl">
                All Species
              </h2>
            </ScrollReveal>

            {/* Category filters */}
            <ScrollReveal>
              <div className="mb-12 flex flex-wrap gap-3">
                {categoryFilters.map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setActiveFilter(filter.value)}
                    className={`border px-5 py-2 font-body text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
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

            <motion.div
              layout
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {filtered.map((species, i) => (
                <motion.div
                  key={species.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group overflow-hidden border border-border bg-background transition-all duration-500 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={species.image}
                      alt={species.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute bottom-3 left-3">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 font-body text-[9px] font-bold uppercase tracking-wider text-white ${
                          conservationStatusColors[species.conservationStatus]
                        }`}
                      >
                        {conservationStatusLabels[species.conservationStatus]}
                      </span>
                    </div>
                    <div className="absolute right-3 top-3">
                      <span className="bg-earth/80 px-2 py-0.5 font-body text-[9px] font-bold uppercase tracking-wider text-white/80 backdrop-blur-sm">
                        {species.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {species.name}
                    </h3>
                    <p className="mt-0.5 font-body text-xs italic text-muted-foreground">
                      {species.scientificName}
                    </p>
                    <p className="mt-3 line-clamp-3 font-body text-sm leading-relaxed text-muted-foreground">
                      {species.description}
                    </p>
                    <p className="mt-3 flex items-center gap-1.5 font-body text-xs text-gold/70">
                      <span className="h-1 w-1 rounded-full bg-gold/50" />
                      {species.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Conservation CTA */}
        <section className="relative overflow-hidden bg-earth px-6 py-24 md:px-12 lg:px-20">
          <div className="Ethiopian-pattern absolute inset-0 opacity-20" />
          <ScrollReveal>
            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <Shield className="mx-auto mb-6 h-10 w-10 text-gold/60" />
              <h2 className="mb-6 font-display text-3xl font-bold text-white md:text-5xl">
                Protecting Ethiopia's Biodiversity
              </h2>
              <p className="mb-10 font-body text-base leading-relaxed text-white/60 md:text-lg">
                Ethiopia is one of the world's top 25 biodiversity hotspots.
                Many of these species exist nowhere else on Earth. Through
                responsible tourism and community-based conservation, every visit
                contributes to their survival.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  to="/destinations/bale-mountains"
                  className="group inline-flex items-center gap-3 bg-gold px-10 py-4 font-body text-sm font-semibold uppercase tracking-widest text-earth transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
                >
                  Visit Bale Mountains
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/destinations"
                  className="inline-flex items-center gap-3 border border-white/20 px-10 py-4 font-body text-sm font-semibold uppercase tracking-widest text-white/80 transition-all duration-300 hover:border-gold hover:text-gold"
                >
                  Explore Destinations
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <FooterSection />
      </main>
    </PageTransition>
  );
};

export default Wildlife;

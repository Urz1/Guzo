import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Shield, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import FooterSection from "@/components/FooterSection";
import PageTransition from "@/components/PageTransition";
import {
  festivals,
  traditionLabels,
  traditionColors,
  type FestivalTradition,
} from "@/data/festivals";

type FilterValue = "all" | FestivalTradition;

const filters: { label: string; value: FilterValue }[] = [
  { label: "All Festivals", value: "all" },
  { label: "Traditional", value: "traditional" },
  { label: "National", value: "national" },
  { label: "Orthodox Christian", value: "orthodox" },
  { label: "Islamic", value: "islamic" },
];

const Festivals = () => {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered =
    activeFilter === "all"
      ? festivals
      : festivals.filter((f) => f.tradition === activeFilter);

  return (
    <PageTransition>
      <main className="overflow-x-hidden bg-background">
        <Navbar />

        {/* Hero */}
        <section className="relative bg-earth px-6 pb-16 pt-32 md:px-12 lg:px-20 lg:pt-40">
          <div className="Ethiopian-pattern absolute inset-0 opacity-20" />
          <div className="relative z-10 mx-auto max-w-7xl">
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
              Living Traditions
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="max-w-4xl font-display text-4xl font-bold text-white md:text-6xl lg:text-7xl"
            >
              Ethiopia's Festival{" "}
              <span className="italic">Calendar</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-4 max-w-xl font-body text-base text-white/60 md:text-lg"
            >
              From Oromo thanksgiving at sacred lakes to Sufi chanting in
              ancient walled cities — plan your journey around these
              extraordinary moments.
            </motion.p>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="mt-10 flex flex-wrap gap-8"
            >
              {[
                { value: "7", label: "Major Festivals" },
                { value: "4", label: "Faith Traditions" },
                { value: "3", label: "UNESCO Inscribed" },
                { value: "12", label: "Months of Celebration" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-bold text-gold">
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

        {/* Filters + Festival list */}
        <section className="px-6 py-16 md:px-12 lg:px-20 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <div className="mb-12 flex flex-wrap gap-3">
                {filters.map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => {
                      setActiveFilter(filter.value);
                      setExpandedId(null);
                    }}
                    className={`border px-5 py-2.5 font-body text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
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

            <div className="space-y-6">
              <AnimatePresence mode="popLayout">
                {filtered.map((festival, i) => {
                  const isExpanded = expandedId === festival.id;

                  return (
                    <motion.div
                      key={festival.id}
                      layout
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="overflow-hidden border border-border bg-card transition-all duration-300 hover:border-gold/30"
                    >
                      <div
                        className="grid cursor-pointer gap-0 md:grid-cols-3"
                        onClick={() =>
                          setExpandedId(isExpanded ? null : festival.id)
                        }
                      >
                        {/* Image */}
                        <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto">
                          <img
                            src={festival.image}
                            alt={festival.name}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute left-4 top-4 flex gap-2">
                            <span
                              className={`inline-block px-2.5 py-1 font-body text-[9px] font-bold uppercase tracking-widest text-white ${
                                traditionColors[festival.tradition]
                              }`}
                            >
                              {traditionLabels[festival.tradition]}
                            </span>
                            {festival.unescoStatus && (
                              <span className="inline-block bg-gold/90 px-2 py-1 font-body text-[9px] font-bold uppercase tracking-wider text-earth">
                                UNESCO
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col justify-center p-6 md:col-span-2 md:p-8">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                                {festival.name}
                                <span className="ml-3 font-display text-lg font-normal text-gold/50">
                                  {festival.amharicName}
                                </span>
                              </h3>
                              <p className="mt-1 font-display text-sm italic text-gold/70">
                                {festival.tagline}
                              </p>
                            </div>
                            <button className="mt-1 shrink-0 text-gold/50 transition-colors hover:text-gold">
                              {isExpanded ? (
                                <ChevronUp className="h-5 w-5" />
                              ) : (
                                <ChevronDown className="h-5 w-5" />
                              )}
                            </button>
                          </div>

                          <div className="mt-4 flex flex-wrap items-center gap-4 text-muted-foreground">
                            <span className="flex items-center gap-1.5 font-body text-xs">
                              <Calendar className="h-3.5 w-3.5 text-gold/60" />
                              {festival.month}
                            </span>
                            <span className="flex items-center gap-1.5 font-body text-xs">
                              <MapPin className="h-3.5 w-3.5 text-gold/60" />
                              {festival.location}
                            </span>
                          </div>

                          <p className="mt-4 line-clamp-2 font-body text-sm leading-relaxed text-muted-foreground">
                            {festival.description}
                          </p>
                        </div>
                      </div>

                      {/* Expanded details */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="border-t border-border px-6 py-8 md:px-8">
                              <div className="grid gap-8 md:grid-cols-2">
                                <div>
                                  <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                                    About This Festival
                                  </p>
                                  <p className="font-body text-sm leading-relaxed text-muted-foreground">
                                    {festival.description}
                                  </p>
                                </div>
                                <div>
                                  <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                                    What to Expect
                                  </p>
                                  <ul className="space-y-3">
                                    {festival.highlights.map((h, j) => (
                                      <li
                                        key={j}
                                        className="flex items-start gap-2 font-body text-sm text-muted-foreground"
                                      >
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                                        {h}
                                      </li>
                                    ))}
                                  </ul>
                                  {festival.unescoStatus && (
                                    <div className="mt-6 flex items-center gap-2 border-t border-border pt-4">
                                      <Shield className="h-4 w-4 text-gold" />
                                      <p className="font-body text-xs text-gold/70">
                                        {festival.unescoStatus}
                                      </p>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {filtered.length === 0 && (
              <div className="py-24 text-center">
                <p className="font-body text-lg text-muted-foreground">
                  No festivals found in this category.
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

export default Festivals;

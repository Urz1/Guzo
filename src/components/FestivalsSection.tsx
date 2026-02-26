import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Calendar, MapPin, ChevronRight, ChevronLeft } from "lucide-react";
import {
  festivals,
  traditionLabels,
  traditionColors,
  type FestivalTradition,
} from "@/data/festivals";

const traditions: { label: string; value: "all" | FestivalTradition }[] = [
  { label: "All Festivals", value: "all" },
  { label: "Traditional", value: "traditional" },
  { label: "National", value: "national" },
  { label: "Orthodox", value: "orthodox" },
  { label: "Islamic", value: "islamic" },
];

const FestivalsSection = () => {
  const [activeFilter, setActiveFilter] = useState<
    "all" | FestivalTradition
  >("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" });

  const filtered =
    activeFilter === "all"
      ? festivals
      : festivals.filter((f) => f.tradition === activeFilter);

  return (
    <section className="bg-background px-6 py-24 md:px-12 lg:px-20 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Living Traditions
          </p>
          <h2 className="max-w-2xl font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Festivals that set the{" "}
            <span className="italic">soul on fire</span>
          </h2>
          <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-muted-foreground">
            Ethiopia celebrates across faiths and traditions — from Oromo
            thanksgiving at sacred lakes to Sufi chanting in ancient walled
            cities. Plan your journey around these extraordinary moments.
          </p>
        </motion.div>

        {/* Tradition filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-14 flex flex-wrap gap-3"
        >
          {traditions.map((t) => (
            <button
              key={t.value}
              onClick={() => {
                setActiveFilter(t.value);
                setExpandedId(null);
              }}
              className={`border px-5 py-2 font-body text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                activeFilter === t.value
                  ? "border-gold bg-gold text-earth"
                  : "border-border text-muted-foreground hover:border-gold/50 hover:text-gold"
              }`}
            >
              {t.label}
            </button>
          ))}
        </motion.div>

        {/* Festival grid */}
        <motion.div
          ref={gridRef}
          layout
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((festival, i) => {
              const isExpanded = expandedId === festival.id;

              return (
                <motion.div
                  key={festival.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: gridInView ? i * 0.06 : 0 }}
                  className={`group cursor-pointer overflow-hidden border border-border bg-card transition-all duration-500 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5 ${
                    isExpanded
                      ? "sm:col-span-2 lg:col-span-2"
                      : ""
                  }`}
                  onClick={() =>
                    setExpandedId(isExpanded ? null : festival.id)
                  }
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={festival.image}
                      alt={festival.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-earth/80 via-earth/20 to-transparent" />

                    {/* Tradition badge */}
                    <div className="absolute left-4 top-4">
                      <span
                        className={`inline-block px-2.5 py-1 font-body text-[9px] font-bold uppercase tracking-widest text-white ${
                          traditionColors[festival.tradition]
                        }`}
                      >
                        {traditionLabels[festival.tradition]}
                      </span>
                    </div>

                    {/* UNESCO badge */}
                    {festival.unescoStatus && (
                      <div className="absolute right-4 top-4">
                        <span className="inline-block bg-gold/90 px-2 py-0.5 font-body text-[8px] font-bold uppercase tracking-wider text-earth">
                          UNESCO
                        </span>
                      </div>
                    )}

                    {/* Name overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                        {festival.name}
                      </h3>
                      <p className="mt-0.5 font-display text-sm italic text-gold/70">
                        {festival.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="mb-3 flex flex-wrap items-center gap-4 text-muted-foreground">
                      <span className="flex items-center gap-1.5 font-body text-xs">
                        <Calendar className="h-3.5 w-3.5 text-gold/60" />
                        {festival.month}
                      </span>
                      <span className="flex items-center gap-1.5 font-body text-xs">
                        <MapPin className="h-3.5 w-3.5 text-gold/60" />
                        {festival.location}
                      </span>
                    </div>

                    <AnimatePresence mode="wait">
                      {isExpanded ? (
                        <motion.div
                          key="expanded"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="mb-4 font-body text-sm leading-relaxed text-muted-foreground">
                            {festival.description}
                          </p>

                          <ul className="space-y-2">
                            {festival.highlights.map((h, j) => (
                              <li
                                key={j}
                                className="flex items-start gap-2 font-body text-xs text-foreground/70"
                              >
                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                                {h}
                              </li>
                            ))}
                          </ul>

                          {festival.unescoStatus && (
                            <p className="mt-4 border-t border-border pt-3 font-body text-[10px] uppercase tracking-wider text-gold/70">
                              {festival.unescoStatus}
                            </p>
                          )}

                          <button className="mt-4 flex items-center gap-1 font-body text-xs font-semibold uppercase tracking-widest text-gold transition-colors hover:text-gold-light">
                            <ChevronLeft className="h-3 w-3" />
                            Collapse
                          </button>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="collapsed"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="line-clamp-2 font-body text-sm leading-relaxed text-muted-foreground">
                            {festival.description}
                          </p>
                          <span className="mt-3 flex items-center gap-1 font-body text-xs font-semibold uppercase tracking-widest text-gold transition-colors group-hover:text-gold-light">
                            Read more
                            <ChevronRight className="h-3 w-3" />
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default FestivalsSection;

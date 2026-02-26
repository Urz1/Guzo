import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  MapPin,
  Calendar,
  Mountain,
  Award,
  ChevronDown,
  Compass,
  Backpack,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import ImageLightbox from "@/components/ImageLightbox";
import DestinationCard from "@/components/DestinationCard";
import FooterSection from "@/components/FooterSection";
import PageTransition from "@/components/PageTransition";
import {
  getDestinationBySlug,
  getRelatedDestinations,
} from "@/data/destinations";

const factIcons: Record<string, React.ReactNode> = {
  "UNESCO Status": <Award className="h-4 w-4" />,
  "Heritage Status": <Award className="h-4 w-4" />,
  "Park Status": <Award className="h-4 w-4" />,
  Altitude: <Mountain className="h-4 w-4" />,
  "Highest Peak": <Mountain className="h-4 w-4" />,
  "Best Season": <Calendar className="h-4 w-4" />,
};

const DestinationDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const destination = getDestinationBySlug(slug || "");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!destination) {
      navigate("/destinations", { replace: true });
    }
  }, [slug, destination, navigate]);

  if (!destination) {
    return null;
  }

  const related = getRelatedDestinations(destination.slug, 3);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <PageTransition>
      <main className="overflow-x-hidden bg-background">
        <Navbar />

        {/* HERO */}
        <section className="relative h-screen w-full overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{ scale: heroScale, y: heroY }}
          >
            <img
              src={destination.heroImage}
              alt={destination.name}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </motion.div>

          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(
                to bottom,
                hsla(20, 10%, 5%, 0.4) 0%,
                hsla(20, 10%, 5%, 0.15) 40%,
                hsla(20, 10%, 5%, 0.7) 80%,
                hsla(20, 10%, 5%, 0.98) 100%
              )`,
            }}
          />

          <motion.div
            style={{ opacity: heroOpacity }}
            className="relative z-10 flex h-full flex-col items-center justify-end pb-32 px-6 text-center"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mb-6 h-px bg-gold"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.4em] text-gold"
            >
              {destination.region}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="font-display text-5xl font-bold text-white md:text-7xl lg:text-8xl"
            >
              {destination.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="mt-2 font-display text-xl italic text-gold/80 md:text-2xl"
            >
              {destination.tagline}
            </motion.p>

            {/* Facts ribbon */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-10"
            >
              {destination.facts.map((fact) => (
                <div key={fact.label} className="flex items-center gap-2 text-white/60">
                  <span className="text-gold/70">
                    {factIcons[fact.label] || <MapPin className="h-4 w-4" />}
                  </span>
                  <div className="text-left">
                    <p className="font-body text-[10px] uppercase tracking-wider text-white/40">
                      {fact.label}
                    </p>
                    <p className="font-body text-sm font-semibold text-white/80">
                      {fact.value}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="h-6 w-6 text-gold/50" />
            </motion.div>
          </motion.div>
        </section>

        {/* NARRATIVE INTRO */}
        <section className="px-6 py-24 md:px-12 lg:px-20 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
            <ScrollReveal direction="left">
              <div className="flex flex-col justify-center">
                <span className="mb-2 font-display text-6xl font-light text-gold/20 md:text-8xl">
                  {destination.amharicName}
                </span>
                <blockquote className="border-l-2 border-gold/40 pl-6 font-display text-2xl italic leading-relaxed text-foreground/80 md:text-3xl">
                  {destination.description[0].split(".").slice(0, 2).join(".")}.
                </blockquote>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="flex flex-col justify-center gap-6">
                {destination.description.map((para, i) => (
                  <p
                    key={i}
                    className="font-body text-base leading-relaxed text-muted-foreground md:text-lg"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* PHOTO GALLERY */}
        <section className="px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Gallery
              </p>
              <h2 className="mb-12 font-display text-3xl font-bold text-foreground md:text-4xl">
                Visual Journey
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
              {destination.galleryImages.map((img, i) => {
                const isLarge = i === 0 || i === 3;
                return (
                  <ScrollReveal
                    key={i}
                    delay={i * 0.08}
                    className={`${
                      isLarge ? "col-span-2 row-span-2 md:col-span-1" : ""
                    }`}
                  >
                    <button
                      onClick={() => openLightbox(i)}
                      className={`group relative block w-full overflow-hidden ${
                        isLarge ? "aspect-[4/5]" : "aspect-square"
                      }`}
                    >
                      <img
                        src={img.url}
                        alt={img.caption}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="font-body text-sm text-white">
                          {img.caption}
                        </p>
                      </div>
                    </button>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHAT TO SEE */}
        <section className="bg-section-warm px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Highlights
              </p>
              <h2 className="mb-16 font-display text-3xl font-bold text-foreground md:text-4xl">
                What to See
              </h2>
            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-2">
              {destination.highlights.map((highlight, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="group border border-border bg-background p-8 transition-all duration-500 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center bg-gold/10 text-gold transition-transform duration-500 group-hover:scale-110">
                      <Compass className="h-5 w-5" />
                    </div>
                    <h3 className="mb-3 font-display text-xl font-bold text-foreground">
                      {highlight.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* PRACTICAL INFO */}
        <section className="px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Plan Your Visit
              </p>
              <h2 className="mb-16 font-display text-3xl font-bold text-foreground md:text-4xl">
                Practical Information
              </h2>
            </ScrollReveal>

            <div className="grid gap-8 md:grid-cols-3">
              <ScrollReveal delay={0}>
                <div className="border-t-2 border-gold/30 pt-6">
                  <div className="mb-4 flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-gold" />
                    <h3 className="font-display text-lg font-bold text-foreground">
                      Best Time to Visit
                    </h3>
                  </div>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground">
                    {destination.bestTimeToVisit}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="border-t-2 border-gold/30 pt-6">
                  <div className="mb-4 flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-gold" />
                    <h3 className="font-display text-lg font-bold text-foreground">
                      Getting There
                    </h3>
                  </div>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground">
                    {destination.gettingThere}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="border-t-2 border-gold/30 pt-6">
                  <div className="mb-4 flex items-center gap-3">
                    <Backpack className="h-5 w-5 text-gold" />
                    <h3 className="font-display text-lg font-bold text-foreground">
                      What to Pack
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {destination.whatToPack.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 font-body text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* RELATED DESTINATIONS */}
        <section className="bg-section-warm px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <div className="mb-16 flex items-end justify-between">
                <div>
                  <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                    Continue Exploring
                  </p>
                  <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                    Continue Your Journey
                  </h2>
                </div>
                <Link
                  to="/destinations"
                  className="hidden items-center gap-2 font-body text-sm font-semibold text-gold transition-colors hover:text-gold-light md:flex"
                >
                  All Destinations
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((dest, i) => (
                <DestinationCard key={dest.slug} destination={dest} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-earth px-6 py-24 text-center md:px-12 lg:px-20">
          <div className="Ethiopian-pattern absolute inset-0 opacity-30" />
          <ScrollReveal>
            <div className="relative z-10 mx-auto max-w-2xl">
              <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.4em] text-gold">
                Begin Your Journey
              </p>
              <h2 className="mb-6 font-display text-3xl font-bold text-white md:text-5xl">
                Ready to explore {destination.name}?
              </h2>
              <p className="mb-10 font-body text-base text-white/60">
                Let us craft a personalized itinerary that brings{" "}
                {destination.name}'s wonders to life — at your pace, in your
                style.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 bg-gold px-10 py-4 font-body text-sm font-semibold uppercase tracking-widest text-earth transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
                >
                  Start Planning
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/destinations"
                  className="inline-flex items-center gap-3 border border-white/20 px-10 py-4 font-body text-sm font-semibold uppercase tracking-widest text-white/80 transition-all duration-300 hover:border-gold hover:text-gold"
                >
                  More Destinations
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <FooterSection />

        <ImageLightbox
          images={destination.galleryImages}
          currentIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setLightboxIndex}
        />
      </main>
    </PageTransition>
  );
};

export default DestinationDetail;

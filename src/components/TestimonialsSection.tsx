import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Ethiopia broke every assumption I had about Africa, about history, about what's possible. I've traveled to 60 countries. Nothing prepared me for this.",
    author: "Sarah Chen",
    location: "Hong Kong → Lalibela",
    rating: 5,
  },
  {
    quote:
      "The Simien Mountains made the Alps feel like a rehearsal. Standing at the edge of a 1,500-meter drop with gelada baboons at my feet — that's the moment travel becomes something else entirely.",
    author: "Marcus Lindström",
    location: "Stockholm → Simien Mountains",
    rating: 5,
  },
  {
    quote:
      "My grandmother's coffee ceremony, but experienced through my own eyes for the first time. GUZO didn't just plan a trip. They gave me my heritage back.",
    author: "Bethlehem Assefa",
    location: "Washington D.C. → Kaffa",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="bg-section-warm px-6 py-24 md:px-12 lg:px-20 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Voices
          </p>
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
            They came as <span className="italic">tourists</span>. They left as{" "}
            <span className="italic">witnesses.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="group relative border border-border bg-card p-8 transition-all duration-500 hover:border-gold/30 hover:shadow-xl"
            >
              {/* Gold accent corner */}
              <div className="absolute left-0 top-0 h-16 w-px bg-gold" />
              <div className="absolute left-0 top-0 h-px w-16 bg-gold" />

              <div className="mb-4 flex gap-1">
                {[...Array(t.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="h-3.5 w-3.5 fill-gold text-gold"
                  />
                ))}
              </div>

              <p className="font-body text-sm leading-relaxed text-foreground/80">
                "{t.quote}"
              </p>

              <div className="mt-8 border-t border-border pt-4">
                <p className="font-display text-sm font-bold text-foreground">
                  {t.author}
                </p>
                <p className="mt-1 font-body text-[11px] uppercase tracking-wider text-muted-foreground">
                  {t.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

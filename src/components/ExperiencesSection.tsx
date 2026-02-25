import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mountain, Coffee, Compass, Users } from "lucide-react";

const experiences = [
  {
    icon: Mountain,
    title: "Trek the Highlands",
    description:
      "Multi-day expeditions through the Simien and Bale Mountains with expert local guides. Sleep under stars at 4,000 meters.",
    duration: "3–14 days",
  },
  {
    icon: Coffee,
    title: "Coffee Origins",
    description:
      "Visit the birthplace of coffee in Kaffa. Roast beans over open flame. Learn the three-cup ceremony from the women who keep it alive.",
    duration: "Half day",
  },
  {
    icon: Compass,
    title: "Historic Route",
    description:
      "Lalibela, Gondar, Axum, Bahir Dar — trace the arc of Ethiopian civilization from the Queen of Sheba to the present.",
    duration: "7–10 days",
  },
  {
    icon: Users,
    title: "Community Stays",
    description:
      "Live with families in the Omo Valley, the Tigray Highlands, or the lake-shore villages of Hawassa. Real life, not performance.",
    duration: "2–5 days",
  },
];

const ExperiencesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experiences"
      className="Ethiopian-pattern bg-background px-6 py-24 md:px-12 lg:px-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Experiences
          </p>
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Not tours. <span className="italic">Transformations.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="group border border-border bg-card p-8 transition-all duration-500 hover:border-gold hover:shadow-lg"
              >
                <Icon className="mb-6 h-8 w-8 text-gold transition-transform duration-300 group-hover:scale-110" />
                <h3 className="mb-2 font-display text-xl font-bold text-foreground">
                  {exp.title}
                </h3>
                <p className="mb-6 font-body text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
                <div className="flex items-center gap-2 border-t border-border pt-4">
                  <span className="font-body text-[10px] font-semibold uppercase tracking-widest text-gold">
                    {exp.duration}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;

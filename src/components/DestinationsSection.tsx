import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import simienImg from "@/assets/simien-mountains.jpg";
import danakilImg from "@/assets/danakil.jpg";
import omovalleyImg from "@/assets/omo-valley.jpg";
import lalibelaImg from "@/assets/hero-lalibela.jpg";
import blueNileImg from "@/assets/blue-nile-falls.jpg";
import gondarImg from "@/assets/gondar-castle.jpg";

const destinations = [
  {
    name: "Lalibela",
    subtitle: "The New Jerusalem",
    description:
      "Eleven churches carved from living rock in the 12th century. A testament to faith that defies physics.",
    image: lalibelaImg,
    tag: "UNESCO Heritage",
  },
  {
    name: "Simien Mountains",
    subtitle: "The Roof of Africa",
    description:
      "Jagged peaks pierce the clouds at 4,550m. Gelada baboons patrol the cliff edge at dawn.",
    image: simienImg,
    tag: "Trekking",
  },
  {
    name: "Danakil Depression",
    subtitle: "The Hottest Place on Earth",
    description:
      "Acid pools glow neon. Salt flats stretch to infinity. The earth is still being born here.",
    image: danakilImg,
    tag: "Adventure",
  },
  {
    name: "Omo Valley",
    subtitle: "Living Heritage",
    description:
      "Cultures unchanged for millennia. Body art as language. Ceremony as daily life.",
    image: omovalleyImg,
    tag: "Culture",
  },
  {
    name: "Blue Nile Falls",
    subtitle: "Tis Abay — The Smoking Water",
    description:
      "Water thunder you feel in your chest. Rainbows form in the mist. The Nile begins its journey.",
    image: blueNileImg,
    tag: "Natural Wonder",
  },
  {
    name: "Gondar",
    subtitle: "The Camelot of Africa",
    description:
      "Medieval castles in the heart of Africa. A dynasty's ambition carved in stone and shadow.",
    image: gondarImg,
    tag: "History",
  },
];

const DestinationCard = ({
  destination,
  index,
}: {
  destination: (typeof destinations)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative cursor-pointer overflow-hidden"
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
          loading="lazy"
        />
        {/* Multi-layer gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-earth via-earth/30 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
      </div>

      {/* Tag */}
      <div className="absolute right-4 top-4 overflow-hidden">
        <motion.span
          initial={{ y: 30 }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          className="block bg-gold/90 px-3 py-1 font-body text-[9px] font-bold uppercase tracking-widest text-accent-foreground"
        >
          {destination.tag}
        </motion.span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        {/* Animated line */}
        <div className="mb-4 h-px w-0 bg-gold transition-all duration-700 group-hover:w-full" />

        <h3 className="font-display text-2xl font-bold text-primary-foreground md:text-3xl">
          {destination.name}
        </h3>
        <p className="mt-1 font-display text-sm italic text-gold/70">
          {destination.subtitle}
        </p>
        <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-primary-foreground/60 opacity-0 transition-all duration-500 group-hover:opacity-100">
          {destination.description}
        </p>

        <div className="mt-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-gold">
            Explore →
          </span>
        </div>
      </div>
    </motion.div>
  );
};

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
          <motion.div
            initial={{ width: 0 }}
            animate={headerInView ? { width: 120 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden h-px bg-gold md:block"
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest, i) => (
            <DestinationCard key={dest.name} destination={dest} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;

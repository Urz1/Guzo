import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import priestImg from "@/assets/lalibela-gallery-5.jpg";
import blueNileImg from "@/assets/blue-nile-falls.jpg";
import gondarImg from "@/assets/gondar-gallery-1.jpg";
import meskelImg from "@/assets/gallery-meskel.jpg";

const gallery = [
  { src: priestImg, alt: "Ethiopian Orthodox priest with golden cross", caption: "Keepers of Faith", span: "row-span-2" },
  { src: blueNileImg, alt: "Blue Nile Falls", caption: "Tis Abay — The Smoking Water", span: "" },
  { src: gondarImg, alt: "Gondar Castle at sunset", caption: "The Camelot of Africa", span: "" },
  { src: meskelImg, alt: "Meskel Festival bonfire", caption: "Meskel — Finding of the True Cross", span: "col-span-2" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="bg-earth px-6 py-24 md:px-12 lg:px-20 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Visual Stories
          </p>
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-tight text-primary-foreground md:text-5xl">
            Moments that <span className="italic">words cannot hold</span>
          </h2>
        </motion.div>

        <div className="grid auto-rows-[280px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, i) => (
            <motion.div
              key={item.alt}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * i }}
              className={`group relative cursor-pointer overflow-hidden ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-display text-lg font-bold text-primary-foreground">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

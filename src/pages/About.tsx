import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Globe, Users, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import FooterSection from "@/components/FooterSection";
import PageTransition from "@/components/PageTransition";

import highlandsImg from "@/assets/hero-highlands.jpg";
import coffeeImg from "@/assets/coffee-cermony.jpg";
import omoImg from "@/assets/omo-valley.jpg";

const values = [
  {
    icon: Heart,
    title: "Reverence, Not Exploitation",
    description:
      "Every itinerary is built on respect — for the land, its people, and their traditions. We don't sell culture as a commodity. We facilitate genuine encounters.",
  },
  {
    icon: Globe,
    title: "All of Ethiopia",
    description:
      "Ethiopia belongs to all its peoples — Orthodox, Muslim, traditional, and beyond. We showcase the full mosaic, not a single thread. No heritage is more or less worthy of celebration.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "We partner directly with local guides, families, and cooperatives. Tourism revenue stays in the communities that make the experiences possible.",
  },
  {
    icon: Shield,
    title: "Conservation Through Tourism",
    description:
      "From the Ethiopian Wolf to the Harenna Forest, every journey contributes to protecting the biodiversity that makes Ethiopia extraordinary.",
  },
];

const team = [
  {
    name: "Amara Tadesse",
    role: "Founder & CEO",
    bio: "Born in Addis Ababa, educated at Oxford. 15 years in sustainable tourism across East Africa. Founded GUZO to show the world the Ethiopia she grew up in.",
  },
  {
    name: "Dawit Bekele",
    role: "Head of Experiences",
    bio: "Former national park ranger turned experience designer. Knows every trail in the Simien and Bale Mountains by heart.",
  },
  {
    name: "Fatima Hassan",
    role: "Cultural Director",
    bio: "Harari-born historian specializing in Islamic heritage and interfaith traditions. Ensures every cultural encounter is authentic and respectful.",
  },
  {
    name: "Kebede Wolde",
    role: "Operations Director",
    bio: "Logistics expert with a decade of experience coordinating travel across Ethiopia's diverse terrain. Nothing is impossible.",
  },
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <main className="overflow-x-hidden bg-background">
        <Navbar />

        {/* Hero */}
        <section className="relative flex h-[60vh] min-h-[400px] items-end overflow-hidden bg-earth">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${highlandsImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center 40%",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, hsla(20,10%,5%,0.5) 0%, hsla(20,10%,5%,0.3) 40%, hsla(20,10%,5%,0.85) 80%, hsla(20,10%,5%,1) 100%)",
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
              Our Story
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="max-w-3xl font-display text-4xl font-bold text-white md:text-6xl lg:text-7xl"
            >
              Why <span className="italic">GUZO</span> exists
            </motion.h1>
          </div>
        </section>

        {/* Mission */}
        <section className="px-6 py-24 md:px-12 lg:px-20 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
            <ScrollReveal direction="left">
              <div>
                <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  The Mission
                </p>
                <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
                  Ethiopia deserves to be{" "}
                  <span className="italic">experienced</span>, not just visited
                </h2>
                <div className="mt-4 h-px w-20 bg-gold" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="flex flex-col justify-center gap-6">
                <p className="font-body text-base leading-relaxed text-muted-foreground md:text-lg">
                  GUZO was born from a simple frustration: the world's oldest
                  independent nation, home to 3,000 years of unbroken
                  civilization, 80+ languages, and landscapes that range from
                  the hottest place on Earth to glacial peaks — was being
                  represented by generic tour packages and stock photos.
                </p>
                <p className="font-body text-base leading-relaxed text-muted-foreground md:text-lg">
                  We set out to change that. GUZO (ጉዞ — "journey" in Amharic)
                  is a platform built by Ethiopians, for the world, to showcase
                  every dimension of this extraordinary country — its Orthodox
                  churches and Islamic mosques, its Oromo traditions and Sidama
                  festivals, its wolves and its coffee, its mountains and its
                  markets.
                </p>
                <p className="font-body text-base leading-relaxed text-muted-foreground md:text-lg">
                  No bias. No shortcuts. Just Ethiopia, in its full complexity
                  and beauty, made accessible to travelers who want more than a
                  surface-level visit.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Values */}
        <section className="bg-section-warm px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                What We Stand For
              </p>
              <h2 className="mb-16 font-display text-3xl font-bold text-foreground md:text-4xl">
                Our Values
              </h2>
            </ScrollReveal>

            <div className="grid gap-8 md:grid-cols-2">
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <ScrollReveal key={value.title} delay={i * 0.1}>
                    <div className="group border border-border bg-background p-8 transition-all duration-500 hover:border-gold/40 hover:shadow-lg">
                      <Icon className="mb-4 h-8 w-8 text-gold" />
                      <h3 className="mb-3 font-display text-xl font-bold text-foreground">
                        {value.title}
                      </h3>
                      <p className="font-body text-sm leading-relaxed text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Image break */}
        <section className="grid grid-cols-1 md:grid-cols-3">
          {[
            { src: coffeeImg, alt: "Ethiopian coffee ceremony" },
            { src: highlandsImg, alt: "Ethiopian highlands" },
            { src: omoImg, alt: "Omo Valley communities" },
          ].map((img) => (
            <div key={img.alt} className="aspect-[4/3] overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </section>

        {/* Team */}
        <section className="px-6 py-24 md:px-12 lg:px-20 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                The People
              </p>
              <h2 className="mb-16 font-display text-3xl font-bold text-foreground md:text-5xl">
                Built by Ethiopians, for the{" "}
                <span className="italic">world</span>
              </h2>
            </ScrollReveal>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member, i) => (
                <ScrollReveal key={member.name} delay={i * 0.1}>
                  <div className="border-t-2 border-gold/30 pt-6">
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {member.name}
                    </h3>
                    <p className="mt-1 font-body text-xs font-semibold uppercase tracking-wider text-gold">
                      {member.role}
                    </p>
                    <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-earth px-6 py-24 text-center md:px-12 lg:px-20">
          <div className="Ethiopian-pattern absolute inset-0 opacity-30" />
          <ScrollReveal>
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="mb-6 font-display text-3xl font-bold text-white md:text-5xl">
                Ready to see Ethiopia differently?
              </h2>
              <p className="mb-10 font-body text-base text-white/60">
                Tell us what moves you. We'll show you the Ethiopia that matches.
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-gold px-10 py-4 font-body text-sm font-semibold uppercase tracking-widest text-earth transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
              >
                Get In Touch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </section>

        <FooterSection />
      </main>
    </PageTransition>
  );
};

export default About;

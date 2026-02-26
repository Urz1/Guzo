import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import PageTransition from "@/components/PageTransition";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageTransition>
      <main className="overflow-x-hidden bg-background">
        <Navbar />

        <section className="relative flex min-h-screen items-center justify-center bg-earth px-6">
          <div className="Ethiopian-pattern absolute inset-0 opacity-20" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.08 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-display text-[12rem] font-bold leading-none text-white md:text-[20rem]"
            >
              404
            </motion.p>

            <div className="relative -mt-20 md:-mt-28">
              <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.4em] text-gold">
                Lost in the Highlands
              </p>
              <h1 className="font-display text-3xl font-bold text-white md:text-5xl">
                This path doesn't <span className="italic">exist</span>
              </h1>
              <p className="mx-auto mt-4 max-w-md font-body text-base text-white/50">
                The page you're looking for may have been moved or doesn't
                exist. Let us help you find your way.
              </p>

              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  to="/"
                  className="group inline-flex items-center gap-3 bg-gold px-10 py-4 font-body text-sm font-semibold uppercase tracking-widest text-earth transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
                >
                  <Home className="h-4 w-4" />
                  Back to Home
                </Link>
                <Link
                  to="/destinations"
                  className="inline-flex items-center gap-2 border border-white/20 px-10 py-4 font-body text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:border-gold hover:text-gold"
                >
                  Explore Destinations
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

        <FooterSection />
      </main>
    </PageTransition>
  );
};

export default NotFound;

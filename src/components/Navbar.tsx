import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { destinations } from "@/data/destinations";

const navLinks = [
  { label: "Destinations", href: "/destinations" },
  { label: "Wildlife", href: "/wildlife" },
  { label: "Experiences", href: "/#experiences" },
  { label: "Plan Your Journey", href: "/#plan" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navBg = scrolled || !isHome
    ? "bg-earth/95 backdrop-blur-md shadow-lg shadow-black/10"
    : "bg-transparent";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12 lg:px-20">
          <Link to="/" className="flex items-center gap-3">
            <span className="font-display text-2xl font-bold tracking-wider text-white">
              GUZO
            </span>
            <span className="font-display text-lg text-gold opacity-80">
              ጉዞ
            </span>
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`font-body text-sm font-medium tracking-wide transition-colors duration-300 hover:text-gold ${
                  location.pathname === link.href
                    ? "text-gold"
                    : "text-white/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="text-white md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-earth/98 backdrop-blur-lg"
          >
            <div className="flex h-full flex-col px-8 py-8">
              <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3">
                  <span className="font-display text-2xl font-bold tracking-wider text-white">
                    GUZO
                  </span>
                  <span className="font-display text-lg text-gold">ጉዞ</span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-white"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="mt-16 flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  >
                    <Link
                      to={link.href}
                      className="flex items-center justify-between border-b border-white/10 py-5 font-display text-2xl font-semibold text-white transition-colors hover:text-gold"
                    >
                      {link.label}
                      <ChevronRight className="h-5 w-5 text-gold/50" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-auto"
              >
                <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold/60">
                  Featured Destinations
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {destinations.slice(0, 4).map((dest, i) => (
                    <motion.div
                      key={dest.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + i * 0.05 }}
                    >
                      <Link
                        to={`/destinations/${dest.slug}`}
                        className="group relative block aspect-[4/3] overflow-hidden"
                      >
                        <img
                          src={dest.heroImage}
                          alt={dest.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <span className="absolute bottom-2 left-3 font-body text-xs font-semibold text-white">
                          {dest.name}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

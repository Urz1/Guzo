import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const FooterSection = () => {
  return (
    <footer className="border-t border-border bg-background px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block">
              <Logo variant="full" className="h-9 text-foreground" />
            </Link>
            <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
              The definitive platform for Ethiopian tourism. Making the
              extraordinary accessible.
            </p>
          </div>

          <div>
            <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Discover
            </p>
            <ul className="space-y-3">
              {[
                { label: "All Destinations", to: "/destinations" },
                { label: "Wildlife", to: "/wildlife" },
                { label: "Lalibela", to: "/destinations/lalibela" },
                { label: "Bale Mountains", to: "/destinations/bale-mountains" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Heritage
            </p>
            <ul className="space-y-3">
              {[
                { label: "Axum", to: "/destinations/axum" },
                { label: "Harar", to: "/destinations/harar" },
                { label: "Nejashi Mosque", to: "/destinations/nejashi-mosque" },
                { label: "Aba Jifar Palace", to: "/destinations/aba-jifar-palace" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Connect
            </p>
            <ul className="space-y-3">
              {[
                { label: "About GUZO", to: "/about" },
                { label: "Festivals", to: "/festivals" },
                { label: "Plan Your Journey", to: "/contact" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="font-body text-xs text-muted-foreground">
            &copy; 2026 GUZO. Crafted with reverence for Ethiopia.
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Addis Ababa &middot; Lalibela &middot; London &middot; Nairobi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

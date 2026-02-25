const FooterSection = () => {
  return (
    <footer className="border-t border-border bg-background px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <span className="font-display text-2xl font-bold tracking-wider text-foreground">
              GUZO
            </span>
            <span className="ml-2 font-display text-lg text-gold">ጉዞ</span>
            <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
              The definitive platform for Ethiopian tourism. Making the
              extraordinary accessible.
            </p>
          </div>

          {[
            {
              title: "Discover",
              links: ["Destinations", "Experiences", "Culture", "Festivals"],
            },
            {
              title: "Plan",
              links: ["Custom Journeys", "Group Tours", "Local Guides", "Travel Info"],
            },
            {
              title: "Connect",
              links: ["About GUZO", "For Operators", "Press", "Contact"],
            },
          ].map((col) => (
            <div key={col.title}>
              <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-muted-foreground transition-colors hover:text-gold"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="font-body text-xs text-muted-foreground">
            © 2026 GUZO. Crafted with reverence for Ethiopia.
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Addis Ababa · Lalibela · London · Nairobi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

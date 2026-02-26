import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import FooterSection from "@/components/FooterSection";
import PageTransition from "@/components/PageTransition";
import { useToast } from "@/hooks/use-toast";

const interests = [
  "Historic Route",
  "Wildlife & Nature",
  "Festivals & Culture",
  "Coffee Experience",
  "Trekking & Adventure",
  "Community Stays",
  "Photography Tour",
  "Religious Heritage",
  "Custom Itinerary",
];

const Contact = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    travelDates: "",
    groupSize: "",
    selectedInterests: [] as string[],
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleInterest = (interest: string) => {
    setForm((prev) => ({
      ...prev,
      selectedInterests: prev.selectedInterests.includes(interest)
        ? prev.selectedInterests.filter((i) => i !== interest)
        : [...prev.selectedInterests, interest],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast({
        title: "Missing information",
        description: "Please fill in your name, email, and message.",
        variant: "destructive",
      });
      return;
    }

    setSubmitted(true);
    toast({
      title: "Message sent!",
      description:
        "Thank you for reaching out. Our team will respond within 24 hours.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (submitted) {
    return (
      <PageTransition>
        <main className="overflow-x-hidden bg-background">
          <Navbar />
          <section className="flex min-h-screen items-center justify-center px-6 pt-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-lg text-center"
            >
              <CheckCircle className="mx-auto mb-6 h-16 w-16 text-gold" />
              <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
                Thank you, {form.name.split(" ")[0]}!
              </h1>
              <p className="mt-6 font-body text-base leading-relaxed text-muted-foreground">
                Your journey inquiry has been received. Our team will review
                your interests and get back to you within 24 hours with
                personalized recommendations.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  to="/destinations"
                  className="inline-flex items-center gap-2 bg-gold px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-earth transition-all hover:bg-gold-light"
                >
                  Explore Destinations
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 border border-border px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-foreground transition-all hover:border-gold hover:text-gold"
                >
                  Back to Home
                </Link>
              </div>
            </motion.div>
          </section>
        </main>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <main className="overflow-x-hidden bg-background">
        <Navbar />

        {/* Hero */}
        <section className="relative bg-earth px-6 pb-16 pt-32 md:px-12 lg:px-20 lg:pt-40">
          <div className="Ethiopian-pattern absolute inset-0 opacity-20" />
          <div className="relative z-10 mx-auto max-w-7xl">
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
              Start Planning
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="max-w-3xl font-display text-4xl font-bold text-white md:text-6xl lg:text-7xl"
            >
              Let's craft your{" "}
              <span className="italic">journey</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-4 max-w-xl font-body text-base text-white/60"
            >
              No generic packages. Tell us what moves you, and we'll design
              an experience that exists nowhere else.
            </motion.p>
          </div>
        </section>

        {/* Form + Info */}
        <section className="px-6 py-16 md:px-12 lg:px-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-3">
            {/* Contact info sidebar */}
            <ScrollReveal className="lg:col-span-1">
              <div className="space-y-8">
                <div>
                  <p className="mb-6 font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                    Get In Touch
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Mail className="mt-1 h-5 w-5 shrink-0 text-gold" />
                      <div>
                        <p className="font-body text-sm font-semibold text-foreground">
                          Email
                        </p>
                        <p className="mt-1 font-body text-sm text-muted-foreground">
                          journeys@guzoethiopia.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="mt-1 h-5 w-5 shrink-0 text-gold" />
                      <div>
                        <p className="font-body text-sm font-semibold text-foreground">
                          Phone
                        </p>
                        <p className="mt-1 font-body text-sm text-muted-foreground">
                          +251 11 123 4567
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" />
                      <div>
                        <p className="font-body text-sm font-semibold text-foreground">
                          Office
                        </p>
                        <p className="mt-1 font-body text-sm text-muted-foreground">
                          Bole Road, Addis Ababa
                          <br />
                          Ethiopia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-8">
                  <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                    Response Time
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    We typically respond within 24 hours. For urgent inquiries,
                    call us directly.
                  </p>
                </div>

                <div className="border-t border-border pt-8">
                  <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                    For Operators
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    Tour operators and travel agents — reach out at{" "}
                    <span className="text-gold">
                      partners@guzoethiopia.com
                    </span>{" "}
                    for B2B collaboration.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal delay={0.1} className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-body text-xs font-semibold uppercase tracking-wider text-foreground">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-body text-xs font-semibold uppercase tracking-wider text-foreground">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-gold focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-3">
                  <div>
                    <label className="mb-2 block font-body text-xs font-semibold uppercase tracking-wider text-foreground">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 8900"
                      className="w-full border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-body text-xs font-semibold uppercase tracking-wider text-foreground">
                      Preferred Travel Dates
                    </label>
                    <input
                      type="text"
                      name="travelDates"
                      value={form.travelDates}
                      onChange={handleChange}
                      placeholder="e.g. October 2026"
                      className="w-full border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-body text-xs font-semibold uppercase tracking-wider text-foreground">
                      Group Size
                    </label>
                    <select
                      name="groupSize"
                      value={form.groupSize}
                      onChange={handleChange}
                      className="w-full border border-border bg-card px-4 py-3 font-body text-sm text-foreground transition-colors focus:border-gold focus:outline-none"
                    >
                      <option value="">Select</option>
                      <option value="solo">Solo traveler</option>
                      <option value="couple">Couple</option>
                      <option value="small">Small group (3–6)</option>
                      <option value="large">Large group (7+)</option>
                      <option value="family">Family with children</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-3 block font-body text-xs font-semibold uppercase tracking-wider text-foreground">
                    What interests you?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleInterest(interest)}
                        className={`border px-4 py-2 font-body text-xs font-semibold transition-all duration-300 ${
                          form.selectedInterests.includes(interest)
                            ? "border-gold bg-gold text-earth"
                            : "border-border text-muted-foreground hover:border-gold/50 hover:text-gold"
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-body text-xs font-semibold uppercase tracking-wider text-foreground">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your dream Ethiopian journey — what excites you, what you'd love to see, any questions..."
                    className="w-full resize-none border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-gold focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 bg-gold px-12 py-5 font-body text-sm font-semibold uppercase tracking-widest text-earth transition-all duration-300 hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20"
                >
                  Send Inquiry
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </ScrollReveal>
          </div>
        </section>

        <FooterSection />
      </main>
    </PageTransition>
  );
};

export default Contact;

import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Star, Flame, Clock, MapPin } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { menu, branches } from "@/data/menu";
import ghost from "@/assets/signature-ghost.jpg";
import volcano from "@/assets/signature-volcano.jpg";
import fatboy from "@/assets/signature-fatboy.jpg";
import interiorBar from "@/assets/interior-bar.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const signatures = [
  { img: volcano, name: "Cheesy Volcano Pizza", tag: "Signature Pizza", desc: "An eruption of molten cheese, fire-roasted peppers and slow-cured pepperoni." },
  { img: ghost, name: "Ghost Naga Chicken", tag: "Spicy Burger", desc: "Crispy chicken drenched in our ghost-pepper naga sauce. Hot. Loud. Unforgettable." },
  { img: fatboy, name: "Fat Boy Burger", tag: "Stacked High", desc: "Three flame-grilled patties, crispy bacon, double cheese, onion rings." },
];

function Index() {
  const featured = menu.slice(0, 6);

  return (
    <>
      <Hero />

      {/* Featured Menu */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Featured Menu"
            title={<>Made <span className="text-gradient-flame">Mouth-Watering</span></>}
            subtitle="A taste of what's waiting. Every dish hand-crafted by chefs who care."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((m, i) => (
              <motion.article
                key={m.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-deep"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent opacity-80" />
                  {m.badge && (
                    <span className="absolute left-4 top-4 rounded-full bg-gradient-flame px-3 py-1 font-display text-xs uppercase tracking-widest text-primary-foreground shadow-flame">
                      {m.badge}
                    </span>
                  )}
                </div>
                <div className="relative -mt-10 p-6">
                  <div className="text-xs uppercase tracking-widest text-secondary">{m.category}</div>
                  <h3 className="mt-1 font-display text-2xl uppercase">{m.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{m.description}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <div className="font-display text-2xl text-gradient-flame">৳{m.price}</div>
                    <button className="rounded-full border border-border px-4 py-2 text-xs font-medium uppercase tracking-widest transition hover:border-secondary hover:text-secondary">
                      Add +
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/menu" className="inline-flex items-center gap-2 font-display text-sm uppercase tracking-[0.3em] text-secondary story-link">
              See full menu <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Signature showcase */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-ember opacity-60" />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Signature Series"
            title={<>The <span className="text-gradient-flame">Legends</span> of the House</>}
          />
          <div className="mt-16 space-y-24">
            {signatures.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
              >
                <div className="relative">
                  <div className="absolute -inset-6 rounded-full bg-gradient-flame opacity-30 blur-3xl" />
                  <div className="relative overflow-hidden rounded-3xl border border-border shadow-deep">
                    <img src={s.img} alt={s.name} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-[1500ms] hover:scale-110" />
                  </div>
                </div>
                <div>
                  <div className="font-display text-xs uppercase tracking-[0.4em] text-secondary">{s.tag}</div>
                  <h3 className="mt-3 font-display text-5xl uppercase leading-none md:text-7xl">
                    {s.name.split(" ").slice(0, -1).join(" ")} <span className="text-gradient-flame">{s.name.split(" ").slice(-1)}</span>
                  </h3>
                  <p className="mt-5 max-w-md text-lg text-muted-foreground">{s.desc}</p>
                  <div className="mt-6 flex items-center gap-1 text-secondary">
                    {[...Array(5)].map((_, k) => <Star key={k} className="h-5 w-5 fill-current" />)}
                    <span className="ml-3 text-sm text-muted-foreground">Rated 4.9 / 5 by 2,300+ customers</span>
                  </div>
                  <Link to="/menu" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-flame px-6 py-3 font-display text-sm uppercase tracking-widest text-primary-foreground shadow-flame transition hover:scale-105">
                    Order this <Flame className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative border-y border-border bg-card/40 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {[
            { n: "3", l: "Branches" },
            { n: "120K+", l: "Happy Guests" },
            { n: "50+", l: "Menu Items" },
            { n: "4.9★", l: "Avg. Rating" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-5xl text-gradient-flame md:text-7xl">{s.n}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Branches teaser */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle eyebrow="Visit Us" title={<>Find Your <span className="text-gradient-flame">Nearest Branch</span></>} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {branches.map((b) => (
              <div key={b.city} className="group relative overflow-hidden rounded-3xl border border-border bg-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={b.image} alt={b.city} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute bottom-4 left-5 font-display text-4xl uppercase">{b.city}</div>
                </div>
                <div className="space-y-2 p-5 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-secondary" /> {b.address}</div>
                  <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-secondary" /> {b.hours}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience CTA */}
      <section className="relative overflow-hidden py-24">
        <img src={interiorBar} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <SectionTitle
            eyebrow="The Vibe"
            title={<>Not Just Dinner — A <span className="text-gradient-flame">Whole Mood</span></>}
            subtitle="Cocktail bar. Mirror selfie zone. Hanging lights. Canvas corner. Every spot built for the gram."
          />
          <Link to="/interior" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-flame px-7 py-3.5 font-display text-sm uppercase tracking-widest text-primary-foreground shadow-flame transition hover:scale-105">
            Step Inside <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

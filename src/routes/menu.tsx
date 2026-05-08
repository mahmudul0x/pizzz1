import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, Suspense } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { menu, categories } from "@/data/menu";

const getSlug = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

if (typeof window !== 'undefined') {
  const originalError = console.error;
  console.error = (...args) => {
    if (args[0]?.includes?.('hydrat')) return;
    originalError.call(console, ...args);
  };
}

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Pizz & Burg" },
      { name: "description", content: "Burgers, wood-fired pizza, pasta, steak, fried chicken & desserts." },
      { property: "og:title", content: "Menu — Pizz & Burg" },
      { property: "og:description", content: "Discover our full menu of cinematic flavors." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? menu : menu.filter((m) => m.category === active);

  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="The Menu"
          title={<>Pick Your <span className="text-gradient-flame">Obsession</span></>}
          subtitle="Every item is hand-crafted, fire-finished, and plated like it owes you money."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {(["All", ...categories] as const).map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 font-display text-xs uppercase tracking-widest transition ${
                active === c
                  ? "border-secondary bg-secondary text-secondary-foreground"
                  : "border-border bg-card/40 text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((m, i) => (
            <Link
              key={m.name}
              to="/menu/$name"
              params={{ name: getSlug(m.name) }}
              className="block"
            >
              <motion.article
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-deep cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={m.image} alt={m.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
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
                    <span className="rounded-full border border-border px-4 py-2 text-xs font-medium uppercase tracking-widest transition hover:border-secondary hover:text-secondary">
                      View
                    </span>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

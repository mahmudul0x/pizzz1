import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Flame, Tag, Clock } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import burger from "@/assets/hero-burger.jpg";
import pizza from "@/assets/hero-pizza.jpg";
import fatboy from "@/assets/signature-fatboy.jpg";
import volcano from "@/assets/signature-volcano.jpg";

export const Route = createFileRoute("/deals")({
  head: () => ({
    meta: [
      { title: "Offers & Deals — Pizz & Burg" },
      { name: "description", content: "Combos, weekend offers, and limited-time deals." },
      { property: "og:title", content: "Offers & Deals — Pizz & Burg" },
      { property: "og:description", content: "Save big on your favorites." },
    ],
  }),
  component: DealsPage,
});

const deals = [
  { img: fatboy, title: "Fat Boy Combo", desc: "Fat Boy Burger + Fries + Drink", was: 890, now: 690, badge: "Bestseller" },
  { img: volcano, title: "Pizza Party", desc: "Any Large Pizza + 4 Drinks", was: 1490, now: 1190, badge: "-20%" },
  { img: pizza, title: "Weekend Feast", desc: "2 Pizzas + 2 Pasta + Drinks", was: 2490, now: 1990, badge: "Weekend" },
  { img: burger, title: "Burger Squad", desc: "4 Cheese Burgers + Fries", was: 1290, now: 990, badge: "-25%" },
];

function useCountdown(target: number) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const i = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(i);
  }, []);
  const d = Math.max(0, target - now);
  const h = Math.floor(d / 3600000);
  const m = Math.floor((d % 3600000) / 60000);
  const s = Math.floor((d % 60000) / 1000);
  return { h, m, s };
}

function DealsPage() {
  const target = Date.now() + 1000 * 60 * 60 * 22 + 1000 * 60 * 7;
  const { h, m, s } = useCountdown(target);

  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Hot Offers"
          title={<>Deals That Feel <span className="text-gradient-flame">Illegal</span></>}
          subtitle="Limited-time combos crafted to feed the squad."
        />

        <div className="mt-10 flex justify-center">
          <div className="glass flex items-center gap-3 rounded-full px-5 py-3">
            <Flame className="h-4 w-4 text-secondary" />
            <span className="font-display text-xs uppercase tracking-widest text-muted-foreground">Flash deal ends in</span>
            <div className="flex gap-2 font-display text-lg">
              <span className="rounded bg-card px-2">{String(h).padStart(2, "0")}h</span>
              <span className="rounded bg-card px-2">{String(m).padStart(2, "0")}m</span>
              <span className="rounded bg-card px-2 text-secondary">{String(s).padStart(2, "0")}s</span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {deals.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-deep"
            >
              <div className="relative aspect-square overflow-hidden">
                <img src={d.img} alt={d.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-gradient-flame px-3 py-1 font-display text-xs uppercase tracking-widest text-primary-foreground shadow-flame">
                  <Tag className="h-3 w-3" /> {d.badge}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl uppercase">{d.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d.desc}</p>
                <div className="mt-4 flex items-end gap-2">
                  <div className="font-display text-3xl text-gradient-flame">৳{d.now}</div>
                  <div className="pb-1 text-sm text-muted-foreground line-through">৳{d.was}</div>
                </div>
                <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-flame px-4 py-2.5 font-display text-xs uppercase tracking-widest text-primary-foreground shadow-flame transition hover:scale-[1.02]">
                  <Clock className="h-3.5 w-3.5" /> Grab Deal
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

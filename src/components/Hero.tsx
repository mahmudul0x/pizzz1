import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Flame } from "lucide-react";
import { Embers } from "./Embers";
import burger from "@/assets/hero-burger.jpg";
import pizza from "@/assets/hero-pizza.jpg";
import interior from "@/assets/hero-interior.jpg";

const slides = [
  {
    img: burger,
    eyebrow: "Signature Burgers",
    title: ["Cooked With Heart,", "Served With Soul"],
    sub: "The ultimate burger & pizza experience in Bangladesh.",
    cta1: { label: "Explore Menu", to: "/menu" as const },
    cta2: { label: "Order Now", to: "/contact" as const },
  },
  {
    img: pizza,
    eyebrow: "Wood-Fired Pizza",
    title: ["Every Slice", "Tells A Story"],
    sub: "Hand-stretched dough. Real cheese pull. Pure obsession.",
    cta1: { label: "View Pizzas", to: "/menu" as const },
    cta2: { label: "Reserve Table", to: "/reservations" as const },
  },
  {
    img: interior,
    eyebrow: "The Experience",
    title: ["More Than Food", "It's An Experience"],
    sub: "Step into a world of cinematic flavor and luxury vibes.",
    cta1: { label: "Explore Interior", to: "/interior" as const },
    cta2: { label: "Visit Branch", to: "/branches" as const },
  },
];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);
  const s = slides[i];

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1.4, ease: [0.7, 0, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img
            src={s.img}
            alt=""
            className="h-full w-full object-cover"
            // LCP — no lazy
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,transparent_0%,oklch(0.10_0.02_25/0.85)_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <Embers count={30} />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24 md:justify-center md:pb-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-4 py-1.5 backdrop-blur">
              <Flame className="h-3.5 w-3.5 text-secondary" />
              <span className="font-display text-xs uppercase tracking-[0.3em] text-secondary">
                {s.eyebrow}
              </span>
            </div>
            <h1 className="font-display text-[clamp(2.6rem,8vw,7rem)] uppercase leading-[0.9] tracking-wide text-foreground">
              {s.title[0]}
              <br />
              <span className="text-gradient-flame">{s.title[1]}</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-xl">{s.sub}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={s.cta1.to}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-flame px-7 py-3.5 font-display text-sm uppercase tracking-widest text-primary-foreground shadow-flame transition hover:scale-105"
              >
                {s.cta1.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to={s.cta2.to}
                className="inline-flex items-center gap-2 rounded-full border border-foreground/30 bg-background/30 px-7 py-3.5 font-display text-sm uppercase tracking-widest text-foreground backdrop-blur transition hover:border-secondary hover:text-secondary"
              >
                {s.cta2.label}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-10 right-6 hidden gap-2 md:flex">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-12 bg-gradient-flame" : "w-6 bg-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ticker */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-y border-border bg-background/70 py-3 backdrop-blur">
        <div className="flex w-max animate-ticker gap-12 whitespace-nowrap font-display text-sm uppercase tracking-[0.4em] text-muted-foreground">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-12">
              <span>🔥 Flame Grilled</span>
              <span className="text-secondary">★</span>
              <span>Hand Stretched Pizza</span>
              <span className="text-secondary">★</span>
              <span>3 Branches Across Bangladesh</span>
              <span className="text-secondary">★</span>
              <span>Open Daily 11AM — 11PM</span>
              <span className="text-secondary">★</span>
              <span>Order: 01749-281818</span>
              <span className="text-secondary">★</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

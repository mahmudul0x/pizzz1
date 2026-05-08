import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { X, Flame } from "lucide-react";

function useCountdown() {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  // Target: midnight tonight
  const target = new Date();
  target.setHours(23, 59, 59, 999);
  const diff = Math.max(0, target.getTime() - now);
  const h = Math.floor(diff / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  const s = Math.floor((diff % 60_000) / 1000);
  return { h, m, s };
}

export function OffersPopup() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { h, m, s } = useCountdown();

  useEffect(() => {
    setMounted(true);
    if (sessionStorage.getItem("pb_offer_dismissed")) return;
    const t = setTimeout(() => setOpen(true), 4000);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    sessionStorage.setItem("pb_offer_dismissed", "1");
  };

  if (!mounted) return null;
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm md:items-center"
          onClick={close}
        >
          <motion.div
            initial={{ y: 60, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: "spring", damping: 22, stiffness: 220 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-primary/30 bg-card shadow-flame"
          >
            <div className="absolute inset-0 bg-gradient-flame opacity-10" />
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-full bg-background/60 text-foreground transition hover:bg-background"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="relative p-6 md:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                <Flame className="h-3 w-3" /> Live Offer
              </div>
              <h3 className="mt-4 font-display text-3xl uppercase leading-none md:text-4xl">
                Weekend <span className="text-gradient-flame">Feast</span> — Save 25%
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Burgers, wood-fired pizzas & combos. Today only — across all 3 branches.
              </p>

              <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                {[
                  { label: "Hours", v: pad(h) },
                  { label: "Min", v: pad(m) },
                  { label: "Sec", v: pad(s) },
                ].map((b) => (
                  <div key={b.label} className="rounded-lg border border-border bg-background/60 py-3">
                    <div className="font-display text-3xl text-primary">{b.v}</div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{b.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/deals"
                  onClick={close}
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-gradient-flame px-5 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-glow transition hover:scale-[1.02]"
                >
                  See Deals
                </Link>
                <button
                  onClick={close}
                  className="rounded-full border border-border px-5 py-3 text-sm font-semibold text-muted-foreground transition hover:text-foreground"
                >
                  Later
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { branches } from "@/data/menu";

export const Route = createFileRoute("/branches")({
  head: () => ({
    meta: [
      { title: "Branches — Pizz & Burg" },
      { name: "description", content: "Visit Pizz & Burg in Dinajpur, Bogura or Rangpur." },
      { property: "og:title", content: "Branches — Pizz & Burg" },
      { property: "og:description", content: "Three premium branches across Bangladesh." },
    ],
  }),
  component: BranchesPage,
});

function BranchesPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Branches"
          title={<>Three Cities. <span className="text-gradient-flame">One Obsession.</span></>}
          subtitle="Find your nearest Pizz & Burg and step into the experience."
        />
        <div className="mt-16 space-y-16">
          {branches.map((b, i) => (
            <motion.div
              key={b.city}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className={`grid gap-8 md:grid-cols-2 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="relative overflow-hidden rounded-3xl border border-border shadow-deep">
                <img src={b.image} alt={b.city} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-110" />
                <div className="absolute bottom-5 left-6 font-display text-5xl uppercase">{b.city}</div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="font-display text-xs uppercase tracking-[0.4em] text-secondary">Branch</div>
                <h3 className="mt-2 font-display text-4xl uppercase md:text-6xl">{b.city} Branch</h3>
                <ul className="mt-6 space-y-3 text-base text-muted-foreground">
                  <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-secondary" /> {b.address}</li>
                  <li className="flex items-start gap-3"><Clock className="mt-0.5 h-5 w-5 text-secondary" /> {b.hours}</li>
                  <li className="flex items-start gap-3"><Phone className="mt-0.5 h-5 w-5 text-secondary" /> {b.phone}</li>
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href={`https://maps.google.com/?q=Pizz+and+Burg+${b.city}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-flame px-6 py-3 font-display text-sm uppercase tracking-widest text-primary-foreground shadow-flame transition hover:scale-105">
                    Get Directions
                  </a>
                  <a href={`tel:${b.phone}`} className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-display text-sm uppercase tracking-widest text-foreground hover:border-secondary hover:text-secondary">
                    Call Branch
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

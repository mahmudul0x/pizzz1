import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import bar from "@/assets/interior-bar.jpg";
import canvas from "@/assets/interior-canvas.jpg";
import dining from "@/assets/interior-dining.jpg";
import hero from "@/assets/hero-interior.jpg";

export const Route = createFileRoute("/interior")({
  head: () => ({
    meta: [
      { title: "Interior & Experience — Pizz & Burg" },
      { name: "description", content: "Step inside our cocktail bar, mirror selfie zone, canvas corner, and luxury dining area." },
      { property: "og:title", content: "Interior & Experience — Pizz & Burg" },
      { property: "og:description", content: "Built for vibes. Built for the gram." },
      { property: "og:image", content: hero },
    ],
  }),
  component: InteriorPage,
});

const spots = [
  { img: bar, title: "The Cocktail Bar", desc: "Backlit bottles, neon glow, mirror finish — your favorite first impression." },
  { img: canvas, title: "Canvas Corner", desc: "A splash of color and warm Edison bulbs. The perfect photo backdrop." },
  { img: dining, title: "Luxury Dining", desc: "Velvet seats, soft chandeliers, cinematic lighting designed for long, slow meals." },
];

function InteriorPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img src={hero} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-16">
            <div className="font-display text-xs uppercase tracking-[0.4em] text-secondary">The Experience</div>
            <h1 className="mt-3 font-display text-5xl uppercase leading-[0.9] md:text-8xl">
              More Than Food.<br /><span className="text-gradient-flame">It's a Mood.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Instagrammable Spots"
          title={<>Built For <span className="text-gradient-flame">The Gram</span></>}
          subtitle="Every corner is a backdrop. Every meal is a story."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {spots.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-border shadow-deep"
            >
              <img src={s.img} alt={s.title} loading="lazy" className="aspect-[3/4] w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <div className="font-display text-2xl uppercase md:text-3xl">{s.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/reservations" className="inline-flex items-center gap-2 rounded-full bg-gradient-flame px-7 py-3.5 font-display text-sm uppercase tracking-widest text-primary-foreground shadow-flame transition hover:scale-105">
            Reserve Your Table
          </Link>
        </div>
      </section>
    </div>
  );
}

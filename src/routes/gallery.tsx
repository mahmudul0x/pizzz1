import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { menu } from "@/data/menu";
import bar from "@/assets/interior-bar.jpg";
import canvas from "@/assets/interior-canvas.jpg";
import dining from "@/assets/interior-dining.jpg";
import heroInt from "@/assets/hero-interior.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Pizz & Burg" },
      { name: "description", content: "Food, interior and event photography from Pizz & Burg." },
      { property: "og:title", content: "Gallery — Pizz & Burg" },
      { property: "og:description", content: "A visual feast." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const images = [
    ...menu.map((m) => ({ src: m.image, label: m.name })),
    { src: bar, label: "Cocktail Bar" },
    { src: canvas, label: "Canvas Corner" },
    { src: dining, label: "Dining Hall" },
    { src: heroInt, label: "Interior" },
  ];
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Gallery"
          title={<>A <span className="text-gradient-flame">Visual</span> Feast</>}
          subtitle="Click any photo to view it full-screen."
        />
        <div className="mt-12 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          {images.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 8) * 0.04 }}
              onClick={() => setOpen(img.src)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-border"
            >
              <img src={img.src} alt={img.label} loading="lazy" className="w-full transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="absolute bottom-3 left-3 font-display text-sm uppercase tracking-wider opacity-0 transition group-hover:opacity-100">{img.label}</div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[60] grid place-items-center bg-background/95 p-4 backdrop-blur"
          >
            <button onClick={() => setOpen(null)} className="absolute right-6 top-6 rounded-full border border-border bg-card p-2"><X className="h-5 w-5" /></button>
            <motion.img
              initial={{ scale: 0.9 }} animate={{ scale: 1 }}
              src={open}
              alt=""
              className="max-h-[90vh] max-w-[95vw] rounded-2xl object-contain shadow-deep"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

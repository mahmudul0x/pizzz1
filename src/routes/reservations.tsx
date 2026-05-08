import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Calendar } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      { title: "Reservations — Pizz & Burg" },
      { name: "description", content: "Reserve a table at Pizz & Burg in Dinajpur, Bogura or Rangpur." },
      { property: "og:title", content: "Reservations — Pizz & Burg" },
      { property: "og:description", content: "Book your perfect night out." },
    ],
  }),
  component: ReservationsPage,
});

function ReservationsPage() {
  const [done, setDone] = useState(false);

  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <SectionTitle
          eyebrow="Reservations"
          title={<>Book Your <span className="text-gradient-flame">Table</span></>}
          subtitle="A premium dining experience awaits. Reserve in seconds."
        />

        <div className="relative mt-12 overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-deep md:p-10">
          <div className="absolute inset-0 bg-gradient-ember opacity-40" />
          <AnimatePresence mode="wait">
            {!done ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={(e) => { e.preventDefault(); setDone(true); }}
                className="relative grid gap-4 md:grid-cols-2"
              >
                <Field label="Full Name"><input required className="input" placeholder="John Doe" /></Field>
                <Field label="Phone"><input required type="tel" className="input" placeholder="01XXX-XXXXXX" /></Field>
                <Field label="Branch">
                  <select required className="input">
                    <option>Dinajpur</option>
                    <option>Bogura</option>
                    <option>Rangpur</option>
                  </select>
                </Field>
                <Field label="Guests">
                  <input required type="number" min={1} max={20} defaultValue={2} className="input" />
                </Field>
                <Field label="Date"><input required type="date" className="input" /></Field>
                <Field label="Time"><input required type="time" className="input" defaultValue="19:00" /></Field>
                <div className="md:col-span-2">
                  <button className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-flame px-7 py-3.5 font-display text-sm uppercase tracking-widest text-primary-foreground shadow-flame transition hover:scale-[1.02]">
                    <Calendar className="h-4 w-4" /> Confirm Reservation
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="ok"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative grid place-items-center py-12 text-center"
              >
                <div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-flame shadow-flame">
                  <Check className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="mt-6 font-display text-3xl uppercase">Table Reserved!</h3>
                <p className="mt-2 max-w-md text-muted-foreground">
                  We've sent the confirmation to your phone. See you soon at Pizz &amp; Burg.
                </p>
                <button onClick={() => setDone(false)} className="mt-6 rounded-full border border-border px-6 py-2.5 font-display text-xs uppercase tracking-widest hover:border-secondary hover:text-secondary">
                  Book Another
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <style>{`
          .input { width: 100%; background: oklch(0.20 0.02 25); border: 1px solid var(--border); color: var(--foreground); border-radius: 0.75rem; padding: 0.75rem 1rem; outline: none; transition: border .2s; }
          .input:focus { border-color: var(--secondary); box-shadow: 0 0 0 3px oklch(0.85 0.18 85 / 0.2); }
        `}</style>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-display text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

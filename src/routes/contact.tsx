import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Pizz & Burg" },
      { name: "description", content: "Reach Pizz & Burg by phone, email or WhatsApp. 01749-281818" },
      { property: "og:title", content: "Contact — Pizz & Burg" },
      { property: "og:description", content: "Get in touch — we'd love to hear from you." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Get In Touch"
          title={<>Say <span className="text-gradient-flame">Hello</span></>}
          subtitle="Questions, feedback, catering or events — we're here for it."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { icon: Phone, label: "Call us", value: "01749-281818", href: "tel:01749281818" },
            { icon: Mail, label: "Email", value: "pizzandburg@gmail.com", href: "mailto:pizzandburg@gmail.com" },
            { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/8801749281818" },
          ].map(({ icon: Icon, label, value, href }) => (
            <a key={label} href={href} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-deep transition hover:border-secondary">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-flame opacity-0 blur-3xl transition group-hover:opacity-30" />
              <Icon className="h-8 w-8 text-secondary" />
              <div className="mt-5 font-display text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
              <div className="mt-1 font-display text-2xl">{value}</div>
            </a>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4 rounded-3xl border border-border bg-card p-7 shadow-deep">
            <h3 className="font-display text-2xl uppercase">Send a message</h3>
            <input className="input" placeholder="Your name" />
            <input className="input" placeholder="Email" type="email" />
            <textarea className="input min-h-[140px]" placeholder="Message" />
            <button className="inline-flex items-center gap-2 rounded-full bg-gradient-flame px-6 py-3 font-display text-sm uppercase tracking-widest text-primary-foreground shadow-flame transition hover:scale-105">
              Send
            </button>
          </form>

          <div className="overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-deep">
            <h3 className="font-display text-2xl uppercase">Find Us</h3>
            <ul className="mt-4 space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-secondary" /><div><div className="font-display uppercase text-foreground">Dinajpur</div>Captain Tower, Ganeshtala</div></li>
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-secondary" /><div><div className="font-display uppercase text-foreground">Bogura</div>Sydney Tower (3rd Floor)</div></li>
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-secondary" /><div><div className="font-display uppercase text-foreground">Rangpur</div>RAMC Shopping Complex</div></li>
            </ul>
          </div>
        </div>

        <style>{`
          .input { width: 100%; background: oklch(0.20 0.02 25); border: 1px solid var(--border); color: var(--foreground); border-radius: 0.75rem; padding: 0.75rem 1rem; outline: none; transition: border .2s; }
          .input:focus { border-color: var(--secondary); box-shadow: 0 0 0 3px oklch(0.85 0.18 85 / 0.2); }
        `}</style>
      </div>
    </div>
  );
}

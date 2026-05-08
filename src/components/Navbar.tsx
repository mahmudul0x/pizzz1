import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Flame } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/branches", label: "Branches" },
  { to: "/interior", label: "Interior" },
  { to: "/gallery", label: "Gallery" },
  { to: "/deals", label: "Deals" },
  { to: "/reservations", label: "Reserve" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <Link to="/" className="group flex items-center gap-2">
          <img
            src={logo}
            alt="Pizz & Burg logo"
            width={40}
            height={40}
            className="h-10 w-10 transition-transform duration-500 group-hover:rotate-12"
          />
          <div className="font-display text-2xl leading-none tracking-wider">
            <span className="text-foreground">PIZZ</span>
            <span className="text-gradient-flame">&amp;</span>
            <span className="text-foreground">BURG</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="story-link font-display text-sm uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="tel:01749281818"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-flame px-5 py-2.5 font-display text-sm uppercase tracking-widest text-primary-foreground shadow-flame transition hover:scale-105"
          >
            <Flame className="h-4 w-4" />
            Order Now
            <span className="absolute inset-0 animate-shine" />
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-md border border-border p-2 text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="glass mx-4 mt-2 rounded-2xl p-5 md:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-display text-lg uppercase tracking-widest text-muted-foreground hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:01749281818"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-flame px-5 py-3 font-display uppercase tracking-widest text-primary-foreground"
            >
              <Flame className="h-4 w-4" /> Order Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

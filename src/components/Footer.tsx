import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <div className="font-display text-3xl tracking-wider">
            PIZZ <span className="text-gradient-flame">&amp;</span> BURG
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Cooked with heart. Served with soul. Bangladesh's most cinematic burger
            &amp; pizza experience.
          </p>
          <div className="mt-5 flex gap-3">
            <a className="rounded-full border border-border p-2 hover:bg-primary hover:text-primary-foreground" href="#"><Instagram className="h-4 w-4" /></a>
            <a className="rounded-full border border-border p-2 hover:bg-primary hover:text-primary-foreground" href="#"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg uppercase tracking-widest">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/menu" className="hover:text-foreground">Menu</Link></li>
            <li><Link to="/branches" className="hover:text-foreground">Branches</Link></li>
            <li><Link to="/gallery" className="hover:text-foreground">Gallery</Link></li>
            <li><Link to="/deals" className="hover:text-foreground">Deals</Link></li>
            <li><Link to="/reservations" className="hover:text-foreground">Reservations</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg uppercase tracking-widest">Branches</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Dinajpur · Captain Tower, Ganeshtala</li>
            <li>Bogura · Sydney Tower (3rd Floor)</li>
            <li>Rangpur · RAMC Shopping Complex</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg uppercase tracking-widest">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-secondary" /><span>01749-281818</span></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-secondary" /><span>pizzandburg@gmail.com</span></li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-secondary" /><span>3 Branches in Bangladesh</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Pizz &amp; Burg — All rights reserved.
      </div>
    </footer>
  );
}

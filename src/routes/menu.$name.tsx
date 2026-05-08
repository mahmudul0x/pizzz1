import { createFileRoute, Link } from "@tanstack/react-router";
import { menu } from "@/data/menu";
import { ArrowLeft, Clock, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/menu/$name")({
  head: () => ({
    meta: [
      { title: "Menu Details — Pizz & Burg" },
    ],
  }),
  component: MenuDetailPage,
});

function MenuDetailPage() {
  const params = Route.useParams();
  const slug = params.name.toLowerCase();
  const item = menu.find((m) => m.name.toLowerCase().replace(/\s+/g, "-") === slug);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-muted-foreground">Item not found</p>
          <Link to="/menu" className="mt-4 inline-block text-secondary">Go back to menu</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        <Link
          to="/menu"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-secondary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Menu
        </Link>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-border">
            <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
            {item.badge && (
              <span className="absolute left-4 top-4 rounded-full bg-gradient-flame px-4 py-1.5 font-display text-sm uppercase tracking-widest text-primary-foreground shadow-flame">
                {item.badge}
              </span>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <div className="text-sm uppercase tracking-widest text-secondary">{item.category}</div>
            <h1 className="mt-2 font-display text-4xl uppercase text-foreground">{item.name}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{item.description}</p>
            
            <div className="mt-8 flex items-center gap-4">
              <span className="font-display text-5xl text-gradient-flame">৳{item.price}</span>
              <button className="rounded-full bg-secondary px-8 py-3 font-display text-sm uppercase tracking-widest text-secondary-foreground transition hover:bg-secondary/90">
                Add to Cart
              </button>
            </div>

            <div className="mt-10 space-y-4 rounded-2xl border border-border bg-card/50 p-6">
              <h3 className="font-display text-lg uppercase text-foreground">Nutrition Info</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-foreground">450</div>
                  <div className="text-xs text-muted-foreground">Calories</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">25g</div>
                  <div className="text-xs text-muted-foreground">Protein</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">18g</div>
                  <div className="text-xs text-muted-foreground">Fat</div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-card/50 p-6">
              <h3 className="mb-4 font-display text-lg uppercase text-foreground">Available At</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-secondary" />
                  <span>Dinajpur • Bogura • Rangpur</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-secondary" />
                  <span>11:00 AM — 11:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-secondary" />
                  <span>01749-281818</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
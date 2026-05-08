import { MessageCircle, ShoppingBag } from "lucide-react";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/8801749281818"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.65_0.18_150)] text-white shadow-flame transition hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href="tel:01749281818"
        aria-label="Order Now"
        className="grid h-14 w-14 place-items-center rounded-full bg-gradient-flame text-primary-foreground shadow-flame transition hover:scale-110"
      >
        <ShoppingBag className="h-6 w-6" />
      </a>
    </div>
  );
}

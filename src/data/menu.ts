export type MenuItem = {
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  badge?: string;
};

import burger from "@/assets/hero-burger.jpg";
import pizza from "@/assets/hero-pizza.jpg";
import chicken from "@/assets/menu-chicken.jpg";
import pasta from "@/assets/menu-pasta.jpg";
import steak from "@/assets/menu-steak.jpg";
import dessert from "@/assets/menu-dessert.jpg";
import ghost from "@/assets/signature-ghost.jpg";
import volcano from "@/assets/signature-volcano.jpg";
import fatboy from "@/assets/signature-fatboy.jpg";

export const categories = [
  "Signature Burgers",
  "Premium Pizza",
  "Pasta",
  "Steak",
  "Fried Chicken",
  "Desserts",
] as const;

export const menu: MenuItem[] = [
  { name: "Fat Boy Burger", description: "Triple beef patty, smoked bacon, double cheese, onion rings.", price: 690, category: "Signature Burgers", image: fatboy, badge: "Bestseller" },
  { name: "Ghost Naga Chicken", description: "Crispy chicken, ghost-pepper naga sauce, jalapeño.", price: 520, category: "Signature Burgers", image: ghost, badge: "Spicy" },
  { name: "Classic Cheese Burger", description: "Smashed beef, American cheese, signature sauce, brioche.", price: 380, category: "Signature Burgers", image: burger },
  { name: "Cheesy Volcano Pizza", description: "Erupting molten cheese, pepperoni, fresh basil.", price: 1190, category: "Premium Pizza", image: volcano, badge: "Famous" },
  { name: "Napoli Meat Feast", description: "Wood-fired crust loaded with five cured meats.", price: 1290, category: "Premium Pizza", image: pizza },
  { name: "Margherita Royale", description: "San marzano, buffalo mozzarella, basil, EVOO.", price: 890, category: "Premium Pizza", image: pizza },
  { name: "Alfredo Pasta", description: "Silky parmesan cream, fettuccine, garlic, parsley.", price: 490, category: "Pasta", image: pasta },
  { name: "Spicy Arrabbiata", description: "Slow-cooked tomato, chili, garlic, herbs.", price: 460, category: "Pasta", image: pasta },
  { name: "Tomahawk Steak", description: "1kg dry-aged beef, herb butter, chargrilled.", price: 4290, category: "Steak", image: steak, badge: "Chef's" },
  { name: "Ribeye Premium", description: "Black-angus ribeye, rosemary butter, sea salt.", price: 2190, category: "Steak", image: steak },
  { name: "Crispy Wings (8pc)", description: "Buttermilk brined, double-fried, signature spice.", price: 390, category: "Fried Chicken", image: chicken },
  { name: "Volcano Tenders", description: "Fiery hand-breaded chicken tenders.", price: 420, category: "Fried Chicken", image: chicken, badge: "Hot" },
  { name: "Molten Lava Cake", description: "Warm chocolate cake, vanilla bean ice cream.", price: 290, category: "Desserts", image: dessert },
  { name: "Triple Chocolate Brownie", description: "Belgian dark chocolate, salted caramel.", price: 260, category: "Desserts", image: dessert },
];

export const branches = [
  {
    city: "Dinajpur",
    address: "Captain Tower, Ganeshtala",
    hours: "11:00 AM — 11:00 PM",
    phone: "01749-281818",
    image: chicken,
  },
  {
    city: "Bogura",
    address: "Sydney Tower (3rd Floor)",
    hours: "11:00 AM — 11:30 PM",
    phone: "01749-281818",
    image: pasta,
  },
  {
    city: "Rangpur",
    address: "RAMC Shopping Complex",
    hours: "11:00 AM — 11:00 PM",
    phone: "01749-281818",
    image: steak,
  },
];

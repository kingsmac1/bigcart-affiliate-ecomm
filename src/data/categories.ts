import heroElectronics from "@/assets/categories/hero-electronics.jpg";
import heroHealth from "@/assets/categories/hero-health.jpg";
import heroKitchen from "@/assets/categories/hero-kitchen.jpg";
import heroHome from "@/assets/categories/hero-home.jpg";

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
};

export const categories: Category[] = [
  {
    slug: "electronics-gadgets",
    name: "Electronics & Gadgets",
    tagline: "Smarter every day.",
    description:
      "From wireless earbuds to action cameras, discover the tech making everyday life sharper, faster, and more fun.",
    image: heroElectronics,
  },
  {
    slug: "health-wellness",
    name: "Health & Wellness",
    tagline: "Feel good, look good.",
    description:
      "Recovery tools, fitness gear, and self-care essentials hand-picked to help you move and live better.",
    image: heroHealth,
  },
  {
    slug: "kitchen-essentials",
    name: "Kitchen Essentials",
    tagline: "Cook like you mean it.",
    description:
      "The appliances and tools your kitchen has been waiting for — from quick weeknight wins to weekend showpieces.",
    image: heroKitchen,
  },
  {
    slug: "home-living",
    name: "Home & Living",
    tagline: "Spaces that feel like you.",
    description:
      "Lighting, decor, and clever home gear that turns any room into a place you actually want to be.",
    image: heroHome,
  },
  {
    slug: "fashion-style",
    name: "Fashion & Style",
    tagline: "Quietly confident.",
    description:
      "Wear-everywhere essentials and standout accessories curated for the way you actually live.",
    image: heroElectronics,
  },
  {
    slug: "furniture-decor",
    name: "Furniture & Decor",
    tagline: "Built to be lived with.",
    description:
      "Statement pieces and everyday workhorses, chosen for the materials, comfort, and lines that age well.",
    image: heroHome,
  },
];

export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);

import blog1 from "@/assets/blog/blog-1.jpg";
import blog2 from "@/assets/blog/blog-2.jpg";
import blog3 from "@/assets/blog/blog-3.jpg";
import blog4 from "@/assets/blog/blog-4.jpg";
import blog5 from "@/assets/blog/blog-5.jpg";
import blog6 from "@/assets/blog/blog-6.jpg";

export type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  category: string;
  author: string;
  date: string;
  readMinutes: number;
  body: string[];
};

export const blogs: Blog[] = [
  {
    slug: "tech-gadgets-worth-the-hype",
    title: "The Tech Gadgets Actually Worth the Hype This Year",
    excerpt:
      "We tested dozens of trending gadgets so you don't have to. These are the ones that earned a permanent spot in our daily carry.",
    cover: blog1,
    category: "Electronics",
    author: "The BigCart Team",
    date: "2026-05-22",
    readMinutes: 6,
    body: [
      "Every week a new gadget trends online claiming to change your life. Most don't. A few quietly do. At BigCart we spend our days digging through the noise so you can spend yours on the things that matter.",
      "Top of the list this season: noise-cancelling earbuds that finally feel weightless, a smartwatch that doesn't need a charger every other night, and a wireless charging pad small enough to live in your bag.",
      "The throughline? Restraint. The best new tech isn't louder, it's calmer — fewer features, executed brilliantly. That's the bar we hold every product on BigCart to.",
    ],
  },
  {
    slug: "make-any-room-feel-bigger",
    title: "5 Pieces That Make Any Room Feel Twice as Big",
    excerpt:
      "A few well-chosen items go further than a full redesign. Here's the short list our editors keep recommending.",
    cover: blog2,
    category: "Home & Living",
    author: "Editorial",
    date: "2026-05-14",
    readMinutes: 5,
    body: [
      "Square footage is mostly fixed. The feeling of space isn't. Lighting, lines, and a couple of mirrors do more than any wall knock-through ever will.",
      "We rounded up the five most-asked-about pieces from our living section — including a slim brass lamp, a low-profile lounge chair, and a layered area rug — and broke down why each one tricks the eye into seeing more room.",
      "Pick one, live with it for a week, then add the next. Restraint, again — the most underrated design move there is.",
    ],
  },
  {
    slug: "small-kitchen-big-meals",
    title: "Small Kitchen, Big Meals: Our Favorite Appliances",
    excerpt:
      "You don't need a chef's kitchen to cook like one. These compact appliances punch far above their counter footprint.",
    cover: blog3,
    category: "Kitchen",
    author: "The BigCart Team",
    date: "2026-05-02",
    readMinutes: 7,
    body: [
      "Apartment kitchens have one rule: every square inch needs to earn its keep. The good news is the modern crop of compact appliances is genuinely incredible.",
      "Our editors swear by a small-but-mighty air fryer for weeknights, a pastel stand mixer that doubles as decor, and a barista-grade espresso machine that fits between the toaster and the kettle.",
      "Cooking well at home is a daily quality-of-life upgrade. These three make it easy to actually do it.",
    ],
  },
  {
    slug: "wearables-buyers-guide",
    title: "The Honest Wearables Buyer's Guide",
    excerpt:
      "Smartwatch, fitness ring, or classic? We break down who each one is for — without the marketing fog.",
    cover: blog4,
    category: "Electronics",
    author: "Editorial",
    date: "2026-04-21",
    readMinutes: 8,
    body: [
      "The wearables market is loud. Every brand promises to change your sleep, your training, your posture. Most of them won't.",
      "We organised the category into three real buckets — performance smartwatches, low-friction wellness rings, and design-first classics — and matched each to the kind of person who actually benefits from it.",
      "If your goal is to glance less at your phone, almost any of them helps. If your goal is to train harder, only a couple really earn their price.",
    ],
  },
  {
    slug: "everyday-style-essentials",
    title: "Everyday Style Essentials Under $150",
    excerpt:
      "A capsule of versatile pieces that take you from a coffee run to a dinner reservation without changing.",
    cover: blog5,
    category: "Fashion",
    author: "The BigCart Team",
    date: "2026-04-09",
    readMinutes: 5,
    body: [
      "Great style isn't about owning more. It's about owning a few things that work together every time you reach for them.",
      "Our shortlist this season: a structured tan coat, a perfect white tee, a leather backpack that ages like wine, a pair of tortoise shades, and a minimalist watch on a brown strap.",
      "Five pieces. Infinite combinations. All under $150 each.",
    ],
  },
  {
    slug: "build-better-home-office",
    title: "How to Build a Home Office You Actually Enjoy",
    excerpt:
      "From the desk up: the pieces that turn a corner of your apartment into a place you want to spend your day.",
    cover: blog6,
    category: "Home & Living",
    author: "Editorial",
    date: "2026-03-27",
    readMinutes: 6,
    body: [
      "A good home office is less about gear and more about intention. Start with the desk. Then the chair. Then the light. In that order.",
      "We laid out an exact set we'd buy today — a solid oak writing desk, an ergonomic chair under $400, and a dimmable lamp that won't burn your eyes by 6pm.",
      "Add a plant. Hide the cables. Done.",
    ],
  },
];

export const getBlog = (slug: string) => blogs.find((b) => b.slug === slug);

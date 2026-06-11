import a1 from "@/assets/avatars/a1.jpg";
import a2 from "@/assets/avatars/a2.jpg";
import a3 from "@/assets/avatars/a3.jpg";
import a4 from "@/assets/avatars/a4.jpg";
import a5 from "@/assets/avatars/a5.jpg";
import a6 from "@/assets/avatars/a6.jpg";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "BigCart's picks have replaced my endless scrolling. Whatever they recommend just works — the air fryer alone changed our weeknights.",
    name: "Adaeze Okafor",
    role: "Lagos, Nigeria",
    avatar: a1,
  },
  {
    quote:
      "I bought the smartwatch and the massage gun the same week. Both arrived fast and both lived up to the write-up. Real reviews, no fluff.",
    name: "Marcus Bello",
    role: "London, UK",
    avatar: a2,
  },
  {
    quote:
      "Their home & living edit is dangerously good. My partner now blames BigCart every time a new box shows up at the door.",
    name: "Mary Tan",
    role: "Singapore",
    avatar: a3,
  },
  {
    quote:
      "Finally a shop that respects my time. Curated, well-written, and the links go straight to the listings I'd have picked myself.",
    name: "Daniel Hughes",
    role: "Brighton, UK",
    avatar: a4,
  },
  {
    quote:
      "I trust BigCart the way I used to trust a great magazine. It's the rare place online where the taste actually matches mine.",
    name: "Sofia Reyes",
    role: "Madrid, Spain",
    avatar: a5,
  },
  {
    quote:
      "Six months of recommendations and not a single regret. That's a stat I never thought I'd say about an internet shop.",
    name: "Patricia Eze",
    role: "Abuja, Nigeria",
    avatar: a6,
  },
];

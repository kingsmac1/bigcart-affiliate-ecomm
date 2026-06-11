import earbuds from "@/assets/products/earbuds.jpg";
import smartwatch from "@/assets/products/smartwatch.jpg";
import speaker from "@/assets/products/speaker.jpg";
import camera from "@/assets/products/camera.jpg";
import charger from "@/assets/products/charger.jpg";
import massageGun from "@/assets/products/massage-gun.jpg";
import scale from "@/assets/products/scale.jpg";
import toothbrush from "@/assets/products/toothbrush.jpg";
import purifier from "@/assets/products/purifier.jpg";
import mixer from "@/assets/products/mixer.jpg";
import airfryer from "@/assets/products/airfryer.jpg";
import coffee from "@/assets/products/coffee.jpg";
import vacuum from "@/assets/products/vacuum.jpg";
import diffuser from "@/assets/products/diffuser.jpg";
import robotvac from "@/assets/products/robotvac.jpg";
import watchFashion from "@/assets/products/watch-fashion.jpg";
import backpack from "@/assets/products/backpack.jpg";
import sunglasses from "@/assets/products/sunglasses.jpg";
import chair from "@/assets/products/chair.jpg";
import lamp from "@/assets/products/lamp.jpg";
import desk from "@/assets/products/desk.jpg";
import accentChair from "@/assets/products/accent-chair.jpg";

export type Product = {
  id: string;
  name: string;
  tagline: string;
  priceFrom: string;
  image: string;
  category: string; // category slug
  badge?: "New" | "Hot" | "Top Pick";
  url: string;
};

const AMZ = (id: string) => `https://www.amazon.com/dp/${id}?tag=bigcart-20`;

export const products: Product[] = [
  { id: "earbuds-pro",       name: "Wireless Earbuds Pro",       tagline: "Active noise cancelling, 30h battery", priceFrom: "$59",  image: earbuds,     category: "electronics-gadgets", badge: "Hot",      url: AMZ("PLACEHOLDR1") },
  { id: "smartwatch-x",      name: "Health Smartwatch X",        tagline: "ECG, SpO₂ and sleep tracking",          priceFrom: "$129", image: smartwatch,  category: "electronics-gadgets", badge: "New",      url: AMZ("PLACEHOLDR2") },
  { id: "speaker-mini",      name: "Portable Bluetooth Speaker", tagline: "360° sound, IPX7 waterproof",           priceFrom: "$39",  image: speaker,     category: "electronics-gadgets",                       url: AMZ("PLACEHOLDR3") },
  { id: "action-cam-4k",     name: "4K Action Camera",           tagline: "Cinematic stabilisation, dive-ready",   priceFrom: "$199", image: camera,      category: "electronics-gadgets", badge: "Top Pick", url: AMZ("PLACEHOLDR4") },
  { id: "wireless-charger",  name: "Fast Wireless Charger",      tagline: "15W magnetic charging pad",             priceFrom: "$24",  image: charger,     category: "electronics-gadgets",                       url: AMZ("PLACEHOLDR5") },

  { id: "massage-gun",       name: "Deep Tissue Massage Gun",    tagline: "6 speeds, ultra-quiet motor",           priceFrom: "$89",  image: massageGun,  category: "health-wellness",     badge: "Hot",      url: AMZ("PLACEHOLDR6") },
  { id: "smart-scale",       name: "Smart Body Scale",           tagline: "13 body metrics, app sync",             priceFrom: "$34",  image: scale,       category: "health-wellness",                           url: AMZ("PLACEHOLDR7") },
  { id: "sonic-toothbrush",  name: "Sonic Toothbrush",           tagline: "5 modes, 30-day battery",               priceFrom: "$49",  image: toothbrush,  category: "health-wellness",     badge: "New",      url: AMZ("PLACEHOLDR8") },
  { id: "air-purifier",      name: "True HEPA Air Purifier",     tagline: "Filters 99.97% of particles",           priceFrom: "$119", image: purifier,    category: "health-wellness",                           url: AMZ("PLACEHOLDR9") },

  { id: "stand-mixer",       name: "Pastel Stand Mixer",         tagline: "10 speeds, 5L stainless bowl",          priceFrom: "$229", image: mixer,       category: "kitchen-essentials",  badge: "Top Pick", url: AMZ("PLACEHOLD10") },
  { id: "air-fryer",         name: "Smart Air Fryer XL",         tagline: "8 presets, oil-free crisping",          priceFrom: "$99",  image: airfryer,    category: "kitchen-essentials",  badge: "Hot",      url: AMZ("PLACEHOLD11") },
  { id: "espresso-machine",  name: "Barista Espresso Machine",   tagline: "15-bar pump, steam wand",               priceFrom: "$349", image: coffee,      category: "kitchen-essentials",                        url: AMZ("PLACEHOLD12") },

  { id: "cordless-vacuum",   name: "Cordless Stick Vacuum",      tagline: "60 min runtime, lightweight",           priceFrom: "$179", image: vacuum,      category: "home-living",         badge: "New",      url: AMZ("PLACEHOLD13") },
  { id: "aroma-diffuser",    name: "Wood Aroma Diffuser",        tagline: "Whisper-quiet, ambient light",          priceFrom: "$29",  image: diffuser,    category: "home-living",                               url: AMZ("PLACEHOLD14") },
  { id: "robot-vacuum",      name: "Self-Empty Robot Vacuum",    tagline: "LiDAR mapping, app control",            priceFrom: "$299", image: robotvac,    category: "home-living",         badge: "Top Pick", url: AMZ("PLACEHOLD15") },

  { id: "leather-watch",     name: "Minimalist Leather Watch",   tagline: "Sapphire crystal, slim case",           priceFrom: "$119", image: watchFashion, category: "fashion-style",       badge: "New",      url: AMZ("PLACEHOLD16") },
  { id: "leather-backpack",  name: "Everyday Leather Backpack",  tagline: "Full-grain, 18L capacity",              priceFrom: "$149", image: backpack,    category: "fashion-style",                             url: AMZ("PLACEHOLD17") },
  { id: "tortoise-shades",   name: "Tortoise Sunglasses",        tagline: "Polarised, UV400 protection",           priceFrom: "$49",  image: sunglasses,  category: "fashion-style",                             url: AMZ("PLACEHOLD18") },

  { id: "lounge-chair",      name: "Scandi Lounge Chair",        tagline: "Solid oak, boucle upholstery",          priceFrom: "$389", image: chair,       category: "furniture-decor",     badge: "Hot",      url: AMZ("PLACEHOLD19") },
  { id: "brass-lamp",        name: "Brass Bedside Lamp",         tagline: "Linen shade, dimmable",                 priceFrom: "$79",  image: lamp,        category: "furniture-decor",                           url: AMZ("PLACEHOLD20") },
  { id: "oak-desk",          name: "Solid Oak Writing Desk",     tagline: "Two drawers, cable management",         priceFrom: "$449", image: desk,        category: "furniture-decor",                           url: AMZ("PLACEHOLD21") },
  { id: "velvet-armchair",   name: "Velvet Accent Armchair",     tagline: "Plush plum, walnut legs",               priceFrom: "$329", image: accentChair, category: "furniture-decor",     badge: "Top Pick", url: AMZ("PLACEHOLD22") },
];

export const productsByCategory = (slug: string) =>
  products.filter((p) => p.category === slug);

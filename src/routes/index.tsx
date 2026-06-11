import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Star } from "lucide-react";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { blogs } from "@/data/blogs";
import { testimonials } from "@/data/testimonials";
import { ProductCard } from "@/components/site/ProductCard";
import { BlogCard } from "@/components/site/BlogCard";
import { Newsletter } from "@/components/site/Newsletter";
import { SectionLabel } from "@/components/site/SectionLabel";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BigCart — Sought-after products, curated for you" },
      {
        name: "description",
        content:
          "BigCart curates the most sought-after products from the global market — electronics, health, kitchen, home, fashion and furniture.",
      },
      {
        property: "og:title",
        content: "BigCart — Sought-after products, curated for you",
      },
      {
        property: "og:description",
        content:
          "Curated electronics, health, kitchen, home, fashion and furniture picks.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <PopularProducts />
      <Testimonials />
      <BlogsSection />
      <Newsletter />
    </>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <SectionLabel>Welcome to BigCart</SectionLabel>
        <h1 className="font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
          Discover <span className="text-brand">The Most</span>
          <br />
          Sought-after <span className="text-brand">Products.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground">
          Hand-picked from the global market. Electronics, health, kitchen,
          home, fashion and furniture — quietly chosen for the things that
          actually matter.
        </p>
      </div>
    </section>
  );
}

function PopularProducts() {
  const filters = [
    { slug: "all", name: "All" },
    ...categories.slice(0, 4).map((c) => ({ slug: c.slug, name: c.name.split(" ")[0] })),
  ];
  const [active, setActive] = useState("all");
  const items =
    active === "all"
      ? products.slice(0, 12)
      : products.filter((p) => p.category === active).slice(0, 12);

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <SectionLabel>Popular Picks</SectionLabel>
        <h2 className="font-display text-4xl leading-tight sm:text-5xl">
          Check Out The <span className="text-brand">Most Popular</span> Pieces.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
          The products our community keeps coming back to. Refreshed weekly.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f.slug}
            onClick={() => setActive(f.slug)}
            className={
              "rounded-full px-4 py-1.5 text-xs font-medium transition-colors " +
              (active === f.slug
                ? "bg-foreground text-background"
                : "border border-border bg-card text-foreground/70 hover:text-foreground")
            }
          >
            {f.name}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/products"
          className="inline-flex h-11 items-center rounded-full border border-border bg-card px-6 text-sm font-medium hover:bg-muted"
        >
          See all products
        </Link>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <SectionLabel>Testimonials</SectionLabel>
        <h2 className="font-display text-4xl leading-tight sm:text-5xl">
          See what our <span className="text-brand">customers</span> think
          <br className="hidden sm:block" />
          about <span className="text-brand">us</span> and our products.
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col gap-4 rounded-2xl border border-border/70 bg-card p-6"
          >
            <div className="flex gap-0.5 text-brand">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="text-sm leading-relaxed text-foreground/80">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-2 flex items-center gap-3 border-t border-border/60 pt-4">
              <img
                src={t.avatar}
                alt={t.name}
                loading="lazy"
                className="h-10 w-10 shrink-0 rounded-full object-cover"
              />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{t.name}</p>
                <p className="truncate text-xs text-muted-foreground">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function BlogsSection() {
  return (
    <section className="bg-surface-2/60 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
          <div>
            <SectionLabel>Journal</SectionLabel>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              Check out our <span className="text-brand">blogs</span>.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground">
              Buying guides, editor picks, and the stories behind the products
              we recommend.
            </p>
          </div>
          <Link
            to="/blog"
            className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-border bg-card px-4 py-2 text-xs font-medium hover:bg-muted sm:self-auto"
          >
            See all posts
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {blogs.slice(0, 3).map((b) => (
            <BlogCard key={b.slug} blog={b} />
          ))}
        </div>
      </div>
    </section>
  );
}

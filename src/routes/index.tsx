import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Star } from "lucide-react";
import { products, categories, blogs } from "@/lib/content";
import { testimonials } from "@/data/testimonials";
import { ProductCard } from "@/components/site/ProductCard";
import { CategoryCard } from "@/components/site/CategoryCard";
import { BlogCard } from "@/components/site/BlogCard";
import { Newsletter } from "@/components/site/Newsletter";
import { SectionLabel } from "@/components/site/SectionLabel";
import { Reveal, StaggerGroup, StaggerItem, motion, easeOut } from "@/components/site/Motion";
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
      <CategoriesSection />
      <Testimonials />
      <BlogsSection />
      <Newsletter />
    </>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          <SectionLabel>Welcome to BigCart</SectionLabel>
        </motion.div>
        <h1 className="font-display text-5xl sm:text-5xl lg:text-[62px] font-normal leading-[1.05]">
          <span className="block overflow-hidden pb-1 sm:inline-block">
            <motion.span
              className="inline-block"
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, ease: easeOut, delay: 0.15 }}
            >
              Discover
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-1 sm:inline-block">
            <motion.span
              className="inline-block text-brand"
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, ease: easeOut, delay: 0.23 }}
            >
              The
            </motion.span>
            &nbsp;
            <motion.span
              className="inline-block text-brand"
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, ease: easeOut, delay: 0.31 }}
            >
              Most
            </motion.span>
          </span>
          <br className="hidden sm:block" />
          <span className="block overflow-hidden pb-1 sm:inline-block">
            <motion.span
              className="inline-block"
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, ease: easeOut, delay: 0.39 }}
            >
              Sought-after
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-1 sm:inline-block">
            <motion.span
              className="inline-block text-brand"
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, ease: easeOut, delay: 0.47 }}
            >
              Products.
            </motion.span>
          </span>
        </h1>
        <motion.p
          className="mx-auto mt-5 max-w-xl text-base text-muted-foreground"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.55 }}
        >
          Hand-picked from the global market. Electronics, health, kitchen,
          home, fashion and furniture — quietly chosen for the things that
          actually matter.
        </motion.p>
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
    <section className="mx-auto max-w-7xl px-4 pt-16 pb-24 sm:px-6 lg:px-8">
      <Reveal className="flex flex-wrap justify-center gap-2">
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
      </Reveal>

      <StaggerGroup className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <StaggerItem key={p.id}>
            <ProductCard product={p} />
          </StaggerItem>
        ))}
      </StaggerGroup>

      <Reveal className="mt-10 text-center">
        <Link
          to="/products"
          className="inline-flex h-11 items-center rounded-full border border-border bg-card px-6 text-sm font-medium hover:bg-muted"
        >
          See all products
        </Link>
      </Reveal>
    </section>
  );
}

function CategoriesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-3xl text-center">
        <SectionLabel>Shop by Category</SectionLabel>
        <h2 className="font-display text-3xl leading-tight sm:text-5xl">
          Pick your <span className="text-brand">corner</span> of the shop.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
          From everyday essentials to the things you didn't know you needed.
        </p>
      </Reveal>
      <StaggerGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <StaggerItem key={c.slug}>
            <CategoryCard category={c} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-3xl text-center">
        <SectionLabel>Testimonials</SectionLabel>
        <h2 className="font-display text-3xl leading-tight sm:text-5xl">
          See what our <span className="text-brand">customers</span> think
          <br className="hidden sm:block" />
          about <span className="text-brand">us</span> and our products.
        </h2>
      </Reveal>

      <StaggerGroup className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <StaggerItem key={t.name}>
          <figure className="flex flex-col gap-4 rounded-2xl border border-border/70 bg-card p-6">
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
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}

function BlogsSection() {
  return (
    <section className="bg-surface-2/60 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
          <div>
            <SectionLabel>Journal</SectionLabel>
            <h2 className="font-display text-3xl leading-tight sm:text-5xl">
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
        </Reveal>

        <StaggerGroup className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {blogs.slice(0, 3).map((b) => (
            <StaggerItem key={b.slug}>
              <BlogCard blog={b} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

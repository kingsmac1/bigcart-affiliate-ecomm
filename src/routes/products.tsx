import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { ProductCard } from "@/components/site/ProductCard";
import { SectionLabel } from "@/components/site/SectionLabel";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "All Products — BigCart" },
      {
        name: "description",
        content:
          "Browse every BigCart pick — electronics, health, kitchen, home, fashion and furniture, all curated and updated weekly.",
      },
      { property: "og:title", content: "All Products — BigCart" },
      {
        property: "og:description",
        content: "Every BigCart pick in one place. Curated and updated weekly.",
      },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [active, setActive] = useState<string>("all");
  const visible =
    active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <SectionLabel>The shop</SectionLabel>
        <h1 className="font-display text-5xl leading-tight sm:text-6xl">
          Every <span className="text-brand">BigCart</span> pick, in one place.
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
          Tap any product to view it on Amazon. New picks added every week.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        <FilterPill active={active === "all"} onClick={() => setActive("all")}>
          All
        </FilterPill>
        {categories.map((c) => (
          <FilterPill
            key={c.slug}
            active={active === c.slug}
            onClick={() => setActive(c.slug)}
          >
            {c.name}
          </FilterPill>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {visible.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          to="/categories"
          className="text-sm font-medium text-brand hover:underline"
        >
          Or browse by category →
        </Link>
      </div>
    </div>
  );
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={
        "rounded-full px-4 py-1.5 text-xs font-medium transition-colors " +
        (active
          ? "bg-foreground text-background"
          : "border border-border bg-card text-foreground/70 hover:text-foreground")
      }
    >
      {children}
    </button>
  );
}

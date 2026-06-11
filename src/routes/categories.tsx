import { createFileRoute } from "@tanstack/react-router";
import { categories } from "@/data/categories";
import { CategoryCard } from "@/components/site/CategoryCard";
import { SectionLabel } from "@/components/site/SectionLabel";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Categories — BigCart" },
      {
        name: "description",
        content:
          "Browse BigCart by category — electronics, health & wellness, kitchen, home & living, fashion, furniture.",
      },
      { property: "og:title", content: "Categories — BigCart" },
      {
        property: "og:description",
        content: "Shop BigCart by category.",
      },
      { property: "og:url", content: "/categories" },
    ],
    links: [{ rel: "canonical", href: "/categories" }],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <SectionLabel>Categories</SectionLabel>
        <h1 className="font-display text-5xl leading-tight sm:text-6xl">
          Pick your <span className="text-brand">corner</span> of the shop.
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
          Every category is hand-curated. Tap one to see what we're loving right
          now.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <CategoryCard key={c.slug} category={c} />
        ))}
      </div>
    </div>
  );
}

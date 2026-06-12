import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getCategory, categories } from "@/data/categories";
import { productsByCategory } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";
import { SectionLabel } from "@/components/site/SectionLabel";
import { Newsletter } from "@/components/site/Newsletter";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData, params }) => {
    const title = loaderData
      ? `${loaderData.category.name} — BigCart`
      : "Category — BigCart";
    const description = loaderData
      ? loaderData.category.description
      : "Browse this BigCart category.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: `/category/${params.slug}` },
        { property: "og:image", content: loaderData?.category.image },
      ],
      links: [{ rel: "canonical", href: `/category/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              {
                "@type": "ListItem",
                position: 2,
                name: "Categories",
                item: "/categories",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: loaderData?.category.name ?? "Category",
                item: `/category/${params.slug}`,
              },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: CategoryNotFound,
  errorComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl">Something went wrong.</h1>
    </div>
  ),
  component: CategoryPage,
});

function CategoryNotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-display text-4xl">Category not found</h1>
      <Link to="/categories" className="mt-6 inline-block text-brand hover:underline">
        ← Browse all categories
      </Link>
    </div>
  );
}

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const items = productsByCategory(category.slug);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          to="/categories"
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          ← All categories
        </Link>

        <div className="mt-6 grid items-end gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionLabel>Category</SectionLabel>
            <h1 className="font-display text-5xl leading-tight sm:text-6xl">
              {category.name.split(" & ")[0]}{" "}
              {category.name.includes("&") && (
                <span className="text-brand">& {category.name.split(" & ")[1]}</span>
              )}
            </h1>
            <p className="mt-4 max-w-xl text-base text-muted-foreground">
              {category.description}
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl">
            <img
              src={category.image}
              alt={category.name}
              className="h-64 w-full object-cover lg:h-80"
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-3xl">
            Currently in <span className="text-brand">{category.name}</span>
          </h2>
          {items.length === 0 ? (
            <p className="mt-8 text-sm text-muted-foreground">
              New picks landing here soon.
            </p>
          ) : (
            <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {items.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>

        <div className="mt-20 border-t border-border pt-10">
          <h3 className="font-display text-2xl">More categories</h3>
          <div className="mt-6 flex flex-wrap gap-2">
            {categories
              .filter((c) => c.slug !== category.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  to="/category/$slug"
                  params={{ slug: c.slug }}
                  className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium hover:bg-muted"
                >
                  {c.name}
                </Link>
              ))}
          </div>
        </div>
      </div>
      <div className="mt-16">
        <Newsletter />
      </div>
    </>
  );
}
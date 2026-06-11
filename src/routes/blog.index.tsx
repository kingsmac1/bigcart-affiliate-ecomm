import { createFileRoute } from "@tanstack/react-router";
import { blogs } from "@/data/blogs";
import { BlogCard } from "@/components/site/BlogCard";
import { Newsletter } from "@/components/site/Newsletter";
import { SectionLabel } from "@/components/site/SectionLabel";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Journal — BigCart" },
      {
        name: "description",
        content:
          "Buying guides, editor picks, and the stories behind the products BigCart recommends.",
      },
      { property: "og:title", content: "Journal — BigCart" },
      {
        property: "og:description",
        content: "Buying guides and editor picks from the BigCart team.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <SectionLabel>The Journal</SectionLabel>
        <h1 className="font-display text-5xl leading-tight sm:text-6xl">
          Stories, guides &amp; <span className="text-brand">editor picks</span>.
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
          The thinking behind what we recommend — and how to get the most out
          of it.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((b) => (
          <BlogCard key={b.slug} blog={b} />
        ))}
      </div>
      <Newsletter />
    </div>
  );
}

import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { blogs, getBlog } from "@/lib/content";
import { BlogCard } from "@/components/site/BlogCard";
import { Newsletter } from "@/components/site/Newsletter";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getBlog(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    const title = loaderData ? `${loaderData.post.title} — BigCart` : "Post — BigCart";
    const description = loaderData?.post.excerpt ?? "";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
        { property: "og:image", content: loaderData?.post.cover },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: loaderData
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: loaderData.post.title,
                description: loaderData.post.excerpt,
                image: loaderData.post.cover,
                datePublished: loaderData.post.date,
                author: { "@type": "Organization", name: "BigCart" },
              }),
            },
          ]
        : [],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-display text-4xl">Post not found</h1>
      <Link to="/blog" className="mt-6 inline-block text-brand hover:underline">
        ← Back to all posts
      </Link>
    </div>
  ),
  errorComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl">Something went wrong.</h1>
    </div>
  ),
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  const related = blogs.filter((b) => b.slug !== post.slug).slice(0, 3);

  return (
    <article>
      <div className="mx-auto max-w-3xl px-4 pt-16 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          ← All posts
        </Link>
        <p className="mt-6 text-[10px] font-semibold uppercase tracking-widest text-brand">
          {post.category}
        </p>
        <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-base text-muted-foreground">{post.excerpt}</p>
        <p className="mt-6 text-xs text-muted-foreground">
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}{" "}
          · {post.readMinutes} min read · {post.author}
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-5xl px-4 sm:px-6 lg:px-8">
        <img
          src={post.cover}
          alt={post.title}
          className="aspect-[16/9] w-full rounded-3xl object-cover"
        />
      </div>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-6 text-base leading-relaxed text-foreground/85">
          {post.body.map((para: string, i: number) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>

      <section className="border-t border-border bg-surface-2/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl">
            Keep <span className="text-brand">reading</span>
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {related.map((b) => (
              <BlogCard key={b.slug} blog={b} />
            ))}
          </div>
        </div>
      </section>
      <Newsletter />
    </article>
  );
}

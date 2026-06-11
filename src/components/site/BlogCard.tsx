import { Link } from "@tanstack/react-router";
import type { Blog } from "@/data/blogs";

export function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: blog.slug }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card transition-all hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="aspect-[4/3] overflow-hidden bg-surface-2">
        <img
          src={blog.cover}
          alt={blog.title}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-brand">
          {blog.category}
        </span>
        <h3 className="font-display text-xl leading-tight text-foreground">
          {blog.title}
        </h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {blog.excerpt}
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          {new Date(blog.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}{" "}
          · {blog.readMinutes} min read
        </p>
      </div>
    </Link>
  );
}

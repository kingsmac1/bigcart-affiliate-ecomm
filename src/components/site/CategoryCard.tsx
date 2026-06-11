import { Link } from "@tanstack/react-router";
import type { Category } from "@/data/categories";

export function CategoryCard({
  category,
  variant = "default",
}: {
  category: Category;
  variant?: "default" | "accent";
}) {
  const accent = variant === "accent";
  return (
    <Link
      to="/category/$slug"
      params={{ slug: category.slug }}
      className={
        "group relative flex flex-col overflow-hidden rounded-3xl transition-all hover:-translate-y-0.5 " +
        (accent
          ? "bg-brand text-brand-foreground"
          : "bg-card border border-border/70")
      }
    >
      <div className="aspect-[4/3] overflow-hidden bg-surface-2">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-1 p-5">
        <h3
          className={
            "font-display text-2xl leading-tight " +
            (accent ? "text-brand-foreground" : "text-foreground")
          }
        >
          {category.name}
        </h3>
        <p
          className={
            "text-sm " +
            (accent ? "text-brand-foreground/80" : "text-muted-foreground")
          }
        >
          {category.tagline}
        </p>
      </div>
    </Link>
  );
}

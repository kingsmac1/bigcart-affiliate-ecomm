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
        "group relative flex flex-col overflow-hidden rounded-3xl transition-all hover:-translate-y-0.5 hover:bg-brand " +
        (accent
          ? "bg-brand text-brand-foreground"
          : "bg-card")
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
      <div className="flex flex-col gap-1 p-5 transition-colors">
        <h3
          className={
            "font-display text-[22px] leading-tight transition-colors group-hover:text-brand-foreground " +
            (accent ? "text-brand-foreground" : "text-foreground")
          }
        >
          {category.name}
        </h3>
        <p
          className={
            "text-sm transition-colors group-hover:text-brand-foreground/80 " +
            (accent ? "text-brand-foreground/80" : "text-muted-foreground")
          }
        >
          {category.tagline}
        </p>
      </div>
    </Link>
  );
}

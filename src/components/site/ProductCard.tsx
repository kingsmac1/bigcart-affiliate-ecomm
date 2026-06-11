import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card transition-all hover:-translate-y-0.5 hover:shadow-lg hover:border-brand hover:bg-brand"
    >
      {product.badge && (
        <span className="absolute left-3 top-3 z-10 inline-flex items-center rounded-md bg-brand px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-foreground">
          {product.badge}
        </span>
      )}
      <div className="aspect-square overflow-hidden bg-surface-2">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4 transition-colors">
        <h3 className="text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-brand-foreground">
          {product.name}
        </h3>
        <p className="line-clamp-1 text-xs text-muted-foreground transition-colors group-hover:text-brand-foreground/80">
          {product.tagline}
        </p>
      </div>
    </a>
  );
}

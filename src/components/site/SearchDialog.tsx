import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X, ArrowUpRight } from "lucide-react";
import { products } from "@/lib/content";
import { categories } from "@/lib/content";

export function SearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onOpenChange]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products.slice(0, 6);
    return products
      .filter((p) => {
        const cat = categories.find((c) => c.slug === p.category)?.name ?? "";
        return (
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          cat.toLowerCase().includes(q)
        );
      })
      .slice(0, 12);
  }, [query]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-[10vh] sm:pt-[14vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-foreground/40 backdrop-blur-md"
            onClick={() => onOpenChange(false)}
            aria-hidden
          />
          <motion.div
            initial={{ y: -16, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -12, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl bg-card shadow-2xl ring-1 ring-border/60"
            role="dialog"
            aria-label="Search products"
          >
            <div className="flex items-center gap-3 border-b border-border/60 px-5">
              <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, categories…"
                className="h-14 w-full bg-transparent text-base outline-none placeholder:text-muted-foreground"
              />
              <button
                onClick={() => onOpenChange(false)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
                aria-label="Close search"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-2">
              {results.length === 0 ? (
                <div className="px-4 py-12 text-center">
                  <p className="text-sm text-foreground">No results for "{query}"</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Try a different keyword or browse all products.
                  </p>
                </div>
              ) : (
                <>
                  <p className="px-3 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {query ? "Results" : "Popular picks"}
                  </p>
                  <ul className="flex flex-col">
                    {results.map((p) => {
                      const cat = categories.find((c) => c.slug === p.category)?.name;
                      return (
                        <li key={p.id}>
                          <a
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            onClick={() => onOpenChange(false)}
                            className="group flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-brand"
                          >
                            <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-surface-2">
                              <img
                                src={p.image}
                                alt={p.name}
                                loading="lazy"
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="truncate text-sm font-normal text-foreground group-hover:text-brand-foreground">
                                {p.name}
                              </p>
                              <p className="truncate text-xs text-muted-foreground group-hover:text-brand-foreground/80">
                                {cat ? `${cat} · ` : ""}
                                {p.tagline}
                              </p>
                            </div>
                            <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-foreground" />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
            </div>

            <div className="flex items-center justify-between gap-2 border-t border-border/60 bg-surface-2/40 px-4 py-2.5 text-[11px] text-muted-foreground">
              <span>
                <kbd className="rounded border border-border bg-card px-1.5 py-0.5 font-mono text-[10px]">
                  ESC
                </kbd>{" "}
                to close
              </span>
              <span>
                <kbd className="rounded border border-border bg-card px-1.5 py-0.5 font-mono text-[10px]">
                  ⌘K
                </kbd>{" "}
                to open
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
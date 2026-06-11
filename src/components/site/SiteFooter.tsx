import { Link } from "@tanstack/react-router";
import logoWhite from "@/assets/brand/Logo-white.png";
import { Instagram, Mail } from "lucide-react";
import { categories } from "@/data/categories";

export function SiteFooter() {
  return (
    <footer className="bg-[#1a1116] text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="min-w-0">
            <Link to="/" className="inline-flex items-center">
              <img
                src={logoWhite}
                alt="BigCart"
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
              BigCart brings you the most sought-after and genuinely useful
              products from the global market — curated, tested, and worth
              your time.
            </p>

            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a
                href="mailto:bigcartng@gmail.com"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white"
              >
                <Mail className="h-4 w-4" />
                bigcartng@gmail.com
              </a>
              <a
                href="https://instagram.com/bigcartuk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white"
              >
                <Instagram className="h-4 w-4" />
                @bigcartuk
              </a>
            </div>
          </div>

          <FooterCol
            title="Shop"
            links={[
              { to: "/products", label: "All Products" },
              { to: "/categories", label: "All Categories" },
              { to: "/blog", label: "Blog" },
            ]}
          />

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">
              Categories
            </h4>
            <ul className="space-y-2 text-sm">
              {categories.slice(0, 5).map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/category/$slug"
                    params={{ slug: c.slug }}
                    className="text-white/70 hover:text-white"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <FooterCol
            title="Company"
            links={[
              { to: "/", label: "Home" },
              { to: "/blog", label: "Journal" },
            ]}
          />
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} BigCart. All rights reserved.</p>
          <p>
            As an Amazon Associate, BigCart may earn from qualifying
            purchases.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { to: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">
        {title}
      </h4>
      <ul className="space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="text-white/70 hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

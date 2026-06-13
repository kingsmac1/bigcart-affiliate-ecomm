import type { Product } from "@/data/products";
import type { Category } from "@/data/categories";
import type { Blog } from "@/data/blogs";

const productModules = import.meta.glob("/content/products/*.json", { eager: true });
const categoryModules = import.meta.glob("/content/categories/*.json", { eager: true });
const blogModules = import.meta.glob("/content/blog/*.json", { eager: true });

export const products: Product[] = Object.values(productModules).map(
  (m: any) => m.default as Product
);

export const categories: Category[] = Object.values(categoryModules).map(
  (m: any) => m.default as Category
);

export const blogs: Blog[] = Object.values(blogModules).map(
  (m: any) => m.default as Blog
);

export const productsByCategory = (slug: string) =>
  products.filter((p) => p.category === slug);

export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);

export const getBlog = (slug: string) => blogs.find((b) => b.slug === slug);

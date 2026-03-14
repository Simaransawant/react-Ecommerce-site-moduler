import products from '@/data/products.json';
import { Product } from '@/types/product';

export async function getProducts(): Promise<Product[]> {
  return products as Product[];
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const product = (products as Product[]).find((item) => item.slug === slug);
  return product ?? null;
}

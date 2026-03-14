import { Metadata } from 'next';
import { Container } from '@/components/common/Container';
import { ProductGrid } from '@/components/product/ProductGrid';
import { FiltersSidebar } from '@/components/shop/FiltersSidebar';
import { SortDropdown } from '@/components/shop/SortDropdown';
import { getProducts } from '@/services/productService';

export const metadata: Metadata = {
  title: 'Shop | Moduler Commerce',
  description: 'Explore all products with filters, sorting, and pagination.',
  keywords: ['shop', 'products', 'filters'],
};

export default async function ShopPage({ searchParams }: { searchParams: Promise<Record<string, string>> }) {
  const params = await searchParams;
  const products = await getProducts();
  const search = (params.search ?? '').toLowerCase();
  const category = params.category;
  const sort = params.sort;
  const page = Number(params.page ?? '1');

  let filtered = products.filter((p) => p.name.toLowerCase().includes(search));
  if (category) filtered = filtered.filter((p) => p.category === category);
  if (sort === 'price-asc') filtered.sort((a, b) => (a.salePrice ?? a.price) - (b.salePrice ?? b.price));
  if (sort === 'price-desc') filtered.sort((a, b) => (b.salePrice ?? b.price) - (a.salePrice ?? a.price));
  if (sort === 'rating-desc') filtered.sort((a, b) => b.rating - a.rating);

  const perPage = 6;
  const paged = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <Container>
      <div className="py-10">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h1 className="text-3xl font-bold">Shop</h1>
          <SortDropdown />
        </div>
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <FiltersSidebar />
          <ProductGrid products={paged} />
        </div>
      </div>
    </Container>
  );
}

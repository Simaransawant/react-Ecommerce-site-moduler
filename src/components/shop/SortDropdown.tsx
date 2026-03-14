'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export const SortDropdown = () => {
  const params = useSearchParams();
  const router = useRouter();

  return (
    <select
      className="rounded-md border border-border bg-transparent p-2"
      aria-label="Sort products"
      value={params.get('sort') ?? ''}
      onChange={(e) => {
        const query = new URLSearchParams(params.toString());
        query.set('sort', e.target.value);
        router.push(`/shop?${query.toString()}`);
      }}
    >
      <option value="">Sort</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
      <option value="rating-desc">Top Rated</option>
    </select>
  );
};

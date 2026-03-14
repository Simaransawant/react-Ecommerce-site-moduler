'use client';

import { Container } from '@/components/common/Container';
import { ProductGrid } from '@/components/product/ProductGrid';
import { useWishlist } from '@/hooks/useWishlist';

export default function WishlistPage() {
  const { items } = useWishlist();
  return (
    <Container>
      <div className="py-10">
        <h1 className="mb-6 text-3xl font-bold">Wishlist</h1>
        {items.length === 0 ? <p className="text-textSecondary">No items saved yet.</p> : <ProductGrid products={items} />}
      </div>
    </Container>
  );
}

'use client';

import { Product } from '@/types/product';
import { formatPrice } from '@/utils/formatPrice';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';

export const ProductInfo = ({ product }: { product: Product }) => {
  const { add } = useCart();
  const { toggle } = useWishlist();

  return (
    <div>
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="mt-3 text-textSecondary">{product.description}</p>
      <p className="mt-4 text-xl font-semibold">{formatPrice(product.salePrice ?? product.price)}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button className="rounded-lg bg-primary px-4 py-2 text-white" onClick={() => add(product)}>Add to Cart</button>
        <button className="rounded-lg border px-4 py-2" onClick={() => toggle(product)}>Add to Wishlist</button>
        <button className="rounded-lg border px-4 py-2">Buy Now</button>
      </div>
      <ul className="mt-6 list-disc pl-6 text-sm text-textSecondary">
        {product.specifications.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
};

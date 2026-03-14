'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import { formatPrice } from '@/utils/formatPrice';
import { Badge } from '@/components/common/Badge';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';

export const ProductCard = ({ product }: { product: Product }) => {
  const { add } = useCart();
  const { toggle, items } = useWishlist();
  const wished = items.some((item) => item.id === product.id);

  return (
    <article className="card p-4">
      <Link href={`/product/${product.slug}`}>
        <Image src={product.image} alt={product.name} width={600} height={600} className="h-52 w-full rounded-lg object-cover" />
      </Link>
      <div className="mt-3 flex items-center justify-between">
        <h3 className="font-semibold">{product.name}</h3>
        {product.badge ? <Badge label={product.badge} /> : null}
      </div>
      <p className="mt-2 text-sm text-textSecondary">{product.category}</p>
      <p className="mt-2 font-semibold">{formatPrice(product.salePrice ?? product.price)}</p>
      <div className="mt-3 flex gap-2">
        <button className="rounded-lg border px-3 py-2 text-sm" onClick={() => toggle(product)}>{wished ? '♥' : '♡'}</button>
        <button className="flex-1 rounded-lg bg-primary px-4 py-2 text-sm text-white" onClick={() => add(product)}>Add to Cart</button>
      </div>
    </article>
  );
};

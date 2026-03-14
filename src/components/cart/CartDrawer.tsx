'use client';

import Link from 'next/link';
import { useCart } from '@/hooks/useCart';

export const CartDrawer = () => {
  const { items } = useCart();
  return (
    <div className="card p-4">
      <h3 className="font-semibold">Cart Drawer</h3>
      <p className="text-sm text-textSecondary">{items.length} items</p>
      <Link href="/cart" className="mt-2 inline-block text-primary">View cart</Link>
    </div>
  );
};

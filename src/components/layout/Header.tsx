'use client';

import Link from 'next/link';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';

export const Header = () => {
  const { items } = useCart();
  const { items: wishlist } = useWishlist();
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold">Moduler</Link>
        <nav className="hidden gap-5 md:flex">
          <Link href="/shop">Shop</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/checkout">Checkout</Link>
        </nav>
        <div className="flex gap-3 text-sm">
          <Link aria-label="Wishlist" href="/wishlist">♡ {wishlist.length}</Link>
          <Link aria-label="Cart" href="/cart">🛒 {items.reduce((acc, item) => acc + item.quantity, 0)}</Link>
        </div>
      </div>
    </header>
  );
};

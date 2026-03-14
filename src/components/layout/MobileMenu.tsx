import Link from 'next/link';

export const MobileMenu = () => (
  <nav className="grid gap-2 md:hidden">
    <Link href="/shop">Shop</Link>
    <Link href="/blog">Blog</Link>
    <Link href="/cart">Cart</Link>
  </nav>
);

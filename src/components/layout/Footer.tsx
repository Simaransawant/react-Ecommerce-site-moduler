import Link from 'next/link';
import { Container } from '@/components/common/Container';

export const Footer = () => (
  <footer className="mt-16 border-t border-border py-10">
    <Container>
      <div className="grid gap-8 md:grid-cols-4">
        <div><h4 className="font-semibold">About</h4><p className="text-sm text-textSecondary">Modern commerce for modern brands.</p></div>
        <div><h4 className="font-semibold">Quick Links</h4><div className="space-y-2 text-sm"><Link href="/shop">Shop</Link><br/><Link href="/blog">Blog</Link></div></div>
        <div><h4 className="font-semibold">Categories</h4><p className="text-sm text-textSecondary">Shoes · Accessories · Electronics</p></div>
        <div><h4 className="font-semibold">Newsletter</h4><input className="mt-2 w-full rounded-md border border-border bg-transparent p-2" placeholder="Email address"/></div>
      </div>
    </Container>
  </footer>
);

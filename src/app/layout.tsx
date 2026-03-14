import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartProvider } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';

export const metadata: Metadata = {
  title: 'Moduler Commerce',
  description: 'Modern scalable e-commerce platform built with Next.js.',
  keywords: ['ecommerce', 'nextjs', 'tailwind', 'shopping'],
  openGraph: {
    title: 'Moduler Commerce',
    description: 'Modern scalable e-commerce platform',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moduler Commerce',
    description: 'Modern scalable e-commerce platform',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <WishlistProvider>
          <CartProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </CartProvider>
        </WishlistProvider>
      </body>
    </html>
  );
}

import Link from 'next/link';
import { CartItem } from '@/types/cart';
import { formatPrice } from '@/utils/formatPrice';

export const CartSummary = ({ items }: { items: CartItem[] }) => {
  const total = items.reduce((sum, item) => sum + (item.product.salePrice ?? item.product.price) * item.quantity, 0);
  return (
    <aside className="card p-4">
      <h3 className="font-semibold">Order Summary</h3>
      <p className="mt-2 text-lg">{formatPrice(total)}</p>
      <Link href="/checkout" className="mt-3 inline-block rounded-lg bg-primary px-4 py-2 text-sm text-white">Proceed to Checkout</Link>
    </aside>
  );
};

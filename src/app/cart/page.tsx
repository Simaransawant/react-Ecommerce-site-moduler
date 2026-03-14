'use client';

import { Container } from '@/components/common/Container';
import { CartItem } from '@/components/cart/CartItem';
import { CartSummary } from '@/components/cart/CartSummary';
import { useCart } from '@/hooks/useCart';

export default function CartPage() {
  const { items } = useCart();

  return (
    <Container>
      <div className="grid gap-8 py-10 lg:grid-cols-[1fr_320px]">
        <section>
          <h1 className="mb-6 text-3xl font-bold">Your Cart</h1>
          {items.length === 0 ? (
            <p className="text-textSecondary">Your cart is empty.</p>
          ) : (
            <div className="space-y-4">{items.map((item) => <CartItem key={item.product.id} item={item} />)}</div>
          )}
        </section>
        <CartSummary items={items} />
      </div>
    </Container>
  );
}

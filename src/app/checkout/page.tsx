import { Metadata } from 'next';
import { Container } from '@/components/common/Container';

export const metadata: Metadata = {
  title: 'Checkout | Moduler Commerce',
  description: 'Complete shipping, billing, and payment details.',
  keywords: ['checkout', 'shipping', 'payment'],
};

export default function CheckoutPage() {
  return (
    <Container>
      <div className="py-10">
        <h1 className="text-3xl font-bold">Checkout</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <section className="card p-4"><h2 className="font-semibold">1. Shipping details</h2></section>
          <section className="card p-4"><h2 className="font-semibold">2. Billing details</h2></section>
          <section className="card p-4"><h2 className="font-semibold">3. Order summary</h2></section>
          <section className="card p-4"><h2 className="font-semibold">4. Payment section</h2></section>
        </div>
      </div>
    </Container>
  );
}

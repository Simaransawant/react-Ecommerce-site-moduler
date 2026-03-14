'use client';

import { CartItem as CartItemType } from '@/types/cart';
import { formatPrice } from '@/utils/formatPrice';
import { useCart } from '@/hooks/useCart';

export const CartItem = ({ item }: { item: CartItemType }) => {
  const { remove, updateQty } = useCart();
  return (
    <div className="card flex items-center justify-between p-4">
      <div>
        <h4 className="font-semibold">{item.product.name}</h4>
        <p className="text-sm text-textSecondary">{formatPrice(item.product.salePrice ?? item.product.price)}</p>
      </div>
      <div className="flex items-center gap-2">
        <input aria-label="Quantity" className="w-16 rounded border px-2 py-1" type="number" min={1} value={item.quantity} onChange={(e) => updateQty(item.product.id, Number(e.target.value))} />
        <button className="text-sm text-red-500" onClick={() => remove(item.product.id)}>Remove</button>
      </div>
    </div>
  );
};

'use client';

import { create } from 'zustand';
import { CartItem } from '@/types/cart';
import { Product } from '@/types/product';
import { addToCart, getCart, removeFromCart, updateCartQuantity } from '@/services/cartService';

interface CartState {
  items: CartItem[];
  hydrate: () => void;
  add: (product: Product) => void;
  remove: (productId: string) => void;
  updateQty: (productId: string, quantity: number) => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  hydrate: () => set({ items: getCart() }),
  add: (product) => set({ items: addToCart(product) }),
  remove: (productId) => set({ items: removeFromCart(productId) }),
  updateQty: (productId, quantity) => set({ items: updateCartQuantity(productId, quantity) }),
}));

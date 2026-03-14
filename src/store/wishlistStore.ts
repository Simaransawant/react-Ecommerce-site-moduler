'use client';

import { create } from 'zustand';
import { Product } from '@/types/product';

const KEY = 'moduler_wishlist';

interface WishlistState {
  items: Product[];
  hydrate: () => void;
  toggle: (product: Product) => void;
}

export const useWishlistStore = create<WishlistState>((set, get) => ({
  items: [],
  hydrate: () => {
    const raw = localStorage.getItem(KEY);
    set({ items: raw ? (JSON.parse(raw) as Product[]) : [] });
  },
  toggle: (product) => {
    const exists = get().items.some((item) => item.id === product.id);
    const items = exists
      ? get().items.filter((item) => item.id !== product.id)
      : [...get().items, product];
    localStorage.setItem(KEY, JSON.stringify(items));
    set({ items });
  },
}));

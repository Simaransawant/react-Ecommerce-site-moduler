'use client';

import { useEffect } from 'react';
import { useCartStore } from '@/store/cartStore';

export const useCart = () => {
  const store = useCartStore();

  useEffect(() => {
    store.hydrate();
  }, [store]);

  return store;
};

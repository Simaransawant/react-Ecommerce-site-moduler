'use client';

import { useEffect } from 'react';
import { useWishlistStore } from '@/store/wishlistStore';

export const useWishlist = () => {
  const store = useWishlistStore();

  useEffect(() => {
    store.hydrate();
  }, [store]);

  return store;
};

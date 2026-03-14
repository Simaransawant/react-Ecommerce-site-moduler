'use client';

import { createContext, ReactNode, useContext } from 'react';
import { useWishlist } from '@/hooks/useWishlist';

const WishlistContext = createContext<ReturnType<typeof useWishlist> | null>(null);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const wishlist = useWishlist();
  return <WishlistContext.Provider value={wishlist}>{children}</WishlistContext.Provider>;
};

export const useWishlistContext = () => {
  const context = useContext(WishlistContext);
  if (!context) throw new Error('useWishlistContext must be used inside WishlistProvider');
  return context;
};

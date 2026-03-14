import { CartItem } from '@/types/cart';
import { Product } from '@/types/product';

const CART_KEY = 'moduler_cart';

export const getCart = (): CartItem[] => {
  if (typeof window === 'undefined') return [];
  const raw = localStorage.getItem(CART_KEY);
  return raw ? (JSON.parse(raw) as CartItem[]) : [];
};

const saveCart = (items: CartItem[]): void => {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
};

export const addToCart = (product: Product, quantity = 1): CartItem[] => {
  const cart = getCart();
  const existing = cart.find((item) => item.product.id === product.id);
  if (existing) existing.quantity += quantity;
  else cart.push({ product, quantity });
  saveCart(cart);
  return cart;
};

export const removeFromCart = (productId: string): CartItem[] => {
  const updated = getCart().filter((item) => item.product.id !== productId);
  saveCart(updated);
  return updated;
};

export const updateCartQuantity = (productId: string, quantity: number): CartItem[] => {
  const updated = getCart().map((item) =>
    item.product.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item,
  );
  saveCart(updated);
  return updated;
};

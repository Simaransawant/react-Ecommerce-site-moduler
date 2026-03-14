import { addToCart, getCart, removeFromCart, updateCartQuantity } from '@/services/cartService';
import { Product } from '@/types/product';

const product: Product = {
  id: 'p1', slug: 'a', name: 'A', description: 'A', specifications: [], price: 10,
  category: 'Shoes', image: '/a.jpg', gallery: ['/a.jpg'], rating: 5, reviewsCount: 0,
  availability: true, reviews: []
};

describe('cartService', () => {
  beforeEach(() => localStorage.clear());

  it('adds and removes cart item', () => {
    addToCart(product);
    expect(getCart()).toHaveLength(1);
    removeFromCart(product.id);
    expect(getCart()).toHaveLength(0);
  });

  it('updates quantity', () => {
    addToCart(product);
    updateCartQuantity(product.id, 3);
    expect(getCart()[0].quantity).toBe(3);
  });
});

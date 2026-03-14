import { render, screen } from '@testing-library/react';
import { ProductCard } from '@/components/product/ProductCard';
import { Product } from '@/types/product';

jest.mock('next/image', () => (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} alt={props.alt} />);
jest.mock('@/hooks/useCart', () => ({ useCart: () => ({ add: jest.fn() }) }));
jest.mock('@/hooks/useWishlist', () => ({ useWishlist: () => ({ toggle: jest.fn(), items: [] }) }));

const product: Product = {
  id: '1', slug: 'slug', name: 'Demo Product', description: 'desc', specifications: [],
  price: 20, category: 'Shoes', image: '/x.jpg', gallery: ['/x.jpg'], rating: 4.5,
  reviewsCount: 1, availability: true, reviews: []
};

describe('ProductCard', () => {
  it('renders product name', () => {
    render(<ProductCard product={product} />);
    expect(screen.getByText('Demo Product')).toBeInTheDocument();
  });
});

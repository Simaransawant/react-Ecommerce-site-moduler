export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  specifications: string[];
  price: number;
  salePrice?: number;
  category: string;
  image: string;
  gallery: string[];
  rating: number;
  reviewsCount: number;
  availability: boolean;
  badge?: string;
  sizes?: string[];
  colors?: string[];
  reviews: Review[];
}

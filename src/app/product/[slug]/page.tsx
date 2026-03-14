import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '@/components/common/Container';
import { ProductGallery } from '@/components/product/ProductGallery';
import { ProductInfo } from '@/components/product/ProductInfo';
import { ReviewSection } from '@/components/product/ReviewSection';
import { getProductBySlug, getProducts } from '@/services/productService';

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: 'Product not found' };
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/product/${product.slug}`;
  return {
    title: `${product.name} | Moduler Commerce`,
    description: product.description,
    keywords: [product.name, product.category, 'buy online'],
    alternates: { canonical: url },
    openGraph: { title: product.name, description: product.description, url, images: [product.image] },
    twitter: { card: 'summary_large_image', title: product.name, description: product.description },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  return (
    <Container>
      <div className="grid gap-8 py-10 lg:grid-cols-2">
        <ProductGallery images={product.gallery} name={product.name} />
        <ProductInfo product={product} />
      </div>
      <ReviewSection reviews={product.reviews} />
    </Container>
  );
}

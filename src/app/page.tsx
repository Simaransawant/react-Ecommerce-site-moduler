import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { SectionTitle } from '@/components/common/SectionTitle';
import { ProductGrid } from '@/components/product/ProductGrid';
import { BlogList } from '@/components/blog/BlogList';
import { getProducts } from '@/services/productService';
import { getBlogs } from '@/services/blogService';

export default async function HomePage() {
  const products = await getProducts();
  const blogs = await getBlogs();

  return (
    <Container>
      <section className="py-12">
        <h1 className="text-4xl font-bold">Modern essentials for everyday life.</h1>
        <p className="mt-3 max-w-2xl text-textSecondary">Discover premium picks in fashion, accessories, and electronics.</p>
        <Link href="/shop" className="mt-6 inline-block rounded-lg bg-primary px-5 py-3 text-white">Shop now</Link>
      </section>
      <section className="py-10">
        <SectionTitle title="Featured Products" subtitle="Hand-picked for you" />
        <ProductGrid products={products.slice(0, 3)} />
      </section>
      <section className="py-10">
        <SectionTitle title="Latest Blogs" />
        <BlogList posts={blogs} />
      </section>
      <section className="card my-10 p-8 text-center">
        <h3 className="text-2xl font-semibold">Join our newsletter</h3>
        <input className="mx-auto mt-4 block w-full max-w-md rounded-md border border-border p-2" placeholder="Your email" />
      </section>
    </Container>
  );
}

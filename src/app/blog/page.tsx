import { Metadata } from 'next';
import { Container } from '@/components/common/Container';
import { BlogList } from '@/components/blog/BlogList';
import { getBlogs } from '@/services/blogService';

export const metadata: Metadata = {
  title: 'Blog | Moduler Commerce',
  description: 'Trends, product guides, and ecommerce inspiration.',
  keywords: ['blog', 'fashion', 'guides'],
};

export default async function BlogPage() {
  const posts = await getBlogs();
  return (
    <Container>
      <div className="py-10">
        <h1 className="mb-6 text-3xl font-bold">Blog</h1>
        <BlogList posts={posts} />
      </div>
    </Container>
  );
}

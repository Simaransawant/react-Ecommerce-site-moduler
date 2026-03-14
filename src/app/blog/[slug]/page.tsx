import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Container } from '@/components/common/Container';
import { getBlogBySlug, getBlogs } from '@/services/blogService';

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) return { title: 'Blog not found' };
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${blog.slug}`;
  return {
    title: `${blog.title} | Moduler Commerce`,
    description: blog.excerpt,
    keywords: [blog.category, blog.author, blog.title],
    alternates: { canonical: url },
    openGraph: { title: blog.title, description: blog.excerpt, url, images: [blog.coverImage] },
    twitter: { card: 'summary_large_image', title: blog.title, description: blog.excerpt },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post) notFound();

  return (
    <Container>
      <article className="mx-auto max-w-3xl py-10">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="mt-2 text-sm text-textSecondary">By {post.author} · {post.date}</p>
        <Image src={post.coverImage} alt={post.title} width={1200} height={700} className="mt-6 h-80 w-full rounded-lg object-cover" />
        <p className="mt-6 leading-7 text-textSecondary">{post.content}</p>
      </article>
    </Container>
  );
}

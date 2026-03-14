import blogs from '@/data/blogs.json';
import { BlogPost } from '@/types/blog';

export async function getBlogs(): Promise<BlogPost[]> {
  return blogs as BlogPost[];
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const blog = (blogs as BlogPost[]).find((item) => item.slug === slug);
  return blog ?? null;
}

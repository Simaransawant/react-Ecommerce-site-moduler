import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/types/blog';

export const BlogCard = ({ post }: { post: BlogPost }) => (
  <article className="card overflow-hidden">
    <Image src={post.coverImage} alt={post.title} width={800} height={500} className="h-48 w-full object-cover" />
    <div className="p-4">
      <p className="text-xs text-textSecondary">{post.category} · {post.date}</p>
      <h3 className="mt-1 text-lg font-semibold">{post.title}</h3>
      <p className="mt-2 text-sm text-textSecondary">{post.excerpt}</p>
      <Link href={`/blog/${post.slug}`} className="mt-3 inline-block text-primary">Read more</Link>
    </div>
  </article>
);

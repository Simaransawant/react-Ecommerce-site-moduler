import { BlogPost } from '@/types/blog';
import { BlogCard } from './BlogCard';

export const BlogList = ({ posts }: { posts: BlogPost[] }) => (
  <div className="grid gap-6 md:grid-cols-2">
    {posts.map((post) => <BlogCard key={post.id} post={post} />)}
  </div>
);

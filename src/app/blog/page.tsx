import { getAllPosts, getPostBySlug } from '@/lib/blog/posts';
import { BlogCard } from '@/components/blog/BlogCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Rafael Zendron',
  description: 'Artigos sobre desenvolvimento, tecnologia e projetos',
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-100">
          Blog
        </h1>
        <p className="text-zinc-400 text-lg">
          Artigos, tutoriais e insights sobre desenvolvimento e tecnologia
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-zinc-500 text-lg">
            Nenhum post publicado ainda.
          </p>
        </div>
      )}
    </main>
  );
}
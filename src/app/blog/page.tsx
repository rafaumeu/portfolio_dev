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
    <main className="blog-page">
      <header className="blog-page-header">
        <h1 className="blog-page-title">Blog</h1>
        <p className="blog-page-subtitle">
          Artigos, tutoriais e insights sobre desenvolvimento e tecnologia
        </p>
      </header>

      <div className="blog-grid">
        {posts.map(post => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {posts.length === 0 && (
        <div className="blog-empty">
          <div className="blog-empty-icon">📝</div>
          <p>Nenhum post publicado ainda.</p>
        </div>
      )}
    </main>
  );
}
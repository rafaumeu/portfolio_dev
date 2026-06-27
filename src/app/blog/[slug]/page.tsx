import { getPostBySlug, getAllPosts } from '@/lib/blog/posts';
import { notFound } from 'next/navigation';
import { MDXRenderer } from '@/components/blog/MDXRenderer';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post não encontrado',
    };
  }

  return {
    title: `${post.title} | Rafael Zendron`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 md:px-8 max-w-4xl mx-auto">
      <article>
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 text-sm font-medium bg-zinc-800 text-zinc-300 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-100">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-zinc-500">
            <time dateTime={post.date}>{formattedDate}</time>
            <span>·</span>
            <span>{post.readingTime} min leitura</span>
          </div>
        </header>

        <div className="prose prose-invert prose-zinc max-w-none">
          <MDXRenderer content={post.content} />
        </div>
      </article>

      <div className="mt-16 pt-8 border-t border-zinc-800">
        <a
          href="/blog"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-200 transition-colors"
        >
          ← Voltar para o blog
        </a>
      </div>
    </main>
  );
}
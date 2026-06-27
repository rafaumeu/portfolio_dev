import { BlogPost } from '@/lib/blog/types';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString(post.lang || 'pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <a
      href={`/blog/${post.slug}`}
      className="group block bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-zinc-600 transition-all duration-300"
    >
      <div className="flex flex-wrap gap-2 mb-3">
        {post.tags.map(tag => (
          <span
            key={tag}
            className="px-2 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-zinc-200 mb-2">
        {post.title}
      </h3>
      
      <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
        {post.excerpt}
      </p>
      
      <div className="flex items-center justify-between text-xs text-zinc-500">
        <time dateTime={post.date}>{formattedDate}</time>
        <span>{post.readingTime} min leitura</span>
      </div>
    </a>
  );
}
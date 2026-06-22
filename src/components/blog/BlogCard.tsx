import { BlogPost } from '@/lib/blog/types';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <a href={`/blog/${post.slug}`} className="blog-card">
      <div className="blog-card-cover">
        <span className="text-5xl">📚</span>
      </div>
      
      <div className="blog-card-content">
        <div className="blog-card-meta">
          <time dateTime={post.date}>{formattedDate}</time>
          <span>•</span>
          <span>{post.readingTime} min leitura</span>
        </div>
        
        <h3 className="blog-card-title">{post.title}</h3>
        
        <p className="blog-card-excerpt">{post.excerpt}</p>
        
        <div className="blog-card-footer">
          {post.tags.slice(0, 2).map(tag => (
            <span key={tag} className="blog-card-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
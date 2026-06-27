import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost, BlogPostFrontmatter } from './types';

const CONTENT_DIR = path.join(process.cwd(), 'content/blog');

export function getAllPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  if (!fs.existsSync(CONTENT_DIR)) {
    return posts;
  }

  const files = fs.readdirSync(CONTENT_DIR).filter(file => 
    file.endsWith('.mdx') || file.endsWith('.md')
  );

  for (const file of files) {
    const filePath = path.join(CONTENT_DIR, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const frontmatter = data as BlogPostFrontmatter;
    const slug = file.replace(/\.(mdx|md)$/, '');

    const readingTime = calculateReadingTime(content);

    posts.push({
      slug,
      title: frontmatter.title,
      date: frontmatter.date,
      excerpt: frontmatter.excerpt,
      tags: frontmatter.tags || [],
      cover: frontmatter.cover,
      lang: frontmatter.lang || 'pt-BR',
      readingTime,
      content,
    });
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  for (const ext of ['.mdx', '.md']) {
    const filePath = path.join(CONTENT_DIR, `${slug}${ext}`);
    if (!fs.existsSync(filePath)) continue;

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const frontmatter = data as BlogPostFrontmatter;
    const readingTime = calculateReadingTime(content);

    return {
      slug,
      title: frontmatter.title,
      date: frontmatter.date,
      excerpt: frontmatter.excerpt,
      tags: frontmatter.tags || [],
      cover: frontmatter.cover,
      lang: frontmatter.lang || 'pt-BR',
      readingTime,
      content,
    };
  }

  return null;
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter(post => post.tags.includes(tag));
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set<string>();

  posts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag));
  });

  return Array.from(tags).sort();
}

export function getRelatedPosts(currentSlug: string, tags: string[], limit = 3): BlogPost[] {
  const posts = getAllPosts().filter(post => post.slug !== currentSlug);

  const scored = posts.map(post => {
    const commonTags = post.tags.filter(tag => tags.includes(tag));
    return {
      post,
      score: commonTags.length,
    };
  });

  return scored
    .sort((a, b) => b.score - a.score || new Date(b.post.date).getTime() - new Date(a.post.date).getTime())
    .slice(0, limit)
    .map(item => item.post);
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
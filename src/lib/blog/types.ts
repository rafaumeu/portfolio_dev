export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  cover?: string;
  lang: 'pt-BR' | 'en-US';
  readingTime: number;
  content: string;
}

export interface BlogPostFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  cover?: string;
  lang?: 'pt-BR' | 'en-US';
}
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import 'highlight.js/styles/github-dark.css';

export function MDXRenderer({ content }: { content: string }) {
  return (
    <article className="prose prose-invert prose-zinc max-w-none">
      <MDXRemote
        source={content}
        options={{
          mdxOptions: {
            rehypePlugins: [rehypeHighlight],
            remarkPlugins: [remarkGfm],
          },
        }}
      />
    </article>
  );
}
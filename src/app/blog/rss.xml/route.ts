import { getAllPosts } from '@/lib/blog/posts';

const SITE_URL = 'https://portfoliodev-blush-pi.vercel.app';

export const dynamic = 'force-static';

export async function GET() {
  const posts = getAllPosts();
  
  const rssItems = posts
    .map(post => `
      <item>
        <title><![CDATA[${post.title}]]></title>
        <link>${SITE_URL}/blog/${post.slug}</link>
        <description><![CDATA[${post.excerpt}]]></description>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
        <category>${post.tags.join(',')}</category>
      </item>
    `)
    .join('');

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[Blog | Rafael Zendron]]></title>
    <description><![CDATA[Artigos sobre desenvolvimento, tecnologia e projetos]]></description>
    <link>${SITE_URL}/blog</link>
    <atom:link href="${SITE_URL}/blog/rss.xml" rel="self" type="application/rss+xml"/>
    <language>pt-BR</language>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
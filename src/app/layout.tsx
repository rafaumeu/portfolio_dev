import type { Metadata } from 'next';
import { Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rafael Dias Zendron — Software Engineer',
  description:
    'Software Engineer specializing in Clean Architecture, DDD, and modern web technologies. Building scalable applications with React, Next.js, TypeScript, and Node.js.',
  keywords: [
    'Software Engineer',
    'Clean Architecture',
    'DDD',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Rafael Dias Zendron',
  ],
  authors: [{ name: 'Rafael Dias Zendron' }],
  openGraph: {
    title: 'Rafael Dias Zendron — Software Engineer',
    description:
      'Software Engineer specializing in Clean Architecture, DDD, and modern web technologies.',
    url: 'https://rafaeldiaszendron.dev',
    siteName: 'Rafael Dias Zendron Portfolio',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rafael Dias Zendron — Software Engineer',
    description:
      'Software Engineer specializing in Clean Architecture, DDD, and modern web technologies.',
    creator: '@rafaumeu',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rafael Dias Zendron',
  url: 'https://rafaeldiaszendron.dev',
  jobTitle: 'Software Engineer',
  description:
    'Software Engineer specializing in Clean Architecture, DDD, and modern web technologies.',
  sameAs: [
    'https://github.com/rafaumeu',
    'https://linkedin.com/in/rafaeldiaszendron',
    'https://twitter.com/rafaumeu',
  ],
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Clean Architecture',
    'DDD',
    'PostgreSQL',
    'Docker',
    'Fastify',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${ibmPlexMono.variable}`}>
      <head>
        <style>{`:root { --font-geist: 'Inter', sans-serif; }`}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

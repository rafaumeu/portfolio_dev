import type { Metadata, Viewport } from 'next';
import { Inter, IBM_Plex_Mono } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
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
  alternates: {
    canonical: 'https://portfoliodev-blush-pi.vercel.app',
  },
  openGraph: {
    title: 'Rafael Dias Zendron — Software Engineer',
    description:
      'Software Engineer specializing in Clean Architecture, DDD, and modern web technologies.',
    url: 'https://portfoliodev-blush-pi.vercel.app',
    siteName: 'Rafael Dias Zendron Portfolio',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Rafael Dias Zendron Portfolio' }],
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
  verification: {
    google: 'Gjf-et8w9qeR3KFym-bLry4j9i_dlo6_erpc0OYuWdk',
  },
};

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rafael Dias Zendron',
  url: 'https://portfoliodev-blush-pi.vercel.app',
  jobTitle: 'Software Engineer',
  email: 'rafael.zendron22@gmail.com',
  description:
    'Software Engineer specializing in Clean Architecture, DDD, and modern web technologies.',
  sameAs: [
    'https://github.com/rafaumeu',
    'https://www.linkedin.com/in/rafael-dias-zendron-528290132/',
    'https://br.fiverr.com/rafaelzendron',
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
    <html lang="pt-BR" className={`${inter.variable} ${ibmPlexMono.variable} ${GeistSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="me" href="https://github.com/rafaumeu" />
        <link rel="me" href="https://www.linkedin.com/in/rafael-dias-zendron-528290132/" />
        <link rel="me" href="https://br.fiverr.com/rafaelzendron" />
        <link rel="me" href="https://twitter.com/rafaumeu" />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}

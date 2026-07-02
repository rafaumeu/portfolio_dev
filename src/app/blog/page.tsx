import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Rafael Zendron',
  description: 'Artigos sobre desenvolvimento, tecnologia e projetos',
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="mb-6 text-6xl">🚧</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-100">
          Blog em Construcao
        </h1>
        <p className="text-zinc-400 text-lg mb-2">
          Estou preparando artigos sobre desenvolvimento, TypeScript, DDD e Clean Architecture.
        </p>
        <p className="text-zinc-500 text-sm">
          Volte em breve para conferir o primeiro post.
        </p>
        <a
          href="/"
          className="inline-block mt-8 px-6 py-3 bg-zinc-800 text-zinc-200 rounded-lg hover:bg-zinc-700 transition-colors text-sm font-medium"
        >
          Voltar ao Portfolio
        </a>
      </div>
    </main>
  );
}

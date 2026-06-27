import "@/app/globals.css";
import "@/styles/performance.css";

export const metadata = {
	metadataBase: new URL("https://rafaumeu.github.io"),
	title: "Rafael Zendron | Full Stack Developer",
	description: "Full Stack Developer focused on Next.js, TypeScript, and creating scalable web applications. Open source contributor with 20+ PRs to Hermes Agent.",
	keywords: ["Rafael Zendron", "Full Stack Developer", "Next.js", "TypeScript", "Open Source", "Web Development"],
	authors: [{ name: "Rafael Zendron" }],
	creator: "Rafael Zendron",
	publisher: "Rafael Zendron",
	robots: "index, follow",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://rafaumeu.github.io/",
		siteName: "Rafael Zendron Portfolio",
		title: "Rafael Zendron | Full Stack Developer",
		description: "Full Stack Developer focused on Next.js, TypeScript, and creating scalable web applications.",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Rafael Zendron Portfolio",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Rafael Zendron | Full Stack Developer",
		description: "Full Stack Developer focused on Next.js, TypeScript, and creating scalable web applications.",
		images: ["/og-image.png"],
		creator: "@rafaumeu",
	},
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
	manifest: "/manifest.json",
	alternates: {
		canonical: "https://rafaumeu.github.io/",
		languages: {
			en: "https://rafaumeu.github.io/en",
			pt: "https://rafaumeu.github.io/pt",
		},
	},

	category: "technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" data-theme="dark">
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Person",
							name: "Rafael Zendron",
							email: "rafael.zendron22@gmail.com",
							github: "https://github.com/rafaumeu",
							linkedIn: "https://linkedin.com/in/rafaelzendron",
							fiverr: "https://fiverr.com/rafaelz",
							jobTitle: "Full Stack Developer",
							worksFor: {
								"@type": "Organization",
								name: "Freelance",
							},
							sameAs: [
								"https://github.com/rafaumeu",
								"https://linkedin.com/in/rafaelzendron",
								"https://fiverr.com/rafaelz",
							],
							knowsAbout: ["Next.js", "TypeScript", "React", "PostgreSQL", "Supabase", "Open Source"],
						}),
					}}
				/>
			</head>
			<body>{children}</body>
		</html>
	);
}
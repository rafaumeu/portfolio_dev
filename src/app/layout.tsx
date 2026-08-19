import "@/app/globals.css";
import "@/styles/performance.css";

const SITE_URL = "https://portfoliodev-blush-pi.vercel.app";

export const metadata = {
	metadataBase: new URL(SITE_URL),
	title: "Rafael Zendron | Full Stack Developer",
	description: "Full Stack Developer focused on Next.js, TypeScript, and scalable web applications. 100+ merged PRs across 10+ open source projects including Piano LouvorJA and OmniRoute.",
	keywords: ["Rafael Zendron", "Full Stack Developer", "Next.js", "TypeScript", "React", "Open Source", "Web Development"],
	authors: [{ name: "Rafael Zendron" }],
	creator: "Rafael Zendron",
	publisher: "Rafael Zendron",
	robots: "index, follow",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: SITE_URL,
		siteName: "Rafael Zendron Portfolio",
		title: "Rafael Zendron | Full Stack Developer",
		description: "Full Stack Developer focused on Next.js, TypeScript, and scalable web applications. 100+ merged PRs across 10+ open source projects.",
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
		description: "Full Stack Developer focused on Next.js, TypeScript, and scalable web applications. 100+ merged PRs across 10+ open source projects.",
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
		canonical: SITE_URL,
		languages: {
			"en-US": SITE_URL,
			"pt-BR": SITE_URL,
			"es-ES": SITE_URL,
		},
	},
	verification: {
		google: "your-google-verification-code",
		yandex: "your-yandex-verification-code",
	},
	category: "technology",
	other: {
		"script:ld+json": [
			{
				"@context": "https://schema.org",
				"@type": "Person",
				name: "Rafael Zendron",
				email: "rafael.zendron22@gmail.com",
				url: SITE_URL,
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
			},
		],
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" data-theme="dark">
			<body>{children}</body>
		</html>
	);
}
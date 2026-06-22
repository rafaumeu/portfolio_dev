import About from "@/components/About";
import Analytics from "@/components/Analytics";
import Certifications from "@/components/Certifications";
import ClientProviders from "@/components/ClientProviders";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MotionWrapper from "@/components/MotionWrapper";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import SkipToContent from "@/components/SkipToContent";
import "@/styles/skip-content.css";

export default function Home() {
	return (
		<ClientProviders>
			<SkipToContent />
			<Nav />
			<main id="main-content" tabIndex={-1}>
				<MotionWrapper>
					<Hero />
				</MotionWrapper>
				<MotionWrapper delay={0.1}>
					<Projects />
				</MotionWrapper>
				<MotionWrapper delay={0.2}>
					<About />
				</MotionWrapper>
				<MotionWrapper delay={0.2}>
					<Certifications />
				</MotionWrapper>
				<MotionWrapper delay={0.3}>
					<Contact />
				</MotionWrapper>
			</main>
			<Footer />
			<Analytics />
		</ClientProviders>
	);
}

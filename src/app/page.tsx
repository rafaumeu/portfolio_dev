import ClientProviders from '@/components/ClientProviders';
import MotionWrapper from '@/components/MotionWrapper';
import Analytics from '@/components/Analytics';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Certifications from '@/components/Certifications';

export default function Home() {
  return (
    <ClientProviders>
      <Nav />
      <MotionWrapper><Hero /></MotionWrapper>
      <MotionWrapper delay={0.1}><Projects /></MotionWrapper>
      <MotionWrapper delay={0.2}><About /></MotionWrapper>
      <MotionWrapper delay={0.2}><Certifications /></MotionWrapper>
      <MotionWrapper delay={0.3}><Contact /></MotionWrapper>
      <Footer />
      <Analytics />
    </ClientProviders>
  );
}

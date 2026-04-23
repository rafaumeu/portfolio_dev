import '@/styles/hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* TODO: Add photo */}
      <div className="hero-photo" role="img" aria-label="Profile photo placeholder" />
      <div className="hero-badge">
        <span className="hero-badge-dot" />
        Open to Work
      </div>
      <h1 className="hero-headline">
        Software Engineer specializing in Clean Architecture &amp; DDD
      </h1>
      <p className="hero-subtitle">
        Building scalable applications with modern technologies. Passionate about
        Domain-Driven Design, testing, and clean code.
      </p>
      <div className="hero-ctas">
        <a href="#projects" className="cta-primary">
          View Projects
        </a>
        <a href="#contact" className="cta-secondary">
          Contact Me
        </a>
      </div>
    </section>
  );
}

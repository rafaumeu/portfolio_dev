export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__photo">RM</div>
      <div className="hero__badge">
        <span className="hero__badge-dot" />
        Open to Work
      </div>
      <h1 className="hero__headline">
        Software Engineer specializing in Clean Architecture &amp; DDD
      </h1>
      <p className="hero__subtitle">
        Building scalable, maintainable systems with modern technologies.
        Passionate about Domain-Driven Design, testing, and clean code.
      </p>
      <div className="hero__actions">
        <a href="#projects" className="hero__btn-primary">View Projects</a>
        <a href="#contact" className="hero__btn-outline">Contact Me</a>
      </div>
    </section>
  );
}
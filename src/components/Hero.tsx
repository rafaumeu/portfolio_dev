'use client';

import { useTranslation } from '@/i18n';
import '@/styles/hero.css';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero" id="home">
      {/* TODO: Add photo */}
      <div className="hero-photo" role="img" aria-label="Profile photo placeholder" />
      <div className="hero-badge">
        <span className="hero-badge-dot" />
        {t('hero.badge')}
      </div>
      <h1 className="hero-headline">
        {t('hero.headline')}
      </h1>
      <p className="hero-subtitle">
        {t('hero.subtitle')}
      </p>
      <div className="hero-ctas">
        <a href="#projects" className="cta-primary">
          {t('hero.ctaProjects')}
        </a>
        <a href="#contact" className="cta-secondary">
          {t('hero.ctaContact')}
        </a>
      </div>
    </section>
  );
}

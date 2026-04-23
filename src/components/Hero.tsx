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
        <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="cta-primary" type="button">
          {t('hero.ctaProjects')}
        </button>
        <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="cta-secondary" type="button">
          {t('hero.ctaContact')}
        </button>
      </div>
    </section>
  );
}

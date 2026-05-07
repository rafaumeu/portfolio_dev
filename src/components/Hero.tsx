'use client';

import Image from 'next/image';
import { useTranslation } from '@/i18n';
import '@/styles/hero.css';

const STATS = [
  { key: 'repos', value: '28+', icon: '📦' },
  { key: 'ci', value: '50+', icon: '✅' },
  { key: 'signed', value: '100%', icon: '🔐' },
  { key: 'experience', value: '2+', icon: '⏱️' },
];

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero" id="home">
      <div className="hero-photo-wrapper">
        <Image
          src="/images/profile.jpg"
          alt="Rafael Dias Zendron"
          width={160}
          height={160}
          className="hero-photo"
          priority
        />
      </div>
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
      <div className="hero-stats">
        {STATS.map((stat) => (
          <div key={stat.key} className="hero-stat">
            <span className="hero-stat-value">{stat.value}</span>
            <span className="hero-stat-label">{t(`hero.stats.${stat.key}`)}</span>
          </div>
        ))}
      </div>
      <div className="hero-ctas">
        <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="cta-primary" type="button">
          {t('hero.ctaProjects')}
        </button>
        <a
          href="https://br.fiverr.com/rafaelzendron"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-fiverr"
        >
          {t('hero.ctaFiverr')}
        </a>
        <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="cta-secondary" type="button">
          {t('hero.ctaContact')}
        </button>
      </div>
    </section>
  );
}
